import { BaseComponent, Component } from '../core'
import SwipeRevealItem from '../core/Swipe'

@Component({
  tag: 'h-swipe-action',
  prop: [
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
  template(data) {
    return `
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
  },
  styleUrl: require('./swipe-action.inline.css'),
})
export default class SwipeAction extends BaseComponent {
  static get observedAttributes() {
    return ['content', 'mask']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot.querySelector('.h-swipe-action-root')

    const slotLeft = this.shadowRoot.querySelector('#slot-left')
    const slotDefault = this.shadowRoot.querySelector('#slot-default')
    const slotRight = this.shadowRoot.querySelector('#slot-right')
    const swipeLeft = this.shadowRoot.querySelector('#swipe-left')
    const swipeDefault = this.shadowRoot.querySelector('#swipe-default')
    const swipeRight = this.shadowRoot.querySelector('#swipe-right')

    this.swipe = new SwipeRevealItem(this.root, {
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

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.initClass()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  connectedCallback() {
    this.init()
  }

  initClass() {
    ['h-toast'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute() {
    // this.setAttribute('content', this.content)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'content':
        this.root.querySelector('.h-toast-content').innerHTML = newVal
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
