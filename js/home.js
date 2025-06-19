var users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

document.addEventListener("DOMContentLoaded", function(){
  loggedInUser();
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  logoutUser();
});


function loggedInUser() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].loggedIn === 1) {
  document.getElementById('homeUser').innerHTML = users[i].name;
  console.log("founded");
  return;  
    }
  }
  console.log("user not found");
}

function logoutUser() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].loggedIn === 1) {
      users[i].loggedIn = 0;
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = '../index.html'
    }
  }
}