webpackHotUpdate("button",{

/***/ "./page/button/index.js":
/*!******************************!*\
  !*** ./page/button/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var _plugin_prism_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugin/prism.css */ \"./plugin/prism.css\");\n/* harmony import */ var _plugin_prism_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_prism_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ \"./node_modules/_prismjs@1.15.0@prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import Prism from '../../p/prism'\n// const PrismJs = () => import(/* webpackChunkName: \"prismmyjs\" */ '../../p/prism')\n// const PrismCss = () => import('../../p/prism.css')\nconst html = __webpack_require__(/*! ./index.html */ \"./page/button/index.html\")\n\nclass Button extends HTMLElement {\n  static get tagName() {\n    return 'app-button'\n  }\n\n  constructor() {\n    super()\n    this.i = 0\n  }\n\n  init() {\n    // this.attachShadow({ mode: 'open' })\n    const template = document.createElement('template')\n    template.innerHTML = `\n      ${html}\n    `\n    console.log(html, template.innerHTML)\n    this.appendChild(template.content.cloneNode(true))\n\n    // script\n    const script = document.createElement('script')\n    const oldScript = this.removeChild(this.querySelector('script'))\n    script.innerHTML = oldScript.innerText\n    this.appendChild(script)\n\n    // console.log(html)\n    // const from = html.indexOf('<!--html 开始-->')\n    // const to = html.indexOf('<!--html 结束-->')\n    // // code\n    // const cssCode = document.createElement('div')\n    // cssCode.innerHTML = `\n    //   <pre>\n    //     <code class=\"language-markup\" >\n    //       <script type=\"text/plain\" class=\"language-markup\">${html.substring(from + 14, to)}</script>\n    //     </code>\n    //   </pre>\n    //   <pre>\n    //     <code class=\"language-js\">\n    //       ${this.querySelector('script').innerHTML}\n    //     </code>\n    //   </pre>\n    //   <pre>\n    //     <code class=\"language-css\">\n    //       ${this.querySelector('style').innerHTML}\n    //     </code>\n    //   </pre>\n    // `\n    // this.appendChild(cssCode)\n  }\n\n  connectedCallback() {\n    this.init()\n  }\n}\n\n\n//# sourceURL=webpack:///./page/button/index.js?");

/***/ })

})