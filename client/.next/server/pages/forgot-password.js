(function() {
var exports = {};
exports.id = "pages/forgot-password";
exports.ids = ["pages/forgot-password"];
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

/***/ "./pages/forgot-password.tsx":
/*!***********************************!*\
  !*** ./pages/forgot-password.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! userbase-js */ "userbase-js");
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(userbase_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.tsx");

var _jsxFileName = "/home/kech17/nextjs-userbase/client/pages/forgot-password.tsx";






const ForgotPasswordPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    email
  } = router.query;
  const {
    0: botField,
    1: setBotField
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: accountEmail,
    1: setAccountEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(email !== null && email !== void 0 ? email : "");
  const {
    0: emailError,
    1: setEmailError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await userbase_js__WEBPACK_IMPORTED_MODULE_4___default().forgotPassword({
        username: accountEmail
      });
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Reset Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          name: "name",
          "aria-label": "Humans need not fill out",
          type: "text",
          tabIndex: -1,
          value: botField,
          onChange: event => setBotField(event.target.value),
          style: {
            display: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Email",
          value: accountEmail,
          type: "email",
          onChange: event => setAccountEmail(event.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), emailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: emailError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 26
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordPage);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/forgot-password.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXNlcmJhc2UtanNcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIkZvcmdvdFBhc3N3b3JkUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImVtYWlsIiwicXVlcnkiLCJib3RGaWVsZCIsInNldEJvdEZpZWxkIiwidXNlU3RhdGUiLCJhY2NvdW50RW1haWwiLCJzZXRBY2NvdW50RW1haWwiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsImVycm9yIiwic2V0RXJyb3IiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInVzZXJiYXNlIiwidXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUUEsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVlGLE1BQU0sQ0FBQ0csS0FBekI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0YsK0NBQVEsQ0FBRUosS0FBRixhQUFFQSxLQUFGLGNBQUVBLEtBQUYsR0FBVyxFQUFYLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLCtDQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFFQSxRQUFNTyxRQUFRLEdBQUcsTUFBT0MsS0FBUCxJQUFzQjtBQUNyQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUk7QUFDRixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsaUVBQUEsQ0FBd0I7QUFDN0NDLGdCQUFRLEVBQUVYO0FBRG1DLE9BQXhCLENBQXZCO0FBR0FZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0QsS0FMRCxDQUtFLE9BQU9MLEtBQVAsRUFBbUI7QUFDbkJDLGNBQVEsQ0FBQ0QsS0FBSyxDQUFDVSxPQUFQLENBQVI7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUVSLFFBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFXLDBCQUZiO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxrQkFBUSxFQUFFLENBQUMsQ0FKYjtBQUtFLGVBQUssRUFBRVQsUUFMVDtBQU1FLGtCQUFRLEVBQUdVLEtBQUQsSUFBZ0JULFdBQVcsQ0FBQ1MsS0FBSyxDQUFDUSxNQUFOLENBQWFDLEtBQWQsQ0FOdkM7QUFPRSxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVVFO0FBQ0UscUJBQVcsRUFBQyxPQURkO0FBRUUsZUFBSyxFQUFFakIsWUFGVDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUsa0JBQVEsRUFBR08sS0FBRCxJQUFXTixlQUFlLENBQUNNLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQUFkO0FBSnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsRUFnQkdkLFVBQVUsaUJBQUk7QUFBQSxvQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCakIsZUFpQkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkYsZUFrQkU7QUFBQSxvQkFBT0U7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOEJELENBbkREOztBQXFEQSwrREFBZVosa0JBQWYsRTs7Ozs7Ozs7Ozs7QUMzREEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VyYmFzZSBmcm9tIFwidXNlcmJhc2UtanNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEZvcmdvdFBhc3N3b3JkUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbYm90RmllbGQsIHNldEJvdEZpZWxkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWNjb3VudEVtYWlsLCBzZXRBY2NvdW50RW1haWxdID0gdXNlU3RhdGUoKGVtYWlsID8/IFwiXCIpIGFzIHN0cmluZyk7XG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZXJiYXNlLmZvcmdvdFBhc3N3b3JkKHtcbiAgICAgICAgdXNlcm5hbWU6IGFjY291bnRFbWFpbCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlc2V0IFBhc3N3b3JkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+Rm9yZ290IFBhc3N3b3JkPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIdW1hbnMgbmVlZCBub3QgZmlsbCBvdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgdmFsdWU9e2JvdEZpZWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiBzZXRCb3RGaWVsZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17YWNjb3VudEVtYWlsfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFjY291bnRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2VtYWlsRXJyb3IgJiYgPHNwYW4+e2VtYWlsRXJyb3J9PC9zcGFuPn1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9nIGluXCIgLz5cbiAgICAgICAgICA8c3Bhbj57ZXJyb3J9PC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZFBhZ2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2VyYmFzZS1qc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==