var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var users = [];
var mailMsg = document.getElementById("mailMsg");

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
}

document.addEventListener("DOMContentLoaded", function () {
  userIsLoggedIn();
});

document.getElementById("loginBtn").addEventListener("click", function () {
  loginUser();
});

document.getElementById("userEmail").addEventListener("input", function () {
  validateEmail();
});
document.getElementById("userPass").addEventListener("input", function () {
  validatePass();
});



function userIsLoggedIn() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].loggedIn === 1) {
      window.location.href = "html/home.html";
    }
  }
}


function validateEmail() {
  document.getElementById("loginMsg").classList.add("d-none");
  
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
  document.getElementById("loginMsg").classList.add("d-none");

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

function isExist(email, pass) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].pass === pass) {
      users[i].loggedIn = 1;
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users[i])
      return true;
    }
  }

  return false;
}

function loginUser() {
  if (validateEmail() && validatePass()) {
    var email = userEmail.value;
    var pass = userPass.value;

    if (isExist(email, pass)) {
    window.location.href = "html/home.html";
    }
    else{
      document.getElementById("loginMsg").classList.remove("d-none");
    }

  }
}


