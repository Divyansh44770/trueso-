// scripts/fetch-gold-rate.mjs
//
// Pulls today's 22Kt/18Kt rate straight from trueso.in's own live gold
// rate page and writes it to data/gold-rate.json. Run on a short
// schedule by .github/workflows/update-gold-rate.yml, which only
// commits when the value actually changed — so the site picks up a
// real update from trueso.in shortly after it happens, not on a fixed
// once-a-day clock.

const SOURCE_URL = "https://trueso.in/gold-rate-varanasi/";

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; TruesoRateBot/1.0)" }
  });
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();

  const rate22k = extractRate(html, "22 Kt");
  const rate18k = extractRate(html, "18 Kt");
  const sourceUpdated = extractTimestamp(html);

  if (!rate22k || !rate18k) {
    throw new Error("Could not parse both 22Kt and 18Kt rates from trueso.in — page structure may have changed.");
  }

  const data = {
    rate22k,
    rate18k,
    source: "trueso.in/gold-rate-varanasi",
    sourceUpdated: sourceUpdated || null,
    fetchedAt: new Date().toISOString()
  };

  const fs = await import("node:fs/promises");
  await fs.mkdir("data", { recursive: true });
  await fs.writeFile("data/gold-rate.json", JSON.stringify(data, null, 2) + "\n");

  console.log("Wrote data/gold-rate.json:", data);
}

function extractRate(html, label) {
  // Matches: <div class="rate-heading">Today's 22 Kt Gold Rate</div> ... <div class="rate-heading">₹ 140150 / 10gm</div>
  const re = new RegExp(
    `Today's ${label} Gold Rate[\\s\\S]{0,120}?₹\\s*([\\d,]+)\\s*/\\s*10gm`,
    "i"
  );
  const match = html.match(re);
  if (!match) return null;
  const num = parseInt(match[1].replace(/,/g, ""), 10);
  return Number.isFinite(num) ? num : null;
}

function extractTimestamp(html) {
  // Matches: Last Updated : 14-08-2026 at  10:35 AM
  const match = html.match(/Last Updated\s*:\s*([\d-]+\s*at\s*[\d: ]+[AP]M)/i);
  return match ? match[1].replace(/\s+/g, " ").trim() : null;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
