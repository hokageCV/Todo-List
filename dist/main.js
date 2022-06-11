/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/newToDoDOM.js":
/*!***************************!*\
  !*** ./src/newToDoDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderToDos": () => (/* binding */ renderToDos)
/* harmony export */ });
// import { tasksKiList } from "./newToDoObject";

// outer shell of all tasks
const toDosContainer = document.querySelector('.toDos');

const renderToDos= ( function(){

    let retrievedData = localStorage.getItem("AllTasksList");
    let updatedTasksKiList = JSON.parse(retrievedData); 

    updatedTasksKiList.forEach( (task)=>{
        let aTask = document.createElement('div');


        let title = document.createElement('p');
        let desc = document.createElement('p');
        let date = document.createElement('p');
        let priority = document.createElement('p');
        let project = document.createElement('p');

        title.textContent = task.title ;
        desc.textContent = task.desc ;
        date.textContent = task.date ;
        priority.textContent = task.priority ;
        project.textContent = task.project ;
        

        aTask.appendChild(title);
        aTask.appendChild(desc);
        aTask.appendChild(date);
        aTask.appendChild(priority);
        aTask.appendChild(project);

        toDosContainer.appendChild(aTask);

    });
})();




/***/ }),

/***/ "./src/newToDoObject.js":
/*!******************************!*\
  !*** ./src/newToDoObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "tasksKiList": () => (/* binding */ tasksKiList)
/* harmony export */ });

let tasksKiList = [
    {
        task:"cleam room",
        desc:"clean properly",
        date:"2022-6-20",
        priority:"High",
        project: ""

    },
];

const addTask = (ev)=>{
    ev.preventDefault();  //to stop the form submitting

    // make new task
    let task = {
        task: document.getElementById('title').value,
        desc: document.getElementById('description').value,
        date: document.getElementById('date').value,
        priority: document.getElementById('priority').value,
        project: document.getElementById('project').value
    }

    // add new task to tasks ki list
    tasksKiList.push( task );

    // rest the form
    document.querySelector('form').reset();

    //saving to localStorage
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );


};





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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newToDoObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDoObject */ "./src/newToDoObject.js");
/* harmony import */ var _newToDoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDoDOM */ "./src/newToDoDOM.js");




document.getElementById('submit').addEventListener('click', _newToDoObject__WEBPACK_IMPORTED_MODULE_0__.addTask );
document.getElementById('submit').addEventListener('click', _newToDoDOM__WEBPACK_IMPORTED_MODULE_1__.renderToDos );
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7Ozs7Ozs7VUNyQ2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0M7QUFDNUM7QUFDQTtBQUNBLDREQUE0RCxtREFBTztBQUNuRSw0REFBNEQsb0RBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvRG8tTGlzdC8uL3NyYy9uZXdUb0RvRE9NLmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL3NyYy9uZXdUb0RvT2JqZWN0LmpzIiwid2VicGFjazovL1RvRG8tTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvRG8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB0YXNrc0tpTGlzdCB9IGZyb20gXCIuL25ld1RvRG9PYmplY3RcIjtcclxuXHJcbi8vIG91dGVyIHNoZWxsIG9mIGFsbCB0YXNrc1xyXG5jb25zdCB0b0Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvcycpO1xyXG5cclxuY29uc3QgcmVuZGVyVG9Eb3M9ICggZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgcmV0cmlldmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQWxsVGFza3NMaXN0XCIpO1xyXG4gICAgbGV0IHVwZGF0ZWRUYXNrc0tpTGlzdCA9IEpTT04ucGFyc2UocmV0cmlldmVkRGF0YSk7IFxyXG5cclxuICAgIHVwZGF0ZWRUYXNrc0tpTGlzdC5mb3JFYWNoKCAodGFzayk9PntcclxuICAgICAgICBsZXQgYVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZSA7XHJcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzYyA7XHJcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZSA7XHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5IDtcclxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0IDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgYVRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGFUYXNrLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgICAgIGFUYXNrLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgICAgIGFUYXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgICAgICBhVGFzay5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgdG9Eb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYVRhc2spO1xyXG5cclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHJlbmRlclRvRG9zIH07IiwiXHJcbmxldCB0YXNrc0tpTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICB0YXNrOlwiY2xlYW0gcm9vbVwiLFxyXG4gICAgICAgIGRlc2M6XCJjbGVhbiBwcm9wZXJseVwiLFxyXG4gICAgICAgIGRhdGU6XCIyMDIyLTYtMjBcIixcclxuICAgICAgICBwcmlvcml0eTpcIkhpZ2hcIixcclxuICAgICAgICBwcm9qZWN0OiBcIlwiXHJcblxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAoZXYpPT57XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpOyAgLy90byBzdG9wIHRoZSBmb3JtIHN1Ym1pdHRpbmdcclxuXHJcbiAgICAvLyBtYWtlIG5ldyB0YXNrXHJcbiAgICBsZXQgdGFzayA9IHtcclxuICAgICAgICB0YXNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSxcclxuICAgICAgICBkZXNjOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSxcclxuICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLFxyXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcclxuICAgICAgICBwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIG5ldyB0YXNrIHRvIHRhc2tzIGtpIGxpc3RcclxuICAgIHRhc2tzS2lMaXN0LnB1c2goIHRhc2sgKTtcclxuXHJcbiAgICAvLyByZXN0IHRoZSBmb3JtXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcclxuXHJcbiAgICAvL3NhdmluZyB0byBsb2NhbFN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxUYXNrc0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrc0tpTGlzdCkgKTtcclxuXHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7IHRhc2tzS2lMaXN0ICwgYWRkVGFza30gO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi9uZXdUb0RvT2JqZWN0XCIgO1xyXG5pbXBvcnQgeyByZW5kZXJUb0RvcyB9IGZyb20gXCIuL25ld1RvRG9ET01cIiA7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayApO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUb0RvcyApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==