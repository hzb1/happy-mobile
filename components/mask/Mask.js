import { BaseComponent, Component } from '../core'
import * as animation from '../core/animation/index'
import { transitionMap } from '../core/animation/transition'

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
    {
      name: 'animation', // 动画
      type: String,
      default: '', // fade
    },
  ],
  template(data) {
    return `
        <div class="h-mask-root">
            <slot id="slot-default"></slot>
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
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot.querySelector('.h-mask-root')
  }

  show(name) {
    this.animation = transitionMap.get(name) ? name : 'fade'
    const slotDefault = this.root
    animation.fadeIn(this, { duration: 150 }).then()
    if (name) {
      const { In } =  transitionMap.get(this.animation)
      animation[In](slotDefault)
    }
  }

  hide() {
    // const slotDefault = this.shadowRoot.querySelector('#slot-default')
    const slotDefault = this.root
    if (this.animation === 'fade') {
      animation.fadeOut(this, { duration: 150 }).then(() => {
        this.style.display = 'none'
      })
      return
    }
    const { Out } =  transitionMap.get(this.animation)
    animation[Out](slotDefault).then(()=>{
      animation.fadeOut(this).then(() => {
        this.style.display = 'none'
      })
    })

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
}
