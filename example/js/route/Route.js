

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
    // console.log(path)
    this.routes.get(path).component().then((res) => {
      const tagName = res.default.tag
      this.view.innerHTML = `<${tagName}></${tagName}>`
      // console.log(this.view)
    }).catch((err) => {
      // console.log(err)
    })
  }
}
