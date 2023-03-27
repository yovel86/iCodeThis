const container = document.querySelector('.container');
const cart      = document.querySelector('.cart');

cart.addEventListener('click', () => {
  container.classList.toggle('hide');
});