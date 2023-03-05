const headings = document.querySelectorAll('.heading');
const icons = document.querySelectorAll('.heading span');
const menuSub = document.querySelector('.menu-sub');

headings[2].addEventListener('click', () => {
  if(icons[2].textContent === 'expand_more') {
    menuSub.style.display = 'grid';
    icons[2].textContent = 'expand_less';
    headings[2].classList.add('active');
  } else {
    menuSub.style.display = 'none';
    icons[2].textContent = 'expand_more';
    headings[2].classList.remove('active');
  }
});


























