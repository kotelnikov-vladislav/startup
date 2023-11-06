/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/mobile-nav.js
var burger = function burger() {
  var PHONE_WIDTH = 450;
  var desktopBurger = document.getElementById('desktop-burger');
  var mobileBurger = document.getElementById('mobile-burger');
  var header = document.getElementById('header');
  desktopBurger.addEventListener('click', function () {
    header.classList.add('header--open-menu');
    document.body.classList.add('no-scroll');
  });
  mobileBurger.addEventListener('click', function () {
    header.classList.remove('header--open-menu');
    document.body.classList.remove('no-scroll');
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > PHONE_WIDTH) {
      header.classList.remove('header--open-menu');
      document.body.classList.remove('no-scroll');
    }
  });
};
;// CONCATENATED MODULE: ./src/scripts/order.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// Открытие/закрытие навигации для мобильных устройств

burger();

// --- CONF SELECT ---

// conf-bool-select
var ConfBoolSelect = /*#__PURE__*/function () {
  function ConfBoolSelect(id) {
    _classCallCheck(this, ConfBoolSelect);
    this.element = document.getElementById(id);
    this.name = this.element.dataset.name;
    this.options = _toConsumableArray(this.element.children);
    this.showOption = this.options[0];
  }
  _createClass(ConfBoolSelect, [{
    key: "hideAllOptions",
    value: function hideAllOptions() {
      this.options.forEach(function (option) {
        option.classList.remove('conf-bool-select__option--select');
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return Number(this.showOption.dataset.price) || 0;
    }
  }, {
    key: "init",
    value: function init(fn) {
      var _this = this;
      fn();
      this.options.forEach(function (option) {
        option.addEventListener('click', function () {
          _this.hideAllOptions();
          _this.showOption = option;
          option.classList.add('conf-bool-select__option--select');
          fn();
        });
      });
    }
  }]);
  return ConfBoolSelect;
}();
var ConfIntSelect = /*#__PURE__*/function () {
  function ConfIntSelect(id) {
    _classCallCheck(this, ConfIntSelect);
    this.element = document.getElementById(id);
    this.btnDec = this.element.querySelector('.conf-int-select__btn--dec');
    this.btnInc = this.element.querySelector('.conf-int-select__btn--inc');
    this.input = this.element.querySelector('input');
    this.name = this.element.dataset.name;
  }
  _createClass(ConfIntSelect, [{
    key: "getValue",
    value: function getValue() {
      return Number(this.input.value) || 0;
    }
  }, {
    key: "init",
    value: function init(fn) {
      var _this2 = this;
      fn();
      this.btnDec.addEventListener('click', function () {
        _this2.input.value = _this2.getValue() - 1;
        fn();
      });
      this.btnInc.addEventListener('click', function () {
        _this2.input.value = _this2.getValue() + 1;
        fn();
      });
      this.input.addEventListener('change', function () {
        fn();
      });
    }
  }]);
  return ConfIntSelect;
}();
var OrderPriceCalculator = /*#__PURE__*/function () {
  function OrderPriceCalculator(id) {
    _classCallCheck(this, OrderPriceCalculator);
    this.element = document.getElementById(id);
    this.priceComponents = {};
    this.calcPrice = function () {
      return 0;
    };
  }
  _createClass(OrderPriceCalculator, [{
    key: "displayPrice",
    value: function displayPrice() {
      var intl = new Intl.NumberFormat();
      var price = this.calcPrice(this.priceComponents);
      this.element.innerText = "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C - ".concat(intl.format(price), " \u0440\u0443\u0431.*");
    }
  }, {
    key: "registrPriceFormula",
    value: function registrPriceFormula(fn) {
      this.calcPrice = fn;
    }
  }, {
    key: "registrSelect",
    value: function registrSelect(select) {
      var _this3 = this;
      select.init(function () {
        _this3.priceComponents[select.name] = select.getValue();
        _this3.displayPrice();
      });
    }
  }]);
  return OrderPriceCalculator;
}();
var orderPriceCalculator = new OrderPriceCalculator('total-price');
orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-1'));
orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-2'));
orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-3'));
orderPriceCalculator.registrSelect(new ConfIntSelect('int-select-1'));
orderPriceCalculator.registrPriceFormula(function (priceComponents) {
  var totalPrice = 0;
  totalPrice += priceComponents['site-development'];
  totalPrice += priceComponents['content-creation'];
  totalPrice += priceComponents['website-promotion'];
  totalPrice *= priceComponents['count-pages'];
  return totalPrice;
});

// --- auto font size ---
var autoReduceFontSize = function autoReduceFontSize(element, baseFontSise, padding) {
  var parent = element.parentElement;
  var parentWidth = parent.getBoundingClientRect().width;
  var elementWidth = element.getBoundingClientRect().width;
  if (elementWidth + padding * 2 <= parentWidth) {
    return;
  }
  element.style.fontSize = "".concat(baseFontSise - 1, "px");
  autoReduceFontSize(element, baseFontSise - 1, padding);
};
var labelElemenets = _toConsumableArray(document.querySelectorAll('.auto-fs-label'));
var priceElemenets = _toConsumableArray(document.querySelectorAll('.auto-fs-price'));
labelElemenets.forEach(function (element) {
  return autoReduceFontSize(element, 18, 10);
});
priceElemenets.forEach(function (element) {
  return autoReduceFontSize(element, 16, 10);
});
window.addEventListener('resize', function () {
  labelElemenets.forEach(function (element) {
    return autoReduceFontSize(element, 18, 10);
  });
  priceElemenets.forEach(function (element) {
    return autoReduceFontSize(element, 16, 10);
  });
});
/******/ })()
;