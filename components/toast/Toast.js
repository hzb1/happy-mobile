import { Component, MetaData, Watch } from '../core'
import {
  fadeIn,
  fadeOut,
} from '../core/animation'

const style = require('./toast.inline.css')
@MetaData({
  tag: 'h-toast',
  props: [
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
  ],
})
export default class Toast extends Component {
  static get observedAttributes() {
    return ['content', 'maskbc', 'mask', 'type', 'loading']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-toast-root')
  }

  render() {
    return `
       <style>${style()}</style>
      <div class="h-toast-root">
          <span class="h-toast-content">
              ${this.type === 'loading' ? `<h-icon type="loading" loading="true"></h-icon>` : ''}
              ${this.content ? `<p>${this.content}</p>` : ''}
          </span>
      </div>
      ${ this.mask ? `<h-mask class="h-toast-mask"></h-mask>` : ''}
    `
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
    fadeIn(toastContent, { duration: 100 })
    .then()
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
      fadeOut(toastContent, { duration: 100 })
      .then(() => {
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
    fadeIn(toastContent, { duration: 250 })
    .then()
    return this.hide
  }

  connectedCallback() {
    this._initStyle()
    this._initAttribute()
  }

  _initStyle() {
    ['h-toast'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  _initAttribute() {
    this.setAttribute('content', this.content)
    this.setAttribute('maskbc', this.maskBc)
    this.setAttribute('type', this.type)
  }

  @Watch('content')
  _contentWatch(attrName, oldVal, newVal) {
    this.root.querySelector('.h-toast-content').innerHTML = newVal
  }

  @Watch('mask')
  _maskWatch(attrName, oldVal, newVal) {
    if (this.mask) {
      const mask = document.createElement('h-mask')
      this.shadowRoot.appendChild(mask)
    }
  }

  @Watch('type')
  _typeWatch(attrName, oldVal, newVal) {
    this.shadowRoot.innerHTML = this.render()
  }

}
