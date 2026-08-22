/* Marca a seção ativa no rail conforme a página rola. */

(function () {
  'use strict';

  var links = Array.prototype.slice.call(document.querySelectorAll('.rail__nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !sections.length) return;

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
})();
