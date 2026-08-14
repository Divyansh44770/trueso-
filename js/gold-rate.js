// js/gold-rate.js

document.addEventListener("DOMContentLoaded", () => {
  initGoldRateDashboard();
});

function initGoldRateDashboard() {
  const rate22K = document.getElementById("rate-22k");
  const rate18K = document.getElementById("rate-18k");
  const updateTimeText = document.getElementById("rate-update-time");
  
  const calcWeightInput = document.getElementById("calc-weight");
  const calcPrice22K = document.getElementById("calc-price-22k");
  const calcPrice18K = document.getElementById("calc-price-18k");

  if (!rate22K || !rate18K || !updateTimeText) return;

  // Base rates snapshot (simulating live daily values for 10g)
  let base22K = 141950;
  let base18K = 116150;

  // Set initial update date/time to today at 10:00 AM
  const setTimestamp = (nowDate) => {
    const today = nowDate || new Date();
    const dateStr = today.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    
    // Format: DD-MM-YYYY at 10:00 AM
    updateTimeText.innerText = `Last Updated: ${dateStr} at 10:00 AM`;
  };

  setTimestamp();

  // Helper to calculate and render the inputs
  const updateCalculatorValues = () => {
    if (!calcWeightInput || !calcPrice22K || !calcPrice18K) return;
    const weight = parseFloat(calcWeightInput.value) || 0;
    const total22K = (base22K / 10) * weight;
    const total18K = (base18K / 10) * weight;
    
    calcPrice22K.innerText = `₹${Math.round(total22K).toLocaleString("en-IN")}`;
    calcPrice18K.innerText = `₹${Math.round(total18K).toLocaleString("en-IN")}`;
  };

  // Initial rates render
  rate22K.innerText = `₹${base22K.toLocaleString("en-IN")}`;
  rate18K.innerText = `₹${base18K.toLocaleString("en-IN")}`;
  updateCalculatorValues();

  // Handle calculator input
  if (calcWeightInput) {
    calcWeightInput.addEventListener("input", updateCalculatorValues);
  }

  // Simulate subtle real-time updates every 12 seconds to demonstrate the front-end digit update flicker
  setInterval(() => {
    // Random fluctuation: +/- ₹50
    const change22K = (Math.random() > 0.5 ? 1 : -1) * 50;
    const change18K = (Math.random() > 0.5 ? 1 : -1) * 50;

    base22K += change22K;
    base18K += change18K;

    // Apply flicker animations
    triggerFlicker(rate22K, `₹${base22K.toLocaleString("en-IN")}`);
    triggerFlicker(rate18K, `₹${base18K.toLocaleString("en-IN")}`);
    
    // Also update calculator values with subtle flicker animation
    if (calcPrice22K && calcPrice18K && calcWeightInput) {
      const weight = parseFloat(calcWeightInput.value) || 0;
      const total22K = (base22K / 10) * weight;
      const total18K = (base18K / 10) * weight;
      triggerFlicker(calcPrice22K, `₹${Math.round(total22K).toLocaleString("en-IN")}`);
      triggerFlicker(calcPrice18K, `₹${Math.round(total18K).toLocaleString("en-IN")}`);
    }

    // Update timestamp to current time on fluctuations
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    const dateStr = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    updateTimeText.innerText = `Last Updated: ${dateStr} at ${timeStr}`;
  }, 12000);
}

function triggerFlicker(element, newText) {
  element.classList.add("rate-flicker");
  
  // Mid-way through transition, swap text
  setTimeout(() => {
    element.innerText = newText;
  }, 150);

  // Clean up class
  setTimeout(() => {
    element.classList.remove("rate-flicker");
  }, 300);
}
