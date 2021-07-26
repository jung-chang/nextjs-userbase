(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! userbase-js */ "userbase-js");
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(userbase_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/validation */ "./utils/validation.ts");


var _jsxFileName = "/home/kech17/nextjs-userbase/client/pages/login.tsx";





const LogInForm = () => {
  const {
    0: botField,
    1: setBotField
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: emailError,
    1: setEmailError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");

  const isFormValid = () => {
    if (botField.length != 0) {
      return;
    }

    const emailValid = (0,utils_validation__WEBPACK_IMPORTED_MODULE_4__.isEmailValid)(email);
    const passwordValid = (0,utils_validation__WEBPACK_IMPORTED_MODULE_4__.isPasswordValid)(password);

    if (!emailValid) {
      setEmailError("Please input a valid email address");
    }

    if (!passwordValid) {
      setPasswordError("Please input a valid password");
    }

    return emailValid && passwordValid;
  };

  const onSubmit = async event => {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      const user = await userbase_js__WEBPACK_IMPORTED_MODULE_3___default().signIn({
        username: email,
        password,
        rememberMe: "none"
      });
      console.log({
        user
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      placeholder: "Email",
      value: email,
      type: "email",
      onChange: event => setEmail(event.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), emailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: emailError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 22
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      placeholder: "Password",
      value: password,
      type: "password",
      onChange: event => setPassword(event.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: passwordError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "submit",
      value: "Log in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

const LogInPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogInForm, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (LogInPage);

/***/ }),

/***/ "./utils/validation.ts":
/*!*****************************!*\
  !*** ./utils/validation.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmailValid": function() { return /* binding */ isEmailValid; },
/* harmony export */   "isPasswordValid": function() { return /* binding */ isPasswordValid; }
/* harmony export */ });
function isEmailValid(email) {
  return email.length > 3;
}
function isPasswordValid(password) {
  return password.length > 5;
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZXJiYXNlLWpzXCIiXSwibmFtZXMiOlsiTG9nSW5Gb3JtIiwiYm90RmllbGQiLCJzZXRCb3RGaWVsZCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzRm9ybVZhbGlkIiwibGVuZ3RoIiwiZW1haWxWYWxpZCIsImlzRW1haWxWYWxpZCIsInBhc3N3b3JkVmFsaWQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwidXNlcmJhc2UiLCJ1c2VybmFtZSIsInJlbWVtYmVyTWUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSIsIkxvZ0luUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUN0QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFB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eEJGLGVBeUJFO0FBQUEsZ0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2QkQsQ0FyRUQ7O0FBdUVBLE1BQU1xQixTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsa0JBREY7QUFVRCxDQVhEOztBQWFBLCtEQUFlQSxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rk8sU0FBU2hCLFlBQVQsQ0FBc0JiLEtBQXRCLEVBQThDO0FBQ2pELFNBQU9BLEtBQUssQ0FBQ1csTUFBTixHQUFlLENBQXRCO0FBQ0g7QUFFTSxTQUFTSSxlQUFULENBQXlCWCxRQUF6QixFQUFvRDtBQUN2RCxTQUFPQSxRQUFRLENBQUNPLE1BQVQsR0FBa0IsQ0FBekI7QUFDSCxDOzs7Ozs7Ozs7OztBQ05ELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VyYmFzZSBmcm9tIFwidXNlcmJhc2UtanNcIjtcbmltcG9ydCB7IGlzRW1haWxWYWxpZCwgaXNQYXNzd29yZFZhbGlkIH0gZnJvbSBcInV0aWxzL3ZhbGlkYXRpb25cIjtcblxuY29uc3QgTG9nSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBbYm90RmllbGQsIHNldEJvdEZpZWxkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgaWYgKGJvdEZpZWxkLmxlbmd0aCAhPSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVtYWlsVmFsaWQgPSBpc0VtYWlsVmFsaWQoZW1haWwpO1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuICAgIGlmICghZW1haWxWYWxpZCkge1xuICAgICAgc2V0RW1haWxFcnJvcihcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XG4gICAgfVxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIHBhc3N3b3JkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZW1haWxWYWxpZCAmJiBwYXNzd29yZFZhbGlkO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghaXNGb3JtVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJiYXNlLnNpZ25Jbih7XG4gICAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHJlbWVtYmVyTWU6IFwibm9uZVwiLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJIdW1hbnMgbmVlZCBub3QgZmlsbCBvdXRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgdmFsdWU9e2JvdEZpZWxkfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBhbnkpID0+IHNldEJvdEZpZWxkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAge2VtYWlsRXJyb3IgJiYgPHNwYW4+e2VtYWlsRXJyb3J9PC9zcGFuPn1cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIHtwYXNzd29yZEVycm9yICYmIDxzcGFuPntwYXNzd29yZEVycm9yfTwvc3Bhbj59XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9nIGluXCIgLz5cbiAgICAgIDxzcGFuPntlcnJvcn08L3NwYW4+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuY29uc3QgTG9nSW5QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxvZyBJbjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPExvZ0luRm9ybSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW5QYWdlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVtYWlsLmxlbmd0aCA+IDM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPiA1O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlcmJhc2UtanNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=