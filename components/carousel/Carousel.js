import { BaseComponent, Component } from '../core'

const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

@Component({
  tag: 'h-carousel',
  prop: [
    {
      name: 'value', // 当前显示的索引
      type: Number,
      default: 0,
    },
    {
      name: 'selectedIndex', // 当前显示的索引
      type: Number,
      default: 0,
    },
    {
      name: 'height', // height
      type: String,
      default: '100%', // 150px
    },
    {
      name: 'autoplay', // 是否自动切换
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'autoplayInterval', // 自动切换的时间间隔
      type: Number,
      default: 3500,
    },
    {
      name: 'infinite', // 是否循环播放
      type: Boolean,
      has: true,
      default: true,
    },
    {
      name: 'vertical', // 垂直显示
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'dots', // 是否显示面板指示点
      type: Boolean,
      has: true,
      default: true,
    },
  ],
  styleUrl: require('./carousel.inline.css'),
})
export default class Carousel extends BaseComponent {

  static get observedAttributes() {
    return ['dots', 'value']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-carousel-root')
    // this.carouselItem = Array.from(this.querySelectorAll('h-carousel-item'))
    this.carouselItem = Array.from(this.children)
    this.swipeFrontElement = this.root.querySelector('#carousel-content') // 滚动容器
    if (!this.carouselItem.length) {
      console.log('无carouselItem！')
      return
    }
    // console.log('2')
  }

  render() {
    return `
      <style>${this.$style()}</style>
      <div class="h-carousel-root">
          <div class="carousel-content" id="carousel-content">
            <slot id="slot-content"></slot>
          </div>
          <div id="carousel-dots" class="carousel-dots ${this.vertical ? 'carousel-dots-vertical' : ''}">
              ${ this.dots && this.carouselItem ? `${this.carouselItem.map((item, index) => `
                  <span class="${this.value === index ? 'current' : ''}"></span>`)
    .join('')}` : ''}
          </div>
      </div>
    `
  }

  watchDots() {
    this.root.querySelector('#carousel-dots').innerHTML = `
    ${this.carouselItem ? ` ${
      this.carouselItem.map((item, index) => `<span class="${this.value === index ? 'current' : ''}"></span>`)
      .join('')}` : ''}
    `
  }

  get baseX() {
    return (this.infinite ? this.value + 1 : this.value) * -this.width
  }

  _initDom() {
    // this.style.height = this.height // 设置高度

    // 克隆dom 用于无限轮播
    if (this.infinite) {
      const unshiftItem = this.carouselItem[this.carouselItem.length - 1].cloneNode(true)
      const pushItem = this.carouselItem[0].cloneNode(true)
      this.insertBefore(unshiftItem, this.carouselItem[0])
      this.appendChild(pushItem)
      this.swipeFrontElement.style.transform = `translate3d(${this.baseX}px, 0, 0)`
    }

    let width = 0
    Array.from(this.children).forEach((item, index) => {
      item.style.width = `${this.offsetWidth}px`
      // item.style.height = this.height

      // display: flex;
      item.style.display = 'inline-block'
      // flex-wrap: nowrap;
      item.style.position = 'absolute'
      item.style.top = '0'
      item.style.left = `${index * item.offsetWidth}px`
      width += item.offsetWidth
    })

    // 必须这样写
    const carouselContent = this.shadowRoot.querySelector('#carousel-content')
    carouselContent.style.width = `${width}px`
    carouselContent.style.height = this.height

    if (this.dots) this.watchDots()

    // 是否自动切换
    if (this.autoplay) this._setTimer()
  }

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.timer = null
      this.width = this.clientWidth
      this.slopValue = this.width * (1 / 4)
      this._initDom()
      this.firstLoad = true
    }

    // 注册滑动事件
    this._listener()
    this.initAttribute()
  }

  setValue(num) {
    const n = Number(num)
    if (n < this.carouselItem.length && n > 0) {
      this.value = n
    } else if (n < 0) {
      this.value = this.carouselItem.length - 1
    } else {
      this.value = 0
    }

  }

  run(oldVal, newVal) {
    this.watchDots()
    const old_val = Number(oldVal)
    const new_val = Number(newVal)
    // const baseX = ((this.infinite ? this.value + 1 : this.value) * -this.width);
    const carouselContent = this.shadowRoot.querySelector('#carousel-content')

    if (this.infinite) { // 循环播放
      if (old_val === (this.carouselItem.length - 1) && new_val === 0) { // 从最后一张翻到第一张
        let x = -((this.carouselItem.length + 1) * this.width)
        carouselContent.style.transition = `transform .35s`
        carouselContent.style.transform = `translate3d(${x}px, 0, 0)`
        let end = () => {
          carouselContent.style.transition = `transform 0s`
          carouselContent.style.transform = `translate3d(${-(this.value + 1) * this.width}px, 0, 0)`
          carouselContent.removeEventListener('transitionend', end)
        }
        carouselContent.addEventListener('transitionend', end)
        return
      } else if (old_val === 0 && new_val === (this.carouselItem.length - 1)) { // 从第一张翻到最后一张
        carouselContent.style.transition = `transform .35s`
        carouselContent.style.transform = `translate3d(0, 0, 0)`
        let end = () => {
          carouselContent.style.transition = `transform 0s`
          carouselContent.style.transform = `translate3d(${-(this.carouselItem.length) * this.width}px, 0, 0)`
          carouselContent.removeEventListener('transitionend', end)
        }
        carouselContent.addEventListener('transitionend', end)
        return
      }
    }

    // console.log('向右翻1')
    carouselContent.style.transition = `transform .35s`
    carouselContent.style.transform = `translate3d(${this.baseX}px, 0, 0)`
  }

  _listener() {
    this.swipeFrontElement = this.root.querySelector('#carousel-content') // 滚动容器
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
        document.body.addEventListener('touchstart', () => {
        }, false)
      }
    }
  }

  _setTimer() {
    this.timer = setInterval(() => {
      this.setValue(this.value + 1)
    }, this.autoplayInterval)
  }

  connectedCallback() {
    this.init()
  }

  initAttribute() {
    this.setAttribute('value', this.value)
    this.setAttribute('dots', this.dots)
    this.setAttribute('vertical', this.vertical)
    this.setAttribute('autoplayInterval', this.autoplayInterval)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'value':
        this.run(oldVal, newVal)
    }
  }

  // 从DOM中移除时调用
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

    if (this.timer) clearInterval(this.timer) // 清空计时器
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

    requestAnimFrame(this._onAnimFrame.bind(this))
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

    this.swipeFrontElement.style.transition = `transform .35s`
    this.updateSwipeRestPosition()
  }

  _onAnimFrame() {
    if (!this.rafPending) {
      return
    }
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x
    const newXTransform = this.baseX + -differenceInX
    const transformStyle = `translateX(${newXTransform}px)`
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle

    this.rafPending = false
  }

  updateSwipeRestPosition() {
    if (!this.initialTouchPos) return
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x // X的差值
    if (differenceInX >= this.slopValue) {
      this.setValue(this.value + 1)
    } else if (differenceInX <= -this.slopValue) {
      this.setValue(this.value - 1)
    } else {
      this.swipeFrontElement.style.transform = `translate3d(${this.baseX}px, 0px, 0px)`
    }

    if (this.autoplay) this._setTimer()

    this.initialTouchPos = null
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
