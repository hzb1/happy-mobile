const html = require('../index.html')

class AppRoot extends HTMLElement {
  static get tagName() {
    return 'app-root'
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

export default {
  AppRoot,
}
