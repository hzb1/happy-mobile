const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

// 获取x和y
const getGesturePointFromEvent = (ev) => {
  const point = {}

  if (ev.targetTouches) {
    point.x = ev.targetTouches[0].clientX
    point.y = ev.targetTouches[0].clientY
  } else {
    // 鼠标事件或指针事件
    point.x = ev.clientX
    point.y = ev.clientY
  }

  return point
}

const defaultOption = {
  swipeDirection: {
    left: true,
    right: true,
  }, // 方向
  slot: {
    left: true,
    right: true,
  },
  handleSize: 80, // 手柄尺寸
}

export default class SwipeRevealItem {
  constructor(element, option = {}) {
    this.congif = Object.assign(defaultOption, option)
    console.log(this.congif)
    this.handleSize = this.congif.handleSize // 手柄尺寸

    this.STATE_DEFAULT = 1 // 默认
    this.STATE_LEFT_SIDE = 2 // 左侧
    this.STATE_RIGHT_SIDE = 3 // 右侧

    this.swipeFrontElement = element
    this.swipeFrontElement.style.position = 'relative'
    this.swipeFrontElement.style.touchAction = 'none'
    this.swipeFrontElement.style.msTouchAction = 'none'

    // this.swipeFrontElement = element.querySelector('.swipe-front')
    this.rafPending = false // 是否在操作
    this.initialTouchPos = null // 初始触摸屏
    this.lastTouchPos = null // 最后触摸屏
    this.currentXPosition = 0 // 当前X位置
    this.currentState = this.STATE_DEFAULT // 当前状态 1默认 2左侧 3右侧

    // 这里计算宽度不可行
    // 更改到window.onResize
    this.itemWidth = this.swipeFrontElement.clientWidth
    this.slopValue = this.itemWidth * (1 / 4)

    if (window.PointerEvent) {
      this.swipeFrontElement.addEventListener('pointerdown', this.handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('pointermove', this.handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('pointerup', this.handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('pointercancel', this.handleGestureEnd.bind(this), true)
    } else {
      this.swipeFrontElement.addEventListener('touchstart', this.handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('touchmove', this.handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('touchend', this.handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('touchcancel', this.handleGestureEnd.bind(this), true)

      this.swipeFrontElement.addEventListener('mousedown', this.handleGestureStart.bind(this), true)
    }

    // 我们这样做：伪手机事件。
    // window.onload = () => {
    //   if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    //     document.body.addEventListener('touchstart', () => {
    //     }, false)
    //   }
    // }
  }

  resize() {
    this.itemWidth = this.swipeFrontElement.clientWidth
    this.slopValue = this.itemWidth * (1 / 4)
  }

  /* // [启动 手柄启动手势] */

  // 处理手势开始
  handleGestureStart(ev) {
    ev.preventDefault()
    if (ev.touches && ev.touches.length > 1) {
      return
    }

    // 添加移动和结束侦听器
    if (window.PointerEvent) {
      ev.target.setPointerCapture(ev.pointerId)
    } else {
      // 添加鼠标侦听器
      document.addEventListener('mousemove', this.handleGestureMove.bind(this), true)
      document.addEventListener('mouseup', this.handleGestureEnd.bind(this), true)
    }

    this.initialTouchPos = getGesturePointFromEvent(ev)

    this.swipeFrontElement.style.transition = 'initial'
  }

  /* // [结束 手柄开始手势] */

  // 手柄移动手势
  //
  /* // [启动 手柄移动] */
  handleGestureMove(ev) {
    ev.preventDefault()
    // console.log(this, 'M')
    if (!this.initialTouchPos) {
      return
    }

    this.lastTouchPos = getGesturePointFromEvent(ev)

    if (this.rafPending) {
      return
    }

    this.rafPending = true

    requestAnimFrame(this.onAnimFrame.bind(this))
  }

  /* // [结束 手柄移动] */

  /* // [开始 手柄结束手势] */

  // 处理结束手势
  handleGestureEnd(ev) {
    ev.preventDefault()

    if (ev.touches && ev.touches.length > 0) {
      return
    }

    this.rafPending = false

    // 删除事件侦听器
    if (window.PointerEvent) {
      ev.target.releasePointerCapture(ev.pointerId)
    } else {
      // Remove Mouse Listeners
      document.removeEventListener('mousemove', this.handleGestureMove, true)
      document.removeEventListener('mouseup', this.handleGestureEnd, true)
    }

    this.updateSwipeRestPosition()
  }

  /* // [结束手柄结束手势] */

  updateSwipeRestPosition() {
    if (!this.initialTouchPos) return
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x // X的差值
    this.currentXPosition = this.currentXPosition - differenceInX // 当前X位置

    // 转到默认状态并更改
    let newState = this.STATE_DEFAULT

    // 检查是否需要根据slop值将状态更改为左或右
    // 移动值大约子元素宽度的25%就改变状态
    if (Math.abs(differenceInX) > this.slopValue) {
      if (this.currentState === this.STATE_DEFAULT) {
        if (differenceInX > 0) {
          newState = this.STATE_LEFT_SIDE
        } else {
          // if (!this.congif.slot.right)
          newState = this.STATE_RIGHT_SIDE
        }
      } else if (this.currentState === this.STATE_LEFT_SIDE && differenceInX > 0) {
        newState = this.STATE_DEFAULT
      } else if (this.currentState === this.STATE_RIGHT_SIDE && differenceInX < 0) {
        newState = this.STATE_DEFAULT
      }
    } else {
      newState = this.currentState
    }

    this.changeState(newState)

    this.swipeFrontElement.style.transition = 'all 250ms ease-out'

    this.initialTouchPos = null
  }

  // 更新状态和ui
  changeState(newState) {
    const maps = new Map([
      [1, () => 0],
      [2, () => {
        if (this.congif.slot.right) return -(this.itemWidth - this.handleSize)
        return 0
      }],
      [3, () => {
        if (this.congif.slot.left) return this.itemWidth - this.handleSize
        return 0
      }],
    ])

    this.currentXPosition = maps.get(newState)()

    const transformStyle = `translateX(${this.currentXPosition}px)`

    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle

    this.currentState = newState
  }

  // eslint-disable-next-line class-methods-use-this

  /* // [START on-anim-frame] */
  onAnimFrame() {
    if (!this.rafPending) {
      return
    }
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x
    const newXTransform = `${this.currentXPosition - differenceInX}px`
    // console.log(differenceInX, newXTransform) // rightLeft
    // const r = this.currentXPosition - differenceInX
    // console.log(r)
    // if (r >= this.congif.slot.rightWidth) {
    //   console.log(r, this.congif.slot.rightWidth) // rightLeft
    //   return
    // }
    const transformStyle = `translateX(${newXTransform})`
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle

    this.rafPending = false
  }

  /* // [END on-anim-frame] */
}
