var iconHumberger = document.querySelector(".icon--humburger");
var navbarLinksContainer = document.querySelector(".navbar--links--container");
var logo = document.querySelector(".logo");
var headerContainer = document.querySelector(".header--container");
var mainContainer = document.querySelector(".main--container");
var downloadButton = document.querySelector(".download--button");
var footerContainer = document.querySelector(".footer--container");

// Close navbar phone menu by clicking outside it 
function handleClickOutside(event) {
    if (
        !navbarLinksContainer.contains(event.target) &&
        !iconHumberger.contains(event.target)
    ) {
        navbarLinksContainer.classList.add("hidden");
        logo.classList.remove("blur-lg");
        iconHumberger.classList.remove("blur-lg");
        headerContainer.classList.remove("blur-lg");
        mainContainer.classList.remove("blur-lg");
        footerContainer.classList.remove("blur-lg");
    }
}

iconHumberger.addEventListener("click", function () {
    navbarLinksContainer.classList.remove("hidden");
    logo.classList.add("blur-lg");
    iconHumberger.classList.add("blur-lg");
    headerContainer.classList.add("blur-lg");
    mainContainer.classList.add("blur-lg");
    footerContainer.classList.add("blur-lg");
});

document.addEventListener("click", handleClickOutside);

// Dwonload PDF
downloadButton.addEventListener("click", function () {
    var link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = "/build/PDF/resume.pdf"; 
    link.click();
});

// Smooth scroll
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});