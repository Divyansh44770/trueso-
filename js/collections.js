// js/collections.js

// 1. COLLECTION CONTENT ARRAY
const collectionsData = [
  {
    id: "gold",
    title: "Gold Jewellery",
    teaser: "From Sagai to Vidai, gold serves to adorn woman like nothing else.",
    description: "One of the most sought-after, Gold is everyone's favorite. From 'Sagai' to 'Vidai', Gold serves to adorn woman like nothing else. Considered to be auspicious among Hindu families, Gold is a must buy for one and all across all occasions and festivities. All of our gold is hallmarked which ensures quality and credibility across all items sold from our counter. Come visit Trueso to experience the timeless collection of Gold Jewelery in Varanasi.",
    codePrefix: "TR-G",
    badge: "100% BIS Hallmarked",
    accentColor: "rgba(201, 162, 75, 0.15)", // Warm gold wash
    iconSvg: `
      <svg viewBox="0 0 24 24" class="placeholder-svg-icon">
        <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z"/>
      </svg>
    `
  },
  {
    id: "diamond",
    title: "Diamond Jewellery",
    teaser: "Innovation and unblemished heritage merging into stellar grade diamond designs.",
    description: "Carrying along an unblemished heritage of expertise in diamonds and applying innovation to create stellar designs – our talent of creation has never failed to impress. Every single design is in line with the industry standard diamond grading, accounting for authenticity.",
    codePrefix: "TR-D",
    badge: "Internationally Certified",
    accentColor: "rgba(122, 82, 48, 0.1)", // Bronze wash
    iconSvg: `
      <svg viewBox="0 0 24 24" class="placeholder-svg-icon">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.8L18.2 12 12 18.2 5.8 12 12 5.8z"/>
      </svg>
    `
  },
  {
    id: "antique",
    title: "Antique Jewellery",
    teaser: "An eclectic mix of beauty, opulence, heritage, and meaning passed down generations.",
    description: "An eclectic mix of beauty, opulence, heritage, and meaning above all – Antique Jewelry has its own charm that never fades away. A one-of-a-kind creation, that stands symbolic and is passed down from one generation to another, like antique bridal engagement rings, bracelets, or neckpieces. Heirloom jewelry also forms an important part of our antique collection. We have the finest craftsmen of Antique Jewelery in Varanasi who have helped buyers get the superlative Antique Jewelery for the last 50 years.",
    codePrefix: "TR-A",
    badge: "Fine Handcrafting Legacy",
    accentColor: "rgba(122, 82, 48, 0.18)", // Sepia wash
    iconSvg: `
      <svg viewBox="0 0 24 24" class="placeholder-svg-icon">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    `
  },
  {
    id: "silver",
    title: "Silver Jewellery",
    teaser: "Affordable luxury dating back to 3000 BC, from utensils to sterling silver ornaments.",
    description: "Highly affordable and extremely versatile among other jewelry types, silver does stand out in its own glory. Besides gold and diamond, silver too represents wealth and luxury. The use of silver in jewelry dates back to as old as 3000 BC and is considered to be highly valuable owing to a range of uses that it can be put to. Natural gloss and lustre were primary reasons why silver became popular in the first place. Sterling silver and fine silver both form a significant element of our collection and bear hallmark as proof of authenticity. We have a large collection of Silver Jewelery in Varanasi and other products like Silver Temples, Silver Idols, and Silver Utensils.",
    codePrefix: "TR-S",
    badge: "92.5 Hallmark Certified",
    accentColor: "rgba(30, 23, 18, 0.08)", // Charcoal light wash
    iconSvg: `
      <svg viewBox="0 0 24 24" class="placeholder-svg-icon">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <circle cx="12" cy="12" r="5"/>
      </svg>
    `
  },
  {
    id: "gems",
    title: "Gems Jewellery",
    teaser: "Bespoke astrological and fine gemstone settings offering pure certificate glow.",
    description: "When asked about their source of inspiration, a majority of jewellers often find it in gemstones. Gemstones, most commonly associated with astrology, also find their way into fine jewellery, giving rise to bespoke designs that shine in all glory. Our gemstone collection is bent on offering the finest, purest, and rarest range, carrying a certificate of authenticity. Our industry-trained professionals treat every gemstone uniquely, pertaining to its specific composition, to retain its lustre and natural glow.",
    codePrefix: "TR-GEM",
    badge: "IGI Certified Authenticity",
    accentColor: "rgba(47, 82, 51, 0.15)", // Emerald trace wash
    iconSvg: `
      <svg viewBox="0 0 24 24" class="placeholder-svg-icon">
        <path d="M16 2H8L2 8l10 14 10-14zM12 4.8l3.6 3.6H8.4L12 4.8zM4.8 9.6h14.4L12 19.6 4.8 9.6z"/>
      </svg>
    `
  }
];

// Gemstone Quiz Details
const gemstoneQuiz = [
  { month: "January", stone: "Garnet (Raktamani)", rashi: "Makar (Capricorn)", properties: "Represents strength, prosperity, and deep love. It is believed to bring positive energy and success." },
  { month: "February", stone: "Amethyst (Katela)", rashi: "Kumbh (Aquarius)", properties: "Brings calmness, mental clarity, and spiritual growth. Known for its rich violet hues." },
  { month: "March", stone: "Aquamarine (Beruj)", rashi: "Meen (Pisces)", properties: "Symbolizes protection, peace, and good health. Reflects the soothing energy of Varanasi's waters." },
  { month: "April", stone: "Diamond (Heera)", rashi: "Mesh (Aries)", properties: "Signifies eternal love, strength, and brilliance. The ultimate hallmark of purity." },
  { month: "May", stone: "Emerald (Panna)", rashi: "Vrishabh (Taurus)", properties: "Attracts wisdom, growth, and prosperity. A beautiful deep green stone representing mercury." },
  { month: "June", stone: "Pearl (Moti)", rashi: "Mithun (Gemini)", properties: "Symbolizes purity, wisdom, and emotional balance. Sourced from organic sea pearls." },
  { month: "July", stone: "Ruby (Manik)", rashi: "Kark (Cancer)", properties: "Promotes passion, leadership, and protection. Known as the king of gemstones." },
  { month: "August", stone: "Peridot (Duni)", rashi: "Simha (Leo)", properties: "Associated with abundance and warding off negative energies. Radiates bright olive glow." },
  { month: "September", stone: "Blue Sapphire (Neelam)", rashi: "Kanya (Virgo)", properties: "Extremely powerful stone bringing wisdom, integrity, and swift fortunes to the wearer." },
  { month: "October", stone: "Opal / Pink Tourmaline", rashi: "Tula (Libra)", properties: "Encourages creativity, hope, and balance. Showcases stunning multi-color play of light." },
  { month: "November", stone: "Yellow Topaz / Citrine (Pukhraj)", rashi: "Vrischika (Scorpio)", properties: "Promotes wealth, health, and intellectual qualities. Warm golden brilliance." },
  { month: "December", stone: "Turquoise / Tanzanite (Firoza)", rashi: "Dhanu (Sagittarius)", properties: "A protective stone associated with health, wisdom, and good fortune." }
];

document.addEventListener("DOMContentLoaded", () => {
  // A. RENDER SPECIFIC COLLECTION PAGES
  const collectionBody = document.querySelector("[data-collection]");
  if (collectionBody) {
    const colId = collectionBody.getAttribute("data-collection");
    renderCollectionTemplate(colId);
  }

  // B. COLLECTIONS HUB HOVER COLOR WASH
  initCollectionsHub();

  // C. INITIALIZE GEMSTONE FINDER QUIZ IF ON GEMS PAGE
  initGemstoneQuiz();
});

// A. RENDER SPECIFIC COLLECTION PAGES
function renderCollectionTemplate(id) {
  const col = collectionsData.find(c => c.id === id);
  if (!col) return;

  // 1. Breadcrumbs
  const breadcrumb = document.getElementById("collection-breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb ledger-text">
          <li class="breadcrumb-item"><a href="${window.basePath || ""}index.html" class="text-muted text-decoration-none">Home</a></li>
          <li class="breadcrumb-item"><a href="${window.basePath || ""}collections.html" class="text-muted text-decoration-none">Collections</a></li>
          <li class="breadcrumb-item active text-oxblood" aria-current="page">${col.title}</li>
        </ol>
      </nav>
    `;
  }

  // 2. Title & Intro Copy
  const mainTitle = document.getElementById("collection-title");
  if (mainTitle) mainTitle.innerText = col.title;

  const descBlock = document.getElementById("collection-description");
  if (descBlock) descBlock.innerText = col.description;

  const badgeText = document.getElementById("collection-badge");
  if (badgeText) badgeText.innerText = col.badge;

  // 3. 3-Image Gallery Grid
  const gallery = document.getElementById("collection-gallery");
  if (gallery) {
    let galleryHtml = "";
    for (let i = 1; i <= 3; i++) {
      galleryHtml += `
        <div class="col-md-4 mb-4">
          <div class="frame-placeholder cursor-hover-trigger">
            <div class="frame-placeholder-corners"></div>
            ${col.iconSvg}
            <div class="frame-placeholder-code">${col.codePrefix}-${String(i).padStart(3, "0")}</div>
            <div class="ledger-text text-muted small">Phase 2: Product Image Frame</div>
          </div>
        </div>
      `;
    }
    gallery.innerHTML = galleryHtml;
  }

  // Inject Gemstone Quiz if it's the gems page
  const quizWrapper = document.getElementById("gemstone-quiz-wrapper");
  if (quizWrapper) {
    if (id === "gems") {
      quizWrapper.innerHTML = `
        <div class="gemstone-quiz-container" id="gemstone-quiz">
          <div id="quiz-step-1" class="quiz-step active">
            <h3 class="quiz-title">Find Your Astrological Gemstone</h3>
            <p class="Lora text-center text-muted mb-4">Select your birth month to reveal your traditional birthstone, rashi links, and energy properties.</p>
            <div class="quiz-grid" id="quiz-month-grid"></div>
          </div>
          <div id="quiz-step-2" class="quiz-step">
            <div id="quiz-result"></div>
          </div>
        </div>
      `;
      initGemstoneQuiz();
    } else {
      quizWrapper.innerHTML = "";
    }
  }

  // 4. Cross-Links Navigation Block
  const crossLinksContainer = document.getElementById("collection-cross-links");
  if (crossLinksContainer) {
    const others = collectionsData.filter(c => c.id !== id);
    let crossHtml = "";
    others.forEach(c => {
      crossHtml += `
        <div class="col-6 col-md-3 mb-3">
          <a href="${window.basePath || ""}${c.id}-jewellery.html" class="collection-card h-100 d-flex flex-column justify-content-between p-4" style="min-height: 180px; margin-right: 0;">
            <div>
              <div class="eyebrow">${c.badge}</div>
              <h3 class="h5 mb-2">${c.title}</h3>
            </div>
            <div class="ledger-text text-oxblood small mt-3">View Collection →</div>
          </a>
        </div>
      `;
    });
    crossLinksContainer.innerHTML = crossHtml;
  }
}

// B. COLLECTIONS HUB HOVER COLOR WASH (tints the text panel below the photo)
function initCollectionsHub() {
  const cards = document.querySelectorAll(".collections-hub-grid .vault-card");
  if (cards.length === 0) return;

  cards.forEach(card => {
    const colId = card.getAttribute("data-hub-id");
    const data = collectionsData.find(c => c.id === colId);
    const content = card.querySelector(".vault-content");
    if (!data || !content) return;

    card.addEventListener("mouseenter", () => {
      content.style.backgroundColor = data.accentColor;
    });

    card.addEventListener("mouseleave", () => {
      content.style.backgroundColor = "";
    });
  });
}

// C. GEMSTONE FINDER QUIZ
function initGemstoneQuiz() {
  const quizContainer = document.getElementById("gemstone-quiz");
  if (!quizContainer) return;

  // Generate Month Grid Buttons
  const monthGrid = document.getElementById("quiz-month-grid");
  if (monthGrid) {
    let gridHtml = "";
    gemstoneQuiz.forEach((item, index) => {
      gridHtml += `
        <button class="quiz-btn interactive" data-month-index="${index}">
          ${item.month}
        </button>
      `;
    });
    monthGrid.innerHTML = gridHtml;
  }

  // Click handler
  const quizButtons = document.querySelectorAll(".quiz-btn");
  const step1 = document.getElementById("quiz-step-1");
  const step2 = document.getElementById("quiz-step-2");
  const resultBox = document.getElementById("quiz-result");

  quizButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-month-index"));
      const r = gemstoneQuiz[idx];

      if (r) {
        step1.style.display = "none";
        step2.style.display = "block";

        resultBox.innerHTML = `
          <div class="quiz-result-box">
            <span class="eyebrow">${r.month} Birthstone</span>
            <h3 class="quiz-result-stone">${r.stone}</h3>
            <p class="ledger-text text-oxblood mb-2">Rashi Association: <strong>${r.rashi}</strong></p>
            <p class="mb-4">${r.properties}</p>
            <button class="btn-trueso" onclick="location.href='mailto:trueso_klsj@yahoo.com?subject=Inquiry about ${r.stone} (${r.month} Birthstone)'">Inquire About Astro Customisation</button>
            <div class="mt-3">
              <button class="btn-trueso-outline btn-sm" id="quiz-reset-btn">Find Another Stone</button>
            </div>
          </div>
        `;

        // Wire reset button
        document.getElementById("quiz-reset-btn").addEventListener("click", () => {
          step2.style.display = "none";
          step1.style.display = "block";
        });
      }
    });
  });
}
