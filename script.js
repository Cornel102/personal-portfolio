// Simple interactive JS to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been simulated successfully.');
    this.reset();
});