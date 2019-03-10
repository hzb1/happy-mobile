const html = require('./home.html')

export default class Home extends HTMLElement {
  static get tagName() {
    return 'app-home'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html

    const script = document.createElement('script')
    const oldScript = this.removeChild(this.querySelector('script'))
    script.innerHTML = oldScript.innerText
    this.appendChild(script)
    // this.classList.add('view-show')
    // const lists = this.querySelectorAll('.list')
    // for (let i = 0; i < lists.length; i++) {
    //   lists[i].addEventListener('click', this.onViewChange, false)
    // }
  }

  disconnectedCallback() {
  }
}
