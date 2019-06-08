

const html = require('./index.html')

export default class AppSearchBar extends HTMLElement {
  static get tagName() {
    return 'app-search-bar'
  }

  connectedCallback() {
    this.innerHTML = html
    const oldScript = this.querySelector('script')
    if (oldScript) {
      const script = document.createElement('script')
      script.innerHTML = oldScript.innerText
      this.removeChild(oldScript)
      this.appendChild(script)
    }
  }
}
