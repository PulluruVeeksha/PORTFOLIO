document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Submission (placeholder)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! (Functionality to be added)');
    });
  }

  // AOS Animations Initialization
  AOS.init({
    duration: 1000,
    once: true
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Tilt effect on cards
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  // Animated skill circles
  const skillCircles = document.querySelectorAll('.skill-circle');
  skillCircles.forEach(circle => {
    const percentage = parseInt(circle.dataset.percentage);
    let current = 0;
    const speed = 10;

    const animate = setInterval(() => {
      if (current <= percentage) {
        circle.style.background = `conic-gradient(#00adb5 ${current * 3.6}deg, #1f1f1f ${current * 3.6}deg)`;
        circle.querySelector(".percentage").textContent = `${current}%`;
        current++;
      } else {
        clearInterval(animate);
      }
    }, speed);
  });
});
