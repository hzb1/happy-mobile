
// import '../../../../dist/button/button'

const html = require('./index.html')

export default class AppButton extends HTMLElement {
  static get tagName() {
    return 'app-button'
  }

  connectedCallback() {
    this.innerHTML = html


    const loadingButton = document.querySelector('#h-loading')
    loadingButton.addEventListener('click', () => {
      loadingButton.loading = true
      setTimeout(() => { loadingButton.loading = false }, 1000)
    })
  }
}
