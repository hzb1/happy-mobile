

const html = require('./index.html')

export default class AppSelect extends HTMLElement {
  static get tagName() {
    return 'app-select'
  }

  constructor() {
    super()
    this.init()
  }

  init() {
    this.shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      ${html}
    `
    this.shadow.appendChild(template.content.cloneNode(true))

    // script
    if (this.shadow.querySelector('script')) {
      const script = document.createElement('script')
      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))
      script.innerHTML = oldScript.innerText
      this.shadow.appendChild(script)
    }
  }

  connectedCallback() {
  }
}
