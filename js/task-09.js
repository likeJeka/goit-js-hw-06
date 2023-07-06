function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')
const bodyEl = document.body

buttonEl.addEventListener('click', changeColor);

function changeColor(event) {
const randomColor = getRandomHexColor()
spanEl.textContent = randomColor;
bodyEl.style.backgroundColor = randomColor;
}