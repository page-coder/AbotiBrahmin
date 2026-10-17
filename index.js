// your code goes here
/**
 * AbotiBrahmin Encyclopedia — Client-side Navigation, Search, and Bilingual UI
 */

const SITE_SEARCH_INDEX = [
  {
    titleEn: "Community Overview",
    titleGu: "સમુદાય પરિચય અને વિહંગાવલોકન",
    url: "index.html",
    categoryEn: "Overview",
    categoryGu: "પરિચય",
    summaryEn: "Introduction to Aboti Brahmin terminology, regional distribution in Saurashtra and Dwarka, and overview of traditions.",
    summaryGu: "અબોટી બ્રાહ્મણ શબ્દાવલી, સૌરાષ્ટ્ર અને દ્વારકામાં પ્રાદેશિક વિતરણ અને પરંપરાઓનો પરિચય."
  },
  {
    titleEn: "History and Origins",
    titleGu: "ઇતિહાસ અને ઉત્પત્તિના સંદર્ભો",
    url: "history.html",
    categoryEn: "History",
    categoryGu: "ઇતિહાસ",
    summaryEn: "Medieval 1228 CE Rajasthan records, migration from Dvaravati, 16th-century temple records, and Pancha-Gauda classification.",
    summaryGu: "ઇ.સ. ૧૨૨૮ રાજસ્થાન દસ્તાવેજો, દ્વારવતીથી સ્થળાંતર, ૧૬મી સદીના મંદિર વહીવટી દસ્તાવેજો અને પંચ-ગૌડ વર્ગીકરણ."
  },
  {
    titleEn: "Ancestry and Historical Origins",
    titleGu: "પૂર્વજો અને ઉત્પત્તિ પરંપરા",
    url: "origins.html",
    categoryEn: "Origins",
    categoryGu: "ઉત્પત્તિ",
    summaryEn: "Bhagwan Parshuram heritage, Shrimali and Sakaldwipiya connections, and distinction between oral memory and epigraphy.",
    summaryGu: "ભગવાન પરશુરામ વંશાવળી, શ્રીમાળી અને શાકદ્વીપીય સંબંધો તથા મૌખિક અને દસ્તાવેજી ઇતિહાસ વચ્ચેનો તફાવત."
  },
  {
    titleEn: "Dwarka and Sacred Geography",
    titleGu: "દ્વારકા અને પવિત્ર ભૂગોળ",
    url: "dwarka.html",
    categoryEn: "Geography",
    categoryGu: "ભૂગોળ",
    summaryEn: "Dwarkadhish Temple (Jagat Mandir), Gomti Ghat, Bet Dwarka, Shravana Janmashtami puja, and pilgrim vadi.",
    summaryGu: "દ્વારકાધીશ જગત મંદિર, ગોમતી ઘાટ, બેટ દ્વારકા, જન્માષ્ટમી સેવા-પૂજા અને અબોટી બ્રાહ્મણ વાડી."
  },
  {
    titleEn: "Religious Traditions & Worship",
    titleGu: "ધાર્મિક પરંપરાઓ અને ઉપાસના",
    url: "religious-traditions.html",
    categoryEn: "Traditions",
    categoryGu: "પરંપરા",
    summaryEn: "Vaishnavism, Gopal Upasana, Kuldevi veneration (Chamunda, Momai, Harsiddhi), and annual festive calendars.",
    summaryGu: "વૈષ્ણવ ભક્તિ, ગોપાલ ઉપાસના, કુળદેવી પૂજા (ચામુંડા, મોમાઈ, હરસિદ્ધિ) અને તહેવારો."
  },
  {
    titleEn: "Cultural Heritage & Language",
    titleGu: "સાંસ્કૃતિક વારસો અને ભાષા",
    url: "cultural-heritage.html",
    categoryEn: "Culture",
    categoryGu: "સંસ્કૃતિ",
    summaryEn: "Saurashtri and Kathiawadi Gujarati dialects, community salutations, folklore, and educational values.",
    summaryGu: "સૌરાષ્ટ્રી-કાઠિયાવાડી ગુજરાતી બોલી, જય ગોપાલ અભિવાદન, લોકપરંપરા અને શૈક્ષણિક મૂલ્યો."
  },
  {
    titleEn: "Customs, Samskaras & Livelihood",
    titleGu: "સામાજિક રીત-રિવાજો અને આજીવિકા",
    url: "customs-and-practices.html",
    categoryEn: "Customs",
    categoryGu: "રિવાજો",
    summaryEn: "Sixteen Vedic samskaras, marriage customs, community endogamy, transition to agriculture and courier networks.",
    summaryGu: "સોળ સંસ્કારો, લગ્ન પ્રથા, જ્ઞાતિ અંતર્લગ્ન, કૃષિ અને આંગડિયા-કુરિયર વ્યવસાય."
  },
  {
    titleEn: "Surnames and Gotras Directory",
    titleGu: "અટકો અને ગોત્ર નિર્દેશિકા",
    url: "surnames.html",
    categoryEn: "Genealogy",
    categoryGu: "વંશાવળી",
    summaryEn: "Searchable directory of community surnames (Shiyani, Mokariya, Odedara, Joshi, Tukadiya, etc.), gotras, and ancestral villages.",
    summaryGu: "અબોટી બ્રાહ્મણ અટકો (શિયાણી, મોકરિયા, ઓડેદરા, જોશી, તુકડિયા વગેરે), ગોત્ર અને મૂળ ગામોની વિગતવાર યાદી."
  },
  {
    titleEn: "Historical References & Epigraphs",
    titleGu: "ઐતિહાસિક દસ્તાવેજો અને શિલાલેખો",
    url: "historical-references.html",
    categoryEn: "Archives",
    categoryGu: "દસ્તાવેજો",
    summaryEn: "Chronological register of 1228 CE, 1557 CE, 1901 Junagadh Census, and 1920 Enthoven survey citations.",
    summaryGu: "ઇ.સ. ૧૨૨૮, ૧૫૫૭, ૧૯૦૧ જૂનાગઢ વસ્તી ગણતરી અને ૧૯૨૦ એન્થોવન સર્વેક્ષણના આધારો."
  },
  {
    titleEn: "Books, Archives & Bibliography",
    titleGu: "પુસ્તકો, સંદર્ભગ્રંથો અને સંગ્રહાલયો",
    url: "books-and-archives.html",
    categoryEn: "Bibliography",
    categoryGu: "સંદર્ભગ્રંથો",
    summaryEn: "Comprehensive catalog of colonial gazetteers, government reports, academic monographs, and community registers.",
    summaryGu: "ગેઝેટિયરો, સરકારી અહેવાલો, સંશોધન ગ્રંથો અને સામાજિક પ્રકાશનોની સંપૂર્ણ સંદર્ભ સૂચિ."
  },
  {
    titleEn: "Frequently Asked Questions",
    titleGu: "વારંવાર પૂછાતા પ્રશ્નો (FAQ)",
    url: "frequently-asked-questions.html",
    categoryEn: "FAQ",
    categoryGu: "પ્રશ્નોત્તરી",
    summaryEn: "Clear, evidence-backed answers to the most common historical and demographic questions about Aboti Brahmins.",
    summaryGu: "અબોટી બ્રાહ્મણ સમુદાયના ઇતિહાસ, વસ્તી અને પરંપરાઓ અંગે વારંવાર પૂછાતા પ્રશ્નોના આધારભૂત ઉત્તરો."
  },
  {
    titleEn: "Scholarly Sources & Citations",
    titleGu: "સંદર્ભ સ્ત્રોતો અને પ્રમાણભૂત પુરાવા",
    url: "sources.html",
    categoryEn: "Citations",
    categoryGu: "સ્ત્રોતો",
    summaryEn: "Numbered bibliographic citations, primary and secondary sources, and epistemic evaluation criteria.",
    summaryGu: "ક્રમબદ્ધ ગ્રંથસૂચિ, પ્રાથમિક અને ગૌણ સ્ત્રોતો તથા સંશોધન પદ્ધતિના ધોરણો."
  }
];

// State
let currentLang = localStorage.getItem("aboti_lang") || "en";
let currentTheme = localStorage.getItem("aboti_theme") || "light";
let currentFontSize = localStorage.getItem("aboti_fontsize") || "standard";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initFontSize();
  initReadingProgress();
  initSearch();
  initMobileMenu();
  highlightActiveNav();
});

function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.textContent = currentTheme === "dark" ? "☼ Light Mode" : "☾ Dark Mode";
  }
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("aboti_theme", currentTheme);
  initTheme();
}

function initLanguage() {
  document.documentElement.setAttribute("lang", currentLang);
  const btnEn = document.getElementById("langBtnEn");
  const btnGu = document.getElementById("langBtnGu");

  if (btnEn && btnGu) {
    if (currentLang === "gu") {
      btnGu.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      btnEn.classList.add("active");
      btnGu.classList.remove("active");
    }
  }

  // Toggle visibility of language-specific spans
  document.querySelectorAll("[data-lang-en]").forEach(el => {
    if (currentLang === "gu" && el.getAttribute("data-lang-gu")) {
      el.textContent = el.getAttribute("data-lang-gu");
    } else {
      el.textContent = el.getAttribute("data-lang-en");
    }
  });

  document.querySelectorAll(".lang-block-en").forEach(el => {
    el.style.display = currentLang === "en" ? "block" : "none";
  });
  document.querySelectorAll(".lang-block-gu").forEach(el => {
    el.style.display = currentLang === "gu" ? "block" : "none";
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("aboti_lang", currentLang);
  initLanguage();
}

function initFontSize() {
  const root = document.documentElement;
  if (currentFontSize === "small") root.style.fontSize = "14.5px";
  else if (currentFontSize === "large") root.style.fontSize = "17.5px";
  else root.style.fontSize = "16px";

  ["fontBtnSm", "fontBtnMd", "fontBtnLg"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.remove("active");
  });

  if (currentFontSize === "small" && document.getElementById("fontBtnSm")) {
    document.getElementById("fontBtnSm").classList.add("active");
  } else if (currentFontSize === "large" && document.getElementById("fontBtnLg")) {
    document.getElementById("fontBtnLg").classList.add("active");
  } else if (document.getElementById("fontBtnMd")) {
    document.getElementById("fontBtnMd").classList.add("active");
  }
}

function setFontSize(size) {
  currentFontSize = size;
  localStorage.setItem("aboti_fontsize", currentFontSize);
  initFontSize();
}

function initReadingProgress() {
  const bar = document.getElementById("readingProgressBar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, progress)) + "%";
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNavContainer");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
    });
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* Client-Side Search Modal / Dropdown */
function initSearch() {
  const form = document.getElementById("headerSearchForm");
  const input = document.getElementById("headerSearchInput");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    performSearch(query);
  });
}

function performSearch(query) {
  const results = SITE_SEARCH_INDEX.filter(item => {
    return item.titleEn.toLowerCase().includes(query) ||
           item.titleGu.toLowerCase().includes(query) ||
           item.summaryEn.toLowerCase().includes(query) ||
           item.summaryGu.toLowerCase().includes(query);
  });

  displaySearchResults(query, results);
}

function displaySearchResults(query, results) {
  let modalBackdrop = document.getElementById("searchModalBackdrop");
  if (!modalBackdrop) {
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "searchModalBackdrop";
    modalBackdrop.style.position = "fixed";
    modalBackdrop.style.inset = "0";
    modalBackdrop.style.background = "rgba(20, 12, 10, 0.75)";
    modalBackdrop.style.display = "flex";
    modalBackdrop.style.alignItems = "center";
    modalBackdrop.style.justifyContent = "center";
    modalBackdrop.style.zIndex = "1200";
    modalBackdrop.style.padding = "1rem";
    modalBackdrop.innerHTML = `
      <div style="background:var(--surface-card);border:2px solid var(--gold);border-radius:6px;max-width:680px;width:100%;max-height:85vh;overflow-y:auto;padding:1.75rem;box-shadow:0 16px 40px rgba(0,0,0,0.5);">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--gold);padding-bottom:0.65rem;margin-bottom:1rem;">
          <h3 id="searchModalHeader" style="font-family:var(--font-heading);font-size:1.5rem;margin:0;color:var(--temple-brown);">Search Results</h3>
          <button type="button" class="read-article-link" onclick="closeSearchModal()">✕ Close</button>
        </div>
        <div id="searchModalContent"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);
  }

  const content = document.getElementById("searchModalContent");
  modalBackdrop.style.display = "flex";

  if (results.length === 0) {
    content.innerHTML = `
      <p style="color:var(--text-secondary);">No encyclopedia pages matched <strong>"${escapeHtml(query)}"</strong>. Try broader terms such as <em>Dwarka</em>, <em>Parshuram</em>, <em>Gotra</em>, <em>Junagadh</em>, or <em>Surnames</em>.</p>
    `;
    return;
  }

  content.innerHTML = `
    <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">Found ${results.length} article(s) matching <strong>"${escapeHtml(query)}"</strong>:</p>
    <div style="display:flex;flex-direction:column;gap:1rem;">
      ${results.map(r => `
        <div style="border:1px solid var(--border-subtle);border-left:3px solid var(--maroon);padding:0.85rem;border-radius:4px;background:var(--surface-elevated);">
          <div style="font-size:0.72rem;text-transform:uppercase;color:var(--saffron);font-weight:600;margin-bottom:0.25rem;">
            ${currentLang === 'gu' ? r.categoryGu : r.categoryEn}
          </div>
          <h4 style="margin:0 0 0.35rem 0;font-family:var(--font-heading);font-size:1.25rem;">
            <a href="${r.url}" style="color:var(--temple-brown);text-decoration:none;">${currentLang === 'gu' ? r.titleGu : r.titleEn}</a>
          </h4>
          <p style="margin:0 0 0.5rem 0;font-size:0.88rem;color:var(--text-secondary);line-height:1.5;">
            ${currentLang === 'gu' ? r.summaryGu : r.summaryEn}
          </p>
          <a href="${r.url}" class="read-article-link" style="padding:0.25rem 0.6rem;font-size:0.75rem;">Open Article →</a>
        </div>
      `).join("")}
    </div>
  `;
}

function closeSearchModal() {
  const modal = document.getElementById("searchModalBackdrop");
  if (modal) modal.style.display = "none";
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
