// script.js
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    }

    if (!email.includes("@")) {
      emailError.textContent = "Enter valid email";
      valid = false;
    }

    if (password === "") {
      passwordError.textContent = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Minimum 6 characters";
      valid = false;
    }

    if (valid) {
      alert("Login successful!");
    }
  });
}
