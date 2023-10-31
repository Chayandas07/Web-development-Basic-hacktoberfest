function checkPassword() {
    var password = document.getElementById("password").value;
    var resultElement = document.getElementById("result");
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (password.match(strongRegex)) {
        resultElement.textContent = "Strong: Password is secure.";
        resultElement.className = "result-strong";
    } else {
        resultElement.textContent = "Weak: Password should contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.";
        resultElement.className = "result-weak";
    }
}
