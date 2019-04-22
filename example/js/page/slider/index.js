

const html = require('./index.html')

export default class AppSlider extends HTMLElement {
  static get tagName() {
    return 'app-slider'
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
