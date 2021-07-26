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

_s(ForgotPasswordPage, "TC0Bi+sBG72u6P0pr076f7O9gps=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLnRzeCJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJib3RGaWVsZCIsInNldEJvdEZpZWxkIiwiYWNjb3VudEVtYWlsIiwic2V0QWNjb3VudEVtYWlsIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcmJhc2UiLCJ1c2VybmFtZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQrQixNQUV2QkMsS0FGdUIsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXZCRCxLQUZ1Qjs7QUFBQSxrQkFJQ0UsK0NBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUl4QkMsUUFKd0I7QUFBQSxNQUlkQyxXQUpjOztBQUFBLG1CQUtTRiwrQ0FBUSxDQUFDRixLQUFLLElBQUssRUFBWCxDQUxqQjtBQUFBLE1BS3hCSyxZQUx3QjtBQUFBLE1BS1ZDLGVBTFU7O0FBQUEsbUJBTUtKLCtDQUFRLENBQUMsRUFBRCxDQU5iO0FBQUEsTUFNeEJLLFVBTndCO0FBQUEsTUFNWkMsYUFOWTs7QUFBQSxtQkFPTE4sK0NBQVEsQ0FBQyxFQUFELENBUEg7QUFBQSxNQU94Qk8sS0FQd0I7QUFBQSxNQU9qQkMsUUFQaUI7O0FBUy9CLE1BQU1DLFFBQVE7QUFBQSx5UkFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLG1CQUFLLENBQUNDLGNBQU47QUFEZTtBQUFBO0FBQUEscUJBR1BDLCtEQUFBLENBQXdCO0FBQzVCQyx3QkFBUSxFQUFFVjtBQURrQixlQUF4QixDQUhPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPYkssc0JBQVEsQ0FBQyxZQUFNTSxPQUFQLENBQVI7O0FBUGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkwsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVdBLHNCQUNFLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sZ0JBQVEsRUFBRUEsUUFBaEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsd0JBQVcsMEJBRmI7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGtCQUFRLEVBQUUsQ0FBQyxDQUpiO0FBS0UsZUFBSyxFQUFFUixRQUxUO0FBTUUsa0JBQVEsRUFBRSxrQkFBQ1MsS0FBRDtBQUFBLG1CQUFnQlIsV0FBVyxDQUFDUSxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsS0FBZCxDQUEzQjtBQUFBLFdBTlo7QUFPRSxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFYO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQ0UscUJBQVcsRUFBQyxPQURkO0FBRUUsZUFBSyxFQUFFZCxZQUZUO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxrQkFBUSxFQUFFLGtCQUFDTyxLQUFEO0FBQUEsbUJBQVdOLGVBQWUsQ0FBQ00sS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQWQsQ0FBMUI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsRUFnQkdYLFVBQVUsaUJBQUk7QUFBQSxvQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCakIsZUFpQkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkYsZUFrQkU7QUFBQSxvQkFBT0U7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQWxERDs7R0FBTVosa0I7VUFDV0Usa0Q7OztLQURYRixrQjtBQW9ETiwrREFBZUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLmYxZTQzMWY5NzA4ZjI2ZTBhYTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlcmJhc2UgZnJvbSBcInVzZXJiYXNlLWpzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBGb3Jnb3RQYXNzd29yZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGVtYWlsIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW2JvdEZpZWxkLCBzZXRCb3RGaWVsZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjY291bnRFbWFpbCwgc2V0QWNjb3VudEVtYWlsXSA9IHVzZVN0YXRlKGVtYWlsIHx8IChcIlwiIGFzIHN0cmluZykpO1xuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXNlcmJhc2UuZm9yZ290UGFzc3dvcmQoe1xuICAgICAgICB1c2VybmFtZTogYWNjb3VudEVtYWlsLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVzZXQgUGFzc3dvcmQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT5Gb3Jnb3QgUGFzc3dvcmQ8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkh1bWFucyBuZWVkIG5vdCBmaWxsIG91dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICB2YWx1ZT17Ym90RmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBhbnkpID0+IHNldEJvdEZpZWxkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXthY2NvdW50RW1haWx9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0QWNjb3VudEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZW1haWxFcnJvciAmJiA8c3Bhbj57ZW1haWxFcnJvcn08L3NwYW4+fVxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2cgaW5cIiAvPlxuICAgICAgICAgIDxzcGFuPntlcnJvcn08L3NwYW4+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=