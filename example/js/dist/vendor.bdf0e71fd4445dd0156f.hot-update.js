webpackHotUpdate("vendor",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/_redux@4.0.1@redux/es/redux.js\");\n\n\n/**\n * This is a reducer, a pure function with (state, action) => state signature.\n * It describes how an action transforms the state into the next state.\n *\n * The shape of the state is up to you: it can be a primitive, an array, an object,\n * or even an Immutable.js data structure. The only important part is that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * In this example, we use a `switch` statement and strings, but you can use a helper that\n * follows a different convention (such as function maps) if it makes sense for your\n * project.\n */\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n\n// 创建一个保存应用程序状态的Redux商店。\n// 其 API 为 { subscribe, dispatch, getState }.\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counter)\n\n// 可以使用subscribe（）更新UI以响应状态更改。\n// 通常使用视图绑定库（例如react redux），而不是直接使用subscribe（）。\n// 但是，在本地存储中保持当前状态也很方便。\n\n// store.subscribe(() => console.log(store.getState()))\n\n// 唯一改变内部状态的方法是调度一个操作。\n// 这些操作可以序列化、记录或存储，稍后再重放。\nstore.dispatch({ type: 'INCREMENT' })\n// 1\nstore.dispatch({ type: 'INCREMENT' })\n// 2\nstore.dispatch({ type: 'DECREMENT' })\n// 1\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack:///./store/index.js?");

/***/ })

})