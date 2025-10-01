let todoList = document.getElementById('todo-list');

let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];

// TODO: Select and store references to the necessary DOM elements:
// - todoList: the <ul> element to contain the todo items
// - todoInput: the input field for new todos
// - addButton: the button to add new todos

// Create todo item element
function createTodoElement(todo) {
    // TODO: Implement this function
    // 1. Create a new <li> element
    // 2. Add the 'todo-item' class to the <li>
    // 3. Create a <span> for the todo text
    // 4. Set the span's text content to todo.text
    // 5. Create a delete button
    // 6. Add a click event listener to the delete button that calls deleteTodo(todo.id)
    // 7. Append the span and delete button to the <li>
    // 8. Return the <li> element
    const li = document.createElement('li');
    li.classList.add('todo-item');
    const span = document.createElement('span');
    span.textContent = todo.text;
    const delButton = document.createElement('button');
    delButton.addEventListener('click',() => deleteTodo(todo.id));
    
    li.appendChild(span);
    li.appendChild(delButton);
    delButton.textContent = 'Delete';
    console.log(todo.id);

    return li;
}

// Render todos
function renderTodos() {
    // TODO: Implement this function
    // 1. Clear the existing list
    // 2. Loop through the todos array
    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
   
    todoList.innerHTML = ''; // Clearing existing list
    for (let todo of todos) {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
        console.log(todoElement);
    }
    return todoList;
    
}

// Add todo
function addTodo() {
    // TODO: Implement this function
    // 1. Get the text from the input field
    // 2. If the text is not empty:
    //    a. Create a new todo object with a unique id and the input text
    //    b. Add the new todo object to the todos array
    //    c. Clear the input field
    //    d. Call renderTodos() to update the display

    const todoInput = document.getElementById('todo-input');
    const inputText = todoInput.value.trim();
    if(inputText !== '') {
        const newTodo = { id: todos.length + 1, text: inputText }
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
    
    return todos;
}

// Delete todo
function deleteTodo(id) {
    // TODO: Implement this function
    // 1. Remove the todo with the given id from the todos array
    // 2. Call renderTodos() to update the display
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    return todos;
}

// TODO: Add a click event listener to the add button that calls addTodo

// TODO: Add a keypress event listener to the input field 
// that calls addTodo when the Enter key is pressed

// Initial render
renderTodos();