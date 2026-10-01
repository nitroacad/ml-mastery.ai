/**
 * ML Mastery.ai - Fast Client-Side Search
 */
(function() {
  let backdropEl = null;
  let inputEl = null;
  let resultsEl = null;

  function createSearchModal() {
    if (document.getElementById('search-modal-backdrop')) return;

    const modalHTML = `
      <div id="search-modal-backdrop" class="search-modal-backdrop" role="dialog" aria-modal="true" aria-label="Search tutorials">
        <div class="search-modal">
          <div class="search-header">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="global-search-input" class="search-input" placeholder="Search tutorials, tracks, topics (e.g. RAG, Quantization, PyTorch)..." autocomplete="off">
            <button type="button" class="btn-sm btn-secondary" id="close-search-btn">Esc</button>
          </div>
          <div id="search-modal-results" class="search-results">
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Type keywords to search across all AI/ML tutorials...</div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    backdropEl = document.getElementById('search-modal-backdrop');
    inputEl = document.getElementById('global-search-input');
    resultsEl = document.getElementById('search-modal-results');

    // Event listeners
    backdropEl.addEventListener('click', (e) => {
      if (e.target === backdropEl) closeSearch();
    });

    document.getElementById('close-search-btn').addEventListener('click', closeSearch);

    inputEl.addEventListener('input', (e) => {
      handleQuery(e.target.value.trim());
    });
  }

  function openSearch() {
    createSearchModal();
    backdropEl.classList.add('open');
    inputEl.focus();
    inputEl.value = '';
    resultsEl.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Type keywords to search across all AI/ML tutorials...</div>';
  }

  function closeSearch() {
    if (backdropEl) backdropEl.classList.remove('open');
  }

  function handleQuery(query) {
    if (!query) {
      resultsEl.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Type keywords to search across all AI/ML tutorials...</div>';
      return;
    }

    const tutorials = window.MLTutorials || [];
    const q = query.toLowerCase();

    const matches = tutorials.filter(item => {
      return item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.track.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q));
    });

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No tutorials found matching "<strong>${escapeHTML(query)}</strong>"</div>`;
      return;
    }

    // Determine root offset based on current page path
    const rootPath = window.location.pathname.includes('/guides/') || window.location.pathname.includes('/roadmap/') || window.location.pathname.includes('/projects/') || window.location.pathname.includes('/reference/') ? '../' : './';

    resultsEl.innerHTML = matches.map(item => `
      <a href="${rootPath}${item.slug}" class="search-result-item">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <span class="badge badge-track">${escapeHTML(item.track)}</span>
          <span class="badge badge-${item.difficulty.toLowerCase()}">${escapeHTML(item.difficulty)}</span>
        </div>
        <div class="search-result-title">${escapeHTML(item.title)}</div>
        <div class="search-result-desc">${escapeHTML(item.description)}</div>
      </a>
    `).join('');
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  document.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.open-search-trigger')) {
        e.preventDefault();
        openSearch();
      }
    });
  });

  window.MLSearch = {
    open: openSearch,
    close: closeSearch
  };
})();
