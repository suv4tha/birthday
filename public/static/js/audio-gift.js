document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const playButtons = document.querySelectorAll(".play-btn");
    const nowPlayingSection = document.querySelector(".now-playing");
    const nowPlayingImage = nowPlayingSection.querySelector(".now-playing-image img");
    const nowPlayingTitle = nowPlayingSection.querySelector(".now-playing-title");
    const nowPlayingArtist = nowPlayingSection.querySelector(".now-playing-artist");
    const nowPlayingPauseButton = nowPlayingSection.querySelector(".now-playing-pause-btn");
    const progressBar = document.getElementById("song-progress");

    playButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const songElement = event.target.closest(".song");
            const audioSrc = songElement.getAttribute("data-audio");
            const songTitle = songElement.querySelector(".song-title").textContent;
            const songArtist = songElement.querySelector(".song-artist").textContent;
            const songImage = songElement.querySelector(".song-image img").src;

            if (audioPlayer.src !== location.origin + audioSrc) {
                audioPlayer.src = audioSrc;
                audioPlayer.play();
                updateNowPlaying(songTitle, songArtist, songImage);
                resetPlayIcons();
                button.innerHTML = '<i class="fas fa-pause"></i>';
                nowPlayingSection.style.display = "flex"; // Show Now Playing section
            } else if (audioPlayer.paused) {
                audioPlayer.play();
                button.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioPlayer.pause();
                button.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });

    // Update the Now Playing section with song details
    function updateNowPlaying(title, artist, imageSrc) {
        nowPlayingTitle.textContent = title;
        nowPlayingArtist.textContent = artist;
        nowPlayingImage.src = imageSrc;
    }

    // Reset all play buttons to play icon
    function resetPlayIcons() {
        playButtons.forEach((btn) => (btn.innerHTML = '<i class="fas fa-play"></i>'));
    }

    // Handle the Pause button in the Now Playing section
    nowPlayingPauseButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            nowPlayingPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            nowPlayingPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Handle the progress bar update
    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    });

    // Allow user to click or drag on the progress bar to seek
    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Handle audio player pause and update the icon accordingly
    audioPlayer.addEventListener("pause", () => {
        nowPlayingPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    });

    audioPlayer.addEventListener("play", () => {
        nowPlayingPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    });
});
document.getElementById("next-button").addEventListener("click", () => {
    // Example action: Navigate to the next page
    window.location.href = "next-page.html";
});

