const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", function() {
  navbarMenu.classList.toggle("show");
});

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
});