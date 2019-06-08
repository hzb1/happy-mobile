import {  styleColor,  styleSize,  styleShadow,  styleDisabled,  styleInline,  styleOutline,} from './styleMap'import { fadeIn, fadeOut } from '../core/animation'import Component from '../core/component'import { MetaData, Watch } from '../core/decorator'const styleUrl = require('./button.inline.css')@MetaData({  tag: 'h-button',  props: [    {      name: 'color',      type: String,      default: 'primary',    },    {      name: 'loading',      type: Boolean,      has: true,      default: false,    },    {      name: 'size',      type: String,      default: 'medium', // medium small large    },    {      name: 'outline', // 外边框      type: Boolean,      has: true,      default: false,    },    {      name: 'shadow',      type: Boolean,      has: true,      default: false,    },    {      name: 'inline',      type: Boolean,      has: true,      default: false,    },    {      name: 'type',      type: String,      default: 'button',    },  ],})export default class Button extends Component {  static get observedAttributes() {    return ['color', 'size', 'raised', 'icon', 'loading', 'shadow', 'disabled', 'inline']  }  get disabled() {    return this.hasAttribute('disabled')  }  set disabled(value) {    if (value) {      this.setAttribute('disabled', value)    } else {      this.removeAttribute('disabled')    }  }  constructor() {    super()    this.root = this.shadowRoot.querySelector('button')  }  render() {    return `        <style>${styleUrl()}</style>        <button class="${this.$tag}" type=${this.type} >            <slot></slot>        </button>    `  }  connectedCallback() {    this._initEventListener()    this._initStyle()  }  _initStyle() {    [...styleColor.get(this.color),      ...styleSize.get(this.size),      ...styleShadow.get(this.shadow),      ...styleDisabled.get(this.disabled),      ...styleInline.get(this.inline),      ...styleOutline.get(this.outline),      'h-button',    ].forEach((cla) => {      this.classList.add(cla)    })  }  _initEventListener() {    if (this.type === 'submit' || this.type === 'reset') {      this.addEventListener('click', function (ev) {        const form = this.closest('form')        if (form) {          ev.preventDefault()          const fakeButton = document.createElement('button')          fakeButton.type = this.type          fakeButton.style.display = 'none'          form.appendChild(fakeButton)          fakeButton.click()          // form.removeChild(fakeButton)          fakeButton.remove()        }      }, false)    }  }  hideLoading() {    const button = this.shadowRoot.querySelector('button')    const buttonIcon = button.querySelector('h-icon')    if (buttonIcon) {      fadeOut(buttonIcon)      .then(() => {        if (buttonIcon.parentNode) buttonIcon.parentNode.removeChild(buttonIcon)      })      this.isLoading = false      this.disabled = false    }  }  showLoading() {    if (this.isLoading) {      return null    }    const Icon = customElements.get('h-icon')    if (!Icon) {      console.error(`[happy-mobil]: h-button组件依赖于h-icon组件，需先导入h-icon组件`)    }    const i = new Icon()    i.type = 'loading'    const button = this.shadowRoot.querySelector('button')    button.insertBefore(i, button.childNodes[0])    i.classList.add('h-icon--loading')    fadeIn(i)    .then()    this.isLoading = true    this.disabled = true    return this.hideLoading.bind(this);  }  @Watch('color')  _colorWatch(attrName, oldVal, newVal) {    if (styleColor.get(oldVal)) {      styleColor.get(oldVal).forEach((item) => this.classList.remove(item))    }    if (styleColor.get(newVal)) {      styleColor.get(newVal).forEach((item) => this.classList.add(item))    }  }  @Watch('size')  _sizeWatch(attrName, oldVal, newVal) {    if (styleSize.get(oldVal)) {      styleSize.get(oldVal)      .forEach((item) => this.classList.remove(item))    }    if (styleSize.get(newVal)) {      styleSize.get(newVal)      .forEach((item) => this.classList.add(item))    }  }  @Watch('loading')  _loadingWatch(attrName, oldVal, newVal) {    this.loading ? this.showLoading() : this.hideLoading()  }  @Watch('disabled')  _disabledWatch(attrName, oldVal, newVal) {    this.classList.toggle(styleDisabled.get(true), this.disabled)  }  @Watch('shadow')  _shadowWatch(attrName, oldVal, newVal) {    this.classList.toggle(styleShadow.get(true), this.shadow)  }  @Watch('inline')  _inlineWatch(attrName, oldVal, newVal) {    this.classList.toggle(styleInline.get(true), this.inline)  }  // 从DOM中移除时调用  disconnectedCallback() {    // console.log('插入到DOM', this)  }}