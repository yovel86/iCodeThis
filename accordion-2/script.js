const items = document.querySelectorAll('.item');
const details = document.querySelectorAll('.desc');

let currentActive = 1;
items.forEach((item, i) => {
  item.addEventListener('click', () => {
    items.forEach((i, ind) => { 
      i.classList.remove('bg');
      details[ind].classList.remove('slide');
    })
    if(currentActive == i) {
      item.classList.remove('bg');
      details[i].classList.remove('slide');  
      currentActive = -1; 
    } else {
      item.classList.add('bg');
      details[i].classList.add('slide');
      currentActive = i;
    }
  });
});