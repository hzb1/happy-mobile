const html = require('./index.html')

class Button extends HTMLElement {
  static get tag() {
    return 'app-button'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
    const container = document.querySelector('.component')
    container.classList.add('view-show')
    // const lists = this.querySelectorAll('.list')
    // for (let i = 0; i < lists.length; i++) {
    //   lists[i].addEventListener('click', this.onViewChange, false)
    // }
  }

  onViewChange() {
    const container = document.querySelector('.component')
    container.classList.toggle('view-in')
  }
}

window.customElements.define('app-button', Button)

export default Button
