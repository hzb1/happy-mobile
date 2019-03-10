

const html = require('./index.html')

export default class AppAccordion extends HTMLElement {
  static get tagName() {
    return 'app-accordion'
  }

  constructor() {
    super()
    // this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.innerHTML = html

    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)
  }
}
