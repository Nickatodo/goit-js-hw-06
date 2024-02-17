let validation = document.querySelector("#validation-input");

validation.addEventListener("blur", (e) => {

    if (e.target.value.length >= e.target.attributes["data-length"].value) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
    } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
    }
    
});