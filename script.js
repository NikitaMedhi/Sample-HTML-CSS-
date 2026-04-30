// script.js

// --- Login Form Auto-Save ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  // Restore draft
  const loginDraft = JSON.parse(localStorage.getItem("loginFormDraft") || '{}');
  if (loginDraft.email) document.getElementById("email").value = loginDraft.email;
  if (loginDraft.password) document.getElementById("password").value = loginDraft.password;

  loginForm.addEventListener("input", function () {
    localStorage.setItem(
      "loginFormDraft",
      JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    );
  });

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
      localStorage.removeItem("loginFormDraft");
    }
  });
}

// --- Booking Form Auto-Save ---
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  // Restore draft
  const bookingDraft = JSON.parse(localStorage.getItem("bookingFormDraft") || '{}');
  if (bookingDraft.name) document.getElementById("name").value = bookingDraft.name;
  if (bookingDraft.email) document.getElementById("bookingEmail").value = bookingDraft.email;
  if (bookingDraft.service) document.getElementById("service").value = bookingDraft.service;
  if (bookingDraft.date) document.getElementById("date").value = bookingDraft.date;

  bookingForm.addEventListener("input", function () {
    localStorage.setItem(
      "bookingFormDraft",
      JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("bookingEmail").value,
        service: document.getElementById("service").value,
        date: document.getElementById("date").value
      })
    );
  });

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
      localStorage.removeItem("bookingFormDraft");
    }
  });
}

// --- Contact Form Auto-Save ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  // Restore draft
  const contactDraft = JSON.parse(localStorage.getItem("contactFormDraft") || '{}');
  if (contactDraft.name) document.getElementById("contactName").value = contactDraft.name;
  if (contactDraft.email) document.getElementById("contactEmail").value = contactDraft.email;
  if (contactDraft.message) document.getElementById("contactMessage").value = contactDraft.message;

  contactForm.addEventListener("input", function () {
    localStorage.setItem(
      "contactFormDraft",
      JSON.stringify({
        name: document.getElementById("contactName").value,
        email: document.getElementById("contactEmail").value,
        message: document.getElementById("contactMessage").value
      })
    );
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("contactMessage").value.trim();
    let nameError = document.getElementById("contactNameError");
    let emailError = document.getElementById("contactEmailError");
    let messageError = document.getElementById("contactMessageError");
    let successMsg = document.getElementById("contactSuccess");
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
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
    if (message === "") {
      messageError.textContent = "Message is required";
      valid = false;
    }
    if (valid) {
      successMsg.textContent = "Your message has been sent!";
      contactForm.reset();
      localStorage.removeItem("contactFormDraft");
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

// Back to Top Button functionality
const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {
  if (backToTopBtn) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
};
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
