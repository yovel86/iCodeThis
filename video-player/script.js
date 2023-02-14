const video = document.querySelector('video');
const videoContainer = document.querySelector('.video-container');
const playPauseBtn = document.querySelector('.play-pause-btn');
const fullScreenBtn = document.querySelector('.screen-btn');
const miniPlayerBtn = document.querySelector('.mini-player-btn');
const audioBtn = document.querySelector('.audio-btn');
const volumeSlider = document.querySelector('.volume-slider');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const timelineContainer = document.querySelector('.timeline-container');

// Play / Pause
videoContainer.addEventListener('click', (e) => {
    if (!(e.target === fullScreenBtn || e.target === miniPlayerBtn || e.target === audioBtn || e.target === volumeSlider || e.target === timelineContainer)) {
        togglePlayPauseIcon();
        togglePlay();
    }
});

function togglePlayPauseIcon() {
    if (playPauseBtn.innerText === 'play_arrow') {
        playPauseBtn.innerText = 'pause';
    } else {
        playPauseBtn.innerText = 'play_arrow';
    }
}

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

// Fullscreen
fullScreenBtn.addEventListener('click', (e) => {
    toggleFullScreenIcon();
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

function toggleFullScreenIcon() {
    if (fullScreenBtn.innerText === 'fullscreen') {
        fullScreenBtn.innerText = 'fullscreen_exit';
    } else {
        fullScreenBtn.innerText = 'fullscreen';
    }
}

//Miniplayer 
miniPlayerBtn.addEventListener('click', () => {
    toggleMiniPlayer();
});

function toggleMiniPlayer() {
    console.log('mini player')
    if (videoContainer.classList.contains('mini-player')) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture();
    }
}

video.addEventListener('enterpictureinpicture', () => {
    videoContainer.classList.add('mini-player');
});

video.addEventListener('leavepictureinpicture', () => {
    videoContainer.classList.remove('mini-player');
});

// Volume Control
audioBtn.addEventListener('click', toggleMute);

function toggleMute() {
    video.muted = !video.muted;
}

volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value == 0;
});

video.addEventListener('volumechange', () => {
    volumeSlider.value = video.volume;
    let volumeLevel;
    if (video.muted || video.volume == 0) {
        volumeSlider.value = 0;
        volumeLevel = 'off';
    } else if (video.volume >= .5) {
        volumeLevel = 'high';
    } else {
        volumeLevel = 'down';
    }
    videoContainer.dataset.volumeLevel = volumeLevel;
});


// Duration
video.addEventListener('loadeddata', () => {
    totalTime.textContent = formatDuration(video.duration);
});

video.addEventListener('timeupdate', () => {
    currentTime.textContent = formatDuration(video.currentTime);
    const percent = video.currentTime / video.duration;
    timelineContainer.style.setProperty('--progress', percent);
});

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
});

function formatDuration(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
    } else {
        return `${hours}:${minutes}:${leadingZeroFormatter.format(seconds)}`;
    }
}

// Capture Keydown events
document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        // Play/pause if user clicks 'spacebar' or 'enter'
        case ' ':
        case 'enter':
            togglePlay();
            togglePlayPauseIcon();
            break; 
        // skip 5 seconds forwards or backwards if user clicks 'arrow' keys
        case 'arrowleft':
            skip(-5);
            break;
        case 'arrowright':
            skip(5);
            break;
    }
});

function skip(duration) {
    video.currentTime += duration ;
}

// Timeline
timelineContainer.addEventListener('mousemove', handleTimelineUpdate);

function handleTimelineUpdate(event) {
    const rect = timelineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;
    timelineContainer.style.setProperty("--preview", percent);
}

// Scrubbing
timelineContainer.addEventListener('mousedown', toggleScrubbing);

let isScrubbing = false;
let wasPaused;
function toggleScrubbing(event) {
  const rect = timelineContainer.getBoundingClientRect();
  const percent = Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;
  // console.log(percent);
  isScrubbing = (event.buttons & 0) === 1;
  videoContainer.classList.toggle('scrubbing', isScrubbing);
  if(isScrubbing) {
    wasPaused = video.paused;
    // video.pause(); 
  } else {
    video.currentTime = percent * video.duration;
    // if(!wasPaused) video.play();
  }

  handleTimelineUpdate(event);
}









