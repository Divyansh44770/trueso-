// js/gold-rate.js
//
// Reads data/gold-rate.json — kept in sync by the update-gold-rate
// GitHub Action (scripts/fetch-gold-rate.mjs), which polls trueso.in's
// own live rate page every 30 minutes and only commits when the posted
// rate actually changes. This file itself never invents numbers or
// fakes movement.

document.addEventListener("DOMContentLoaded", () => {
  initGoldRateDashboard();
});

async function initGoldRateDashboard() {
  const rate22K = document.getElementById("rate-22k");
  const rate18K = document.getElementById("rate-18k");
  const updateTimeText = document.getElementById("rate-update-time");

  const calcWeightInput = document.getElementById("calc-weight");
  const calcPrice22K = document.getElementById("calc-price-22k");
  const calcPrice18K = document.getElementById("calc-price-18k");

  if (!rate22K || !rate18K || !updateTimeText) return;

  const base = window.basePath || "./";
  let data;
  try {
    const res = await fetch(`${base}data/gold-rate.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
    if (!Number.isFinite(data.rate22k) || !Number.isFinite(data.rate18k)) {
      throw new Error("Malformed rate data");
    }
  } catch (err) {
    const isHindi = (typeof getStoredLang === "function" ? getStoredLang() : "en") === "hi";
    rate22K.innerText = "—";
    rate18K.innerText = "—";
    updateTimeText.innerText = isHindi
      ? "भाव अभी उपलब्ध नहीं — कृपया हमारे शोरूम से संपर्क करें।"
      : "Rates temporarily unavailable — please call our showroom.";
    return;
  }

  const base22K = data.rate22k;
  const base18K = data.rate18k;

  const updateCalculatorValues = () => {
    if (!calcWeightInput || !calcPrice22K || !calcPrice18K) return;
    const weight = parseFloat(calcWeightInput.value) || 0;
    const total22K = (base22K / 10) * weight;
    const total18K = (base18K / 10) * weight;

    calcPrice22K.innerText = `₹${Math.round(total22K).toLocaleString("en-IN")}`;
    calcPrice18K.innerText = `₹${Math.round(total18K).toLocaleString("en-IN")}`;
  };

  rate22K.innerText = `₹${base22K.toLocaleString("en-IN")}`;
  rate18K.innerText = `₹${base18K.toLocaleString("en-IN")}`;
  updateCalculatorValues();

  if (calcWeightInput) {
    calcWeightInput.addEventListener("input", updateCalculatorValues);
  }

  renderTimestamp(updateTimeText, data.sourceUpdated, data.fetchedAt);
}

function renderTimestamp(el, sourceUpdated, isoString) {
  const isHindi = (typeof getStoredLang === "function" ? getStoredLang() : "en") === "hi";
  const label = isHindi ? "अंतिम अपडेट" : "Last Updated";

  // Prefer trueso.in's own posted timestamp — it's what actually
  // changed, vs. our scrape time which just says when we last checked.
  if (sourceUpdated) {
    el.innerText = `${label}: ${sourceUpdated}`;
    return;
  }

  if (!isoString) {
    el.innerText = `${label}: —`;
    return;
  }

  const date = new Date(isoString);
  const dateStr = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  });
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  });
  el.innerText = `${label}: ${dateStr} ${isHindi ? "को" : "at"} ${timeStr} IST`;
}
