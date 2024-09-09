const img = document.getElementsByClassName("image");
let isFullscreen = false;

img.onclick = function () {
  if (!isFullscreen) {
    img.classList.add("fullscreen"); // Add fullscreen class on click
    isFullscreen = true;
  } else {
    img.classList.remove("fullscreen"); // Remove fullscreen class to exit
    isFullscreen = false;
  }
};
