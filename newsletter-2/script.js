const items = document.querySelectorAll('.item');
const inputs = document.querySelectorAll('.item label input');

items.forEach((item,i) => {
  item.addEventListener('click', () => {  
    inputs[i].toggleAttribute('checked');
  });
})