// Contact Page JavaScript (contact.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact Page Loaded');
    
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
      });
    }
  });