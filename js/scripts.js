// Custom JavaScript to enhance user interaction

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add hover effect to navbar links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('text-warning');
    });
    link.addEventListener('mouseout', () => {
      link.classList.remove('text-warning');
    });
  });
  