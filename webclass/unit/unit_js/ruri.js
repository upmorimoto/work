const videoTime = document.getElementById('video');

videoTime.addEventListener('loadedmetadata', function() {
    videoTime.playbackRate = 0.5;
});