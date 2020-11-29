const buttons = document.querySelectorAll('.butao')
//const slides = document.querySelectorAll('.carrousel-items img').length
const slides = document.querySelectorAll('.slider-item').length

console.log(slides)

let currentSlide = 0;

document.querySelector(
  ".carrousel-items"
).style.width = `calc(100vw * ${slides})`;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateMargin(index);
  })
})

function updateMargin(index) {
  let newMargin = index * document.body.clientWidth;
  document.querySelector(".carrousel-container").style.marginLeft = `-${newMargin}px`;
}

//-----------------------------------------------

window.addEventListener('scroll', function() {
  const underNav = document.querySelector('.under-nav')
  const topNav = document.querySelector('.nav-desktop')

  underNav.classList.toggle('sticky' , window.scrollY > 0)
  topNav.classList.toggle('sticky-top' , window.scrollY > 0)
})

//--------------------------------------------

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector('.under-nav')

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
