/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inititeLocalStorage.js":
/*!************************************!*\
  !*** ./src/inititeLocalStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiate": () => (/* binding */ initiate)
/* harmony export */ });
function initiate(){
    let tasksKiList=[ {
        task:"cleam-room",
        desc:"clean-properly",
        date:"2022-6-20",
        priority:"High",
        project: "",
    }];
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );
}



/***/ }),

/***/ "./src/newToDoDOM.js":
/*!***************************!*\
  !*** ./src/newToDoDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderToDos": () => (/* binding */ renderToDos)
/* harmony export */ });
// import { initiate } from "./inititeLocalStorage";

// initiate();

// outer shell of all tasks
const toDosContainer = document.querySelector('.toDos');

function renderToDos(){
    let retrievedData = localStorage.getItem("AllTasksList");
    let updatedTasksKiList = JSON.parse(retrievedData); 

    // updatedTasksKiList.forEach( (task)=>{
    //     let aTask = document.createElement('div') ;

    //     let title = document.createElement('p');
    //     let desc = document.createElement('p');
    //     let date = document.createElement('p');
    //     let priority = document.createElement('p');
    //     let project = document.createElement('p');

    //     title.textContent = task.title ;
    //     desc.textContent = task.desc ;
    //     date.textContent = task.date ;
    //     priority.textContent = task.priority ;
    //     project.textContent = task.project ;
        

    //     aTask.appendChild(title);
    //     aTask.appendChild(desc);
    //     aTask.appendChild(date);
    //     aTask.appendChild(priority);
    //     aTask.appendChild(project);

        
    //     aTask.classList.add(task);
    //     toDosContainer.appendChild(aTask);
    // });

    updatedTasksKiList.forEach( (task)=>{
        // new task's container
        let aTask = document.createElement('div') ;

        // creating new task's elements
        let title = document.createElement('p');
        let desc = document.createElement('p');
        let date = document.createElement('p');
        let priority = document.createElement('p');
        let project = document.createElement('p');

        // assigning data to new task
        title.textContent = task.title ;
        desc.textContent = task.desc ;
        date.textContent = task.date ;
        priority.textContent = task.priority ;
        project.textContent = task.project ;
        
        // appending things
        aTask.appendChild(title);
        aTask.appendChild(desc);
        aTask.appendChild(date);
        aTask.appendChild(priority);
        aTask.appendChild(project);

        aTask.classList.add(task);
        // appending new task to all task container
        toDosContainer.appendChild(aTask);
    })  


}





/***/ }),

/***/ "./src/newToDoObject.js":
/*!******************************!*\
  !*** ./src/newToDoObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _newToDoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDoDOM */ "./src/newToDoDOM.js");


let retrievedList = localStorage.getItem("AllTasksList");   
let tasksKiList = JSON.parse(retrievedList); 

function addTask(ev){
    ev.preventDefault();  //to stop the form submitting

    // make new task
    let task = {
        task: document.getElementById('title').value,
        desc: document.getElementById('description').value,
        date: document.getElementById('date').value,
        priority: document.getElementById('priority').value,   
        project: document.getElementById('project').value
    }

    // // add new task to tasks ki list
    console.log( tasksKiList );
    tasksKiList.push( task );
    console.log( tasksKiList );

    // rest the form
    document.querySelector('form').reset();

    //saving to localStorage
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );

    (0,_newToDoDOM__WEBPACK_IMPORTED_MODULE_0__.renderToDos)();
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
/* harmony import */ var _newToDoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newToDoDOM */ "./src/newToDoDOM.js");
/* harmony import */ var _newToDoObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDoObject */ "./src/newToDoObject.js");
/* harmony import */ var _inititeLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inititeLocalStorage */ "./src/inititeLocalStorage.js");




(0,_inititeLocalStorage__WEBPACK_IMPORTED_MODULE_2__.initiate)();
// renderToDos();

document.getElementById('submit').addEventListener('click', _newToDoObject__WEBPACK_IMPORTED_MODULE_1__.addTask );
// document.getElementById('submit').addEventListener('click', renderToDos );
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDbUI7Ozs7Ozs7VUNoQ25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QztBQUNEO0FBQ007QUFDakQ7QUFDQSw4REFBUTtBQUNSO0FBQ0E7QUFDQSw0REFBNEQsbURBQU87QUFDbkUsNkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvaW5pdGl0ZUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvbmV3VG9Eb0RPTS5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvbmV3VG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdGlhdGUoKXtcclxuICAgIGxldCB0YXNrc0tpTGlzdD1bIHtcclxuICAgICAgICB0YXNrOlwiY2xlYW0tcm9vbVwiLFxyXG4gICAgICAgIGRlc2M6XCJjbGVhbi1wcm9wZXJseVwiLFxyXG4gICAgICAgIGRhdGU6XCIyMDIyLTYtMjBcIixcclxuICAgICAgICBwcmlvcml0eTpcIkhpZ2hcIixcclxuICAgICAgICBwcm9qZWN0OiBcIlwiLFxyXG4gICAgfV07XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsVGFza3NMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza3NLaUxpc3QpICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7aW5pdGlhdGV9OyIsIi8vIGltcG9ydCB7IGluaXRpYXRlIH0gZnJvbSBcIi4vaW5pdGl0ZUxvY2FsU3RvcmFnZVwiO1xyXG5cclxuLy8gaW5pdGlhdGUoKTtcclxuXHJcbi8vIG91dGVyIHNoZWxsIG9mIGFsbCB0YXNrc1xyXG5jb25zdCB0b0Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvcycpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9Eb3MoKXtcclxuICAgIGxldCByZXRyaWV2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBbGxUYXNrc0xpc3RcIik7XHJcbiAgICBsZXQgdXBkYXRlZFRhc2tzS2lMaXN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWREYXRhKTsgXHJcblxyXG4gICAgLy8gdXBkYXRlZFRhc2tzS2lMaXN0LmZvckVhY2goICh0YXNrKT0+e1xyXG4gICAgLy8gICAgIGxldCBhVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDtcclxuXHJcbiAgICAvLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgLy8gICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgLy8gICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgLy8gICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIC8vICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAvLyAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlIDtcclxuICAgIC8vICAgICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjIDtcclxuICAgIC8vICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlIDtcclxuICAgIC8vICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHkgO1xyXG4gICAgLy8gICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3QgO1xyXG4gICAgICAgIFxyXG5cclxuICAgIC8vICAgICBhVGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAvLyAgICAgYVRhc2suYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICAvLyAgICAgYVRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAvLyAgICAgYVRhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgLy8gICAgIGFUYXNrLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgICAgICBcclxuICAgIC8vICAgICBhVGFzay5jbGFzc0xpc3QuYWRkKHRhc2spO1xyXG4gICAgLy8gICAgIHRvRG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFUYXNrKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHVwZGF0ZWRUYXNrc0tpTGlzdC5mb3JFYWNoKCAodGFzayk9PntcclxuICAgICAgICAvLyBuZXcgdGFzaydzIGNvbnRhaW5lclxyXG4gICAgICAgIGxldCBhVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRpbmcgbmV3IHRhc2sncyBlbGVtZW50c1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbmluZyBkYXRhIHRvIG5ldyB0YXNrXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlIDtcclxuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjIDtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlIDtcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHkgO1xyXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3QgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGFwcGVuZGluZyB0aGluZ3NcclxuICAgICAgICBhVGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgYVRhc2suYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICAgICAgYVRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICAgICAgYVRhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgICAgIGFUYXNrLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgICAgICBhVGFzay5jbGFzc0xpc3QuYWRkKHRhc2spO1xyXG4gICAgICAgIC8vIGFwcGVuZGluZyBuZXcgdGFzayB0byBhbGwgdGFzayBjb250YWluZXJcclxuICAgICAgICB0b0Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhVGFzayk7XHJcbiAgICB9KSAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHJlbmRlclRvRG9zIH07XHJcbiIsImltcG9ydCB7IHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vbmV3VG9Eb0RPTVwiO1xyXG5cclxubGV0IHJldHJpZXZlZExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFsbFRhc2tzTGlzdFwiKTsgICBcclxubGV0IHRhc2tzS2lMaXN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRMaXN0KTsgXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKGV2KXtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7ICAvL3RvIHN0b3AgdGhlIGZvcm0gc3VibWl0dGluZ1xyXG5cclxuICAgIC8vIG1ha2UgbmV3IHRhc2tcclxuICAgIGxldCB0YXNrID0ge1xyXG4gICAgICAgIHRhc2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxyXG4gICAgICAgIGRlc2M6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLFxyXG4gICAgICAgIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsXHJcbiAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLCAgIFxyXG4gICAgICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICAvLyAvLyBhZGQgbmV3IHRhc2sgdG8gdGFza3Mga2kgbGlzdFxyXG4gICAgY29uc29sZS5sb2coIHRhc2tzS2lMaXN0ICk7XHJcbiAgICB0YXNrc0tpTGlzdC5wdXNoKCB0YXNrICk7XHJcbiAgICBjb25zb2xlLmxvZyggdGFza3NLaUxpc3QgKTtcclxuXHJcbiAgICAvLyByZXN0IHRoZSBmb3JtXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcclxuXHJcbiAgICAvL3NhdmluZyB0byBsb2NhbFN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxUYXNrc0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrc0tpTGlzdCkgKTtcclxuXHJcbiAgICByZW5kZXJUb0RvcygpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7IGFkZFRhc2t9IDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXJUb0RvcyB9IGZyb20gXCIuL25ld1RvRG9ET01cIiA7XHJcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi9uZXdUb0RvT2JqZWN0XCIgO1xyXG5pbXBvcnQgeyBpbml0aWF0ZSB9IGZyb20gXCIuL2luaXRpdGVMb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmluaXRpYXRlKCk7XHJcbi8vIHJlbmRlclRvRG9zKCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrICk7XHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRvRG9zICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9