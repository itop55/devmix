/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/animation-typing-text/animation-typing-text.js":
/*!***********************************************************************!*\
  !*** ./src/components/animation-typing-text/animation-typing-text.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimationText = /*#__PURE__*/function () {
  function AnimationText(id, duration, list) {
    _classCallCheck(this, AnimationText);

    this.id = document.getElementById(id);
    this.list = list;
    this.duration = duration;

    if (this.id) {
      this.draw(0);
      this.drawMouse();
    }
  }

  _createClass(AnimationText, [{
    key: "drawMouse",
    value: function drawMouse() {
      var _this = this;

      var self = this;
      setInterval(function () {
        if (_this.id.classList.contains('active')) _this.id.classList.remove('active');else _this.id.classList.add('active');
      }, self.duration * 2);
    }
  }, {
    key: "draw",
    value: function draw(id) {
      var _this2 = this;

      var self = this;
      return new Promise(function (resolve) {
        if (id >= _this2.list.length) _this2.draw(0).then(function () {
          resolve(true);
        });else _this2.drawAsc(_this2.list[id], 0).then(function () {
          setTimeout(function () {
            _this2.drawDesc(_this2.list[id]).then(function () {
              setTimeout(function () {
                _this2.draw(id += 1).then(function () {
                  resolve(true);
                });
              }, self.duration * 2);
            });
          }, self.duration * 2);
        });
      });
    }
  }, {
    key: "drawDesc",
    value: function drawDesc(text) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var newText = text.slice(0, text.length - 1);

        _this3.drawText(newText).then(function () {
          if (text.length === 0) resolve(true);else _this3.drawDesc(newText).then(function () {
            resolve(true);
          });
        });
      });
    }
  }, {
    key: "drawAsc",
    value: function drawAsc(text, id) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var newText = text.slice(0, id);

        _this4.drawText(newText, true).then(function () {
          if (id === text.length) resolve(true);else _this4.drawAsc(text, id += 1).then(function () {
            resolve(true);
          });
        });
      });
    }
  }, {
    key: "drawText",
    value: function drawText(newText) {
      var _this5 = this;

      var isAsc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this;
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this5.id.innerText = newText;
          resolve(true);
        }, isAsc ? self.duration : 10);
      });
    }
  }]);

  return AnimationText;
}(); // Выполнить после загрузки страницы


document.addEventListener('DOMContentLoaded', function () {
  new AnimationText("animation-text", 150, ["section, div, aside", "text-transform, transition", "link, script, ul, ol", "footer, header, main, nav", "background-color, font-family", "cursor, h1, h2, font-wheight", "meta, head, bold, uppercase", "svg, line-height, underline", "font-size, flex, height", "media, box-shadow, article"]);
}, false);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_animation_typing_text_animation_typing_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/animation-typing-text/animation-typing-text */ "./src/components/animation-typing-text/animation-typing-text.js");
/* harmony import */ var _components_animation_typing_text_animation_typing_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_animation_typing_text_animation_typing_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my */ "./src/js/my.js");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/my.js":
/*!**********************!*\
  !*** ./src/js/my.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Yandex.Metrika counter
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () {
    (m[i].a = m[i].a || []).push(arguments);
  };

  m[i].l = 1 * new Date();
  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(67714420, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
}); // Show hide menu in mobile version

function toggleMainMenu() {
  var bodyElem = document.querySelector('body');
  var navBtn = bodyElem.querySelector('.sidebar-nav-btn');

  if (navBtn) {
    navBtn.onclick = function () {
      bodyElem.classList.toggle('nav-open');
    };
  }
} // Выполнить после загрузки страницы


document.addEventListener('DOMContentLoaded', function () {
  toggleMainMenu();
}, false);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map