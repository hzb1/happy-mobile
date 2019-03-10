(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-action"],{

/***/ "./page/swipe-action/index.html":
/*!**************************************!*\
  !*** ./page/swipe-action/index.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .my-swipe-action{\\n        width: 100%;\\n        height: 50px;\\n        /*background-color: #eeeeee;*/\\n        color: white;\\n        padding: 0 12px;\\n        box-sizing: border-box;\\n    }\\n    .my-swipe-action .content{\\n        width: 100%;\\n        height: 50px;\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 0 12px;\\n        box-sizing: border-box;\\n        background-color: #1f78ff;\\n    }\\n    .my-swipe-action .slot-right{\\n        width: 100px;\\n        height: 50px;\\n        background-color: #333333;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n</style>\\n\\n<!--html 开始-->\\n<section>\\n    <h4>最简单的swipe-action</h4>\\n    <div>\\n        <h-swipe-action class=\\\"my-swipe-action\\\">\\n            <div class=\\\"content\\\">\\n                <p>左右滑动</p>\\n            </div>\\n        </h-swipe-action>\\n        <h-swipe-action class=\\\"my-swipe-action\\\">\\n            <div class=\\\"content\\\">\\n                <p>slot right</p>\\n                <h-icon type=\\\"right\\\"></h-icon>\\n            </div>\\n            <div slot=\\\"right\\\" class=\\\"slot-right\\\">\\n                <span>编辑</span>\\n            </div>\\n        </h-swipe-action>\\n    </div>\\n</section>\\n<!--html 结束-->\\n\";\n\n//# sourceURL=webpack:///./page/swipe-action/index.html?");

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