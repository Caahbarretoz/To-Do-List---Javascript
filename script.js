const sendButton = document.getElementById('send-button')
const taskContainer = document.getElementById('tasks-ul')
const taskInput = document.getElementById('task-input')
let feito = false;

function takeTask(){ 
    event.preventDefault();
    if ((taskInput.value !== "")){
        localStorage.setItem("Task", taskInput.value)
        createTask()
        taskInput.value = ""
    }
}

function createTask(){
    const listTask = document.createElement('li')
    const spanTask = document.createElement('span')
    const doneTask = document.createElement('button')
    const doneIcon = document.createElement('i')
    const editIcon = document.createElement('i')
    const deleteTask = document.createElement('button')
    const deleteIcon = document.createElement('i')
    
    doneTask.classList.add("task-button")
    doneIcon.className = "fa-solid fa-check"
    editIcon.id = "edit-i"
    editIcon.className = "fa-solid fa-pencil"
    deleteTask.className = "x-button"
    deleteIcon.className = "fa-regular fa-circle-xmark"

    spanTask.textContent = localStorage.getItem("Task")

    doneTask.appendChild(doneIcon)
    deleteTask.appendChild(deleteIcon)
    listTask.appendChild(doneTask)
    listTask.appendChild(spanTask)
    listTask.appendChild(editIcon)
    listTask.appendChild(deleteTask)
    taskContainer.appendChild(listTask)

    function tarefaFeita(){
        if (feito === false) {
        spanTask.classList.add('marked-task');
        listTask.style.backgroundColor = "#EE98F0";
        doneTask.style.backgroundColor = "#D9D9D9";
        feito = true;
        }else {
            spanTask.classList.remove('marked-task');
            listTask.style.backgroundColor = "#D9D9D9";
            doneTask.style.backgroundColor = "#EE98F0";
            feito = false;
        }
    }

    function deletarTarefa(){
        taskContainer.removeChild(listTask)
    }

    function editarTarefa(){
        const newText = prompt("Write new task");
        if (newText !== null && newText !== "")
            spanTask.textContent = newText
    }
    
    doneTask.addEventListener("click", tarefaFeita)
    deleteTask.addEventListener("click", deletarTarefa)
    editIcon.addEventListener("click", editarTarefa)
}

sendButton.addEventListener("click", takeTask)



