/* ============================================
   EGYPTIAN MUSEUM - Home Page
   Stat counter animation (120K+ / 1902 / 27).
   Requires base.js to be loaded first.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          const text = entry.target.textContent;
          const hasPlus = text.includes('+');
          const hasK = text.includes('K');
          const target = parseInt(text.replace(/[^0-9]/g, ''));
          const suffix = hasK ? 'K+' : (hasPlus ? '+' : '');
          const duration = 2000;
          const startTime = performance.now();
          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            entry.target.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(stat => counterObserver.observe(stat));
  }
});
