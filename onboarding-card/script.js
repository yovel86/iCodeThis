const steps = document.querySelectorAll('.step');
const step = document.querySelectorAll('.step span');
const range = document.querySelector('.range');
const rangeText = document.querySelector('.completion h3');
const num = document.querySelector('.num span');

steps.forEach((s, i) => {

    s.addEventListener('click', () => {

        if (step[i].classList.contains('not-completed')) {
            step[i].classList.remove('not-completed');
            step[i].classList.add('material-icons-outlined');
            step[i].textContent = 'done';
        } else {
            step[i].classList.remove('material-icons-outlined');
            step[i].classList.add('not-completed');
            step[i].textContent = '';
        }

        const count = noOfStepsCompleted();
        num.textContent = count;

        updateCount(count);

    });

});

let updateRange = (percent, text) => {
    document.styleSheets[1].deleteRule(5);
    document.styleSheets[1].insertRule(`.range::before { right: ${percent} !important}`, 5);
    rangeText.textContent = text;
}

let noOfStepsCompleted = () => {
    let count = 0;
    step.forEach(s => {
        if (s.classList.contains('material-icons-outlined')) {
            count += 1;
        }
    });
    return count;
}

let updateCount = (count) => {
    switch (count) {
        case 1:
            updateRange('80%', '20%');
            break;
        case 2:
            updateRange('60%', '40%');
            break;
        case 3:
            updateRange('40%', '60%')
            break;
        case 4:
            updateRange('20%', '80%');
            break;
        case 5:
            updateRange('0', '100%');
            break;
        default:
            updateRange('100%', '0%');
            break;
    }
}