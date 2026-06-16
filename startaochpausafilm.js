function togglePlay(video) {
  if (video.paused) {
    video.play();
    syncMenyLjud(true);
  } else {
    video.pause();
    syncMenyLjud(false);
  }
}
