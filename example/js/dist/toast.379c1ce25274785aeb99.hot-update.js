webpackHotUpdate("toast",{

/***/ "./page/toast/index.html":
/*!*******************************!*\
  !*** ./page/toast/index.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的toast</h4>\\n    <!--<h-button inline onclick=\\\"show1(0)\\\">show</h-button>-->\\n    <h-button inline onclick=\\\"show1()\\\">show Toase</h-button>\\n    <h-button inline onclick=\\\"show1(1000)\\\">show Toase</h-button>\\n    <h-button inline onclick=\\\"hide1(4000)\\\">5s后隐藏</h-button>\\n    <h-button inline onclick=\\\"loading1()\\\">loading</h-button>\\n    <h-button inline onclick=\\\"loading2()\\\">loading2</h-button>\\n</section>\\n\\n<!--<script src=\\\"../../../../dist/happy-mobile.js\\\"></script>-->\\n<script>\\n    var Toast = window.happy.Toast\\n    var show1 = function (time) {\\n      Toast.show('嗨 toase', time)\\n    }\\n    var hide1 = function (time) {\\n      var hide = Toast.show('setTimeout 控制hide', 0)\\n      setTimeout(hide, time)\\n    }\\n    var loading1 = function () {\\n      var hide = Toast.loading('loading...')\\n      // setTimeout(hide, 3000)\\n    }\\n    var loading2 = function () {\\n      var hide = Toast.loading('loading...')\\n      // setTimeout(hide, 3000)\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/toast/index.html?");

/***/ })

})