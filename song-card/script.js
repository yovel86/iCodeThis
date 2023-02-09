const playBtn = document.querySelector('.icon');

playBtn.addEventListener('click', () => {
    playBtn.innerText = playBtn.innerText === 'play_arrow' ? 'pause' : 'play_arrow';
});