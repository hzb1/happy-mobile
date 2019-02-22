import { BaseComponent, Component } from '../core'

@Component({
  tag: 'h-mask',
  prop: [
    {
      name: 'bc',
      type: String,
      default: 'rgba(0,0,0,.35)',
    },
    {
      name: 'backdrop',
      type: Boolean,
      default: true,
    },
  ],
  template(data) {
    return `
        <div class="h-mask-root">
            <slot></slot>
        </div>
    `
  },
  styleUrl: require('./mask.inline.css'),
})
export default class Mask extends BaseComponent {
  static get observedAttributes() {
    return ['bc']
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `
    this.shadow.appendChild(template.content.cloneNode(true))
    this.root = this.shadow.querySelector('.h-mask-root')
  }

  show() {
    this.animationIn()
  }

  hide() {
    this.animationOut()
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
  }

  initAttribute() {
    this.setAttribute('bc', this.bc)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:', newVal, '属性改变时调用', typeof newVal, this[attrName])
    switch (attrName) {
      // case 'show':
      //   if (this.show) {
      //     console.log(this.show, 'this')
      //     this.show()
      //   } else {
      //     this.hide()
      //   }
      //   return;
      case 'bc':
        this.style.backgroundColor = this.bc
    }
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

  animationIn(option = { endDelay: 0 }) {
    this.style.display = 'block'
    const player = this.animate([
      { opacity: 0 },
      { opacity: 1 },
    ], {
      duration: 100,
      easing: 'ease-in',
      endDelay: option.endDelay,
    })
    player.addEventListener('finish', () => {
      this.style.opacity = 1
      this.style.display = 'block'
    })
  }

  animationOut(option = { endDelay: 0 }) {
    const player = this.animate([
      { opacity: 1 },
      { opacity: 0 },
    ], {
      duration: 100,
      endDelay: option.endDelay,
      easing: 'ease-out',
    })
    player.addEventListener('finish', () => {
      this.style.opacity = 0
      this.style.display = 'none'
      // if (this.parentNode) this.parentNode.removeChild(this)
    })
  }
}
