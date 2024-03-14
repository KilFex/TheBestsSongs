document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPausa');
    const nextButton = document.getElementById('siguiente');
    const prevButton = document.getElementById('anterior');
    
    let currentTrack = 0;
    const tracks = document.querySelectorAll('source');
  
    function playPause() {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<img src="./icons/Pause_fill.svg" />';
      } else {
        audio.pause();
        playPauseButton.innerHTML = '<img src="./icons/Play_fill.svg" />';
      }
    }
  
    function nextTrack() {
      currentTrack = (currentTrack + 1) % tracks.length;
      audio.src = tracks[currentTrack].src;
      audio.play();
      playPauseButton.innerHTML = '<img src="./icons/Pause_fill.svg" />';
    }
  
    function prevTrack() {
      currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
      audio.src = tracks[currentTrack].src;
      audio.play();
      playPauseButton.innerHTML = '<img src="./icons/Pause_fill.svg" />';
    }
  
    playPauseButton.addEventListener('click', playPause);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);
  });
  