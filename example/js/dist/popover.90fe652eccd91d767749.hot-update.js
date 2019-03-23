webpackHotUpdate("popover",{

/***/ "./page/popover/index.js":
/*!*******************************!*\
  !*** ./page/popover/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popover; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/popover/index.html\")\n\nclass Popover extends HTMLElement {\n  static get tagName() {\n    return 'app-popover'\n  }\n\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.removeChild(this.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/popover/index.js?");

/***/ })

})