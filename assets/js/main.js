/* Filtros de projeto + marcação da seção ativa no rail. */

(function () {
  'use strict';

  /* ── filtros ─────────────────────────────────────────── */
  var filters = document.querySelectorAll('.filter');
  var projects = document.querySelectorAll('#work-grid .proj');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.dataset.filter;

      filters.forEach(function (b) {
        b.classList.toggle('is-on', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });

      projects.forEach(function (card) {
        var tags = (card.dataset.tags || '').split(' ');
        card.hidden = tag !== 'all' && tags.indexOf(tag) === -1;
      });
    });
  });

  /* ── seção ativa ─────────────────────────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail__nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var visible = new Set();

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });

      // a primeira seção visível na ordem do documento manda
      var active = sections.find(function (s) { return visible.has(s.id); });

      links.forEach(function (a) {
        a.classList.toggle('is-on', Boolean(active) && a.getAttribute('href') === '#' + active.id);
      });
    }, { rootMargin: '-25% 0px -60% 0px' });

    sections.forEach(function (s) { io.observe(s); });
  }
})();
