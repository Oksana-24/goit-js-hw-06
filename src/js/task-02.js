const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
console.dir(list);
let markup = '';
for (let i = 0; i< ingredients.length; i+=1) {
  markup += `<li class="item">${ingredients[i]}</li>`;
}
list.insertAdjacentHTML('beforeend', markup);