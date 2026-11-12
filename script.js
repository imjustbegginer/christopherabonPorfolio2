// Mobile navigation menu
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

// Automatically update the copyright year
const yearElements = document.querySelectorAll('.year');
yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Reveal page elements smoothly as they enter the screen
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
