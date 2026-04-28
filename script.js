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

// Contact Form Logic
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();
    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const subjectError = document.getElementById("subjectError");
    const categoryError = document.getElementById("categoryError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");
    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    categoryError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";
    let valid = true;
    // Validation
    if (name === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }
    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Enter valid email";
      valid = false;
    }
    if (phone === "") {
      phoneError.textContent = "Phone is required";
      valid = false;
    } else if (!/^\d{10,}$/.test(phone.replace(/\D/g, ""))) {
      phoneError.textContent = "Enter valid phone number";
      valid = false;
    }
    if (subject === "") {
      subjectError.textContent = "Subject is required";
      valid = false;
    }
    if (category === "") {
      categoryError.textContent = "Select a category";
      valid = false;
    }
    if (message === "") {
      messageError.textContent = "Message is required";
      valid = false;
    } else if (message.length < 10) {
      messageError.textContent = "Minimum 10 characters";
      valid = false;
    }
    if (!valid) return;
    // Store in localStorage
    const inquiry = { name, email, phone, subject, category, message, date: new Date().toISOString() };
    let inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
    inquiries.push(inquiry);
    localStorage.setItem("inquiries", JSON.stringify(inquiries));
    // Success
    successMsg.textContent = "Thank you! Your inquiry has been submitted.";
    contactForm.reset();
    setTimeout(() => { successMsg.textContent = ""; }, 5000);
  });
}
