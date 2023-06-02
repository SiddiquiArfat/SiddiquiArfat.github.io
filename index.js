let barContainer = document.querySelector(".humburger");
let sidebar = document.querySelector(".navbar-menu");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

var typed = new Typed(".typing", {
  strings: ["Full Stack Web Developer","Back-End Developer","Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});




