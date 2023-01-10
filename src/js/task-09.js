function getRandomHexColor() {
  return   `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const button = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');

button.addEventListener('click', onButton); 

function onButton(event) {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  outputColor.textContent = newColor;
} 