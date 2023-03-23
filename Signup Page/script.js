function validatePassword (origin) {
    const pass = document.querySelector("#password");
    const confPass = document.querySelector("#confirm_password");
    const validity = pass.value === confPass.value ? "" : "*Passwords must match";
    pass.setCustomValidity(validity);
    confPass.setCustomValidity(validity);
    origin.reportValidity();
}
