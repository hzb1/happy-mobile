(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./page/home/home.html":
/*!*****************************!*\
  !*** ./page/home/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n\\n<div class=\\\"component\\\">\\n    <div>\\n        <h3>基础</h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#button\\\">按钮 Button\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#icon\\\">图标 Icon\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            数据展示\\n        </h3>\\n        <ul>\\n            <!--<li>-->\\n            <!--<a href=\\\"page/swipe-action\\\">滑动操作 SwipeAction <h-icon type=\\\"right\\\"></h-icon></a>-->\\n            <!--</li>-->\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#swipe-action\\\">\\n                    <p>滑动操作 SwipeAction</p>\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#mask\\\">遮罩 Mask\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#grid\\\">宫格 Grid\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#img\\\">图片懒加载 Img\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            反馈\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#toast\\\">轻提示 Toast\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            表单\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#form\\\">表单 Form\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n</div>\\n\\n\\n\";\n\n//# sourceURL=webpack:///./page/home/home.html?");

/***/ }),

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tagName() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n    this.classList.add('view-show')\n    console.log('home')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

}]);