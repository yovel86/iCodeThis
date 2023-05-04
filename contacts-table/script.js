const rows = document.querySelectorAll('tbody tr');
const activeRow = document.querySelector('.active');

rows.forEach(row => {
  row.addEventListener('mouseover', () => {
    activeRow.classList.remove('active');
  });
})