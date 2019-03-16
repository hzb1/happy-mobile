webpackHotUpdate("mask",{

/***/ "./page/mask/index.html":
/*!******************************!*\
  !*** ./page/mask/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    .my-mask-slot{\\n        width: 100%;\\n        height: 100%;\\n        padding: 4vw;\\n        box-sizing: border-box;\\n        background-color: white;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的mask</h4>\\n    <h-mask id=\\\"mask1\\\" style=\\\"display: none\\\">\\n        <div class=\\\"my-mask-slot\\\">\\n            <h-button inline onclick=\\\"hide1()\\\" style=\\\"margin-top: 20px\\\">hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline onclick=\\\"show1()\\\">show</h-button>\\n\\n\\n    <h4>动画</h4>\\n    <h6>fadeDown</h6>\\n    <h-mask id=\\\"fadeDownMask\\\" style=\\\"display: none\\\">\\n        <div class=\\\"my-mask-slot fadeDown\\\">\\n            <h-button inline onclick=\\\"slideHide()\\\" style=\\\"margin-top: 20px\\\">fadeDown Hide</h-button>\\n        </div>\\n    </h-mask>\\n    <h-button inline onclick=\\\"slideShow('fadeDown')\\\">fadeDown</h-button>\\n\\n    <h-button inline onclick=\\\"slideShow('slideUp')\\\">slideUp</h-button>\\n    <h-button inline onclick=\\\"slideShow('slideDown')\\\">slideDown</h-button>\\n    <h-button inline onclick=\\\"slideShow('slideRight')\\\">slideRight</h-button>\\n</section>\\n\\n<script>\\n    // var mask1 = document.querySelector('#mask1')\\n    var mask1 = document.querySelector('app-mask').shadowRoot.querySelector('#mask1')\\n    var mask2 = document.querySelector('app-mask').shadowRoot.querySelector('#mask2')\\n    var mask2 = document.querySelector('app-mask').shadowRoot.querySelector('#fadeDownMask')\\n    var show1 = function (animation) {\\n      mask1.show(animation)\\n    }\\n    var hide1 = function () {\\n      mask1.hide()\\n    }\\n    var slideShow = function (animation) {\\n      mask2.show(animation)\\n    }\\n    var slideHide = function () {\\n      mask2.hide()\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/mask/index.html?");

/***/ })

})