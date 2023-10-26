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
// const next = document.querySelector(".fa-circle-chevron-right");
// const prec = document.querySelector(".fa-circle-chevron-left");

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

// const logForm = document.getElementById("login-form");
// console.log(logForm)
// const logMail = document.getElementById("login-mail");
// const password = document.getElementById("password");

// logForm.addEventListener("submit", function (e) {
//   const emailError = document.querySelector(".email-error");
//   const passwordError = document.querySelector(".password-error");
//   if (logMail.value.length == 0) {
//     e.preventDefault();
//     emailError.style.display = "block";
//   }
//   if (password.value.length < 8) {
//     e.preventDefault();
//     passwordError.style.display = "block";
//   }
// });

// validation formulaire contact us

// const form = document.getElementById("form");
// const firstName = document.getElementById("first-name");
// const lastName = document.getElementById("last-name");
// const mail = document.getElementById("email");
// const phone = document.getElementById("phone");
// const text = document.getElementById("textarea");

// form.addEventListener("submit", function (e) {
//   const firstNameErr = document.querySelector(".first-name-error");
//   const lastNameErr = document.querySelector(".last-name-error");
//   const emailErr = document.querySelector(".email-error");
//   const phoneErr = document.querySelector(".phone-error");
//   const textErr = document.querySelector(".textarea-error");

//   if (firstName.value !== "/^[A-Za-zs]+$/" || firstName.value.length == 0) {
//     e.preventDefault();
//     firstName.style.display = "block";
//   }
  
//   if (lastName.value !== "/^[A-Za-zs]+$/" || lastName.value.length == 0) {
//     e.preventDefault();
//     lastName.style.display = "block";
//   }
//   if (mail.value.length == 0) {
//     e.preventDefault();
//     emailErr.style.display = "block";
//   }
  

// });
