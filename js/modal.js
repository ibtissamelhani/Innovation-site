// humberger-menu
const menuH = document.querySelector(".fa-solid");
const navbar = document.querySelector("nav");

menuH.addEventListener("click", () => {
  navbar.classList.toggle("mobile-menu");
});

// fenetre modale
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const content = document.querySelector(".contenu");
const openModal = document.querySelectorAll(".show-modal");

openModal.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-1")) {
      content.textContent =
        "Our 3D modeling studio builds any assets and customizes them to your needs. We deal with projects of any complexity and deliver them in the shortest time frames without trading quality for speed. Whether you need pre-rendered or real-time models, a realistic or low-poly style — our technical artists handle everything";
      modal.showModal();
    }
    if (button.classList.contains("btn-2")) {
      content.textContent =
        "Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.";
      modal.showModal();
    }
    if (button.classList.contains("btn-3")) {
      content.textContent =
        "Enterprise service management (ESM) provides many strategies for businesses trying to improve their service delivery and internal processes. This strategy often uses software platforms and automation to change how companies interact with their customers and employees. Understanding and implementing ESM can offer managers and business experts an effective way to improve the performance of a business.";
      modal.showModal();
    }
    if (button.classList.contains("btn-4")) {
      content.textContent =
        "Marketing and advertising services refer to a range of activities and strategies that businesses and organizations employ to promote their products, services, or brand to their target audience. These services are designed to attract, engage, and persuade customers or clients, ultimately driving sales and achieving business objectives";
      modal.showModal();
    }
    if (button.classList.contains("btn-5")) {
      content.textContent =
        "we are all about intelligence-led website development. From stunning brochure websites to show off your brand to more complex results driven platforms, we can develop digital portals and systems that bring your brand and services to life";
      modal.showModal();
    }
    if (button.classList.contains("btn-6")) {
      content.textContent =
        "Our support consultants are dealing with various inquiries from the end users in a timely and efficient manner by covering all possible channels of communication.We pride ourselves on being customer-centric, empathic and professional. We understand that every request requires fast resolution, and we want all of our clients to achieve success as quickly as possible. With our help, of course.";
      modal.showModal();
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.close();
});
