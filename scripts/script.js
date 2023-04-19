// this code is for the hamburger menu.
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    // toggles the "active" class to show/hide the nav links
    navbarLinks.classList.toggle('active');
});
