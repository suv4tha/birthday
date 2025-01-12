document.addEventListener("DOMContentLoaded", () => {
    // Define the shuffleArray function here to make sure it's in scope
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    const mediaGallery = document.getElementById("media-gallery");

    // Define arrays for photos and videos
    const photos = [];
    const videos = [];

    // Populate the arrays with the correct filenames
    for (let i = 1; i <= 87; i++) {
        photos.push(`/static/media/jee${i}.jpg`); // Correct path with 'jee' instead of 'image'
    }
    for (let i = 1; i <= 21; i++) {
        videos.push(`/static/media/jee${i}.mp4`); // Correct path with 'jee' instead of 'video'
    }

    // Shuffle the arrays
    shuffleArray(photos);
    shuffleArray(videos);

    function createImage(src) {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("media-item", "image");
        return img;
    }

    function createVideo(src) {
        const video = document.createElement("video");
        video.src = src;
        video.classList.add("media-item", "video");
        video.loop = true;
        video.autoplay = true;
        video.muted = true;
        return video;
    }

    let photoIndex = 0;
    let videoIndex = 0;

    while (photoIndex < photos.length || videoIndex < videos.length) {
        for (let i = 0; i < 4 && photoIndex < photos.length; i++) {
            const img = createImage(photos[photoIndex++]);
            mediaGallery.appendChild(img);
        }
        if (videoIndex < videos.length) {
            const vid = createVideo(videos[videoIndex++]);
            mediaGallery.appendChild(vid);
        }
        console.log(photos); // Check if the correct image paths are being generated
        console.log(videos); // Check if the correct video paths are being generated
    }
});
