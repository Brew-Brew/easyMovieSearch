webpackHotUpdate(0,{

/***/ "./store/initStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("./node_modules/mobx/lib/mobx.module.js");
var _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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


var Store = (_class = function Store() {
  _classCallCheck(this, Store);

  _initDefineProp(this, "initLocation", _descriptor, this);

  this.theater = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"])([{
    id: "cgv",
    title: "CGV"
  }, {
    id: "megabox",
    title: "MEGA BOX"
  }, {
    id: "lotte-cinema",
    title: "LOTTE CINEMA"
  }]);
  this.location = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"])({
    latitude: null,
    longitude: null
  });
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "initLocation", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (data) {
      console.log('data', data);
      _this.location = data;
    };
  }
})), _class);
function initStore() {
  return new Store();
}

/***/ })

})
//# sourceMappingURL=0.1aa2a3b821a51f419ba3.hot-update.js.map