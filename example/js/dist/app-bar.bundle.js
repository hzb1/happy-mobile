(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-bar"],{

/***/ "./page/app-bar/index.html":
/*!*********************************!*\
  !*** ./page/app-bar/index.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .my-carousel{\\n        width: 100%;\\n        /*height: 120px;*/\\n    }\\n    .my-carousel img{\\n        width: 100%;\\n        display: block;\\n    }\\n</style>\\n\\n<!--html 开始-->\\n<section>\\n    <h-app-bar class=\\\"h-app-bar-header\\\">\\n        <div>header</div>\\n    </h-app-bar>\\n    <h4>最简单的AppBar</h4>\\n    <div>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n        <p>p</p>\\n    </div>\\n</section>\\n<!--html 结束-->\\n\";\n\n//# sourceURL=webpack:///./page/app-bar/index.html?");

/***/ }),

/***/ "./page/app-bar/index.js":
/*!*******************************!*\
  !*** ./page/app-bar/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppBar; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/app-bar/index.html\")\n\nclass AppBar extends HTMLElement {\n  static get tagName() {\n    return 'app-app-bar'\n  }\n\n  constructor() {\n    super()\n    // this.attachShadow({ mode: 'open' })\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/app-bar/index.js?");

/***/ })

}]);