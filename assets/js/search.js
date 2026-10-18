/* AbotiBrahmin — client-side search. Reads ?q= from the URL, loads the language-specific
   index (a plain .js file so it also works when the site is opened from disk) and renders results
   that link to real HTML pages. No network requests, no backend. */
(function () {
  'use strict';
  var app = document.getElementById('search-app');
  if (!app) return;
  var lang = app.getAttribute('data-lang') === 'gu' ? 'gu' : 'en';
  var isGu = lang === 'gu';
  var base = app.getAttribute('data-root') || '';          // path from this page back to the site root
  var form = document.getElementById('searchForm');
  var input = document.getElementById('searchInput');
  var status = document.getElementById('searchStatus');
  var out = document.getElementById('searchResults');

  function norm(s) { return (s || '').toLowerCase().replace(/\s+/g, ' '); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function tokens(q) { return norm(q).trim().split(' ').filter(Boolean); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function score(entry, toks) {
    var total = 0;
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i], s = 0;
      if (entry._t.indexOf(t) !== -1) s += 10;
      if (entry._k.indexOf(t) !== -1) s += 6;
      if (entry._h.indexOf(t) !== -1) s += 4;
      if (entry._s.indexOf(t) !== -1) s += 3;
      if (entry._b.indexOf(t) !== -1) s += 1;
      if (entry._a.indexOf(t) !== -1) s += 2;
      if (s === 0) return 0;           // every word must match somewhere
      total += s;
    }
    return total;
  }

  function snippet(entry, toks) {
    var body = entry.body || entry.summary || '';
    var low = norm(body), pos = -1;
    for (var i = 0; i < toks.length; i++) { var p = low.indexOf(toks[i]); if (p !== -1 && (pos === -1 || p < pos)) pos = p; }
    if (pos === -1) return entry.summary || '';
    var start = Math.max(0, pos - 70), end = Math.min(body.length, pos + 170);
    return (start > 0 ? '… ' : '') + body.slice(start, end) + (end < body.length ? ' …' : '');
  }

  function highlight(text, toks) {
    var h = esc(text);
    toks.forEach(function (t) { if (t.length) h = h.replace(new RegExp('(' + escRe(esc(t)) + ')', 'gi'), '<mark>$1</mark>'); });
    return h;
  }

  function render(q, index) {
    out.innerHTML = '';
    var toks = tokens(q);
    if (!toks.length) { status.textContent = isGu ? 'શોધવા માટે શબ્દ લખો.' : 'Type a word or phrase to search the encyclopedia.'; return; }
    var res = [];
    index.forEach(function (e) { var s = score(e, toks); if (s > 0) res.push({ e: e, s: s }); });
    res.sort(function (a, b) { return b.s - a.s; });
    status.textContent = isGu ? ('"' + q + '" માટે ' + res.length + ' પરિણામ') : (res.length + (res.length === 1 ? ' result for “' : ' results for “') + q + '”');
    if (!res.length) {
      var p = document.createElement('p');
      p.textContent = isGu ? 'કોઈ પરિણામ મળ્યું નથી. અન્ય શબ્દ અથવા ગુજરાતી/અંગ્રેજી જોડણી અજમાવો.' : 'No results. Try another word or a different English/Gujarati spelling.';
      out.appendChild(p); return;
    }
    res.slice(0, 40).forEach(function (r) {
      var e = r.e, d = document.createElement('article');
      d.className = 'search-result';
      var typeLabel = e.type === 'surname' ? (isGu ? 'અટક નોંધ' : 'Surname entry') : (e.type === 'page' ? (isGu ? 'પૃષ્ઠ' : 'Page') : (isGu ? 'લેખ' : 'Article'));
      d.innerHTML = '<div class="meta">' + esc(typeLabel) + (e.category ? ' • ' + esc(e.category) : '') + '</div>' +
        '<h2><a href="' + esc(base + e.url) + '">' + highlight(e.title, toks) + '</a></h2>' +
        '<p>' + highlight(snippet(e, toks), toks) + '</p>' +
        (e.altUrl ? '<p class="lang-note"><a href="' + esc(base + e.altUrl) + '" hreflang="' + (isGu ? 'en' : 'gu') + '" lang="' + (isGu ? 'en' : 'gu') + '">' + (isGu ? 'English version' : 'ગુજરાતી આવૃત્તિ') + '</a></p>' : '');
      out.appendChild(d);
    });
  }

  function prepare(index) {
    index.forEach(function (e) {
      e._t = norm(e.title); e._k = norm(e.keywords); e._h = norm(e.headings); e._s = norm(e.summary); e._b = norm(e.body); e._a = norm(e.alt);
    });
    return index;
  }

  function run(index) {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q') || '';
    input.value = q;
    render(q, index);
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var nq = input.value;
      if (window.history && history.replaceState) history.replaceState(null, '', window.location.pathname + (nq ? '?q=' + encodeURIComponent(nq) : ''));
      render(nq, index);
    });
  }

  var s = document.createElement('script');
  s.src = base + 'assets/js/search-index-' + lang + '.js';
  s.onload = function () { run(prepare(window.ABOTI_SEARCH_INDEX || [])); };
  s.onerror = function () { status.textContent = isGu ? 'શોધ અનુક્રમણિકા લોડ થઈ શકી નથી.' : 'The search index could not be loaded.'; };
  document.head.appendChild(s);
})();
