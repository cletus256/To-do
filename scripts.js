const todoInput = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const todoForm = document.querySelector("form");
const todoListUl = document.getElementById("todo-list");

let allTodos = [];
todoForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = "";
    }
}
function updateTodoList(){
    todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex); 
        todoListUl.append(todoItem);
    })
}
function createTodoItem(todo, todoInput){
    const todoId = "todo-" + todoIndex;
    const todoLI = document.createElement("li");
    todoLI.className = "todo";
    todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}" class="custom-checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </label>
        <label for="${todoId}" class="todo-text">
            ${todo}
        </label>
        <button class="delete-button">
            <svg fill="#e95528" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"/><path d="M9 10h2v8H9zm4 0h2v8h-2z"/></svg>
        </button>
    `
    return todoLI;
}





// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
// }