var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var users = [];
var mailMsg = document.getElementById("mailMsg");


if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}


document.getElementById("userName").addEventListener("input", function () {
  validateName();
});
document.getElementById("userEmail").addEventListener("input", function () {
  validateEmail();
});
document.getElementById("userPass").addEventListener("input", function () {
  validatePass();
});

function validateName() {
  var regex = /^[a-z0-9_-]{3,15}$/i;
  if (regex.test(userName.value)) {
    document.getElementById("nameMsg").classList.add("d-none");
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("nameMsg").classList.remove("d-none");
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");
    return false;
  }
}

function validateEmail() {
  var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;
  if (regex.test(userEmail.value)) {
    mailMsg.innerHTML = "";
    mailMsg.classList.add("d-none");
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");

    return true;
  } else {
    mailMsg.classList.remove("d-none");
    userEmail.classList.remove("is-valid");
    userEmail.classList.add("is-invalid");
    return false;
  }
}

function validatePass() {
  var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  if (regex.test(userPass.value)) {
    document.getElementById("passMsg").classList.add("d-none");
    userPass.classList.add("is-valid");
    userPass.classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("passMsg").classList.remove("d-none");
    userPass.classList.remove("is-valid");
    userPass.classList.add("is-invalid");
    return false;
  }
}


function isExist(email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    }
  }
  return false;
}


function addUser() {
  if (validateName() && validateEmail() && validatePass()) {
    var user = {
      name: userName.value,
      email: userEmail.value,
      pass: userPass.value,
      loggedIn: 1,
    };

    if (isExist(userEmail.value)) {
      mailMsg.innerHTML = "Your email already existed, re-enter a new email";
      userEmail.classList.add("is-invalid");
      mailMsg.classList.remove("d-none");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = 'home.html'
  }
}


document.getElementById("SignBtn").addEventListener("click", function () {
  addUser();
});