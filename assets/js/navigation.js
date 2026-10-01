/**
 * ML Mastery.ai - Global Navigation & Mobile Drawer
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Active nav link highlighting based on current location
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace('../', ''))) {
      link.classList.add('active');
    }
  });
});
