import { renderToDos } from "./newToDoDOM";

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
    tasksKiList.push( task );

    // reset the form
    document.querySelector('form').reset();

    //saving to localStorage
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );

    renderToDos();
};

export { addTask} ;
