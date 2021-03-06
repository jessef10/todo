// Model
let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [{
    title: 'Get groceries',
    dueDate: '2021-10-02',
    id: 'id1'
  }, {
    title: 'Wash car',
    dueDate: '2021-02-02',
    id: 'id2'
  }, {
    title: 'Make dinner',
    dueDate: '2021-07-11',
    id: 'id3'
  }];
}

// Creates an id
const createId = () => {
  return '' + new Date().getTime();
}

// Creates a todo
const createTodo = (title, dueDate) => {
  const id = createId();

  todos.push({
    title: title,
    dueDate: dueDate,
     id: id
  });

  saveTodos();
}

// Deletes a todo
const removeTodo = idToDelete => {
  todos = todos.filter(todo => {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
}

// Saves a todo
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Controller
const addTodo = () => {
  const textbox = document.querySelector('#todo-title');
  const title = textbox.value;

  const datePicker = document.querySelector('#date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

const deleteTodo = event => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

// View
const render = () => {
  // reset our list-style:
  document.querySelector('#todo-list').innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = `${todo.title} ${todo.dueDate}`;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    let todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}

render();
