(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./page/home/home.html":
/*!*****************************!*\
  !*** ./page/home/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n\\n<div class=\\\"component\\\"></div>\\n\\n<script>\\n    // function go(path) {\\n    //   console.log(path, 'go')\\n    //   var state = {\\n    //     title: \\\"title\\\",\\n    //     url: \\\"#\\\"\\n    //   };\\n    //   window.history.pushState(state, 'title', path)\\n    // }\\n</script>\\n\\n\\n\";\n\n//# sourceURL=webpack:///./page/home/home.html?");

/***/ }),

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tagName() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n\n    this.list = [\n      {\n        name: '基础',\n        children: [\n          {\n            name: '按钮 Button',\n            link: '#button',\n          },\n          {\n            name: '图标 Icon',\n            link: '#icon',\n          },\n          {\n            name: '遮罩 Mask',\n            link: '#mask',\n          },\n        ],\n      },\n      {\n        name: '数据展示',\n        children: [\n          {\n            name: '滑动操作 SwipeAction',\n            link: '#swipe-action',\n          },\n          {\n            name: '轮播 Carousel',\n            link: '#carousel',\n          },\n          {\n            name: '手风琴 Accordion',\n            link: '#accordion',\n          },\n          {\n            name: '图片懒加载 Img',\n            link: '#img',\n          },\n        ],\n      },\n      {\n        name: '反馈',\n        children: [\n          {\n            name: '轻提示 Toast',\n            link: '#toast',\n          },\n          {\n            name: '气泡 Popover',\n            link: '#popover',\n          },\n        ],\n      },\n      {\n        name: '表单',\n        children: [\n          {\n            name: '表单 Form',\n            link: '#form',\n          },\n          // {\n          //   name: '选择器 Select',\n          //   link: '#select',\n          // },\n          {\n            name: '开关 Switch',\n            link: '#switch',\n          },\n          {\n            name: '选择器 Picker',\n            link: '#picker',\n          },\n        ],\n      },\n      {\n        name: '布局',\n        children: [\n          {\n            name: 'AppBar',\n            link: '#app-bar',\n          },\n        ],\n      },\n    ]\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    this._init()\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n  }\n\n  _init() {\n    let cHtml = ''\n    const forFun = (item) => {\n      if (!item || !item.length) return ''\n      let t = '<ul>'\n      item.forEach((i) => {\n        t += `\n          <li>\n            <a class=\"list\" href=\"${i.link}\">\n              <p>${i.name}</p>\n              <h-icon type=\"right\"></h-icon>\n            </a>\n          </li>\n        `\n      })\n      t += '</ul>'\n      return t\n    }\n    this.list.forEach((item) => {\n      cHtml += `\n        <h3>${item.name}</h3>\n        ${forFun(item.children)}\n      `\n    })\n\n    const component = this.querySelector('.component')\n    component.innerHTML = cHtml\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

}]);