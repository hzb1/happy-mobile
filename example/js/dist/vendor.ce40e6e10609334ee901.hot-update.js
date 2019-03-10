webpackHotUpdate("vendor",{

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>JS HAPPY-MOBILE</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"../../dist/happy-mobile.css\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"../demo.css\\\">\\n    <!--<link rel=\\\"stylesheet\\\" href=\\\"p/prism.css\\\">-->\\n    <!--<style>-->\\n        <!--:root{ &#45;&#45;h-theme-primary: #333333;} /** 更改主题色 #187e57 **/-->\\n    <!--</style>-->\\n</head>\\n<body>\\n\\n<header class=\\\"h-elevation--z2\\\">\\n    <div class=\\\"menu\\\">\\n        <!--<h-icon type=\\\"h-sortlight\\\"></h-icon>-->\\n        <!--<h-icon type=\\\"back\\\"></h-icon>-->\\n    </div>\\n    <h1>HAPPY MOBILE</h1>\\n    <div class=\\\"theme\\\">\\n        <input id=\\\"theme-input\\\" type=\\\"color\\\"/>\\n    </div>\\n</header>\\n\\n<section class=\\\"list-box\\\">\\n    <div class=\\\"route-view\\\"></div>\\n</section>\\n\\n<!--<pre>-->\\n    <!--<code class=\\\"language-css\\\" id=\\\"code1\\\">-->\\n        <!--p { color: red }-->\\n        <!--.icon {-->\\n            <!--width: 1em;-->\\n            <!--height: 1em;-->\\n            <!--vertical-align: -0.15em;-->\\n            <!--fill: currentColor;-->\\n            <!--overflow: hidden;-->\\n        <!--}-->\\n    <!--</code>-->\\n<!--</pre>-->\\n\\n<script src=\\\"../../dist/happy-mobile.js\\\"></script>\\n<script src=\\\"dist/bundle.js\\\"></script>\\n<!--<script src=\\\"p/prism.js\\\"></script>-->\\n<script>\\n    var themeInput = document.querySelector('#theme-input')\\n\\n    if (themeInput) {\\n      themeInput.addEventListener('input', function (ev) {\\n        var html = document.querySelector('html')\\n        html.style.setProperty('--h-theme-primary', ev.target.value)\\n      })\\n    }\\n\\n    // const pre = document.createElement('pre')\\n    // const codeCSS = document.createElement('code')\\n    // codeCSS.className = 'language-css'\\n    // codeCSS.innerHTML = document.querySelector('#code1').innerHTML\\n    // pre.appendChild(codeCSS)\\n    // document.body.appendChild(pre)\\n</script>\\n</body>\\n</html>\\n\";\n\n//# sourceURL=webpack:///./index.html?");

/***/ })

})