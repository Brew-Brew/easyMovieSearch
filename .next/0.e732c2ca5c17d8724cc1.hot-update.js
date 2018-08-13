webpackHotUpdate(0,{

/***/ "./store/initStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("./node_modules/mobx/lib/mobx.module.js");
var _desc, _value, _class, _descriptor;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}


var messages = ["nice to have you here"];
var store = null;
var Store = (_class = // @observable =Message = ''
function Store() {
  var _this = this;

  _classCallCheck(this, Store);

  Object.defineProperty(this, "start", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _initializerWarningHelper(_descriptor, this)
  });
  Object.defineProperty(this, "stop", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return clearInterval(_this.timer);
    }
  });
  this.Message = messages[0];
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "start", [__WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */]], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.timer = setInterval(function () {
        _this2.helloMessage = messages[0];
      }, 10000);
    };
  }
})), _class);
function initStore() {
  return new Store();
}

/***/ })

})
//# sourceMappingURL=0.e732c2ca5c17d8724cc1.hot-update.js.map