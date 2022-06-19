let todos = [{
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

render();

function createId() {
  return '' + new Date().getTime();
}

function addTodo() {
  let textbox = document.querySelector('#todo-title');
  let title = textbox.value;

  const datePicker = document.querySelector('#date-picker');
  const dueDate = datePicker.value;

  const id = createId();

  todos.push({
    title: title,
    dueDate: dueDate,
     id: id
  });

  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  render();
}

function render() {
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
