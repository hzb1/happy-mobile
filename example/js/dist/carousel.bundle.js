(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carousel"],{

/***/ "./page/carousel/index.html":
/*!**********************************!*\
  !*** ./page/carousel/index.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .my-carousel{\\n        width: 100%;\\n        /*height: 120px;*/\\n    }\\n    .my-carousel img{\\n        width: 100%;\\n        display: block;\\n    }\\n</style>\\n\\n<!--html 开始-->\\n<section>\\n    <h4>最简单的carousel</h4>\\n    <div>\\n        <h-carousel class=\\\"my-carousel\\\">\\n             <img src=\\\"https://gw.alicdn.com/imgextra/i2/10/O1CN01JDcPmk1BwcSgWtmJ0_!!10-0-lubanu.jpg\\\" alt=\\\"img1\\\">\\n             <img src=\\\"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg\\\" alt=\\\"img2\\\">\\n             <img src=\\\"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg\\\" alt=\\\"img3\\\">\\n        </h-carousel>\\n    </div>\\n</section>\\n<!--html 结束-->\\n\";\n\n//# sourceURL=webpack:///./page/carousel/index.html?");

/***/ }),

/***/ "./page/carousel/index.js":
/*!********************************!*\
  !*** ./page/carousel/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwipeAction; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/carousel/index.html\")\n\nclass SwipeAction extends HTMLElement {\n  static get tagName() {\n    return 'app-carousel'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/carousel/index.js?");

/***/ })

}]);