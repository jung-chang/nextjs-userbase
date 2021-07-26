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
/* harmony import */ var userbase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! userbase-js */ "./node_modules/userbase-js/lib/index.js");
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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(email !== null && email !== void 0 ? email : ""),
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
              _context.prev = 1;
              _context.next = 4;
              return userbase_js__WEBPACK_IMPORTED_MODULE_7__.default.forgotPassword({
                username: accountEmail
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              setError(_context.t0.message);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6]]);
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
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
          lineNumber: 35,
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
          lineNumber: 44,
          columnNumber: 11
        }, _this), emailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: emailError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 26
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(ForgotPasswordPage, "k2c152+bEngfOdMY1bHIpcoIAuU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJib3RGaWVsZCIsInNldEJvdEZpZWxkIiwiYWNjb3VudEVtYWlsIiwic2V0QWNjb3VudEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcmJhc2UiLCJ1c2VybmFtZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQrQixNQUV2QkMsS0FGdUIsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXZCRCxLQUZ1Qjs7QUFBQSxrQkFJQ0UsK0NBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUl4QkMsUUFKd0I7QUFBQSxNQUlkQyxXQUpjOztBQUFBLG1CQUtTRiwrQ0FBUSxDQUFDRixLQUFELGFBQUNBLEtBQUQsY0FBQ0EsS0FBRCxHQUFXLEVBQVgsQ0FMakI7QUFBQSxNQUt4QkssWUFMd0I7QUFBQSxNQUtWQyxlQUxVOztBQUFBLG1CQU1LSiwrQ0FBUSxDQUFDLEVBQUQsQ0FOYjtBQUFBLE1BTXhCSyxVQU53QjtBQUFBLE1BTVpDLGFBTlk7O0FBQUEsbUJBT0xOLCtDQUFRLENBQUMsRUFBRCxDQVBIO0FBQUEsTUFPeEJPLEtBUHdCO0FBQUEsTUFPakJDLFFBUGlCOztBQVMvQixNQUFNQyxRQUFRO0FBQUEseVJBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQSxtQkFBSyxDQUFDQyxjQUFOO0FBRGU7QUFBQTtBQUFBLHFCQUdQQywrREFBQSxDQUF3QjtBQUM1QkMsd0JBQVEsRUFBRVY7QUFEa0IsZUFBeEIsQ0FITzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT2JLLHNCQUFRLENBQUMsWUFBTU0sT0FBUCxDQUFSOztBQVBhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJMLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFXQSxzQkFDRSw4REFBQyxzREFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUVBLFFBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFXLDBCQUZiO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxrQkFBUSxFQUFFLENBQUMsQ0FKYjtBQUtFLGVBQUssRUFBRVIsUUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNTLEtBQUQ7QUFBQSxtQkFBZ0JSLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQWQsQ0FBM0I7QUFBQSxXQU5aO0FBT0UsZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUNFLHFCQUFXLEVBQUMsT0FEZDtBQUVFLGVBQUssRUFBRWQsWUFGVDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUsa0JBQVEsRUFBRSxrQkFBQ08sS0FBRDtBQUFBLG1CQUFXTixlQUFlLENBQUNNLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQUFkLENBQTFCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBZ0JHWCxVQUFVLGlCQUFJO0FBQUEsb0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQmpCLGVBaUJFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBa0JFO0FBQUEsb0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FsREQ7O0dBQU1aLGtCO1VBQ1dFLGtEOzs7S0FEWEYsa0I7QUFvRE4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC4wNzcyMjJiZTdlNjk0NmM3YWIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZXJiYXNlIGZyb20gXCJ1c2VyYmFzZS1qc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgRm9yZ290UGFzc3dvcmRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFtib3RGaWVsZCwgc2V0Qm90RmllbGRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY2NvdW50RW1haWwsIHNldEFjY291bnRFbWFpbF0gPSB1c2VTdGF0ZShlbWFpbCA/PyAoXCJcIiBhcyBzdHJpbmcpKTtcbiAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVzZXJiYXNlLmZvcmdvdFBhc3N3b3JkKHtcbiAgICAgICAgdXNlcm5hbWU6IGFjY291bnRFbWFpbCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlc2V0IFBhc3N3b3JkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+Rm9yZ290IFBhc3N3b3JkPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIdW1hbnMgbmVlZCBub3QgZmlsbCBvdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgdmFsdWU9e2JvdEZpZWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiBzZXRCb3RGaWVsZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17YWNjb3VudEVtYWlsfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFjY291bnRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2VtYWlsRXJyb3IgJiYgPHNwYW4+e2VtYWlsRXJyb3J9PC9zcGFuPn1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9nIGluXCIgLz5cbiAgICAgICAgICA8c3Bhbj57ZXJyb3J9PC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9