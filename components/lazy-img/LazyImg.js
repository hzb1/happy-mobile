import { Component, MetaData, Watch } from '../core'

@MetaData({
  tag: 'h-lazy-img',
  props: [
    {
      name: 'src',
      type: String,
      default: '',
    },
    {
      name: 'alt',
      type: String,
      default: '',
    },
    {
      name: 'threshold',
      type: Number,
      default: .5,
    },
  ],
})
export default class LazyImg extends Component {

  static get observedAttributes() {
    return ['src']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-img-root')
  }

  render() {
    return `
      <style>
        :host{
            display: block;
            width: 100%;
            flex-shrink: 0;
        }
        .h-img-root{
            display: block;
            width: 100%;
            height: 100%;
            background-color: #F5F5F5;
            border: 0;
            box-sizing: border-box;
        }
       </style>
      <img class="h-img-root" alt="${this.alt}"  />
    `
  }

  connectedCallback() {
    this.init()
  }

  init() {
    const options = {
      root: null,
      // rootMargin: '320px',
      threshold: 0
    }
    // console.log(options, 'init', this)
    this.io = new IntersectionObserver((entries, observer) => {
      console.log(entries[0], this)
      if (entries[0].isIntersecting) {
        this.setSrc()
        this.removeIO()
      }
    }, options)
    this.io.observe(this)
  }

  setSrc() {
    this.root.src = this.src
  }

  removeIO() {
    if (this.io) {
      this.io.disconnect()
      this.io = undefined
    }
  }

  @Watch('src')
  _srcWatch(attrName, oldVal, newVal) {
    // this.init()
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    console.log('disconnectedCallback')
    this.removeIO()
  }

}
