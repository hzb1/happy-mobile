webpackHotUpdate("form",{

/***/ "./page/form/index.js":
/*!****************************!*\
  !*** ./page/form/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/form/index.html\")\n\nclass Form extends HTMLElement {\n  static get tagName() {\n    return 'app-form'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n\n    const myFrom = this.querySelector('#myForm')\n    myFrom.addEventListener('submit', (ev) => {\n      ev.preventDefault()\n      ev.stopPropagation()\n      var formData = {}\n      Array.from(ev.target.elements).forEach((item) => {\n        if (item.name) formData[item.name] = item.value\n      })\n      // for ( let a of [...ev.target.elements]) {\n      //   if (a.name) {\n      //     formData[a.name] = a.value\n      //   }\n      // }\n      console.log('myForm', ev.target.elements)\n      console.log(formData)\n      // for (let i = 0; i < myFrom.elements.length; i += 1) {\n      //   document.write(myFrom.elements[i].value)\n      //   console.log('value', myFrom.elements[i].value)\n      // }\n      // return () => {}\n    }, false)\n  }\n\n  login(ev) {\n    try {\n      const { toast } = window.happy\n      const submit = this.querySelector('#submit')\n      // submit.showLoading()\n      // submit.loading = true;\n      const form = this.querySelector('#myForm')\n      submit.loading = true\n      const body = new FormData()\n      body.append('name', testform.name.value)\n      body.append('password', testform.password.value)\n      const option = {\n        method: 'post',\n        body,\n      }\n      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/login', option).then(response => response.json()).then((res) => {\n        if (res.code === 0) {\n          toast.show(res.msg) // 登录成功\n        }\n      }).finally(() => {\n        submit.loading = false\n      })\n    } catch (e) {\n      // submit.loading = false;\n      // submit.disabled = false;\n    }\n\n    return false\n  }\n}\n\n\n//# sourceURL=webpack:///./page/form/index.js?");

/***/ })

})