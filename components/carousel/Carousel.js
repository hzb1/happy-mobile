import { BaseComponent, Component } from '../core'
import SwipeRevealItem from '../core/Swipe'

@Component({
  tag: 'h-carousel',
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
      <div class="h-carousel-root">
        <div class="carousel-content" id="carousel-content">
          <slot id="slot-content"></slot>
        </div>
      </div>
    `
  },
  styleUrl: require('./carousel.inline.css'),
})
export default class Carousel extends BaseComponent {
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
    this.root = this.shadowRoot.querySelector('.h-carousel-root')
    const slotContent = this.shadowRoot.querySelector('#slot-content')
    console.log(slotContent.assignedNodes())
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
