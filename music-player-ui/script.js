let songBtns = document.querySelectorAll('.song');

songBtns.forEach(song => {
  song.addEventListener('click', function() {
      songBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
  });
});