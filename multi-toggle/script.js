const interests = document.querySelectorAll('.interest');

interests.forEach((interest, i) => {
  interest.addEventListener('click', () => {
    interest.classList.toggle('selected');
  });
});