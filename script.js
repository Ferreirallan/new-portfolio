function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark / Light Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("t    heme");

if (currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click", function() {
    setTheme();
});
btn2.addEventListener("click", function() {
    setTheme();
});

function setDarkMode() {
    // Some Logic
}
function setLightDarkMode() {
    // Some Logic
}
