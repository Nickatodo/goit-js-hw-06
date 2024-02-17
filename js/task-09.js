function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let body = document.querySelector("body");
let colorText = document.querySelector(".color");
let button = document.querySelector(".change-color");

console.log(getRandomHexColor());

button.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
});