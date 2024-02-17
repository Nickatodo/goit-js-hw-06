let categorias = document.querySelectorAll(".item");
console.log("Number of categories: " + categorias.length);

let lista = document.querySelectorAll("#categories > li");
let listArray = [];

lista.forEach(element => {
    console.log(
        `Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`,
    );
});