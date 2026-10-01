/**
 * ML Mastery.ai - Theme Switcher & Storage Management
 */
(function() {
  const STORAGE_KEY = 'ml_mastery_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'fa-solid fa-moon';
          btn.setAttribute('aria-label', 'Switch to dark mode');
        } else {
          icon.className = 'fa-solid fa-sun';
          btn.setAttribute('aria-label', 'Switch to light mode');
        }
      }
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Initial theme application before render
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());

    document.addEventListener('click', (e) => {
      if (e.target.closest('.theme-toggle-btn')) {
        toggleTheme();
      }
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  });

  window.MLTheme = {
    get: getPreferredTheme,
    toggle: toggleTheme,
    set: (theme) => {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    }
  };
})();
