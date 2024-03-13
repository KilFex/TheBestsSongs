document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('audio'); 
    
    function reproducirMusica() {
        if (audio.paused) {
            audio.play(); 
        } else {
            audio.pause(); 
        }
    }

    document.getElementById('play').addEventListener('click', reproducirMusica);
    
});
