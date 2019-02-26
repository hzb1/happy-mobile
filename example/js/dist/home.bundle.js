(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./page/home/home.html":
/*!*****************************!*\
  !*** ./page/home/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <div class=component> <div> <h3>基础</h3> <ul> <li> <a class=list href=#button>按钮 Button <h-icon type=h-right></h-icon> </a> </li> <li> <a class=list href=#icon>图标 Icon <h-icon type=h-right></h-icon> </a> </li> </ul> </div> <div> <h3> 数据展示 </h3> <ul> <li> <h-swipe-action class=list> <style>.swipe-action-slot{display:flex;justify-content:space-between;align-items:center;background-color:#fff}.swipe-action-slot .swipe-action-content{width:100%;display:flex;justify-content:space-between;align-items:center}</style> <a href=page/swipe-action class=\\\"swipe-action-slot list\\\"> <div class=swipe-action-content> <p>滑动操作 SwipeAction</p> <h-icon type=h-right></h-icon> </div> </a> <div slot=right style=background-color:var(--h-theme-primary);color:#fff;width:70px;text-align:center> <span>Git</span> </div> </h-swipe-action> </li> <li> <a class=list href=page/mask>遮罩 Mask <h-icon type=h-right></h-icon> </a> </li> <li> <a class=list href=page/grid>宫格 Grid <h-icon type=h-right></h-icon> </a> </li> <li> <a class=list href=page/img>图片懒加载 Img <h-icon type=h-right></h-icon> </a> </li> </ul> </div> <div> <h3> 反馈 </h3> <ul> <li> <a class=list href=page/toast>轻提示 Toast <h-icon type=h-right></h-icon> </a> </li> </ul> </div> <div> <h3> 表单 </h3> <ul> <li> <a class=list href=page/form>表单 Form <h-icon type=h-right></h-icon> </a> </li> </ul> </div> </div> \";\n\n//# sourceURL=webpack:///./page/home/home.html?");

/***/ }),

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tag() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n    this.onView('show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  onView(type) {\n    const container = document.querySelector('route-view')\n    if (type === 'show') {\n      container.classList.add('view-in')\n    } else {\n      container.classList.remove('view-in')\n    }\n  }\n\n  disconnectedCallback() {\n    this.onView('hide')\n  }\n}\n\nwindow.customElements.define('app-home', Home)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

}]);