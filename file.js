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
