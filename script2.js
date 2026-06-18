const addBtn = document.getElementById("addBtn")
const unorderedList = document.getElementById("ul")
let tasks = []
const counter = document.getElementById("count")

addBtn.addEventListener("click", function(){
    const inputTxt = document.getElementById('inputTxt')

     tasks.push({
        text: inputTxt.value,
        completed: false
    });
    render();
    counter.innerHTML ++
    inputTxt.value = ''
})

function render(){

    unorderedList.innerHTML = "";
    const remainingTasks = tasks.filter(task => !task.completed);

    counter.textContent = remainingTasks.length - 1;

    tasks.forEach( task => {


    const li = document.createElement("li")
    const span = document.createElement("span")
    const check = document.createElement("input")
    const deleteBtn = document.createElement("button")

    span.id = "span"
    check.type = "checkbox"
    check.checked = task.completed
    deleteBtn.textContent = "Supprimer"

    
    span.textContent = task.text

    li.appendChild(check)
    li.appendChild(span)
    li.appendChild(deleteBtn)
    unorderedList.appendChild(li)


        }
    )
  
}

