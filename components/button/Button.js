import { BaseComponent, Component} from '../core'
// import { styleType, styleSize, shadow } from './styleMap'
import styleMap from './styleMap'
const { styleColor, styleSize, styleShadow, styleDisabled, styleInline } = styleMap

@Component({
  tag: 'h-button',
  prop: [
    {
      name: 'color',
      type: String,
      default: 'primary',
    },
    {
      name: 'loading',
      type: Boolean,
    },
    {
      name: 'size',
      type: String,
      default: 'medium',
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
    {
      name: 'type',
      type: String,
      default: 'button',
    },
  ],
  template(data) {
    return `
        <button class="${data.$tag}" type=${data.type} >
            <slot></slot>
        </button>
    `
  },
  styleUrl: require('./button.inline.css'),
})
export default class Button extends BaseComponent {

  static get observedAttributes() {
    return [ 'color', 'size', 'raised', 'icon', 'loading', 'shadow', 'disabled', 'inline']
  }

  constructor() {
    super();
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

  connectedCallback() {
    if (!this.firstLoad){
      this.initMethod()
      this.initClass()
      this.firstLoad = true
    }
    this.initAttribute()
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
    this.setAttribute('type', this.type)
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
        this.disabled = false
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
      this.disabled = true
      return () => {
        const button = this.shadowDom.querySelector('button')
        const buttonIcon = button.querySelector('h-icon')
        if (buttonIcon) {
          button.removeChild(buttonIcon)
          this.isLoading = false
          this.disabled = false
        }
      }
    }

    if (this.type === 'submit' || this.type === 'reset') {
      this.addEventListener('click', function (ev) {
        const form = this.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }, false)

    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return;
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'color':
        styleColor.get(oldVal).forEach((item) => {
          this.classList.remove(item)
        })
        styleColor.get(this.color).forEach((item) => {
          this.classList.add(item)
        })
        return;
      case 'size':
        styleSize.get(oldVal).forEach((item) => {
          this.classList.remove(item)
        })
        styleSize.get(newVal).forEach((item) => {
          this.classList.add(item)
        })
        return;
      case 'loading':
        if (this.loading) {
          this.showLoading()
        } else {
          this.hideLoading()
        }
        return;
      case 'disabled':
        if (this.disabled) {
          this.classList.add(styleDisabled.get(true))
        } else {
          this.classList.remove(styleDisabled.get(true))
        }
        return;
      case 'shadow':
        if (this.shadow) {
          this.classList.add(styleShadow.get(true))
        } else {
          this.classList.remove(styleShadow.get(true))
        }
        return;
      case 'inline':
        this.classList.toggle(styleInline.get(true))
        return;
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
