(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["img"],{

/***/ "./page/img/index.html":
/*!*****************************!*\
  !*** ./page/img/index.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!--<link rel=\\\"stylesheet\\\" href=\\\"../../../demo.css\\\">-->\\n\\n<style>\\n    .vide {\\n        height: 50vh;\\n        background-color: #eeeeee;\\n    }\\n</style>\\n\\n<main>\\n    <h4>最简单的img</h4>\\n\\n    <div class=\\\"vide\\\">占位符 1</div>\\n    <h-img src=\\\"http://img.daimg.com/uploads/allimg/190209/1-1Z20Z03010.jpg\\\" alt=\\\"my alt\\\"></h-img>\\n    <div class=\\\"vide\\\">占位符 2</div>\\n    <h-img src=\\\"http://img.daimg.com/uploads/allimg/190212/1-1Z212145H90-L.jpg\\\"></h-img>\\n    <div class=\\\"vide\\\">占位符 3</div>\\n    <h-img src=\\\"http://img.daimg.com/uploads/allimg/190207/1-1Z20GTU80-L.jpg\\\"></h-img>\\n    <div class=\\\"vide\\\">占位符 4</div>\\n    <h-img src=\\\"http://img.daimg.com/uploads/allimg/190207/1-1Z20GJ0000-L.jpg\\\"></h-img>\\n</main>\\n\";\n\n//# sourceURL=webpack:///./page/img/index.html?");

/***/ }),

/***/ "./page/img/index.js":
/*!***************************!*\
  !*** ./page/img/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Img; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/img/index.html\")\n\nclass Img extends HTMLElement {\n  static get tagName() {\n    return 'app-img'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/img/index.js?");

/***/ })

}]);