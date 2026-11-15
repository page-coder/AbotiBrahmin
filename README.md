# AbotiBrahmin — Digital Heritage Encyclopedia

A static bilingual (English and Gujarati) heritage website built with HTML, CSS and vanilla JavaScript for GitHub Pages.

## Project structure

- Root-level `.html` files: English homepage, articles, directories, search, contact and utility pages.
- `gu/`: Gujarati counterparts for the English pages.
- `assets/css/style.css`: shared stylesheet.
- `assets/js/main.js`: shared navigation, display and directory interactions.
- `assets/js/search.js`: client-side search interface.
- `assets/js/search-index-en.js` and `search-index-gu.js`: language-specific search data.
- `assets/images/`: supplied visual assets, icons and social preview image.
- `sitemap.xml`, `sitemap.txt`, `robots.txt`: search-engine discovery files.
- `manifest.webmanifest`: web app metadata.
- `BUILD-REPORT.md`, `TEST-REPORT.md`, `TRANSLATION-STATUS.md`, `CONTENT-SOURCES.md`, `MANUAL-VERIFICATION.md`: project status and editorial documentation.

## Run locally

Open `index.html` in a browser, or serve this directory using any simple static HTTP server. No backend, database, API key or JavaScript framework is required. Search is client-side and uses the included language-specific search indexes.

## Deploy to GitHub Pages

Nothing in this project is published automatically.

1. Review `MANUAL-VERIFICATION.md`, especially image licensing, source quality and translation status.
2. Copy the **contents** of this directory into the root of the intended GitHub repository.
3. Commit and push only when the project owner approves.
4. In the repository, open **Settings → Pages**.
5. Select **Deploy from a branch**, choose the intended branch and `/ (root)`, then save.
6. After GitHub Pages finishes building, verify the homepage, article deep links, Gujarati pages and sitemap.

The configured canonical site URL is `https://page-coder.github.io/AbotiBrahmin/`. Confirm it still matches the intended repository before deployment.

## Editing content

The pages are static HTML. Edit the corresponding English and Gujarati HTML files together, then update both search indexes and the sitemap if page URLs or searchable content change. Keep `lang`, canonical, reciprocal `hreflang`, Open Graph metadata and relative asset paths correct.

No source generator or build scripts were present in the supplied ZIP. Do not assume a `tools/` directory or `tools/build.py` exists in this archive.

## Contact and contributions

The suggestion links use `mailto:dhruvjoshi071@gmail.com?subject=Aboti%20Brahmin%20Encyclopedia%20Suggestion`. There is no server-side contact form.

## Editorial and publication limits

- Gujarati counterparts exist for all English page filenames, but complete translation parity is not yet achieved. See `TRANSLATION-STATUS.md`.
- Gujarati content should be reviewed by a fluent speaker, with attention to Kathiyawadi vocabulary and proper names.
- Company information is separated from community-reported connections. See `CONTENT-SOURCES.md`.
- Image authorship and licences are not fully established. Confirm permissions before publication.
- Static checks have been run; browser-level visual and interaction testing remains outstanding. See `TEST-REPORT.md`.
- This project has not been pushed or published as part of this update.
