import {BaseComponent, Component} from '../core'

@Component({
  tag: 'h-grid',
  prop: [
    {
      name: 'data',
      type: Array,
    },
    {
      name: 'column',
      type: Number,
    },
  ],
  template(data) {
    return `
       <div class="h-grid-root">
            <slot></slot>
       </div>
    `
  },
  styleUrl: require('./grid.inline.css'),
})
export default class Grid extends BaseComponent {

  static get observedAttributes() {
    return ['data', 'column']
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
    this.root = this.shadow.querySelector('.h-grid-root')
    // console.log(this.slot)
    // console.log(this.shadow.slot)
    console.log(this.root.slot)
    console.log(this.root.children)
  }

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.initAttribute()
      this.initClass()
      this.firstLoad = true
    }

  }

  connectedCallback() {
    this.init()
  }

  initClass() {
    ['h-grid'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute() {
    // this.setAttribute('type', this.type)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return;
    console.log(attrName, 'oldVal:', oldVal, 'newVal:', newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
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
