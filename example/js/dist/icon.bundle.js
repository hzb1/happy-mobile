(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon"],{

/***/ "./page/icon/index.html":
/*!******************************!*\
  !*** ./page/icon/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 2px 80px;\\n        box-sizing: border-box;\\n    }\\n</style>\\n\\n<style>\\n    .icon-content {\\n        display: flex;\\n        flex-wrap: wrap;\\n        padding-bottom: 140px;\\n    }\\n    .icon-content .icon-item {\\n        color: #333;\\n        width: 25%;\\n        height: 60px;\\n        text-align: center;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n    .icon-content .icon-item h-icon {\\n        font-size: 28px;\\n        margin-bottom: .1em;\\n        color: var(--h-theme-primary, #1f78ff);\\n    }\\n    .icon-content .icon-item p {\\n        font-size: 12px;\\n        white-space: nowrap;\\n        margin-top: 0;\\n        margin-bottom: 0;\\n        /*transform: scale(.8);*/\\n    }\\n</style>\\n\\n<div class=\\\"demo-page\\\">\\n    <h4 class=\\\"title\\\">全部的Icon</h4>\\n    <div class=\\\"icon-content\\\"></div>\\n</div>\\n\\n\\n\";\n\n//# sourceURL=webpack:///./page/icon/index.html?");

/***/ }),

/***/ "./page/icon/index.js":
/*!****************************!*\
  !*** ./page/icon/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Icon; });\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/icon/index.html\")\n\nclass Icon extends HTMLElement {\n  static get tagName() {\n    return 'app-icon'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n\n    const iconList = [\n      'appreciate', 'back', 'check', 'close', 'edit', 'emoji', 'favor', 'favorfill', 'loading', 'location',\n      'locationfill', 'phone', 'right', 'roundcheck', 'roundcheckfill', 'roundclose', 'roundclosefill', 'roundright',\n      'roundrightfill', 'search', 'taxi', 'timefill',\n    ]\n    const iconContent = this.shadow.querySelector('.icon-content')\n    iconList.forEach((item) => {\n      const div = document.createElement('div')\n      const p = document.createElement('p')\n      const icon = document.createElement('h-icon')\n\n      div.classList.add('icon-item')\n      p.innerText = item\n      icon.type = item\n\n      div.appendChild(icon)\n      div.appendChild(p)\n      iconContent.appendChild(div)\n    })\n  }\n\n  connectedCallback() {\n    // this.classList.add('view-show')\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/icon/index.js?");

/***/ })

}]);