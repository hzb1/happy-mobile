webpackHotUpdate("home",{

/***/ "./page/home/home.js":
/*!***************************!*\
  !*** ./page/home/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nconst html = __webpack_require__(/*! ./home.html */ \"./page/home/home.html\")\n\nclass Home extends HTMLElement {\n  static get tagName() {\n    return 'app-home'\n  }\n\n  constructor() {\n    super()\n\n    this.list = [\n      {\n        name: '基础',\n        children: [\n          {\n            name: '按钮 Button',\n            link: '#button',\n          },\n          {\n            name: '图标 Icon',\n            link: '#icon',\n          },\n        ],\n      },\n      {\n        name: '数据展示',\n        children: [\n          {\n            name: '滑动操作 SwipeAction',\n            link: '#swipe-action',\n          },\n          {\n            name: '遮罩 Mask',\n            link: '#mask',\n          },\n          {\n            name: '轮播 Carousel',\n            link: '#carousel',\n          },\n          {\n            name: '手风琴 Accordion',\n            link: '#accordion',\n          },\n          {\n            name: '图片懒加载 Img',\n            link: '#img',\n          },\n        ],\n      },\n    ]\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n    let cHtml = ''\n    const forFun = (item) => {\n      if (!item || !item.length) return '';\n      let t = '<ul>'\n      item.forEach((i) => {\n        t += `\n          <li>\n            <a class=\"list\" href=\"${i.link}\">\n              <p>${i.name}</p>\n              <h-icon type=\"right\"></h-icon>\n            </a>\n          </li>\n        `\n      })\n      t += '</ul>'\n      return t\n    }\n    this.list.forEach((item) => {\n      cHtml += `\n        <div>${item.name}</div>\n        ${forFun(item.children)}\n      `\n    })\n\n    const component = this.querySelector('.component')\n    // component.innerHTML = cHtml\n    console.log(cHtml)\n\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n    // this.classList.add('view-show')\n    // const lists = this.querySelectorAll('.list')\n    // for (let i = 0; i < lists.length; i++) {\n    //   lists[i].addEventListener('click', this.onViewChange, false)\n    // }\n  }\n\n  disconnectedCallback() {\n  }\n}\n\n\n//# sourceURL=webpack:///./page/home/home.js?");

/***/ })

})