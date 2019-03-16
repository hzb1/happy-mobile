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
    this._slotContentWrap = this.shadowRoot.querySelector('#slot-content-wrap')

    this.getHeight_()
  }

  getHeight_() {
    this.slotContentWrapHeight = `${this._slotContentWrap.offsetHeight}px`
  }

  connectedCallback() {
    this._slotContentWrap.style.height = '0px'
    this.firstLoad = true
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'value':
        const slotContentWrap = this.shadowRoot.querySelector('#slot-content-wrap')
        if (this.value) {
          const player = slotContentWrap.animate([
            { height: 0 },
            { height: this.slotContentWrapHeight },
          ], {
            duration: 150,
            easing: 'ease-in',
          })
          player.addEventListener('finish', () => {
            slotContentWrap.style.height = this.slotContentWrapHeight
          })

        } else {
          const player = slotContentWrap.animate([
            { height: this.slotContentWrapHeight },
            { height: 0 },
          ], {
            duration: 150,
            easing: 'ease-out',
          })
          player.addEventListener('finish', () => {
            slotContentWrap.style.height = 0
          })
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
