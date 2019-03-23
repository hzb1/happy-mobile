webpackHotUpdate("toast",{

/***/ "./page/toast/index.js":
/*!*****************************!*\
  !*** ./page/toast/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toast; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/toast/index.html\")\n\nclass Toast extends HTMLElement {\n  static get tagName() {\n    return 'app-toast'\n  }\n\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.removeChild(this.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/toast/index.js?");

/***/ })

})