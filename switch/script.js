const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const input = document.querySelector('.switch input');
const slider = document.querySelector('.slider');
const icon = document.querySelector('.icon span');

input.addEventListener('change', () => {
    if (input.checked) {
        body.style.background = '#222';
        slider.style.background = '#222';
        slider.style.boxShadow = 'inset 2px 2px 2px #000, 0px 1px 1px #333';
        icon.style.outline = '10px solid #df2a5dd6';
        icon.style.background = '#222';
        icon.style.color = '#fff';
        icon.textContent = 'dark_mode';
        h1.style.color = '#eee';
        h1.textContent = '🕯️';
        h1.style.textShadow = '0 0 10px #df2a5d';
    } else {
        body.style.background = '#fff';
        slider.style.background = '#ccc';
        slider.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3) inset';
        icon.style.outline = '10px solid #4f4f4f';
        icon.style.background = '#fff';
        icon.style.color = '#ffbf00';
        icon.textContent = 'light_mode';
        h1.style.color = '#4f4f4f';
        h1.textContent = '💡';
        h1.style.textShadow = '0 0 30px #ffbf00';
    }
});