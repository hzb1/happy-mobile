(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form"],{

/***/ "./page/form/index.html":
/*!******************************!*\
  !*** ./page/form/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <h4 class=title>Form</h4> <div class=form-content> <form id=myForm name=myForm class=my-form onsubmit=\\\"return login()\\\"> <div class=form-item> <h-icon type=h-my_light></h-icon> <input h-input type=text name=name required min=3 max=6 placeholder=请输入用户名（3到6位（字母，数字，下划线，减号） /> </div> <div class=form-item> <h-icon type=h-my_light></h-icon> <input h-input type=password name=password required value=password placeholder=请输入密码 /> </div> <div class=form-btn> <h-button id=submit type=submit shadow>登录</h-button> <h-button color=warn type=reset shadow style=margin-top:18px>重置</h-button> <h-button color=secondary shadow=true style=margin-top:18px>注册</h-button> </div> </form> </div> <div class=form style=padding-bottom:70px> <p>input type</p> <div class=form-ls> text <input h-input type=text /> </div> <div class=form-ls> url <input type=url /> </div> <div class=form-ls> tel <input type=tel /> </div> <div class=form-ls> email <input type=email /> </div> <div class=form-ls> search <input type=search /> </div> <div class=form-ls> number <input type=number /> </div> <div class=form-ls> range <input type=range /> </div> <div class=form-ls> datetime-local <input type=datetime-local />用于输入日期和时间值，提供的时区为本地时区。 </div> <div class=form-ls> date <input type=date />用于输入日期和时间值，不提供时区。 </div> <div class=form-ls> time <input type=time />用于只输入时间，不提供时区。 </div> <div class=form-ls> week <input type=week />用于只输入星期，不提供时区。 </div> <div class=form-ls> month <input type=month />用于只输入月份，不提供时区。 </div> <div class=form-ls> color <input type=color />用于选取颜色。 </div> <p>datalist</p> <label for=frmFavChocolate>datalist</label> <input type=text name=fav-choc id=frmFavChocolate list=chocType> <datalist id=chocType> <option value=white> </option><option value=milk> </option><option value=dark> </option></datalist> </div> \";\n\n//# sourceURL=webpack:///./page/form/index.html?");

/***/ }),

/***/ "./page/form/index.js":
/*!****************************!*\
  !*** ./page/form/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\n\n\nconst html = __webpack_require__(/*! ./index.html */ \"./page/form/index.html\")\n\nclass Form extends HTMLElement {\n  static get tagName() {\n    return 'app-form'\n  }\n\n  constructor() {\n    super()\n  }\n\n  connectedCallback() {\n    this.innerHTML = html\n  }\n\n  login(ev) {\n    try {\n      const { toast } = window.happy\n      const submit = this.querySelector('#submit')\n      // submit.showLoading()\n      // submit.loading = true;\n      const form = this.querySelector('#myForm')\n      submit.loading = true\n      const body = new FormData()\n      body.append('name', testform.name.value)\n      body.append('password', testform.password.value)\n      const option = {\n        method: 'post',\n        body,\n      }\n      fetch('https://easy-mock.com/mock/5c6cf7008d04876a33c074fb/api/login', option).then(response => response.json()).then((res) => {\n        if (res.code === 0) {\n          toast.show(res.msg) // 登录成功\n        }\n      }).finally(() => {\n        submit.loading = false\n      })\n    } catch (e) {\n      // submit.loading = false;\n      // submit.disabled = false;\n    }\n\n    return false\n  }\n}\n\n\n//# sourceURL=webpack:///./page/form/index.js?");

/***/ })

}]);