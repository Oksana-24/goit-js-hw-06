const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInput);

function onInput() {
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}