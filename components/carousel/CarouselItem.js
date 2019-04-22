import { BaseComponent, Component } from '../core'

@Component({
  tag: 'h-carousel-item',
  prop: [],
  styleUrl: require('./carousel-item.inline.css'),
})
export default class CarouselItem extends BaseComponent {

  static get observedAttributes() {
    return ['content', 'mask']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-carousel-item-root')
    const slotContent = this.shadowRoot.querySelector('#slot-content')
    if (!slotContent.assignedNodes().length) {
      console.warn('无slotContent！')
      return
    }
  }

  render() {
    return `
      <style>${this.$style()}</style>
      <div class="h-carousel-item-root">
          <slot id="slot-content"></slot>
      </div>
    `
  }

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  connectedCallback() {
    this.init()
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
