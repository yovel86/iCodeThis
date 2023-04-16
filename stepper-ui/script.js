const progress = document.querySelector('.progress');
const details = document.querySelector('.content p');
const heading = document.querySelector('.content h2');
const stepperIcons = document.querySelectorAll('.stepper div');

stepperIcons.forEach((icon, i) => {
  icon.addEventListener('click', () => {
    stepperIcons.forEach(s => s.classList.remove('active'));
    for(let j = 0; j <= i; j++) {
      stepperIcons[j].classList.add('active');
    }
    if(i === 0) {
      progress.style.background = 'linear-gradient(to right, #d7dce8 50%, #d7dce8 50%)';
      details.textContent = 'Turn your data into informative dashboards and reports that are easy to read, easy to share, and fully customizable. Data Studio allows you to tell great data stories to support better business decisions';
      heading.textContent = 'Welcome Data Studio';
    } else if(i === 1) {
      progress.style.background = 'linear-gradient(to right, #7b90fd 50%, #d7dce8 50%)';
      heading.textContent = 'Next Steps';
      details.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque nobis explicabo, excepturi natus quidem tenetur expedita ratione fugit beatae.';
    } else {
      progress.style.background = 'linear-gradient(to right, #7b90fd 50%, #7b90f4 50%)';
      heading.textContent = 'All steps are finished!';
      details.textContent = '';
    }
  });
});
