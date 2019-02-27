

const html = require('./index.html')

export default class Mask extends HTMLElement {
  static get tagName() {
    return 'app-mask'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
