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

    // Testimonials Array
    const testimonials = [
        { text: "Lunar Gold Art brought our vision to life! A truly inspiring team.", author: "- Alex Smith" },
        { text: "Their creativity and professionalism are unmatched. Highly recommend!", author: "- Jessica Brown" },
        { text: "A fantastic experience working with Lunar Gold Art. The results exceeded our expectations.", author: "- Michael Lee" },
        { text: "Art and innovation at its finest. Can't wait to collaborate again!", author: "- Sarah Johnson" }
    ];

    // DOM Elements
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialAuthor = document.getElementById("testimonial-author");

    // Current Testimonial Index
    let currentTestimonial = 0;

    // Function to Update Testimonial
    function updateTestimonial() {
        const { text, author } = testimonials[currentTestimonial];
        testimonialText.textContent = text;
        testimonialAuthor.textContent = author;

        // Move to the next testimonial or loop back to the first
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    // Change Testimonial Every 5 Seconds
    setInterval(updateTestimonial, 5000);

    function updateTestimonial() {
        testimonialText.classList.remove("show");
        testimonialAuthor.classList.remove("show");
    
        setTimeout(() => {
            const { text, author } = testimonials[currentTestimonial];
            testimonialText.textContent = text;
            testimonialAuthor.textContent = author;
    
            testimonialText.classList.add("show");
            testimonialAuthor.classList.add("show");
    
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }, 500);
    }
    
});
