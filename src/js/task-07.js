const input = document.querySelector('#font-size-control');

const output = document.querySelector('#text');

input.addEventListener('input', onInput);

function onInput() {
    output.style.fontSize = `${input.value}px`; 
}
