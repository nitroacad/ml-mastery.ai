/**
 * ML Mastery.ai - Interactive Educational Behaviors
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Copy Code Button Handler
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-btn');
    if (!copyBtn) return;

    const wrapper = copyBtn.closest('.code-wrapper');
    if (!wrapper) return;

    const code = wrapper.querySelector('code');
    if (!code) return;

    navigator.clipboard.writeText(code.textContent).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  });

  // 2. Interactive Quiz Handler
  document.addEventListener('click', (e) => {
    const optionBtn = e.target.closest('.quiz-option');
    if (!optionBtn) return;

    const quizCard = optionBtn.closest('.quiz-card');
    if (!quizCard) return;

    const isCorrect = optionBtn.dataset.correct === 'true';
    const explanationEl = quizCard.querySelector('.quiz-explanation');

    // Reset sibling buttons
    const siblings = quizCard.querySelectorAll('.quiz-option');
    siblings.forEach(btn => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = true;
    });

    if (isCorrect) {
      optionBtn.classList.add('correct');
    } else {
      optionBtn.classList.add('incorrect');
      // Highlight the correct one
      siblings.forEach(btn => {
        if (btn.dataset.correct === 'true') btn.classList.add('correct');
      });
    }

    if (explanationEl) {
      explanationEl.style.display = 'block';
    }
  });

  // 3. Collapsible / Accordion Handler
  document.addEventListener('click', (e) => {
    const toggleHeader = e.target.closest('.accordion-header');
    if (!toggleHeader) return;

    const accordionItem = toggleHeader.closest('.accordion-item');
    if (!accordionItem) return;

    accordionItem.classList.toggle('open');
  });

  // 4. Mark Tutorial Complete Toggle
  document.addEventListener('click', (e) => {
    const completeBtn = e.target.closest('.mark-complete-btn');
    if (!completeBtn) return;

    const tutorialId = completeBtn.dataset.tutorialId;
    if (!tutorialId || !window.MLProgress) return;

    const nowCompleted = window.MLProgress.toggleCompleted(tutorialId);

    if (nowCompleted) {
      completeBtn.classList.add('btn-primary');
      completeBtn.classList.remove('btn-secondary');
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Completed';
    } else {
      completeBtn.classList.remove('btn-primary');
      completeBtn.classList.add('btn-secondary');
      completeBtn.innerHTML = '<i class="fa-regular fa-circle"></i> Mark Complete';
    }
  });
});
