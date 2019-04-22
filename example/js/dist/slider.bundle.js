(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider"],{

/***/ "./page/slider/index.html":
/*!********************************!*\
  !*** ./page/slider/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-slider{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>基本使用</h4>\\n    <h-slider></h-slider>\\n    <h-slider value=\\\"50\\\"></h-slider>\\n</section>\\n\\n<script>\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/slider/index.html?");

/***/ }),

/***/ "./page/slider/index.js":
/*!******************************!*\
  !*** ./page/slider/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppSlider; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/slider/index.html\")\n\nclass AppSlider extends HTMLElement {\n  static get tagName() {\n    return 'app-slider'\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/slider/index.js?");

/***/ })

}]);