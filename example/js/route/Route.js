

export default class Route {
  constructor(routes) {
    this.routes = routes
    this.routeView = document.querySelector('route-view')
    window.addEventListener('hashchange', this.hashchange.bind(this))
    this.view = null
    this.keepAlive = new WeakMap()
  }

  hashchange({ newURL }) {
    const { hash } = new URL(newURL)
    // console.log(target, type, bubbles, cancelable, oldURL, newURL)
    this.push(hash)
  }

  push(path) {
    // console.log(path)
    // console.log(this.routes.get(path))
    if (!this.routes.get(path)) {
      path = '*'
    }
    this.routes.get(path).component().then((res) => {
      const { tagName } = res.default
      const Component = res.default

      if (!customElements.get(tagName)) {
        window.customElements.define(tagName, Component)
      }
      const hasTag = this.keepAlive.has(this.routes.get(path))
      let tag
      if (hasTag) {
        tag = this.keepAlive.get(this.routes.get(path))
      } else {
        tag = document.createElement(tagName)
        this.keepAlive.set(this.routes.get(path), tag)
      }
      if (this.view) {
        this.view.classList.remove('view-show')
        this.view.classList.add('view-hide')
      }

      this.view = tag
      this.routeView.appendChild(tag)

      this.view.classList.remove('view-hide')

      setTimeout(() => {
        this.view.classList.add('view-show')
      }, 120)
      // if (hasTag) {
      //   this.view.classList.add('view-show')
      // } else {
      //   setTimeout(() => {
      //     this.view.classList.add('view-show')
      //   }, 100)
      // }

      // console.log(tag)
    }).catch((err) => {
      // console.log(err)
    })
  }
}
