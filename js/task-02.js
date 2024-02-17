const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ul = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) { 

  let li = document.createElement("li");

  li.textContent = ingredient;

  li.classList.add("item");

  ul.append(li);
})