import {BaseComponent, Component, Prop} from '../core'
import {toHump} from '../core/util';

const classType = new Map([
  ['', ['h-button--default']],
  [undefined, ['h-button--default']],
  [null, ['h-button--default']],
  ['default', ['h-button--default']],
  ['primary', ['h-button--primary']],
  ['warn', ['h-button--warn']],
  ['error', ['h-button--error']],
  ['text', ['h-button--text']],
])

const classSize = new Map([
  [null, ['h-button--medium']],
  ['small', ['h-button--small']],
  ['medium', ['h-button--medium']],
  ['large', ['h-button--large']],
])

const classRaised = new Map([
  [true, ['mdc-button--raised']],
  [false, []],
])

const classDisabled = new Map([
  [true, []],
  [false, []],
])

@Component({
  tag: 'h-button',
  prop: [
    {
      name: 'loading',
      type: Boolean,
      defaults: false,
    },
    {
      name: 'type',
      defaults: 'default',
    },
    {
      name: 'size',
      defaults: 'medium',
    },
    {
      name: 'disabled',
      type: Boolean,
      defaults: false,
    },
  ],
  template(data) {
    return `
        <button class="${data.$tag}">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
        </button>
    `
  },
  styleUrl: require('./button.css'),
})
export default class MButton extends BaseComponent {

  static get observedAttributes() {
    return [ 'type', 'size', 'raised', 'icon', 'loading']
  }

  // static register (name = 'h-button') {
  //   try {
  //     console.log(customElements)
  //     customElements.define(name, MButton)
  //   } catch (e) {
  //     throw e
  //   }
  //   // const domList = Array.from(document.querySelectorAll(`button[${name}]`))
  //   // domList.forEach((item) => {
  //   //   const d = new MButton()
  //   //   // d.hType = item.getAttribute('hType')
  //   //   d.initProp.call(item)
  //   //   d.initClass.call(item)
  //   //   d.initMethod.call(item)
  //   // })
  // }

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.innerHTML = `
        <style>${this.$style}</style>
        ${this.$template(this)}
    `
    this.root = this.shadow.querySelector('button')
    this.init()
  }

  init() {
    this.firstLoad = false
    this.isLoading = false
    // this.initProp()
    // this.initClass()
    // this.initMethod()

    // dom.hideLoading = this.hideLoading
    //

  }

  // 插入到DOM时调用
  connectedCallback() {
    if (!this.firstLoad){
      this.firstLoad = true
      this.initMethod()
      this.initAttribute()
      this.initClass()
      console.log('第一次加载')
    }
    // console.log('插入到DOM', this)
  }

  initClass(){
    [ ...classType.get(this.type),
      ...classSize.get(this.size),
      'h-button',
    ].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute(){
    this.setAttribute('loading', this.loading)
  }

  initMethod(){
    this.hideLoading = () => {
      const buttonIcon = this.querySelector('.h-button-icon')
      if (buttonIcon) {
        this.removeChild(buttonIcon)
        this.isLoading = false
      }
    }
    this.showLoading = () => {
      if (this.isLoading) {
        return null
      }
      const i = document.createElement('i')
      const text = document.createTextNode('refresh')
      i.appendChild(text)
      i.classList.add('h-button-icon')
      i.classList.add('material-icons')
      this.insertBefore(i, this.childNodes[0])
      this.isLoading = true
      return () => {
        const buttonIcon = this.querySelector('.h-button-icon')
        if (buttonIcon) {
          this.removeChild(buttonIcon)
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
      case 'type':
        classType.get(oldVal).forEach((item) => {
          this.classList.remove(item)
        })
        classType.get(newVal).forEach((item) => {
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

  _upgradeProperty(prop) {
    // console.log(this.prop, this.hasOwnProperty(prop), this.hasAttribute(prop))
    // console.log('_upgradeProperty', prop, this.hasOwnProperty(prop))
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

}
