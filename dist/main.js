/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newToDoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDoDOM */ \"./src/newToDoDOM.js\");\n\r\n\r\n\r\ndocument.getElementById('submit').addEventListener('click', _newToDoDOM__WEBPACK_IMPORTED_MODULE_0__.renderToDos);\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ }),

/***/ "./src/newToDoDOM.js":
/*!***************************!*\
  !*** ./src/newToDoDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDos\": () => (/* binding */ renderToDos)\n/* harmony export */ });\n/* harmony import */ var _newToDoObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDoObject */ \"./src/newToDoObject.js\");\n\r\n\r\n// outer shell of all tasks\r\nconst toDosContainer = document.querySelector('.toDos');\r\n\r\nconst renderToDos= ( function(){\r\n    _newToDoObject__WEBPACK_IMPORTED_MODULE_0__.tasksKiList.forEach( (task)=>{\r\n        let aTask = document.createElement('div');\r\n\r\n\r\n        let title = document.createElement('p');\r\n        let desc = document.createElement('p');\r\n        let date = document.createElement('p');\r\n        let priority = document.createElement('p');\r\n        let project = document.createElement('p');\r\n\r\n        title.textContent = task.title ;\r\n        desc.textContent = task.desc ;\r\n        date.textContent = task.date ;\r\n        priority.textContent = task.priority ;\r\n        project.textContent = task.project ;\r\n        \r\n\r\n        aTask.appendChild(title);\r\n        aTask.appendChild(desc);\r\n        aTask.appendChild(date);\r\n        aTask.appendChild(priority);\r\n        aTask.appendChild(project);\r\n\r\n        toDosContainer.appendChild(aTask);\r\n\r\n    });\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/newToDoDOM.js?");

/***/ }),

/***/ "./src/newToDoObject.js":
/*!******************************!*\
  !*** ./src/newToDoObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"tasksKiList\": () => (/* binding */ tasksKiList)\n/* harmony export */ });\nlet tasksKiList = [];\r\n\r\nconst addTask = (ev)=>{\r\n    ev.preventDefault();  //to stop the form submitting\r\n\r\n    // make new task\r\n    let task = {\r\n        task: document.getElementById('title').value,\r\n        desc: document.getElementById('description').value,\r\n        date: document.getElementById('date').value,\r\n        priority: document.getElementById('priority').value,\r\n        project: document.getElementById('project').value\r\n    };\r\n\r\n    // add new task to tasks ki list\r\n    tasksKiList.push( task );\r\n\r\n    // rest the form\r\n    document.querySelector('form').reset();\r\n\r\n    //saving to localStorage\r\n    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDo-List/./src/newToDoObject.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;