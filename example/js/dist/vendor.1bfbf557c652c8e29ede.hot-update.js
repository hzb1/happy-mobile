webpackHotUpdate("vendor",{

/***/ "./route/Route.js":
/*!************************!*\
  !*** ./route/Route.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Route; });\n\nclass Route {\n  constructor(routes) {\n    this.routes = routes\n    this.routeView = document.querySelector('.route-view')\n    window.addEventListener('hashchange', this.hashchange.bind(this))\n    this.view = null\n    this.keepAlive = new WeakMap()\n    window.addEventListener('popstate', (e) => {\n      alert('我监听到了浏览器的返回按钮事件啦')// 根据自己的需求实现自己的功能\n    }, false)\n  }\n\n  hashchange({ newURL }) {\n    const { hash } = new URL(newURL)\n    this.push(hash)\n    console.log('hashchange')\n  }\n\n  push(path) {\n    if (!this.routes.get(path)) {\n      path = '*'\n    }\n    this.routes.get(path).component().then((res) => {\n      const { tagName } = res.default\n      const Component = res.default\n\n      if (!customElements.get(tagName)) {\n        window.customElements.define(tagName, Component)\n      }\n      const hasTag = this.keepAlive.has(this.routes.get(path))\n      const oldView = this.view\n      let go = true\n      let newView\n      if (hasTag) {\n        go = false\n        newView = this.keepAlive.get(this.routes.get(path))\n      } else {\n        newView = document.createElement(tagName)\n        this.keepAlive.set(this.routes.get(path), newView)\n      }\n      this.routeView.appendChild(newView)\n\n      if (this.view) {\n        oldView.style.position = 'absolute'\n        const newViewDirection = go ? '100%' : '-100%'\n        const oldViewDirection = !go ? '100%' : '-100%'\n        // const go = '100%'\n        // const back = '-100%'\n        // console.log('返回键', direction)\n        const newViewPlayer = newView.animate([\n          {\n            opacity: 0,\n            transform: `translateX(${newViewDirection})`,\n          },\n          { opacity: 1, transform: 'translateX(0)' },\n        ], {\n          duration: 300,\n        })\n        newViewPlayer.addEventListener('finish', () => {\n        })\n\n        const oldViewPlayer = oldView.animate([\n          { opacity: 1, transform: 'translateX(0)' },\n          { opacity: 0, transform: `translateX(${oldViewDirection})` },\n        ], {\n          duration: 300,\n        })\n        oldViewPlayer.addEventListener('finish', () => {\n          oldView.style.position = 'static'\n          if (oldView.parentNode) oldView.parentNode.removeChild(oldView)\n        })\n      }\n\n      this.view = newView\n\n      // this.view.classList.remove('view-hide')\n\n      // setTimeout(() => {\n      //   this.view.classList.add('view-show')\n      // }, 120)\n      // if (hasTag) {\n      //   this.view.classList.add('view-show')\n      // } else {\n      //   setTimeout(() => {\n      //     this.view.classList.add('view-show')\n      //   }, 100)\n      // }\n\n      // console.log(tag)\n    }).catch((err) => {\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./route/Route.js?");

/***/ })

})