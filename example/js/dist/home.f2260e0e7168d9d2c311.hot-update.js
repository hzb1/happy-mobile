webpackHotUpdate("home",{

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tagName() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n    // this.classList.add('view-show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

})