// js/app.js

function getBasePath() {
  return "./";
}
const basePath = getBasePath();
window.basePath = basePath;

document.addEventListener("DOMContentLoaded", () => {
  // 1. INJECT GLOBAL SYSTEMS
  injectGlobalSystems();

  // 2. EN / HINDI TRANSLATION TOGGLE — must run before initPreloader():
  // the typewriter animation measures the preloader title's rendered
  // width, so the correct language needs to already be in place first.
  initTranslateToggle();

  // 3. SETUP NAVIGATION & OVERLAY
  initNavigation();

  // 4. SETUP CUSTOM CURSOR
  initCustomCursor();

  // 5. RUN PRELOADER AND INITIATE SCROLL TRIGGERS
  initPreloader();

  // 6. GOLD DUST HERO CANVAS
  initGoldDustCanvas();

  // 7. TESTIMONIAL SPOTLIGHT
  initTestimonialSpotlight();
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. INJECT GLOBAL SYSTEMS
function injectGlobalSystems() {
  // A. Custom Cursor
  if (!prefersReducedMotion && window.innerWidth > 992) {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    const ring = document.createElement("div");
    ring.className = "custom-cursor-ring";
    document.body.appendChild(cursor);
    document.body.appendChild(ring);
  }

  // C. Preloader Placeholder
  const preloaderPlaceholder = document.getElementById("preloader-placeholder");
  if (preloaderPlaceholder) {
    preloaderPlaceholder.innerHTML = `
      <div id="preloader">
        <div class="preloader-content">
          <div class="preloader-title" id="preloader-typewriter" data-i18n="preloader.title">KANHAIYA LAL SARAF</div>
          <div class="preloader-subtitle vintage-italic" data-i18n="preloader.subtitle">— Since 1910 —</div>
          <div class="preloader-tagline" data-i18n="preloader.tagline">Your trust, our responsibility</div>
        </div>
      </div>
    `;
  }

  // D. Sticky Header Placeholder
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = `
      <div class="utility-bar">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="utility-bar-left">
            <div class="ledger-text utility-bar-item"><a href="tel:05422221011"><i class="fas fa-phone-alt"></i> 0542 222 1011</a></div>
            <div class="ledger-text utility-bar-item d-none d-sm-block"><a href="${basePath}contact-us.html"><i class="fas fa-map-marker-alt"></i> <span data-i18n="utility.storeLocator">Store Locator</span></a></div>
          </div>
          <div class="utility-bar-ticker d-none d-md-block">
            <div class="led-ticker">
              <a href="${basePath}gold-rate-varanasi.html"><span data-i18n="ticker.goldRate">TODAY'S GOLD RATE</span></a> ◆ <span data-i18n="ticker.hallmark">100% BIS HALLMARKED GOLD</span> ◆ <span data-i18n="ticker.since">SINCE 1910</span> ◆ <span data-i18n="ticker.oldest">VARANASI'S OLDEST JEWELLERY HOUSE</span> ◆ <span data-i18n="ticker.showrooms">TWO SHOWROOMS IN VARANASI</span> ◆ <span data-i18n="ticker.checkup">FREE GOLD PURITY CHECKUP</span> ◆ <a href="${basePath}gold-rate-varanasi.html"><span data-i18n="ticker.clickRates">CLICK FOR LIVE RATES</span></a>
            </div>
          </div>
          <div class="utility-bar-right">
            <button type="button" class="lang-toggle-btn" id="lang-toggle-btn" aria-label="Translate this page to Hindi">
              <i class="fas fa-globe" aria-hidden="true"></i> <span id="lang-toggle-label">हिन्दी</span>
            </button>
          </div>
        </div>
      </div>
      <nav class="main-navbar navbar navbar-expand-lg">
        <div class="container position-relative">
          <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
            <img src="${basePath}images/trueso-logo-full.png" alt="Trueso — Kanhaiya Lal Saraf Jewellers" class="navbar-brand-logo">
          </a>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <a class="nav-link-custom" href="${basePath}index.html"><span data-i18n="nav.home">Home</span><span class="nav-link-underline"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom" href="${basePath}about-us.html"><span data-i18n="nav.about">About Us</span><span class="nav-link-underline"></span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link-custom dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span data-i18n="nav.collections">Collections</span><span class="nav-link-underline"></span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="${basePath}collections.html"><span data-i18n="nav.collectionsHub">Collections Hub</span></a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="${basePath}gold-jewellery.html"><span data-i18n="nav.gold">Gold Jewellery</span></a></li>
                  <li><a class="dropdown-item" href="${basePath}diamond-jewellery.html"><span data-i18n="nav.diamond">Diamond Jewellery</span></a></li>
                  <li><a class="dropdown-item" href="${basePath}antique-jewellery.html"><span data-i18n="nav.antique">Antique Jewellery</span></a></li>
                  <li><a class="dropdown-item" href="${basePath}silver-jewellery.html"><span data-i18n="nav.silver">Silver Jewellery</span></a></li>
                  <li><a class="dropdown-item" href="${basePath}gems-jewellery.html"><span data-i18n="nav.gems">Gems Jewellery</span></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom" href="${basePath}gallery.html"><span data-i18n="nav.gallery">Gallery</span><span class="nav-link-underline"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link-custom" href="${basePath}press.html"><span data-i18n="nav.press">Press</span><span class="nav-link-underline"></span></a>
              </li>
            </ul>
            <a href="${basePath}contact-us.html" class="navbar-cta d-none d-xl-inline-block"><span data-i18n="nav.contact">Contact Us</span></a>
          </div>

          <button class="navbar-toggler-custom" type="button" aria-label="Toggle navigation" id="hamburger-btn">
            <span class="navbar-toggler-line"></span>
            <span class="navbar-toggler-line"></span>
            <span class="navbar-toggler-line"></span>
          </button>
        </div>
      </nav>
    `;

    // A sticky element only stays stuck for as long as scrolling happens within
    // its parent's box. <header> here only wraps the utility bar + nav (barely
    // taller than the nav itself), so the nav would immediately un-stick.
    // Move it to be a direct child of <body> so it has the full page height to
    // stay pinned against while scrolling.
    const navEl = headerPlaceholder.querySelector(".main-navbar");
    if (navEl) {
      document.body.insertBefore(navEl, headerPlaceholder.nextSibling);
    }

    // Highlight active link
    const currentPath = window.location.pathname.replace(/\\/g, "/");
    const links = document.querySelectorAll(".nav-link-custom");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        const cleanHref = href.replace(/\.\.\//g, "").replace(/\.\//g, "");
        const dirName = cleanHref.split("/")[0];
        if (dirName && dirName !== "index.html" && currentPath.includes("/" + dirName)) {
          link.classList.add("active");
        } else if (cleanHref === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("index.html")) && !currentPath.includes("about-us") && !currentPath.includes("collections") && !currentPath.includes("press") && !currentPath.includes("contact-us") && !currentPath.includes("gold-rate-varanasi")) {
          link.classList.add("active");
        }
      }
    });
  }

  // E. The gold-rate ticker now lives inside the utility bar (see step D above)
  // instead of its own separate dark strip — one less stacked bar under the nav.

  // F. Overlay Menu
  const overlayMenu = document.createElement("div");
  overlayMenu.className = "overlay-menu";
  overlayMenu.id = "overlay-menu";
  overlayMenu.innerHTML = `
    <button class="overlay-menu-close" id="overlay-close-btn" aria-label="Close menu">
      <span></span><span></span>
    </button>
    <div class="overlay-menu-content">
      <span class="eyebrow text-gold" data-i18n="overlay.navigate">Navigate</span>
      <ul class="overlay-menu-links">
        <li class="overlay-menu-item"><a href="${basePath}index.html" class="overlay-menu-link" data-i18n="overlay.home">Home</a></li>
        <li class="overlay-menu-item"><a href="${basePath}about-us.html" class="overlay-menu-link" data-i18n="overlay.about">About Us</a></li>
        <li class="overlay-menu-item"><a href="${basePath}collections.html" class="overlay-menu-link" data-i18n="overlay.collections">Our Collections</a></li>
        <li class="overlay-menu-item"><a href="${basePath}gallery.html" class="overlay-menu-link" data-i18n="overlay.gallery">Gallery</a></li>
        <li class="overlay-menu-item"><a href="${basePath}press.html" class="overlay-menu-link" data-i18n="overlay.press">Press</a></li>
        <li class="overlay-menu-item"><a href="${basePath}contact-us.html" class="overlay-menu-link" data-i18n="overlay.contact">Contact Us</a></li>
        <li class="overlay-menu-item"><a href="${basePath}gold-rate-varanasi.html" class="overlay-menu-link" data-i18n="overlay.goldRate">Varanasi Gold Rate</a></li>
      </ul>
      <div class="overlay-menu-footer overlay-menu-item">
        <a href="tel:05422221011">0542 222 1011</a>
        <span class="overlay-menu-footer-dot">·</span>
        <a href="https://wa.me/919044032100" target="_blank" data-i18n="overlay.whatsapp">WhatsApp</a>
      </div>
    </div>
  `;
  document.body.appendChild(overlayMenu);

  // G. WhatsApp Floating Action Button
  const waFloat = document.createElement("a");
  waFloat.href = "https://wa.me/919044032100";
  waFloat.target = "_blank";
  waFloat.className = "whatsapp-float";
  waFloat.id = "whatsapp-float";
  waFloat.setAttribute("aria-label", "Chat on WhatsApp");
  waFloat.innerHTML = `<i class="fab fa-whatsapp" aria-hidden="true"></i>`;
  document.body.appendChild(waFloat);

  // G1b. Scroll-to-Top Floating Button (sits directly above the WhatsApp button)
  const scrollTopFloat = document.createElement("button");
  scrollTopFloat.type = "button";
  scrollTopFloat.className = "scroll-top-float";
  scrollTopFloat.id = "scroll-top-float";
  scrollTopFloat.setAttribute("aria-label", "Scroll to top");
  scrollTopFloat.innerHTML = `<i class="fas fa-arrow-up" aria-hidden="true"></i>`;
  scrollTopFloat.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
  document.body.appendChild(scrollTopFloat);

  const toggleScrollTopVisibility = () => {
    scrollTopFloat.classList.toggle("visible", window.scrollY > 500);
  };
  window.addEventListener("scroll", toggleScrollTopVisibility, { passive: true });
  toggleScrollTopVisibility();

  // G2. Gold Rate Side Strip
  const goldRateStrip = document.createElement("a");
  goldRateStrip.href = `${basePath}gold-rate-varanasi.html`;
  goldRateStrip.className = "gold-rate-strip";
  goldRateStrip.id = "gold-rate-strip";
  goldRateStrip.innerHTML = `<i class="fas fa-coins" aria-hidden="true"></i> <span data-i18n="goldStrip.label">Today's Gold Rate</span>`;
  document.body.appendChild(goldRateStrip);

  // H. Footer Placeholder
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    const currentYear = new Date().getFullYear();
    footerPlaceholder.innerHTML = `
      <footer>
        <div class="container position-relative py-4">

          <!-- FOOTER GRID: BRAND + LINK COLUMNS -->
          <div class="row footer-columns gy-5">
            <div class="col-12 col-lg-4">
              <img src="${basePath}images/trueso-logo-full.png" alt="Trueso — Kanhaiya Lal Saraf Jewellers" class="footer-logo-img">

              <div class="footer-ledger text-gold" style="font-size: 0.72rem; letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase;" data-i18n="footer.ledger">KANHAIYA LAL SARAF · SINCE 1910</div>
              <p class="footer-body-text mt-3 mb-0" style="max-width: 340px;" data-i18n="footer.tagline">
                Fine jewellers crafting custom nakashi ornaments, certified diamonds, and astro-aligned gemstones in Varanasi since 1910.
              </p>
              <div class="d-flex mt-4">
                <a class="footer-social-link" href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a class="footer-social-link" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <a class="footer-social-link" href="https://wa.me/919044032100" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
              </div>
            </div>

            <div class="col-6 col-lg-2">
              <span class="footer-heading" data-i18n="footer.explore">Explore</span>
              <ul class="footer-nav-list">
                <li><a href="${basePath}index.html" data-i18n="footer.home">Home</a></li>
                <li><a href="${basePath}about-us.html" data-i18n="footer.about">About Us</a></li>
                <li><a href="${basePath}collections.html" data-i18n="footer.collectionsLink">Collections</a></li>
                <li><a href="${basePath}gallery.html" data-i18n="footer.gallery">Gallery</a></li>
                <li><a href="${basePath}press.html" data-i18n="footer.press">Press</a></li>
                <li><a href="${basePath}contact-us.html" data-i18n="footer.contact">Contact Us</a></li>
              </ul>
            </div>

            <div class="col-6 col-lg-2">
              <span class="footer-heading" data-i18n="footer.collections">Collections</span>
              <ul class="footer-nav-list">
                <li><a href="${basePath}gold-jewellery.html" data-i18n="footer.gold">Gold Jewellery</a></li>
                <li><a href="${basePath}diamond-jewellery.html" data-i18n="footer.diamond">Diamond Jewellery</a></li>
                <li><a href="${basePath}antique-jewellery.html" data-i18n="footer.antique">Antique Jewellery</a></li>
                <li><a href="${basePath}silver-jewellery.html" data-i18n="footer.silver">Silver Jewellery</a></li>
                <li><a href="${basePath}gems-jewellery.html" data-i18n="footer.gems">Gems & Gemstones</a></li>
              </ul>
            </div>

            <div class="col-6 col-lg-2">
              <span class="footer-heading" data-i18n="footer.showrooms">Showrooms</span>
              <div class="footer-contact-item">
                <span class="footer-strong" data-i18n="footer.sigra">Sigra Outlet</span>
                <p class="footer-contact-text mb-1" data-i18n="footer.sigraAddr">64/149 C, Shakti Shikha Apartment, Sigra Road, Varanasi</p>
                <a href="tel:05422221011" class="footer-contact-link">0542 222 1011</a>
              </div>
              <div class="footer-contact-item mb-0">
                <span class="footer-strong" data-i18n="footer.godowlia">Godowlia Outlet</span>
                <p class="footer-contact-text mb-1" data-i18n="footer.godowliaAddr">D 37/47, Below Hotel Ganges Grand, Godowlia</p>
                <a href="tel:05422391010" class="footer-contact-link">0542 239 1010</a>
              </div>
            </div>

            <div class="col-6 col-lg-2">
              <span class="footer-heading" data-i18n="footer.inquiries">Direct Inquiries</span>
              <div class="footer-contact-item">
                <span class="footer-strong" data-i18n="footer.emailSupport">Email Support</span>
                <a href="mailto:trueso_klsj@yahoo.com" class="footer-contact-link">trueso_klsj@yahoo.com</a>
              </div>
              <div class="footer-contact-item">
                <span class="footer-strong" data-i18n="footer.whatsappChat">WhatsApp Chat</span>
                <a href="https://wa.me/919044032100" target="_blank" class="footer-contact-link">+91 90440 32100</a>
              </div>
              <div class="footer-contact-item mb-0">
                <span class="footer-strong" data-i18n="footer.consultHours">Consultation Hours</span>
                <span class="footer-contact-text" data-i18n="footer.consultHoursValue">Mon – Sun, 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          <!-- BOTTOM SECTION: CREDITS & COPYRIGHT -->
          <div class="footer-bottom">
            <div class="footer-body-text">
              © ${currentYear} Kanhaiya Lal Saraf - Trueso. <span data-i18n="footer.rights">All rights reserved.</span>
            </div>
            <div class="footer-body-text">
              <span data-i18n="footer.designedBy">Website Designed & SEO by</span> <a href="https://kvtmedia.com" target="_blank">KV TechMedia</a>
            </div>
            <button class="footer-top-btn" id="footer-back-to-top" aria-label="Back to top">
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </button>
          </div>

        </div>
      </footer>
    `;

    const backToTopBtn = document.getElementById("footer-back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }
  }
}

// 2. SETUP NAVIGATION & OVERLAY
function initNavigation() {
  const navbar = document.querySelector(".main-navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const overlayMenu = document.getElementById("overlay-menu");
  const overlayCloseBtn = document.getElementById("overlay-close-btn");

  // Scroll Compress
  if (navbar) {
    const applyScrollState = () => {
      if (window.scrollY > 80) {
        navbar.classList.add("compressed");
      } else {
        navbar.classList.remove("compressed");
      }
    };
    applyScrollState();
    window.addEventListener("scroll", applyScrollState);
  }

  // Toggle Overlay Menu
  if (hamburgerBtn && overlayMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = overlayMenu.classList.contains("active");
      if (isOpen) {
        closeOverlay();
      } else {
        hamburgerBtn.classList.add("active");
        overlayMenu.classList.add("active");
        if (window.gsap) {
          window.gsap.to(".overlay-menu-item", {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      }
    });

    const closeOverlay = () => {
      hamburgerBtn.classList.remove("active");
      if (window.gsap) {
        window.gsap.to(".overlay-menu-item", {
          opacity: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            overlayMenu.classList.remove("active");
          }
        });
      } else {
        overlayMenu.classList.remove("active");
      }
    };

    if (overlayCloseBtn) {
      overlayCloseBtn.addEventListener("click", closeOverlay);
    }

    document.querySelectorAll(".overlay-menu-link").forEach(link => {
      link.addEventListener("click", closeOverlay);
    });
  }
}

// 3. SETUP CUSTOM CURSOR
function initCustomCursor() {
  if (prefersReducedMotion || window.innerWidth <= 992) return;

  const cursor = document.querySelector(".custom-cursor");
  const ring = document.querySelector(".custom-cursor-ring");
  
  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const tick = () => {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(tick);
  };
  tick();

  const interactiveSelector = "a, button, input, textarea, select, .interactive, [role='button']";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add("cursor-hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove("cursor-hovering");
    }
  });

  // Magnetic items
  const magneticBtns = document.querySelectorAll(".btn-trueso, .btn-trueso-outline, .hallmark-seal, .whatsapp-float, .scroll-top-float");
  magneticBtns.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      const distX = e.clientX - btnX;
      const distY = e.clientY - btnY;

      if (window.gsap) {
        window.gsap.to(btn, {
          x: distX * 0.25,
          y: distY * 0.25,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    btn.addEventListener("mouseleave", () => {
      if (window.gsap) {
        window.gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      }
    });
  });
}

// 4. RUN PRELOADER
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
    initScrollAnimations();
    return;
  }

  if (window.gsap) {
    const tl = window.gsap.timeline({
      onComplete: () => {
        window.gsap.to(preloader, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            preloader.style.display = "none";

            window.gsap.to("#whatsapp-float", {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(1.7)"
            });
            const wa = document.getElementById("whatsapp-float");
            if (wa) wa.classList.add("visible");

            initScrollAnimations();
            animateHeroSection();
          }
        });
      }
    });

    // The preloader is a fixed, full-viewport overlay already covering everything,
    // so scrolling doesn't need to be locked. (It used to set body.style.overflowY,
    // but an inline overflow on <body> breaks position:sticky for the nav — that
    // was the real cause of the nav failing to stick on every page.)

    // Title typewriter simulation. Animate to the text's own measured
    // width (scrollWidth reflects the full unclipped content even while
    // the element is still width:0 + overflow:hidden) rather than a
    // guessed "100%" of the container — that guess was wrong at the
    // default font-size and clipped the name mid-word on real screens.
    const titleText = document.getElementById("preloader-typewriter");
    if (titleText) {
      tl.to(titleText, {
        width: titleText.scrollWidth,
        duration: 0.9,
        ease: "steps(18)",
        delay: 0.1
      });
    }

    // Subtitle fade
    tl.to(".preloader-subtitle, .preloader-tagline", {
      opacity: 1,
      duration: 0.4
    });

    tl.to(preloader, { duration: 0.4 });
  } else {
    preloader.style.display = "none";
    initScrollAnimations();
    animateHeroSection();
  }
}

// 5. INITIATE SCROLL TRIGGERS & ZARI RAIL
function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  
  window.gsap.registerPlugin(window.ScrollTrigger);

  // A. Viewport-Height Zari Rail Drawing
  drawZariRail();

  // B. Hallmark Seals Stamp Animation
  const seals = document.querySelectorAll(".hallmark-seal");
  seals.forEach(seal => {
    window.gsap.fromTo(seal, 
      { scale: 1.5, rotation: -20, opacity: 0, filter: "blur(3px)" },
      {
        scrollTrigger: {
          trigger: seal,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        scale: 1,
        rotation: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "back.out(1.5)",
        onComplete: () => {
          seal.classList.add("stamped");
        }
      }
    );
  });

  // C. Title reveal
  const revealHeaders = document.querySelectorAll(".reveal-fade-up, h1, h2");
  revealHeaders.forEach(el => {
    if (el.classList.contains("no-reveal")) return;

    window.gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: prefersReducedMotion ? "top 95%" : "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      duration: prefersReducedMotion ? 0.3 : 0.7,
      ease: "power2.out"
    });
  });

  // D. Stagger Grids
  const grids = document.querySelectorAll(".reveal-grid");
  grids.forEach(grid => {
    const cards = grid.children;
    window.gsap.from(cards, {
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: prefersReducedMotion ? 0 : 35,
      duration: prefersReducedMotion ? 0.3 : 0.7,
      stagger: 0.12,
      ease: "power2.out"
    });
  });

  // E. Stat number counters
  const stats = document.querySelectorAll(".stat-num");
  stats.forEach(stat => {
    const targetVal = parseInt(stat.getAttribute("data-target"));
    if (isNaN(targetVal)) return;

    const countObj = { val: 0 };
    window.gsap.to(countObj, {
      scrollTrigger: {
        trigger: stat,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      val: targetVal,
      duration: 1.8,
      ease: "power1.out",
      onUpdate: () => {
        stat.innerText = Math.floor(countObj.val);
      }
    });
  });

  // F. Service Cards Scroll Trigger
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach(card => {
    window.gsap.fromTo(card,
      { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: "power2.out"
      }
    );
  });

  // G. Legacy Timeline Scroll Animations
  const timelineLine = document.querySelector(".timeline-line");
  if (timelineLine && !prefersReducedMotion) {
    window.gsap.fromTo(timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 65%",
          end: "bottom 75%",
          scrub: 0.5
        }
      }
    );
  }

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach(item => {
    const node = item.querySelector(".timeline-node");
    const content = item.querySelector(".timeline-content");
    const index = Array.from(item.parentNode.querySelectorAll(".timeline-item")).indexOf(item);
    const isEven = index % 2 !== 0; // nth-child(even) logic equivalent

    if (content) {
      window.gsap.fromTo(content,
        {
          opacity: 0,
          x: prefersReducedMotion ? 0 : (isEven ? -80 : 80),
          scale: prefersReducedMotion ? 1 : 0.95
        },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          x: 0,
          scale: 1,
          duration: prefersReducedMotion ? 0.3 : 0.8,
          ease: "power2.out"
        }
      );
    }

    if (node) {
      window.gsap.fromTo(node,
        { scale: 0, backgroundColor: "#FAF8F5" },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          scale: 1.4,
          backgroundColor: "#800020",
          borderColor: "#800020",
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      );
    }
  });
}

// FIXED VIEWPORT ZARI RAIL
function drawZariRail() {
  if (prefersReducedMotion || window.innerWidth <= 992) return;

  let zariContainer = document.querySelector(".zari-rail-container");
  if (!zariContainer) {
    zariContainer = document.createElement("div");
    zariContainer.className = "zari-rail-container";
    document.body.appendChild(zariContainer);
  }

  // Viewport height line template
  zariContainer.innerHTML = `
    <svg class="zari-thread-svg" height="100%" width="100%" viewBox="0 0 20 100" preserveAspectRatio="none">
      <path class="zari-thread-path" d="M 10 0 L 10 5 Q 0 15 10 25 Q 20 35 10 45 L 10 100" id="zari-rail-path" />
    </svg>
  `;

  const path = document.getElementById("zari-rail-path");
  if (path) {
    // Total path length of viewport SVG path is standardized
    path.style.strokeDasharray = "120";
    path.style.strokeDashoffset = "120";

    // Scrub dashboard based on window scroll progress
    window.gsap.to(path, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      },
      strokeDashoffset: 0,
      ease: "none"
    });
  }
}

// WORLD-CLASS HERO ANIMATION
function animateHeroSection() {
  if (prefersReducedMotion || !window.gsap) return;

  const textCol = document.querySelector(".animate-hero-text");
  const imgFrame = document.querySelector(".animate-hero-frame");

  if (textCol) {
    const children = textCol.children;
    window.gsap.fromTo(children, 
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );
  }

  if (imgFrame) {
    window.gsap.fromTo(imgFrame,
      { opacity: 0, scale: 0.96, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.35, ease: "power3.out" }
    );

    // Hero image Ken Burns pan effect
    const img = imgFrame.querySelector(".hero-parallax-img");
    if (img) {
      window.gsap.to(img, {
        scale: 1,
        duration: 3,
        ease: "power1.out"
      });
    }
  }

  // Hero background image scroll parallax (moves the media layer;
  // the Ken Burns zoom lives separately in CSS on the <img> itself)
  const heroMedia = document.querySelector(".hero-jewel-media");
  if (heroMedia && window.ScrollTrigger) {
    window.gsap.to(heroMedia, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-jewel",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }
}

// GOLD DUST HERO CANVAS — drifting gold-flecked particles behind the hero copy
function initGoldDustCanvas() {
  const canvas = document.getElementById("gold-dust-canvas");
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  let width, height, particles;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  function makeParticles() {
    const count = Math.round((width * height) / 22000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -Math.random() * 0.16 - 0.03,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
      if (p.x < -4) p.x = width + 4;
      if (p.x > width + 4) p.x = -4;
      ctx.beginPath();
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }

  resize();
  makeParticles();
  tick();

  window.addEventListener("resize", () => {
    resize();
    makeParticles();
  });
}

// TESTIMONIAL SPOTLIGHT — cross-fading quote carousel with custom arrows/progress
function initTestimonialSpotlight() {
  const stage = document.getElementById("spotlightStage");
  if (!stage) return;

  const slides = Array.from(stage.querySelectorAll(".spotlight-slide"));
  const prevBtn = document.getElementById("spotlightPrev");
  const nextBtn = document.getElementById("spotlightNext");
  const countEl = document.getElementById("spotlightCount");
  const fillEl = document.getElementById("spotlightFill");
  if (!slides.length) return;

  let index = slides.findIndex(s => s.classList.contains("active"));
  if (index < 0) index = 0;
  let timer = null;

  function render() {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    if (countEl) countEl.textContent = String(index + 1).padStart(2, "0");
    if (fillEl) fillEl.style.width = `${((index + 1) / slides.length) * 100}%`;
  }

  function go(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    render();
    restartAutoplay();
  }

  function restartAutoplay() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => go(index + 1), 5000);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => go(index - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => go(index + 1));
  stage.addEventListener("mouseenter", () => { if (timer) clearInterval(timer); });
  stage.addEventListener("mouseleave", restartAutoplay);

  render();
  restartAutoplay();
}

// 7. EN / HINDI TRANSLATION TOGGLE
// Fully local — no external translation service is ever called. Every string
// is hand-translated below and swapped in the DOM by key; nothing leaves the
// browser. Persisted in localStorage so the choice carries across pages.
const I18N = {
  "utility.storeLocator": { en: "Store Locator", hi: "स्टोर लोकेटर" },
  "ticker.goldRate": { en: "TODAY'S GOLD RATE", hi: "आज का सोने का भाव" },
  "ticker.hallmark": { en: "100% BIS HALLMARKED GOLD", hi: "100% बीआईएस हॉलमार्क सोना" },
  "ticker.since": { en: "SINCE 1910", hi: "स्थापना 1910" },
  "ticker.oldest": { en: "VARANASI'S OLDEST JEWELLERY HOUSE", hi: "वाराणसी का सबसे पुराना ज्वेलरी हाउस" },
  "ticker.showrooms": { en: "TWO SHOWROOMS IN VARANASI", hi: "वाराणसी में दो शोरूम" },
  "ticker.checkup": { en: "FREE GOLD PURITY CHECKUP", hi: "मुफ्त सोने की शुद्धता जांच" },
  "ticker.clickRates": { en: "CLICK FOR LIVE RATES", hi: "लाइव रेट के लिए क्लिक करें" },

  "nav.home": { en: "Home", hi: "होम" },
  "nav.about": { en: "About Us", hi: "हमारे बारे में" },
  "nav.collections": { en: "Collections", hi: "संग्रह" },
  "nav.collectionsHub": { en: "Collections Hub", hi: "संग्रह केंद्र" },
  "nav.gold": { en: "Gold Jewellery", hi: "सोने के आभूषण" },
  "nav.diamond": { en: "Diamond Jewellery", hi: "हीरे के आभूषण" },
  "nav.antique": { en: "Antique Jewellery", hi: "एंटीक आभूषण" },
  "nav.silver": { en: "Silver Jewellery", hi: "चांदी के आभूषण" },
  "nav.gems": { en: "Gems Jewellery", hi: "रत्न आभूषण" },
  "nav.gallery": { en: "Gallery", hi: "गैलरी" },
  "nav.press": { en: "Press", hi: "प्रेस" },
  "nav.contact": { en: "Contact Us", hi: "संपर्क करें" },

  "overlay.navigate": { en: "Navigate", hi: "नेविगेट करें" },
  "overlay.home": { en: "Home", hi: "होम" },
  "overlay.about": { en: "About Us", hi: "हमारे बारे में" },
  "overlay.collections": { en: "Our Collections", hi: "हमारे संग्रह" },
  "overlay.gallery": { en: "Gallery", hi: "गैलरी" },
  "overlay.press": { en: "Press", hi: "प्रेस" },
  "overlay.contact": { en: "Contact Us", hi: "संपर्क करें" },
  "overlay.goldRate": { en: "Varanasi Gold Rate", hi: "वाराणसी सोने का भाव" },
  "overlay.whatsapp": { en: "WhatsApp", hi: "व्हाट्सएप" },

  "goldStrip.label": { en: "Today's Gold Rate", hi: "आज का सोने का भाव" },

  "footer.ledger": { en: "KANHAIYA LAL SARAF · SINCE 1910", hi: "कन्हैया लाल सर्राफ · स्थापना 1910" },
  "footer.tagline": { en: "Fine jewellers crafting custom nakashi ornaments, certified diamonds, and astro-aligned gemstones in Varanasi since 1910.", hi: "1910 से वाराणसी में कस्टम नक्काशी आभूषण, प्रमाणित हीरे, और ज्योतिष-अनुकूल रत्नों का निर्माण करने वाले उत्कृष्ट जौहरी।" },
  "footer.explore": { en: "Explore", hi: "अन्वेषण करें" },
  "footer.home": { en: "Home", hi: "होम" },
  "footer.about": { en: "About Us", hi: "हमारे बारे में" },
  "footer.collectionsLink": { en: "Collections", hi: "संग्रह" },
  "footer.gallery": { en: "Gallery", hi: "गैलरी" },
  "footer.press": { en: "Press", hi: "प्रेस" },
  "footer.contact": { en: "Contact Us", hi: "संपर्क करें" },
  "footer.collections": { en: "Collections", hi: "संग्रह" },
  "footer.gold": { en: "Gold Jewellery", hi: "सोने के आभूषण" },
  "footer.diamond": { en: "Diamond Jewellery", hi: "हीरे के आभूषण" },
  "footer.antique": { en: "Antique Jewellery", hi: "एंटीक आभूषण" },
  "footer.silver": { en: "Silver Jewellery", hi: "चांदी के आभूषण" },
  "footer.gems": { en: "Gems & Gemstones", hi: "रत्न और मणि" },
  "footer.showrooms": { en: "Showrooms", hi: "शोरूम" },
  "footer.sigra": { en: "Sigra Outlet", hi: "सिगरा आउटलेट" },
  "footer.sigraAddr": { en: "64/149 C, Shakti Shikha Apartment, Sigra Road, Varanasi", hi: "64/149 सी, शक्ति शिखा अपार्टमेंट, सिगरा रोड, वाराणसी" },
  "footer.godowlia": { en: "Godowlia Outlet", hi: "गोदौलिया आउटलेट" },
  "footer.godowliaAddr": { en: "D 37/47, Below Hotel Ganges Grand, Godowlia", hi: "डी 37/47, होटल गंगेज़ ग्रैंड के नीचे, गोदौलिया" },
  "footer.inquiries": { en: "Direct Inquiries", hi: "सीधी पूछताछ" },
  "footer.emailSupport": { en: "Email Support", hi: "ईमेल सहायता" },
  "footer.whatsappChat": { en: "WhatsApp Chat", hi: "व्हाट्सएप चैट" },
  "footer.consultHours": { en: "Consultation Hours", hi: "परामर्श का समय" },
  "footer.consultHoursValue": { en: "Mon – Sun, 10:00 AM – 8:00 PM", hi: "सोम – रवि, सुबह 10:00 – रात 8:00" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
  "footer.designedBy": { en: "Website Designed & SEO by", hi: "वेबसाइट डिज़ाइन व एसईओ" },

  "preloader.title": { en: "KANHAIYA LAL SARAF", hi: "कन्हैया लाल सर्राफ" },
  "preloader.subtitle": { en: "— Since 1910 —", hi: "— स्थापना 1910 —" },
  "preloader.tagline": { en: "Your trust, our responsibility", hi: "आपका भरोसा, हमारी ज़िम्मेदारी" },

  "home.hero.kicker": { en: "Estd. 1910 · Varanasi", hi: "स्थापना 1910 · वाराणसी" },
  "home.hero.title1": { en: "The Fine-Line", hi: "बारीक कारीगरी" },
  "home.hero.title2": { en: "of Craftsmanship", hi: "की एक मिसाल" },
  "home.hero.tagline": { en: "Antique design, reimagined by the finest artisans of India.", hi: "पारंपरिक डिज़ाइन, भारत के सर्वश्रेष्ठ कारीगरों द्वारा नए स्वरूप में।" },
  "home.hero.cta1": { en: "Enter the Collection", hi: "संग्रह देखें" },
  "home.hero.cta2": { en: "Visit a Showroom", hi: "शोरूम पधारें" },
  "home.stat.established": { en: "Established", hi: "स्थापना वर्ष" },
  "home.stat.years": { en: "Years of Legacy", hi: "वर्षों की विरासत" },
  "home.stat.showrooms": { en: "Showrooms", hi: "शोरूम" },
  "home.stat.collections": { en: "Curated Collections", hi: "चयनित संग्रह" },

  "home.collections.kicker": { en: "Exquisite Curations", hi: "उत्कृष्ट संग्रह" },
  "home.collections.title": { en: "Our Collections", hi: "हमारे संग्रह" },
  "home.collections.viewAll": { en: "View All Hub", hi: "सभी संग्रह देखें" },
  "home.bento.diamondEyebrow": { en: "IGI Grading", hi: "आईजीआई प्रमाणित" },
  "home.bento.diamondTitle": { en: "Diamond Jewellery", hi: "हीरे के आभूषण" },
  "home.bento.diamondDesc": { en: "Innovation and unblemished heritage merging into stellar, certified diamond designs.", hi: "नवाचार और निर्दोष विरासत का संगम — बेहतरीन, प्रमाणित हीरों की डिज़ाइनों में।" },
  "home.bento.goldEyebrow": { en: "Certified Purity", hi: "प्रमाणित शुद्धता" },
  "home.bento.goldTitle": { en: "Gold Jewellery", hi: "सोने के आभूषण" },
  "home.bento.goldDesc": { en: "From Sagai to Vidai, gold serves to adorn woman like nothing else—representing centuries of lineage.", hi: "सगाई से विदाई तक, सोना नारी का श्रृंगार है — सदियों की विरासत का प्रतीक।" },
  "home.bento.antiqueEyebrow": { en: "Varanasi Crafts", hi: "वाराणसी शिल्प" },
  "home.bento.antiqueTitle": { en: "Antique Jewellery", hi: "एंटीक आभूषण" },
  "home.bento.antiqueDesc": { en: "An eclectic mix of beauty, heritage, and timeless design meaning.", hi: "सुंदरता, विरासत, और कालातीत डिज़ाइन का अनूठा संगम।" },
  "home.bento.silverEyebrow": { en: "92.5 Hallmark", hi: "92.5 हॉलमार्क" },
  "home.bento.silverTitle": { en: "Silver Jewellery", hi: "चांदी के आभूषण" },
  "home.bento.silverDesc": { en: "Affordable luxury, silver temples, idols, and fine styling ornaments.", hi: "किफायती विलासिता — चांदी के मंदिर, मूर्तियां, और सुरुचिपूर्ण आभूषण।" },
  "home.bento.gemsEyebrow": { en: "Astro-aligned", hi: "ज्योतिष-अनुकूल" },
  "home.bento.gemsTitle": { en: "Gems & Gemstones", hi: "रत्न और मणि" },
  "home.bento.gemsDesc": { en: "Certified gemstones uniquely selected to retain natural lustre, planetary alignment, and beautiful raw glow.", hi: "प्राकृतिक चमक, ग्रह-अनुकूलता और सुंदर आभा हेतु विशेष रूप से चुने गए प्रमाणित रत्न।" },
  "home.bento.explore": { en: "Explore →", hi: "देखें →" },

  "home.timeline.kicker": { en: "Our Chronicles", hi: "हमारा इतिहास" },
  "home.timeline.title": { en: "Heritage Legacy", hi: "विरासत की गाथा" },
  "home.timeline.t1title": { en: "Founded by Shri Kanhaiya Lal Saraf", hi: "श्री कन्हैया लाल सर्राफ द्वारा स्थापित" },
  "home.timeline.t1desc": { en: "Establishing our primary foundations in the heritage capital of gold embroidery—Varanasi. Built on the core values of gold purity checkups and verified hallmark trading.", hi: "स्वर्ण कारीगरी की विरासत नगरी वाराणसी में हमारी नींव पड़ी — सोने की शुद्धता जांच और प्रमाणित हॉलमार्क व्यापार के मूल्यों पर आधारित।" },
  "home.timeline.t2year": { en: "Founder", hi: "संस्थापक" },
  "home.timeline.t2title": { en: "Mukund Lal & Balaram Das Saraf Era", hi: "मुकुंद लाल एवं बलराम दास सर्राफ का युग" },
  "home.timeline.t2desc": { en: "The legacy was carried forward by Shri Mukund Lal Saraf and Shri Balaram Das Saraf, making Kanhaiya Lal Saraf Jewellers (KLSJ) a leading name in Purvanchal jewellery trading.", hi: "श्री मुकुंद लाल सर्राफ और श्री बलराम दास सर्राफ ने विरासत को आगे बढ़ाया, जिससे कन्हैया लाल सर्राफ ज्वेलर्स (केएलएसजे) पूर्वांचल के आभूषण व्यापार में अग्रणी नाम बना।" },
  "home.timeline.t3title": { en: "Birth of Brand Trueso", hi: "ब्रांड ट्रूसो का जन्म" },
  "home.timeline.t3desc": { en: "Shri Abhay Agrawal Ji took a major step forward, establishing the modern brand name 'Trueso' to bring Varanasi its first absolute 100% Hallmarked Jewellery Showroom.", hi: "श्री अभय अग्रवाल जी ने एक बड़ा कदम उठाते हुए आधुनिक ब्रांड 'ट्रूसो' की स्थापना की, और वाराणसी को इसका पहला 100% हॉलमार्क ज्वेलरी शोरूम दिया।" },
  "home.timeline.t4year": { en: "Today", hi: "आज" },
  "home.timeline.t4title": { en: "100% Certified Showrooms", hi: "100% प्रमाणित शोरूम" },
  "home.timeline.t4desc": { en: "Recognized as the primary destination for 100% Hallmarked Jewellery across Eastern U.P., operating two flagships stores in Varanasi (Sigra & Godowlia).", hi: "पूर्वी उत्तर प्रदेश में 100% हॉलमार्क आभूषणों के प्रमुख केंद्र के रूप में मान्यता प्राप्त, वाराणसी में दो प्रमुख शोरूम (सिगरा और गोदौलिया) संचालित।" },
  "home.timeline.readMore": { en: "Read Our Full Story", hi: "पूरी कहानी पढ़ें" },

  "home.trust.kicker": { en: "Authentication & Care", hi: "प्रमाणीकरण और देखभाल" },
  "home.trust.title": { en: "Showroom Pillars", hi: "शोरूम के स्तंभ" },
  "home.trust.desc": { en: "Jewellery buying is built on trust — Trueso is committed to the finest quality in Varanasi. All jewellery is hallmarked and certified, including IGI-certified gemstones, BIS-hallmarked gold, and internationally certified diamonds. All silver jewellery and utensils are 92.5 hallmarked.", hi: "आभूषण खरीदना विश्वास पर आधारित है — ट्रूसो वाराणसी में उत्कृष्ट गुणवत्ता के प्रति प्रतिबद्ध है। सभी आभूषण हॉलमार्क और प्रमाणित हैं, जिनमें आईजीआई-प्रमाणित रत्न, बीआईएस-हॉलमार्क सोना, और अंतरराष्ट्रीय स्तर पर प्रमाणित हीरे शामिल हैं। सभी चांदी के आभूषण और बर्तन 92.5 हॉलमार्क हैं।" },
  "home.badge.hallmark": { en: "BIS Hallmarked Gold", hi: "बीआईएस हॉलमार्क सोना" },
  "home.badge.diamonds": { en: "Certified Diamonds", hi: "प्रमाणित हीरे" },
  "home.badge.purityCheck": { en: "Free Gold Purity Check", hi: "मुफ्त सोने की शुद्धता जांच" },
  "home.badge.cleaning": { en: "Free Jewellery Cleaning", hi: "मुफ्त आभूषण सफाई" },
  "home.badge.customised": { en: "Customised Jewellery", hi: "कस्टम आभूषण" },
  "home.badge.deduction": { en: "0% Gold Deduction", hi: "0% गोल्ड कटौती" },
  "home.badge.repair": { en: "Free Repair up to 5 Yrs", hi: "5 वर्ष तक मुफ्त मरम्मत" },

  "home.founders.kicker": { en: "Our Pillars", hi: "हमारे स्तंभ" },
  "home.founders.title": { en: "Our Founders", hi: "हमारे संस्थापक" },
  "home.founder1": { en: "Shri Kanhaiya Lal Saraf", hi: "श्री कन्हैया लाल सर्राफ" },
  "home.founder2": { en: "Shri Mukund Lal Saraf", hi: "श्री मुकुंद लाल सर्राफ" },
  "home.founder3": { en: "Shri Balaram Das Saraf", hi: "श्री बलराम दास सर्राफ" },

  "home.testimonials.kicker": { en: "Guestbook Records", hi: "अतिथि पुस्तिका" },
  "home.testimonials.title": { en: "Client Testimonials", hi: "ग्राहक प्रशंसापत्र" },
  "home.testimonials.verified": { en: "Verified Customer", hi: "सत्यापित ग्राहक" },
  "home.testimonial1.quote": { en: "Love the collection at Trueso. They are the best for Gold Jewellery in Varanasi.", hi: "ट्रूसो का संग्रह बेहद पसंद है। वाराणसी में सोने के आभूषणों के लिए वे सर्वश्रेष्ठ हैं।" },
  "home.testimonial1.author": { en: "Ruchi Jaiswal", hi: "रुचि जायसवाल" },
  "home.testimonial2.quote": { en: "Trueso has the best collection of bridal jewellery in Varanasi. I recommend them for their quality assurance in jewellery.", hi: "वाराणसी में दुल्हन के आभूषणों का सबसे अच्छा संग्रह ट्रूसो के पास है। गुणवत्ता आश्वासन के लिए मैं इन्हें सुझाती हूं।" },
  "home.testimonial2.author": { en: "Sudha Sharma", hi: "सुधा शर्मा" },
  "home.testimonial3.quote": { en: "I have bought a Platinum Love band from Trueso. It was PGI certified.", hi: "मैंने ट्रूसो से एक प्लैटिनम लव बैंड खरीदा। वह पीजीआई प्रमाणित था।" },
  "home.testimonial3.author": { en: "Abhinash Trivedi", hi: "अभिनाश त्रिवेदी" },
  "home.testimonial4.quote": { en: "Thank you Kanhaiya Lal Saraf Jewellers for the lovely collection and hallmarked jewellery. Loved the gift from my husband.", hi: "कन्हैया लाल सर्राफ ज्वेलर्स का धन्यवाद — सुंदर संग्रह और हॉलमार्क आभूषणों के लिए। पति से मिला यह उपहार बहुत पसंद आया।" },
  "home.testimonial4.author": { en: "Manisha Changulani", hi: "मनीषा चंगुलानी" },

  "home.showroom.kicker": { en: "Store Showrooms", hi: "स्टोर शोरूम" },
  "home.showroom.title": { en: "Visit Our Varanasi Outlets", hi: "हमारे वाराणसी आउटलेट पधारें" },
  "home.showroom.flagship": { en: "FLAGSHIP SHOWROOM", hi: "प्रमुख शोरूम" },
  "home.showroom.township": { en: "TOWNSHIP SHOWROOM", hi: "टाउनशिप शोरूम" },
  "home.showroom.sigraAddr": { en: "64/149 C, Shakti Shikha Apartment, 1st Floor, Sigra Road, Opposite Saheed Udyan, Varanasi, Uttar Pradesh 221001", hi: "64/149 सी, शक्ति शिखा अपार्टमेंट, प्रथम तल, सिगरा रोड, शहीद उद्यान के सामने, वाराणसी, उत्तर प्रदेश 221001" },
  "home.showroom.godowliaAddr": { en: "D 37/47, 47A, 47A-1, Below Hotel Ganges Grand, Godowlia, Varanasi, Uttar Pradesh 221001", hi: "डी 37/47, 47ए, 47ए-1, होटल गंगेज़ ग्रैंड के नीचे, गोदौलिया, वाराणसी, उत्तर प्रदेश 221001" },
  "home.showroom.phoneLabel": { en: "Phone:", hi: "फ़ोन:" },
  "home.showroom.hours": { en: "Hours: Mon–Sun, 10:00 AM – 8:00 PM", hi: "समय: सोम–रवि, सुबह 10:00 – रात 8:00" },
  "home.showroom.cta": { en: "Location Coordinates & Forms", hi: "पता व संपर्क फॉर्म" },

  "about.hero.kicker": { en: "Established 1910", hi: "स्थापना 1910" },
  "about.hero.title": { en: "Our Legacy & History", hi: "हमारी विरासत और इतिहास" },
  "about.hero.desc": { en: "Bridging the traditional zari embroidery craftsmanship of Varanasi with the absolute guarantee of hallmarked gold.", hi: "वाराणसी की पारंपरिक ज़री कढ़ाई कारीगरी को हॉलमार्क सोने की पूर्ण गारंटी से जोड़ते हुए।" },
  "about.chronicle.kicker": { en: "THE CHRONICLE", hi: "इतिहास गाथा" },
  "about.chronicle.title": { en: "Over a Century of Trust", hi: "एक सदी से अधिक का विश्वास" },
  "about.chronicle.p1": { en: "Founded by Shri Kanhaiya Lal Saraf in the year 1910, Kanhaiya Lal Saraf Jewellers (KLSJ) is one of the oldest establishments in Varanasi. The legacy of Shri K.L. Saraf was carried forward by Shri Mukund Lal Saraf and Shri Balaram Das Saraf, and KLSJ became a leading name of jewellery store in Purvanchal.", hi: "1910 में श्री कन्हैया लाल सर्राफ द्वारा स्थापित, कन्हैया लाल सर्राफ ज्वेलर्स (केएलएसजे) वाराणसी की सबसे पुरानी संस्थाओं में से एक है। श्री के.एल. सर्राफ की विरासत को श्री मुकुंद लाल सर्राफ और श्री बलराम दास सर्राफ ने आगे बढ़ाया, और केएलएसजे पूर्वांचल में आभूषण व्यापार का एक अग्रणी नाम बना।" },
  "about.chronicle.p2": { en: "Continuing the heritage of the founders, Shri Abhay Agrawal Ji took a huge leap for Kanhaiya Lal Saraf Jewellers and created the brand Trueso in 2006, with the aim to bring the true Hallmark Jewellery Showroom in Varanasi. Soon, Trueso got recognized as the one-stop destination for 100% Hallmarked Jewellery in the entire Eastern U.P.", hi: "संस्थापकों की विरासत को आगे बढ़ाते हुए, श्री अभय अग्रवाल जी ने कन्हैया लाल सर्राफ ज्वेलर्स के लिए एक बड़ी छलांग लगाई और 2006 में ब्रांड ट्रूसो की स्थापना की, जिसका उद्देश्य वाराणसी में सच्चा हॉलमार्क ज्वेलरी शोरूम लाना था। शीघ्र ही, ट्रूसो संपूर्ण पूर्वी उत्तर प्रदेश में 100% हॉलमार्क आभूषण के लिए एकमात्र गंतव्य के रूप में पहचाना जाने लगा।" },
  "about.craft.kicker": { en: "ARTISANAL DETAIL", hi: "शिल्प कारीगरी" },
  "about.craft.title": { en: "The Craftsmanship Philosophy", hi: "कारीगरी का दर्शन" },
  "about.craft.desc": { en: "Every piece crafted by the house of Trueso reflects the fine-line attention that carries the legacy of the brand forward. A blend of modern designers and experienced craftsmen merge antique design with modern craftsmanship — Trueso draws the finest artisans from across India to create bespoke designs that entice and allure.", hi: "ट्रूसो द्वारा तैयार हर आभूषण ब्रांड की विरासत को आगे बढ़ाने वाली बारीक कारीगरी को दर्शाता है। आधुनिक डिज़ाइनरों और अनुभवी कारीगरों का मेल पारंपरिक डिज़ाइन को आधुनिक शिल्प कौशल से जोड़ता है — ट्रूसो पूरे भारत से सर्वश्रेष्ठ कारीगरों को जुटाकर मोहक, विशेष डिज़ाइन तैयार करता है।" },
  "about.lineage.title": { en: "The Founding Lineage", hi: "संस्थापक वंशावली" },
  "about.lineage.founder1Year": { en: "Founder — 1910", hi: "संस्थापक — 1910" },
  "about.lineage.founder1Desc": { en: "Pioneered standard purity gold rates and certified retail frameworks in Varanasi.", hi: "वाराणसी में मानक शुद्धता स्वर्ण दरों और प्रमाणित खुदरा ढांचे के प्रवर्तक।" },
  "about.lineage.founderLabel": { en: "Founder", hi: "संस्थापक" },
  "about.lineage.founder23Desc": { en: "Guided regional expansion, building trusted distribution across Purvanchal.", hi: "क्षेत्रीय विस्तार का मार्गदर्शन किया, पूर्वांचल में विश्वसनीय वितरण का निर्माण किया।" },
  "about.lineage.presentYear": { en: "Present Day", hi: "वर्तमान समय" },
  "about.lineage.presentTitle": { en: "100% Certification Leadership", hi: "100% प्रमाणन नेतृत्व" },
  "about.lineage.presentDesc": { en: "Operating two showrooms equipped with karatmeters and insurance alliances. Serving generations of Varanasi families with authenticated BIS certifications.", hi: "कैरेटमीटर और बीमा सहयोग से सुसज्जित दो शोरूम संचालित। प्रमाणित बीआईएस प्रमाणीकरण के साथ वाराणसी के परिवारों की पीढ़ियों की सेवा।" },
  "about.services.kicker": { en: "ESTABLISHED ASSURANCE", hi: "स्थापित आश्वासन" },
  "about.services.title": { en: "Our Core Services", hi: "हमारी प्रमुख सेवाएं" },
  "about.services.p1": { en: "Since 1910, Kanhaiya Lal Saraf – Trueso has stood as a guardian of Banaras metalcraft. For over a century, our relationships are built on unyielding standards of metal purity, certified diamonds, transparent practices, and lifetime post-purchase care.", hi: "1910 से, कन्हैया लाल सर्राफ – ट्रूसो बनारस की धातु कारीगरी के संरक्षक के रूप में खड़ा रहा है। एक सदी से अधिक समय से, हमारे संबंध धातु शुद्धता के अटूट मानकों, प्रमाणित हीरों, पारदर्शी व्यवहार, और आजीवन खरीद-पश्चात देखभाल पर आधारित हैं।" },
  "about.services.p2": { en: "We understand that jewellery buying is a process built on trust — that's why Trueso is committed to providing the finest quality of jewellery in Varanasi. All our jewellery is hallmarked and certified from respective organizations like IGI Certified Gemstones, BIS Hallmarked Gold, and Internationally Certified Diamonds. We also provide free repairing on all gold jewellery, and all our silver jewellery & utensils are 92.5 Hallmarked.", hi: "हम समझते हैं कि आभूषण खरीदना विश्वास पर आधारित प्रक्रिया है — इसीलिए ट्रूसो वाराणसी में उत्कृष्टतम गुणवत्ता के आभूषण प्रदान करने के लिए प्रतिबद्ध है। हमारे सभी आभूषण संबंधित संस्थाओं से हॉलमार्क और प्रमाणित हैं, जैसे आईजीआई प्रमाणित रत्न, बीआईएस हॉलमार्क सोना, और अंतरराष्ट्रीय स्तर पर प्रमाणित हीरे। हम सभी सोने के आभूषणों पर मुफ्त मरम्मत भी प्रदान करते हैं, और हमारे सभी चांदी के आभूषण व बर्तन 92.5 हॉलमार्क हैं।" },
  "about.svc1.title": { en: "Free Gold Purity Check", hi: "मुफ्त सोने की शुद्धता जांच" },
  "about.svc1.desc": { en: "We invite you to bring your old jewelry for computerized gold testing. Utilizing state-of-the-art XRF (X-ray Fluorescence) spectrometers, our showroom offers precise, non-destructive metal composition analysis free of charge.", hi: "हम आपको अपने पुराने आभूषण कंप्यूटरीकृत सोना परीक्षण के लिए लाने हेतु आमंत्रित करते हैं। अत्याधुनिक एक्सआरएफ स्पेक्ट्रोमीटर का उपयोग करते हुए, हमारा शोरूम मुफ्त में सटीक, गैर-विनाशकारी धातु संरचना विश्लेषण प्रदान करता है।" },
  "about.svc2.title": { en: "Free Jewellery Cleaning Service in Varanasi", hi: "वाराणसी में मुफ्त आभूषण सफाई सेवा" },
  "about.svc2.desc": { en: "Keep your jewelry looking pristine. Trueso provides complimentary ultrasonic cleaning and expert polishing sessions in our showrooms. Bring in your ornaments, and our karigars will safely restore their original, radiant luster.", hi: "अपने आभूषणों को नया जैसा बनाए रखें। ट्रूसो हमारे शोरूम में मुफ्त अल्ट्रासोनिक सफाई और विशेषज्ञ पॉलिशिंग सत्र प्रदान करता है। अपने गहने लाएं, हमारे कारीगर सुरक्षित रूप से उनकी मूल, दैदीप्यमान चमक लौटाएंगे।" },
  "about.svc3.title": { en: "Customized Jewellery", hi: "कस्टम आभूषण" },
  "about.svc3.desc": { en: "Bring your vision to life. Collaborate directly with our design consultants and master silversmiths to create a bespoke piece of jewelry. From initial hand-sketches to 3D casting and hand-beaten gold detailing, we craft tailored legacy designs.", hi: "अपनी कल्पना को साकार करें। हमारे डिज़ाइन सलाहकारों और मास्टर कारीगरों के साथ मिलकर एक विशेष आभूषण तैयार करें। शुरुआती हाथ से बने रेखाचित्रों से लेकर 3डी ढलाई और हाथ से गढ़े सोने के काम तक, हम आपके लिए विशेष विरासत डिज़ाइन तैयार करते हैं।" },
  "about.svc4.title": { en: "0% Deduction on Old Gold Exchange", hi: "पुराने सोने के विनिमय पर 0% कटौती" },
  "about.svc4.desc": { en: "Enjoy full valuation for your old gold assets. We offer a transparent, premium 100% value exchange policy for old gold ornaments against our new design collections. There are zero value deductions based on purity calculations.", hi: "अपनी पुरानी सोने की संपत्ति का पूर्ण मूल्यांकन पाएं। हम पुराने सोने के आभूषणों के लिए हमारे नए डिज़ाइन संग्रह के बदले पारदर्शी, प्रीमियम 100% मूल्य विनिमय नीति प्रदान करते हैं। शुद्धता गणना के आधार पर कोई मूल्य कटौती नहीं की जाती।" },
  "about.svc5.title": { en: "Free Repairing Upto 5 Years", hi: "5 वर्ष तक मुफ्त मरम्मत" },
  "about.svc5.desc": { en: "We stand behind the durability of our creations. Trueso offers a comprehensive 5-year post-purchase service warranty. Enjoy free repairs, sizing modifications, security clasp reinforcements, and gemstone tighteners.", hi: "हम अपनी रचनाओं की मजबूती के प्रति आश्वस्त हैं। ट्रूसो 5 वर्ष की व्यापक खरीद-पश्चात सेवा वारंटी प्रदान करता है। मुफ्त मरम्मत, आकार समायोजन, सुरक्षा क्लैस्प मजबूतीकरण, और रत्न कसावट का लाभ उठाएं।" },
  "about.svc6.title": { en: "Free Jewellery Insurance in Varanasi", hi: "वाराणसी में मुफ्त आभूषण बीमा" },
  "about.svc6.desc": { en: "Shop with complete peace of mind. Every qualifying purchase at our Varanasi showrooms comes with complimentary jewellery insurance, protecting your investment against loss, theft, and accidental damage.", hi: "पूर्ण निश्चिंतता के साथ खरीदारी करें। हमारे वाराणसी शोरूम में हर योग्य खरीद के साथ मुफ्त आभूषण बीमा मिलता है, जो आपके निवेश को हानि, चोरी, और आकस्मिक क्षति से सुरक्षित रखता है।" },
  "about.svc7.title": { en: "Free Gold Testing", hi: "मुफ्त सोना परीक्षण" },
  "about.svc7.desc": { en: "Bring in your gold ornaments for a complimentary purity test at our Varanasi showrooms, verified using precise, non-destructive testing equipment before every purchase or exchange.", hi: "हर खरीद या विनिमय से पहले सटीक, गैर-विनाशकारी परीक्षण उपकरणों से सत्यापित मुफ्त शुद्धता परीक्षण के लिए अपने सोने के आभूषण हमारे वाराणसी शोरूम में लाएं।" },
  "about.svc8.title": { en: "Jewellery Repairing Service in Varanasi", hi: "वाराणसी में आभूषण मरम्मत सेवा" },
  "about.svc8.desc": { en: "Our in-house karigars offer expert repair services at our Varanasi showrooms, from clasp and chain fixes to stone re-setting, restoring every piece to its original condition.", hi: "हमारे अपने कारीगर हमारे वाराणसी शोरूम में विशेषज्ञ मरम्मत सेवाएं प्रदान करते हैं, क्लैस्प और चेन ठीक करने से लेकर पत्थर पुनः जड़ने तक, हर आभूषण को उसकी मूल स्थिति में लौटाते हुए।" },

  "collections.hero.kicker": { en: "Curated Worlds", hi: "चयनित संसार" },
  "collections.hero.desc": { en: "Five curated worlds of jewellery, each hallmarked and certified. Select a vault below to view our specific catalog frames.", hi: "आभूषणों के पांच चयनित संसार, प्रत्येक हॉलमार्क और प्रमाणित। नीचे किसी वॉल्ट का चयन कर हमारे विशेष संग्रह देखें।" },
  "collections.grid.kicker": { en: "Five Vaults", hi: "पांच वॉल्ट" },
  "collections.grid.title": { en: "Explore Our Vaults", hi: "हमारे वॉल्ट देखें" },
  "collections.vault1.label": { en: "VAULT I · GOLD", hi: "वॉल्ट I · सोना" },
  "collections.vault1.desc": { en: "From Sagai to Vidai, gold serves to adorn woman like nothing else. 100% BIS Hallmarked.", hi: "सगाई से विदाई तक, सोना नारी का श्रृंगार है। 100% बीआईएस हॉलमार्क।" },
  "collections.vault2.label": { en: "VAULT II · DIAMONDS", hi: "वॉल्ट II · हीरे" },
  "collections.vault2.desc": { en: "Innovation and unblemished heritage merging into stellar designs. Certified and graded.", hi: "नवाचार और निर्दोष विरासत का संगम — बेहतरीन डिज़ाइनों में। प्रमाणित और श्रेणीबद्ध।" },
  "collections.vault3.label": { en: "VAULT III · HERITAGE", hi: "वॉल्ट III · विरासत" },
  "collections.vault3.desc": { en: "An eclectic mix of beauty, opulence, heritage, and meaning passed down generations.", hi: "सुंदरता, वैभव, विरासत का अनूठा संगम — पीढ़ियों से चला आ रहा अर्थ।" },
  "collections.vault4.label": { en: "VAULT IV · STERLING", hi: "वॉल्ट IV · चांदी" },
  "collections.vault4.desc": { en: "Affordable luxury dating back to 3000 BC. Utensils, idols, temples, and fine pieces.", hi: "3000 ईसा पूर्व से चली आ रही किफायती विलासिता। बर्तन, मूर्तियां, मंदिर, और सुंदर टुकड़े।" },
  "collections.vault5.label": { en: "VAULT V · ASTROLOGY", hi: "वॉल्ट V · ज्योतिष" },
  "collections.vault5.title": { en: "Gems Jewellery", hi: "रत्न आभूषण" },
  "collections.vault5.desc": { en: "Bespoke astrological and fine gemstone settings offering pure certified natural glow.", hi: "विशेष ज्योतिषीय और सुंदर रत्न जड़ाव, शुद्ध प्रमाणित प्राकृतिक आभा के साथ।" },
  "collections.discover": { en: "Discover Vault →", hi: "वॉल्ट देखें →" },

  "product.exploreCatalog": { en: "Explore Catalog", hi: "संग्रह देखें" },
  "product.bookViewing": { en: "Book Private Viewing", hi: "निजी दर्शन बुक करें" },
  "product.catalog.kicker": { en: "Curated Catalog", hi: "चयनित संग्रह" },
  "product.bisCertified": { en: "BIS Certified", hi: "बीआईएस प्रमाणित" },
  "product.inquireWhatsapp": { en: "Inquire on WhatsApp", hi: "व्हाट्सएप पर पूछताछ करें" },
  "product.consult.eyebrow": { en: "Showroom Reservation", hi: "शोरूम आरक्षण" },
  "product.consult.title": { en: "Book a Store Meeting", hi: "स्टोर मीटिंग बुक करें" },
  "product.consult.desc": { en: "Schedule a direct viewing appointment at our Sigra or Godowlia showroom for personalized recommendations.", hi: "व्यक्तिगत सुझावों के लिए हमारे सिगरा या गोदौलिया शोरूम में सीधी दर्शन अपॉइंटमेंट निर्धारित करें।" },
  "product.form.fullName": { en: "Full Name", hi: "पूरा नाम" },
  "product.form.phoneNumber": { en: "Phone Number", hi: "फ़ोन नंबर" },
  "product.form.preferredShowroom": { en: "Preferred Showroom", hi: "पसंदीदा शोरूम" },
  "product.form.selectShowroom": { en: "Select Showroom", hi: "शोरूम चुनें" },
  "product.form.sigraOption": { en: "Sigra Outlet (Varanasi)", hi: "सिगरा आउटलेट (वाराणसी)" },
  "product.form.godowliaOption": { en: "Godowlia Outlet (Varanasi)", hi: "गोदौलिया आउटलेट (वाराणसी)" },
  "product.form.preferredDate": { en: "Preferred Date & Time", hi: "पसंदीदा तिथि व समय" },
  "product.form.submit": { en: "Submit Booking Request", hi: "बुकिंग अनुरोध भेजें" },
  "product.crosslinks.eyebrow": { en: "Explore Vaults", hi: "वॉल्ट देखें" },
  "product.crosslinks.title": { en: "Our Other Collections", hi: "हमारे अन्य संग्रह" },
  "product.crosslinks.intlCertified": { en: "Internationally Certified", hi: "अंतरराष्ट्रीय स्तर पर प्रमाणित" },
  "product.crosslinks.fineHandcrafting": { en: "Fine Handcrafting Legacy", hi: "उत्कृष्ट हस्तकला विरासत" },
  "product.crosslinks.hallmarkCertified": { en: "92.5 Hallmark Certified", hi: "92.5 हॉलमार्क प्रमाणित" },
  "product.crosslinks.igiCertified": { en: "IGI Certified Authenticity", hi: "आईजीआई प्रमाणित प्रामाणिकता" },
  "product.crosslinks.viewCollection": { en: "View Collection →", hi: "संग्रह देखें →" },
  "product.success.title": { en: "Request Submitted Successfully", hi: "अनुरोध सफलतापूर्वक भेजा गया" },
  "product.success.desc": { en: "Thank you. Our showroom relationship manager will call you shortly to confirm your private viewing slot and reserve showcase assets.", hi: "धन्यवाद। हमारे शोरूम रिलेशनशिप मैनेजर आपकी निजी दर्शन अपॉइंटमेंट की पुष्टि हेतु शीघ्र ही आपको कॉल करेंगे।" },
  "product.success.another": { en: "Book Another Viewing", hi: "एक और दर्शन बुक करें" },

  "goldPage.hero.kicker": { en: "Vault I · Certified Purity", hi: "वॉल्ट I · प्रमाणित शुद्धता" },
  "goldPage.hero.p1": { en: "One of the most sought-after precious metals, gold is everyone's favorite. From 'Sagai' to 'Vidai', Gold serves to adorn woman like nothing else. Considered to be highly auspicious among Hindu families, gold is a must-buy across all occasions and festivities.", hi: "सबसे लोकप्रिय बहुमूल्य धातुओं में से एक, सोना सबका पसंदीदा है। 'सगाई' से 'विदाई' तक, सोना नारी का श्रृंगार है। हिंदू परिवारों में अत्यंत शुभ माना जाने वाला सोना हर अवसर और त्योहार पर अनिवार्य खरीद है।" },
  "goldPage.hero.p2": { en: "At Trueso, all of our gold jewellery is 100% BIS Hallmarked which ensures absolute quality and credibility across all items. Explore our heritage designs crafted with fine-line attention by the finest artisans of Varanasi.", hi: "ट्रूसो में, हमारे सभी सोने के आभूषण 100% बीआईएस हॉलमार्क हैं जो हर वस्तु में पूर्ण गुणवत्ता और विश्वसनीयता सुनिश्चित करता है। वाराणसी के सर्वश्रेष्ठ कारीगरों द्वारा बारीक कारीगरी से तैयार हमारे विरासत डिज़ाइन देखें।" },
  "goldPage.hero.frameTag": { en: "100% BIS HALLMARKED", hi: "100% बीआईएस हॉलमार्क" },
  "goldPage.craft.kicker": { en: "Traditional Techniques", hi: "पारंपरिक तकनीकें" },
  "goldPage.craft.title": { en: "Varanasi Nakashi Heritage", hi: "वाराणसी नक्काशी विरासत" },
  "goldPage.craft.p1": { en: "intricate engraving work that breathes life into gold sheets.", hi: "सूक्ष्म नक्काशी कार्य जो सोने की परतों में जान डाल देता है।" },
  "goldPage.craft.p2": { en: "Trueso features some of the finest traditional craftsmen of Gold Jewellery in Varanasi, who have spent decades perfecting the signature \"Nakashi\" (hand engraving) and filigree methods. Each ornament is an heirloom-quality creation, representing an exquisite culmination of beauty, opulence, and legacy.", hi: "ट्रूसो में वाराणसी के कुछ सर्वश्रेष्ठ पारंपरिक स्वर्णकार शामिल हैं, जिन्होंने दशकों से विशिष्ट \"नक्काशी\" (हस्त उत्कीर्णन) और फिलिग्री तकनीकों को निखारा है। हर आभूषण विरासत-गुणवत्ता की रचना है, जो सुंदरता, वैभव, और परंपरा का उत्कृष्ट संगम दर्शाती है।" },
  "goldPage.craft.frameTag": { en: "FINE-LINE ENGRAVING", hi: "बारीक नक्काशी" },
  "goldPage.catalog.title": { en: "Signature Ornaments", hi: "विशिष्ट आभूषण" },
  "goldPage.catalog.desc": { en: "Browse our hand-selected legacy gold ornaments. Click to inquire with our showroom team.", hi: "हमारे हाथ से चुने गए विरासत सोने के आभूषण देखें। हमारी शोरूम टीम से पूछताछ के लिए क्लिक करें।" },
  "goldPage.p1.title": { en: "The Kashi Nakashi Bridal Choker", hi: "काशी नक्काशी दुल्हन चोकर" },
  "goldPage.p1.desc": { en: "Exquisite hand-carved heritage bridal choker with rubies, representing Varanasi's finest nakashi engraving legacy.", hi: "माणिक जड़ित उत्कृष्ट हस्तनिर्मित विरासत दुल्हन चोकर, वाराणसी की सर्वश्रेष्ठ नक्काशी उत्कीर्णन विरासत का प्रतीक।" },
  "goldPage.p2.title": { en: "Royal Ganga Aarti Choker", hi: "रॉयल गंगा आरती चोकर" },
  "goldPage.p2.desc": { en: "An elaborate gold choker set displaying detailed floral filigree and temple carvings.", hi: "विस्तृत पुष्प फिलिग्री और मंदिर नक्काशी दर्शाता एक भव्य सोने का चोकर सेट।" },
  "goldPage.p3.title": { en: "Vedic Heritage Bridal Necklace", hi: "वैदिक विरासत दुल्हन हार" },
  "goldPage.p3.desc": { en: "Intricate heavy bridal necklace set showing stellar engraving work with emerald and ruby accents.", hi: "पन्ना और माणिक की झलक के साथ शानदार उत्कीर्णन कार्य दर्शाता जटिल भारी दुल्हन हार सेट।" },

  "product.igiGraded": { en: "IGI Graded", hi: "आईजीआई श्रेणीबद्ध" },
  "diamondPage.crosslinks.bisHallmarked": { en: "100% BIS Hallmarked", hi: "100% बीआईएस हॉलमार्क" },
  "diamondPage.hero.kicker": { en: "Vault II · IGI Certified", hi: "वॉल्ट II · आईजीआई प्रमाणित" },
  "diamondPage.hero.p1": { en: "Carrying along an unblemished heritage of expertise in diamonds and applying innovation to create stellar designs – our talent of creation has never failed to impress. Every single design is in line with the industry-standard diamond grading, accounting for authenticity.", hi: "हीरों में विशेषज्ञता की निर्दोष विरासत को आगे बढ़ाते हुए और नवाचार से बेहतरीन डिज़ाइन तैयार करते हुए — हमारी रचनात्मकता ने हमेशा प्रभावित किया है। हर डिज़ाइन उद्योग-मानक हीरा श्रेणीकरण के अनुरूप है, जो प्रामाणिकता सुनिश्चित करता है।" },
  "diamondPage.hero.p2": { en: "At Trueso, our diamonds are internationally certified by leading gemological institutes, ensuring G-H color, VVS-VS clarity benchmarks. Choose a solitaire engagement piece or a bridal design created to capture light and legacy.", hi: "ट्रूसो में, हमारे हीरे प्रमुख रत्न विज्ञान संस्थानों द्वारा अंतरराष्ट्रीय स्तर पर प्रमाणित हैं, जो जी-एच रंग, वीवीएस-वीएस स्पष्टता मानकों को सुनिश्चित करते हैं। एक सॉलिटेयर सगाई का टुकड़ा या प्रकाश और विरासत को समेटे दुल्हन डिज़ाइन चुनें।" },
  "diamondPage.hero.frameTag": { en: "INTERNATIONALLY CERTIFIED", hi: "अंतरराष्ट्रीय स्तर पर प्रमाणित" },
  "diamondPage.craft.kicker": { en: "Artisanal Settings", hi: "शिल्प जड़ाव" },
  "diamondPage.craft.title": { en: "Solitaire & Micro-pave Setting", hi: "सॉलिटेयर और माइक्रो-पेव सेटिंग" },
  "diamondPage.craft.p1": { en: "Aligning facets to optimize the optical light reflection.", hi: "प्रकाश परावर्तन को बेहतर बनाने हेतु फलकों का सटीक संरेखण।" },
  "diamondPage.craft.p2": { en: "Our certified gemologists and craftsmen inspect every diamond under microscopic setting apertures to align each facet perfectly. By utilizing advanced micro-pave and prong settings, Trueso ensures that diamonds are secured firmly while maintaining a light path that yields ultimate fire and brilliance.", hi: "हमारे प्रमाणित रत्नविज्ञानी और कारीगर हर हीरे को सूक्ष्मदर्शी सेटिंग एपर्चर के तहत जांचते हैं ताकि हर फलक पूर्ण रूप से संरेखित हो। उन्नत माइक्रो-पेव और प्रॉन्ग सेटिंग का उपयोग कर, ट्रूसो सुनिश्चित करता है कि हीरे मजबूती से सुरक्षित रहें और अंतिम चमक व दीप्ति बनाए रखें।" },
  "diamondPage.craft.frameTag": { en: "FACET PRECISION", hi: "फलक परिशुद्धता" },
  "diamondPage.catalog.title": { en: "Signature Solitaires", hi: "विशिष्ट सॉलिटेयर" },
  "diamondPage.catalog.desc": { en: "Browse our authenticated solitaire and micro-pave designs. Click to inquire with our showroom team.", hi: "हमारे प्रामाणिक सॉलिटेयर और माइक्रो-पेव डिज़ाइन देखें। हमारी शोरूम टीम से पूछताछ के लिए क्लिक करें।" },
  "diamondPage.p1.title": { en: "The Varanasi Star Solitaire", hi: "वाराणसी स्टार सॉलिटेयर" },
  "diamondPage.p1.desc": { en: "Classic white gold solitaire ring showcasing an IGI-graded excellent cut diamond of stunning brilliance.", hi: "क्लासिक व्हाइट गोल्ड सॉलिटेयर रिंग, जिसमें आईजीआई-श्रेणीबद्ध उत्कृष्ट कट का चमकदार हीरा जड़ा है।" },
  "diamondPage.p2.title": { en: "Stellar Heritage Necklace", hi: "स्टेलर हेरिटेज हार" },
  "diamondPage.p2.desc": { en: "A magnificent display of pave and marquise diamonds set in traditional yellow gold layout.", hi: "पारंपरिक पीले सोने की संरचना में पेव और मार्क्विज़ हीरों का भव्य प्रदर्शन।" },
  "diamondPage.p3.title": { en: "Aura Dual Halo Studs", hi: "औरा ड्यूल हेलो स्टड्स" },
  "diamondPage.p3.desc": { en: "Stunning rose gold diamond stud earrings featuring double halo surrounding brilliant round stones.", hi: "शानदार रोज़ गोल्ड हीरा स्टड इयररिंग्स, जिसमें चमकदार गोल पत्थरों के चारों ओर दोहरा हेलो है।" },

  "antiquePage.hero.kicker": { en: "Vault III · Handcrafting Legacy", hi: "वॉल्ट III · हस्तकला विरासत" },
  "antiquePage.hero.p1": { en: "An eclectic mix of beauty, opulence, heritage, and meaning above all – Antique Jewelry has its own charm that never fades away. A one-of-a-kind creation, that stands symbolic and is passed down from one generation to another.", hi: "सुंदरता, वैभव, विरासत, और सबसे बढ़कर अर्थ का अनूठा संगम – एंटीक आभूषण की अपनी एक ऐसी छटा है जो कभी फीकी नहीं पड़ती। एक अनूठी रचना, जो प्रतीकात्मक है और एक पीढ़ी से दूसरी पीढ़ी को सौंपी जाती है।" },
  "antiquePage.hero.p2": { en: "We have the finest craftsmen of Antique Jewellery in Varanasi who have helped buyers get the superlative Antique pieces for the last 50 years. All gold ornaments are BIS Hallmarked to provide a secure legacy piece.", hi: "हमारे पास वाराणसी के सर्वश्रेष्ठ एंटीक आभूषण कारीगर हैं, जिन्होंने पिछले 50 वर्षों से खरीदारों को उत्कृष्ट एंटीक टुकड़े दिलाए हैं। सभी सोने के आभूषण बीआईएस हॉलमार्क हैं ताकि एक सुरक्षित विरासत टुकड़ा सुनिश्चित हो।" },
  "antiquePage.hero.frameTag": { en: "FINE HANDCRAFTING LEGACY", hi: "उत्कृष्ट हस्तकला विरासत" },
  "antiquePage.craft.kicker": { en: "Heritage Engraving", hi: "विरासत उत्कीर्णन" },
  "antiquePage.craft.title": { en: "Shri Mukund Lal Saraf Legacy", hi: "श्री मुकुंद लाल सर्राफ विरासत" },
  "antiquePage.craft.p1": { en: "Heirloom quality ornaments that preserve centuries of craftsmanship.", hi: "विरासत-गुणवत्ता के आभूषण जो सदियों की कारीगरी को संजोए हुए हैं।" },
  "antiquePage.craft.p2": { en: "The legacy of Shri Mukund Lal Saraf carries forward traditional metalwork, incorporating detailed floral, peacock, and temple designs. Each antique neckpiece, bracelet, or ring is finished with a proprietary warm gold wash that evokes the luster of historical Indian royalty, making it a true centerpiece.", hi: "श्री मुकुंद लाल सर्राफ की विरासत पारंपरिक धातुकर्म को आगे बढ़ाती है, जिसमें विस्तृत पुष्प, मोर, और मंदिर डिज़ाइन शामिल हैं। हर एंटीक नेकपीस, कंगन, या अंगूठी को एक विशेष गर्म स्वर्ण आवरण से पूर्ण किया जाता है जो ऐतिहासिक भारतीय राजसी चमक को दर्शाता है, जिससे यह एक वास्तविक केंद्रबिंदु बनता है।" },
  "antiquePage.craft.frameTag": { en: "WARM SEPIA WASH", hi: "गर्म सीपिया आवरण" },
  "antiquePage.catalog.title": { en: "Signature Heirloom Pieces", hi: "विशिष्ट विरासत टुकड़े" },
  "antiquePage.catalog.desc": { en: "Browse our hand-carved heritage antique designs. Click to inquire with our showroom team.", hi: "हमारे हाथ से नक्काशीदार विरासत एंटीक डिज़ाइन देखें। हमारी शोरूम टीम से पूछताछ के लिए क्लिक करें।" },
  "antiquePage.p1.title": { en: "The KLSJ Legacy Nakashi Necklace", hi: "केएलएसजे लिगेसी नक्काशी हार" },
  "antiquePage.p1.desc": { en: "Heirloom-grade antique necklace set displaying intricate Nakashi hand carvings and ruby studs.", hi: "विरासत-श्रेणी का एंटीक हार सेट, जिसमें जटिल नक्काशी हस्त उत्कीर्णन और माणिक स्टड हैं।" },
  "antiquePage.p2.title": { en: "Temple Carving Jhumkas", hi: "मंदिर नक्काशी झुमके" },
  "antiquePage.p2.desc": { en: "Stunning dangling jhumkas featuring traditional temple design and floral details.", hi: "पारंपरिक मंदिर डिज़ाइन और पुष्प विवरण दर्शाते शानदार झूलते झुमके।" },
  "antiquePage.p3.title": { en: "Royal Heirloom Kara", hi: "रॉयल हेरिटेज कड़ा" },
  "antiquePage.p3.desc": { en: "Intricate heavy bangle featuring traditional filigree wire mesh and detailed screw closures.", hi: "पारंपरिक फिलिग्री तार जाली और विस्तृत स्क्रू क्लोज़र वाला जटिल भारी कड़ा।" },

  "silverPage.hallmark925": { en: "925 Hallmark", hi: "925 हॉलमार्क" },
  "silverPage.hero.kicker": { en: "Vault IV · 92.5 Sterling", hi: "वॉल्ट IV · 92.5 स्टर्लिंग" },
  "silverPage.hero.p1": { en: "Highly affordable and extremely versatile among other jewelry types, silver does stand out in its own glory. Besides gold and diamond, silver too represents wealth and luxury. Sterling silver forms a significant element of our collection.", hi: "अन्य आभूषण प्रकारों में अत्यंत किफायती और बहुमुखी, चांदी की अपनी एक अलग शान है। सोने और हीरे के अलावा, चांदी भी धन और वैभव का प्रतीक है। स्टर्लिंग सिल्वर हमारे संग्रह का एक महत्वपूर्ण भाग है।" },
  "silverPage.hero.p2": { en: "We have a large collection of Silver Jewellery in Varanasi and other products like Silver Temples, Silver Idols, and Silver Utensils. All silver items carry a 92.5 hallmark certificate as proof of authenticity.", hi: "हमारे पास वाराणसी में चांदी के आभूषणों का विशाल संग्रह और अन्य उत्पाद जैसे चांदी के मंदिर, मूर्तियां, और बर्तन हैं। सभी चांदी की वस्तुओं पर प्रामाणिकता के प्रमाण के रूप में 92.5 हॉलमार्क प्रमाणपत्र है।" },
  "silverPage.hero.frameTag": { en: "92.5 STERLING HALLMARK", hi: "92.5 स्टर्लिंग हॉलमार्क" },
  "silverPage.craft.kicker": { en: "Silversmithing Art", hi: "रजत शिल्प कला" },
  "silverPage.craft.title": { en: "Temple & Idol Casting Legacy", hi: "मंदिर व मूर्ति ढलाई विरासत" },
  "silverPage.craft.p1": { en: "Intricate silver engraving and embossing from Varanasi's finest silversmiths.", hi: "वाराणसी के सर्वश्रेष्ठ रजत शिल्पकारों की सूक्ष्म चांदी नक्काशी और उभार कला।" },
  "silverPage.craft.p2": { en: "Varanasi's silver temples and idols carry religious and aesthetic values across generations. Our silversmiths carve every curve and arch on pure 92.5 silver sheets, utilizing embossing techniques that yield unmatched detailing. Every temple and deity idol is hand-finished to bring out natural silver luster.", hi: "वाराणसी के चांदी के मंदिर और मूर्तियां पीढ़ियों से धार्मिक और सौंदर्यपरक महत्व रखती हैं। हमारे रजत शिल्पकार शुद्ध 92.5 चांदी की परतों पर हर वक्र और मेहराब उकेरते हैं, उभार तकनीकों का उपयोग करते हुए जो अद्वितीय बारीकी देती हैं। हर मंदिर और देवी-देवता की मूर्ति को प्राकृतिक चांदी की चमक लाने हेतु हाथ से तैयार किया जाता है।" },
  "silverPage.craft.frameTag": { en: "EMBOSSED SILVERSMITHING", hi: "उभरी हुई रजत शिल्पकला" },
  "silverPage.catalog.title": { en: "Signature Silver Ornaments", hi: "विशिष्ट चांदी के आभूषण" },
  "silverPage.catalog.desc": { en: "Browse our authenticated sterling silver designs, temples, and idols. Click to inquire with our showroom team.", hi: "हमारे प्रामाणिक स्टर्लिंग सिल्वर डिज़ाइन, मंदिर, और मूर्तियां देखें। हमारी शोरूम टीम से पूछताछ के लिए क्लिक करें।" },
  "silverPage.p1.title": { en: "Sterling Silver Lakshmi Idol", hi: "स्टर्लिंग सिल्वर लक्ष्मी मूर्ति" },
  "silverPage.p1.desc": { en: "Exquisitely detailed pure silver Laxmi idol, perfect for home temples and festive pooja collections.", hi: "अत्यंत सूक्ष्म विवरण वाली शुद्ध चांदी की लक्ष्मी मूर्ति, घर के मंदिरों और त्योहारी पूजा संग्रह के लिए उपयुक्त।" },
  "silverPage.p2.title": { en: "Royal Silver Utensil Set", hi: "रॉयल सिल्वर बर्तन सेट" },
  "silverPage.p2.desc": { en: "Elegant traditional silver dinner set including plate, bowl, and spoon in 92.5 sterling silver.", hi: "92.5 स्टर्लिंग सिल्वर में सुरुचिपूर्ण पारंपरिक चांदी भोजन सेट, जिसमें थाली, कटोरी, और चम्मच शामिल हैं।" },
  "silverPage.p3.title": { en: "Detailed Silver Temple", hi: "विस्तृत चांदी मंदिर" },
  "silverPage.p3.desc": { en: "Intricately carved silver mandir with dome arches and pillars, designed by Varanasi heritage silversmiths.", hi: "गुंबद मेहराब और स्तंभों के साथ सूक्ष्मता से उकेरा गया चांदी का मंदिर, वाराणसी के विरासत रजत शिल्पकारों द्वारा डिज़ाइन किया गया।" },

  "gemsPage.untreated": { en: "Untreated Stone", hi: "अनुपचारित रत्न" },
  "gemsPage.hero.kicker": { en: "Vault V · Certified Authenticity", hi: "वॉल्ट V · प्रमाणित प्रामाणिकता" },
  "gemsPage.hero.p1": { en: "When asked about their source of inspiration, a majority of jewellers often find it in gemstones. Gemstones, most commonly associated with astrology, also find their way into fine jewellery, giving rise to bespoke designs that shine in all glory.", hi: "प्रेरणा के स्रोत के बारे में पूछे जाने पर, अधिकांश जौहरी अक्सर इसे रत्नों में पाते हैं। ज्योतिष से सबसे अधिक जुड़े रत्न, उत्कृष्ट आभूषणों में भी अपनी जगह बनाते हैं, जिससे विशेष डिज़ाइन बनते हैं जो पूरी शान से चमकते हैं।" },
  "gemsPage.hero.p2": { en: "Our gemstone collection is bent on offering the finest, purest, and rarest range, carrying a certificate of authenticity. Our industry-trained professionals treat every gemstone uniquely, pertaining to its specific composition, to retain its natural lustre and glow.", hi: "हमारा रत्न संग्रह सर्वश्रेष्ठ, शुद्धतम, और दुर्लभतम श्रृंखला प्रदान करने पर केंद्रित है, जो प्रामाणिकता के प्रमाणपत्र के साथ आता है। हमारे प्रशिक्षित विशेषज्ञ हर रत्न को उसकी विशिष्ट संरचना के अनुसार विशिष्ट रूप से संभालते हैं, ताकि उसकी प्राकृतिक चमक और आभा बनी रहे।" },
  "gemsPage.hero.frameTag": { en: "IGI CERTIFIED GEMS", hi: "आईजीआई प्रमाणित रत्न" },
  "gemsPage.craft.kicker": { en: "Astrological Goldsmithing", hi: "ज्योतिषीय स्वर्णकारी" },
  "gemsPage.craft.title": { en: "Planetary Energy Settings", hi: "ग्रह ऊर्जा जड़ाव" },
  "gemsPage.craft.p1": { en: "Custom ring and pendant settings that allow gemstones to touch the skin.", hi: "कस्टम अंगूठी और पेंडेंट जड़ाव जो रत्न को त्वचा से स्पर्श करने देते हैं।" },
  "gemsPage.craft.p2": { en: "Astrological gemstones require precise mount settings where the pavilion of the stone is exposed to touch the wearer's skin. At Trueso, our craftsmen design custom rings and pendants in gold and silver that fulfill Vedic parameters while displaying elegant filigree borders and modern-traditional styling.", hi: "ज्योतिषीय रत्नों के लिए सटीक माउंट जड़ाव आवश्यक होता है जहां पत्थर का निचला भाग पहनने वाले की त्वचा को स्पर्श करे। ट्रूसो में, हमारे कारीगर सोने और चांदी में कस्टम अंगूठियां और पेंडेंट डिज़ाइन करते हैं जो वैदिक मानकों को पूरा करते हुए सुरुचिपूर्ण फिलिग्री बॉर्डर और आधुनिक-पारंपरिक शैली प्रदर्शित करते हैं।" },
  "gemsPage.craft.frameTag": { en: "VEDIC CUSTOMIZATION", hi: "वैदिक अनुकूलन" },
  "gemsPage.catalog.title": { en: "Signature Natural Stones", hi: "विशिष्ट प्राकृतिक रत्न" },
  "gemsPage.catalog.desc": { en: "Browse our certified natural gemstone settings and custom astronomical rings. Click to inquire with our showroom team.", hi: "हमारे प्रमाणित प्राकृतिक रत्न जड़ाव और कस्टम ज्योतिषीय अंगूठियां देखें। हमारी शोरूम टीम से पूछताछ के लिए क्लिक करें।" },
  "gemsPage.p1.title": { en: "Astrological Pukhraj Ring", hi: "ज्योतिषीय पुखराज अंगूठी" },
  "gemsPage.p1.desc": { en: "Natural certified Yellow Sapphire (Pukhraj) set in a custom-designed 22 Karat gold astrological ring frame.", hi: "प्राकृतिक प्रमाणित पीला पुखराज, कस्टम-डिज़ाइन किए गए 22 कैरेट सोने के ज्योतिषीय अंगूठी फ्रेम में जड़ा हुआ।" },
  "gemsPage.p2.title": { en: "Certified Rashi Neelam", hi: "प्रमाणित राशि नीलम" },
  "gemsPage.p2.desc": { en: "Intensely saturated Blue Sapphire (Neelam) featuring pure facet cut, graded and certified by IGI.", hi: "गहरा नीला नीलम, शुद्ध फलक कट के साथ, आईजीआई द्वारा श्रेणीबद्ध और प्रमाणित।" },
  "gemsPage.p3.title": { en: "Bespoke Gemstone Pendant", hi: "विशेष रत्न पेंडेंट" },
  "gemsPage.p3.desc": { en: "A beautiful deep green Emerald (Panna) pendant with micro-diamond accents, astrological certified.", hi: "सुंदर गहरे हरे पन्ना का पेंडेंट, माइक्रो-डायमंड की झलक के साथ, ज्योतिषीय रूप से प्रमाणित।" },

  "goldRatePage.breadcrumb": { en: "Gold Rate", hi: "सोने का भाव" },
  "goldRatePage.kicker": { en: "Assay Office Indicators", hi: "परख कार्यालय संकेतक" },
  "goldRatePage.title": { en: "Today's Gold Rate (Varanasi)", hi: "आज का सोने का भाव (वाराणसी)" },
  "goldRatePage.desc": { en: "Daily gold pricing indices, wired directly to the Varanasi local jewellery market indicators. Purity and weights certified under BIS regulations.", hi: "दैनिक सोने की कीमत सूचकांक, सीधे वाराणसी के स्थानीय आभूषण बाजार संकेतकों से जुड़े हुए। शुद्धता और वजन बीआईएस नियमों के तहत प्रमाणित।" },
  "goldRatePage.boardTitle": { en: "Varanasi Spot Rate Board", hi: "वाराणसी स्पॉट रेट बोर्ड" },
  "goldRatePage.purity916": { en: "BIS 916 PURITY", hi: "बीआईएस 916 शुद्धता" },
  "goldRatePage.card22kTitle": { en: "Today's 22 Kt Gold", hi: "आज का 22 कैरेट सोना" },
  "goldRatePage.per10g": { en: "Per 10 Grams (10g)", hi: "प्रति 10 ग्राम (10g)" },
  "goldRatePage.purity750": { en: "BIS 750 PURITY", hi: "बीआईएस 750 शुद्धता" },
  "goldRatePage.card18kTitle": { en: "Today's 18 Kt Gold", hi: "आज का 18 कैरेट सोना" },
  "goldRatePage.calcTitle": { en: "Interactive Gold Weight Calculator", hi: "इंटरैक्टिव सोना वजन कैलकुलेटर" },
  "goldRatePage.calcLabel": { en: "Enter Gold Weight (Grams)", hi: "सोने का वजन दर्ज करें (ग्राम)" },
  "goldRatePage.calc22k": { en: "Estimated 22K Gold Value", hi: "अनुमानित 22K सोने का मूल्य" },
  "goldRatePage.calc18k": { en: "Estimated 18K Gold Value", hi: "अनुमानित 18K सोने का मूल्य" },
  "goldRatePage.disclaimer": { en: "<strong>Please Note:</strong> The rates shown above are indicative prices for plain, unworked gold only, sourced directly from our official rate board and refreshed automatically as it updates — not a second-by-second exchange feed. Jewellery purchased in-store is priced separately based on its design, weight, purity, craftsmanship, and applicable taxes, and will differ from the plain gold rate shown here. Please call or visit our Sigra or Godowlia showroom for the exact, confirmed price of any piece.", hi: "<strong>कृपया ध्यान दें:</strong> ऊपर दिखाए गए भाव केवल सादे, अनगढ़े सोने के लिए संकेतात्मक मूल्य हैं, जो सीधे हमारे आधिकारिक भाव बोर्ड से प्राप्त हैं और अपडेट होते ही स्वतः बदल जाते हैं — न कि पल-पल बदलने वाली लाइव एक्सचेंज फीड। स्टोर में खरीदी गई ज्वेलरी की कीमत उसके डिज़ाइन, वजन, शुद्धता, कारीगरी, और लागू करों के आधार पर अलग से तय होती है, और यहां दिखाए गए सादे सोने के भाव से भिन्न होगी। किसी भी वस्तु के सटीक, पुष्ट मूल्य हेतु कृपया हमारे सिगरा या गोदौलिया शोरूम पर कॉल करें या पधारें।" },
  "goldRatePage.termsTitle": { en: "Terms & Conditions", hi: "नियम व शर्तें" },
  "goldRatePage.term1": { en: "Rates displayed above are for <strong>raw gold only</strong>, as per prevailing local bullion market indicators.", hi: "ऊपर दिखाए गए भाव प्रचलित स्थानीय बुलियन बाजार संकेतकों के अनुसार <strong>केवल कच्चे सोने</strong> के लिए हैं।" },
  "goldRatePage.term2": { en: "Prices for <strong>custom-made and readymade jewellery may vary</strong> based on design, weight, purity, and craftsmanship — they will differ from the raw gold rate shown here.", hi: "<strong>कस्टम-निर्मित और तैयार आभूषणों की कीमतें भिन्न हो सकती हैं</strong>, डिज़ाइन, वजन, शुद्धता, और कारीगरी के आधार पर — वे यहां दिखाए गए कच्चे सोने के भाव से अलग होंगी।" },
  "goldRatePage.term3": { en: "Rates are updated periodically for reference and may not reflect real-time fluctuations; the applicable rate for any purchase is the one confirmed in-store at time of billing.", hi: "भाव संदर्भ हेतु समय-समय पर अपडेट किए जाते हैं और वास्तविक समय के उतार-चढ़ाव को नहीं दर्शा सकते; किसी भी खरीद के लिए लागू भाव वही है जो बिलिंग के समय स्टोर में पुष्ट किया जाता है।" },
  "goldRatePage.term4": { en: "Trueso reserves the right to revise rates without prior notice. This page does not constitute a price guarantee or offer for sale.", hi: "ट्रूसो बिना पूर्व सूचना के भाव संशोधित करने का अधिकार सुरक्षित रखता है। यह पेज मूल्य गारंटी या बिक्री हेतु प्रस्ताव नहीं है।" },
  "goldRatePage.rateConfirmation": { en: "Rate Confirmation", hi: "भाव पुष्टि" },
  "goldRatePage.callDesk": { en: "Call Our Desk", hi: "हमारे डेस्क पर कॉल करें" },
  "goldRatePage.callDesc": { en: "Discuss spot rate blocks or confirm gold reserves directly over the phone.", hi: "स्पॉट रेट ब्लॉक पर चर्चा करें या सीधे फोन पर सोने के भंडार की पुष्टि करें।" },
  "goldRatePage.callBtn": { en: "Call 0542 222 1011", hi: "कॉल करें 0542 222 1011" },
  "goldRatePage.purityVerifications": { en: "Purity Verifications", hi: "शुद्धता सत्यापन" },
  "goldRatePage.whatsappInquiry": { en: "WhatsApp Inquiry", hi: "व्हाट्सएप पूछताछ" },
  "goldRatePage.whatsappDesc": { en: "Request a complimentary gold purity verification check-up voucher on WhatsApp.", hi: "व्हाट्सएप पर मुफ्त सोने की शुद्धता सत्यापन जांच वाउचर का अनुरोध करें।" },
  "goldRatePage.whatsappBtn": { en: "WhatsApp Us", hi: "हमें व्हाट्सएप करें" },
  "goldRatePage.showroomLocations": { en: "Showroom Locations", hi: "शोरूम स्थान" },
  "goldRatePage.confirmInStore": { en: "Confirm Rates In-Store", hi: "स्टोर में भाव की पुष्टि करें" },

  "pressPage.breadcrumb": { en: "Press Archives", hi: "प्रेस अभिलेखागार" },
  "pressPage.kicker": { en: "Trueso chronicles", hi: "ट्रूसो इतिहास" },
  "pressPage.title": { en: "Media & Press Archives", hi: "मीडिया व प्रेस अभिलेखागार" },
  "pressPage.desc": { en: "An archival showcase of Kanhaiya Lal Saraf Jewellers' (Trueso) official advertising campaigns, print promotions, and public announcements designed across our legacy.", hi: "कन्हैया लाल सर्राफ ज्वेलर्स (ट्रूसो) के आधिकारिक विज्ञापन अभियानों, प्रिंट प्रचार, और सार्वजनिक घोषणाओं का एक अभिलेखीय प्रदर्शन, जो हमारी विरासत में तैयार किया गया।" },
  "pressPage.visitShowrooms": { en: "Visit Showrooms", hi: "शोरूम पधारें" },
  "pressPage.experienceTitle": { en: "Experience Ornaments in Person", hi: "आभूषणों को स्वयं अनुभव करें" },
  "pressPage.experienceDesc": { en: "Schedule a private showroom viewing with our relationship managers at Sigra or Godowlia.", hi: "सिगरा या गोदौलिया में हमारे रिलेशनशिप मैनेजरों के साथ निजी शोरूम दर्शन निर्धारित करें।" },
  "pressPage.reserveBtn": { en: "Reserve a Private Viewing", hi: "निजी दर्शन आरक्षित करें" },
  "pressPage.close": { en: "Close", hi: "बंद करें" },

  "contactPage.kicker": { en: "Varanasi Directory", hi: "वाराणसी निर्देशिका" },
  "contactPage.title": { en: "Get in Touch", hi: "संपर्क करें" },
  "contactPage.desc": { en: "Whether seeking custom nakashi design consultations or daily bullion valuations, our showroom staff stands ready to assist you.", hi: "चाहे कस्टम नक्काशी डिज़ाइन परामर्श चाहिए हो या दैनिक बुलियन मूल्यांकन, हमारा शोरूम स्टाफ आपकी सहायता के लिए तैयार है।" },
  "contactPage.sigraLabel": { en: "Sigra:", hi: "सिगरा:" },
  "contactPage.godowliaLabel": { en: "Godowlia:", hi: "गोदौलिया:" },
  "contactPage.whatsappLabel": { en: "WhatsApp:", hi: "व्हाट्सएप:" },
  "contactPage.emailLabel": { en: "Email:", hi: "ईमेल:" },
  "contactPage.formKicker": { en: "Inquiry Form", hi: "पूछताछ फॉर्म" },
  "contactPage.formTitle": { en: "Send a Message", hi: "संदेश भेजें" },
  "contactPage.nameLabel": { en: "Customer Name", hi: "ग्राहक का नाम" },
  "contactPage.phoneLabel": { en: "Contact Number", hi: "संपर्क नंबर" },
  "contactPage.messageLabel": { en: "Inquiry Details", hi: "पूछताछ विवरण" },
  "contactPage.submitBtn": { en: "Seal & Submit", hi: "मुहर लगाएं व भेजें" },
  "contactPage.successTitle": { en: "Message Logged", hi: "संदेश दर्ज किया गया" },
  "contactPage.successDesc": { en: "Your message has been sealed and logged in our Varanasi showroom registry. An officer will get back to you shortly.", hi: "आपका संदेश हमारे वाराणसी शोरूम रजिस्ट्री में मुहरबंद और दर्ज कर लिया गया है। एक अधिकारी शीघ्र ही आपसे संपर्क करेगा।" },
  "contactPage.anotherInquiry": { en: "Submit Another Inquiry", hi: "एक और पूछताछ भेजें" },
  "contactPage.flagship": { en: "Flagship Showroom", hi: "प्रमुख शोरूम" },
  "contactPage.heritage": { en: "Heritage Showroom", hi: "विरासत शोरूम" },
  "contactPage.sigraAddr": { en: "Shakti Shikha Apartment, 1st Floor, Sigra Road, Opposite Saheed Udyan, Varanasi, UP 221001", hi: "शक्ति शिखा अपार्टमेंट, प्रथम तल, सिगरा रोड, शहीद उद्यान के सामने, वाराणसी, यूपी 221001" },
  "contactPage.sigraHours": { en: "OPEN DAILY: 10:00 AM – 8:00 PM  ·  TEL: 0542 222 1011", hi: "प्रतिदिन खुला: सुबह 10:00 – रात 8:00  ·  टेल: 0542 222 1011" },
  "contactPage.godowliaAddr": { en: "D 37/47, 47A, 47A-1, Below Hotel Ganges Grand, Godowlia Crossing, Varanasi, UP 221001", hi: "डी 37/47, 47ए, 47ए-1, होटल गंगेज़ ग्रैंड के नीचे, गोदौलिया चौराहा, वाराणसी, यूपी 221001" },
  "contactPage.godowliaHours": { en: "OPEN DAILY: 10:00 AM – 8:00 PM  ·  TEL: 0542 239 1010", hi: "प्रतिदिन खुला: सुबह 10:00 – रात 8:00  ·  टेल: 0542 239 1010" },
  "contactPage.getDirections": { en: "Get Directions via Google Maps", hi: "गूगल मैप्स से दिशा प्राप्त करें" },

  "galleryPage.kicker": { en: "Take A Tour", hi: "एक झलक देखें" },
  "galleryPage.title": { en: "Store Images", hi: "स्टोर छवियां" },
  "galleryPage.desc": { en: "A closer look inside our Varanasi showrooms — where century-old craftsmanship meets a modern, hallmarked shopping experience.", hi: "हमारे वाराणसी शोरूम के भीतर की एक करीबी झलक — जहां सदी पुरानी कारीगरी आधुनिक, हॉलमार्क खरीदारी अनुभव से मिलती है।" }
};

const LANG_STORAGE_KEY = "trueso-lang";

function getStoredLang() {
  try {
    return window.localStorage.getItem(LANG_STORAGE_KEY) === "hi" ? "hi" : "en";
  } catch (e) {
    return "en";
  }
}

function setStoredLang(lang) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    // Storage unavailable (private browsing, etc.) — toggle still works
    // for the current page load, it just won't persist across pages.
  }
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = I18N[el.getAttribute("data-i18n")];
    // innerHTML (not textContent) so entries that carry inline markup —
    // e.g. a <strong> emphasis inside a translated sentence — survive the swap.
    if (entry && entry[lang]) el.innerHTML = entry[lang];
  });
}

function initTranslateToggle() {
  const btn = document.getElementById("lang-toggle-btn");
  const label = document.getElementById("lang-toggle-label");

  const lang = getStoredLang();
  applyTranslations(lang);

  if (!btn || !label) return;

  const syncButton = (currentLang) => {
    label.textContent = currentLang === "hi" ? "English" : "हिन्दी";
    btn.setAttribute("aria-label", currentLang === "hi" ? "Switch back to English" : "Translate this page to Hindi");
  };
  syncButton(lang);

  btn.addEventListener("click", () => {
    const nextLang = getStoredLang() === "hi" ? "en" : "hi";
    setStoredLang(nextLang);
    applyTranslations(nextLang);
    syncButton(nextLang);
  });
}
