(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-action"],{

/***/ "./page/swipe-action/index.html":
/*!**************************************!*\
  !*** ./page/swipe-action/index.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <main> <h4>最简单的swipe-action</h4> <div style=padding:12px> <h-swipe-action></h-swipe-action> </div> </main> \";\n\n//# sourceURL=webpack:///./page/swipe-action/index.html?");

/***/ }),

/***/ "./page/swipe-action/index.js":
/*!************************************!*\
  !*** ./page/swipe-action/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwipeAction; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/swipe-action/index.html\")\n\nclass SwipeAction extends HTMLElement {\n  static get tagName() {\n    return 'app-swipe-action'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/swipe-action/index.js?");

/***/ })

}]);