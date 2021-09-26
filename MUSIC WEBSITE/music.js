alert("Welcome to the Music Website!");
var Song = document.getElementById("Song");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(Song.paused){
        Song.play();
        icon.src = "media/294-2944357_play-video-icon-pause-video-icon-pause-button.png"
    }
    else{
        Song.pause();
        icon.src = "media/play-icon-png-6.png"
    }
}