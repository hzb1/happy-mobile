import {BaseComponent, Component} from '../core'

@Component({
  tag: 'h-toast',
  prop: [
    {
      name: 'type',
      type: String,
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
      name: 'loading',
      type: Boolean,
      has: true,
    },
  ],
  template(data) {
    return `
        <span class="h-iconfont ${data.type}"></span>
    `
  },
  styleUrl: require('./toast.inline.css'),
})
export default class Toast extends BaseComponent {

  static get observedAttributes() {
    return [ 'type', 'color', 'size']
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `
    this.shadow.appendChild(template.content.cloneNode(true))
    this.root = this.shadow.querySelector('.h-iconfont')
  }

  init() {
    if (!this.firstLoad){
      this.initMethod()
      this.initClass()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  connectedCallback() {
    this.init()
  }

  initClass(){
    ['h-icon'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute(){
    this.setAttribute('type', this.type)
  }

  initMethod(){
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return;
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'type':
        this.root.classList.remove(oldVal)
        this.root.classList.add(newVal)
        break;
      case 'color':
        this.style.color = newVal
        break;
      case 'size':
        this.style.size = size
        break;
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }

}
