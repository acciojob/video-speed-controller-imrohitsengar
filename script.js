const video = document.querySelector('.flex');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progressFilled = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');


// 1. Play / Pause
toggle.addEventListener('click', function () {

    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }

});


// 2. Volume
volume.addEventListener('input', function () {

    video.volume = Number(this.value);

});


// 3. Playback Speed
playbackSpeed.addEventListener('input', function () {

    video.playbackRate = Number(this.value);

});


// 4. Rewind / Forward
skipButtons.forEach(function (button) {

    button.addEventListener('click', function () {

        video.currentTime += Number(this.dataset.skip);

    });

});


// 5. Progress Bar
video.addEventListener('timeupdate', function () {

    const percent = (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percent}%`;

});
