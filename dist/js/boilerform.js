(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("boilerform", [], factory);
	else if(typeof exports === 'object')
		exports["boilerform"] = factory();
	else
		root["boilerform"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validation = __webpack_require__(1);

var _validation2 = _interopRequireDefault(_validation);

var _boilerform = __webpack_require__(2);

var _boilerform2 = _interopRequireDefault(_boilerform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Import Sass so that webpack picks it up


(function () {

    // Look for child and root forms 
    var boilerforms = [].concat(_toConsumableArray(document.querySelector('.boilerform form, form.boilerform')));

    if (boilerforms.length) {

        // Add a validator to each form instance
        boilerforms.map(function (item) {
            var validationInstance = new _validation2.default(item);

            validationInstance.init();
        });
    }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validation = function () {

    /**
     * Load up an instance of Validation
     * @param {HTMLFormElement} baseForm 
     */
    function Validation(baseForm) {
        _classCallCheck(this, Validation);

        this.baseForm = baseForm;

        // Load child input elements
        this.inputElems = [].concat(_toConsumableArray(baseForm.querySelectorAll('input, textarea, select')));
    }

    /**
     * Public init method
     */


    _createClass(Validation, [{
        key: 'init',
        value: function init() {
            var self = this;

            self.bind();
            self.setCustomValidationMessages();
        }

        /**
         * Bind events to input elements
         */

    }, {
        key: 'bind',
        value: function bind() {
            var self = this;

            // Add an invalid listener that 
            self.inputElems.map(function (item) {
                item.addEventListener('invalid', function (evt) {
                    self.processValidity(item);
                }, false);
            });
        }

        /**
         * Run through each item and check they have a `data-validation-message` attribute.
         * If so, set a custom validation message with that value
         */

    }, {
        key: 'setCustomValidationMessages',
        value: function setCustomValidationMessages() {
            var self = this;

            self.inputElems.map(function (item) {
                self.setCustomValidationMessage(item);
            });
        }

        /**
         * Set a custom validation message if item needs it
         * @param {HTMLElement} item 
         */

    }, {
        key: 'setCustomValidationMessage',
        value: function setCustomValidationMessage(item) {
            var self = this;

            if (item.hasAttribute('data-validation-message')) {
                item.setCustomValidity(item.getAttribute('data-validation-message'));
            }
        }

        /**
         * Toggle the visual state of an item based on the based state key
         * @param {HTMLElement} item 
         * @param {String} state 
         */

    }, {
        key: 'process',
        value: function process(item) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'invalid';

            var self = this;

            switch (state) {
                case 'invalid':
                    item.classList.add('is-error');
                    self.setCustomValidationMessage(item);
                    break;
                default:
                    item.classList.remove('is-error');
                    break;
            }
        }

        /**
         * Run some checks to determine if the passed item is valid or not
         * @param {HTMLElement} item 
         */

    }, {
        key: 'processValidity',
        value: function processValidity(item) {
            var self = this;

            // If an item is valid, run the processor and bail
            if (item.validity.valid) {
                self.process(item, 'valid');
                self.checkSiblings(item);
                return;
            }

            // Before we determine it as invalid, check to see if there's a custom error
            if (item.validity.customError) {

                // Now let's check against some states
                if (!item.validity.badInput && !item.validity.patternMismatch && !item.validity.rangeOverflow && !item.validity.rangeUnderflow && !item.validity.stepMismatch && !item.validity.tooLong && !item.validity.tooShort && !item.validity.typeMismatch && !item.validity.valueMissing) {

                    // It's valid, so process accordingly
                    item.setCustomValidity('');
                    self.process(item, 'valid');

                    self.checkSiblings(item);
                    return;
                }
            }

            // If we're here, it's invalid
            self.process(item, 'invalid');
            self.checkSiblings(item);
        }

        /**
         * Check an item's siblings validty state
         * @param {HTMLElement} item 
         */

    }, {
        key: 'checkSiblings',
        value: function checkSiblings(item) {
            var self = this;

            // Find siblings that aren't this item and that are required
            var inputElems = self.inputElems.filter(function (elem) {
                return elem != item && elem.hasAttribute('required');
            });

            if (inputElems.length) {

                // Run each item through the processor
                inputElems.map(function (item) {
                    self.processValidity(item);
                });
            }
        }
    }]);

    return Validation;
}();

exports.default = Validation;
;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=boilerform.js.map