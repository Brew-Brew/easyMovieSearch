webpackHotUpdate(0,{

/***/ "./store/initStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("./node_modules/mobx/lib/mobx.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Store = function Store() {
  _classCallCheck(this, Store);

  this.theater = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["j" /* observable */])([{
    id: "cgv",
    title: "CGV"
  }, {
    id: "megabox",
    title: "MEGA BOX"
  }, {
    id: "lotte-cinema",
    title: "LOTTE CINEMA"
  }]);
};

function initStore() {
  return new Store();
}

/***/ })

})
//# sourceMappingURL=0.1fff9f67c1b6f62a7867.hot-update.js.map