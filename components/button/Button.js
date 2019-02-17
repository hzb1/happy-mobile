import {BaseComponent, Component} from '../core'
// import { styleType, styleSize, shadow } from './styleMap'
import styleMap from './styleMap'
const { styleColor, styleSize, styleShadow, styleDisabled, styleInline } = styleMap

@Component({
  tag: 'h-button',
  prop: [
    {
      name: 'loading',
      type: Boolean,
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
      name: 'outline', // 外边框
      type: Boolean,
      has: true,
    },
    {
      name: 'disabled',
      type: Boolean,
      has: true,
    },
    {
      name: 'shadow',
      type: Boolean,
      has: true,
    },
    {
      name: 'inline',
      type: Boolean,
      has: true,
    },
  ],
  template(data) {
    return `
        <button class="${data.$tag}">
            <span>
                <slot></slot>
            </span>
        </button>
    `
  },
  styleUrl: require('./button.inline.css'),
})
export default class MButton extends BaseComponent {

  static get observedAttributes() {
    return [ 'color', 'size', 'raised', 'icon', 'loading', 'shadow', 'disabled', 'inline']
  }

  constructor() {
    super()
    this.shadowDom = this.attachShadow({mode: 'open'})
    this.shadowDom.innerHTML = `
        <style>${this.$style()}</style>
        ${this.$template(this)}
    `
    this.root = this.shadowDom.querySelector('button')
    // this.init()
  }

  init() {
    this.firstLoad = false
    this.isLoading = false

  }

  // 插入到DOM时调用
  connectedCallback() {
    if (!this.firstLoad){
      this.initMethod()
      this.initAttribute()
      this.initClass()
      this.firstLoad = true
    }
  }

  initClass(){
    [ ...styleColor.get(this.color),
      ...styleSize.get(this.size),
      ...styleShadow.get(this.shadow),
      ...styleDisabled.get(this.disabled),
      ...styleInline.get(this.inline),
      'h-button',
    ].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute(){
    this.setAttribute('shadow', this.shadow)
    // if (this.loading) this.showLoading()
    // this.setAttribute('loading', this.loading)
  }

  initMethod(){
    this.hideLoading = () => {
      const button = this.shadowDom.querySelector('button')
      const buttonIcon = button.querySelector('h-icon')
      if (buttonIcon) {
        button.removeChild(buttonIcon)
        this.isLoading = false
      }
    }
    this.showLoading = () => {
      if (this.isLoading) {
        return null
      }
      const Icon = customElements.get('h-icon');
      const i = new Icon()
      const button = this.shadowDom.querySelector('button')
      button.insertBefore(i, button.childNodes[0])
      i.type = 'h-loading'
      i.classList.add('h-icon--loading')
      this.isLoading = true
      return () => {
        const button = this.shadowDom.querySelector('button')
        const buttonIcon = button.querySelector('h-icon')
        if (buttonIcon) {
          button.removeChild(buttonIcon)
          this.isLoading = false
        }
      }
    }
  }

  /**
   * 属性改变时调用(添加、移除、更新或替换)
   * @param attrName
   * @param oldVal
   * @param newVal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return;
    console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'color':
        styleColor.get(oldVal).forEach((item) => {
          this.classList.remove(item)
        })
        styleColor.get(this.color).forEach((item) => {
          this.classList.add(item)
        })
        break;
      case 'size':
        styleSize.get(oldVal).forEach((item) => {
          this.classList.remove(item)
        })
        styleSize.get(newVal).forEach((item) => {
          this.classList.add(item)
        })
        break;
      case 'loading':
        if (this.loading) {
          this.showLoading()
        } else {
          this.hideLoading()
        }
        break;
      case 'disabled':
        this.classList.toggle(styleDisabled.get(true))
        break;
      case 'shadow':
        this.classList.toggle(styleShadow.get(true))
        break;
      case 'inline':
        this.classList.toggle(styleInline.get(true))
        break;
    }
    // this.classList = [
    //   ...this.classList,
    //   ...classType.get(this.type),
    //   ...classSize.get(this.size),
    //   'h-button',
    // ].join(' ')
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

}
