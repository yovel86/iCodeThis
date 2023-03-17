const icon = document.querySelector('.icon');
const activities = document.querySelector('.activities');
const extra = document.querySelector('.extra');
const viewAllBtn = document.querySelector('button');

viewAllBtn.addEventListener('click', () => {
    extra.classList.toggle('hide');
    if (extra.classList.contains('hide')) {
        viewAllBtn.textContent = 'View All';
    } else {
        viewAllBtn.textContent = 'View Few';
    }
});

icon.addEventListener('click', () => {
    activities.classList.toggle('hide');
});