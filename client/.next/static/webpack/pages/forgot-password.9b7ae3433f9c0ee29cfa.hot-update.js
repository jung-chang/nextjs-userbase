self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.tsx":
/*!***********************************!*\
  !*** ./pages/forgot-password.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kech17_nextjs_userbase_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kech17_nextjs_userbase_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kech17_nextjs_userbase_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kech17_nextjs_userbase_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/kech17/nextjs-userbase/client/pages/forgot-password.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ForgotPasswordPage = function ForgotPasswordPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var email = router.query.email;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      botField = _useState[0],
      setBotField = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(email || ""),
      accountEmail = _useState2[0],
      setAccountEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      emailError = _useState3[0],
      setEmailError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,_home_kech17_nextjs_userbase_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kech17_nextjs_userbase_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      return _home_kech17_nextjs_userbase_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              try {} catch (error) {
                setError(error.message);
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Reset Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          name: "name",
          "aria-label": "Humans need not fill out",
          type: "text",
          tabIndex: -1,
          value: botField,
          onChange: function onChange(event) {
            return setBotField(event.target.value);
          },
          style: {
            display: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Email",
          value: accountEmail,
          type: "email",
          onChange: function onChange(event) {
            return setAccountEmail(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), emailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: emailError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 26
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(ForgotPasswordPage, "BGnkCYziU8GzWeDa+1Us+MYaVGw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = ForgotPasswordPage;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordPage);

var _c;

$RefreshReg$(_c, "ForgotPasswordPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJib3RGaWVsZCIsInNldEJvdEZpZWxkIiwiYWNjb3VudEVtYWlsIiwic2V0QWNjb3VudEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRCtCLE1BRXZCQyxLQUZ1QixHQUViRixNQUFNLENBQUNHLEtBRk0sQ0FFdkJELEtBRnVCOztBQUFBLGtCQUlDRSwrQ0FBUSxDQUFDLEVBQUQsQ0FKVDtBQUFBLE1BSXhCQyxRQUp3QjtBQUFBLE1BSWRDLFdBSmM7O0FBQUEsbUJBS1NGLCtDQUFRLENBQUNGLEtBQUssSUFBSSxFQUFWLENBTGpCO0FBQUEsTUFLeEJLLFlBTHdCO0FBQUEsTUFLVkMsZUFMVTs7QUFBQSxtQkFNS0osK0NBQVEsQ0FBQyxFQUFELENBTmI7QUFBQSxNQU14QkssVUFOd0I7QUFBQSxNQU1aQyxhQU5ZOztBQUFBLG1CQU9MTiwrQ0FBUSxDQUFDLEVBQUQsQ0FQSDtBQUFBLE1BT3hCTyxLQVB3QjtBQUFBLE1BT2pCQyxRQVBpQjs7QUFTL0IsTUFBTUMsUUFBUTtBQUFBLHlSQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsbUJBQUssQ0FBQ0MsY0FBTjs7QUFDQSxrQkFBSSxDQUNILENBREQsQ0FDRSxPQUFPSixLQUFQLEVBQW1CO0FBQ25CQyx3QkFBUSxDQUFDRCxLQUFLLENBQUNLLE9BQVAsQ0FBUjtBQUNEOztBQUxjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJILFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFRQSxzQkFDRSw4REFBQyxzREFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUVBLFFBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFXLDBCQUZiO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxrQkFBUSxFQUFFLENBQUMsQ0FKYjtBQUtFLGVBQUssRUFBRVIsUUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNTLEtBQUQ7QUFBQSxtQkFBZ0JSLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWQsQ0FBM0I7QUFBQSxXQU5aO0FBT0UsZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUNFLHFCQUFXLEVBQUMsT0FEZDtBQUVFLGVBQUssRUFBRVosWUFGVDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUsa0JBQVEsRUFBRSxrQkFBQ08sS0FBRDtBQUFBLG1CQUFXTixlQUFlLENBQUNNLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFkLENBQTFCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBZ0JHVCxVQUFVLGlCQUFJO0FBQUEsb0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQmpCLGVBaUJFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBa0JFO0FBQUEsb0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0EvQ0Q7O0dBQU1aLGtCO1VBQ1dFLGtEOzs7S0FEWEYsa0I7QUFpRE4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC45YjdhZTM0MzNmOWMwZWUyOWNmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZXJiYXNlIGZyb20gXCJ1c2VyYmFzZS1qc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgRm9yZ290UGFzc3dvcmRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFtib3RGaWVsZCwgc2V0Qm90RmllbGRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY2NvdW50RW1haWwsIHNldEFjY291bnRFbWFpbF0gPSB1c2VTdGF0ZShlbWFpbCB8fCBcIlwiKTtcbiAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZXNldCBQYXNzd29yZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPkZvcmdvdCBQYXNzd29yZDwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiSHVtYW5zIG5lZWQgbm90IGZpbGwgb3V0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIHZhbHVlPXtib3RGaWVsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSkgPT4gc2V0Qm90RmllbGQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2FjY291bnRFbWFpbH1cbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBY2NvdW50RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlbWFpbEVycm9yICYmIDxzcGFuPntlbWFpbEVycm9yfTwvc3Bhbj59XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZyBpblwiIC8+XG4gICAgICAgICAgPHNwYW4+e2Vycm9yfTwvc3Bhbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==