const ratings = document.querySelectorAll('.ratings span');
const submitBtn = document.querySelector('button');
const container = document.querySelector('.container');
const thanksMsg = document.querySelector('.thanks-msg');
const textarea = document.querySelector('textarea');

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        ratings.forEach(r => r.classList.remove('active'));
        rating.classList.add('active');
    });
});

submitBtn.addEventListener('click', () => {
    if (textarea.value == '') {
        alert('Please enter some feedback');
        return;
    }
    container.classList.add('hide');
    thanksMsg.classList.remove('hide');
});