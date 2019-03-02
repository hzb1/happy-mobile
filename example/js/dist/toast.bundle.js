(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toast"],{

/***/ "./page/toast/index.html":
/*!*******************************!*\
  !*** ./page/toast/index.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的toast</h4>\\n    <!--<h-button inline onclick=\\\"show1(0)\\\">show</h-button>-->\\n    <h-button inline onclick=\\\"show1()\\\">show Toase</h-button>\\n    <h-button inline onclick=\\\"show1(1000)\\\">show Toase</h-button>\\n    <h-button inline onclick=\\\"hide1(4000)\\\">手动控制hide</h-button>\\n</section>\\n\\n<!--<script src=\\\"../../../../dist/happy-mobile.js\\\"></script>-->\\n<script>\\n    var show1 = function (time) {\\n      happy.Toast.show('嗨 toase', time)\\n    }\\n    var hide1 = function (time) {\\n      var hide = happy.Toast.show('setTimeout 控制hide', 0)\\n      setTimeout(hide, time)\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/toast/index.html?");

/***/ }),

/***/ "./page/toast/index.js":
/*!*****************************!*\
  !*** ./page/toast/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toast; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/toast/index.html\")\n\nclass Toast extends HTMLElement {\n  static get tagName() {\n    return 'app-toast'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    const script = document.createElement('script')\n    const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.shadow.appendChild(script)\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/toast/index.js?");

/***/ })

}]);