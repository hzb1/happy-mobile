// PullRefresh 上拉刷新 上拉加载


import { Component, MetaData, Watch } from '../core'
import { getEventXY, requestAnimFrame } from '../core/util/util'


// 事件 down-refresh
const style = require('./pull-refresh.inline.css')
@MetaData({
  tag: 'h-pull-refresh',
  props: [
    {
      name: 'state', // 状态
      type: String,
      default: 'deactivate',
    },
    {
      name: 'direction', // 方向
      type: String,
      default: '', // up、down
    },
    {
      name: 'damping', // 下拉的最大距离
      type: Number,
      default: 80, // up、down
    },
    {
      name: 'distanceToRefresh', // 触发刷新值
      type: Number,
      default: 25,
    },
  ],
})
export default class PullRefresh extends Component {
  static get observedAttributes() {
    return ['state']
  }


  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-pull-refresh-root')
    this.pullRefresh = this.root.querySelector('.h-pull-refresh')

    this.rafPending = false // 是否在操作
    this.initialTouchPos = null // 初始触摸屏
    this.lastTouchPos = null // 最后触摸屏
    this.currentYPosition = 0 // 当前X位置
    this.currentState = 'deactivate' // 当前状态
    this.currentDirection = '' // 当前方向

    this._pullDownStateText = {
      deactivate: '下拉可以刷新',
      activate: '松开立即刷新',
      release: '刷新中...',
      finish: '完成刷新',
      noData: '无数据',
    }

    this._pullUpStateText = {
      deactivate: '上拉可以加载',
      activate: '松开立即加载',
      release: '加载中...',
      finish: '完成加载',
      noData: '无数据',
    }


    this.pullDown = this.root.querySelector('.h-pull-down')
    this.pullUp = this.root.querySelector('.h-pull-up')
    this.pullDown.style.marginTop = `-25px`
  }

  render() {
    return `
        <style>${style()}</style>
        <div class="h-pull-refresh-root" >
            <div class="h-pull-down"></div>
            <div class="h-pull-refresh">
                <slot></slot>
            </div>
            <div class="h-pull-up"></div>
        </div>
    `
  }

  get heightDValue() {
    const pullBox = this.root.querySelector('.h-pull-refresh')
    return this.getBoundingClientRect().height - pullBox.getBoundingClientRect().height
  }

  init() {
    this.swipeFrontElement = this.root
    this._listener()
  }

  _listener() {
    this.swipeFrontElement.addEventListener('touchstart', this._handleGestureStart.bind(this), true)
    this.swipeFrontElement.addEventListener('touchmove', this._handleGestureMove.bind(this), true)
    this.swipeFrontElement.addEventListener('touchend', this._handleGestureEnd.bind(this), true)
    this.swipeFrontElement.addEventListener('touchcancel', this._handleGestureEnd.bind(this), true)

    this.swipeFrontElement.addEventListener('mousedown', this._handleGestureStart.bind(this), true)
  }

  connectedCallback() {
    if (!this.firstLoad) {
      this.init()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  initAttribute() {
    this.setAttribute('value', this.value)
    this.setAttribute('direction', this.direction)
    this.setAttribute('distanceToRefresh', this.distanceToRefresh)
  }

  @Watch('state')
  _stateWatch(attrName, oldVal, newVal) {
    this.currentState = this.state
    this.changeState()
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  _handleGestureStart(ev) {
    // ev.preventDefault()
    this._startTime = Date.now()
    if (ev.touches && ev.touches.length > 1) {
      return
    }
    // 添加移动和结束侦听器
    // if (window.PointerEvent) {
    //   ev.target.setPointerCapture(ev.pointerId)
    // } else {
    //   // 添加鼠标侦听器
    //   document.addEventListener('mousemove', this._handleGestureMove.bind(this), true)
    //   document.addEventListener('mouseup', this._handleGestureEnd.bind(this), true)
    // }

    this.initialTouchPos = getEventXY(ev)


    this.swipeFrontElement.style.transition = 'initial'
    // this.swipeFrontElement.style.transition = 'transform 500ms linear'
  }

  _handleGestureMove(ev) {

    if (!this.initialTouchPos) {
      return
    }

    this.lastTouchPos = getEventXY(ev)
    let distanceY = this.lastTouchPos.y - this.initialTouchPos.y
    const h = this.pullRefresh.scrollHeight - this.offsetHeight // - this.pullUp.offsetHeight
    // console.log('distanceY', distanceY, this.distanceToRefresh, this.scrollTop, h)
    if (distanceY > 0 && this.scrollTop > 0) { // 向下滚动
      this.currentDirection = ''
    } else if (distanceY < 0 && this.scrollTop < h) { // 向上滚动
      this.currentDirection = ''
    } else if (distanceY > this.distanceToRefresh && this.scrollTop <= 0) {
      // console.log('下拉刷新')
      this.currentDirection = 'down'
      if (ev.cancelable) ev.preventDefault()
      this.currentState = 'activate'
    } else if (distanceY < 0 && this.scrollTop >= h) {
      // console.log('上拉加载')
      this.currentDirection = 'up'
      this.currentState = 'activate'
    }


    if (this.rafPending) return
    this.rafPending = true
    requestAnimFrame(this._onAnimFrame.bind(this))
  }

  _handleGestureEnd(ev) {
    // ev.preventDefault()

    if (ev.touches && ev.touches.length > 0) {
      return
    }

    this.rafPending = false
    this.updateSwipeRestPosition()
  }

  _onAnimFrame() {
    if (!this.rafPending) {
      return
    }
    // const differenceInY = (this.initialTouchPos.y - this.lastTouchPos.y) / 2
    // let y = this.currentYPosition - differenceInY
    if (this.currentDirection === 'down') {
      let y = this.lastTouchPos.y - this.initialTouchPos.y
      if (y > this.damping) { //当超过设定阈值是，缓慢增加
        y = (y / (y + this.damping)) * this.damping * 2
      } else if (y < 0) {
        y = 0
      }
      if (y > this.distanceToRefresh) {
        this.currentState = 'activate'
      }
      this.currentYPosition = y
    } else if (this.currentDirection === 'up') {
      this.currentState = 'activate'
      this.currentYPosition = 0
    } else {
      this.currentYPosition = 0
    }
    this.changeState()

    this.rafPending = false
  }

  updateSwipeRestPosition() {
    if (!this.initialTouchPos) return
    const differenceInY = this.lastTouchPos.y - this.initialTouchPos.y
    this.swipeFrontElement.style.transition = 'transform 450ms ease'

    if (this.currentDirection === 'down') { // 下拉刷新
      this.currentState = 'release'
      this.emit('down-refresh')
    } else if (this.currentDirection === 'up') { // 上拉加载
      this.currentState = 'release'
      this.emit('up-refresh')
    } else { // 滚动
      this.currentState = 'deactivate'
      this.currentYPosition = 0
    }

    this.changeState()
    this.initialTouchPos = null
    this.currentYPosition = 0
  }

  // 更新状态
  changeState() {
    this.pullDown.innerHTML = this._pullDownStateText[this.currentState]
    this.pullUp.innerHTML = this._pullUpStateText[this.currentState]
    const transformStyle = `translate3d( 0,  ${this.currentYPosition}px, 0 )`
    // this.swipeFrontElement.style.transition = 'transform 0s'
    this.swipeFrontElement.style.msTransform = transformStyle
    this.swipeFrontElement.style.MozTransform = transformStyle
    this.swipeFrontElement.style.webkitTransform = transformStyle
    this.swipeFrontElement.style.transform = transformStyle
  }

}

// const getScrollEventTarget = (element) => {
//   let currentNode = element;
//   while (currentNode && currentNode.tagName !== 'HTML' &&
//   currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
//     let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
//     if (overflowY === 'scroll' || overflowY === 'auto') {
//       return currentNode;
//     }
//     currentNode = currentNode.parentNode;
//   }
//   return window;
// }
