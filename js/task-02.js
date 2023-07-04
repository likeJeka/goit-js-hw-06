const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
console.log(ul);

const massive = [];

ingredients.forEach((el) => {
    const newLiElement = document.createElement('li')
    newLiElement.textContent = el;
    console.log(newLiElement);
    massive.push(newLiElement)
    newLiElement.classList.add('item')
})

ul.append(...massive)



