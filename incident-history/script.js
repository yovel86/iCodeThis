const incidentContainer = document.querySelector('.incident-container');
const addIncidentBtn = document.querySelector('.add-incident-btn');

checkIncidentState();

function checkIncidentState() {
    const incidentState = document.querySelectorAll('.incident__title h3');
    for (let state of incidentState) {
        if(state.textContent === 'Resolved') {
            state.style.background = '#21774f';
        } else if(state.textContent === 'Monitoring') {
            state.style.background = '#cf4300';
        } else if(state.textContent === 'Open') {
            state.style.background = "#0d0daa";
        } else {
            state.style.background = '#df184a';
        }
    }
}

addIncidentBtn.addEventListener('click', (e) => {
    const incidentTitle = document.querySelector('.title');
    const incidentDetails = document.querySelector('.details');
    const incidentState = document.querySelector('input[type="radio"]:checked');

    e.preventDefault();

    console.log(incidentState);

    const newIncident = `<div class="incident">
            
                <h3>October 30, 2022</h3>

                <div class="incident__title">
                    <h2>${incidentTitle.value}</h2>
                    <h3>${incidentState.value}</h3>
                </div>

                <div class="incident__description">
                    <p>${incidentDetails.value}</p>
                </div>

                <div class="incident__open">
                    <p>Full Report</p>
                    <span class="material-icons-outlined">
                    keyboard_double_arrow_right
                    </span>
                </div>

            </div>`;

    incidentContainer.innerHTML += newIncident;
    checkIncidentState();
    dialog.close();
});

function closeDialog(event) {
    if (event.target === dialog) {
        dialog.close();
    }
}
  
dialog.addEventListener("click", closeDialog);