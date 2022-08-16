// to open/close the mobile menu
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// for the faq page to allow the questions to accordion open
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

const elements = document.getElementsByClassName('accordion__question');

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('scale');
  });
  
  elements[i].addEventListener('mouseenter', function(e) {
    elements[i].classList.add('scale');
  });
}
