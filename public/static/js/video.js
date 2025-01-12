window.onload = function() {
    // Select all video elements
    const videos = document.querySelectorAll("video");

    // Add event listener for each video
    videos.forEach(video => {
        // Play video when clicked
        video.addEventListener("click", function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
};
