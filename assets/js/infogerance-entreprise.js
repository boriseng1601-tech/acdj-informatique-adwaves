(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var cards = document.querySelectorAll('.infogerance-page .reveal');
  var steps = document.querySelector('.info-steps');
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('is-pending');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  cards.forEach(function (card) { card.classList.add('is-pending'); observer.observe(card); });
  var ticking = false;
  function progress() {
    ticking = false;
    if (!steps) return;
    var rect = steps.getBoundingClientRect();
    var value = Math.max(0, Math.min(1, (window.innerHeight * 0.8 - rect.top) / (rect.height - 70)));
    steps.style.setProperty('--progress', value);
    steps.querySelectorAll('.info-step').forEach(function (step) {
      step.classList.toggle('is-active', step.getBoundingClientRect().top < window.innerHeight * 0.8);
    });
  }
  if (steps) {
    steps.classList.add('motion-ready');
    progress();
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(progress); } }, { passive: true });
    window.addEventListener('resize', progress);
  }
  reduced.addEventListener('change', function (event) {
    if (!event.matches) return;
    observer.disconnect();
    cards.forEach(function (card) { card.classList.remove('is-pending'); });
    if (steps) { steps.classList.remove('motion-ready'); steps.style.setProperty('--progress', 1); }
  });
})();
