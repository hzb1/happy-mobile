import { BaseComponent, Component } from '../core'
import SwipeRevealItem from '../core/Swipe'
import { Html } from '../core/util/util'

const property = () => {}

@Component({
  tag: 'h-carousel',
  prop: [
    {
      name: 'content',
      type: String,
      default: 'default',
    },
    {
      name: 'myArray',
      type: Array,
      default: [
        {
          title: 'title1'
        },
        {
          title: 'title2'
        },
        {
          title: 'title3'
        },
      ],
    },
    {
      name: 'myBool',
      type: Boolean,
      default: true,
    },
  ],
  template(data) {
    return `
      <div class="h-carousel-root">
        <div class="carousel-content" id="carousel-content">
          <slot id="slot-content"></slot>
        </div>
      </div>
    `
  },
  styleUrl: require('./carousel.inline.css'),
})
export default class Carousel extends BaseComponent {

  static get observedAttributes() {
    return ['content', 'mask']
  }

  constructor() {
    super()
    // this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.root = this.shadowRoot.querySelector('.h-carousel-root')
    // const slotContent = this.shadowRoot.querySelector('#slot-content')
    // console.log(slotContent.assignedNodes())

    // this.message = 'Hello world! From my-element';
    // this.myArray = ['an','array','of','test','data'];
    // this.myBool = true;
  }

  render() {
    return `
      <p>${this.content}</p>
      <ul>${ (this.myArray.map((item, i) => `<li>${i}: ${item.title}</li>`)).join('') }</ul>
      ${this.myBool ?
      `<p>Render some HTML if myBool is true</p>` :
      `<p>Render some other HTML if myBool is false</p>`}
      <button>Click</button>
    `
  }

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.initClass()
      this.firstLoad = true
    }
    this.initAttribute()
  }

  clickHandler() {
    console.log(this);
    this.myBool = !this.myBool;
  }

  connectedCallback() {
    this.init()
  }

  initClass() {
    ['h-toast'].forEach((cla) => {
      this.classList.add(cla)
    })
  }

  initAttribute() {
    // this.setAttribute('content', this.content)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'content':
        this.root.querySelector('.h-toast-content').innerHTML = newVal
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
