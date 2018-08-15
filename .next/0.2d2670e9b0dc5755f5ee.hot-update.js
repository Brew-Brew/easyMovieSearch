webpackHotUpdate(0,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_initStore__ = __webpack_require__("./store/initStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__("./node_modules/mobx-react/index.module.js");
var _jsxFileName = "/Users/seungyu2/Desktop/develop/react/easyMovieSearch/pages/index.js";






var store = Object(__WEBPACK_IMPORTED_MODULE_4__store_initStore__["a" /* default */])();
console.log(store.theater);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-64497671"
  }, "EasyMovieSearch"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-64497671"
  }, store.theater.map(function (theater) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* Provider */], {
      BaseStore: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: theater.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-64497671"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      as: "/".concat(theater.id),
      href: "/theater?title=".concat(theater.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-64497671"
    }, theater.title))));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "64497671",
    css: "h1.jsx-64497671,a.jsx-64497671{font-family:\"Arial\";}ul.jsx-64497671{padding:0;}li.jsx-64497671{list-style:none;margin:5px 0;}a.jsx-64497671{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-64497671:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZ0IsQUFJNkIsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZkLEVBV0EsSUFSZSxJQU5mLFNBT0EscUJBR2EsV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2V1bmd5dTIvRGVza3RvcC9kZXZlbG9wL3JlYWN0L2Vhc3lNb3ZpZVNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBpbml0U3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luaXRTdG9yZVwiXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwibW9ieC1yZWFjdFwiXG5cblxuY29uc3Qgc3RvcmUgPSBpbml0U3RvcmUoKTtcbmNvbnNvbGUubG9nKHN0b3JlLnRoZWF0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5FYXN5TW92aWVTZWFyY2g8L2gxPlxuICAgIDx1bD5cbiAgICAgIHtzdG9yZS50aGVhdGVyLm1hcCh0aGVhdGVyID0+IChcbiAgICAgICAgIDxQcm92aWRlciBCYXNlU3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8bGkga2V5PXt0aGVhdGVyLmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgLyR7dGhlYXRlci5pZH1gfSBocmVmPXtgL3RoZWF0ZXI/dGl0bGU9JHt0aGVhdGVyLnRpdGxlfWB9PlxuICAgICAgICAgICAgICA8YT57dGhlYXRlci50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.2d2670e9b0dc5755f5ee.hot-update.js.map