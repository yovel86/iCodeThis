const addBtn = document.querySelector('.addBtn');
const addTask = document.querySelector('.addTaskBtn');
const kanbanContainer = document.querySelector('.kanban-container');
const container = document.querySelector('.container');
const formContainer = document.querySelector('.form-container');

const companyLogos = {
    'Adidas': 'https://toulouseboutiques.com/wp-content/uploads/2019/10/Adidas-Toulouse.jpg',
    'Bosch': 'https://d18qs7yq39787j.cloudfront.net/uploads/company/950/Bosch-logo-7.png',
    'Uber': 'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
    'Zomato': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
    'Jio': 'https://newszon.in/wp-content/uploads/2021/11/cropped-reliance-jio-logo.jpg'
}

checkPriority();

function checkPriority() {
    const priority = document.querySelectorAll('.priority');
    for (let p of priority) {
        if (p.textContent === 'High') {
            p.style.backgroundColor = '#f26092';
        } else if (p.textContent === 'Medium') {
            p.style.backgroundColor = '#3ba3f8';
        } else {
            p.style.backgroundColor = '#43c3b6'
        }
    }
}

addBtn.addEventListener('click', () => {
    container.classList.add('hide');
    formContainer.classList.remove('hide');
});

addTask.addEventListener('click', (e) => {

    e.preventDefault();
    const formData = [...document.querySelector('#taskForm').elements]  
                     .reduce((acc, input) => ({...acc, [input.name]: input.value}), {});
    console.log(formData);

    for(let data in formData) {
        if(formData[data] === '' && data !== '') {
            alert('Please enter all fields');
            return;
        } 
    }

    const newKanbanCard = `<div class="kanban-card">

            <div class="kanban-card__icon">
                <img src="${companyLogos[formData.company]}">
            </div>

            <div class="kanban-card__details">

                <div class="top-row">
                    <p class="priority">${formData.priority}</p>
                    <p class="date">18 Dec 2017</p>
                </div>

                <div class="title">
                    ${formData.task}
                </div>

                <div class="tags">
                    <p>${formData.tags}</p>
                </div>

                <div class="bottom-row">
                    <span class="material-icons-outlined">
                    groups_2
                    </span>
                    <p>${formData.noOfPeople} people work on this</p>
                    <span class="material-icons-outlined comments">
                    question_answer
                    </span>
                    <p>1 Comments</p>
                </div>

            </div>

        </div>`;

    kanbanContainer.innerHTML += newKanbanCard;
    formContainer.classList.toggle('hide');
    container.classList.toggle('hide');
    checkPriority();

});

