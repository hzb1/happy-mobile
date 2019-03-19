(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select"],{

/***/ "./page/select/index.html":
/*!********************************!*\
  !*** ./page/select/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-select{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的select</h4>\\n    <h-select id=\\\"select1\\\"></h-select>\\n</section>\\n\\n<script>\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/select/index.html?");

/***/ }),

/***/ "./page/select/index.js":
/*!******************************!*\
  !*** ./page/select/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppSelect; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/select/index.html\")\n\nclass AppSelect extends HTMLElement {\n  static get tagName() {\n    return 'app-select'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/select/index.js?");

/***/ })

}]);