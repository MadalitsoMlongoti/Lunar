// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lunar Gold Art website is ready!');

    // Lightbox Functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const triggers = document.querySelectorAll(".lightbox-trigger");
    const close = document.querySelector(".lightbox .close");

    // Open Lightbox on Image Click
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = trigger.src;
        });
    });

    // Close Lightbox on Click
    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close Lightbox on Outside Click
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
