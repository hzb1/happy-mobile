webpackHotUpdate("vendor",{

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>JS HAPPY-MOBILE</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"../../dist/happy-mobile.css\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"../demo.css\\\">\\n    <!--<link rel=\\\"stylesheet\\\" href=\\\"p/prism.css\\\">-->\\n    <!--<style>-->\\n        <!--:root{ &#45;&#45;h-theme-primary: #333333;} /** 更改主题色 #187e57 **/-->\\n    <!--</style>-->\\n</head>\\n<body>\\n\\n<header class=\\\"h-elevation--z2\\\">\\n    <div class=\\\"menu\\\">\\n        <!--<h-icon type=\\\"h-sortlight\\\"></h-icon>-->\\n        <!--<h-icon type=\\\"back\\\"></h-icon>-->\\n    </div>\\n    <h1>HAPPY MOBILE</h1>\\n    <div class=\\\"theme\\\">\\n        <input id=\\\"theme-input\\\" type=\\\"color\\\"/>\\n    </div>\\n</header>\\n\\n<section class=\\\"list-box\\\">\\n    <div class=\\\"route-view\\\"></div>\\n</section>\\n\\n<!--<pre>-->\\n    <!--<code class=\\\"language-css\\\" id=\\\"code1\\\">-->\\n        <!--p { color: red }-->\\n        <!--.icon {-->\\n            <!--width: 1em;-->\\n            <!--height: 1em;-->\\n            <!--vertical-align: -0.15em;-->\\n            <!--fill: currentColor;-->\\n            <!--overflow: hidden;-->\\n        <!--}-->\\n    <!--</code>-->\\n<!--</pre>-->\\n\\n<script src=\\\"../../dist/happy-mobile.js\\\"></script>\\n<script src=\\\"dist/bundle.js\\\"></script>\\n<!--<script src=\\\"p/prism.js\\\"></script>-->\\n<script>\\n    var themeInput = document.querySelector('#theme-input')\\n\\n    if (themeInput) {\\n      themeInput.addEventListener('input', function (ev) {\\n        var html = document.querySelector('html')\\n        html.style.setProperty('--h-theme-primary', ev.target.value)\\n      })\\n    }\\n\\n    // const pre = document.createElement('pre')\\n    // const codeCSS = document.createElement('code')\\n    // codeCSS.className = 'language-css'\\n    // codeCSS.innerHTML = document.querySelector('#code1').innerHTML\\n    // pre.appendChild(codeCSS)\\n    // document.body.appendChild(pre)\\n</script>\\n</body>\\n</html>\\n\";\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./layout/index.js\");\n/* harmony import */ var _route_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route/index.js */ \"./route/index.js\");\n\n\n\n_layout__WEBPACK_IMPORTED_MODULE_0__[\"AppRoot\"]\n\nconst { hash } = window.location\n_route_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(hash)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./layout/index.js":
/*!*************************!*\
  !*** ./layout/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst html = __webpack_require__(/*! ../index.html */ \"./index.html\")\n\nclass AppRoot extends HTMLElement {\n  static get tagName() {\n    return 'app-root'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n    // this.classList.add('view-show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  AppRoot,\n});\n\n\n//# sourceURL=webpack:///./layout/index.js?");

/***/ })

})