
let tasksKiList = [{
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


export { tasksKiList , addTask} ;
