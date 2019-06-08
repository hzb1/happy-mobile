
import navConfig from '../../../example/js/config'

const appIframe = document.querySelector('.app-iframe')
const iframe = appIframe.querySelector('iframe')
const component = document.querySelector('#component-container')

class Route {
  constructor(routes) {
    this.routes = routes
    this.routeView = document.querySelector('component-container')
    window.addEventListener('hashchange', this.hashchange.bind(this))
    this.view = null
    this.keepAlive = new WeakMap()
  }

  hashchange({ newURL }) {
    const { hash } = new URL(newURL)
    this.push(hash)
  }

  push(path) {
    if (!this.routes.get(path)) {
      path = '*'
      this.routeView.path = 'none'
    } else {
      this.routeView.path = this.routes.get(path).path

      // 修改iframe状态
      iframe.src = `http://0.0.0.0:7777/${path}`

      // 修改nav状态
      const cList = component.querySelectorAll('a.list')
      cList.forEach((item) => {
        item.classList.remove('active')
      })
      const curList = component.querySelector(`a[href="${path}"]`)
      if (curList) curList.classList.add('active')
    }
    // console.log(path, 'path', this.routeView.view)
    // this.routes.get(path).component().then((res) => {
    //   const { tagName } = res.default
    //   const Component = res.default
    //
    //   conso
    // }).catch((err) => {
    // })
  }
}


const routes = new Map([
  ['', { path: '#intro', view: 'intro' }],
  ['#intro', { path: '#intro', view: 'intro' }],
])

navConfig.forEach((items) => {
  items.children.forEach((item) => {
    const { link, view } = item
    routes.set(link, {
      path: link,
      view,
    })
  })
})

const route = new Route(routes)

export default route
