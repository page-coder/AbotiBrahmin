# Test Report

Test date: 15 November 2026

## Scope and environment

Checks were run against the extracted project directory before packaging. The supplied archive did not include the `tools/verify.py` or `tools/browser_test.py` scripts described in its earlier report, so those scripts could not be rerun. The browser executable required by Playwright was not installed in this environment. Accordingly, this report distinguishes executed static checks from browser tests that remain outstanding.

## Static checks executed

| Check | Result |
|---|---|
| Public English/Gujarati HTML pages parsed with Python `html.parser` / BeautifulSoup | PASS — 48 pages |
| Exactly one `<h1>` and one `<main>` per page | PASS — 48 pages |
| `lang` attribute matches page directory (`en` or `gu`) | PASS — 48 pages |
| Page title and meta description present | PASS — 48 pages |
| Duplicate HTML IDs | PASS — none detected |
| Missing image alt attributes | PASS — none detected |
| Local HTML/CSS/JS/image links and asset paths | PASS — 0 broken local references |
| Reciprocal `hreflang` en/gu/x-default metadata | PASS — all paired pages |
| JSON-LD syntax | PASS — all embedded JSON-LD parsed |
| JavaScript syntax via `node --check` | PASS — 4 files |
| `sitemap.xml` syntax | PASS |
| Sitemap excludes 404 and search utility pages | PASS — 44 indexable URLs |
| `robots.txt` sitemap declaration | PASS — project sitemap URL |
| Contribution email link on every public page | PASS — 48 pages |
| Bilingual footer contribution panel | PASS — 48 pages |
| English/Gujarati filename pairs | PASS — 24 pairs |

## JavaScript files checked

- `assets/js/main.js`
- `assets/js/search.js`
- `assets/js/search-index-en.js`
- `assets/js/search-index-gu.js`

All four passed `node --check`.

## Browser / visual checks not executed

- Playwright package was present, but Chromium was not installed; launch failed because the browser executable was missing.
- Therefore no claim is made that desktop/tablet/mobile browser interactions, real font rendering, visual overflow, browser console errors, or search interaction have been manually browser-tested in this run.
- Firefox, Safari and physical Android devices were not tested.
- WCAG 2.2 AA conformance was not certified by an automated accessibility scanner or assistive-technology test.

## Content and editorial checks still required

- Full Gujarati translation parity is incomplete for multiple legacy pages. See `TRANSLATION-STATUS.md`.
- Native Gujarati/Kathiyawadi proofreading is required, including the two newer Gujarati chapters.
- Confirm image author, licence and permissions before publication; see `MANUAL-VERIFICATION.md` and `assets/images/README.md`.
- Verify historical claims against the cited primary books, census records, inscriptions or archival records.
- Confirm current company leadership, ownership, legal status and network figures directly from company disclosures and current MCA filings.
- Review the live GitHub Pages deployment only after the owner explicitly chooses to publish.

## Conclusion

The archive passed the static structural, metadata, local-link, JSON-LD, JavaScript syntax and sitemap checks listed above. It is **not yet ready to be described as fully bilingual, browser-tested, WCAG-certified, or fully fact-verified**. Those remaining requirements are documented rather than represented as completed.
