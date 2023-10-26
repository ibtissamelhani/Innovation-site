// humberger-menu
const menuH = document.querySelector(".fa-solid");
const navbar = document.querySelector("nav");

menuH.addEventListener("click", () => {
  navbar.classList.toggle("mobile-menu");
});

// validation formulaire login

const logForm = document.getElementById("login-form");
const logMail = document.getElementById("login-mail");
const password = document.getElementById("password");
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

logForm.addEventListener("submit", function (e) {
  let valide = true;
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".password-error");
  if (!emailRegex.test(logMail.value) || logMail.value.length == 0 ) {
    valide = false;
    emailError.style.display = "block";
  }
  if (password.value.length < 8) {
    valide = false;
    passwordError.style.display = "block";
  }
  if(!valide){
     e.preventDefault();
  }
 
});
