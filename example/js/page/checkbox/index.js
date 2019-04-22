

const html = require('./index.html')

export default class SwipeAction extends HTMLElement {
  static get tagName() {
    return 'app-checkbox'
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
