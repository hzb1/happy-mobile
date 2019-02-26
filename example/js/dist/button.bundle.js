(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button"],{

/***/ "./page/button/index.html":
/*!********************************!*\
  !*** ./page/button/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <style>button[h-button],h-button{margin:6px 0}</style> <h4>最简单 Button</h4> <h-button id=h-btn1>组件 Button</h-button> <h4>颜色 Color</h4> <h-button color=primary>primary</h-button> <h-button color=secondary>secondary</h-button> <h-button color=success>success</h-button> <h-button color=warn>warn</h-button> <h-button color=error>error</h-button> <h4>内联 Inline</h4> <h-button inline>inline</h-button> <h4>阴影 Shadow</h4> <h-button shadow id=btn2 inline>shadow</h-button> <h-button shadow color=secondary inline>shadow</h-button> <h-button shadow color=success inline>shadow</h-button> <h-button shadow color=warn inline>shadow</h-button> <h-button shadow color=error inline>shadow</h-button> <h4>边框 Outline</h4> <h-button outline inline>outline</h-button> <h-button outline color=secondary inline>outline</h-button> <h-button outline color=warn inline>outline</h-button> <h-button outline color=error inline>outline</h-button> <h4>大小 Size</h4> <h-button size=small shadow inline>小 small</h-button> <h-button size=medium shadow inline>中 medium</h-button> <h-button size=large shadow inline>大 large</h-button> <h4>禁用 Disabled</h4> <h4>加载 Loading</h4> <h-button id=btn4 class=my-class>Loading</h-button> <h4>图标按钮</h4> <h-button size=small color=secondary inline> <h-icon type=h-like></h-icon> Icon </h-button> <h-button size=medium color=warn inline> <h-icon type=h-likefill></h-icon> Icon </h-button> <h-button size=large color=error inline> <h-icon type=h-like></h-icon> Icon </h-button> <h4>自定义style</h4> <style>.my-icon{width:50px;height:50px;font-size:24px;background-color:#6853d8;display:flex;justify-content:center;border-radius:50%}.my-icon2{width:120px;height:50px;border-radius:50px}.my-icon2::before{border-radius:100px}</style> <h-button inline shadow class=my-icon> <h-icon type=h-top></h-icon> </h-button> <h-button inline class=my-icon2> 半圆 </h-button> \";\n\n//# sourceURL=webpack:///./page/button/index.html?");

/***/ }),

/***/ "./page/button/index.js":
/*!******************************!*\
  !*** ./page/button/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst html = __webpack_require__(/*! ./index.html */ \"./page/button/index.html\")\n\nclass Button extends HTMLElement {\n  static get tag() {\n    return 'app-button'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n    const container = document.querySelector('.component')\n    container.classList.add('view-show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  onViewChange() {\n    const container = document.querySelector('.component')\n    container.classList.toggle('view-in')\n  }\n}\n\nwindow.customElements.define('app-button', Button)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n\n//# sourceURL=webpack:///./page/button/index.js?");

/***/ })

}]);