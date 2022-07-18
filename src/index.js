import { addTask } from "./newToDoObject" ;
import { initiate } from "./inititeLocalStorage";

initiate();


document.getElementById('submit').addEventListener('click', addTask );
