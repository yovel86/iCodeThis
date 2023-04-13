const addTaskIcon = document.querySelector('.add-icon');
const addTask     = document.querySelector('.add-task');
const overlay     = document.querySelector('.overlay');

const renderAllTasks = () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    task.addEventListener('click', () => {
      task.children[0].classList.toggle('cancel');
      task.children[1].classList.toggle('hide');
      task.children[2].classList.toggle('hide');
    });
  });
}

renderAllTasks();

addTaskIcon.addEventListener('click', () => {
  overlay.classList.toggle('hide');
  addTask.classList.toggle('hide');
});

addTask.children[1].addEventListener('click', () => {
  if(addTask.children[0].value === '') {
    alert('Enter task name...');
    return;
  }
  overlay.classList.toggle('hide');
  addTask.classList.toggle('hide');
  const newTask = addTask.children[0].value;
  addTask.children[0].value = '';
  const allTasks = document.querySelector('.tasks');
  allTasks.insertAdjacentHTML('beforeend', `
  <div class="task">
    <p>${newTask}</p>
    <span class="material-icons-outlined icon hide">task_alt</span>
    <span class="not-checked"></span>
  </div>
  `);
  renderAllTasks();
});