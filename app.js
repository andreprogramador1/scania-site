const buttons = document.querySelectorAll('.butao')
const slides = document.querySelectorAll('.carrousel-items img').length

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
  document.querySelector(".carrousel-items").style.marginLeft = `-${newMargin}px`;
}
