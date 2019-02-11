import {BaseComponent, Component, Prop} from '../core'
import styleMap from './styleMap'
// import { styleType, styleSize, shadow } from './styleMap.js'
const { styleSize } = styleMap

@Component({
  tag: 'h-icon',
  prop: [
    {
      name: 'type',
      type: String,
    },
    {
      name: 'size',
      type: String,
    },
    {
      name: 'loading',
      type: Boolean,
      has: true,
    },
  ],
  template(data) {
    return `
        <svg class="icon" aria-hidden="true">
          <use xlink:href="${data.type}"></use>
        </svg>
    `
  },
  styleUrl: require('./icon.css'),
})
export default class MButton extends BaseComponent {

  static get observedAttributes() {
    return [ 'type', 'size']
  }

  constructor() {
    super()
    this.shadowDom = this.attachShadow({mode: 'open'})
    this.shadowDom.innerHTML = `
        <style>${this.$style()}</style>
        ${this.$template(this)}
        <script></script>
    `
  }

  init() {
    this.firstLoad = true
    if (!this.firstLoad){
      this.initMethod()
      this.initAttribute()
      this.initClass()
      // console.log('第一次加载')
    }

  }

  // 插入到DOM时调用
  connectedCallback() {
    this.init()
    console.log('插入到DOM', this)
  }

  initClass(){
    ['h-icon'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute(){
    // this.setAttribute('color', this.color + '')
    // if (this.loading) this.showLoading()
    this.setAttribute('type', this.type)
  }

  initMethod(){
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
        this.shadowDom.querySelector('use').setAttribute('xlink:href', newVal)
        break;
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

}
