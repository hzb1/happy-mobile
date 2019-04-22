import { BaseComponent, Component } from '../core'

@Component({
  tag: 'h-carousel',
  prop: [
    {
      name: 'value', // 当前显示的索引
      type: Number,
      default: 0,
    },
    {
      name: 'height', // height
      type: String,
      default: '150px',
    },
    {
      name: 'autoplay', // 是否自动切换
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'autoplayInterval', // 自动切换的时间间隔
      type: Number,
      default: 3500,
    },
    {
      name: 'infinite', // 是否循环播放
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'vertical', // 垂直显示
      type: Boolean,
      has: true,
      default: false,
    },
    {
      name: 'dots', // 是否显示面板指示点
      type: Boolean,
      has: true,
      default: true,
    },
  ],
  styleUrl: require('./carousel.inline.css'),
})
export default class Carousel extends BaseComponent {

  static get observedAttributes() {
    return ['dots', 'value']
  }

  constructor() {
    super()
    this.root = this.shadowRoot.querySelector('.h-carousel-root')
    this.carouselItem = Array.from(this.querySelectorAll('h-carousel-item'))
    this.carouselContent = this.shadowRoot.querySelector('#carousel-content')
    // const slotContent = this.shadowRoot.querySelector('#slot-content')
    if (!this.carouselItem.length) {
      console.log('无carouselItem！')
      return
    }

  }

  render() {
    return `
      <style>${this.$style()}</style>
      <div class="h-carousel-root">
        <div class="carousel-content" id="carousel-content">
          <slot id="slot-content"></slot>
          <!--<div id="clone-content"></div>-->
        </div>
        <div id="carousel-dots" class="carousel-dots ${this.vertical ? 'carousel-dots-vertical' : ''}">
            ${ this.dots && this.carouselItem ? `${this.carouselItem.map((item, index) => `
                <span class="${this.value === index ? 'current' : ''}"></span>`).join('')}` : ''}
        </div>
      </div>
    `
  }

  watchData() {
    this.root.innerHTML = `
      <div class="carousel-content" id="carousel-content">
          <slot id="slot-content"></slot>
          <div id="clone-content"></div>
        </div>
        <div id="carousel-dots" class="carousel-dots ${this.vertical ? 'carousel-dots-vertical' : ''}">
            ${this.carouselItem ? `${ this.carouselItem.map((item, index) => `
                <span class="${this.value === index ? 'current' : ''}"></span>`).join('')}` : ''}
        </div>
    `
  }

  watchDots() {
    this.root.querySelector('#carousel-dots').innerHTML = `
    ${this.carouselItem ? ` ${
      this.carouselItem.map((item, index) => `<span class="${this.value === index ? 'current' : ''}"></span>`).join('')}` : ''}
    `
  }

  init() {
    if (!this.firstLoad) {
      this.initMethod()
      this.firstLoad = true
      this.timer = null
      this.watchData()
    }
    this.initAttribute()

    const cloneContent = this.shadowRoot.querySelector('#clone-content')
    cloneContent.innerHTML = this.innerHTML

    let width = 0
    this.style.height = this.height
    // this.carouselItem.unshift(this.carouselItem[0])
    // this.carouselItem.push(this.carouselItem[this.carouselItem.length - 1])
    // const carouselItem = [this.carouselItem[0], ...this.carouselItem, this.carouselItem[this.carouselItem.length - 1]]
    const unshiftItem = this.carouselItem[this.carouselItem.length - 1].cloneNode(true)
    const pushItem = this.carouselItem[0].cloneNode(true)
    this.insertBefore(unshiftItem, this.carouselItem[0])
    this.appendChild(pushItem)
    // console.log(carouselItem)
    Array.from(this.querySelectorAll('h-carousel-item')).forEach((item, index) => {
      item.style.width = `${this.offsetWidth}px`
      item.style.height = this.height
      item.style.position = 'absolute'
      item.style.top = '0'
      item.style.left = `${index * item.offsetWidth}px`
      width += item.offsetWidth
    })

    const carouselContent = this.shadowRoot.querySelector('#carousel-content')
    carouselContent.style.width = `${width}px`
    // if (this.timer) clearInterval(this.timer); // 清空计时器

    // 是否自动切换
    if (this.autoplay) {
      this.timer = setInterval(() => {
        if (this.value < this.carouselItem.length - 1) {
          this.value = this.value + 1
        } else {
          this.value = 0
        }
      }, this.autoplayInterval);
    }

  }

  run(oldVal, newVal) {
    const old_val = Number(oldVal)
    const new_val = Number(newVal)
    // console.log( old_val, new_val )
    const carouselContent = this.shadowRoot.querySelector('#carousel-content')

    if (old_val === (this.carouselItem.length - 1) && new_val === 0) { // 从最后一张翻到第一张
      let x = -((old_val + 2) * this.offsetWidth)
      carouselContent.style.transition = `transform .35s`
      carouselContent.style.transform = `translate3d(${x}px, 0, 0)`
      let end = () => {
        carouselContent.style.transition = `transform 0s`
        carouselContent.style.transform = `translate3d(${-(this.value + 1) * this.offsetWidth}px, 0, 0)`
        carouselContent.removeEventListener('transitionend', end)
      }
      carouselContent.addEventListener('transitionend', end)
    } else if (old_val === 0 && new_val === (this.carouselItem.length - 1)) { // 从第一张翻到最后一张
        console.log('代码没写')
    } else { //向右翻
      let x = -((this.value + 1) * this.offsetWidth)
      carouselContent.style.transition = `transform .35s`
      carouselContent.style.transform = `translate3d(${x}px, 0, 0)`
    }
    this.watchDots()
    // console.log('run', `${x}px`, carouselContent)
  }

  connectedCallback() {
    this.init()
  }

  initAttribute() {
    this.setAttribute('value', this.value)
    this.setAttribute('dots', this.dots)
    this.setAttribute('vertical', this.vertical)
    this.setAttribute('autoplayInterval', this.autoplayInterval)
  }

  initMethod() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.firstLoad) return
    // console.log(attrName, 'oldVal:', oldVal, 'newVal:',newVal, '属性改变时调用', typeof newVal, 'attrName', this[attrName])
    switch (attrName) {
      case 'value':
        this.run(oldVal, newVal)
        // console.warn('value', this.value, oldVal)

        // this.watchData()
    }
  }

  // 从DOM中移除时调用
  disconnectedCallback() {
    // console.log('插入到DOM', this)
  }
}
