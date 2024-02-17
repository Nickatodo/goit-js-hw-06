let counterValue = 0;
let counter = document.getElementById("value");
let buttons = document.getElementsByTagName("button");

for (let index = 0; index < buttons.length; index++) {
    
    buttons[index].addEventListener("click", (e) => {

        if (e.target.attributes["data-action"].value == "increment") {
            counterValue = counterValue + 1;
        } else {
            counterValue = counterValue - 1;
        }
        counter.textContent = `${counterValue}`;
    });
}