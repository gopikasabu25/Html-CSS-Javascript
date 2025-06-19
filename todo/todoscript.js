const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

// Load saved tasks
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTaskToList(task));

// Add new task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText) {
    addTaskToList(taskText);
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
  }
});

function addTaskToList(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="this.parentElement.remove()">×</button>
  `;
  list.appendChild(li);
}