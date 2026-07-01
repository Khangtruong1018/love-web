/* ==========================================
   MUSIC PLAYLIST V1
========================================== */

const audio = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");
const prevSong = document.getElementById("prevSong");
const nextSong = document.getElementById("nextSong");
const songName = document.getElementById("songName");
const disc=document.getElementById("discImage");

/* ===========================
   DANH SÁCH NHẠC
=========================== */

/* THAY TÊN FILE NHẠC TẠI ĐÂY */

const playlist = [
    {
        name: "Có Đôi Điều",
        file: "assets/music/co-doi-dieu.mp3"
    },
    {
        name: "Kim Phút Kim Giờ",
        file: "assets/music/kim-phut-kim-gio.mp3"
    },
    {
        name: "You Belong With Me",
        file: "assets/music/you-belong-with-me.mp3"
    }
];

let currentSong = 0;
let isPlaying = false;

/* ===========================
   LOAD SONG
=========================== */

function loadSong(index){

    audio.src = playlist[index].file;

    songName.innerHTML = playlist[index].name;

}

loadSong(currentSong);

/* ===========================
   PLAY
=========================== */

function playSong(){
    disc.classList.add("playing");

    audio.play();

    isPlaying = true;

    musicButton.innerHTML = "⏸ Tạm dừng";

}

/* ===========================
   PAUSE
=========================== */

function pauseSong(){
    disc.classList.remove("playing");

    audio.pause();

    isPlaying = false;

    musicButton.innerHTML = "▶ Phát nhạc";

}

/* ===========================
   PLAY / PAUSE
=========================== */

musicButton.addEventListener("click",()=>{

    if(isPlaying){

        pauseSong();

    }else{

        playSong();

    }

});

/* ===========================
   NEXT
=========================== */

nextSong.addEventListener("click",()=>{

    currentSong++;

    if(currentSong>=playlist.length){

        currentSong=0;

    }

    loadSong(currentSong);

    playSong();

});

/* ===========================
   PREVIOUS
=========================== */

prevSong.addEventListener("click",()=>{

    currentSong--;

    if(currentSong<0){

        currentSong=playlist.length-1;

    }

    loadSong(currentSong);

    playSong();

});

/* ===========================
   AUTO NEXT
=========================== */

audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong>=playlist.length){

        currentSong=0;

    }

    loadSong(currentSong);

    playSong();

});
/* ==========================================
   PROGRESS BAR
========================================== */

const progressBar=document.getElementById("progressBar");

const songTime=document.getElementById("songTime");

audio.addEventListener("timeupdate",()=>{

const percent=(audio.currentTime/audio.duration)*100;

progressBar.style.width=percent+"%";

const current=format(audio.currentTime);

const total=format(audio.duration);

songTime.innerHTML=current+" / "+total;

});

function format(time){

if(isNaN(time)) return "00:00";

const min=Math.floor(time/60);

const sec=Math.floor(time%60);

return `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

}