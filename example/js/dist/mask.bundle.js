(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mask"],{

/***/ "./page/mask/index.html":
/*!******************************!*\
  !*** ./page/mask/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    .my-mask-slot{\\n        width: 100%;\\n        height: 100%;\\n        padding: 4vw;\\n        box-sizing: border-box;\\n        background-color: white;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的mask</h4>\\n    <h-mask id=\\\"mask1\\\" style=\\\"display: none\\\">\\n        <div class=\\\"my-mask-slot\\\">\\n            <h-button inline onclick=\\\"hide1()\\\" style=\\\"margin-top: 20px\\\">hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline shadow onclick=\\\"show1()\\\">show</h-button>\\n\\n\\n    <h4>动画</h4>\\n    <h6>fadeDown</h6>\\n    <h-mask id=\\\"fadeDownMask\\\">\\n        <div class=\\\"my-mask-slot fadeDown\\\">\\n            <h-button inline onclick=\\\"fadeDownHide()\\\">fadeDown Hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline shadow onclick=\\\"fadeDownShow()\\\">fadeDown</h-button>\\n\\n\\n    <h6>slide</h6>\\n    <h-mask id=\\\"mask2\\\" style=\\\"display: none\\\">\\n        <div class=\\\"my-mask-slot\\\">\\n            <h-button inline onclick=\\\"slideHide()\\\" style=\\\"margin-top: 20px\\\">hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline shadow onclick=\\\"slideShow('slideUp')\\\">slideUp</h-button>\\n    <h-button inline shadow onclick=\\\"slideShow('slideDown')\\\">slideDown</h-button>\\n    <h-button inline shadow onclick=\\\"slideShow('slideRight')\\\">slideRight</h-button>\\n</section>\\n\\n<script>\\n    // 最简单的mask\\n    var mask1 = document.querySelector('app-mask').querySelector('#mask1')\\n    var show1 = function (animation) {\\n      mask1.show(animation)\\n    }\\n    var hide1 = function () {\\n      mask1.hide()\\n    }\\n\\n    mask1.addEventListener('backdrop', function (ev) {\\n      console.log('mask1 backdrop', ev.detail)\\n    })\\n\\n    // fadeDown\\n    var fadeDownMask = document.querySelector('app-mask').querySelector('#fadeDownMask')\\n    var fadeDownShow = function () {\\n      fadeDownMask.show('fadeDown')\\n    }\\n    var fadeDownHide = function () {\\n      fadeDownMask.hide()\\n    }\\n\\n\\n    var mask2 = document.querySelector('app-mask').querySelector('#mask2')\\n    var slideShow = function (animation) {\\n      mask2.show(animation)\\n    }\\n    var slideHide = function () {\\n      mask2.hide()\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/mask/index.html?");

/***/ }),

/***/ "./page/mask/index.js":
/*!****************************!*\
  !*** ./page/mask/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mask; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/mask/index.html\")\n\nclass Mask extends HTMLElement {\n  static get tagName() {\n    return 'app-mask'\n  }\n\n  init() {\n    this.innerHTML = `\n      ${html}\n    `\n\n    // script\n    if (this.querySelector('script')) {\n      const script = document.createElement('script')\n      const oldScript = this.removeChild(this.querySelector('script'))\n      script.innerHTML = oldScript.innerText\n      this.appendChild(script)\n    }\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/mask/index.js?");

/***/ })

}]);