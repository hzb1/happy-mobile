webpackHotUpdate("picker",{

/***/ "./page/picker/index.html":
/*!********************************!*\
  !*** ./page/picker/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<link rel=\\\"stylesheet\\\" href=\\\"../../../../dist/happy-mobile.css\\\">\\n<style>\\n    .demo-page{\\n        padding: 18px 18px 80px;\\n        box-sizing: border-box;\\n    }\\n    h-button{\\n        margin-bottom: 6px;\\n    }\\n</style>\\n\\n<section class=\\\"demo-page\\\">\\n    <h4>最简单的picker</h4>\\n    <h-button shadow onclick=\\\"open1()\\\" >open picker</h-button>\\n    <h-picker id=\\\"picker1\\\"></h-picker>\\n\\n</section>\\n\\n<script>\\n    var open1 = function () {\\n      picker1.open()\\n    }\\n    var picker1 = document.querySelector('app-picker').shadowRoot.querySelector('#picker1')\\n    console.log(picker1)\\n    picker1.data = [{\\n      value: 1,\\n      label: '1',\\n    },{\\n      value: 2,\\n      label: '2',\\n    },{\\n      value: 3,\\n      label: '3',\\n    },{\\n      value: 4,\\n      label: '4',\\n    },\\n    ]\\n    picker1.addEventListener('ok', function (ev) {\\n      var val = ev.detail\\n      window.happy.Toast.show(`您选择了 ${val.label}`)\\n    })\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/picker/index.html?");

/***/ })

})