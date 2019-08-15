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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".kit-form-field[data-index='0']\").dateRangePicker({\n    format: \"DD.MM.YYYY\",\n    separator: \" по \",\n    singleMonth: true,\n    language: \"ru\",\n    getValue: function() {\n        if ($(\".search-comein\").val() && $(\".search-comeout\").val())\n            return $(\".search-comein\").val() + \" по \" + $(\".search-comeout\").val();\n        else if ($(\".search-comeout\").val())\n            return \" по \" + $(\".search-comeout\").val();\n        else\n            return '';\n    },\n    setValue: function(s, s1, s2) {\n        $(\".search-comein\").val(s1);\n        $(\".search-comeout\").val(s2);\n    }\n});\n\n$(\".kit-form-field[data-index='1']\").dateRangePicker({\n    autoClose: true,\n    singleDate: true,\n    showShortcuts: false,\n    singleMonth: true,\n    format: \"DD.MM.YYYY\",\n    setValue: function(s, s2) {\n        $(\".search-comeout\").val(s2);\n    }\n});\n\n$(\".kit-form-field[data-index='2']\").dropdown({\n    specClass: \"guests\",\n    placeholder: \"Сколько гостей\",\n    TPlaceholderSpelling: function(value) {\n        if (value == 1)\n            return \"гость\";\n        else if (value > 1 && value < 5)\n            return \"гостя\";\n        else\n            return \"гостей\";\n    },\n    dataSize: \"long\",\n    options: [\n        {\n            title: \"Взрослые\"\n        },\n        {\n            title: \"Дети\"\n        },\n        {\n            title: \"Младенцы\"\n        }\n    ],\n    clearBtn: true,\n    applyBtn: true\n});\n\nvar inputsToCheck;\nvar wrongValues = [\"ДД.ММ.ГГГГ\", \"ДД.ММ.ГГГГ\", \"Сколько гостей\"];\n\n$(\".main-search\").submit(function(e) {\n    inputsToCheck = [$(\".search-comein\"), $(\".search-comeout\"), $(\".search-guests\")];\n    for (var i = 0; i < inputsToCheck.length; i++) {\n        if (inputsToCheck[i].val() == wrongValues[i]) {\n            inputsToCheck[i].css(\"box-shadow\", \"0 0 3px 0 red\");\n\n            setTimeout(function() {\n                for (var i = 0; i < inputsToCheck.length; i++) {\n                    inputsToCheck[i].css(\"box-shadow\", \"\");\n                }\n            }, 1200);\n\n            e.preventDefault();\n        }\n    }\n\n    if ($(\".search-guests\").html() == wrongValues[2]) {\n        inputsToCheck[2].css(\"box-shadow\", \"0 0 3px 0 red\");\n\n        setTimeout(function() {\n            inputsToCheck[2].css(\"box-shadow\", \"\");\n        }, 1200);\n\n        e.preventDefault();\n    }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });