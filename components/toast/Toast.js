
import { BaseComponent, Component } from '../core'
import {
  fadeIn,
  fadeOut,
} from '../core/animation'
import { If } from '../core/util/util'

@Component({
  tag: 'h-toast',
  prop: [
    {
      name: 'content',
      type: String,
      default: '',
    },
    {
      name: 'type',
      type: String,
      default: 'text', // text loading
    },
    {
      name: 'mask',
      type: Boolean,
      default: false,
    },
    // {
    //   name: 'maskBc',
    //   type: String,
    //   default: 'rgba(0,0,0,0)',
    // },
  ],
  template(data) {
    return `
      <div class="h-toast-root">
          <span class="h-toast-content">
              ${If(data.type === 'loading', `<h-icon type="loading" loading="true"></h-icon>`)}
              ${If(data.content, `<p>${data.content}</p>`)}
          </span>
      </div>
      ${ data.mask ? `<h-mask class="h-toast-mask"></h-mask>`: ''}
    `
  },
  styleUrl: require('./toast.inline.css'),
})
export default class Toast extends BaseComponent {
  static get observedAttributes() {
    return ['content', 'maskbc', 'mask', 'type', 'loading']
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
  static show(content, time = 2500) {
    const hasToast = document.querySelector('h-toast')
    if (hasToast) this.hide()
    const Toast = customElements.get('h-toast')
    const toast = new Toast()
    toast.content = content.toString()
    document.body.appendChild(toast)
    const toastContent = toast.shadowRoot.querySelector('.h-toast-content')
    fadeIn(toastContent, { duration: 100 }).then()
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
      fadeOut(toastContent, { duration: 100 }).then(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast)
      })
    }
  }

  // loading
  static loading(content = '') {
    const hasToast = document.querySelector('h-toast')
    if (hasToast) this.hide()
    const toast = new Toast()
    toast.type = 'loading'
    toast.mask = true
    toast.content = content
    document.body.appendChild(toast)
    const toastContent = toast.shadowRoot.querySelector('.h-toast-content')
    fadeIn(toastContent, { duration: 250 }).then()
    return this.hide
  }

  init() {
    if (!this.firstLoad) {
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
    this.setAttribute('maskbc', this.maskBc)
    this.setAttribute('type', this.type)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    switch (attrName) {
      case 'content':
        this.root.querySelector('.h-toast-content').innerHTML = newVal
        break
      case 'mask':
        if (this.mask) {
          const mask = document.createElement('h-mask')
          this.shadowRoot.appendChild(mask)
        }
        break
      // case 'maskbc':
      //   if (this.mask) {
      //     const mask = this.shadowRoot.querySelector('h-mask')
      //     // mask.bc = this.maskBc
      //   }
      //   break
      case 'type':
        this.shadowRoot.innerHTML = `
          <style>${this.$style()}</style>
          ${this.$template(this)}
        `
        break
    }
  }
}
