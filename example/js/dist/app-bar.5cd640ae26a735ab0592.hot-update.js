webpackHotUpdate("app-bar",{

/***/ "./page/app-bar/index.js":
/*!*******************************!*\
  !*** ./page/app-bar/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppBar; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/app-bar/index.html\")\n\nclass AppBar extends HTMLElement {\n  static get tagName() {\n    return 'app-app-bar'\n  }\n\n  constructor() {\n    super()\n    this.attachShadow({ mode: 'open' })\n  }\n\n  connectedCallback() {\n    this.shadowRoot.innerHTML = html\n  }\n}\n\n\n//# sourceURL=webpack:///./page/app-bar/index.js?");

/***/ })

})