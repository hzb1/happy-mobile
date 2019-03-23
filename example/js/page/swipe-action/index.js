

const html = require('./index.html')

export default class SwipeAction extends HTMLElement {
  static get tagName() {
    return 'app-swipe-action'
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
