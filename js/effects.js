/* =====================================================
   LOVE WEBSITE V2
   FILE : effects.js
===================================================== */

/* ===========================
   FLOATING HEART
=========================== */

const heartContainer = document.getElementById("heartContainer");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.opacity = Math.random();

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 350);

/* ===========================
   SAKURA
=========================== */

function createSakura() {

    const sakura = document.createElement("div");

    sakura.className = "sakura";

    sakura.innerHTML = "🌸";

    sakura.style.left = Math.random() * window.innerWidth + "px";

    sakura.style.fontSize = (18 + Math.random() * 15) + "px";

    sakura.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(sakura);

    setTimeout(() => {

        sakura.remove();

    }, 12000);

}

setInterval(createSakura, 700);

/* ===========================
   CLICK HEART
=========================== */

document.addEventListener("click", function (e) {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = (18 + Math.random() * 18) + "px";

        heart.style.transition = "1.5s";

        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translate(${Math.random()*200-100}px,-${150+Math.random()*120}px)
                 rotate(${Math.random()*360}deg)
                 scale(0)`;

            heart.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            heart.remove();

        }, 1700);

    }

});

/* ===========================
   PARALLAX HERO
=========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";

    }

});

/* ===========================
   HERO FLOAT
=========================== */

const heroContent = document.querySelector(".hero-content");

let angle = 0;

setInterval(() => {

    angle += 0.02;

    if(heroContent){

        heroContent.style.transform =

            `translateY(${Math.sin(angle)*8}px)`;

    }

},30);

/* ===========================
   IMAGE HOVER GLOW
=========================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;

        const y=e.offsetY;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.9),
        white 65%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="white";

    });

});

/* ===========================
   SCROLL FADE
=========================== */

const sections=document.querySelectorAll("section");

function fadeSection(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s";

});

window.addEventListener("scroll",fadeSection);

fadeSection();

/* ===========================
   RANDOM STARS
=========================== */

function createStar(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*window.innerHeight+"px";

star.style.fontSize=(10+Math.random()*15)+"px";

star.style.opacity=".8";

star.style.pointerEvents="none";

star.style.transition="2s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="0";

star.style.transform="scale(2)";

},100);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(createStar,1800);

/*=========================================
FLOWER TRANSITION
=========================================*/

const revealSections=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

createFlowers();

}

});

},{
threshold:.3
});

revealSections.forEach(section=>{

observer.observe(section);

});

/*=========================================
FLOWER
=========================================*/

function createFlowers(){

for(let i=0;i<12;i++){

const flower=document.createElement("img");

flower.src="assets/images/flower.png";

flower.className="flower";

flower.style.left=(window.innerWidth/2)+"px";

flower.style.top=(window.innerHeight/2)+"px";

flower.style.setProperty("--x",(Math.random()*500-250)+"px");

flower.style.setProperty("--y",(Math.random()*400-200)+"px");

flower.style.transform=`rotate(${Math.random()*360}deg)`;

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},1600);

}

}

/* ===========================
   END
=========================== */
/*=========================================
FLOWER BURST V2
=========================================*/

const revealItems=document.querySelectorAll(".reveal");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

burstFlowers(entry.target);

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.35
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

function burstFlowers(target){

const rect=target.getBoundingClientRect();

const centerX=rect.left+rect.width/2;

const centerY=rect.top+rect.height/2;

for(let i=0;i<18;i++){

const flower=document.createElement("img");

flower.src="assets/images/flower.png";

flower.className="flower";

flower.style.left=centerX+"px";

flower.style.top=centerY+"px";

const angle=(Math.PI*2/18)*i;

const distance=120+Math.random()*80;

flower.style.setProperty("--x",

`${Math.cos(angle)*distance}px`);

flower.style.setProperty("--y",

`${Math.sin(angle)*distance}px`);

flower.style.setProperty("--r",

`${Math.random()*720-360}deg`);

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},1500);

}

}