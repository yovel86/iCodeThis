const cards = document.querySelector('.cards');
const prev = document.querySelector('.scroll-prev');
const next = document.querySelector('.scroll-next');

prev.addEventListener('click', () => {
  let position = cards.scrollLeft - 265;
  cards.scrollTo({
    left: position, 
    behavior: 'smooth'
  });
});

next.addEventListener('click', () => {
  let position = cards.scrollLeft + 265;
  cards.scrollTo({
    left: position, 
    behavior: 'smooth'
  });
});
