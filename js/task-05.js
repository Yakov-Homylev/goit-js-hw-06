const inputEl = document.querySelector('#name-input')
const outputUserNameEl = document.querySelector('#name-output')


inputEl.addEventListener("input", () => {
    outputUserNameEl.textContent = inputEl.value;

    if (outputUserNameEl.textContent === "") {
        outputUserNameEl.textContent = "Anonymous"
    }
})