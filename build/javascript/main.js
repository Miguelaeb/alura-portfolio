const iconHumberger = document.querySelector(".icon--humburger");
const navbarLinksContainer = document.querySelector(".navbar--links--container");
const logo = document.querySelector(".logo");
const headerContainer = document.querySelector(".header--container");
const mainContainer = document.querySelector(".main--container");
const downloadButton = document.querySelector(".download--button");
const footerContainer = document.querySelector(".footer--container");
const form = document.querySelector("#contactForm");
var yearElement = document.querySelector(".dynamic--time");

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
    link.href = "./build/PDF/Miguel Evangelista Front End CV.pdf";
    link.click();
});

// Form validation
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // input files
    const nameForm = document.getElementById("name");
    const emailForm = document.getElementById("email");
    const subjectForm = document.getElementById("subject");
    const messageForm = document.getElementById("message");

    // error
    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const subjectError = document.querySelector("#subjectError");
    const messageError = document.querySelector("#messageError");

    // Check if the name input is empty
    if (nameForm.value.trim() === "") {
        nameError.classList.add("border-red-400");
        nameError.classList.remove("hidden");
    } else {
        nameError.classList.add("hidden");
    }

    // Check if the email input is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(emailForm.value.trim())) {
        emailError.classList.remove("hidden");
        emailForm.placeholder = "email@example/com";
    } else {
        emailError.classList.add("hidden");
    }

    // Subject if the name input is empty
    if (subjectForm.value.trim() === "") {
        subjectError.classList.remove("hidden");
    } else {
        subjectError.classList.add("hidden");
    }

    // Message if the name input is empty
    if (messageForm.value.trim() === "") {
        messageError.classList.remove("hidden");
    } else {
        messageError.classList.add("hidden");
    }
});

// Smooth scroll
window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});

// Dynamic date
var actualDate = new Date();
var year = actualDate.getFullYear();

yearElement.textContent = year;