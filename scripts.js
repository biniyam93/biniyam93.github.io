 // Typed.js for name animation
 document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-name', {
        strings: ['Python Developer', 'Django Expert', 'Web Architect'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Here you would typically send the form data to a backend service
            alert('Message sent successfully! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});