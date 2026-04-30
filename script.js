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

// Booking form validation and submission
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("bookingEmail").value.trim();
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("bookingEmailError");
    let serviceError = document.getElementById("serviceError");
    let dateError = document.getElementById("dateError");
    let successMsg = document.getElementById("bookingSuccess");
    nameError.textContent = "";
    emailError.textContent = "";
    serviceError.textContent = "";
    dateError.textContent = "";
    successMsg.textContent = "";
    let valid = true;
    if (name === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }
    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Enter valid email";
      valid = false;
    }
    if (service === "") {
      serviceError.textContent = "Please select a service";
      valid = false;
    }
    if (date === "") {
      dateError.textContent = "Please select a date";
      valid = false;
    }
    if (valid) {
      successMsg.textContent = "Your booking request has been submitted!";
      bookingForm.reset();
    }
  });
}

// Newsletter subscription form validation and feedback
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("newsletterEmail");
    const msgDiv = document.getElementById("newsletterMsg");
    const email = emailInput.value.trim();
    msgDiv.textContent = "";
    msgDiv.className = "newsletter-msg";
    if (email === "") {
      msgDiv.textContent = "Email is required.";
      msgDiv.classList.add("error");
      return;
    }
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msgDiv.textContent = "Please enter a valid email address.";
      msgDiv.classList.add("error");
      return;
    }
    msgDiv.textContent = "Thank you for subscribing!";
    msgDiv.classList.add("success");
    newsletterForm.reset();
  });
}
