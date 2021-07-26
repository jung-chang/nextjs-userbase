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
      var response;
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
              response = _context.sent;
              console.log(response);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              setError(_context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
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
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Forgot Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
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
          lineNumber: 36,
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
          lineNumber: 45,
          columnNumber: 11
        }, _this), emailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: emailError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 26
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(ForgotPasswordPage, "CICJfuKCAibcHa3iNqII98wi8kc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJib3RGaWVsZCIsInNldEJvdEZpZWxkIiwiYWNjb3VudEVtYWlsIiwic2V0QWNjb3VudEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcmJhc2UiLCJ1c2VybmFtZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQrQixNQUV2QkMsS0FGdUIsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXZCRCxLQUZ1Qjs7QUFBQSxrQkFJQ0UsK0NBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUl4QkMsUUFKd0I7QUFBQSxNQUlkQyxXQUpjOztBQUFBLG1CQUtTRiwrQ0FBUSxDQUFFRixLQUFGLGFBQUVBLEtBQUYsY0FBRUEsS0FBRixHQUFXLEVBQVgsQ0FMakI7QUFBQSxNQUt4QkssWUFMd0I7QUFBQSxNQUtWQyxlQUxVOztBQUFBLG1CQU1LSiwrQ0FBUSxDQUFDLEVBQUQsQ0FOYjtBQUFBLE1BTXhCSyxVQU53QjtBQUFBLE1BTVpDLGFBTlk7O0FBQUEsbUJBT0xOLCtDQUFRLENBQUMsRUFBRCxDQVBIO0FBQUEsTUFPeEJPLEtBUHdCO0FBQUEsTUFPakJDLFFBUGlCOztBQVMvQixNQUFNQyxRQUFRO0FBQUEseVJBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLG1CQUFLLENBQUNDLGNBQU47QUFEZTtBQUFBO0FBQUEscUJBR1VDLCtEQUFBLENBQXdCO0FBQzdDQyx3QkFBUSxFQUFFVjtBQURtQyxlQUF4QixDQUhWOztBQUFBO0FBR1BXLHNCQUhPO0FBTWJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQU5hO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUWJOLHNCQUFRLENBQUMsWUFBTVMsT0FBUCxDQUFSOztBQVJhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJSLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFZQSxzQkFDRSw4REFBQyxzREFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUVBLFFBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFXLDBCQUZiO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxrQkFBUSxFQUFFLENBQUMsQ0FKYjtBQUtFLGVBQUssRUFBRVIsUUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNTLEtBQUQ7QUFBQSxtQkFBZ0JSLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDUSxNQUFOLENBQWFDLEtBQWQsQ0FBM0I7QUFBQSxXQU5aO0FBT0UsZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUNFLHFCQUFXLEVBQUMsT0FEZDtBQUVFLGVBQUssRUFBRWpCLFlBRlQ7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLGtCQUFRLEVBQUUsa0JBQUNPLEtBQUQ7QUFBQSxtQkFBV04sZUFBZSxDQUFDTSxLQUFLLENBQUNRLE1BQU4sQ0FBYUMsS0FBZCxDQUExQjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQWdCR2QsVUFBVSxpQkFBSTtBQUFBLG9CQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJqQixlQWlCRTtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQWtCRTtBQUFBLG9CQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBbkREOztHQUFNWixrQjtVQUNXRSxrRDs7O0tBRFhGLGtCO0FBcUROLCtEQUFlQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuZDMyMjVlNTlhYjA0ZGI5Y2JmNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VyYmFzZSBmcm9tIFwidXNlcmJhc2UtanNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEZvcmdvdFBhc3N3b3JkUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbYm90RmllbGQsIHNldEJvdEZpZWxkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWNjb3VudEVtYWlsLCBzZXRBY2NvdW50RW1haWxdID0gdXNlU3RhdGUoKGVtYWlsID8/IFwiXCIpIGFzIHN0cmluZyk7XG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZXJiYXNlLmZvcmdvdFBhc3N3b3JkKHtcbiAgICAgICAgdXNlcm5hbWU6IGFjY291bnRFbWFpbCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlc2V0IFBhc3N3b3JkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+Rm9yZ290IFBhc3N3b3JkPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIdW1hbnMgbmVlZCBub3QgZmlsbCBvdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgdmFsdWU9e2JvdEZpZWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogYW55KSA9PiBzZXRCb3RGaWVsZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17YWNjb3VudEVtYWlsfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFjY291bnRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2VtYWlsRXJyb3IgJiYgPHNwYW4+e2VtYWlsRXJyb3J9PC9zcGFuPn1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9nIGluXCIgLz5cbiAgICAgICAgICA8c3Bhbj57ZXJyb3J9PC9zcGFuPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9