
export default class Route {
  constructor(routes) {
    this.routes = routes
    this.routeView = document.querySelector('.route-view')
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
    }
    this.routes.get(path).component().then((res) => {
      const { tagName } = res.default
      const Component = res.default

      if (!customElements.get(tagName)) {
        window.customElements.define(tagName, Component)
      }
      const hasTag = this.keepAlive.has(this.routes.get(path))
      const oldView = this.view
      let newView
      if (hasTag) {
        newView = this.keepAlive.get(this.routes.get(path))
      } else {
        newView = document.createElement(tagName)
        this.keepAlive.set(this.routes.get(path), newView)
      }
      this.routeView.appendChild(newView)

      if (this.view) {
        const hasHomePage = tagName === 'app-home' // 如果是home页面就做back动画
        oldView.style.position = 'absolute'
        const newViewDirection = hasHomePage ? '-100%' : '100%'
        const oldViewDirection = !hasHomePage ? '-100%' : '100%'
        const newViewPlayer = newView.animate([
          {
            opacity: 1,
            transform: `translateX(${newViewDirection})`,
          },
          { opacity: 1, transform: 'translateX(0)' },
        ], {
          duration: 175,
        })
        newViewPlayer.addEventListener('finish', () => {
        })

        const oldViewPlayer = oldView.animate([
          { opacity: 1, transform: 'translateX(0)' },
          { opacity: 1, transform: `translateX(${oldViewDirection})` },
        ], {
          duration: 175,
        })
        oldViewPlayer.addEventListener('finish', () => {
          oldView.style.position = 'static'
          if (oldView) {
            if (oldView.parentNode) oldView.parentNode.removeChild(oldView)
          }
        })
      }

      this.view = newView

      // this.view.classList.remove('view-hide')

      // setTimeout(() => {
      //   this.view.classList.add('view-show')
      // }, 120)
      // if (hasTag) {
      //   this.view.classList.add('view-show')
      // } else {
      //   setTimeout(() => {
      //     this.view.classList.add('view-show')
      //   }, 100)
      // }

      // console.log(tag)
    }).catch((err) => {
    })
  }
}
