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
var img = document.querySelector('.second-img')

secondImage.addEventListener("click", function(){
    img.classList.add("full-image")
    div.classList.add('animate')
    div2.classList.add('appear')
    backButton.classList.add("show")
})
backButton.addEventListener('click', function(){
    img.classList.remove("full-image")
    div.classList.remove('animate')
    div2.classList.remove('appear')
    backButton.classList.remove("show")
})