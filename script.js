/*get elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*build functions*/
/*play or pause video function based on player button toggle*/
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	console.log('video pause or play?: ', method);
	video[method]();
}

/*show play or pause button, based on state of pause event*/
function updateButton() {
	console.log('update play/pause button');
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

/*skip video by set times. Use parseFloat to convert string to number*/
function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

/*apply volume and playback rate changes to video property*/
function handleRangeUpdate() {
	video[this.name] = this.value;
}

/*show progress bar percentage*/
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

/*listen for click and work out new video play position using offset values*/
function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

/*add event listeners*/
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) =>
	range.addEventListener('mousemove', handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
