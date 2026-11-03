(function () {
  'use strict';
  document.querySelectorAll('.wifi-faq details').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) document.querySelectorAll('.wifi-faq details').forEach(function (other) { if (other !== item) other.open = false; });
    });
  });


  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.wifi-symptoms a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      history.replaceState(null, '', link.hash);
      target.focus({preventScroll:true});
      target.scrollIntoView({behavior:reduced.matches ? 'instant' : 'smooth', block:'center'});

    });
  });

  // Progressive enhancement: rows remain visible without JS or an observer.
  var items = document.querySelectorAll('.wifi-layout-item');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('wifi-layout-pending');
        observer.unobserve(entry.target);
      });
    }, {threshold:.12});
    items.forEach(function (item) {
      var index = Array.prototype.indexOf.call(item.parentNode.children, item);
      item.style.setProperty('--wifi-stagger', (index * 70) + 'ms');
      if (item.getBoundingClientRect().top > window.innerHeight) item.classList.add('wifi-layout-pending');
      observer.observe(item);
    });
    reduced.addEventListener('change', function () {
      if (reduced.matches) items.forEach(function (item) { item.classList.remove('wifi-layout-pending'); });
    });
  }
})();
