# Test report

Run with `python3 tools/verify.py` (static) and `python3 tools/browser_test.py` (Chromium via Playwright, local server that mimics GitHub Pages: project sub-path `/AbotiBrahmin/` and `404.html` for missing URLs). Both were run on the final build; both pass.

## Static checks — PASS (43 HTML files)
* Tag nesting/closure, unique ids, exactly one `<h1>` and `<main>` per page, no skipped heading levels, `lang` attribute matches `en`/`gu`.
* Unique `<title>` and meta description on every page; canonical equals the configured site URL + page path.
* 2,852 internal links and anchors resolve; all CSS/JS/image/form targets exist; every `img` has alt text and width/height; `target=_blank` links use `rel=noopener`.
* `hreflang` en/gu/x-default present and reciprocal on all pages except `404.html` (which has no translation pair).
* `sitemap.xml` parses (40 URLs), lists every indexable page, excludes `404` and the `noindex` search pages; `robots.txt` references the sitemap; `manifest.webmanifest` valid, icons exist.
* JSON-LD parses on every page; Article headline/language match the visible page; FAQ question count matches the visible questions.
* `node --check` passes for all JS. Every search-index URL (45 entries per language) resolves to a real page/anchor.
* No placeholder text and no base64 images left in pages.

## Browser checks — PASS
* No horizontal overflow, console errors or failed local requests on 36 pages at 1366, 820 and 375 px (mobile menu, tables scroll inside their own container).
* Search: EN and GU queries, cross-script match, header-form submit, "no results", HTML-escaped input, works from `file://`.
* Language switch EN↔GU lands on the equivalent article; dark theme and text-size controls work and persist; directory category filter; surname filter in Latin and Gujarati script; skip link is the first Tab stop; TOC and citation anchors work.
* 404 page served for a deep missing URL still loads its CSS and links via the project base path.
* `prefers-reduced-motion` disables smooth scrolling. Articles load directly (deep link) with relative paths.

## Not tested / limitations (disclosed)
* No official W3C validator, Lighthouse, or axe-core was available offline; HTML validity was checked with the custom parser above, not the W3C Nu validator. Colour contrast was adjusted by calculation (accent buttons/links) but not machine-audited.
* Google Fonts could not be fetched in the sandbox, so typography was tested with fallback fonts only. Only Chromium was used (no Firefox/Safari/real phones).
* Gujarati text for new pages (FAQ, directory, contact, privacy, labels, image alt text) was written by me and **has not been reviewed by a native speaker**; the original Gujarati article text is untouched except one typo fix (see manual list).
* Nothing was deployed, so live GitHub Pages behaviour, indexing and Search Console are unverified.
