
// import '../../../../dist/button/button'

const html = require('./index.html')

export default class AppCell extends HTMLElement {
  static get tagName() {
    return 'app-cell'
  }

  connectedCallback() {
    // console.log('connectedCallback', html)
    this.innerHTML = html
  }

  adoptedCallback() {
    // this.innerHTML = 'hi'
    console.log('AppCell adoptedCallback')
  }
}
