/**
 * ML Mastery.ai - Local Learning Progress Tracker
 */
(function() {
  const STORAGE_KEY = 'ml_mastery_progress';

  function getProgress() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : { completed: [], inProgress: [], projectsCompleted: [] };
    } catch (e) {
      return { completed: [], inProgress: [], projectsCompleted: [] };
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('ml_progress_updated', { detail: data }));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }

  function isCompleted(tutorialId) {
    const p = getProgress();
    return p.completed.includes(tutorialId);
  }

  function toggleCompleted(tutorialId) {
    const p = getProgress();
    const index = p.completed.indexOf(tutorialId);
    if (index > -1) {
      p.completed.splice(index, 1);
    } else {
      p.completed.push(tutorialId);
    }
    saveProgress(p);
    return isCompleted(tutorialId);
  }

  function getMetrics() {
    const p = getProgress();
    const allTutorials = window.MLTutorials || [];
    const total = allTutorials.length;
    const completedCount = p.completed.length;
    const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    return {
      total,
      completedCount,
      percentage,
      projectsCompleted: p.projectsCompleted.length
    };
  }

  function resetProgress() {
    if (confirm('Are you sure you want to reset all your learning progress? This cannot be undone.')) {
      saveProgress({ completed: [], inProgress: [], projectsCompleted: [] });
    }
  }

  window.MLProgress = {
    get: getProgress,
    isCompleted,
    toggleCompleted,
    getMetrics,
    reset: resetProgress
  };
})();
