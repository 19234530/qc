// Main JavaScript (script.js) - For index.html
// This can be used for any global functionality needed across all pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('DuBo Martial Arts - Home Page Loaded');
    
    // You can add any home-page specific JS here
    // For example, smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });