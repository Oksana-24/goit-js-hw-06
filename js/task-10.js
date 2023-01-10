function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const input =document.querySelector('input')

createBtn.addEventListener('click', onCreate);
let markup = '';
function onCreate(event) {
  for (let i = 0; i < Number(input.textContent.length); i += 1) {
    markup += `<div></div>`
  }
  boxes.insertAdjacentHTML('beforeend', markup);
}

destroyBtn.addEventListener('click', onDestroy);

function onDestroy(event) {
  markup.innerHTML = '';
}
console.dir(Number(input.textContent.length))