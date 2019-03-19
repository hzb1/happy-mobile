
import Popovers from 'popper.js'
import Tooltip from 'tooltip.js'
import { BaseComponent, Component } from '../core'
import * as animation from '../core/animation/index'

// 文档 https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/tooltip-documentation.md
@Component({
  tag: 'h-popover',
  prop: [
    {
      name: 'placement',
      type: String,
      default: 'top',
    },
    {
      name: 'arrowSelector',
      type: String,
      default: '.tooltip-arrow',
    },
    {
      name: 'innerSelector',
      type: String,
      default: '.tooltip-inner',
    },
    {
      name: 'delay',
      type: Number,
      default: 0,
    },
    {
      name: 'html',
      type: Boolean,
      default: false,
    },
    {
      name: 'template',
      type: String,
      default: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    },
    {
      name: 'title',
      type: String,
      default: '',
    },
    {
      name: 'trigger',
      type: String,
      default: 'hover focus',
    },
    {
      name: 'closeOnClickOutside',
      type: Boolean,
      default: false,
    },
    {
      name: 'boundariesElement',
      type: Boolean,
      default: false,
    },
    {
      name: 'offset',
      type: Number,
      default: 0,
    },
    {
      name: 'popperOptions',
      type: Object,
      default: {},
    },
  ],
  template(data) {
    return `
        <div class="h-popover-root" >
            <div id="slot-default-wrap"><slot id="slot-default"></slot></div>
            <div id="slot-content-wrap"><slot name="slot-content"></slot></div>
        </div>
    `
  },
  styleUrl: require('./popover.inline.css'),
})
export default class Popover extends BaseComponent {
  static get observedAttributes() {
    return ['placement', 'arrowSelector', 'innerSelector', 'delay', 'html', 'template', 'title', 'trigger', 'closeOnClickOutside', 'boundariesElement', 'offset', 'popperOptions']
  }

  set container(value) {
    this.container = value
    console.log('set container', value)
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
    const slotDefaultWrap = this.root.querySelector('#slot-default-wrap')
    const slotContentWrap = this.root.querySelector('#slot-content-wrap')
    this.instance = new Tooltip(slotDefaultWrap, {
      placement: this.placement, // or bottom, left, right, and variations
      arrowSelector: this.arrowSelector,
      delay: this.delay,
      html: this.html,
      template: this.template,
      title: this.title,
      trigger: this.trigger,
      closeOnClickOutside: this.closeOnClickOutside,
      boundariesElement: this.boundariesElement,
      offset: this.offset,
      popperOptions: this.popperOptions,
    })
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
