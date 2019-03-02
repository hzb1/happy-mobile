import {BaseComponent, Component} from '../core'
import { isStatusValid } from '../core/util'

// import iconFont from './iconfont'
// import './icon.scss'


const requests = new Map()

@Component({
  tag: 'h-icon',
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
        <!--<link rel="stylesheet" href="https://unpkg.com/happy-mobile@0.0.37/dist/icon-font/icon-font.css">-->
        <!--<span class="h-iconfont ${data.type}"></span>-->
        <!--<img class="h-iconfont" src="${data.type}" alt="">-->
        <div class="h-iconfont"></div>
    `
  },
  styleUrl: require('./icon.inline.css'),
})
export default class MButton extends BaseComponent {

  static get observedAttributes() {
    return [ 'type', 'color', 'size']
  }

  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${this.$style()}</style>
      ${this.$template(this)}
    `

    // console.log(iconFont)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.root = this.shadowRoot.querySelector('.h-iconfont')

    // const link = document.createElement('link')
    // link.rel = 'stylesheet'
    // link.href = 'https://unpkg.com/happy-mobile@0.0.37/dist/icon-font/icon-font.css'
    // script.src = 'https://unpkg.com/happy-mobile@0.0.35/dist/icon-font/icon-font.js'
    // this.shadowRoot.appendChild(link)
    this.loadImg()
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

  loadImg(){
    // console.log('type', this.type)
    if (this.type) {
      const url = `https://unpkg.com/happy-mobile/assets/svg/${this.type}.svg`
      this.getSvg(url).then(res => {
        this.root.innerHTML = res
      })
      // const img = new Image()
      // img.src = `https://unpkg.com/happy-mobile/assets/svg/${this.type}.svg`
      // img.onload = (res) => {
      //   console.log(res.path[0].src, 'res')
      //   this.shadowRoot.querySelector('img').src = res.path[0].src
      // }
      // img.onerror = (err) => {
      //   console.log(err, 'err')
      // }
    }
  }

  getSvg(url) {
    let req = requests.get(url);
    if (!req) {
      req = fetch(url, { cache: 'force-cache' }).then(rsp => {
        if (isStatusValid(rsp.status)) {
          return rsp.text();
        }
        return Promise.resolve(null);
      }).then( res => {
        console.log(res)
        return res
      });

      // cache for the same requests
      requests.set(url, req);
    }
    return req;
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
        // this.root.classList.remove(oldVal)
        // this.root.classList.add(newVal)
        this.loadImg()
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
