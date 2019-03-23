

const html = require('./index.html')

export default class SwipeAction extends HTMLElement {
  static get tagName() {
    return 'app-switch'
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
