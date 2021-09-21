function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const boxesDivEl = document.querySelector('#boxes')

const valueEl = controlsEl.children[0]
const btnCreateEl = controlsEl.children[1]
const btnDeleteEl = controlsEl.children[2]

btnCreateEl.addEventListener('click', createBoxes)
btnDeleteEl.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = valueEl.value
  let divArray = [];
  let divWidth = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i += 1, divWidth += 10, divHeight += 10) {
    const newDivEl = document.createElement('div')
    newDivEl.style.width = `${divWidth}px`
    newDivEl.style.height = `${divHeight}px`
    newDivEl.style.backgroundColor = `${getRandomHexColor()}`
    divArray.push(newDivEl)
  }

  boxesDivEl.append(...divArray)
}

function destroyBoxes() {
  boxesDivEl.innerHTML = ''
}