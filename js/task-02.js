const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsItemElArray = ingredients.map(ingridient => {
  const ingridientEl = document.createElement('li')
  ingridientEl.classList.add('item')
  ingridientEl.textContent = ingridient;
  return ingridientEl;
});

const ingridientsListEl = document.querySelector('#ingredients')

ingridientsListEl.append(...ingridientsItemElArray);