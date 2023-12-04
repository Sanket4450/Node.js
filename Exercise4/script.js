let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');

function verifyPassword() {
    if (password.value.length < 8) {
        password.setCustomValidity("**Password length must be atleast 8 characters");
    }
    else {
        password.setCustomValidity("");
    }
}

function validatePassword() {
    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("**Password doesn't match");
    }
    else {
        confirm_password.setCustomValidity("");
    }
}