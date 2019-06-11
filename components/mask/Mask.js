import { Component, MetaData, Watch } from '../core'
import * as animation from '../core/animation/index'
import { transitionMap } from '../core/animation/transition'

const style = require('./mask.inline.css');
@MetaData({
  tag: 'h-mask',
  props: [
    {
      name: 'value',
      type: Boolean,
      default: true,
    },
    {
      name: 'backgroundColor',
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
})
export default class Mask extends Component {
  static get observedAttributes() {
    return ['backgroundColor', 'value']
  }

  constructor() {
    super()
    console.log('backgroundColor1', this.backgroundColor)
    this.root = this.shadowRoot.querySelector('.h-mask-root')

  }

  render() {
    return `
        <style>${style()}</style>
        <div class="h-mask-root" style="background-color: ${this.backgroundColor}">
            <slot id="slot-default"></slot>
        </div>
    `
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
    this.root.addEventListener('click', () => {
      this.emit('backdrop', this)
    }, false)
  }

  connectedCallback() {
    this.init()
    // if (this.value) this.show()
  }

  initAttribute() {
    this.setAttribute('backgroundColor', this.backgroundColor)
    this.setAttribute('value', this.value)
  }

  @Watch('backgroundColor')
  _backgroundColorWatch(attrName, oldVal, newVal) {
    this.root.style.backgroundColor = this.bc
  }

  @Watch('value')
  _valueWatch(attrName, oldVal, newVal) {
    this.value ? this.show() : this.hide()
  }

  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
