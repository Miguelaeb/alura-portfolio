const iconHumberger = document.querySelector(".icon--humburger");
const navbarLinksContainer = document.querySelector(
    ".navbar--links--container"
);
const logo = document.querySelector(".logo");
const headerContainer = document.querySelector(".header--container");
const mainContainer = document.querySelector(".main--container");
const downloadButton = document.querySelector(".download--button");
const footerContainer = document.querySelector(".footer--container");
const form = document.querySelector("#contactForm");
const yearElement = document.querySelector(".dynamic--time");
const imgHover = document.querySelector(".avatar-1-img");
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

// Hover img
imgHover.addEventListener("mouseover", () => {
    imgHover.src = "./images/hover-avatar.png";
});

imgHover.addEventListener("mouseout", () => {
    imgHover.src = "./images/avatar1.png";
});

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
        moonIcon.classList.remove("blur-lg");
        sunIcon.classList.remove("blur-lg");
    }
}

iconHumberger.addEventListener("click", () => {
    navbarLinksContainer.classList.remove("hidden");
    logo.classList.add("blur-lg");
    iconHumberger.classList.add("blur-lg");
    headerContainer.classList.add("blur-lg");
    mainContainer.classList.add("blur-lg");
    footerContainer.classList.add("blur-lg");
    moonIcon.classList.add("blur-lg");
    sunIcon.classList.add("blur-lg");
});

document.addEventListener("click", handleClickOutside);

// Dwonload PDF
downloadButton.addEventListener("click", () => {
    window.open("./PDF/Miguel Evangelista Front end developer.pdf", "_blank");
});

// Form validation
form.addEventListener("submit", (event) => {
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
        nameForm.classList.add("border-portfolio-primery-color-red");
        nameError.classList.remove("hidden");
    } else {
        nameForm.classList.add("border-green-500");
        nameError.classList.add("hidden");
    }

    // Check if the email input is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(emailForm.value.trim())) {
        emailForm.classList.add("border-portfolio-primery-color-red");
        emailError.classList.remove("hidden");
        emailForm.placeholder = "email@example/com";
    } else {
        emailForm.classList.add("border-green-500");
        emailError.classList.add("hidden");
    }

    // Subject if the name input is empty
    if (subjectForm.value.trim() === "") {
        subjectForm.classList.add("border-portfolio-primery-color-red");
        subjectError.classList.remove("hidden");
    } else {
        subjectForm.classList.add("border-green-500");
        subjectError.classList.add("hidden");
    }

    // Message if the name input is empty
    if (messageForm.value.trim() === "") {
        messageForm.classList.add("border-portfolio-primery-color-red");
        messageError.classList.remove("hidden");
    } else {
        messageForm.classList.add("border-green-500");
        messageError.classList.add("hidden");
    }
});

// Dynamic date
var actualDate = new Date();
var year = actualDate.getFullYear();

yearElement.textContent = year;

// Dark mode

// Theme consts
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

// Initial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
};

// Manual theme switch
const themeSwitch = () => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
    } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
    }
};

// Call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// Invoke theme check on initial page load
themeCheck();
