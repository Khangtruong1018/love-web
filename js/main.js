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

/* ===========================
   END
=========================== */