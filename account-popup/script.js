const user = document.querySelector('.user');
const userDetails = document.querySelector('.user-details');

document.addEventListener('click', (e) => {
    if (!user.contains(e.target)) {
        userDetails.classList.remove('show');
    }
});

user.addEventListener('click', () => {
    userDetails.classList.toggle('show');
});