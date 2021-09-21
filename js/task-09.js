function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameEl = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', changerColor)

function changerColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameEl.innerHTML = `${getRandomHexColor()}`
}
