const tasks = document.querySelectorAll('.checklist label');
const tablets = document.querySelectorAll('.tablets .tab');
const inputs = document.querySelectorAll('input[type="checkbox"]');
const ticks = document.querySelectorAll('.checklist label span');
const success = document.querySelector('.task-left');
const tasksLeft = document.querySelector('.task-left span');

tasks.forEach((task, i) => {
    task.addEventListener('click', () => {
        if (inputs[i].checked) {
            ticks[i].classList.add('active');
        } else {
            ticks[i].classList.remove('active');
        }

        checkTasks();

    });
});

let checkTasks = () => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let left = 8 - checked;
    if (left === 0) {
        success.textContent = 'ALL TASKS COMPLETED! 🎊'
    } else {
        success.innerHTML = `<span>${left}</span> remaining to complete`;
    }
    for (let i = 0; i < checked; i++) {
        tablets[i].classList.remove('not-completed');
    }

    for (let i = checked; i <= 7; i++) {
        tablets[i].classList.add('not-completed');
    }
}

checkTasks();