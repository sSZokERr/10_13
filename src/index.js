"use strict";
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let userRegExp = /^[A-Za-z0-9.]+$/;
let passRegExp = /^[A-Za-z0-9_.-]+$/;
let checkEmail = (email) => {
    return String(email).toLowerCase().match(emailRegExp);
};
let checkUser = (user) => {
    return String(user).toLowerCase().match(userRegExp);
};
let checkPass = (pass) => {
    return String(pass).match(passRegExp);
};
let err = false;
function register() {
    if (!err) {
        alert('Sikeres regisztráció');
    }
    else {
        alert('Hibás regisztráció!\nPróbáld újra');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    let username = document.getElementById("username");
    username.addEventListener('change', () => {
        if (username.value.length > 30 || username.value.length < 6 || !checkUser(username.value)) {
            err = true;
            document.getElementById('userErr').innerText = 'Hibás felhasználó név';
        }
        else {
            err = false;
            document.getElementById('userErr').innerText = '';
        }
        console.log(checkUser(username.value));
    });
    let email = document.getElementById("email");
    email.addEventListener('change', () => {
        if (!checkEmail(email.value)) {
            err = true;
            document.getElementById('emailErr').innerText = 'Hibás e-mail';
        }
        else {
            err = false;
            document.getElementById('emailErr').innerText = '';
        }
        console.log(checkUser(email.value));
    });
    let password = document.getElementById("password");
    password.addEventListener('change', () => {
        if (!checkPass(password.value) || password.value.length > 10 || password.value.length < 5) {
            err = true;
            document.getElementById('passErr').innerText = 'Hibás jelszó';
        }
        else {
            err = false;
            document.getElementById('passErr').innerText = '';
        }
        console.log(checkUser(password.value));
    });
    let rePassword = document.getElementById('repassword');
    rePassword.addEventListener('change', () => {
        if (rePassword.value != password.value) {
            err = true;
            document.getElementById('repassErr').innerText = 'A jelszavak nem egyeznek';
        }
        else {
            err = false;
            document.getElementById('repassErr').innerText = '';
        }
        console.log(rePassword.value);
    });
    (_a = document.getElementById("register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", register);
});
