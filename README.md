# AbotiBrahmin — static bilingual heritage encyclopedia

Plain HTML5 + CSS3 + vanilla JavaScript. No backend, database, build step on the server, or API keys; it runs on free GitHub Pages.

## What was built from your `index.html`
Your file was a single-page JavaScript app holding **13 long-form articles (English + Gujarati)** and 7 unique images embedded as base64.
All of that content was preserved and converted into real, crawlable pages:

* 13 articles × 2 languages (`<slug>.html` and `gu/<slug>.html`) with infobox, table of contents, epistemic labels, comparative table, linked citations, references, related and previous/next links.
* Home, article directory (category filter), search, **surname directory** (built only from the surname table in your gotras article), FAQ (answers reuse your article text), combined bibliography (68 distinct sources), corrections/contact, privacy, `404.html`.
* `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, icons, JSON-LD, Open Graph, hreflang pairs, search indexes.

Your page titles for the originally requested files map to existing articles rather than new thin pages: history/origins → `history-and-origins.html`, Dwarka → `dwarka-historical-and-cultural-context.html`, religious traditions → `bhagwan-parshuram-…` and `rishis-munis-…`, cultural heritage/customs → `culture-customs-and-festivals.html`, surnames → `surnames.html` + gotras article, references → `historical-documents-…`, about → `about-and-editorial-policy.html`. No pages were invented without source content.

## Language model
Each language has its own URL (`/` English, `/gu/` Gujarati). The switcher in the top strip is a normal link to the equivalent page. There is no automatic redirect. Every page except `404.html` has reciprocal `hreflang` (en, gu, x-default).

## Deploy to GitHub Pages (exact steps)
1. Review the "Manual verification" list in `MANUAL-VERIFICATION.md` (especially image licences and the repository URL).
2. Create / open the repository (the supplied canonical implies `page-coder/AbotiBrahmin`).
3. Copy the contents of this folder into the repository root (do not nest it in another folder). Keep `.nojekyll` out; it is not needed.
4. Commit and push to the `main` branch.
5. Repository → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`. Save.
6. Open `https://page-coder.github.io/AbotiBrahmin/`. Wait a minute or two for the first build.

You were asked not to publish without approval; nothing was pushed anywhere.

## Changing the site URL, e-mail or repository (before deployment)
All URLs are generated from `tools/build_core.py` (top of file). Either edit them or set environment variables, then rebuild:

```bash
ABOTI_SITE_URL="https://example.org/AbotiBrahmin/" \
ABOTI_REPO_URL="https://github.com/OWNER/REPO" \
ABOTI_CONTACT_EMAIL="you@example.org" \
python3 tools/build.py
python3 tools/verify.py
```
This rewrites canonicals, Open Graph URLs, JSON-LD, hreflang, `sitemap.xml` and `robots.txt` consistently. Leave `ABOTI_CONTACT_EMAIL` empty to publish no address (corrections then go through GitHub Issues). Requires Python 3 and Pillow (for image sizes/icons).

## Editing content
Article text lives in `tools/articles.json`; page templates and the new-page text live in `tools/build.py` / `tools/build_core.py`. Edit, rebuild, verify, commit the generated HTML. Do not hand-edit generated `.html` files (they are overwritten).

## Verify in Google Search Console (nothing has been indexed yet)
1. Add the URL-prefix property `https://page-coder.github.io/AbotiBrahmin/` and verify ownership (HTML-file or meta-tag method; a meta tag can be added through `extra_head` in `layout()`).
2. Sitemaps → submit `sitemap.xml`.
3. URL Inspection → test a few pages (home, an article, a `/gu/` page) → *Request indexing*.
4. Check Pages → "Indexed" and Enhancements/FAQ reports after Google has crawled; allow days to weeks. No ranking or indexing claim is made here.

## Project layout
```
index.html, <slug>.html …           English pages        gu/…                Gujarati pages
articles.html search.html surnames.html frequently-asked-questions.html sources.html contact.html privacy.html 404.html
sitemap.xml robots.txt manifest.webmanifest
assets/css/style.css  assets/js/main.js search.js search-index-en.js search-index-gu.js  assets/images/ (+ README.md = image register)
tools/  articles.json build.py build_core.py verify.py browser_test.py
TEST-REPORT.md  MANUAL-VERIFICATION.md
```

## Known external dependency
Google Fonts (Cormorant Garamond, Inter, Source Serif 4, Noto Sans/Serif Gujarati) load from Google as in your original; pages fall back to system fonts if blocked. This is disclosed on the privacy page. Self-host the fonts if you want zero third-party requests.
