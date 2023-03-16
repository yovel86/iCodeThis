const titles = document.querySelectorAll('.card .title');
const accordions = document.querySelectorAll('.card .title');
const span = document.querySelectorAll('.card .title span');
const details = document.querySelectorAll('.card .details');

accordions.forEach((accordion, i) => {
  accordion.addEventListener('click', () => {
    span[i].textContent = span[i].textContent === 'add' ? 'remove' : 'add';
    details[i].classList.toggle('active');
    if(titles[i].style.color == 'rgb(51, 51, 51)') {
      titles[i].style.color = 'rgb(169, 169, 181)';
    } else {
      titles[i].style.color  = 'rgb(51, 51, 51)';
    }
  });
}); 