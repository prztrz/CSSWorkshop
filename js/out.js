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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @function switchClass
 * Removes specified class from all given node element collections and adds this class to given element from this collection
 * @param {string} classString -name of class
 * @param {object} elements - collection of elements the class is removed from
 */
function switchClass(classString, currentElement, elements) {
    [].forEach.call(elements, function (element) {
        element.classList.remove(classString);
    });

    currentElement.classList.add(classString);
}

/**
* @function cloneInnerTextTo()
* Clones innerText of this to specified target
* @param {object} target - DOM object
*/
function cloneInnerTextTo(target) {
    target.innerText = this.innerText;
}

/**
* @function cloneInnerHTMLToText()
* Clones innerText of this and put it to specified target's innerHTML
* @param {object} target - DOM object
*/
function cloneInnerHTMLToText(target) {
    target.innerText = this.innerHTML;
}

/**
* @function removeClassFromMany
* removes specified class from many elements
* @param {string} classString - class
* @param {Array} elements - DOM object array
*/
function removeClassFromMany(classString) {
    for (var _len = arguments.length, elements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        elements[_key - 1] = arguments[_key];
    }

    elements.forEach(function (el) {
        el.classList.remove(classString);
    });
}

/**
* @function toggleClassOnMany
* removes specified class on many elements
* @param {string} classString - class
* @param {Array} elements - DOM object array
*/
function toggleClassOnMany(classString) {
    for (var _len2 = arguments.length, elements = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        elements[_key2 - 1] = arguments[_key2];
    }

    elements.forEach(function (el) {
        el.classList.toggle(classString);
    });
}

exports.switchClass = switchClass;
exports.cloneInnerTextTo = cloneInnerTextTo;
exports.cloneInnerHTMLToText = cloneInnerHTMLToText;
exports.removeClassFromMany = removeClassFromMany;
exports.toggleClassOnMany = toggleClassOnMany;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _media = __webpack_require__(2);

var _menu = __webpack_require__(3);

var _slider = __webpack_require__(4);

var _pricelist = __webpack_require__(6);

var _application = __webpack_require__(7);

document.addEventListener('DOMContentLoaded', function (e) {
    (0, _media.removeActiveOnLaptop)();
    (0, _media.toggleMenuTransitionEffect)();
    (0, _media.showBoxWrappersOnBigDevices)((0, _media.getInitialWidth)());
    (0, _media.toggleWrappersVisibility)();
    (0, _media.toggleHeaderAlignRight)();

    (0, _menu.runMenuApp)();
    (0, _slider.runSlider)();
    (0, _pricelist.runPricelistActiveSwitch)();
    (0, _pricelist.runPriceListSlider)();
    (0, _application.runApplication)();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleHeaderAlignRight = exports.toggleWrappersVisibility = exports.showBoxWrappersOnBigDevices = exports.getInitialWidth = exports.toggleMenuTransitionEffect = exports.removeActiveOnLaptop = undefined;

var _functions = __webpack_require__(0);

/**
 * @function removeActiveOnLaptop
 * removes transition effects and .active class from all collapsable menu elements to hide them if laptop window-width is reached
 */
function removeActiveOnLaptop() {
    var laptop = window.matchMedia('(min-width: 1280px');

    laptop.addListener(function (laptop) {

        var menu = document.getElementById("main-menu");
        var about = document.getElementById('about');
        var droppableLink = document.querySelector('.droppable-link');
        var submenu = document.getElementById('submenu');

        if (laptop.matches) {
            (0, _functions.removeClassFromMany)('active', menu, about, droppableLink, submenu);
        }
    });
}

/**
 * @function toggleMenuTransitionEffect
 * Sets the transistion effect on #main-menu element off if the laptop window-width is reached and sets it on 
 */
function toggleMenuTransitionEffect() {
    var laptop = window.matchMedia('(min-width: 1280px');

    laptop.addListener(function (laptop) {
        var menu = document.getElementById("main-menu");

        if (laptop.matches) {
            menu.style.transition = 'none';
        }
    });
}

/**
 * @function getInitialWidth
 * @returns {number} window.innerWidth initial width of window
 */
function getInitialWidth() {
    return window.innerWidth;
}

/** @function showBoxWrappersOnBigDevices
* Remove .visuallyhidden class from all .box-wrapper elements to show them if the initial window with is more than 767px
* @param {number} width The innerWidth of window
*/
function showBoxWrappersOnBigDevices(width) {
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    if (width > 767) {
        [].forEach.call(boxWrappers, function (wrapper) {
            wrapper.classList.remove('visuallyhidden');
        });
    }
}

/**
 * @function toggleWrappersVisibility
 * Remove .visuallyhidden class from .box-wrapper elements to show them when tablet window width is reached and adds .visuallyhidden class to .box-wrapper elements except the first one to hide them when tablet window width is not reached
 */
function toggleWrappersVisibility() {
    var tablet = window.matchMedia('(min-width: 768px)');
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    tablet.addListener(function (tablet) {
        if (tablet.matches) {
            [].forEach.call(boxWrappers, function (wrapper) {
                wrapper.classList.remove('visuallyhidden');
            });
        } else {
            [].forEach.call(boxWrappers, function (wrapper, i) {
                if (i !== 0) wrapper.classList.add('visuallyhidden');
            });
        }
    });
}

/**
* @function toggleHeaderAlignRight
* Adds class .align right to header of .summary_part element if the window.innerWidth does not reach tablet breakpoint (min-width: 767px) and removes it if the window.innerWidth reach the breakpoint
*/
function toggleHeaderAlignRight() {
    var width = window.innerWidth;
    var tablet = window.matchMedia('(min-width: 768px)');
    var summaryHeader = document.querySelector(".summary_part header");

    if (width > 767) {
        summaryHeader.classList.add('align_right');
    }

    tablet.addListener(function (tablet) {
        tablet.matches ? summaryHeader.classList.add('align_right') : summaryHeader.classList.remove('align_right');
    });
}

exports.removeActiveOnLaptop = removeActiveOnLaptop;
exports.toggleMenuTransitionEffect = toggleMenuTransitionEffect;
exports.getInitialWidth = getInitialWidth;
exports.showBoxWrappersOnBigDevices = showBoxWrappersOnBigDevices;
exports.toggleWrappersVisibility = toggleWrappersVisibility;
exports.toggleHeaderAlignRight = toggleHeaderAlignRight;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runMenuApp = undefined;

var _functions = __webpack_require__(0);

/**
 * @function switchMenu
 * toggles .active class on #main-menu element to show/hide it and removes .active class from submenu elements to hide them if menu does not contain .active class
 */
function switchMenu() {
    var menu = document.getElementById('main-menu');
    var about = document.getElementById('about');
    var droppableLink = document.querySelector('.droppable-link');
    var submenu = document.getElementById('submenu');

    menu.style.transition = 'width 0.2s linear';

    menu.classList.toggle('active');

    if (!menu.classList.contains('active')) {
        (0, _functions.removeClassFromMany)('active', about, droppableLink, submenu);
    }
}

/**
* @function switchSubenu
* toggles .active class on submenu elements to show/hide them
*/
function switchSubmenu(e) {
    e.preventDefault();
    var about = document.getElementById('about');
    var droppableLink = document.querySelector('.droppable-link');
    var submenu = document.getElementById('submenu');

    (0, _functions.toggleClassOnMany)('active', about, droppableLink, submenu);
}

function runMenuApp() {
    var hamburger = document.getElementById("hamburger");
    var droppableLink = document.querySelector('.droppable-link');

    hamburger.addEventListener('click', switchMenu);

    droppableLink.addEventListener('click', switchSubmenu);
}

exports.runMenuApp = runMenuApp;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runSlider = undefined;

var _classes = __webpack_require__(5);

function runSlider() {
    var slides = document.querySelectorAll('.slide');
    var leftBtn = document.getElementById('left-btn');
    var rigthBtn = document.getElementById('right-btn');

    var mainSlider = new _classes.AutoSlider(slides, 'active', true, 'right', 3000);

    mainSlider.autoToggle;

    leftBtn.addEventListener('click', mainSlider.slideLeft.bind(mainSlider));

    rigthBtn.addEventListener('click', mainSlider.slideRight.bind(mainSlider));
}

exports.runSlider = runSlider;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(collection, switchableClass, classActivate) {
        _classCallCheck(this, Slider);

        this.collection = collection;
        this.switchableClass = switchableClass;
        this.classActivate = classActivate;
    }

    _createClass(Slider, [{
        key: 'slideRight',
        value: function slideRight() {
            var _this = this;

            var currentElementIndex = 0;
            var nextElementIndex = 0;

            if (this.classActivate) {
                [].forEach.call(this.collection, function (element, i) {
                    if (element.classList.contains(_this.switchableClass)) {
                        currentElementIndex = i;
                    }
                });
            } else {
                [].forEach.call(this.collection, function (element, i) {
                    if (!element.classList.contains(_this.switchableClass)) {
                        currentElementIndex = i;
                    }
                });
            }

            if (currentElementIndex !== this.collection.length - 1) {
                nextElementIndex = currentElementIndex + 1;
            }

            if (this.classActivate) {
                this.collection[currentElementIndex].classList.remove(this.switchableClass);
                this.collection[nextElementIndex].classList.add(this.switchableClass);
            } else {
                this.collection[currentElementIndex].classList.add(this.switchableClass);
                this.collection[nextElementIndex].classList.remove(this.switchableClass);
            }
        }
    }, {
        key: 'slideLeft',
        value: function slideLeft() {
            var _this2 = this;

            var currentElementIndex = 0;
            var nextElementIndex = this.collection.length - 1;

            if (this.classActivate) {
                [].forEach.call(this.collection, function (element, i) {
                    if (element.classList.contains(_this2.switchableClass)) {
                        currentElementIndex = i;
                    }
                });
            } else {
                [].forEach.call(this.collection, function (element, i) {
                    if (!element.classList.contains(_this2.switchableClass)) {
                        currentElementIndex = i;
                    }
                });
            }

            if (currentElementIndex !== 0) {
                nextElementIndex = currentElementIndex - 1;
            }

            if (this.classActivate) {
                this.collection[currentElementIndex].classList.remove(this.switchableClass);
                this.collection[nextElementIndex].classList.add(this.switchableClass);
            } else {
                this.collection[currentElementIndex].classList.add(this.switchableClass);
                this.collection[nextElementIndex].classList.remove(this.switchableClass);
            }
        }
    }]);

    return Slider;
}();

/**
 * @class AutoSlider
 * @extends Slider
 * 
 * @method constructor
 * @param {string} direction left or right specifies the direction of slides auto-toggling
 * @param {number} interval time between slides auto-toggling in ms
 * 
 * @method autoToggle - sets interval on slide toggling
 */


var AutoSlider = function (_Slider) {
    _inherits(AutoSlider, _Slider);

    function AutoSlider(collection, switchableClass, classActivate, direction, interval) {
        _classCallCheck(this, AutoSlider);

        var _this3 = _possibleConstructorReturn(this, (AutoSlider.__proto__ || Object.getPrototypeOf(AutoSlider)).call(this, collection, switchableClass, classActivate));

        _this3.direction = direction;
        _this3.interval = interval;
        return _this3;
    }

    _createClass(AutoSlider, [{
        key: 'slideRight',
        value: function slideRight() {
            clearInterval(this.intervalId);
            _get(AutoSlider.prototype.__proto__ || Object.getPrototypeOf(AutoSlider.prototype), 'slideRight', this).call(this);
            this.autoToggle();
        }
    }, {
        key: 'slideLeft',
        value: function slideLeft() {
            clearInterval(this.intervalId);
            _get(AutoSlider.prototype.__proto__ || Object.getPrototypeOf(AutoSlider.prototype), 'slideLeft', this).call(this);
            this.autoToggle();
        }
    }, {
        key: 'autoToggle',
        value: function autoToggle() {
            var self = this;
            if (this.direction === 'left') {
                this.intervalId = setInterval(self.slideLeft.bind(self), self.interval);
            } else {
                this.intervalId = setInterval(self.slideRight.bind(self), self.interval);
            }
        }
    }]);

    return AutoSlider;
}(Slider);

exports.Slider = Slider;
exports.AutoSlider = AutoSlider;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runPriceListSlider = exports.runPricelistActiveSwitch = undefined;

var _functions = __webpack_require__(0);

var _classes = __webpack_require__(5);

function runPricelistActiveSwitch() {
    var joinBtns = document.querySelectorAll('.box-btn button');
    var boxWrappers = document.querySelectorAll('.box-wrapper');

    [].forEach.call(joinBtns, function (button) {
        button.addEventListener('click', function (e) {
            var wrapper = button.parentElement.parentElement.parentElement;

            if (!wrapper.classList.contains('active')) {
                (0, _functions.switchClass)('active', wrapper, boxWrappers);
            }
        });
    });
}

function runPriceListSlider() {
    var boxWrappers = document.querySelectorAll('.box-wrapper');
    var rightBtn = document.getElementById("pricelist-right-btn");
    var leftBtn = document.getElementById("pricelist-left-btn");

    var slider = new _classes.Slider(boxWrappers, 'visuallyhidden', false);

    rightBtn.addEventListener('click', slider.slideRight.bind(slider));
    leftBtn.addEventListener('click', slider.slideLeft.bind(slider));
}

exports.runPricelistActiveSwitch = runPricelistActiveSwitch;
exports.runPriceListSlider = runPriceListSlider;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runApplication = undefined;

var _functions = __webpack_require__(0);

var globalPrice = {
    titlePrice: 0,
    colorPrice: 0,
    patternPrice: 0,
    transportPrice: 0,
    calculate: function calculate() {
        return this.titlePrice + this.colorPrice + this.patternPrice + this.transportPrice;
    }

    /**
    * @function updateSummaryPanelFields
    * Changes the innerText fields of corresponding element in .summary_panel class depending on selected item
    * @param {object} element - DOM Object
    * @param {string} category - value of attribute data-category of it
    */
};function updateSummaryPanelFields(element, category) {

    var summaryTitle = document.getElementById("title-item");
    var titlePrice = document.getElementById("title-price");

    var colorSpan = document.getElementById("color-span");
    var colorPrice = document.getElementById("color-price");

    var patternSpan = document.getElementById("pattern-span");
    var patternPrice = document.getElementById("pattern-price");

    var transportSpan = document.getElementById("transport-span");
    var transportPrice = document.getElementById("transport-price");

    var sum = document.querySelector(".sum > strong");

    switch (category) {
        case 'chair-list':
            summaryTitle.innerText = element.innerHTML;
            titlePrice.innerText = element.dataset.price;
            globalPrice.titlePrice = parseInt(element.dataset.price);
            break;

        case 'color-list':
            colorSpan.innerText = element.innerHTML;
            colorPrice.innerText = element.dataset.price;
            globalPrice.colorPrice = parseInt(element.dataset.price);
            break;

        case 'pattern-list':
            patternSpan.innerText = element.innerHTML;
            patternPrice.innerText = element.dataset.price;
            globalPrice.patternPrice = parseInt(element.dataset.price);
            break;

        case 'transport':
            transportSpan.innerText = 'Transport';
            transportPrice.innerText = element.dataset.price;
            globalPrice.transportPrice = parseInt(element.dataset.price);
    }

    sum.innerText = globalPrice.calculate();
}

/**
* @function resetSummaryPanelFields
* Clears fields of element in .summary_panel class if list item was unchecked
* @param {string} category - value of attribute data-category of it
*/
function resetSummaryPanelFields(category) {

    var summaryTitle = document.getElementById("title-item");
    var titlePrice = document.getElementById("title-price");

    var colorSpan = document.getElementById("color-span");
    var colorPrice = document.getElementById("color-price");

    var patternSpan = document.getElementById("pattern-span");
    var patternPrice = document.getElementById("pattern-price");

    var transportSpan = document.getElementById("transport-span");
    var transportPrice = document.getElementById("transport-price");

    var sum = document.querySelector(".sum > strong");

    switch (category) {
        case 'chair-list':
            summaryTitle.innerText = '';
            titlePrice.innerText = '';
            globalPrice.titlePrice = 0;
            break;

        case 'color-list':
            colorSpan.innerText = '';
            colorPrice.innerText = '';
            globalPrice.colorPrice = 0;
            break;

        case 'pattern-list':
            patternSpan.innerText = '';
            patternPrice.innerText = '';
            globalPrice.patternPrice = 0;
            break;

        case 'transport':
            transportSpan.innerText = '';
            transportPrice.innerText = '';
            globalPrice.transportPrice = 0;
    }

    sum.innerText = globalPrice.calculate();
}

/**
* @function runApplication
* runs application of section with .application class
* Listens 'click' event on elements with .list_arrow class
* Listens 'click event on <li> elements inside element with .form class
*/
function runApplication() {
    var listArrows = document.querySelectorAll(".list_arrow");
    var listItems = document.querySelectorAll(".form li");
    var transportCheckBox = document.getElementById("transport");

    [].forEach.call(listArrows, function (listArrow) {
        listArrow.addEventListener("click", function () {
            var ul = this.parentElement.querySelector('.list_panel');
            ul.classList.toggle('visible');
        });
    });

    Array.prototype.forEach.call(listItems, function (listItem) {
        listItem.addEventListener("click", function () {
            var listLabel = this.parentElement.parentElement.querySelector('.list_label');
            if (!this.classList.contains('selected')) {
                (0, _functions.switchClass)('selected', this, listItems);
                listLabel.innerText = this.innerHTML;
                listLabel.style.color = '#000';
                updateSummaryPanelFields(this, this.parentElement.dataset.category);
            }

            this.parentElement.classList.toggle('visible');
        });
    });

    transportCheckBox.addEventListener("click", function () {
        if (this.checked) {
            updateSummaryPanelFields(this, this.dataset.category);
        } else {
            resetSummaryPanelFields(this.dataset.category);
        }
    });
}

exports.runApplication = runApplication;

/***/ })
/******/ ]);