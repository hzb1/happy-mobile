
import { BaseComponent, Component } from '../core'
import * as animation from '../core/animation/index'

// 文档 https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/tooltip-documentation.md
@Component({
  tag: 'h-select',
  prop: [
    {
      name: 'placement',
      type: String,
      default: 'top',
    },
  ],
  template(data) {
    return `
        <div class="h-select-root" >
            <div id="slot-default-wrap"><slot id="slot-default"></slot></div>
            <div id="slot-content-wrap"><slot name="slot-content"></slot></div>
        </div>
    `
  },
  styleUrl: require('./select.inline.css'),
})
export default class Select extends BaseComponent {
  static get observedAttributes() {
    return ['placement', 'arrowSelector']
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
    this.root = this.shadowRoot.querySelector('.h-popover-root')
  }

  init() {
  }

  connectedCallback() {
    this.init()
    // if (this.view) this.show()
  }

  initAttribute() {
    this.setAttribute('container', this.container)
    // this.setAttribute('view', this.view)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    switch (attrName) {
      case 'container':
        // this.root.style.backgroundColor = this.bc
        return
      case 'view':
        if (this.view) {
          this.show()
        } else {
          this.hide()
        }
    }
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
