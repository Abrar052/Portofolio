const navToggle = document.querySelector('#navToggle');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('#nav-desktop');
const brand = document.querySelector('#brand');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    brand.style.display = 'none';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    brand.style.display = '';
  }
});

document.querySelectorAll('.nav-link').forEach(() => nav.addEventListener('click', () => {
  nav.classList.remove('nav-open');
}));
