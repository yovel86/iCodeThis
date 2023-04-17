const items = document.querySelectorAll('.item');

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});