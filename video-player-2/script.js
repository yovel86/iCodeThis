const video = document.querySelector('video');
const playBtn = document.querySelector('.play');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const fullScreenBtn = document.querySelector('.fullscreen');
const msg = document.querySelector('.msg');
const msgIcon = document.querySelector('.msg div span');
const volume = document.querySelector('.audio span');

// Play/Pause controls
document.body.onkeyup = (e) => {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    togglePlay();
  }
}

// Forward/Backward controls
document.body.onkeydown = (e) => {
  if(e.keyCode == 37) backwardTenSecs();
  else if(e.keyCode == 39) forwardTenSecs();
}

// Fullscreen
fullScreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement == null) {
      video.requestFullscreen();
  } else {
      document.exitFullscreen();
  }
});

// Volume 
volume.addEventListener('click', () => {
  if(video.muted) {
    video.muted = false;
    volume.textContent = 'volume_up';
  } else {
    video.muted = true;
    volume.textContent = 'volume_off';
  }
});

function togglePlay() {
  if(playBtn.textContent == 'play_arrow') {
    playBtn.textContent = 'pause';
    video.play();
  } else {
    playBtn.textContent = 'play_arrow';
    video.pause();
  }
}

function forwardTenSecs() {
  video.currentTime = video.currentTime + 10;
  msg.style.display = 'grid';
  msgIcon.textContent = 'fast_forward';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 1000);
}

function backwardTenSecs() {
  video.currentTime = video.currentTime - 10;
  msg.style.display = 'grid';
  msgIcon.textContent = 'fast_rewind';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 1000);
}