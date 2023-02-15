const colorBoxes = document.querySelectorAll('.color');
const hexNames = document.querySelectorAll('.hexName');
const generateBtn = document.querySelector('.generate-btn button');
const alertBox = document.querySelector('.alert > div');
const alertFullText = document.querySelector('.alert-text');
const alertText = document.querySelector('.alert-text span');
const alertCloseBtn = document.querySelector('.icon');

let hexColors = [];

generateColors();
addEventListenersToColorBoxes();

function generateColors() {
    for (let i = 0; i < colorBoxes.length; i++) {
        let hex = ("#" + generateRandomHexColor()).toUpperCase();
        colorBoxes[i].style.backgroundColor = hex;
        hexNames[i].textContent = hex;
        if(hexColors.length >= colorBoxes.length) {
            hexColors = [];
        }
        hexColors.push(hex);
    }
    console.log(hexColors);
    addEventListenersToColorBoxes();
};

function generateRandomHexColor() {
    return [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
};

generateBtn.addEventListener('click', () => {
    generateColors();
});

function addEventListenersToColorBoxes() {
    for (let i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].addEventListener('click', function() {
            let color = hexColors[i];
            alertBox.classList.remove('hide');
            alertBox.classList.add('show');
            alertFullText.innerText = `Color ${color} is copied to your clipboard!`
            setTimeout(() => {
                alertBox.classList.remove('show');
                alertBox.classList.add('hide');
            }, 5000);
            navigator.clipboard.writeText(color);
        });
    }
}

alertCloseBtn.addEventListener('click', () => {
    alertBox.classList.remove('show');
    alertBox.classList.add('hide');
});

document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'c':
        case 'C':
            copyWholePalette();
    }
});

function copyWholePalette() {
    navigator.clipboard.writeText(hexColors);
    alertFullText.textContent = 'Copied the Whole Color Palette!';
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
    }, 5000);
}




