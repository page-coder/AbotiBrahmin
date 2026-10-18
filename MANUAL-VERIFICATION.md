# Items needing manual verification before publishing

## URLs / configuration
1. **Production URL** `https://page-coder.github.io/AbotiBrahmin/` was taken from the canonical/JSON-LD in your supplied file. Confirm it, or rebuild with `ABOTI_SITE_URL`.
2. **GitHub repository URL** `https://github.com/page-coder/AbotiBrahmin` (used for the Issues link on the contact page) is an *assumption* derived from the Pages URL.
3. **Contact e-mail**: none was supplied, so none is published. Set `ABOTI_CONTACT_EMAIL` if wanted.
4. `lastmod` in the sitemap is the build date (2026-10-17); article "Last reviewed: October 2026" is carried over from your file (JSON-LD `dateModified` = `2026-10`).

## Images (see `assets/images/README.md`)
5. **None of the 7 images has a verified author, source or licence.** They were embedded in your file with generic "Supplied …" credit lines only. Verify or replace each; the Ravi Varma Press prints may be public domain but this must be confirmed per print.
6. `ascetic-stone-doorway-photo.jpg` is a photograph of an identifiable elderly man (used on the culture and oral-history articles) and is generic rather than specific to Aboti Brahmins; confirm permission or replace.
7. Several articles reuse the same image as a "representative" visual; captions in your file describe them as contextual, not evidence. Alt texts were written from what the images show plus the supplied label.

## Facts and sources (content was preserved as supplied, not re-researched)
8. **Source quality:** many references in your articles point to Wikipedia and Grokipedia pages, and the surname data rests on a community website (abotiparivar.weebly.com), a Grokipedia synthesis and an NGO field report. The bibliography page flags link types, but the underlying claims (e.g. 1228 CE Rajasthan record, 1557 Dwarka settlement, 1901 Junagadh census count of 970, Enthoven 1920 wording, Om Prakash 2005 p. 313) should be checked against the actual books/records.
9. Surname directory: village lists are taken as written; the table row for Shiyani gives "Rana-Varvana" (Gujarati "રાણા-વરવાળા") while the infobox says "Rana Vadvala" — reconcile. Grouped rows (Borichiya/Baleja, Jamariya/Goriya, Kothari/Mehta/Poriya/Govindvira) are flagged on the page as group-level information. Only the spelling pair Odedara/Odedra comes from the source; no other variant spellings are claimed.
10. Wording I changed from your file because it over-claimed: "Verified Archival Citations / Verified Citations / verified books" → neutral wording ("span of cited records", "citations", "books and census reports"); "પ્રમાણિત" similarly removed in those UI strings. Article body text was not altered. One Gujarati typo was fixed ("વિद्यમાન" contained Devanagari letters → "વિદ્યમાન").
11. FAQ answers are verbatim-faithful summaries of your article text (article summaries, plus statements from the gotras, editorial and privacy text); no new factual claims were introduced.
12. Have a Gujarati speaker review the Gujarati text I wrote (listed in TEST-REPORT).
13. Privacy page states no analytics/cookies and discloses Google Fonts and GitHub Pages; update it if you add analytics or self-host fonts.
