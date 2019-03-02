import route from './route/index.js'

class RouteView extends HTMLElement {}
window.customElements.define('route-view', RouteView)

const { hash } = window.location
route.push(hash)
