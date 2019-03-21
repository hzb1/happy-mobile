import icons from '../../../../components/core/icon'

const html = require('./index.html')

export default class Icon extends HTMLElement {
  static get tagName() {
    return 'app-icon'
  }

  init() {
    this.innerHTML = `
      ${html}
    `

    // script
    if (this.querySelector('script')) {
      const script = document.createElement('script')
      const oldScript = this.removeChild(this.querySelector('script'))
      script.innerHTML = oldScript.innerText
      this.appendChild(script)
    }

    const iconList = Object.keys(icons)
    const iconContent = this.querySelector('.icon-content')
    iconList.forEach((item) => {
      const div = document.createElement('div')
      const p = document.createElement('p')
      const icon = document.createElement('h-icon')

      div.classList.add('icon-item')
      p.innerText = item
      icon.type = item

      div.appendChild(icon)
      div.appendChild(p)
      iconContent.appendChild(div)
    })
  }

  connectedCallback() {
    this.init()
  }
}
