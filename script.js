import MicroModal from 'micromodal'; 
const sendButton = document.getElementById('send-button')
const taskContainer = document.getElementById('tasks-ul')
const taskInput = document.getElementById('task-input')

let feito = false;
let editingTask = null;

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
    editIcon.setAttribute('data-micromodal-trigger', 'modal-1');
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
        editingTask = spanTask;
        MicroModal.show('modal-1');
    }
    

    doneTask.addEventListener("click", tarefaFeita)
    deleteTask.addEventListener("click", deletarTarefa)
    editIcon.addEventListener("click", editarTarefa)
}

sendButton.addEventListener("click", takeTask)


document.addEventListener("DOMContentLoaded", function() {
  
    try {
        MicroModal.init({
            awaitCloseAnimation: true,
            onShow: function(modal) {},
            onClose: function(modal) {}
        });

        const applyButton = document.getElementById('button-apply');
        applyButton.addEventListener("click", function() {
            if (editingTask) {
                const editedTaskInput = document.getElementById('edit_input');
                if (editedTaskInput !== null && editedTaskInput.value !== "") {
                    editingTask.textContent = editedTaskInput.value;
                    MicroModal.close('modal-1');
                    editingTask = null; 
                    editedTaskInput.value = ""
                };         
            }
        });
      
    } catch (e) {
      console.log("micromodal error: ", e);
    }
    
  });

