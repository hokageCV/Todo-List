import { renderToDos } from "./newToDoDOM" ;
import { addTask } from "./newToDoObject" ;
import { initiate } from "./inititeLocalStorage";

initiate();
// renderToDos();

document.getElementById('submit').addEventListener('click', addTask );
// document.getElementById('submit').addEventListener('click', renderToDos );