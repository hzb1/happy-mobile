webpackHotUpdate("accordion",{

/***/ "./page/accordion/index.html":
/*!***********************************!*\
  !*** ./page/accordion/index.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n    .my-accordion1 .header{\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 0 12px;\\n        height: 42px;\\n        border: 1px solid #eeeeee;\\n    }\\n</style>\\n\\n<!--html 开始-->\\n<section>\\n    <h4>最简单的Accordion</h4>\\n    <h-accordion class=\\\"my-accordion1\\\">\\n        <div class=\\\"header\\\">\\n            <h3>title</h3>\\n            <h-button size=\\\"small\\\" inline onclick=\\\"toggle()\\\">展开</h-button>\\n        </div>\\n        <div slot=\\\"content\\\">\\n            <p>content p1</p>\\n            <p>content p2</p>\\n            <p>content p3</p>\\n            <p>content p4</p>\\n            <p>content p5</p>\\n        </div>\\n    </h-accordion>\\n</section>\\n<!--html 结束-->\\n\\n<script>\\n    var toggle = function () {\\n      var a = document.querySelector('.my-accordion1')\\n      console.log(a.value)\\n      a.toggle()\\n\\n    }\\n</script>\\n\";\n\n//# sourceURL=webpack:///./page/accordion/index.html?");

/***/ })

})