const fontControlerEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

textEl.style.fontSize = `${fontControlerEl.value}px`

fontControlerEl.addEventListener('input', () => {
    textEl.style.fontSize = `${fontControlerEl.value}px`
})
