

const html = require('./index.html')

export default class SwipeAction extends HTMLElement {
  static get tagName() {
    return 'app-carousel'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
  }
}
