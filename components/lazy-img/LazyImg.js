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
      default: 0,
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
      // root: this.closest('h-carousel') ? this.closest('h-carousel') : null,
      // rootMargin: '0px',
      // threshold: 1
      threshold: this.threshold
    }
    this.io = new IntersectionObserver((entries, observer) => {
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
    this.init()
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    this.removeIO()
  }

}
