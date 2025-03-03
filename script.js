document.addEventListener('DOMContentLoaded', () => {
    console.log('Lunar Gold Art website is ready!');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    document.getElementById('menu-icon').addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    });

    // Lightbox functionality for gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Basic form validation for a contact form (if added)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            let isValid = true;

            if (name === '') {
                alert('Please enter your name.');
                isValid = false;
            }

            if (email === '' || !validateEmail(email)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            if (message === '') {
                alert('Please enter your message.');
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for contacting us! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper', {
            loop: true, // Enable infinite looping
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000, // Auto-slide every 3 seconds
            },
        });
    });
});