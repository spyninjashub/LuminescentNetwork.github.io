document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    
    // Duplicate images for infinite looping
    carousel.innerHTML += carousel.innerHTML;
});
