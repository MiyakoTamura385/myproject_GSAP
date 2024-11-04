document.addEventListener("DOMContentLoaded", () => {
    let isMenuOpen = false; // More descriptive variable name
    const hamburgerButton = document.querySelector(".hamburger-button");
    const header = document.querySelector(".header");

    hamburgerButton.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            header.classList.add("is-active");
            hamburgerButton.classList.add("is-active");
        } else {
            header.classList.remove("is-active");
            hamburgerButton.classList.remove("is-active");
        }
    });
});
