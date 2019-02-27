

const html = require('./index.html')

export default class Button extends HTMLElement {
  static get tagName() {
    return 'app-button'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
