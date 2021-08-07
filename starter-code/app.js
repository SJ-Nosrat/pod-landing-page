const emailField = document.getElementById("e-mail");
const button = document.getElementById("button");
const response = document.getElementById("response");

clearField();

function clearField() {
    emailField.value = '';
}

button.addEventListener("click", function () {
    const email = emailField.value.trim();
    if (!validateEmail(email)) {
        addMsg(email, "Oops! Please check your email");
    } else {
        addMsg(email, "");
    }
});

function addMsg(input, msg) {
    response.innerHTML = msg;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}