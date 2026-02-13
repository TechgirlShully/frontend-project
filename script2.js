// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Reservation Form Submission
const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you shortly.');
    reservationForm.reset();
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
    contactForm.reset();
});