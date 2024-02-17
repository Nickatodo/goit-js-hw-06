let form = document.getElementsByClassName("login-form")[0];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const {
        elements: { password, email },
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Por favor, rellene los campos.");
    }

    let datos = {
        [password.name]: password.value,
        [email.name]: email.value,
    };
    
    console.log(datos);
    e.currentTarget.reset();
});