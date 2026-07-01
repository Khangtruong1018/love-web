/* =====================================================
   LOVE WEBSITE V2
   FILE : main.js
===================================================== */

/* ===========================
   PASSWORD
=========================== */

// THAY MẬT KHẨU TẠI ĐÂY

const PASSWORD = "011207";

const loading = document.getElementById("loading");
const passwordPage = document.getElementById("passwordPage");
const website = document.getElementById("website");

const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const errorText = document.getElementById("errorText");

const startBtn = document.getElementById("startBtn");
const backTop = document.getElementById("backTop");


/* ===========================
   LOADING
=========================== */

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-bar");

    let value = 0;

    const timer = setInterval(() => {

        value += 2;

        progress.style.width = value + "%";

        if (value >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                loading.style.display = "none";

            }, 300);

        }

    }, 40);

});

/* ===========================
   LOGIN
=========================== */

loginBtn.addEventListener("click", loginWebsite);

passwordInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        loginWebsite();

    }

});

function loginWebsite() {

    if (passwordInput.value === PASSWORD) {

        passwordPage.style.display = "none";

        website.style.display = "block";

    } else {

        errorText.innerHTML = "❌ Sai mật khẩu";

        passwordInput.classList.add("shake");

        setTimeout(() => {

            passwordInput.classList.remove("shake");

        }, 500);

    }

}

/* ===========================
   START BUTTON
=========================== */

startBtn.addEventListener("click", () => {

    document.querySelector("#music").scrollIntoView({

        behavior: "smooth"

    });

});

/* ===========================
   BACK TO TOP
=========================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ===========================
   COUNTDOWN
=========================== */

// THAY NGÀY BẮT ĐẦU

const startDate = new Date("2023-01-18 00:00:00");

function updateCounter() {

    const now = new Date();

    const distance = now - startDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);

    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;

    const minutes = Math.floor(distance / 1000 / 60) % 60;

    const seconds = Math.floor(distance / 1000) % 60;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

/* ===========================
   TIMELINE EFFECT
=========================== */

const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    items.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

});

/* ===========================
   TYPING EFFECT
=========================== */

const text = document.getElementById("typingText");

if(text){

const content=text.innerHTML;

text.innerHTML="";

let i=0;

function typing(){

if(i<content.length){

text.innerHTML+=content.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}

/* ==========================================
   HERO QUOTE + TYPING EFFECT
========================================== */

const quotes = [

    "Every love story is beautiful, but ours is my favorite. ❤️",

    "Cảm ơn em đã đến bên anh. 🌸",

    "Có em là điều tuyệt vời nhất trong cuộc đời anh. 💖",

    "Mỗi ngày bên em đều là một món quà. 🎁",

    "Hy vọng chúng ta sẽ cùng nhau già đi. ❤️"

];

const quoteElement = document.getElementById("randomQuote");

if (quoteElement) {

    const text = quotes[Math.floor(Math.random() * quotes.length)];

    let index = 0;

    function typingQuote() {

        if (index < text.length) {

            quoteElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typingQuote, 45);

        }

    }

    quoteElement.innerHTML = "";

    typingQuote();

}

/* ==========================================
   FADE UP SCROLL
========================================== */

const fadeItems = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

fadeItems.forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});

/* ==========================================
   LETTER ANIMATION
========================================== */

const letter = document.getElementById("letter");

if(letter){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    observer.observe(letter);

}

/*=========================================
RESTART
=========================================*/

const restartBtn=document.getElementById("restartBtn");

if(restartBtn){

restartBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* =========================================
ALBUM V3.1 PERFORMANCE
========================================= */

const TOTAL_IMAGES = 26;

let albumIndex = 1;

const albumImage = document.getElementById("albumImage");
albumImage.loading = "lazy";
albumImage.decoding = "async";
albumImage.style.transition = "opacity .3s ease";
const albumTitle = document.getElementById("albumTitle");
const albumDesc = document.getElementById("albumDesc");
const albumPage = document.getElementById("albumPage");

const albumInfo = [

{title:"Tình yêu nhỏ ❤️",desc:"Khoảnh khắc số 1"},
{title:"Nụ cười đáng yêu 🌸",desc:"Khoảnh khắc số 2"},
{title:"Bé cưng ❤️",desc:"Khoảnh khắc số 3"},
{title:"Đáng yêu quá 💖",desc:"Khoảnh khắc số 4"},
{title:"Đi chơi cùng nhau ✨",desc:"Khoảnh khắc số 5"},
{title:"Ảnh đẹp nhất ❤️",desc:"Khoảnh khắc số 6"},
{title:"Nhớ mãi 🌸",desc:"Khoảnh khắc số 7"},
{title:"Cười lên nào ❤️",desc:"Khoảnh khắc số 8"},
{title:"Yêu em 💕",desc:"Khoảnh khắc số 9"},
{title:"Happy ❤️",desc:"Khoảnh khắc số 10"},
{title:"Kỷ niệm 11",desc:"Khoảnh khắc số 11"},
{title:"Kỷ niệm 12",desc:"Khoảnh khắc số 12"},
{title:"Kỷ niệm 13",desc:"Khoảnh khắc số 13"},
{title:"Kỷ niệm 14",desc:"Khoảnh khắc số 14"},
{title:"Kỷ niệm 15",desc:"Khoảnh khắc số 15"},
{title:"Kỷ niệm 16",desc:"Khoảnh khắc số 16"},
{title:"Kỷ niệm 17",desc:"Khoảnh khắc số 17"},
{title:"Kỷ niệm 18",desc:"Khoảnh khắc số 18"},
{title:"Kỷ niệm 19",desc:"Khoảnh khắc số 19"},
{title:"Love Forever ❤️",desc:"Khoảnh khắc số 20"},

{title:"Love Forever ❤️",desc:"Khoảnh khắc số 20"},

{title:"Kỷ niệm 21 ❤️",desc:"Khoảnh khắc số 21"},

{
title:"Kỷ niệm 22 ❤️",
desc:"Khoảnh khắc số 22"
},

{
title:"Kỷ niệm 23 ❤️",
desc:"Khoảnh khắc số 23"
},

{
title:"Kỷ niệm 24 ❤️",
desc:"Khoảnh khắc số 24"
},

{
title:"Kỷ niệm 25 ❤️",
desc:"Khoảnh khắc số 25"
},

{
title:"Love Forever ❤️",
desc:"Khoảnh khắc số 26"
}

];

function loadAlbum(){

const loader = new Image();

loader.loading="lazy";

loader.decoding="async";

loader.src=`assets/images/${albumIndex}.webp`;

loader.onload = () => {

    albumImage.style.opacity = "0";

    requestAnimationFrame(() => {

        albumImage.src = loader.src;

        albumImage.decode().catch(()=>{}).finally(()=>{

            albumImage.style.opacity = "1";

        });

    });

};

albumTitle.innerHTML=albumInfo[albumIndex-1].title;

albumDesc.innerHTML=albumInfo[albumIndex-1].desc;

albumPage.innerHTML=`${albumIndex} / ${TOTAL_IMAGES}`;

preloadNext();

}

function preloadNext(){

const next=new Image();

let index=albumIndex+1;

if(index>TOTAL_IMAGES){

index=1;

}

next.src=`assets/images/${index}.webp`;

}

document.getElementById("nextPhoto").onclick=()=>{

albumIndex++;

if(albumIndex>TOTAL_IMAGES){

albumIndex=1;

}

loadAlbum();

};

document.getElementById("prevPhoto").onclick=()=>{

albumIndex--;

if(albumIndex<1){

albumIndex=TOTAL_IMAGES;

}

loadAlbum();

};

loadAlbum();

/*=========================================
LIGHTBOX
=========================================*/

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const closeLightbox=document.getElementById("closeLightbox");

albumImage.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=albumImage.src;

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

/*=========================================
SWIPE
=========================================*/

let startX=0;

albumImage.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

albumImage.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>60){

document.getElementById("nextPhoto").click();

}

if(endX-startX>60){

document.getElementById("prevPhoto").click();

}

});

/* ===========================
   END
=========================== */