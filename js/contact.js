// humberger-menu
const menuH = document.querySelector(".fa-solid");
const navbar = document.querySelector("nav");

menuH.addEventListener("click", () => {
  navbar.classList.toggle("mobile-menu");
});

// validation formulaire contact us

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const mail = document.getElementById("email");
const phone = document.getElementById("phone");
const text = document.getElementById("textarea");

form.addEventListener("submit", function (e) {
  const firstNameErr = document.querySelector(".first-name-error");
  const lastNameErr = document.querySelector(".last-name-error");
  const emailErr = document.querySelector(".email-error");
  const phoneErr = document.querySelector(".phone-error");
  const textErr = document.querySelector(".textarea-error");
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const nameRegex = /^[A-Za-zs]+$/;
  const phoneRegex = /^\d+$/;
  let valide = true;

  if (!nameRegex.test(firstName.value) || firstName.value.length == 0) {
    valide = false;
    firstNameErr.style.display = "block";
  }
  if (!nameRegex.test(lastName.value) || lastName.value.length == 0) {
    valide = false;
    lastNameErr.style.display = "block";
  }
  if (!emailRegex.test(mail.value) || mail.value.length == 0) {
    valide = false;
    emailErr.style.display = "block";
  }
  if (!phoneRegex.test(phone.value) || phone.value.length == 0) {
    valide = false;
    phoneErr.style.display = "block";
  }
  if (text.value.length < 20) {
    valide = false;
    textErr.style.display = "block";
  }
  if (!valide) {
    e.preventDefault();
  }
});
