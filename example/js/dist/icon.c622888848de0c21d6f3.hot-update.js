webpackHotUpdate("icon",{

/***/ "./page/icon/index.js":
/*!****************************!*\
  !*** ./page/icon/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Icon; });\n/* harmony import */ var _components_core_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/core/icon */ \"../../components/core/icon.js\");\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/icon/index.html\")\n\nclass Icon extends HTMLElement {\n  static get tagName() {\n    return 'app-icon'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n\n    const iconList = Object.keys(_components_core_icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n    console.log(iconList)\n    const iconContent = this.shadow.querySelector('.icon-content')\n    iconList.forEach((item) => {\n      const div = document.createElement('div')\n      const p = document.createElement('p')\n      const icon = document.createElement('h-icon')\n\n      div.classList.add('icon-item')\n      p.innerText = item\n      icon.type = item\n\n      div.appendChild(icon)\n      div.appendChild(p)\n      iconContent.appendChild(div)\n    })\n  }\n\n  connectedCallback() {\n    // this.classList.add('view-show')\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/icon/index.js?");

/***/ })

})