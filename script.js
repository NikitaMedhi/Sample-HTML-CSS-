// script.js
// Theme & Accessibility Controls
(function () {
  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const contrastToggle = document.getElementById("contrastToggle");
  const fontBtns = document.querySelectorAll(".font-size-btn");
  const root = document.documentElement;
  // Load preferences
  function loadPrefs() {
    const theme = localStorage.getItem("theme") || "light";
    const contrast = localStorage.getItem("contrast") || "normal";
    const fontSize = localStorage.getItem("fontSize") || "medium";
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-contrast", contrast);
    document.body.classList.remove("font-small", "font-medium", "font-large");
    document.body.classList.add(`font-${fontSize}`);
    fontBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.font-size-btn[data-size='${fontSize}']`)?.classList.add("active");
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "\u2600\ufe0f Light" : "\ud83c\udf19 Dark";
    if (contrastToggle) contrastToggle.textContent = contrast === "high" ? "Normal Contrast" : "High Contrast";
  }
  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      loadPrefs();
    });
  }
  // Contrast toggle
  if (contrastToggle) {
    contrastToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-contrast") || "normal";
      const next = current === "high" ? "normal" : "high";
      root.setAttribute("data-contrast", next);
      localStorage.setItem("contrast", next);
      loadPrefs();
    });
  }
  // Font size
  fontBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const size = btn.getAttribute("data-size");
      document.body.classList.remove("font-small", "font-medium", "font-large");
      document.body.classList.add(`font-${size}`);
      localStorage.setItem("fontSize", size);
      loadPrefs();
    });
  });
  // Initial
  loadPrefs();
})();
// Font size CSS
(function () {
  const style = document.createElement("style");
  style.textContent = `
    .font-small { font-size: 15px; }
    .font-medium { font-size: 18px; }
    .font-large { font-size: 22px; }
  `;
  document.head.appendChild(style);
})();
// Login Form Validation
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
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const subjectError = document.getElementById("subjectError");
    const categoryError = document.getElementById("categoryError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    categoryError.textContent = "";
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
    const inquiry = { name, email, phone, subject, category, message, date: new Date().toISOString() };
    let inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
    inquiries.push(inquiry);
    localStorage.setItem("inquiries", JSON.stringify(inquiries));
    successMsg.textContent = "Thank you! Your inquiry has been submitted.";
    contactForm.reset();
    setTimeout(() => { successMsg.textContent = ""; }, 5000);
  });
}
