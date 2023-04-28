const linkInput = document.querySelector('.share label input');
const copyBtn = document.querySelector('.share p');
const alert = document.querySelector('.alert');

copyBtn.addEventListener('click', () => {
    alert.classList.remove('hide');
    setTimeout(() => {
        alert.classList.add('hide');
    }, 2000);
    navigator.clipboard.writeText(linkInput.value);
});
