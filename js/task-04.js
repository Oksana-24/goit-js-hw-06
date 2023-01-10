const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
let counter = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrement);

function onDecrement() {
    counter -= 1;
    counterValue.textContent = counter;
}
incrementBtn.addEventListener('click', onIncrement);

function onIncrement() {
    counter += 1;
    counterValue.textContent = counter;
}