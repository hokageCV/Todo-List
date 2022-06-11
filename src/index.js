import { addTask } from "./newToDoObject" ;
import { renderToDos } from "./newToDoDOM" ;


document.getElementById('submit').addEventListener('click', addTask );
document.getElementById('submit').addEventListener('click', renderToDos );