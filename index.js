let barContainer = document.querySelector(".humburger");
let sidebar = document.querySelector(".navbar-menu");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function resume(){


  window.open("https://drive.google.com/file/d/1ehH9Z1omTLvDYQbY6X-KHOBq1KgLusuV/view?usp=sharing");
}

let timeout;

function myFunction() {
  timeout = setTimeout(resume, 1000);
}


var typed = new Typed(".typing", {
  strings: ["Full Stack Web Developer","Back-End Developer","Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});




