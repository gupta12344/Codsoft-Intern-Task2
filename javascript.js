// script.js

// Toggle menu for mobile view
document.getElementById("menu-icon").addEventListener("click", function() {
    const navlist = document.querySelector(".navlist");
    navlist.classList.toggle("open");
});

// Close menu when a link is clicked (optional, improves UX)
const navLinks = document.querySelectorAll(".navlist a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        const navlist = document.querySelector(".navlist");
        navlist.classList.remove("open");
    });
});
