webpackHotUpdate(0,{

/***/ "./pages/theater.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("./node_modules/mobx-react/index.module.js");
var _dec,
    _class,
    _jsxFileName = "/Users/seungyu2/Desktop/develop/react/easyMovieSearch/pages/theater.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Theater = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('BaseStore'), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Theater, _Component);

  function Theater(props) {
    var _this;

    _classCallCheck(this, Theater);

    _this = _possibleConstructorReturn(this, (Theater.__proto__ || Object.getPrototypeOf(Theater)).call(this, props));
    _this.state = {};
    _this.getArea = _this.getArea.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Theater, [{
    key: "getArea",
    value: function getArea() {
      navigator.geolocation.getCurrentPosition(function (position) {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.getArea());
    }
  }, {
    key: "render",
    value: function render() {
      var BaseStore = this.props.BaseStore;
      console.log(BaseStore);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "\uC601\uD654\uAD00"), BaseStore.theater.map(function (val) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, val.title);
      }));
    }
  }]);

  return Theater;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Theater);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/theater")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.9cff90301ce5cb018c39.hot-update.js.map