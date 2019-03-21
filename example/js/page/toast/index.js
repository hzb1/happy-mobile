

const html = require('./index.html')

export default class Toast extends HTMLElement {
  static get tagName() {
    return 'app-toast'
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
