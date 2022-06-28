function initiate(){
    let tasksKiList = [{
        task:"cleam room",
        desc:"clean properly",
        date:"2022-6-20",
        priority:"High",
        project: ""
    },];
    localStorage.setItem('AllTasksList', JSON.stringify(tasksKiList) );
}

export {initiate};