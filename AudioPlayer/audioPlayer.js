document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("playPause");
    const stopButton = document.getElementById("stop");
    const volumeUpButton = document.getElementById("volumeUp");
    const volumeDownButton = document.getElementById("volumeDown");

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = "Pause";
        } else {
            audio.pause();
            playPauseButton.innerHTML = "Play";
        }
    });

    stopButton.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.innerHTML = "Play";
    });

    volumeUpButton.addEventListener("click", function () {
        if (audio.volume < 1.0) {
            audio.volume += 0.1;
        }
    });

    volumeDownButton.addEventListener("click", function () {
        if (audio.volume > 0.0) {
            audio.volume -= 0.1;
        }
    });
});
