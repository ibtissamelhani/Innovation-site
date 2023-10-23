const menuH = document.querySelector(".fa-solid");
const navbar = document.querySelector("nav");

menuH.addEventListener('click', ()=>{
    navbar.classList.toggle('mobile-menu');
})