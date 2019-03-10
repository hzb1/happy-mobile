

const html = require('./index.html')

export default class AppBar extends HTMLElement {
  static get tagName() {
    return 'app-app-bar'
  }

  constructor() {
    super()
    // this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
