import { Component, MetaData, Watch } from '../core'
import SwipeRevealItem from '../core/Swipe'

const style = require('./swipe-action.inline.css')
@MetaData({
  tag: 'h-swipe-action',
  props: [
    {
      name: 'content',
      type: String,
      default: '',
    },
    {
      name: 'type',
      type: String,
      default: 'text',
    },
  ],
})
export default class SwipeAction extends Component {
  static get observedAttributes() {
    return ['content', 'mask']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-swipe-action-root')
    const swipeFront = this.shadowRoot.querySelector('.swipe-front')

    const slotLeft = this.shadowRoot.querySelector('#slot-left')
    const slotDefault = this.shadowRoot.querySelector('#slot-default')
    const slotRight = this.shadowRoot.querySelector('#slot-right')
    const swipeLeft = this.shadowRoot.querySelector('#swipe-left')
    const swipeDefault = this.shadowRoot.querySelector('#swipe-default')
    const swipeRight = this.shadowRoot.querySelector('#swipe-right')

    this.swipe = new SwipeRevealItem(swipeFront, {
      swipeDirection: { // 可滑动方向
        left: true,
        right: true,
      },
      slot: {  // slot 如果无slot回自动回滑
        left: Boolean(slotLeft.assignedNodes().length),
        right: Boolean(slotRight.assignedNodes().length),
        rightLeft: swipeLeft.offsetWidth,
        rightWidth: swipeRight.offsetWidth,
      },
      handleSize: Math.round(swipeDefault.offsetWidth - (swipeRight.offsetWidth)),
    })
  }

  render() {
    return `
        <style>${style()}</style>
        <div class="h-swipe-action-root">
            <!--<div class="swipe-element">-->
                <div class="swipe-front">
                  <div class="swipe-left" id="swipe-left">
                    <slot id="slot-left" name="left"></slot>
                  </div>
                  <div class="swipe-default" id="swipe-default">
                      <slot id="slot-default"></slot>
                  </div>
                  <div class="swipe-right" id="swipe-right">
                    <slot id="slot-right" name="right"></slot>
                  </div>
                </div>
            <!--</div>-->
        </div>
    `
  }

  connectedCallback() {
  }

  @Watch('content')
  _contentWatch(attrName, oldVal, newVal) {
    this.root.querySelector('.h-toast-content').innerHTML = newVal
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
