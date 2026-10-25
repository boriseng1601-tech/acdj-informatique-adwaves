(function () {
  var gallery = document.querySelector('.repair-gallery');
  if (!gallery) return;
  var track = gallery.querySelector('.repair-gallery-track');
  var slides = track.querySelectorAll('.repair-slide');
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var index = 0;
  var timer;
  var hovered = false;
  var inView = true;
  var clone = slides[0].cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);
  function stop() { window.clearInterval(timer); timer = null; }
  function start() {
    stop();
    if (motion.matches || document.hidden || hovered || !inView) return;
    timer = window.setInterval(function () {
      index += 1;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
    }, 4500);
  }
  track.addEventListener('transitionend', function (event) {
    if (event.target !== track || event.propertyName !== 'transform' || index !== slides.length) return;
    track.style.transition = 'none';
    index = 0;
    track.style.transform = 'translateX(0)';
    // Commit the invisible loop reset before restoring the slide transition.
    void track.offsetWidth;
    track.style.transition = '';
  });
  gallery.addEventListener('mouseenter', function () { hovered = true; stop(); });
  gallery.addEventListener('mouseleave', function () { hovered = false; start(); });
  document.addEventListener('visibilitychange', start);
  motion.addEventListener('change', function () {
    track.style.transition = 'none';
    index = 0;
    track.style.transform = 'translateX(0)';
    void track.offsetWidth;
    track.style.transition = '';
    start();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      start();
    }).observe(gallery);
  }
  start();
})();

(function () {
  var page = document.querySelector('.hydrogel-page');
  if (!page) return;
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;

  // Observe short blocks, never entire long sections that could stay hidden.
  var targets = page.querySelectorAll(
    '.hero-copy > *, .content-section > h2, ' +
    '.hydrogel-finish-grid > article, .repair-reasons > li, .service-card, .final-cta-inner'
  );
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (target) {
    // Keep already-focused content visible when navigating with the keyboard.
    target.addEventListener('focusin', function () {
      target.classList.add('is-visible');
      observer.unobserve(target);
    });
    if (target.parentElement.classList.contains('hydrogel-finish-grid')) {
      var index = Array.prototype.indexOf.call(target.parentElement.children, target);
      target.style.setProperty('--repair-delay', (index % 2 * 130) + 'ms');
    }
    target.classList.add('repair-reveal-ready');
    observer.observe(target);
  });

  function showAll() {
    if (!motion.matches) return;
    observer.disconnect();
    targets.forEach(function (target) { target.classList.add('is-visible'); });
  }
  motion.addEventListener('change', showAll);
})();
