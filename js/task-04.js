const btnIncrementEl = document.querySelector('[data-action="increment"]')
const btnDecrementEl = document.querySelector('[data-action="decrement"]')
const counterValueEl = document.querySelector('#value')

let counterValue = 0

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
})