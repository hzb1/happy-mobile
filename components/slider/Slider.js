
import { BaseComponent, Component } from '../core'
import * as animation from '../core/animation/index'

const getPercent = (num, total) => {
  num = parseFloat(num)
  total = parseFloat(total)
  return total <= 0 ? 0 : Math.round(num / total * 10000) / 100.00
}

const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

@Component({
  tag: 'h-slider',
  prop: [
    {
      name: 'value',
      type: Number,
      default: 0,
    },
    {
      name: 'min',
      type: Number,
      default: 0,
    },
    {
      name: 'max',
      type: Number,
      default: 100,
    },
  ],
  styleUrl: require('./slider.inline.css'),
})
export default class Slider extends BaseComponent {
  static get observedAttributes() {
    return ['value']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-slider-root')
    this.width = this.root.querySelector('.h-slider').clientWidth
    this.sliderLine = this.root.querySelector('.h-slider-line')
    this.slidingElement = this.root.querySelector('.h-slider-circular')
    this.sliderValue = this.root.querySelector('.h-slider-value')
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div class="h-slider-root" >
            <div class="h-slider">
                <div class="h-slider-inline">
                    <div class="h-slider-line"></div>
                    <div class="h-slider-circular"></div>
                </div>
            </div>
            <span class="h-slider-value">${this.value}</span>
        </div>
    `
  }

  _watchValue() {
    this.sliderLine.style.width = `${this.value}%`
    this.slidingElement.style.left = `${this.value}%`
    this.sliderValue.innerHTML = Math.floor(this.value)
    this.emit('input', this.value)
    // console.log('input', this.value)
  }

  init() {
    this.initialTouchPos = null // 初始触摸屏
    this.currentXPosition = (this.value / 100) * this.width // 当前X位置
    this.rafPending = false // 是否在操作

    window.PointerEvent = false // PointerEvent有bug ！
    if (window.PointerEvent) {
      this.slidingElement.addEventListener('pointerdown', this._handleGestureStart.bind(this), true)
      this.slidingElement.addEventListener('pointermove', this._handleGestureMove.bind(this), true)
      this.slidingElement.addEventListener('pointerup', this._handleGestureEnd.bind(this), true)
      this.slidingElement.addEventListener('pointercancel', this._handleGestureEnd.bind(this), true)
    } else {
      this.slidingElement.addEventListener('touchstart', this._handleGestureStart.bind(this), true)
      this.slidingElement.addEventListener('touchmove', this._handleGestureMove.bind(this), true)
      this.slidingElement.addEventListener('touchend', this._handleGestureEnd.bind(this), true)
      this.slidingElement.addEventListener('touchcancel', this._handleGestureEnd.bind(this), true)
      this.slidingElement.addEventListener('mousedown', this._handleGestureStart.bind(this), true)
    }
    window.onload = () => {
      if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
        document.body.addEventListener('touchstart', () => {
        }, false)
      }
    }
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

    this.initialTouchPos = this.getGesturePointFromEvent(ev)

    this.slidingElement.style.transition = 'initial'

  }

  _handleGestureMove(ev) {
    ev.preventDefault()
    if (!this.initialTouchPos) return
    this.lastTouchPos = this.getGesturePointFromEvent(ev)

    if (this.rafPending) return
    this.rafPending = true
    requestAnimFrame(this._onAnimFrame.bind(this))
  }

  _onAnimFrame() {
    if (!this.rafPending) return

    const differenceInX = this.lastTouchPos.x - this.initialTouchPos.x
    const newXTransform = this.currentXPosition + differenceInX
    let left = getPercent(newXTransform, this.width)

    if (left > this.max) {
      left = this.max
    } else if (left < this.min) {
      left = this.min
    }
    this.value =  left

    this.rafPending = false
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
      document.removeEventListener('mousemove', this._handleGestureMove, true)
      document.removeEventListener('mouseup', this._handleGestureEnd, true)
    }

    this.updateSwipeRestPosition()
    this.initialTouchPos = null

  }

  updateSwipeRestPosition() {
    if (!this.initialTouchPos) return
    const differenceInX = this.lastTouchPos.x - this.initialTouchPos.x // X的差值
    const cx = this.currentXPosition + differenceInX
    if (getPercent(cx, this.width) >= this.max) {
      this.currentXPosition = this.width // 当前X位置
    } else if(getPercent(cx, this.width) <= this.min) {
      this.currentXPosition = 0 // 当前X位置
    } else {
      this.currentXPosition = cx // 当前X位置
    }
  }

  // 获取x和y
  getGesturePointFromEvent(ev) {
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
}
