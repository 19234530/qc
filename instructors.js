// Instructors Page JavaScript (instructors.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Instructors Page Loaded');
    
    // You could add instructor card hover effects or other interactive elements
    const instructorCards = document.querySelectorAll('.card');
    
    instructorCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  });