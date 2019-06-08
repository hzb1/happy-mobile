import list from '../../config'

const html = require('./home.html')

export default class Home extends HTMLElement {
  static get tagName() {
    return 'app-home'
  }

  constructor() {
    super()

    this.list = list
  }

  connectedCallback() {
    this.innerHTML = html

    this._init()

    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)
  }

  _init() {
    let cHtml = ''
    const forFun = (item) => {
      if (!item || !item.length) return ''
      let t = '<ul>'
      item.forEach((i) => {
        t += `
          <li>
            <a class="list" href="${i.link}">
              <p>${i.name}</p>
              <h-icon type="right"></h-icon>
            </a>
          </li>
        `
      })
      t += '</ul>'
      return t
    }
    this.list.forEach((item) => {
      cHtml += `
        <h3>${item.name}</h3>
        ${forFun(item.children)}
      `
    })

    const component = this.querySelector('.component')
    component.innerHTML = cHtml
  }

  disconnectedCallback() {
  }
}
