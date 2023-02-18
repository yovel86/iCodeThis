const toggleBtn = document.querySelector('#btn');
const perPrice = document.querySelectorAll('.price h4');

function switchRight() {
    toggleBtn.style.left = '85px';
    for(let i = 0; i < perPrice.length; i++) {
        if(i === 0) {
            perPrice[i].textContent = '$50.99 / year';
        } else {
            perPrice[i].textContent = '$125.99 / year';
        }
    }
}

function switchLeft() {
    toggleBtn.style.left = '5px';
    for(let i = 0; i < perPrice.length; i++) {
        if(i === 0) {
            perPrice[i].textContent = '$8.99 / month';
        } else {
            perPrice[i].textContent = '$21.99 / month';
        }
    }
}

