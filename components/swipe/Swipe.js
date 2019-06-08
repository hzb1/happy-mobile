// Swipe


import { Component, Component } from '../core'

const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

@Component({
  tag: 'h-swipe',
  prop: [
    {
      name: 'value',
      type: Number,
      default: 0,
    },
    {
      name: 'direction',
      type: String,
      default: 'x', // x、y
    },
    {
      name: 'handleSize',
      type: Number,
      default: 80,
    },
    {
      name: 'state',
      type: Number,
      default: 1, // 1默认 2左侧或上侧 3右侧或下侧
    },
  ],
  styleUrl: require('./swipe.inline.css'),
})
export default class Slider extends Component {
  static get observedAttributes() {
    return ['value']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-swipe-root')

    this.swipeFrontElement = this.root.querySelector('.h-swipe')
    this.rafPending = false // 是否在操作
    this.initialTouchPos = null // 初始触摸屏
    this.lastTouchPos = null // 最后触摸屏
    this.currentXPosition = 0 // 当前X位置

    this.STATE_DEFAULT = 1 // 默认
    this.STATE_LEFT_SIDE = 2 // 左侧
    this.STATE_RIGHT_SIDE = 3 // 右侧

    this.currentState = this.STATE_DEFAULT // 当前状态 1默认 2左侧 3右侧
    this.itemWidth = this.swipeFrontElement.clientWidth
    this.slopValue = this.itemWidth * (1 / 4)
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div class="h-swipe-root" >
            <div class="h-swipe">
                <slot></slot>
            </div>
        </div>
    `
  }

  _watchValue() {
    this.emit('input', this.value)
  }

  init() {
    this._listener()
  }

  _listener() {
    if (window.PointerEvent) {
      this.swipeFrontElement.addEventListener('pointerdown', this._handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('pointermove', this._handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('pointerup', this._handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('pointercancel', this._handleGestureEnd.bind(this), true)
    } else {
      this.swipeFrontElement.addEventListener('touchstart', this._handleGestureStart.bind(this), true)
      this.swipeFrontElement.addEventListener('touchmove', this._handleGestureMove.bind(this), true)
      this.swipeFrontElement.addEventListener('touchend', this._handleGestureEnd.bind(this), true)
      this.swipeFrontElement.addEventListener('touchcancel', this._handleGestureEnd.bind(this), true)

      this.swipeFrontElement.addEventListener('mousedown', this._handleGestureStart.bind(this), true)
    }

    window.onload = () => {
      if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
        document.body.addEventListener('touchstart', () => {}, false)
      }
    }
  }

  connectedCallback() {
    if (!this.firstLoad){
      this.init()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  initAttribute() {
    this.setAttribute('value', this.value)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    switch (attrName) {
      case 'value':
        this._watchValue()
    }
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  _handleGestureStart(ev) {
    ev.preventDefault()
    if (ev.touches && ev.touches.length > 1) {
      return
    }

    // 添加移动和结束侦听器
    if (window.PointerEvent) {
      ev.target.setPointerCapture(ev.pointerId)
    } else {
      // 添加鼠标侦听器
      document.addEventListener('mousemove', this._handleGestureMove.bind(this), true)
      document.addEventListener('mouseup', this._handleGestureEnd.bind(this), true)
    }

    this.initialTouchPos = getGesturePointFromEvent(ev)

    this.swipeFrontElement.style.transition = 'initial'
  }

  _handleGestureMove(ev) {
    ev.preventDefault()

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

  _handleGestureEnd(ev) {
    ev.preventDefault()

    if (ev.touches && ev.touches.length > 0) {
      return
    }

    this.rafPending = false

    // 删除事件侦听器
    if (window.PointerEvent) {
      ev.target.releasePointerCapture(ev.pointerId)
    } else {
      document.removeEventListener('mousemove', this.handleGestureMove, true)
      document.removeEventListener('mouseup', this.handleGestureEnd, true)
    }

    this.updateSwipeRestPosition()
  }

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
        // if (this.congif.slot.right) return -(this.itemWidth - this.handleSize)
        return 0
      }],
      [3, () => {
        // if (this.congif.slot.left) return this.itemWidth - this.handleSize
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

}

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
