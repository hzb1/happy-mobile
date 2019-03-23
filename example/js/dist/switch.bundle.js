(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch"],{

/***/ "./page/switch/index.html":
/*!********************************!*\
  !*** ./page/switch/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-switch{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>基本使用</h4>\\n    <h-switch></h-switch>\\n    <h-switch value=\\\"true\\\"></h-switch>\\n</section>\\n\\n<script>\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/switch/index.html?");

/***/ }),

/***/ "./page/switch/index.js":
/*!******************************!*\
  !*** ./page/switch/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwipeAction; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/switch/index.html\")\n\nclass SwipeAction extends HTMLElement {\n  static get tagName() {\n    return 'app-switch'\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/switch/index.js?");

/***/ })

}]);