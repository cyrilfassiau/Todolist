const addBtn = document.getElementById("addBtn")
const unorderedList = document.getElementById("ul")
const counter = document.getElementById("count")

addBtn.addEventListener("click", function(){
    const inputTxt = document.getElementById('inputTxt')

   
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []

    storedTasks.push({
        text: inputTxt.value,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(storedTasks))
    render();
    inputTxt.value = ''
})

function render(){
    unorderedList.innerHTML = "";

  
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []

    const remainingTasks = storedTasks.filter(task => !task.completed);
    counter.textContent = remainingTasks.length

    if (storedTasks.length > 0) {
        storedTasks.forEach( (task, index) => {
            const li = document.createElement("li")
            const span = document.createElement("span")
            const check = document.createElement("input")
            const deleteBtn = document.createElement("button")
            const editBtn = document.createElement("button")
            const inputSpanDiv = document.createElement("div")
            const buttonDiv = document.createElement("div")


            
            buttonDiv.classList.add("btnDiv")
            inputSpanDiv.classList.add("inputSpanDiv")
            span.id = "span"
            check.type = "checkbox"
            check.checked = task.completed
            deleteBtn.textContent = "Supprimer"
            span.textContent = task.text

            editBtn.textContent = "Modifier"

            if (task.completed){
                span.style.textDecoration = "line-through"
            }

            check.addEventListener("change", function(){
                task.completed = check.checked
                localStorage.setItem("tasks", JSON.stringify(storedTasks))
                render()
            })

            deleteBtn.addEventListener("click", function(e){
                storedTasks.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(storedTasks))
                render()
            })

            editBtn.addEventListener("click", function(){

                
                
                const editInput = document.createElement("input")
                editInput.id = "editInput"
                editInput.value = task.text
                span.style.display = "none"
                span.replaceWith(editInput)
                editBtn.textContent = "Valider"
                editBtn.addEventListener("click", function(){

                    task.text = editInput.value
                    localStorage.setItem("tasks", JSON.stringify(storedTasks))
                    render()


                })




            })

            inputSpanDiv.appendChild(check)
            inputSpanDiv.appendChild(span)
            li.appendChild(inputSpanDiv)
            buttonDiv.appendChild(editBtn)
            buttonDiv.appendChild(deleteBtn)
        
            li.appendChild(buttonDiv)
            unorderedList.appendChild(li)
        })
    } else {
        counter.textContent = "0"
    }
}

render();

////

const spans = document.querySelectorAll("span")

spans.forEach((s) => {

    if(!s.classList.contains("selected")) {
        s.addEventListener("mouseover", function(){
            s.style.backgroundColor = "#303030"
        })
        s.addEventListener("mouseout", function(){
            s.style.backgroundColor = "#222222"
        })
    }

    }

)
