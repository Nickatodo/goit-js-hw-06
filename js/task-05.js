let inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");

inputName.addEventListener("keyup", (e) => {
    outputName.textContent = e.currentTarget.value;
});