import { Component, MetaData, Watch } from '../core'
import icons from '../core/icon'

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
const style = require('./icon.inline.css');
@MetaData({
  tag: 'h-icon',
  props: [
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
})
export default class HIcon extends Component {

  static get observedAttributes() {
    return ['type', 'color', 'size']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-iconfont')

    this.icons = icons
    this.loadSVG()
  }

  render() {
    return `
        <style>${style()}</style>
        <div class="h-iconfont ${this.loading ? 'h-icon--loading' : ''}">
          <svg class="h-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href='${this.type}'></use>
          </svg>
        </div>
    `
  }

  connectedCallback() {
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

  loadSVG() {
    const existing = this.shadowRoot.querySelector('#__HAPPY_MOBILE_SVG_SPRITE_NODE__')
    if (!existing) this.root.insertAdjacentHTML('afterbegin', this.renderSvgSprite())
  }

  @Watch('type')
  _typeWatch(attrName, oldVal, newVal) {
    this.root.querySelector('.h-icon').querySelector('use')
    .setAttribute('xlink:href', `#${this.type}`)
  }

  @Watch('color')
  _colorWatch(attrName, oldVal, newVal) {
    this.style.color = newVal
  }

  @Watch('size')
  _sizeWatch(attrName, oldVal, newVal) {
    this.style.fontSize = this.size
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

}
