(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mask"],{

/***/ "./page/mask/index.html":
/*!******************************!*\
  !*** ./page/mask/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <main> <h4>最简单的mask</h4> <h-mask id=mask1 style=display:none> <style>.my-mask-slot{background-color:#fff}</style> <div class=my-mask-slot> content <h-button inline onclick=hide1()>hide</h-button> </div> </h-mask> <h-button inline onclick=show1()>show</h-button> </main> <script>var mask1=document.querySelector(\\\"#mask1\\\"),show1=function(){mask1.show()},hide1=function(){mask1.hide()}</script> \";\n\n//# sourceURL=webpack:///./page/mask/index.html?");

/***/ }),

/***/ "./page/mask/index.js":
/*!****************************!*\
  !*** ./page/mask/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mask; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/mask/index.html\")\n\nclass Mask extends HTMLElement {\n  static get tagName() {\n    return 'app-mask'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/mask/index.js?");

/***/ })

}]);