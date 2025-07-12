function playMovie(videoPath) {
  const modal = document.getElementById("movieModal");
  const player = document.getElementById("moviePlayer");
  player.src = videoPath;
  modal.style.display = "flex";
  player.play();
}

function closeMovie() {
  const modal = document.getElementById("movieModal");
  const player = document.getElementById("moviePlayer");
  player.pause();
  player.currentTime = 0;
  modal.style.display = "none";
}
