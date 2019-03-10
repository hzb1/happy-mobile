webpackHotUpdate("accordion",{

/***/ "./page/accordion/index.js":
/*!*********************************!*\
  !*** ./page/accordion/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppAccordion; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/accordion/index.html\")\n\nclass AppAccordion extends HTMLElement {\n  static get tagName() {\n    return 'app-accordion'\n  }\n\n  constructor() {\n    super()\n    // this.attachShadow({ mode: 'open' })\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n  }\n}\n\n\n//# sourceURL=webpack:///./page/accordion/index.js?");

/***/ })

})