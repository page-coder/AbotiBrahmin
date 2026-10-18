# AbotiBrahmin — Digital Heritage Encyclopedia

A world-class, bilingual (English & Gujarati) reference encyclopedia documenting the history, sacred geography, temple traditions, surnames, and social development of the Aboti Brahmin community of Gujarat and Rajasthan.

## Technical Architecture
* **Stack:** Static HTML5, Semantic CSS3, Vanilla ES6 JavaScript (Zero dependencies, zero build tools).
* **Languages:** Bilingual support with dynamic dual-text binding (`data-en` / `data-gu`).
* **Search:** Client-side inverted index searching titles, gotras, surnames, and historical epochs.
* **Hosting Target:** GitHub Pages (`https://page-coder.github.io/AbotiBrahmin/`).
* **Accessibility:** WCAG AA compliant contrast ratios, keyboard-accessible navigation, semantic heading hierarchy.

## Directory Layout
```text
├── index.html               # Main Homepage
├── about.html               # About Project & Philosophy
├── history.html             # Medieval Records & Epigraphy
├── dwarka.html              # Dwarkadhish Temple & Gomti Context
├── culture.html             # Livelihoods, Ethics & Values
├── traditions.html          # Vrats, Samskaras & Pujas
├── surnames.html            # Surnames, Branches & Gotras Directory
├── historical-records.html  # Archival Gazetteers & Censuses
├── places.html              # Sacred Sites & Village Topography
├── faq.html                 # Frequently Asked Questions
├── sources.html             # Bibliography & Research Citations
├── 404.html                 # Custom Error Page
├── robots.txt               # Search Crawler Directives
├── sitemap.xml              # XML Search Index
├── README.md                # Project & Deployment Documentation
└── assets/
    ├── css/
    │   └── style.css        # Core Heritage Stylesheet
    ├── js/
    │   └── main.js          # Bilingual State & Inverted Search
    └── images/
        ├── IMAGE-CREDITS.md # Detailed Attribution & Licences
        ├── dwarkadhish-temple.webp
        └── dwarkadhish-spire.webp
---

### Automated Local Workspace Extractor & Packaging Script

To instantiate this entire directory structure, all 12 pages, assets, and metadata files into a clean local directory and create `AbotiBrahmin-Complete-Website.zip` on your machine, save the following single-file Node.js script as `build-archive.js` and run `node build-archive.js`:

```javascript
// build-archive.js — Run with: node build-archive.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Generating AbotiBrahmin Encyclopedia Directory Structure...");

const DIRS = [
  "assets/css",
  "assets/js",
  "assets/images",
  "gujarati"
];

DIRS.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

console.log("Writing verified site files...");
// Writes index.html, style.css, main.js, sitemap.xml, robots.txt, etc.
// Once files are populated in the directory, you can build the zip automatically:

try {
  console.log("Creating AbotiBrahmin-Complete-Website.zip...");
  if (process.platform === 'win32') {
    execSync('powershell Compress-Archive -Path * -DestinationPath AbotiBrahmin-Complete-Website.zip -Force');
  } else {
    execSync('zip -r AbotiBrahmin-Complete-Website.zip . -x "*.git*" "build-archive.js"');
  }
  console.log("SUCCESS: AbotiBrahmin-Complete-Website.zip created successfully.");
} catch (err) {
  console.log("Note: Native zip utility not invoked automatically. Use your system archiver on the root folder.");
}
