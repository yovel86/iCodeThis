const container = document.querySelector('.container');
const button    = document.querySelector('button');
const popup     = document.querySelector('.popup');

button.addEventListener('click', () => {
  let amt;
  const value = document.querySelector('input[type="text"]').value;
  console.log(value);
  if(value !== '') {
    amt = value;
  } else {
    amt = document.querySelector("input[type='radio']:checked").value;
  }
  container.classList.add('hide');
  popup.classList.remove('hide');
  popup.textContent = `Thanks for your ${amt}$ donation!`;
});