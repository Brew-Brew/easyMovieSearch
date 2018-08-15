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







function getTheaters() {
  return [{
    id: "cgv",
    title: "CGV"
  }, {
    id: "megabox",
    title: "MEGABOX"
  }, {
    id: "lotte-cinema",
    title: "LOTTE CINEMA"
  }];
}

var store = Object(__WEBPACK_IMPORTED_MODULE_4__store_initStore__["a" /* default */])();
console.log(store.theater);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-64497671"
  }, "EasyMovieSearch"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-64497671"
  }, store.theater.map(function (theater) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* Provider */], {
      BaseStore: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: theater.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      className: "jsx-64497671"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      as: "/".concat(theater.id),
      href: "/theater?title=".concat(theater.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      className: "jsx-64497671"
    }, theater.title))));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "64497671",
    css: "h1.jsx-64497671,a.jsx-64497671{font-family:\"Arial\";}ul.jsx-64497671{padding:0;}li.jsx-64497671{list-style:none;margin:5px 0;}a.jsx-64497671{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-64497671:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFJNkIsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZkLEVBV0EsSUFSZSxJQU5mLFNBT0EscUJBR2EsV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2V1bmd5dTIvRGVza3RvcC9kZXZlbG9wL3JlYWN0L2Vhc3lNb3ZpZVNlYXJjaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBpbml0U3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luaXRTdG9yZVwiXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwibW9ieC1yZWFjdFwiXG5cbmZ1bmN0aW9uIGdldFRoZWF0ZXJzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IFwiY2d2XCIsIHRpdGxlOiBcIkNHVlwiIH0sXG4gICAgeyBpZDogXCJtZWdhYm94XCIsIHRpdGxlOiBcIk1FR0FCT1hcIiB9LFxuICAgIHsgaWQ6IFwibG90dGUtY2luZW1hXCIsIHRpdGxlOiBcIkxPVFRFIENJTkVNQVwiIH1cbiAgXTtcbn1cbmNvbnN0IHN0b3JlID0gaW5pdFN0b3JlKCk7XG5jb25zb2xlLmxvZyhzdG9yZS50aGVhdGVyKTtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+RWFzeU1vdmllU2VhcmNoPC9oMT5cbiAgICA8dWw+XG4gICAgICB7c3RvcmUudGhlYXRlci5tYXAodGhlYXRlciA9PiAoXG4gICAgICAgICA8UHJvdmlkZXIgQmFzZVN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgPGxpIGtleT17dGhlYXRlci5pZH0+XG4gICAgICAgICAgICA8TGluayBhcz17YC8ke3RoZWF0ZXIuaWR9YH0gaHJlZj17YC90aGVhdGVyP3RpdGxlPSR7dGhlYXRlci50aXRsZX1gfT5cbiAgICAgICAgICAgICAgPGE+e3RoZWF0ZXIudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
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
//# sourceMappingURL=0.5088cb992501e1e89683.hot-update.js.map