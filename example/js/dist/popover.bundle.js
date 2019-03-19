(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover"],{

/***/ "./page/popover/index.html":
/*!*********************************!*\
  !*** ./page/popover/index.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-button{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的popover</h4>\\n    <h-popover  title=\\\"hello Popover\\\" >\\n        <h-button inline shadow >Popover</h-button>\\n    </h-popover>\\n\\n    <h4>最简单的popover</h4>\\n    <h-popover title=\\\"my title2\\\" style=\\\"display: block\\\" >\\n        <h-button shadow onclick=\\\"\\\">Popover2</h-button>\\n    </h-popover>\\n\\n    <h-popover style=\\\"display: block\\\" title=\\\"my title3\\\">\\n        <h-button shadow onclick=\\\"\\\">Popover</h-button>\\n    </h-popover>\\n    <h-popover>\\n        <h-button shadow onclick=\\\"\\\">Popover</h-button>\\n    </h-popover>\\n</section>\\n\\n<script>\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/popover/index.html?");

/***/ }),

/***/ "./page/popover/index.js":
/*!*******************************!*\
  !*** ./page/popover/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popover; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/popover/index.html\")\n\nclass Popover extends HTMLElement {\n  static get tagName() {\n    return 'app-popover'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/popover/index.js?");

/***/ })

}]);