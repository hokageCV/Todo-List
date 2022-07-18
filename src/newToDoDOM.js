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


export { renderToDos };
