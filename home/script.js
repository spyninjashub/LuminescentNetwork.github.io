document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar .hamburger');
    const dropdown = document.querySelector('.navbar .dropdown');
    
    // Toggle dropdown visibility when hamburger is clicked
    hamburger.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });
});
