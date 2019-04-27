import { BaseComponent, Component } from '../core'

@Component({
  tag: 'h-img',
  prop: [
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
  template(data) {
    return `
       
    `
  },
})
export default class Img extends BaseComponent {

  static get observedAttributes() {
    return ['src']
  }

  constructor() {
    super()
    // this.attachShadow({ mode: 'open' })
    // const template = document.createElement('template')
    // template.innerHTML = `
    //
    // `
    // this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot.querySelector('.h-img-root')
  }

  render() {
    return `
      <style>
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

  load() {
    this.root.src = this.src
  }

  removeIO() {
    if (this.io) {
      this.io.disconnect()
      this.io = undefined
    }
  }

  init() {

    const options = {
      // root: this.closest('h-carousel') ? this.closest('h-carousel') : null,
      // rootMargin: '0px',
      threshold: this.threshold
    }
    this.io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.load()
        this.removeIO()
      }
    }, options)
    this.io.observe(this)
    this.firstLoad = true
    this.initAttribute()
  }

  connectedCallback() {
    this.init()
  }

  initAttribute() {
    if (this.src) {
      // this.setAttribute('src', this.src)
    }
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    console.log(attrName, 'oldVal:', oldVal, 'newVal:', newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'src':
        this.init()
        break
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    this.removeIO()
  }

}
