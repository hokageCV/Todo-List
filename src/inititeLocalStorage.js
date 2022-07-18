function initiate(){
    // pre-filled task
    let tasksKiList=[ {
        task:"cleam room",
        desc:"thik se saaf kar",
        date:"2022-6-20",
        priority:"High",
        project: "",
    }];

    // initiating local storage
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );
}

export {initiate};