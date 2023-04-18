const stars = document.querySelectorAll('.stars span');

stars.forEach((star, i) => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('selected'));
    for(let j = 0; j <= i; j++) {
      stars[j].textContent = 'star';
      stars[j].classList.add('selected');
    }
    for(k = ++i; k < stars.length; k++) {
      stars[k].textContent = 'star_outline';
      stars[k].classList.remove('selected');
    }
  });
});