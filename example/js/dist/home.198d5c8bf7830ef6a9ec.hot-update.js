webpackHotUpdate("home",{

/***/ "./page/home/home.html":
/*!*****************************!*\
  !*** ./page/home/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n\\n<div class=\\\"component\\\">\\n    <div>\\n        <h3>基础</h3>\\n        <ul>\\n            <li>\\n                <!--href=\\\"#button\\\"-->\\n                <!--<a class=\\\"list\\\" onclick=\\\"go('#button')\\\" id=\\\"buttins\\\" >按钮 Button-->\\n                <a class=\\\"list\\\" href=\\\"#button\\\" id=\\\"buttins\\\" >按钮 Button\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#icon\\\">图标 Icon\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            数据展示\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#swipe-action\\\">\\n                    <p>滑动操作 SwipeAction</p>\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#mask\\\">遮罩 Mask\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#carousel\\\">轮播 Carousel\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#accordion\\\">手风琴 Accordion\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#img\\\">图片懒加载 Img\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            反馈\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#toast\\\">轻提示 Toast\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            表单\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#form\\\">表单 Form\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n    <div>\\n        <h3>\\n            布局\\n        </h3>\\n        <ul>\\n            <li>\\n                <a class=\\\"list\\\" href=\\\"#app-bar\\\">AppBar\\n                    <h-icon type=\\\"right\\\"></h-icon>\\n                </a>\\n            </li>\\n        </ul>\\n    </div>\\n</div>\\n\\n<script>\\n    // function go(path) {\\n    //   console.log(path, 'go')\\n    //   var state = {\\n    //     title: \\\"title\\\",\\n    //     url: \\\"#\\\"\\n    //   };\\n    //   window.history.pushState(state, 'title', path)\\n    // }\\n</script>\\n\\n\\n\";\n\n//# sourceURL=webpack:///./page/home/home.html?");

/***/ }),

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tagName() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n\n    this.list = [\n      {\n        name: '基础',\n        children: [\n          {\n            name: '按钮 Button',\n            link: '#button',\n          },\n          {\n            name: '图标 Icon',\n            link: '#icon',\n          },\n        ],\n      },\n      {\n        name: '数据展示',\n        children: [\n          {\n            name: '滑动操作 SwipeAction',\n            link: '#swipe-action',\n          },\n          {\n            name: '遮罩 Mask',\n            link: '#mask',\n          },\n          {\n            name: '轮播 Carousel',\n            link: '#carousel',\n          },\n          {\n            name: '手风琴 Accordion',\n            link: '#accordion',\n          },\n          {\n            name: '图片懒加载 Img',\n            link: '#img',\n          },\n        ],\n      },\n    ]\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const component = this.querySelector('.component')\n    let cHtml = ''\n    this.list.forEach((item) => {\n      cHtml += `\n        <div>${item.name}</div>\n      `\n    })\n    console.log(cHtml)\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n    // this.classList.add('view-show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

})