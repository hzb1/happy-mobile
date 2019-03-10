webpackHotUpdate("vendor",{

/***/ "./route/Route.js":
/*!************************!*\
  !*** ./route/Route.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Route; });\n\nclass Route {\n  constructor(routes) {\n    this.routes = routes\n    this.routeView = document.querySelector('.route-view')\n    window.addEventListener('hashchange', this.hashchange.bind(this))\n    this.view = null\n    this.keepAlive = new WeakMap()\n  }\n\n  hashchange({ newURL }) {\n    const { hash } = new URL(newURL)\n    this.push(hash)\n  }\n\n  push(path) {\n    if (!this.routes.get(path)) {\n      path = '*'\n    }\n    this.routes.get(path).component().then((res) => {\n      const { tagName } = res.default\n      const Component = res.default\n\n      if (!customElements.get(tagName)) {\n        window.customElements.define(tagName, Component)\n      }\n      const hasTag = this.keepAlive.has(this.routes.get(path))\n      let oldView = this.view\n      let newView\n      if (hasTag) {\n        // console.log('返回键？')\n        newView = this.keepAlive.get(this.routes.get(path))\n      } else {\n        newView = document.createElement(tagName)\n        this.keepAlive.set(this.routes.get(path), newView)\n      }\n      this.routeView.appendChild(newView)\n\n      if (this.view) {\n        const newViewPlayer = newView.animate([\n          { opacity: 0 },\n          { opacity: 1 },\n        ], {\n          duration: 1000,\n          easing: 'ease-in',\n        })\n        newViewPlayer.addEventListener('finish', () => {\n          console.log(newView, 'newViewPlayer finish')\n          // if (this.view.parentNode) this.view.parentNode.removeChild(this.view)\n        })\n\n        const oldViewPlayer = oldView.animate([\n          { opacity: 1 },\n          { opacity: 0 },\n        ], {\n          duration: 1000,\n          easing: 'ease-out',\n        })\n        oldViewPlayer.addEventListener('finish', () => {\n          if (this.view.parentNode) this.view.parentNode.removeChild(this.view)\n        })\n      }\n\n      this.view = newView\n\n      // this.view.classList.remove('view-hide')\n\n      // setTimeout(() => {\n      //   this.view.classList.add('view-show')\n      // }, 120)\n      // if (hasTag) {\n      //   this.view.classList.add('view-show')\n      // } else {\n      //   setTimeout(() => {\n      //     this.view.classList.add('view-show')\n      //   }, 100)\n      // }\n\n      // console.log(tag)\n    }).catch((err) => {\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./route/Route.js?");

/***/ })

})