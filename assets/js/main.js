/**
 * AbotiBrahmin Encyclopedia — Client-Side Bilingual Engine & Index Search
 */
const ENCYCLOPEDIA_INDEX = [
  { id: "history", titleEn: "Historical Overview & Medieval Records", titleGu: "ઐતિહાસિક વિહંગાવલોકન અને મધ્યકાલીન પુરાવા", url: "history.html", tags: ["1228 CE", "Rajasthan", "Dvaravati", "Dwarka", "Solanki", "Chaulukya", "Inscriptions"] },
  { id: "dwarka", titleEn: "Dwarka, Gomti & Jagat Mandir Context", titleGu: "દ્વારકા, ગોમતી ઘાટ અને જગત મંદિર સંદર્ભ", url: "dwarka.html", tags: ["Dwarkadhish", "Jagat Mandir", "Gomti", "Janmashtami", "Puja", "Pushtimarg", "Gugali"] },
  { id: "culture", titleEn: "Cultural Heritage, Livelihood & Values", titleGu: "સાંસ્કૃતિક વારસો, મૂલ્યો અને સમાજજીવન", url: "culture.html", tags: ["Jay Gopal", "Parshuram", "Agriculture", "Angadia", "Khedut", "Courier", "Dietary", "Vegetarianism"] },
  { id: "traditions", titleEn: "Rituals, Vrats, Pujas & Social Custom", titleGu: "ધાર્મિક વિધિઓ, વ્રતો અને પારિવારિક સંસ્કાર", url: "traditions.html", tags: ["Yajnopavita", "Janmashtami", "Shravan", "Kuldevi", "Gotra", "Vedic", "Vivaha"] },
  { id: "surnames", titleEn: "Surnames, Family Lineages & Gotras", titleGu: "અટક, શાખાઓ અને ગોત્ર સૂચિ", url: "surnames.html", tags: ["Shiyani", "Mokariya", "Odedara", "Joshi", "Kuchhadiya", "Tukadiya", "Bhuva", "Borichiya", "Baleja", "Goriya", "Kothari", "Mehta", "Bhargava", "Kashyapa", "Vatsa", "Sandilya"] },
  { id: "historical-records", titleEn: "Documentary Records, Gazetteers & Epigraphy", titleGu: "દસ્તાવેજી પુરાવા, ગેઝેટિયરો અને અભિલેખો", url: "historical-records.html", tags: ["Census 1901", "Junagadh", "Enthoven", "Bombay Gazetteer", "Tamrapatra", "Copper Plates", "Barot"] },
  { id: "places", titleEn: "Sacred Geography, Villages & Pilgrim Sites", titleGu: "પવિત્ર તીર્થક્ષેત્રો અને સૌરાષ્ટ્રના ગામો", url: "places.html", tags: ["Dwarka", "Bet Dwarka", "Ranavav", "Porbandar", "Bhod", "Mokar", "Rana Vadvala", "Tukda Gosa", "Vanana", "Sheel", "Keshod", "Junagadh"] },
  { id: "about", titleEn: "About the Encyclopedia & Objectives", titleGu: "જ્ઞાનકોશ પરિચય અને ઉદ્દેશ્યો", url: "about.html", tags: ["Digital Archive", "Methodology", "Ethics", "Preservation", "Open Access"] },
  { id: "sources", titleEn: "Primary Sources & Research Methodology", titleGu: "સંદર્ભ ગ્રંથો અને સંશોધન પદ્ધતિ", url: "sources.html", tags: ["Bibliography", "Citations", "Om Prakash", "Enthoven", "CMPA", "GIZ"] },
  { id: "faq", titleEn: "Frequently Asked Questions", titleGu: "વારંવાર પૂછાતા પ્રશ્નો (FAQ)", url: "faq.html", tags: ["Gotra", "History", "Origins", "Dwarka seva", "Panch-Dravida"] }
];

let currentLang = localStorage.getItem("abotibrahmin_lang") || "en";

function initApp() {
  setLanguage(currentLang, false);
  setupScrollProgress();
  setupSearch();
  setupTheme();
}

function setLanguage(lang, save = true) {
  currentLang = lang;
  if (save) localStorage.setItem("abotibrahmin_lang", lang);
  document.documentElement.setAttribute("lang", lang);
  
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerHTML = lang === "gu" ? el.getAttribute("data-gu") : el.getAttribute("data-en");
  });

  const btnEn = document.getElementById("langBtnEn");
  const btnGu = document.getElementById("langBtnGu");
  if (btnEn && btnGu) {
    btnEn.classList.toggle("active", lang === "en");
    btnGu.classList.toggle("active", lang === "gu");
  }
}

function setupScrollProgress() {
  const bar = document.getElementById("readingProgressBar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.pageYOffset / total) * 100 : 0;
    bar.style.width = `${progress}%`;
  });
}

function setupSearch() {
  const input = document.getElementById("headerSearchInput");
  const form = document.getElementById("headerSearchForm");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    executeSearch(input.value.trim());
  });
}

function executeSearch(query) {
  if (!query) return;
  const q = query.toLowerCase();
  const results = ENCYCLOPEDIA_INDEX.filter(item => {
    return item.titleEn.toLowerCase().includes(q) ||
           item.titleGu.includes(q) ||
           item.tags.some(t => t.toLowerCase().includes(q));
  });

  renderSearchResults(query, results);
}

function renderSearchResults(query, results) {
  let modal = document.getElementById("searchModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "searchModal";
    modal.className = "modal-backdrop open";
    modal.innerHTML = `
      <div class="modal-card">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--gold);padding-bottom:0.5rem;margin-bottom:1rem;">
          <h3 id="searchModalHeading" style="margin:0;font-family:var(--font-heading);font-size:1.4rem;"></h3>
          <button type="button" class="strip-btn" style="background:var(--maroon);color:#fff;" onclick="document.getElementById('searchModal').remove()">✕</button>
        </div>
        <div id="searchResultsList"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const heading = document.getElementById("searchModalHeading");
  const list = document.getElementById("searchResultsList");
  heading.innerText = currentLang === "gu" ? `શોધ પરિણામો: "${query}"` : `Search Results for: "${query}"`;

  if (results.length === 0) {
    list.innerHTML = `<p style="padding:1rem 0;color:var(--text-secondary);">${currentLang === "gu" ? "કોઈ મેળ ખાતા લેખ મળ્યા નથી." : "No matching encyclopedia articles found. Try another term such as 'Dwarka', 'Shiyani', or 'Gotra'."}</p>`;
    return;
  }

  list.innerHTML = results.map(r => `
    <div style="margin-bottom:0.85rem;padding:0.75rem;background:var(--surface-elevated);border-left:3px solid var(--maroon);border-radius:3px;">
      <a href="${r.url}" style="text-decoration:none;color:var(--maroon);font-weight:600;font-size:1.05rem;display:block;">
        ${currentLang === "gu" ? r.titleGu : r.titleEn}
      </a>
      <span style="font-size:0.78rem;color:var(--text-secondary);">Keywords: ${r.tags.slice(0, 5).join(", ")}</span>
    </div>
  `).join("");
}

function setupTheme() {
  const saved = localStorage.getItem("abotibrahmin_theme");
  if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("abotibrahmin_theme", next);
}

document.addEventListener("DOMContentLoaded", initApp);
