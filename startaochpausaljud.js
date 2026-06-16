let isMuted = false;

function syncMenyLjud(playing) {
  const audio = document.getElementById("audioFile");
  if (!audio) return;

  if (playing) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggleMute() {
  const audio = document.getElementById("audioFile");
  const icon = document.getElementById("muteIcon");
  const text = document.getElementById("muteText");
  if (!audio) return;

  isMuted = !isMuted;
  audio.muted = isMuted;

  if (icon) {
    icon.className = isMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
  }
  if (text) {
    text.textContent = isMuted ? "Slå på ljud" : "Tysta ljud";
  }
}







  const windSound = document.getElementById("windSound");
  const windToggle = document.getElementById("windToggle");

  windToggle.addEventListener("click", () => {
    windSound.muted = !windSound.muted;
    windToggle.textContent = windSound.muted ? "🔇 Slå på vind" : "🔊 Stäng av vind";
  });
