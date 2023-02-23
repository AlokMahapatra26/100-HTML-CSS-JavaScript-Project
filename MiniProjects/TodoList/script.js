const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#add");
const taskList = document.querySelector("#task-list")



btnEl.addEventListener("click", ()=>{
    if(inputEl.value){
        AddTodo();
    }
    
})

inputEl.addEventListener("keypress" , (e)=>{
    if(e.key === "Enter"){
        if(inputEl.value){
            AddTodo();
        }
    }
})

function AddTodo(){
    
    task = inputEl.value;
    const todo = document.createElement("li");
    todo.innerText = task;
    
    taskList.appendChild(todo);
    inputEl.value = ""
    
    todo.addEventListener("click" , ()=>{
        todo.style.textDecoration = "line-through"
        todo.style.backgroundColor = "#CCCCFF"
    })

    todo.addEventListener("dblclick" , (e)=>{
        todo.remove();
    })
   



}


