(function () {
  function setOpen(element, button, open) {
    if (!element || !button) return;
    element.dataset.open = open ? 'true' : 'false';
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  var services = document.querySelector('.services-dropdown');
  var servicesButton = services && services.querySelector(':scope > .nav-parent');
  var repair = services && services.querySelector('.desktop-repair-group');
  var repairButton = repair && repair.querySelector(':scope > .desktop-repair-trigger');

  if (services && servicesButton) {
    services.addEventListener('mouseenter', function () {
      setOpen(services, servicesButton, true);
    });
    services.addEventListener('mouseleave', function () {
      setOpen(services, servicesButton, false);
      setOpen(repair, repairButton, false);
    });
    servicesButton.addEventListener('click', function () {
      setOpen(services, servicesButton, services.dataset.open !== 'true');
    });
  }

  if (repair && repairButton) {
    repair.addEventListener('mouseenter', function () {
      setOpen(repair, repairButton, true);
    });
    repairButton.addEventListener('click', function () {
      setOpen(repair, repairButton, repair.dataset.open !== 'true');
    });
  }

  var mobileTrigger = document.querySelector('.mobile-menu-trigger');
  var mobileContainer = document.querySelector('.mobile-menu');
  var mobileNavigation = null;

  function closeMobileNavigation() {
    if (mobileNavigation) mobileNavigation.remove();
    mobileNavigation = null;
    if (mobileTrigger) {
      mobileTrigger.setAttribute('aria-expanded', 'false');
      mobileTrigger.setAttribute('aria-label', 'Ouvrir le menu');
      mobileTrigger.querySelector('span').textContent = '☰';
    }
  }

  if (mobileTrigger && mobileContainer) {
    mobileTrigger.addEventListener('click', function () {
      if (mobileNavigation) {
        closeMobileNavigation();
        return;
      }

      mobileNavigation = document.createElement('nav');
      mobileNavigation.id = 'mobile-navigation';
      mobileNavigation.className = 'mobile-links';
      mobileNavigation.setAttribute('aria-label', 'Navigation mobile');
      mobileNavigation.innerHTML =
        '<button class="mobile-parent" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="mobile-services-menu"><span>Prestations</span><span aria-hidden="true">+</span></button>' +
        '<div id="mobile-services-menu" class="mobile-submenu" data-open="false" aria-hidden="true">' +
        '<a href="/services/#depannage-reparation">Dépannage &amp; réparation</a>' +
        '<a href="/services/#assistance-installation">Assistance &amp; installation</a>' +
        '<a href="/services/#sauvegarde-donnees">Sauvegarde &amp; données</a>' +
        '<a href="/services/#professionnels">Services pour professionnels</a>' +
        '<a href="/services/">Toutes les prestations</a>' +
        '</div>' +
        '<a href="/a-propos/">À propos</a>' +
        '<a href="/zones/">Secteur</a>' +
        '<a href="/contact/">Contact</a>' +
        '<a href="tel:+33652246647">06 52 24 66 47</a>' +
        '<a href="/devis/">Devis gratuit</a>';
      mobileContainer.appendChild(mobileNavigation);
      mobileTrigger.setAttribute('aria-expanded', 'true');
      mobileTrigger.setAttribute('aria-label', 'Fermer le menu');
      mobileTrigger.querySelector('span').textContent = '×';

      var parentButton = mobileNavigation.querySelector('.mobile-parent');
      var submenu = mobileNavigation.querySelector('.mobile-submenu');
      parentButton.addEventListener('click', function () {
        var open = submenu.dataset.open !== 'true';
        submenu.dataset.open = open ? 'true' : 'false';
        submenu.setAttribute('aria-hidden', open ? 'false' : 'true');
        parentButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        parentButton.lastElementChild.textContent = open ? '−' : '+';
      });
      mobileNavigation.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMobileNavigation);
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (mobileNavigation) {
      closeMobileNavigation();
      mobileTrigger.focus();
      return;
    }
    setOpen(services, servicesButton, false);
    setOpen(repair, repairButton, false);
  });

  var timeline = document.querySelector('.timeline');
  if (!timeline) return;
  var items = Array.prototype.slice.call(timeline.children);
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var frame = null;

  function updateTimeline() {
    var viewportHeight = window.innerHeight;
    var count;
    var fill;

    if (reducedMotion) {
      count = items.length;
      fill = 80;
    } else if (window.matchMedia('(max-width: 680px)').matches) {
      count = items.filter(function (item) {
        return item.getBoundingClientRect().top < viewportHeight * 0.62;
      }).length;
      fill = count * 20;
    } else {
      var rect = timeline.getBoundingClientRect();
      var rawRatio = (viewportHeight * 0.98 - rect.top) / (viewportHeight * 0.7);
      var ratio = Math.min(1, Math.max(0, rawRatio));
      count = ratio > 0 ? Math.ceil(ratio * items.length) : 0;
      fill = Math.round(ratio * 80);
    }

    timeline.style.setProperty('--tl-fill', fill + '%');
    items.forEach(function (item, index) {
      item.classList.toggle('tl-active', index < count);
    });
  }

  function requestTimelineUpdate() {
    if (frame !== null) return;
    frame = window.requestAnimationFrame(function () {
      frame = null;
      updateTimeline();
    });
  }

  window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
  window.addEventListener('resize', requestTimelineUpdate);
  updateTimeline();
})();
