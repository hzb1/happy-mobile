webpackHotUpdate("mask",{

/***/ "./page/mask/index.js":
/*!****************************!*\
  !*** ./page/mask/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mask; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/mask/index.html\")\n\nclass Mask extends HTMLElement {\n  static get tagName() {\n    return 'app-mask'\n  }\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.removeChild(this.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/mask/index.js?");

/***/ })

})