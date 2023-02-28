const cards = document.querySelectorAll('.card');

const firstCard = Array.from(cards)[0];
const secondCard = Array.from(cards)[1];
const thirdCard = Array.from(cards)[2];

secondCard.addEventListener('click', () => {
    firstCard.style.top = '10px';
    firstCard.style.left = '-380px';
    firstCard.style.zIndex = 1;

    secondCard.style.background = "#17141d80";

    thirdCard.style.top = '10px';
    thirdCard.style.right = '-380px';
    thirdCard.style.zIndex = 1;
});