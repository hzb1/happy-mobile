const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

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
    this.handleSize = this.congif.handleSize // 手柄尺寸

    this.STATE_DEFAULT = 1 // 错误
    this.STATE_LEFT_SIDE = 2 // 左侧
    this.STATE_RIGHT_SIDE = 3 // 右侧

    this.swipeFrontElement = element.querySelector('.swipe-front')
    this.rafPending = false // 是否在操作
    this.initialTouchPos = null // 初始触摸屏
    this.lastTouchPos = null // 最后触摸屏
    this.currentXPosition = 0 // 当前X位置
    this.currentState = this.STATE_DEFAULT // 当前状态 1错误 2左侧 3右侧

    // 这里计算宽度不可行
    // 更改到window.onResize
    this.itemWidth = this.swipeFrontElement.clientWidth
    this.slopValue = this.itemWidth * (1 / 4)

    /* // [START addlisteners] */
    // Check if pointer events are supported.
    // console.log(this.swipeFrontElement, 'this.swipeFrontElement')
    if (window.PointerEvent) {
      // Add Pointer Event Listener
      this.swipeFrontElement.addEventListener('pointerdown', this.handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('pointermove', this.handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('pointerup', this.handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('pointercancel', this.handleGestureEnd.bind(this), true)
    } else {
      // Add Touch Listener
      this.swipeFrontElement.addEventListener('touchstart', this.handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('touchmove', this.handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('touchend', this.handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('touchcancel', this.handleGestureEnd.bind(this), true)

      // Add Mouse Listener
      this.swipeFrontElement.addEventListener('mousedown', this.handleGestureStart.bind(this), true)
    }

    // We do this so :active pseudo classes are applied.
    window.onload = () => {
      if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
        document.body.addEventListener('touchstart', () => {
        }, false)
      }
    }
  }

  resize() {
    this.itemWidth = this.swipeFrontElement.clientWidth
    this.slopValue = this.itemWidth * (1 / 4)
  }

  /* // [启动 手柄启动手势] */

  // 处理手势开始
  handleGestureStart(evt) {
    evt.preventDefault()

    if (evt.touches && evt.touches.length > 1) {
      return
    }

    // 添加移动和结束侦听器
    if (window.PointerEvent) {
      evt.target.setPointerCapture(evt.pointerId)
    } else {
      // 添加鼠标侦听器
      document.addEventListener('mousemove', this.handleGestureMove, true)
      document.addEventListener('mouseup', this.handleGestureEnd, true)
    }

    this.initialTouchPos = this.getGesturePointFromEvent(evt)

    this.swipeFrontElement.style.transition = 'initial'
  }

  /* // [结束 手柄开始手势] */

  // 手柄移动手势
  //
  /* // [启动 手柄移动] */
  handleGestureMove(evt) {
    evt.preventDefault()

    if (!this.initialTouchPos) {
      return
    }

    this.lastTouchPos = this.getGesturePointFromEvent(evt)

    if (this.rafPending) {
      return
    }

    this.rafPending = true

    requestAnimFrame(this.onAnimFrame.bind(this))
  }

  /* // [结束 手柄移动] */

  /* // [开始 手柄结束手势] */

  // 处理结束手势
  handleGestureEnd(evt) {
    evt.preventDefault()

    if (evt.touches && evt.touches.length > 0) {
      return
    }

    this.rafPending = false

    // 删除事件侦听器
    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId)
    } else {
      // Remove Mouse Listeners
      document.removeEventListener('mousemove', this.handleGestureMove, true)
      document.removeEventListener('mouseup', this.handleGestureEnd, true)
    }

    this.updateSwipeRestPosition()

    this.initialTouchPos = null
  }

  /* // [结束手柄结束手势] */

  updateSwipeRestPosition() {
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

    this.swipeFrontElement.style.transition = 'all 150ms ease-out'
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

    // switch (newState) {
    //   case this.STATE_DEFAULT:
    //     this.currentXPosition = 0
    //     break
    //   case this.STATE_LEFT_SIDE:
    //     if (this.congif.slot.right) {
    //       this.currentXPosition = -(this.itemWidth - this.handleSize)
    //     } else {
    //       this.currentXPosition = 0
    //     }
    //     break
    //   case this.STATE_RIGHT_SIDE:
    //     if (this.congif.slot.left) this.currentXPosition = this.itemWidth - this.handleSize
    //     break
    //   default:
    //     this.currentXPosition = 0
    //     break
    // }

    const transformStyle = `translateX(${this.currentXPosition}px)`

    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle

    this.currentState = newState
  }

  // 获取x和y
  getGesturePointFromEvent(evt) {
    const point = {}

    if (evt.targetTouches) {
      point.x = evt.targetTouches[0].clientX
      point.y = evt.targetTouches[0].clientY
    } else {
      // 鼠标事件或指针事件
      point.x = evt.clientX
      point.y = evt.clientY
    }

    return point
  }

  // eslint-disable-next-line class-methods-use-this

  /* // [START on-anim-frame] */
  onAnimFrame() {
    if (!this.rafPending) {
      return
    }
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x
    const newXTransform = `${this.currentXPosition - differenceInX}px`
    const transformStyle = `translateX(${newXTransform})`
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle

    this.rafPending = false
  }

  /* // [END on-anim-frame] */
}
