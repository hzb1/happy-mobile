import route from './route/index.js'

class RouteView extends HTMLElement {
  constructor() {
    super()
  }
}
window.customElements.define('route-view', RouteView)

const { hash } = window.location
route.push(hash)
