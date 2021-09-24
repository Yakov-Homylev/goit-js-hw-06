const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validValue)

function validValue() {
    if (this.value.length == this.dataset.length) {
        this.classList.add('valid')
        this.classList.remove('invalid')
    } else {
        this.classList.add('invalid')
        this.classList.remove('valid')
    }
}