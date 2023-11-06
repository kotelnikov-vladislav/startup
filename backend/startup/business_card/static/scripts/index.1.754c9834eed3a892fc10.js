/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/mixins/tabs/tabs.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
var PDC = /*#__PURE__*/function () {
  function PDC(id) {
    _classCallCheck(this, PDC);
    this.component = document.getElementById("pdc-".concat(id));
    this.contents = _toConsumableArray(this.component.children);
  }
  _createClass(PDC, [{
    key: "align\u0421ontentHeight",
    value: function alignСontentHeight() {
      var maxHeight = 0;
      this.contents.forEach(function (content) {
        var contentHeight = content.getBoundingClientRect().height;
        if (contentHeight > maxHeight) {
          maxHeight = contentHeight;
        }
      });
      this.component.style.height = "".concat(maxHeight, "px");
    }
  }, {
    key: "hideAllElements",
    value: function hideAllElements() {
      var _iterator = _createForOfIteratorHelper(this.component.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          element.classList.remove('pdc__content--show');
          element.classList.remove('pdc__content--visible');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "showElement",
    value: function showElement(index) {
      var _this = this;
      this.hideAllElements();
      this.contents[index].classList.add('pdc__content--show');
      setTimeout(function () {
        _this.contents[index].classList.add('pdc__content--visible');
      }, 1);
    }
  }]);
  return PDC;
}();
var Tabs = /*#__PURE__*/function () {
  function Tabs(id) {
    _classCallCheck(this, Tabs);
    this.component = document.getElementById("tabs-".concat(id));
    this.btns = _toConsumableArray(this.component.querySelectorAll('.tabs__tab button'));
    this.underline = this.component.querySelector('.tabs__underline');
    this.pdc = new PDC(id);
  }
  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.underline.style.width = "".concat(100 / this.btns.length, "%");
      this.pdc.alignСontentHeight();
      window.addEventListener('resize', function () {
        _this2.pdc.alignСontentHeight();
      });
      var _loop = function _loop(i) {
        var btn = _this2.btns[i];
        btn.addEventListener('click', function () {
          _this2.underline.style.left = "".concat(btn.getBoundingClientRect().width * i, "px");
          _this2.pdc.showElement(i);
        });
      };
      for (var i = 0; i < this.btns.length; i += 1) {
        _loop(i);
      }
    }
  }]);
  return Tabs;
}();
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
;// CONCATENATED MODULE: ./src/scripts/index.js
function scripts_toConsumableArray(arr) { return scripts_arrayWithoutHoles(arr) || scripts_iterableToArray(arr) || scripts_unsupportedIterableToArray(arr) || scripts_nonIterableSpread(); }
function scripts_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function scripts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scripts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scripts_arrayLikeToArray(o, minLen); }
function scripts_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function scripts_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return scripts_arrayLikeToArray(arr); }
function scripts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



// Открытие/закрытие навигации для мобильных устройств

burger();

/* Плавное появление элементов при прокрутке */
var checkPageVisibility = function checkPageVisibility(sections) {
  var windowHeight = window.innerHeight;
  sections.forEach(function (section) {
    var sectionY = section.getBoundingClientRect().top;
    if (sectionY < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};
document.addEventListener('DOMContentLoaded', function () {
  var sections = scripts_toConsumableArray(document.querySelectorAll('.fade-in-section'));
  checkPageVisibility(sections);
  window.addEventListener('scroll', function () {
    checkPageVisibility(sections);
  });
});

/* Подвижное изображение */
var movingImage = document.getElementById('moving-image');
setInterval(function () {
  movingImage.style.transform = "translate(".concat(0 - Math.random() * 10, "px, ").concat(0 - Math.random() * 10, "px)");
}, 100);

/* Табы */
var tab1 = new Tabs(1);
tab1.init();

/* Карусель */
var carousel = document.querySelector('.carousel');
var carouselListItems = carousel.querySelector('.carousel__list-items');
var btnNext = carousel.querySelector('.carousel__next');
var btnBack = carousel.querySelector('.carousel__back');
var scrollCords = scripts_toConsumableArray(carouselListItems.children).map(function (element) {
  return element.offsetLeft;
});
var index = 0;
carouselListItems.scrollTo(0, 0);
btnNext.addEventListener('click', function () {
  index += 1;
  if (index >= scrollCords.length) {
    index = 0;
  }
  carouselListItems.scrollTo({
    left: scrollCords[index],
    behavior: 'smooth'
  });
});
btnBack.addEventListener('click', function () {
  index -= 1;
  if (index < 0) {
    index = scrollCords.length - 1;
  }
  carouselListItems.scrollTo({
    left: scrollCords[index],
    behavior: 'smooth'
  });
});
/******/ })()
;