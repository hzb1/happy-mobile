

export default class Route {
  constructor(routes) {
    this.routes = routes
    this.view = document.querySelector('route-view')
    window.addEventListener('hashchange', this.hashchange.bind(this))
  }

  hashchange({ newURL }) {
    const { hash } = new URL(newURL)
    // console.log(target, type, bubbles, cancelable, oldURL, newURL)
    this.push(hash)
  }

  push(path) {
    console.log(path)
    if (!this.routes.get(path)) {
      path = '*'
    }
    this.routes.get(path).component().then((res) => {
      const { tagName } = res.default
      const Component = res.default

      if (!customElements.get(tagName)) {
        window.customElements.define(tagName, Component)
      }
      const tag = document.createElement(tagName)

      // this.view.classList.remove('view-show')
      this.view.innerHTML = ''
      this.view.appendChild(tag)
      setTimeout(() => {
        tag.classList.add('view-show')
      }, 100)
      console.log(tag)
    }).catch((err) => {
      // console.log(err)
    })
  }
}
