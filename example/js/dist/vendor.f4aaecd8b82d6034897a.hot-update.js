webpackHotUpdate("vendor",{

/***/ "./route/Route.js":
/*!************************!*\
  !*** ./route/Route.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Route; });\n\nclass Route {\n  constructor(routes) {\n    this.routes = routes\n    this.routeView = document.querySelector('.route-view')\n    window.addEventListener('hashchange', this.hashchange.bind(this))\n    this.view = null\n    this.keepAlive = new WeakMap()\n  }\n\n  hashchange({ newURL }) {\n    const { hash } = new URL(newURL)\n    this.push(hash)\n  }\n\n  push(path) {\n    if (!this.routes.get(path)) {\n      path = '*'\n    }\n    this.routes.get(path).component().then((res) => {\n      const { tagName } = res.default\n      const Component = res.default\n\n      if (!customElements.get(tagName)) {\n        window.customElements.define(tagName, Component)\n      }\n      const hasTag = this.keepAlive.has(this.routes.get(path))\n      const oldView = this.view\n      let newView\n      if (hasTag) {\n        newView = this.keepAlive.get(this.routes.get(path))\n      } else {\n        newView = document.createElement(tagName)\n        this.keepAlive.set(this.routes.get(path), newView)\n      }\n      this.routeView.appendChild(newView)\n\n      if (this.view) {\n        const hasHomePage = tagName === 'app-home' // 如果是home页面就做back动画\n        oldView.style.position = 'absolute'\n        const newViewDirection = hasHomePage ? '-100%' : '100%'\n        const oldViewDirection = !hasHomePage ? '-100%' : '100%'\n        const newViewPlayer = newView.animate([\n          {\n            opacity: 1,\n            transform: `translateX(${newViewDirection})`,\n          },\n          { opacity: 1, transform: 'translateX(0)' },\n        ], {\n          duration: 175,\n        })\n        newViewPlayer.addEventListener('finish', () => {\n        })\n\n        const oldViewPlayer = oldView.animate([\n          { opacity: 1, transform: 'translateX(0)' },\n          { opacity: 1, transform: `translateX(${oldViewDirection})` },\n        ], {\n          duration: 175,\n        })\n        oldViewPlayer.addEventListener('finish', () => {\n          oldView.style.position = 'static'\n          if (oldView) {\n            if (oldView.parentNode) oldView.parentNode.removeChild(oldView)\n          }\n        })\n      }\n\n      this.view = newView\n\n      // this.view.classList.remove('view-hide')\n\n      // setTimeout(() => {\n      //   this.view.classList.add('view-show')\n      // }, 120)\n      // if (hasTag) {\n      //   this.view.classList.add('view-show')\n      // } else {\n      //   setTimeout(() => {\n      //     this.view.classList.add('view-show')\n      //   }, 100)\n      // }\n\n      // console.log(tag)\n    }).catch((err) => {\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./route/Route.js?");

/***/ }),

/***/ "./route/index.js":
/*!************************!*\
  !*** ./route/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route.js */ \"./route/Route.js\");\n\nconst home = () => __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(null, /*! ./../page/home/home.js */ \"./page/home/home.js\"))\n\nconst button = () => Promise.all(/*! import() | button */[__webpack_require__.e(\"vendors~button\"), __webpack_require__.e(\"button\")]).then(__webpack_require__.bind(null, /*! ../page/button/index.js */ \"./page/button/index.js\"))\nconst icon = () =>  __webpack_require__.e(/*! import() | icon */ \"icon\").then(__webpack_require__.bind(null, /*! ./../page/icon/index.js */ \"./page/icon/index.js\"))\nconst mask = () =>  __webpack_require__.e(/*! import() | mask */ \"mask\").then(__webpack_require__.bind(null, /*! ./../page/mask/index.js */ \"./page/mask/index.js\"))\n\nconst img = () =>  __webpack_require__.e(/*! import() | img */ \"img\").then(__webpack_require__.bind(null, /*! ./../page/img/index.js */ \"./page/img/index.js\"))\nconst swipeAction = () =>  __webpack_require__.e(/*! import() | swipe-action */ \"swipe-action\").then(__webpack_require__.bind(null, /*! ./../page/swipe-action/index.js */ \"./page/swipe-action/index.js\"))\nconst carousel = () =>  __webpack_require__.e(/*! import() | carousel */ \"carousel\").then(__webpack_require__.bind(null, /*! ./../page/carousel/index.js */ \"./page/carousel/index.js\"))\nconst appBar = () =>  __webpack_require__.e(/*! import() | app-bar */ \"app-bar\").then(__webpack_require__.bind(null, /*! ./../page/app-bar/index.js */ \"./page/app-bar/index.js\"))\nconst toast = () =>  __webpack_require__.e(/*! import() | toast */ \"toast\").then(__webpack_require__.bind(null, /*! ./../page/toast/index.js */ \"./page/toast/index.js\"))\nconst popover = () =>  __webpack_require__.e(/*! import() | popover */ \"popover\").then(__webpack_require__.bind(null, /*! ./../page/popover/index.js */ \"./page/popover/index.js\"))\nconst accordion = () =>  __webpack_require__.e(/*! import() | accordion */ \"accordion\").then(__webpack_require__.bind(null, /*! ./../page/accordion/index.js */ \"./page/accordion/index.js\"))\n\nconst form = () =>  __webpack_require__.e(/*! import() | form */ \"form\").then(__webpack_require__.bind(null, /*! ./../page/form/index.js */ \"./page/form/index.js\"))\nconst select = () =>  __webpack_require__.e(/*! import() | select */ \"select\").then(__webpack_require__.bind(null, /*! ./../page/select/index.js */ \"./page/select/index.js\"))\nconst switchs = () =>  __webpack_require__.e(/*! import() | switch */ \"switch\").then(__webpack_require__.bind(null, /*! ./../page/switch/index.js */ \"./page/switch/index.js\"))\nconst picker = () =>  __webpack_require__.e(/*! import() | picker */ \"picker\").then(__webpack_require__.bind(null, /*! ../page/picker/index.js */ \"./page/picker/index.js\"))\n\nconst routes = new Map([\n  [ '', { path: '#home', component: home }],\n  [ '#home', { path: '#home', component: home }],\n  [ '#button', { path: '#button', component: button }],\n  [ '#icon', { path: '#icon', component: icon }],\n  [ '#form', { path: '#form', component: form }],\n  [ '#select', { path: '#select', component: select }],\n  [ '#switch', { path: '#switch', component: switchs }],\n  [ '#picker', { path: '#picker', component: picker }],\n  [ '#img', { path: '#form', component: img }],\n  [ '#mask', { path: '#mask', component: mask }],\n  [ '#carousel', { path: '#carousel', component: carousel }],\n  [ '#app-bar', { path: '#app-bar', component: appBar }],\n  [ '#swipe-action', { path: '#swipe-action', component: swipeAction }],\n  [ '#toast', { path: '#toast', component: toast }],\n  [ '#popover', { path: '#popover', component: popover }],\n  [ '#accordion', { path: '#accordion', component: accordion }],\n  [ '404', { path: '#home', component: home }],\n  [ '*', { path: '#home', component: home }],\n])\n\nconst route = new _Route_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](routes)\nwindow.route = route\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (route);\n\n\n//# sourceURL=webpack:///./route/index.js?");

/***/ })

})