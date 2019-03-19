webpackHotUpdate("date-picker",{

/***/ "./page/date-picker/index.html":
false,

/***/ "./page/date-picker/index.js":
false,

/***/ "./page/picker/index.html":
/*!********************************!*\
  !*** ./page/picker/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-button{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的picker</h4>\\n    <h-button shadow onclick=\\\"open1()\\\" >open picker</h-button>\\n    <h-picker id=\\\"picker1\\\"></h-picker>\\n\\n</section>\\n\\n<script>\\n    var open1 = function () {\\n      picker1.open()\\n    }\\n    var picker1 = document.querySelector('app-picker').shadowRoot.querySelector('#-picker1')\\n    picker1.data = [{\\n      value: 1,\\n      label: '1',\\n    },{\\n      value: 2,\\n      label: '2',\\n    },{\\n      value: 3,\\n      label: '3',\\n    },{\\n      value: 4,\\n      label: '4',\\n    },\\n    ]\\n    picker1.addEventListener('ok', function (ev) {\\n      var val = ev.detail\\n      window.happy.Toast.show(`您选择了 ${val.label}`)\\n    })\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/picker/index.html?");

/***/ }),

/***/ "./page/picker/index.js":
/*!******************************!*\
  !*** ./page/picker/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppPicker; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/picker/index.html\")\n\nclass AppPicker extends HTMLElement {\n  static get tagName() {\n    return 'app-picker'\n  }\n\n  constructor() {\n    super()\n    this.init()\n  }\n\n  init() {\n    this.shadow = this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    this.shadow.appendChild(template.content.cloneNode(true))\n\n    // script\n    if (this.shadow.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.shadow.removeChild(this.shadow.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.shadow.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/picker/index.js?");

/***/ })

})