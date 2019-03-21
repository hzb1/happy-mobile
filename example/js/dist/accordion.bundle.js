(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

/***/ "./page/accordion/index.html":
/*!***********************************!*\
  !*** ./page/accordion/index.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .my-accordion1 .header{\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 0 12px;\\n        height: 42px;\\n        border: 1px solid #eeeeee;\\n    }\\n</style>\\n\\n<!--html 开始-->\\n<section>\\n    <h4>最简单的Accordion</h4>\\n    <h-accordion class=\\\"my-accordion1\\\">\\n        <div class=\\\"header\\\">\\n            <h3>title</h3>\\n            <h-button size=\\\"small\\\" inline onclick=\\\"toggle()\\\">展开</h-button>\\n        </div>\\n        <div slot=\\\"content\\\">\\n            <p>content p1</p>\\n            <p>content p2</p>\\n            <p>content p3</p>\\n            <p>content p4</p>\\n            <p>content p5</p>\\n        </div>\\n    </h-accordion>\\n</section>\\n<!--html 结束-->\\n\\n<script>\\n    var toggle = function () {\\n      var a = document.querySelector('.my-accordion1')\\n      a.toggle()\\n      var btn = a.querySelector('h-button')\\n      btn.innerText = a.value ? 'hide' : 'show'\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/accordion/index.html?");

/***/ }),

/***/ "./page/accordion/index.js":
/*!*********************************!*\
  !*** ./page/accordion/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppAccordion; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/accordion/index.html\")\n\nclass AppAccordion extends HTMLElement {\n  static get tagName() {\n    return 'app-accordion'\n  }\n\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.removeChild(this.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/accordion/index.js?");

/***/ })

}]);