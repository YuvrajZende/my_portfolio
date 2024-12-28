const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.section');

let isDarkMode = false;

// Function to switch to dark mode
function switchToDarkMode() {
    body.classList.add('dark');  // Apply the 'dark' class to body
    themeToggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;  // Change button icon to sun
    isDarkMode = true;
}

// Function to switch to light mode
function switchToLightMode() {
    body.classList.remove('dark');  // Remove the 'dark' class from body
    themeToggleButton.innerHTML = `<i class="fa-regular fa-moon"></i>`;  // Change button icon to moon
    isDarkMode = false;
}

// Event listener for the theme toggle button
themeToggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        switchToLightMode();
    } else {
        switchToDarkMode();
    }
});
