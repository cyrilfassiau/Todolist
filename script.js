const unorderedList = document.getElementById("ul")
const addBtn = document.getElementById("addBtn")
const counter = document.getElementById("count")





addBtn.addEventListener("click", function(){

    const li = document.createElement("li")
    const span = document.createElement("span")
    const check = document.createElement("input")
    const inputTxt = document.getElementById('inputTxt')
    const deleteBtn = document.createElement("button")

    span.id = "span"
    check.type = "checkbox"
    deleteBtn.textContent = "Supprimer"

    deleteBtn.addEventListener("click", function(){
        li.remove()
        
        if (!check.checked){
            counter.innerHTML --    
        }
        
    })
    
    

    span.textContent = inputTxt.value
    li.appendChild(check)
    li.appendChild(span)
    li.appendChild(deleteBtn)
    
    unorderedList.appendChild(li)


    inputTxt.value = ''
    counter.innerHTML ++

})


unorderedList.addEventListener("change", function(e){
    
  

    if(e.target.type = "checkbox"){

        if(e.target.checked) {
            counter.innerHTML --
           

        }
        else {
            counter.innerHTML ++
        }


    }
    
    
})




