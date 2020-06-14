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
    secondImage.src= "images/full-width.png"   
    div.classList.add('full-width')
    div2.classList.add('appear')
    backButton.classList.add("show")
})
backButton.addEventListener('click', function(){
    secondImage.src= "images/first.png"
    div.classList.remove('full-width')
    div2.classList.remove('appear')
    backButton.classList.remove("show")
})