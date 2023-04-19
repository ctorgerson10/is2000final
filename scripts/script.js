// this code is for the hamburger menu.
const toggleButton = document.querySelector('._navbar-toggle');
const navbarLinks = document.querySelector('._navbar-links');

toggleButton.addEventListener('click', () => {
    // toggles the "active" class to show/hide the nav links
    navbarLinks.classList.toggle('active');
});
