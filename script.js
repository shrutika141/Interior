var cross = document.querySelector('span');
var login = document.querySelector('#login');
var tl = gsap.timeline();


cross.addEventListener('click', function(){
    login.style.display = "none";
});

tl.from(".st", {
    stagger: .2,
    duration: 2,
    opacity: 0,
    x: 30,
    ease: "Expo.easeInOut",
})
.from('#left h3', {
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1,
}, '-=2')
.from('#left button', {
    y:30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1,
}, '-=1')
.from('.img', {
    stagger: .2,
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1,
}, '-=1')
.from('.box h3', {
    stagger: .2,
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1,
}, '-=1')
.from('.box button', {
    stagger: .2,
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1,
}, '-=1')