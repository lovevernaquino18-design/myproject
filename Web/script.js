function login() {

let user = document.getElementById("username").value;

let pass = document.getElementById("password").value;

if (user === "student" && pass === "faith") {

window.location.href = "about.html";

} else {

alert("Invalid login credentials");

}

}

function logout() {

window.location.href = "index.html";

