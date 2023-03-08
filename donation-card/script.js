const container = document.querySelector('.container');
const success = document.querySelector('.success-msg');
const successMsg = document.querySelector('.success-msg p');
const donateBtn = document.querySelector('.donate-btn');
const amounts = document.querySelector('.amount');
const yourAmount = document.querySelector('#your-amount');
const toggleBtn = document.querySelector('#btn');

function switchRight() {
    toggleBtn.style.left = '105px';
    amounts.classList.add('hide');
    yourAmount.classList.remove('hide');
}

function switchLeft() {
    toggleBtn.style.left = '5px';
    amounts.classList.remove('hide');
    yourAmount.classList.add('hide');
}

donateBtn.addEventListener('click', () => {
    const name = document.querySelector('.name').value;
    if(name === '') {
        alert('Please enter your name');
        return;
    } else {
        const fullName = name[0].toUpperCase() + name.slice(1);
        if(amounts.classList.contains('hide')) {
            var amount = document.querySelector('.your-amount');
        } else {
            var amount = document.querySelector('input[type="radio"]:checked');
        }
        successMsg.textContent = `Thanks ${fullName}, for your ${amount.value}$ donation!`;
        container.classList.add('hide');
        success.style.display = 'flex';
    }
});
