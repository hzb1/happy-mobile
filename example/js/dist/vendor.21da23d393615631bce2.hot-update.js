webpackHotUpdate("vendor",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route/index.js */ \"./route/index.js\");\n\n\nclass RouteView extends HTMLElement {\n  constructor() {\n    super()\n    console.log(this)\n  }\n\n  connectedCallback() {\n    const { hash } = window.location\n    _route_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(hash)\n  }\n}\nwindow.customElements.define('route-view', RouteView)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

})