import BaseComponent from '../core/base-component'
import Component from '../core/web-component'

@Component({
  tag: 'h-accordion',
  prop: [
    {
      name: 'value',
      type: Boolean,
      default: false,
    },
  ],
  template(data) {
    return `
        <div class="${data.$tag}-root" >
            <div id="slot-default-wrap">
                <slot id="slot-default"></slot>
            </div>
            <div id="slot-content-wrap">
                <slot name="content" id="slot-content"></slot>
            </div>
        </div>
    `
  },
  styleUrl: require('./accordion.inline.css'),
})
export default class Accordion extends BaseComponent {
  static get observedAttributes() {
    return ['value']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
        <style>${this.$style()}</style>
        ${this.$template(this)}
    `
    this.root = this.shadowRoot.querySelector('div')

    const slotDefaultWrap = this.shadowRoot.querySelector('#slot-default-wrap')
    this.slotContentWrap_ = this.shadowRoot.querySelector('#slot-content-wrap')

    this.getHeight_()
    // const slotDefault = this.shadowRoot.querySelector('#slot-default')
    // const slotContent = this.shadowRoot.querySelector('#slot-content')
    // this.root.classList.toggle()
  }

  getHeight_() {
    this.slotContentWrapHeight = this.slotContentWrap_.offsetHeight
  }

  connectedCallback() {
    this.slotContentWrap_.style.height = '0px'
    this.firstLoad = true
    // this.win.addEventListener('')
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'value':
        console.log('value', newVal)
        const slotContentWrap = this.shadowRoot.querySelector('#slot-content-wrap')
        if (this.value) {
          slotContentWrap.style.height = `${this.slotContentWrapHeight}px`
          // const player = slotContentWrap.animate([
          //   { height: 0 },
          //   { height: `${this.slotContentWrapHeight}px` },
          // ], {
          //   duration: 300,
          //   easing: 'ease',
          // })
          // player.addEventListener('finish', () => {
          //   slotContentWrap.style.height = 'auto'
          // })
        } else {
          slotContentWrap.style.height = '0px'
        }
    }
  }

  toggle(){
    this.value = !this.value
  }

  close(){
    this.value = false
  }

  open(){
    this.value = true
  }

}
