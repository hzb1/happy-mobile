(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mask"],{

/***/ "./page/mask/index.html":
/*!******************************!*\
  !*** ./page/mask/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的mask</h4>\\n    <h-mask id=\\\"mask1\\\" style=\\\"display: none\\\">\\n        <style>\\n            .my-mask-slot{\\n                background-color: white;\\n            }\\n        </style>\\n        <div class=\\\"my-mask-slot\\\">\\n            content\\n            <h-button inline onclick=\\\"hide1()\\\">hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline onclick=\\\"show1()\\\">show</h-button>\\n</section>\\n\\n<script>\\n    // var mask1 = document.querySelector('#mask1')\\n    var mask1 = document.querySelector('app-mask').shadowRoot.querySelector('#mask1')\\n    var show1 = function () {\\n      var hide = mask1.show()\\n    }\\n    var hide1 = function () {\\n      mask1.hide()\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/mask/index.html?");

/***/ }),

/***/ "./page/mask/index.js":
/*!****************************!*\
  !*** ./page/mask/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mask; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/mask/index.html\")\n\nclass Mask extends HTMLElement {\n  static get tagName() {\n    return 'app-mask'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/mask/index.js?");

/***/ })

}]);