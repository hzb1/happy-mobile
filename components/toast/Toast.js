
import { BaseComponent, Component } from '../core'
import {
  fadeIn,
  fadeOut,
} from '../core/animation'

@Component({
  tag: 'h-toast',
  prop: [
    {
      name: 'content',
      type: String,
    },
    {
      name: 'type',
      type: String,
      default: 'text',
    },
    {
      name: 'mask',
      type: Boolean,
      default: true,
    },
  ],
  template(data) {
    return `
      <div class="h-toast-root">
          <span class="h-toast-content">${data.content}</span>
      </div>
      ${ data.mask ? '<h-mask class="h-toast-mask" bc="rgba(0,0,0,0)"></h-mask>': ''}
    `
  },
  styleUrl: require('./toast.inline.css'),
})
export default class Toast extends BaseComponent {
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
    this.root = this.shadowRoot.querySelector('.h-toast-root')
  }

  // 显示
  static show(content, time = 1500) {
    const hasToast = document.querySelector('h-toast')
    if (hasToast) this.hide()
    const Toast = customElements.get('h-toast')
    const toast = new Toast()
    toast.content = content
    document.body.appendChild(toast)
    const toastContent = toast.shadowRoot.querySelector('.h-toast-content')
    fadeIn(toastContent, { duration: 250 }).then()
    if (time) {
      setTimeout(this.hide, time)
      return null
    }
    return this.hide
  }

  // 隐藏
  static hide() {
    const toast = document.querySelector('h-toast')
    if (toast) {
      const toastContent = toast.shadowRoot.querySelector('.h-toast-content')
      fadeOut(toastContent, { duration: 250 }).then(()=>{
        if (toast.parentNode) toast.parentNode.removeChild(toast)
      })
    }
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
    this.setAttribute('content', this.content)
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
    // console.log('从DOM中移除时调用', document.querySelector('h-toast'))
  }
}
