/**
 * ML Mastery.ai - Application Entry Point
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Mermaid if available
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark',
      securityLevel: 'loose',
      fontFamily: 'Inter, sans-serif'
    });
  }

  // Sync complete buttons state if on tutorial page
  const completeBtn = document.querySelector('.mark-complete-btn');
  if (completeBtn && window.MLProgress) {
    const tutorialId = completeBtn.dataset.tutorialId;
    if (tutorialId && window.MLProgress.isCompleted(tutorialId)) {
      completeBtn.classList.add('btn-primary');
      completeBtn.classList.remove('btn-secondary');
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Completed';
    }
  }

  // Update progress widgets across page
  function updateDashboardWidgets() {
    if (!window.MLProgress) return;
    const metrics = window.MLProgress.getMetrics();

    const completedEl = document.getElementById('stat-completed-count');
    const totalEl = document.getElementById('stat-total-count');
    const percentEl = document.getElementById('stat-percent-value');
    const progressBarEl = document.getElementById('dashboard-progress-bar');

    if (completedEl) completedEl.textContent = metrics.completedCount;
    if (totalEl) totalEl.textContent = metrics.total;
    if (percentEl) percentEl.textContent = metrics.percentage + '%';
    if (progressBarEl) progressBarEl.style.width = metrics.percentage + '%';
  }

  updateDashboardWidgets();
  window.addEventListener('ml_progress_updated', updateDashboardWidgets);
});
