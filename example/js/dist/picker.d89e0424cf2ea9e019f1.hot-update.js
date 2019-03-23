webpackHotUpdate("picker",{

/***/ "./page/picker/index.js":
/*!******************************!*\
  !*** ./page/picker/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppPicker; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/picker/index.html\")\n\nclass AppPicker extends HTMLElement {\n  static get tagName() {\n    return 'app-picker'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = this.createElement('script')\n      const oldScript = this.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/picker/index.js?");

/***/ })

})