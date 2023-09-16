const changeLight = document.querySelector('#light')
const taskArea = document.querySelector('taskArea')
const addTask = document.querySelector('#addTask')
const taskDisplay = document.querySelector('.taskDisplay')
const inputInner = document.querySelector('.inputInner')
const taskWrapper = document.querySelector('.taskWrapper')
const cross = document.querySelector('.cross')
const tasks = document.querySelector('.tasks')
const taskNum = document.querySelector('.taskNum')

const clear = document.querySelector('.clear')

let totalTaskCount = 0;

const showTask = document.querySelector('.taskType')
const showTask2 = document.querySelector('.taskType2')


// For changing day and night
changeLight.addEventListener('click', change);
function change(){
    const body = document.querySelector('body');
    body.classList.toggle('day')
}

// For adding new task
addTask.addEventListener('keypress', newTask)
function newTask(e){
    if(e.key === 'Enter'){
        let taskName = document.createElement('div')
        taskName.classList.add("taskWrapper")
        taskName.innerHTML = `<li class="tasks active">${addTask.value}<span class="cross">X</span></li>`
        taskDisplay.prepend(taskName)
        addTask.value = ''
        totalTaskCount ++;
        taskNum.innerHTML = totalTaskCount;
    }
}

// For actions on tasks
taskDisplay.addEventListener('click', completed)

function completed(e){
    if(e.target.classList.contains('tasks')){
        e.target.classList.toggle('checked');
        if(e.target.classList.contains('checked')){
            totalTaskCount --;
            taskNum.innerHTML = totalTaskCount;
        }else{
            totalTaskCount ++;
            taskNum.innerHTML = totalTaskCount;
        }
    }
    else if(e.target.classList.contains('cross')){
        if(!e.target.parentElement.classList.contains('checked')){
            totalTaskCount --;
            taskNum.innerHTML = totalTaskCount;
        }
        e.target.parentElement.parentElement.remove();
    }
}

showTask.addEventListener('click', show);
function show(e){
    let task = document.querySelectorAll('.tasks')
    if(e.target.classList.contains('allTask')){
        task.forEach(item=>item.parentElement.style.display = 'block')
    }
    else if(e.target.classList.contains('activeTask')){
        task.forEach(item=>{
            if(item.classList.contains('checked')){
                item.parentElement.style.display  = 'none'
            }
            else{
                item.parentElement.style.display  = 'block'
            }
        })
    }
    else if(e.target.classList.contains('completedTask')){
        task.forEach(item=>{
            if(item.classList.contains('checked')){
                item.parentElement.style.display  = 'block'
            }else{
                item.parentElement.style.display  = 'none'
            }
        })
    }
}

showTask2.addEventListener('click', show);
function show(e){
    let task = document.querySelectorAll('.tasks')
    if(e.target.classList.contains('allTask')){
        task.forEach(item=>item.parentElement.style.display = 'block')
    }
    else if(e.target.classList.contains('activeTask')){
        task.forEach(item=>{
            if(item.classList.contains('checked')){
                item.parentElement.style.display  = 'none'
            }
            else{
                item.parentElement.style.display  = 'block'
            }
        })
    }
    else if(e.target.classList.contains('completedTask')){
        task.forEach(item=>{
            if(item.classList.contains('checked')){
                item.parentElement.style.display  = 'block'
            }else{
                item.parentElement.style.display  = 'none'
            }
        })
    }
}

clear.addEventListener('click', clearAll)
function clearAll(){
    let task = document.querySelectorAll('.tasks')
    task.forEach(item=>{
        if(item.classList.contains('checked')){
            item.parentElement.remove();
        }
    })
}
