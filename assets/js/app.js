(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _utilities = require("./utilities");
var Components = _interopRequireWildcard(require("../../components"));
var _templates = require("../../templates");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// --- utilities

// --- components

// --- templates

// --- App
var App = function () {
  // --- run transition
  var runTransition = function runTransition() {
    $('body').removeClass('hold-transition');
  };

  // --- show site content
  var showSiteContent = function showSiteContent() {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    _utilities.Scrolllable.enable();
  };

  // --- ready
  var ready = function ready() {
    (function ($) {
      // --- disable scroll
      _utilities.Scrolllable.disable();

      // --- global
      runTransition();
      showSiteContent();
      _utilities.BrowserCheck.init();

      // --- components
      Object.values(Components).forEach(function (component) {
        if (typeof component.init === 'function') {
          component.init();
        }
      });

      // --- templates
      _templates.Default.init();
    })(jQuery);
  };

  // --- load
  var load = function load() {
    (function ($) {
      $(window).on('load', function () {});
    })(jQuery);
  };

  // --- init
  var init = function init() {
    load();
    ready();
  };

  // --- return
  return {
    init: init
  };
}();

// ---  run main js
App.init();

},{"../../components":21,"../../templates":23,"./utilities":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: BrowserCheck
@description: BrowserCheck
--------------------------------------------------------------------------------- */

// --- BrowserCheck
var BrowserCheck = function () {
  // --- handleCheck
  var handleCheck = function handleCheck() {
    var _browser = 'dekstop-browser';
    var HTMLElement = document.getElementsByTagName('html')[0];
    if (navigator.userAgent.match(/Android/i)) {
      _browser = 'android-browser';
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      _browser = 'blackberry-browser';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      _browser = 'ios-browser';
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      _browser = 'windows-phone-browser';
    }
    $('html').addClass(_browser);
  };

  // --- init
  var init = function init() {
    handleCheck();
  };

  // --- return
  return {
    init: init
  };
}();
var _default = exports["default"] = BrowserCheck;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Scrolllable
@description: Scrolllable
--------------------------------------------------------------------------------- */

// --- Scrolllable
var Scrolllable = function () {
  // --- handleEnable
  var handleEnable = function handleEnable() {
    $('body').removeClass('rm-scroll');
  };

  // --- handleDisable
  var handleDisable = function handleDisable() {
    $('body').addClass('rm-scroll');
  };

  // --- return
  return {
    enable: handleEnable,
    disable: handleDisable
  };
}();
var _default = exports["default"] = Scrolllable;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Session
@description: Session
--------------------------------------------------------------------------------- */

// --- Session
var Session = function () {
  var _timeoutSession;

  // --- handleSet
  var handleSet = function handleSet(key, value) {
    return localStorage.setItem(key, value);
  };

  // --- handleGet
  var handleGet = function handleGet(key, value) {
    return localStorage.getItem(key, value);
  };

  // --- handleRemove
  var handleRemove = function handleRemove(key) {
    return localStorage.removeItem(key);
  };

  // --- handleClear
  var handleClear = function handleClear(key) {
    return localStorage.clear();
  };

  // --- handleTimeout
  var handleTimeout = function handleTimeout(callbackFunction) {
    var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    _timeoutSession = setTimeout(function () {
      callbackFunction();
    }, timer * 1000);
    document.addEventListener('mousemove', function (e) {
      clearTimeout(_timeoutSession);
      _timeoutSession = setTimeout(function () {
        callbackFunction();
      }, timer * 1000);
    }, true);
  };

  // --- return
  return {
    set: handleSet,
    get: handleGet,
    remove: handleRemove,
    clear: handleClear,
    timeout: handleTimeout
  };
}();
var _default = exports["default"] = Session;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _variables = require("../variables");
/* ------------------------------------------------------------------------------
@name: Validation
@description: Validation
--------------------------------------------------------------------------------- */

// --- variables

var Validation = function () {
  // - handleInput
  var handleInput = function handleInput(eventsEl, selectorEl) {
    $.each(eventsEl, function (ie, ve) {
      $.each(selectorEl, function (i, v) {
        $("#" + v.id).on(ve, function (e) {
          var _this = $(e.currentTarget),
            _val = _this.val(),
            _target = _this.attr("data-target"),
            _alertEl = $("#" + _target);
          var _errorMessage;

          // Condition if validation does not error
          _alertEl.removeClass("error");
          _this.parent().removeClass("error");

          // Minimum Validation
          if (v.validation.minimum) {
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertEl.attr("data-invalid");
            }
          }

          // Maximum Validation
          if (v.validation.maximum) {
            if (_val.length < v.validation.maximumChar) {
              _errorMessage = _alertEl.attr("data-invalid");
            }
          }

          // Minimum Validation
          if (v.validation.name) {
            if (!_variables.PERSON_NAME.test(_val)) {
              _errorMessage = _alertEl.attr("data-invalid");
            }
          }

          // Email validation
          if (v.validation.email) {
            if (!_variables.EMAIL.test(_val)) {
              _errorMessage = _alertEl.attr("data-invalid");
            }
          }

          // Numeric validation
          if (v.validation.phone) {
            if (!_variables.PHONE_NUMBER.test(_val)) {
              _errorMessage = _alertEl.attr("data-invalid-phone");
            }
          }

          // Required validation
          if (_variables.WHITESPACE.test(_val)) {
            _errorMessage = _alertEl.attr("data-req");
          }

          // Error Message
          if (_errorMessage !== undefined) {
            _alertEl.text(_errorMessage);
            _alertEl.addClass("error");
            _this.parent().addClass("error");
          }
        });
      });
    });

    // Return Handle keypress
    handleKeypress();
  };

  // handleKeypress
  var handleKeypress = function handleKeypress() {
    $(".number-only").on("keypress", function (e) {
      var _this = $(e.currentTarget),
        _val = _this.val(),
        _target = _this.attr("data-target"),
        _alertEl = $("#" + _target);
      var _errorMessage;
      if (!_variables.NUMBERIC.test(e.key)) {
        _errorMessage = _alertEl.attr("data-invalid");
        _alertEl.text(_errorMessage);
        _alertEl.addClass("error");
        _this.parent().addClass("error");
        // remove error after few second
        setTimeout(function () {
          _alertEl.removeClass("error");
          _this.parent().removeClass("error");
        }, 2000);
        e.preventDefault();
      }
    });
  };
  return {
    config: handleInput
  };
}();
var _default = exports["default"] = Validation;

},{"../variables":11}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Window Resize
@description: Window Resize
--------------------------------------------------------------------------------- */

// --- WindowResize
var WindowResize = function () {
  var $rtime;
  var $timeout = false;
  var $delta = 200;
  var $lastWindowWidth = 0;
  var $callbackFunction = [];

  // --- handleResize
  var handleResize = function handleResize(callback) {
    $callbackFunction.push(callback);
    $(window).resize(function () {
      $rtime = new Date();
      if ($timeout === false) {
        if ($lastWindowWidth !== $(window).width()) {
          $timeout = true;
          $("body").addClass("hold-transition");
          setTimeout(_handleResizeEnd(), $delta);
        }
      }
    });
  };

  // --- handleResizeEnd
  var _handleResizeEnd = function handleResizeEnd() {
    if (new Date() - $rtime < $delta) {
      setTimeout(_handleResizeEnd, $delta);
    } else {
      $timeout = false;
      // Run Function on Resize end
      $("body").removeClass("hold-transition");
      $lastWindowWidth = $(window).width();
      $.each($callbackFunction, function (index, callback) {
        if (typeof callback === "function") {
          callback();
        }
      });
    }
  };

  // --- return
  return {
    resize: handleResize
  };
}();
var _default = exports["default"] = WindowResize;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Window Scroll
@description: Window Scroll
--------------------------------------------------------------------------------- */

// --- WindowScroll
var WindowScroll = function () {
  var $callbackFunction = [];

  // --- handleScrollTop
  var handleScrollTop = function handleScrollTop() {
    return $(window).scrollTop();
  };

  // --- handleScroll
  var handleScroll = function handleScroll(callback) {
    var $didScroll;
    $callbackFunction.push(callback);
    $(window).scroll(function () {
      $didScroll = true;
      setInterval(function () {
        if ($didScroll) {
          $.each($callbackFunction, function (index, callback) {
            if (typeof callback === "function") {
              callback();
            }
          });
          $didScroll = false;
        }
      }, 200);
    });
  };

  // --- run
  var run = function run(callback) {
    handleScroll(callback);
  };

  // --- return
  return {
    run: run,
    top: handleScrollTop
  };
}();
var _default = exports["default"] = WindowScroll;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BrowserCheck", {
  enumerable: true,
  get: function get() {
    return _BrowserCheck["default"];
  }
});
Object.defineProperty(exports, "Scrolllable", {
  enumerable: true,
  get: function get() {
    return _Scrolllable["default"];
  }
});
Object.defineProperty(exports, "Session", {
  enumerable: true,
  get: function get() {
    return _Session["default"];
  }
});
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});
Object.defineProperty(exports, "WindowScroll", {
  enumerable: true,
  get: function get() {
    return _WindowScroll["default"];
  }
});
Object.defineProperty(exports, "isOS", {
  enumerable: true,
  get: function get() {
    return _isOS["default"];
  }
});
var _isOS = _interopRequireDefault(require("./isOS"));
var _BrowserCheck = _interopRequireDefault(require("./BrowserCheck"));
var _Scrolllable = _interopRequireDefault(require("./Scrolllable"));
var _Validation = _interopRequireDefault(require("./Validation"));
var _Session = _interopRequireDefault(require("./Session"));
var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));
var _WindowResize = _interopRequireDefault(require("./WindowResize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./BrowserCheck":2,"./Scrolllable":3,"./Session":4,"./Validation":5,"./WindowResize":6,"./WindowScroll":7,"./isOS":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: isOS
@description: isOS
--------------------------------------------------------------------------------- */

var isOS = {
  android: function android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function blackberry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  mac: function mac() {
    return navigator.platform.indexOf('Mac') > -1;
  },
  opera: function opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  win: function win() {
    return navigator.platform.indexOf('Win') > -1;
  },
  winMobile: function winMobile() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isOS.android() || isOS.blackberry() || isOS.iOS() || isOS.mac() || isOS.opera() || isOS.win() || isOS.winMobile();
  }
};
var _default = exports["default"] = isOS;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITESPACE = exports.PHONE_NUMBER = exports.PERSON_NAME = exports.NUMBERIC = exports.FULL_NAME = exports.EMAIL = void 0;
/* ------------------------------------------------------------------------------
@name: Regex
@description: Regex
--------------------------------------------------------------------------------- */

var WHITESPACE = exports.WHITESPACE = /^ *$/;
var EMAIL = exports.EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var NUMBERIC = exports.NUMBERIC = /[0-9]+$/i;
var PHONE_NUMBER = exports.PHONE_NUMBER = /^(0|\+62)+([0-9]){4,16}/i;
var FULL_NAME = exports.FULL_NAME = /^(?:[\u00c0-\u01ffa-zA-Z-\s\.']){3,}(?:[\u00c0-\u01ffa-zA-Z-\s\.']{3,})+$/i;
var PERSON_NAME = exports.PERSON_NAME = /^[a-zA-Z][a-zA-Z\-' ]*[a-zA-Z ]$/i;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Regex = require("./Regex");
Object.keys(_Regex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Regex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Regex[key];
    }
  });
});

},{"./Regex":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: About Management
@description: About Management
--------------------------------------------------------------------------------- */

var AboutManagement = function () {
  var $selector = $('.js-about-management');
  var $itemLength = $('.js-about-management .about-card').length;

  // - handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    if ($selector.hasClass('owl-carousel')) {
      // destroy carousel
      $selector.owlCarousel('destroy');
    }

    // init carousel
    if ($itemLength > 1) {
      // --- init carousel
      $selector.addClass('owl-carousel').owlCarousel({
        autoWidth: true,
        items: 4,
        loop: false,
        rewind: false,
        touchDrag: true,
        mouseDrag: true,
        pullDrag: true,
        nav: true,
        navText: ['<i class="fi fi-caret-left"></i>', '<i class="fi fi-caret-right"></i>'],
        dots: false,
        autoplay: false,
        smartSpeed: 1200,
        margin: 24
      });
    }
  };

  // - init
  var init = function init() {
    if (!$selector.length) return;
    handleRunCarousel();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = AboutManagement;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Scrolllable = _interopRequireDefault(require("../../../_core/scripts/utilities/Scrolllable"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* ------------------------------------------------------------------------------
@name: About Popup
@description: About Popup
--------------------------------------------------------------------------------- */

var AboutPopup = function () {
  // - handleShowPopup
  var handleShowPopup = function handleShowPopup() {
    $('.js-popup-management').on('click', function (e) {
      var $this = $(e.currentTarget);
      var $name = $this.attr('data-popup-name');
      var $position = $this.attr('data-popup-position');
      var $photo = $this.attr('data-popup-photo');
      var $content = $this.attr('data-popup-content');
      if ($('body').hasClass('show-popup-management')) {
        $('body').removeClass('show-popup-management');
        _Scrolllable["default"].enable();
      } else {
        $('body').addClass('show-popup-management');
        _Scrolllable["default"].disable();
      }
      $('.about-popup__name').text($name);
      $('.about-popup__position').text($position);
      $('.about-popup__img__el').attr({
        src: $photo,
        alt: $name
      });
      $('.about-popup__content').html($content);
    });
  };

  // - handleHidePopup
  var handleHidePopup = function handleHidePopup() {
    $('.js-hide-popup-management').on('click', function (e) {
      if ($('body').hasClass('show-popup-management')) {
        $('body').removeClass('show-popup-management');
        _Scrolllable["default"].enable();
      }
    });

    // - esc
    $(document).on('keyup', function (e) {
      if (e.which === 27) {
        if ($('body').hasClass('show-popup-management')) {
          $('body').removeClass('show-popup-management');
          _Scrolllable["default"].enable();
        }
      }
    });
  };

  // - init
  var init = function init() {
    if (!$('.js-popup-management').length) return;
    handleShowPopup();
    handleHidePopup();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = AboutPopup;

},{"../../../_core/scripts/utilities/Scrolllable":3}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WindowResize = _interopRequireDefault(require("../../_core/scripts/utilities/WindowResize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

var Footer = function () {
  // - handleSet
  var handleSet = function handleSet() {
    if ($(window).width() >= 992) {
      var $footerHeight = $('.footer').outerHeight();
      $('.js-main-site').css('padding-bottom', $footerHeight);
    } else {
      $('.js-main-site').removeAttr('style');
    }
  };

  // - handleFooterAccordion
  var handleFooterAccordion = function handleFooterAccordion() {
    $('.js-footer-acc .collapsed').on('click', function (e) {
      var $this = $(e.currentTarget);
      var $parents = $this.parents('.footer__nav__row');
      if ($(window).width() <= 992) {
        if ($parents.hasClass('expanded')) {
          $parents.find('.footer__nav__list').delay(250).slideUp(300);
          $parents.removeClass('expanded');
        } else {
          $parents.siblings('.footer__nav__row').removeClass('expanded').find('.footer__nav__list').delay(200).slideUp(300);
          $parents.find('.footer__nav__list').slideDown(300);
          $parents.addClass('expanded');
        }
      }
    });
  };

  // - handleDestroyAccordion
  var handleDestroyAccordion = function handleDestroyAccordion() {
    if ($(window).width() > 992) {
      $('.js-footer-acc .footer__nav__row').removeClass('expanded').find('.footer__nav__list').removeAttr('style');
    }
  };

  // - init
  var init = function init() {
    handleSet();
    handleFooterAccordion();
    _WindowResize["default"].resize(handleSet);
    _WindowResize["default"].resize(handleDestroyAccordion);
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = Footer;

},{"../../_core/scripts/utilities/WindowResize":6}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Gallery
@description: Gallery with Progress Indicator and Current Slide Number
--------------------------------------------------------------------------------- */

var Gallery = function () {
  var $selector = $('.js-gallery');
  var $items = $('.js-gallery .gallery__item');
  var $itemLength = $items.length;

  // - addProgressMarkup
  var addProgressMarkup = function addProgressMarkup() {
    if ($('.js-gallery-progress').length === 0) {
      $selector.after("\n        <div class=\"gallery__progress\">\n          <div class=\"container\">\n            <div class=\"gallery__progress__inner\">\n              <span class=\"gallery__progress__current js-gallery-current\">1</span>\n              <div class=\"gallery__progress__wrap\">\n                <div class=\"gallery__progress__bar js-gallery-progress\"></div>\n              </div>\n              <span class=\"gallery__progress__total js-gallery-total\">".concat($itemLength, "</span>\n            </div>\n          </div>\n        </div>\n      "));
    }
  };

  // - updateProgress
  var updateProgress = function updateProgress(currentIndex) {
    $('.js-gallery-current').text(currentIndex + 1);
    var progressPercent = $itemLength > 1 ? currentIndex / ($itemLength - 1) * 100 : 100;
    $('.js-gallery-progress').css('width', progressPercent + '%');
  };

  // - handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    if ($selector.hasClass('owl-carousel')) {
      // destroy carousel
      $selector.owlCarousel('destroy');
    }

    // init carousel
    if ($itemLength > 1) {
      // --- init carousel
      $selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoWidth: true,
        center: true,
        loop: true,
        rewind: false,
        touchDrag: true,
        nav: false,
        mouseDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        margin: 16,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        onInitialized: function onInitialized(e) {
          addProgressMarkup();
          updateProgress(0);
        },
        onChanged: function onChanged(event) {
          var idx = event.item.index - event.relatedTarget._clones.length / 2;
          if (event.item.count > 1) {
            if (idx < 0) idx = event.item.count + idx;
            if (idx >= event.item.count) idx = idx - event.item.count;
          } else {
            idx = 0;
          }
          updateProgress(idx);
        }
      });
    }
  };

  // - init
  var init = function init() {
    if (!$selector.length) return;
    handleRunCarousel();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = Gallery;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WindowScroll = _interopRequireDefault(require("../../_core/scripts/utilities/WindowScroll"));
var _Scrolllable = _interopRequireDefault(require("../../_core/scripts/utilities/Scrolllable"));
var _WindowResize = _interopRequireDefault(require("../../_core/scripts/utilities/WindowResize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

var Header = function () {
  var $headerHeight = $('.header').length ? $('.header').height() : 0;

  // - handleToggleMenu
  var handleToggleMenu = function handleToggleMenu() {
    // - toggle menu
    $('.js-toggle-menu').on('click', function (e) {
      if ($('body').hasClass('show--nav')) {
        $('body').removeClass('show--nav');
        _Scrolllable["default"].enable();
        handleDestroySubMenu();
      } else {
        $('body').addClass('show--nav');
        _Scrolllable["default"].disable();
      }
      e.stopPropagation();
    });

    // - esc
    $(document).on('keyup', function (e) {
      if (e.which === 27) {
        if ($('body').hasClass('show--nav')) {
          $('body').removeClass('show--nav');
          _Scrolllable["default"].enable();
          handleDestroySubMenu();
        }
      }
    });
  };

  // - handleDestroyToggleMenu
  var handleDestroyToggleMenu = function handleDestroyToggleMenu() {
    if ($(window).width() > 1200) {
      if ($('body').hasClass('show--nav')) {
        $('body').removeClass('show--nav');
        _Scrolllable["default"].enable();
      }
    }
  };

  // - handleHoverSubMenu
  var handleHoverSubMenu = function handleHoverSubMenu() {
    $('.header .header__nav__item--has-sub .header__nav__link').on('click', function (e) {
      e.preventDefault();
    });
    $('.header .header__nav__item--has-sub').on('mouseenter', function (e) {
      if ($(window).width() > 1200) {
        var $this = $(e.currentTarget);
        $this.addClass('expanded');
      }
    });
    $('.header .header__nav__item--has-sub').on('mouseleave', function (e) {
      if ($(window).width() > 1200) {
        var $this = $(e.currentTarget);
        $this.removeClass('expanded');
      }
    });
    $('.header .header__nav__item--has-sub').on('click', function (e) {
      if ($(window).width() < 1200) {
        var $this = $(e.currentTarget);
        $this.addClass('expanded');
      }
    });
    $('.header .header__nav__item--has-sub').on('click', function (e) {
      if ($(window).width() < 1200) {
        var $this = $(e.currentTarget);
        if ($this.hasClass('expanded header__nav__item--active')) {
          $this.removeClass('expanded header__nav__item--active');
          $this.find('.header__subnav').delay(250).slideUp(300);
        } else {
          $('.header__nav__item--has-sub').find('.header__subnav').slideUp(300);
          $('.header__nav__item--has-sub').removeClass('expanded header__nav__item--active');
          $this.find('.header__subnav').slideDown(300);
          $this.addClass('expanded header__nav__item--active');
        }
      }
    });
  };

  // - handleDestroySubMenu
  var handleDestroySubMenu = function handleDestroySubMenu() {
    if ($('.header .header__nav__item--has-sub').hasClass('expanded header__nav__item--active')) {
      $('.header__nav__item--has-sub').removeClass('expanded header__nav__item--active').find('.header__subnav').removeAttr('style');
      $('.header .header__nav__item--has-sub').removeClass('expanded header__nav__item--active');
    }
  };

  // - handleScroll
  var handleScroll = function handleScroll() {
    // --- Scrolled > $headerHeight
    if (_WindowScroll["default"].top() > $headerHeight / 4) {
      if (!$('body').hasClass('window--scrolled')) {
        $('body').addClass('window--scrolled');
      }
    } else {
      // --- Scrolled < $headerHeight
      $('body').removeClass('window--scrolled');
    }
  };

  // - init
  var init = function init() {
    if (!$('.header').length) return;
    handleHoverSubMenu();
    handleToggleMenu();
    handleScroll();
    _WindowScroll["default"].run(handleScroll);
    _WindowResize["default"].resize(handleDestroyToggleMenu);
    _WindowResize["default"].resize(handleDestroySubMenu);
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = Header;

},{"../../_core/scripts/utilities/Scrolllable":3,"../../_core/scripts/utilities/WindowResize":6,"../../_core/scripts/utilities/WindowScroll":7}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WindowScroll = _interopRequireDefault(require("../../_core/scripts/utilities/WindowScroll"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* ------------------------------------------------------------------------------
@name: HeroBanner
@description: HeroBanner
--------------------------------------------------------------------------------- */

var HeroBanner = function () {
  var $selector = $('.js-hero-banner');

  // - handleAnimateBanner
  var handleAnimateBanner = function handleAnimateBanner() {
    $selector.addClass('hero-banner--single');
  };
  var handleScrollDown = function handleScrollDown() {
    $('.js-scroll-down').on('click', function () {
      var duration = window.innerWidth <= 991.98 ? 600 : 750;
      $('html, body').animate({
        scrollTop: $('.short-service').offset().top
      }, duration);
    });
  };

  // - handleScroll
  var handleScroll = function handleScroll() {
    // --- Scrolled > $headerHeight
    if ($('.hero-banner').length) {
      var divisor = window.innerWidth <= 991.98 ? 3 : 2;
      if (_WindowScroll["default"].top() > $('.hero-banner').outerHeight() / divisor) {
        $('body').addClass('hide-scroll-indicator');
      } else {
        $('body').removeClass('hide-scroll-indicator');
      }
    }
  };

  // - init
  var init = function init() {
    if (!$selector.length) return;
    setTimeout(function () {
      handleAnimateBanner();
    }, 200);
    handleScrollDown();
    _WindowScroll["default"].run(handleScroll);
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = HeroBanner;

},{"../../_core/scripts/utilities/WindowScroll":7}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: ShortReport
@description: ShortReport
--------------------------------------------------------------------------------- */

var ShortReport = function () {
  // - handleClickAccordion
  var handleClickAccordion = function handleClickAccordion() {
    $('.js-short-report-acc .short-report__acc__title').on('click', function (e) {
      var $this = $(e.currentTarget);
      var $parents = $this.parents('.short-report__acc__item');
      if ($(window).width() > 1200) {
        $parents.siblings('.short-report__acc__item').removeClass('expanded').find('.short-report__acc__body').fadeOut(300);
        $parents.find('.short-report__acc__body').fadeIn(300);
      } else {
        $parents.siblings('.short-report__acc__item').removeClass('expanded').find('.short-report__acc__body').slideUp(300);
        $parents.find('.short-report__acc__body').slideDown(300);
      }
      $parents.addClass('expanded');
    });
  };

  // - expandFirstItem
  var expandFirstItem = function expandFirstItem() {
    var $firstItem = $('.js-short-report-acc .short-report__acc__item').first();
    $firstItem.addClass('expanded');
    $firstItem.find('.short-report__acc__body').show();
  };

  // - init
  var init = function init() {
    if (!$('.js-short-report-acc').length) return;
    expandFirstItem();
    handleClickAccordion();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = ShortReport;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ShortService = function () {
  // - handleClickAccordion
  var handleClickAccordion = function handleClickAccordion() {
    $('.js-short-service-acc .short-service__acc__title').on('click', function (e) {
      var $this = $(e.currentTarget);
      var $image = $this.attr('data-image');
      var $title = $this.attr('data-title');
      var $parents = $this.parents('.short-service__acc__item');
      var $imgEl = $('.js-short-service-acc .short-service__img__el');
      if ($parents.hasClass('expanded')) {
        $parents.find('.short-service__acc__body').delay(250).slideUp(300);
        $parents.removeClass('expanded');
      } else {
        $parents.siblings('.short-service__acc__item').removeClass('expanded').find('.short-service__acc__body').slideUp(300);
        $parents.find('.short-service__acc__body').slideDown(300);
        $parents.addClass('expanded');
      }
      $imgEl.removeClass('is-visible');
      $imgEl.one('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $imgEl.attr({
          src: $image,
          alt: $title
        });
        $imgEl.off('load').on('load', function () {
          setTimeout(function () {
            $imgEl.addClass('is-visible');
          }, 10);
        }).each(function () {
          if (this.complete) $(this).trigger('load');
        });
      });
    });
  };

  // - expandFirstItem
  var expandFirstItem = function expandFirstItem() {
    var $firstItem = $('.js-short-service-acc .short-service__acc__item').first();
    var $image = $firstItem.find('.short-service__acc__title').attr('data-image');
    var $title = $firstItem.find('.short-service__acc__title').attr('data-title');
    var $imgEl = $('.js-short-service-acc .short-service__img__el');
    $firstItem.addClass('expanded');
    $firstItem.find('.short-service__acc__body').show();
    $imgEl.attr({
      src: $image,
      alt: $title
    }).addClass('is-visible');
  };

  // - init
  var init = function init() {
    if (!$('.js-short-service-acc').length) return;
    expandFirstItem();
    handleClickAccordion();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = ShortService;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _WindowScroll = _interopRequireDefault(require("../../../_core/scripts/utilities/WindowScroll"));
var _WindowResize = _interopRequireDefault(require("../../../_core/scripts/utilities/WindowResize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* ------------------------------------------------------------------------------
@name: ContentTransition
@description: ContentTransition
--------------------------------------------------------------------------------- */

var ContentTransition = function () {
  var $scaleHeight = $(window).width() < 992 ? 1.05 : 0.95;

  // - handlePositionCheck
  var handlePositionCheck = function handlePositionCheck() {
    $('.content-transition').each(function (idx, el) {
      var $elementTop = $(el).offset().top;
      var $viewportTop = _WindowScroll["default"].top();
      var $viewportBottom = $viewportTop + $scaleHeight * $(window).height();
      if ($elementTop <= $viewportBottom) {
        $(el).addClass('visible');
      } else {
        $(el).removeClass('visible');
      }
    });
  };

  // - handleScrollContentTransition
  var handleScrollContentTransition = function handleScrollContentTransition() {
    var contentList = [
    // -- home page
    '.hero-banner__inner'];
    $.each(contentList, function (idx, el) {
      $(el).addClass('content-transition');
    });
    _WindowScroll["default"].run(handlePositionCheck);
  };

  // - handlePageTransition
  var handleLeavePage = function handleLeavePage() {
    $('a').on('click', function (e) {
      var $this = $(e.currentTarget);
      var $href = $this.attr('href');
      var $target = $this.attr('target');
      if (!$this.parent('.header__nav__item').hasClass('header__nav__item--has-sub')) {
        if ($href && !$target) {
          $('body').addClass('page--leave');
          if ($('.header .header__nav__item--has-sub').hasClass('expanded')) {
            $('.header .header__nav__item--has-sub').removeClass('expanded');
          }
          var locationHrefTO = setTimeout(function () {
            window.location.href = $href;
            clearTimeout(locationHrefTO);
          }, 500);
          e.preventDefault();
        }
      }
    });
  };

  // - handleShowBackToTop
  var handleShowBackToTop = function handleShowBackToTop() {
    if (!$('.js-main-site').height() > $(window).height() * 2) return;
    var $viewportTop = _WindowScroll["default"].top();
    var $elementStart = $(window).height() * 1.5;
    var $elementChangeColor = $('.footer').offset().top;
    var $viewportBottom = $viewportTop + $(window).height();
    if ($elementStart <= $viewportBottom) {
      $('body').addClass('show--btt');
    } else {
      $('body').removeClass('show--btt');
    }
    if ($elementChangeColor <= $viewportBottom) {
      $('body').addClass('change-color--btt');
    } else {
      $('body').removeClass('change-color--btt');
    }
  };

  // - handleBackToTop
  var handleBackToTop = function handleBackToTop() {
    $('.js-back-to-top').on('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  // - init
  var init = function init() {
    if (!$('.main-site').length) return;
    handleScrollContentTransition();
    handleLeavePage();
    handleBackToTop();
    var HPCTO = setTimeout(function () {
      handlePositionCheck();
      clearTimeout(HPCTO);
    }, 50);
    _WindowResize["default"].resize(handlePositionCheck);
    _WindowScroll["default"].run(handleShowBackToTop);
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = ContentTransition;

},{"../../../_core/scripts/utilities/WindowResize":6,"../../../_core/scripts/utilities/WindowScroll":7}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AboutManagement", {
  enumerable: true,
  get: function get() {
    return _AboutManagement["default"];
  }
});
Object.defineProperty(exports, "AboutPopup", {
  enumerable: true,
  get: function get() {
    return _AboutPopup["default"];
  }
});
Object.defineProperty(exports, "ContentTransition", {
  enumerable: true,
  get: function get() {
    return _ContentTransition["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Gallery", {
  enumerable: true,
  get: function get() {
    return _Gallery["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeroBanner", {
  enumerable: true,
  get: function get() {
    return _HeroBanner["default"];
  }
});
Object.defineProperty(exports, "ShortReport", {
  enumerable: true,
  get: function get() {
    return _ShortReport["default"];
  }
});
Object.defineProperty(exports, "ShortService", {
  enumerable: true,
  get: function get() {
    return _ShortService["default"];
  }
});
var _Header = _interopRequireDefault(require("./Header"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _ContentTransition = _interopRequireDefault(require("./_Elements/ContentTransition"));
var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));
var _ShortService = _interopRequireDefault(require("./ShortService"));
var _ShortReport = _interopRequireDefault(require("./ShortReport"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
var _AboutManagement = _interopRequireDefault(require("./About/AboutManagement"));
var _AboutPopup = _interopRequireDefault(require("./About/AboutPopup"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./About/AboutManagement":12,"./About/AboutPopup":13,"./Footer":14,"./Gallery":15,"./Header":16,"./HeroBanner":17,"./ShortReport":18,"./ShortService":19,"./_Elements/ContentTransition":20}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: Default
@description: Default
--------------------------------------------------------------------------------- */

var Default = function () {
  // - handleSayHello
  var handleSayHello = function handleSayHello() {
    console.log("hello world example template");
  };

  // - init
  var init = function init() {
    handleSayHello();
  };
  return {
    init: init
  };
}();
var _default = exports["default"] = Default;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default["default"];
  }
});
var _Default = _interopRequireDefault(require("./Default"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./Default":22}]},{},[1])

//# sourceMappingURL=maps/app.js.map
