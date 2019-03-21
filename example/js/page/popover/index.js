

const html = require('./index.html')

export default class Popover extends HTMLElement {
  static get tagName() {
    return 'app-popover'
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
  }

  connectedCallback() {
    this.init()
  }
}
