let inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");

inputName.addEventListener("change", (e) => {
    outputName.textContent = e.target.value;
});