const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const todoText = prompt('Enter a new TODO:'); // запитуємо текст нового TODO

  if (todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = classNames.TODO_ITEM;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.onchange = updateUncheckedCount;

    const text = document.createElement('span');
    text.className = classNames.TODO_TEXT;
    text.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.className = classNames.TODO_DELETE;
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      list.removeChild(todoItem);
      updateCounts();
    };

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteButton);

    list.appendChild(todoItem);
    updateCounts();
  }
}

function updateCounts() {
  const itemCount = list.getElementsByTagName('li').length;
  const uncheckedCount = list.querySelectorAll('input[type="checkbox"]:not(:checked)').length;

  itemCountSpan.textContent = itemCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function updateUncheckedCount() {
  const uncheckedCount = list.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  uncheckedCountSpan.textContent = uncheckedCount;
}
