// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Dark Mode Toggle
let darkModeEnabled = false;
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
}
