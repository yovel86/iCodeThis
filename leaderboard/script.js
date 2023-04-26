const images = document.querySelectorAll('.images img');
const overlay = document.querySelector('.overlay');
const switchTab = document.querySelector('.switch-tab');
const switchTabs = document.querySelectorAll('.switch-tab p');

images.forEach(img => {
  img.addEventListener('mouseover', () => {
    overlay.classList.remove('hide');
  });
  img.addEventListener('mouseleave', () => {
    overlay.classList.add('hide');
  });
}); 

switchTabs[0].addEventListener('click', () => {
  switchTab.classList.remove('toggle');
});
switchTabs[1].addEventListener('click', () => {
  switchTab.classList.add('toggle');
});