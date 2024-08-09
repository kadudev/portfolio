document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.remove("hidden");
    });

    closeIcon.addEventListener("click", function() {
        navbar.classList.add("hidden");
    });
});
