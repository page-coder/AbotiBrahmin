/* AbotiBrahmin — shared behaviour (vanilla JS, no dependencies).
   Language switching is done with ordinary links between /page.html and /gu/page.html;
   this file only handles theme, text size, menu, progress bar, TOC highlighting,
   copy-link buttons, directory filters and the surname filter. */
(function () {
  'use strict';
  var root = document.documentElement;
  var isGu = (root.getAttribute('lang') || 'en').toLowerCase().indexOf('gu') === 0;

  function getStore(k, d) { try { var v = window.localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function setStore(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }

  function toast(msg) {
    var el = document.getElementById('toastBanner');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    window.clearTimeout(toast._t);
    toast._t = window.setTimeout(function () { el.classList.remove('show'); }, 2200);
  }

  /* ---- Theme ---- */
  function themeLabel(theme) {
    if (theme === 'dark') return isGu ? '☀ લાઇટ થીમ' : '☀ Light Mode';
    return isGu ? '☾ ડાર્ક થીમ' : '☾ Dark Mode';
  }
  var themeBtn = document.getElementById('themeToggleBtn');
  function applyTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    if (themeBtn) { themeBtn.textContent = themeLabel(theme); themeBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false'); }
  }
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setStore('aboti_theme', next); applyTheme(next);
  });

  /* ---- Text size ---- */
  var sizes = { small: '0.96rem', standard: '1.08rem', large: '1.2rem' };
  var sizeBtns = document.querySelectorAll('[data-font-size]');
  function applySize(s) {
    if (!sizes[s]) s = 'standard';
    root.style.setProperty('--article-font-size', sizes[s]);
    for (var i = 0; i < sizeBtns.length; i++) {
      var on = sizeBtns[i].getAttribute('data-font-size') === s;
      sizeBtns[i].classList.toggle('active', on);
      sizeBtns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }
  applySize(getStore('aboti_fontsize', 'standard'));
  for (var i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener('click', function () {
      var s = this.getAttribute('data-font-size'); setStore('aboti_fontsize', s); applySize(s);
    });
  }

  /* ---- Remember explicit language choice (informational only; no automatic redirects) ---- */
  var langLinks = document.querySelectorAll('[data-lang-switch]');
  for (var j = 0; j < langLinks.length; j++) {
    langLinks[j].addEventListener('click', function () { setStore('aboti_lang', this.getAttribute('data-lang-switch')); });
  }

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById('mobileMenuBtn');
  var nav = document.getElementById('mainNavContainer');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('mobile-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('mobile-open')) { nav.classList.remove('mobile-open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.focus(); }
    });
  }

  /* ---- Reading progress + back to top ---- */
  var bar = document.getElementById('readingProgressBar');
  var topBtn = document.getElementById('backToTop');
  function onScroll() {
    var d = document.documentElement;
    var max = d.scrollHeight - d.clientHeight;
    var pct = max > 0 ? Math.min(100, Math.max(0, (d.scrollTop / max) * 100)) : 0;
    if (bar) bar.style.width = pct + '%';
    if (topBtn) topBtn.classList.toggle('visible', d.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (topBtn) topBtn.addEventListener('click', function () {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---- Print ---- */
  var pb = document.querySelectorAll('[data-print]');
  for (var p = 0; p < pb.length; p++) pb[p].addEventListener('click', function () { window.print(); });

  /* ---- Copy section link ---- */
  var cps = document.querySelectorAll('[data-copy-anchor]');
  for (var c = 0; c < cps.length; c++) {
    cps[c].addEventListener('click', function () {
      var url = window.location.href.split('#')[0] + '#' + this.getAttribute('data-copy-anchor');
      var done = function () { toast(isGu ? 'લિંક કોપી થઈ ગઈ' : 'Link copied'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { window.prompt(isGu ? 'લિંક કોપી કરો:' : 'Copy this link:', url); });
      else window.prompt(isGu ? 'લિંક કોપી કરો:' : 'Copy this link:', url);
    });
  }

  /* ---- TOC highlight ---- */
  var tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    for (var t = 0; t < tocLinks.length; t++) map[tocLinks[t].getAttribute('href').slice(1)] = tocLinks[t];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          for (var k in map) map[k].classList.remove('active');
          map[en.target.id].classList.add('active');
          map[en.target.id].removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    for (var id in map) { var s = document.getElementById(id); if (s) io.observe(s); }
  }

  /* ---- Directory category filter (progressive enhancement; all cards visible without JS) ---- */
  var fbtns = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-category]');
  var count = document.getElementById('filterCount');
  function applyFilter(cat) {
    var shown = 0;
    for (var a = 0; a < cards.length; a++) {
      var vis = cat === 'all' || cards[a].getAttribute('data-category') === cat;
      cards[a].hidden = !vis; if (vis) shown++;
    }
    for (var b = 0; b < fbtns.length; b++) fbtns[b].setAttribute('aria-pressed', fbtns[b].getAttribute('data-filter') === cat ? 'true' : 'false');
    if (count) count.textContent = (isGu ? 'દર્શાવેલ લેખો: ' : 'Showing articles: ') + shown;
  }
  if (fbtns.length) {
    for (var f = 0; f < fbtns.length; f++) fbtns[f].addEventListener('click', function () {
      var cat = this.getAttribute('data-filter');
      applyFilter(cat);
      if (window.history && history.replaceState) history.replaceState(null, '', cat === 'all' ? window.location.pathname : '#' + cat);
    });
    var h = (window.location.hash || '').slice(1);
    var valid = false; for (var v = 0; v < fbtns.length; v++) if (fbtns[v].getAttribute('data-filter') === h) valid = true;
    applyFilter(valid ? h : 'all');
  }

  /* ---- Open an FAQ item (and scroll to it) when linked by #faq-N ---- */
  if (window.location.hash && window.location.hash.indexOf('#faq-') === 0) {
    var fd = document.getElementById(window.location.hash.slice(1));
    if (fd && fd.tagName === 'DETAILS') { fd.open = true; }
  }

  /* ---- Surname directory filter ---- */
  var sInput = document.getElementById('surnameFilter');
  var sCards = document.querySelectorAll('[data-surname-card]');
  var sStatus = document.getElementById('surnameStatus');
  function norm(s) { return (s || '').toLowerCase(); }
  function filterSurnames() {
    var q = norm(sInput.value).trim(); var n = 0;
    for (var i2 = 0; i2 < sCards.length; i2++) {
      var vis = !q || norm(sCards[i2].getAttribute('data-search')).indexOf(q) !== -1;
      sCards[i2].hidden = !vis; if (vis) n++;
    }
    if (sStatus) sStatus.textContent = (isGu ? 'મળેલી અટકો: ' : 'Matching entries: ') + n;
  }
  if (sInput && sCards.length) { sInput.addEventListener('input', filterSurnames); filterSurnames(); }
})();
