

const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-desktop");

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open');
    nav.classList.toggle('nav-closed');

})
