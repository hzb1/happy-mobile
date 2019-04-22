import { BaseComponent, Component } from '../core'
import * as animation from '../core/animation/index'
import { transitionMap } from '../core/animation/transition'

@Component({
  tag: 'h-mask',
  prop: [
    {
      name: 'view',
      type: Boolean,
      default: true,
    },
    {
      name: 'bc',
      type: String,
      default: 'rgba(0,0,0, 0.35)',
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
        <div class="h-mask-root" style="background-color: ${data.bc}">
            <slot id="slot-default"></slot>
        </div>
    `
  },
  styleUrl: require('./mask.inline.css'),
})
export default class Mask extends BaseComponent {
  static get observedAttributes() {
    return ['bc', 'view']
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
    animation.fadeIn(this, { duration: 150 }).then()
    const slotDefault = this.shadowRoot.querySelector('#slot-default')
    if (slotDefault.assignedNodes().length) {
      this.animation = transitionMap.get(name) ? name : 'fade'
      const { In } = transitionMap.get(this.animation)
      animation[In](slotDefault)
    }
  }

  hide() {
    // const slotDefault = this.shadowRoot.querySelector('#slot-default')
    const slotDefault = this.shadowRoot.querySelector('#slot-default')
    if (this.animation === '') {
      animation.fadeOut(this, { duration: 150 }).then(() => {
        this.style.display = 'none'
      })
      return
    }
    if (slotDefault.assignedNodes().length){
      const { Out } = transitionMap.get(this.animation)
      animation[Out](slotDefault, { duration: 150 }).then(() => {
        animation.fadeOut(this, { duration: 150 }).then(() => {
          this.style.display = 'none'
        })
      })
    } else {
      animation.fadeOut(this, { duration: 150 }).then(() => {
        this.style.display = 'none'
      })
    }

  }

  init() {
    this.initAttribute()
    this.root.addEventListener('click', () => {
      this.emit('backdrop', this)
    }, false)
  }

  connectedCallback() {
    this.init()
    // if (this.view) this.show()
  }

  initAttribute() {
    this.setAttribute('bc', this.bc)
    this.setAttribute('view', this.view)
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
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
        this.root.style.backgroundColor = this.bc
        return
      case 'view':
        if (this.view) {
          this.show()
        } else {
          this.hide()
        }
        return
    }
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
