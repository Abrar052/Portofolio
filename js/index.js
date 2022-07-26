const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav-desktop');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

document.querySelectorAll('.nav-link').forEach(() => nav.addEventListener('click', () => {
  nav.classList.remove('nav-open');
}));
