webpackHotUpdate("form",{

/***/ "./page/form/index.js":
/*!****************************!*\
  !*** ./page/form/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/form/index.html\")\n\nclass Form extends HTMLElement {\n  static get tagName() {\n    return 'app-form'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const myFrom = this.querySelector('#myForm')\n    myFrom.addEventListener('submit', this.login, false)\n  }\n\n  login(ev) {\n    ev.preventDefault()\n    ev.stopPropagation()\n    const submit = this.querySelector('#submit')\n    try {\n      let formData = {}\n      Array.from(ev.target.elements).forEach((item) => {\n        if (item.name) formData[item.name] = item.value\n      })\n      console.log('myForm', formData)\n      const { Toast } = window.happy\n      // submit.showLoading()\n      // submit.loading = true;\n      const form = this.querySelector('#myForm')\n      submit.loading = true\n      const body = new FormData()\n      for (let o of formData) {\n        console.log(o)\n      }\n      // body.append('name', testform.name.value)\n      // body.append('password', testform.password.value)\n      const option = {\n        method: 'post',\n        body,\n      }\n      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/login', option).then(response => response.json()).then((res) => {\n        if (res.code === 0) {\n          Toast.show(res.msg) // 登录成功\n        }\n      }).finally(() => {\n        submit.loading = false\n      })\n    } catch (e) {\n      submit.loading = false\n      submit.disabled = false\n    }\n\n    return false\n  }\n}\n\n\n//# sourceURL=webpack:///./page/form/index.js?");

/***/ })

})