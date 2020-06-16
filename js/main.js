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
var glases = document.querySelector("#Layer_2")
var logo = document.querySelector(".logo")
var footer = document.querySelector("footer")

secondImage.addEventListener("click", function(){
    logo.classList.add("hide")
    glases.classList.add("hide")
    footer.classList.add("hide")
    secondImage.classList.add("full-image")
    div.classList.add('animate')
    div2.classList.add('appear')
    backButton.classList.add("show")
})
backButton.addEventListener('click', function(){
    logo.classList.remove("hide")
    glases.classList.remove("hide")
    footer.classList.remove("hide")
    secondImage.classList.remove("full-image")
    div.classList.remove('animate')
    div2.classList.remove('appear')
    backButton.classList.remove("show")
})

var thirdImage = document.querySelector(".third-img")
var backButton2 = document.querySelector(".third-btn")
var balerina = document.querySelector(".ballet")
var div3 = document.querySelector(".dream div:nth-of-type(2)")
var div4 = document.querySelector(".dream div:nth-of-type(1)")
var thirdH2 = document.querySelector(".third-h2")

thirdImage.addEventListener("click", function(){
    logo.classList.add("hide")
    glases.classList.add("hide")
    footer.classList.add("hide")
    thirdImage.classList.add("full-image")
    balerina.src="images/balerina.gif"
    balerina.classList.add("balerina")
    thirdH2.classList.add("third-h2-open")
    div3.classList.add('animate')
    div4.classList.add('appear')
    backButton2.classList.add("show")
})
backButton2.addEventListener('click', function(){
    logo.classList.remove("hide")
    glases.classList.remove("hide")
    footer.classList.remove("hide")
    thirdImage.classList.remove("full-image")
    balerina.src="images/ballet.png"
    balerina.classList.remove("balerina")
    thirdH2.classList.remove("third-h2-open")
    div3.classList.remove('animate')
    div4.classList.remove('appear')
    backButton2.classList.remove("show")
})

console.log(window.innerWidth)



var cotonImage = document.querySelector(".coton-girl")
var backButtonCoton = document.querySelector(".coton button")
var div5 = document.querySelector(".coton div:nth-of-type(2)")
var div6 = document.querySelector(".coton div:nth-of-type(1)")
var sectionCoton = document.querySelector(".coton")

cotonImage.addEventListener("click", function(){
    logo.classList.add("hide")
    glases.classList.add("hide")
    footer.classList.add("hide")
    sectionCoton.classList.add('background-coton')
    div5.classList.add('animate')
    div6.classList.add('appear')
    backButtonCoton.classList.add("show")
})
backButtonCoton.addEventListener('click', function(){
    logo.classList.remove("hide")
    glases.classList.remove("hide")
    footer.classList.remove("hide")
    sectionCoton.classList.remove('background-coton')
    div5.classList.remove('animate')
    div6.classList.remove('appear')
    backButtonCoton.classList.remove("show")
})

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