import { addTask } from "./newToDoObject" ;
// import { renderToDos } from "./newToDoDOM" ;
import { initiate } from "./inititeLocalStorage";

initiate();

document.getElementById('submit').addEventListener('click', addTask );
// document.getElementById('submit').addEventListener('click', renderToDos );