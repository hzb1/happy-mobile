

const html = require('./index.html')

export default class Img extends HTMLElement {
  static get tagName() {
    return 'app-img'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
