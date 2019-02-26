const html = require('./home.html')

class Home extends HTMLElement {
  static get tag() {
    return 'app-home'
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = html
    this.onView('show')
    // const lists = this.querySelectorAll('.list')
    // for (let i = 0; i < lists.length; i++) {
    //   lists[i].addEventListener('click', this.onViewChange, false)
    // }
  }

  onView(type) {
    const container = document.querySelector('route-view')
    if (type === 'show') {
      container.classList.add('view-in')
    } else {
      container.classList.remove('view-in')
    }
  }

  disconnectedCallback() {
    this.onView('hide')
  }
}

window.customElements.define('app-home', Home)

export default Home
