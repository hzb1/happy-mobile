// PullRefresh 上拉刷新 上拉加载


import { BaseComponent, Component } from '../core'
import { getEventXY } from '../core/util/util'

const requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || function (callback) {
    window.setTimeout(callback, 1000 / 60)
  })()

@Component({
  tag: 'h-pull-refresh',
  prop: [
    {
      name: 'value',
      type: Number,
      default: 0,
    },
    {
      name: 'direction',
      type: String,
      default: 'up', // up、down
    },
  ],
  styleUrl: require('./pull-refresh.inline.css'),
})
export default class PullRefresh extends BaseComponent {
  static get observedAttributes() {
    return ['value']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-pull-refresh-root')

    // this.swipeFrontElement = this.root.querySelector('.h-swipe')
    this.rafPending = false // 是否在操作
    this.initialTouchPos = null // 初始触摸屏
    this.lastTouchPos = null // 最后触摸屏
    this.currentYPosition = 0 // 当前X位置

    // this.currentState = this.STATE_DEFAULT // 当前状态 1默认 2左侧 3右侧
    // this.itemWidth = this.swipeFrontElement.clientWidth
    // this.slopValue = this.itemWidth * (1 / 4)
  }

  render() {
    return `
        <style>${this.$style()}</style>
        <div class="h-pull-refresh-root" >
            <div class="h-pull-refresh">
                <slot></slot>
            </div>
        </div>
    `
  }

  get heightDValue () {
    const pullBox = this.root.querySelector('.h-pull-refresh')
    return this.getBoundingClientRect().height - pullBox.getBoundingClientRect().height
  }

  _watchValue() {
    this.emit('input', this.value)
  }

  init() {
    this.swipeFrontElement = this.root
    const pullBox = this.root.querySelector('.h-pull-refresh').querySelector('slot')
    // console.log(pullBox, pullBox.getBoundingClientRect())
    // console.log(this.heightDValue)
    // this.yValue = this.swipeFrontElement.getBoundingClientRect().height
    // this.swipeFrontElement = getScrollEventTarget(this.root);
    // console.log(this.scrollEventTarget)
    this._listener()
  }

  // setData(fun) {
  //   // console.log('setData')
  //   // console.log(this.heightDValue)
  //   fun()
  // }

  _listener() {
    // console.log(window.PointerEvent)
    // window.PointerEvent = false
    if (window.PointerEvent instanceof Function) {
      window.happy.Toast.show('PointerEvent')
    } else {
      window.happy.Toast.show('无PointerEvent 2')
    }
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

    // window.onload = () => {
    //   if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    //     document.body.addEventListener('touchstart', () => {}, false)
    //   }
    // }
  }

  connectedCallback() {
    if (!this.firstLoad){
      this.init()
      this.firstLoad = true
    }
    // this.initAttribute()
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

    this.initialTouchPos = getEventXY(ev)

    this.swipeFrontElement.style.transition = 'initial'
    // this.swipeFrontElement.style.transition = 'transform 500ms linear'
  }

  _handleGestureMove(ev) {
    ev.preventDefault()

    if (!this.initialTouchPos) {
      return
    }
    console.log('M scrollTop', this.scrollTop)

    this.lastTouchPos = getEventXY(ev)

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

    this.updateSwipeRestPosition()
  }

  _onAnimFrame() {
    if (!this.rafPending) {
      return
    }
    const differenceInY = (this.initialTouchPos.y - this.lastTouchPos.y) / 2
    this.currentYPosition = this.currentYPosition - differenceInY
    this.changeState()

    this.rafPending = false
  }

  updateSwipeRestPosition() {
    if (!this.initialTouchPos) return
    const differenceInY = this.initialTouchPos.y - this.lastTouchPos.y // X的差值
    const h = this.swipeFrontElement.getBoundingClientRect().height


    this.swipeFrontElement.style.transition = 'all 450ms ease'
    if ((this.currentYPosition - differenceInY) >= 0) {
      this.currentYPosition = 0
    } else if ((this.currentYPosition - differenceInY) <= this.heightDValue) {
      this.currentYPosition = this.heightDValue // 当前X位置
    } else {
      this.currentYPosition = this.currentYPosition - differenceInY // 当前X位置
    }

    this.changeState()

    this.initialTouchPos = null
  }

  // 更新状态
  changeState() {
    const transformStyle = `translate3d( 0,  ${this.currentYPosition}px, 0 )`
    this.swipeFrontElement.style.transition = 'transform 0s'
    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle
  }

}

const getScrollEventTarget = (element) => {
  let currentNode = element;
  while (currentNode && currentNode.tagName !== 'HTML' &&
  currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}
