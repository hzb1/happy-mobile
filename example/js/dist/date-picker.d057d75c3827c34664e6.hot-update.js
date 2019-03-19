webpackHotUpdate("date-picker",{

/***/ "./page/date-picker/index.html":
/*!*************************************!*\
  !*** ./page/date-picker/index.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-button{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的date-picker</h4>\\n    <h-button shadow onclick=\\\"open1()\\\" >date-picker</h-button>\\n    <h-date-picker id=\\\"date-picker1\\\"></h-date-picker>\\n\\n</section>\\n\\n<script>\\n    var open1 = function () {\\n      d1.open()\\n    }\\n    var d1 = document.querySelector('app-date-picker').shadowRoot.querySelector('#date-picker1')\\n    d1.data = [{\\n      value: 1,\\n      label: '1',\\n    },{\\n      value: 2,\\n      label: '2',\\n    },{\\n      value: 3,\\n      label: '3',\\n    },{\\n      value: 4,\\n      label: '4',\\n    },\\n    ]\\n    d1.addEventListener('ok', function (ev) {\\n      console.log(ev.detail)\\n      const val = ev.detail\\n      window.happy.Toast.show(`您选择了 ${val.label}`)\\n    })\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/date-picker/index.html?");

/***/ })

})