

import {BaseComponent, Component} from '../core'
import { If, isStatusValid } from '../core/util/util'
import icons from '../core/icon'

// import iconFont from './iconfont'
// import './icon.scss'

// const iconHandler = new IconHandler()
const requests = new Map()
const svgSprite = contents => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="__HAPPY_MOBILE_SVG_SPRITE_NODE__"
  style="position:absolute;width:0;height:0"
>
  <defs>
    ${contents}
  </defs>
</svg>
`

// <div class="h-iconfont ${If(this.loading, 'h-icon--loading')}">
@Component({
  tag: 'h-icon',
  prop: [
    {
      name: 'type',
      type: String,
      default: '',
    },
    {
      name: 'color',
      type: String,
    },
    {
      name: 'size',
      type: String,
    },
    {
      name: 'loading',
      type: Boolean,
      has: true,
      default: false,
    },
  ],
  template(data) {
    return `
        <!--<link rel="stylesheet" href="https://unpkg.com/happy-mobile@0.0.37/dist/icon-font/icon-font.css">-->
        <!--<span class="h-iconfont ${data.type}"></span>-->
        <!--<img class="h-iconfont" src="${data.type}" alt="">-->
        <div class="h-iconfont ${If(this.loading, 'h-icon--loading')}">
          <svg class="h-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${data.type}"></use>
          </svg>
        </div>
    `
  },
  styleUrl: require('./icon.inline.css'),
})
export default class MButton extends BaseComponent {

  static get observedAttributes() {
    return [ 'type', 'color', 'size']
  }

  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot.querySelector('.h-iconfont')

    this.icons = icons
    this.load()
  }

  init() {
    if (!this.firstLoad){
      this.initMethod()
      this.initClass()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  connectedCallback() {
    this.init()
  }

  renderSvgSprite() {
    const symbols = Object.keys(this.icons)
    .map((iconName) => {
      const svgContent = this.icons[iconName].split('svg')[1]
      return `<symbol id=${iconName}${svgContent}symbol>`
    })
    .join('')
    return svgSprite(symbols)
  }

  load() {
    if (!document) {
      return
    }
    const existing = this.shadowRoot.getElementById('__HAPPY_MOBILE_SVG_SPRITE_NODE__')
    const mountNode = this.root

    if (!existing) {
      mountNode.insertAdjacentHTML('afterbegin', this.renderSvgSprite())
    }
  }

  initClass(){
    ['h-icon'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute(){
    this.setAttribute('type', this.type)
  }

  initMethod(){
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return;
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'type':
        // this.root.classList.remove(oldVal)
        // this.root.classList.add(newVal)
        // this.load()
        this.root.querySelector('.h-icon').querySelector('use').setAttribute('xlink:href', `#${this.type}`)
        // this.loadImg()
        break;
      case 'color':
        this.style.color = newVal
        break;
      case 'size':
        this.style.size = size
        break;
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

}
