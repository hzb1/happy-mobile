(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toast"],{

/***/ "./page/toast/index.html":
/*!*******************************!*\
  !*** ./page/toast/index.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <style> @import url('./../../../../dist/happy-mobile.css'); </style> <main> <h4>最简单的toast</h4> <h-button inline onclick=show1(0)>show</h-button> <h-button onclick=show1(1e3)>show 1000</h-button> <h-button inline onclick=hide1(4e3)>手动控制hide</h-button> </main> <script>var show1=function(o){happy.Toast.show(\\\"嗨 toase\\\",o)},hide1=function(o){var t=happy.Toast.show(\\\"setTimeout 控制hide\\\",0);setTimeout(t,o)}</script> \";\n\n//# sourceURL=webpack:///./page/toast/index.html?");

/***/ }),

/***/ "./page/toast/index.js":
/*!*****************************!*\
  !*** ./page/toast/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toast; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/toast/index.html\")\n\nclass Toast extends HTMLElement {\n  static get tagName() {\n    return 'app-toast'\n  }\n\n  constructor() {\n    super()\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    // script.src = '../../../../dist/happy-mobile.js'\n    // script.load = () => {\n    // }\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    const script = document.createElement('script')\n    const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.shadow.appendChild(script)\n  }\n\n  connectedCallback() {\n  }\n\n\n  show1(time) {\n    const { happy } = window\n    console.log(happy)\n    happy.Toast.show('嗨 toase', time)\n  }\n\n  hide1(time) {\n    const { happy } = window\n    const hide = happy.Toast.show('setTimeout 控制hide', 0)\n    setTimeout(hide, time)\n  }\n}\n\n\n//# sourceURL=webpack:///./page/toast/index.js?");

/***/ })

}]);