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