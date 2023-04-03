const container    = document.querySelector('.container');
const sizeCards    = document.querySelectorAll('.size-card');
const place        = document.querySelector('.info .place span');
const size         = document.querySelector('.info .size span');
const successMsg   = document.querySelector('.success-msg');
const continuteBtn = document.querySelector('.container button');

sizeCards.forEach((card) => {
  card.addEventListener('click', () => {
    sizeCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
})

continuteBtn.addEventListener('click', () => {
  const selectedPlace = document.querySelector('.options input[type="radio"]:checked');
  const selectedSize  = document.querySelector('.size-card input[type="radio"]:checked');
  container.classList.add('hide');
  successMsg.classList.remove('hide');
  place.textContent        = selectedPlace.value;
  size.textContent = selectedSize.value + " people";
});

