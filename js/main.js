let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var secondImage = document.querySelector(".second-img");
var div = document.querySelector(".second-section div:nth-of-type(2)")
var div2 = document.querySelector(".second-section div:nth-of-type(1)")
var backButton = document.querySelector(".second-section button")

secondImage.addEventListener("click", function(){
    secondImage.classList.add("full-image")
    div.classList.add('animate')
    div2.classList.add('appear')
    backButton.classList.add("show")
})
backButton.addEventListener('click', function(){
    secondImage.classList.remove("full-image")
    div.classList.remove('animate')
    div2.classList.remove('appear')
    backButton.classList.remove("show")
})

console.log(window.innerWidth)


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });