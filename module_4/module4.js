let todoList = document.getElementById('todo-list');
let inputField = document.getElementById('todo-input');

// Initial todo items
let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];


function createTodoElement(todo) {
    
    const li = document.createElement('li'); //list element
    li.classList.add('todo-item'); //adding class
    const span = document.createElement('span'); //adding span
    span.textContent = todo.text; //adding span text
    const delButton = document.createElement('button'); //adding button
    delButton.classList.add('delete-button'); //adding class to button
    delButton.addEventListener('click',() => deleteTodo(todo.id)); //adding event listner
    delButton.textContent = 'Delete'; //text for the button
    
    li.appendChild(span); // adding the span element to list
    li.appendChild(delButton); // adding button to list 
    return li; //returning list 
}

function renderTodos() {
    todoList.innerHTML = ''; // Clearing the list
    for (let todo of todos) { //looping through todos
        const todoElement = createTodoElement(todo); //creating todo
        todoList.appendChild(todoElement); //adding todo to the list
    }
    return todoList;
    
}

function addTodo() {
    const todoInput = document.getElementById('todo-input'); //get input element
    const inputText = todoInput.value.trim(); // remove not needed whitespace
    if(inputText !== '') { //check if input is not empty
        const newTodo = { id: todos.length, text: inputText } //create new todo
        todos.push(newTodo); //push new todo to array
        todoInput.value = ''; //clear input
        renderTodos(); //render
    }
    return todos;
}


function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); //filter with given id
    return renderTodos(); //render todos after deletion
}

inputField.addEventListener('keydown', (enter)  => {
    if (enter.key === 'Enter') {
        addTodo();
    }
});



// Initial render
renderTodos();