let input = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

input.addEventListener("input", (e) => { 
    text.style.fontSize = e.target.value + "px";
});
