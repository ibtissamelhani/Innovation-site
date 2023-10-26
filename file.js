// humberger-menu
const menuH = document.querySelector(".fa-solid");
const navbar = document.querySelector("nav");

menuH.addEventListener("click", () => {
  navbar.classList.toggle("mobile-menu");
});

// FAQ
const faqs = document.querySelectorAll(".bloc");
faqs.forEach((bloc) => {
  bloc.addEventListener("click", () => {
    let isIn = false;

    if (bloc.classList.contains("active")) {
      isIn = true;
    }
    for (faq of faqs) {
      faq.classList.remove("active");
    }

    bloc.classList.toggle("active");

    if (isIn) {
      bloc.classList.remove("active");
    }
  });
});

// slider des image
const next = document.querySelector(".fa-circle-chevron-right");
const prec = document.querySelector(".fa-circle-chevron-left");

// next.addEventListener("click", () => {
//   const widthSlide = document.querySelector(".equipe").offsetWidth;
//   const items = document.querySelector(".team");
//   items.scrollLeft += widthSlide;
// });

// prec.addEventListener("click", () => {
//   const widthSlide = document.querySelector(".equipe").offsetWidth;
//   const items = document.querySelector(".team");
//   items.scrollLeft -= widthSlide;
// });

// validation formulaire login

const logForm = document.getElementById("login-form");
const logMail = document.getElementById("login-mail");
const password = document.getElementById("password");

// console.log(logForm);
// console.log(logMail);
// console.log(password);


logForm.addEventListener("submit", function (e) {
  
  const emailError = document.querySelector(".email-error");
  const passwordError = document.querySelector(".password-error");
  if (logMail.value.length == 0) {
    e.preventDefault();
    emailError.style.display = "block";
  }
  if (password.value.length < 8) {
    e.preventDefault();
    passwordError.style.display = "block";
  }
});
