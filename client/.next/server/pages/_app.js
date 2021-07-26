(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/kech17/nextjs-userbase/client/components/Layout/index.tsx";


const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! userbase-js */ "userbase-js");
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(userbase_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.tsx");

var _jsxFileName = "/home/kech17/nextjs-userbase/client/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function App({
  Component,
  pageProps
}) {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    userbase_js__WEBPACK_IMPORTED_MODULE_2___default().init({
      appId: "6686b81b-bf4c-4f8a-b453-d9771ee3b2f0"
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    setUser: setUser,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({
      user: user
    }, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "userbase-js":
/*!******************************!*\
  !*** external "userbase-js" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("userbase-js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZXJiYXNlLWpzXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlcmJhc2UiLCJhcHBJZCIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19VU0VSQkFTRV9BUFBfSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQzdCLHNCQUNFO0FBQUEsY0FDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFBLCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsRUFBaEM7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLDJEQUFBLENBQWM7QUFBRUMsV0FBSyxFQUFFQyxzQ0FBdUNDO0FBQWhELEtBQWQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBUSxRQUFJLEVBQUVQLElBQWQ7QUFBb0IsV0FBTyxFQUFFQyxPQUE3QjtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxVQUFJLEVBQUVEO0FBQWpCLE9BQTJCRCxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7QUNsQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZXJiYXNlIGZyb20gJ3VzZXJiYXNlLWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZXJiYXNlLmluaXQoeyBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUkJBU0VfQVBQX0lEIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfT5cbiAgICAgIDxDb21wb25lbnQgdXNlcj17dXNlcn0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlcmJhc2UtanNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=