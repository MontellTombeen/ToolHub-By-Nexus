const products = [
  // ===== WINCHES, OUTDOOR & 4x4 =====
  { id: 101, name: "12V Winch EWK 8000U (1.6kW – 3620kg)", category: "winches", description: "12V electric winch • 1.6kW motor • 3620kg pulling capacity. Ideal for 4x4 recovery.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 102, name: "12V Winch EWG 8000U (2.7kW – 3620kg)", category: "winches", description: "Higher power 2.7kW motor • 3620kg capacity • Reliable recovery winch.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 103, name: "12V Winch EWX 10000U (4.3kW – 4536kg)", category: "winches", description: "Heavy-duty 4.3kW • 4536kg capacity • Suitable for larger 4x4s and light trucks.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 104, name: "12V Winch EWX 12000U (4.5kW – 5440kg)", category: "winches", description: "4.5kW motor • 5440kg rated pull • Serious recovery capability.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 105, name: "12V Winch EWP 12000U 2-Speed (5.4kW – 5443kg)", category: "winches", description: "2-speed gearbox • 5.4kW • 5443kg capacity. Premium recovery winch.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 106, name: "Hydraulic Winch HWN 15000YD (6804kg)", category: "winches", description: "Hydraulic winch • 6804kg capacity • High duty cycle for continuous use.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 107, name: "Mac Afric Synthetic Winch Line 12mm x 28m (13734kg)", category: "winches", description: "Lightweight synthetic rope kit • 12mm × 28m • 13734kg breaking strength.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 108, name: "High Lift Jack 1.52m (60 inch) 3000kg", category: "winches", description: "60-inch high lift jack • 3000kg capacity • Essential 4x4 recovery tool.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 109, name: "12V Air Compressor 90A / 300 L/min", category: "winches", description: "High-flow 12V compressor • 300 litres per minute • Fast tyre inflation.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ===== LIFTING & MATERIAL HANDLING =====
  { id: 201, name: "Electric Hoist PA1000 – 1000kg / 5.5m (230V)", category: "lifting", description: "1000kg capacity • 5.5m lift height • 230V single phase electric hoist.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 202, name: "Electric Chain Hoist 1.5 Ton × 6m (380V)", category: "lifting", description: "Double chain • 1.5 ton • 6m lift • 380V three-phase.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 203, name: "Chain Block 1.5 Ton × 3m Lift", category: "lifting", description: "Manual chain block • 1.5 ton capacity • 3 metre lift height.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 204, name: "Lever Block 1.5 Ton × 1.5m", category: "lifting", description: "Compact lever hoist • 1.5 ton • 1.5m lift. Ideal for positioning.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 205, name: "Manual Hydraulic Pallet Truck 2.5 Ton", category: "lifting", description: "2.5 ton capacity pallet jack • Standard forks • Smooth rolling.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 206, name: "1.5 Ton Mobile Gantry Crane (2.4–3.6m)", category: "lifting", description: "Adjustable height mobile gantry • 1.5 ton capacity • Easy to move.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ===== BATTERY CHARGERS & AUTOMOTIVE =====
  { id: 301, name: "Intelligent Battery Charger 15 Amp (12V)", category: "automotive", description: "Smart 15A charger • 12V • Multi-stage charging with protection.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 302, name: "Professional 12V/24V Lithium Jump Starter 45000mAh", category: "automotive", description: "High capacity lithium jump starter • 12V & 24V compatible • Portable.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 303, name: "Mac Afric Jump Starter 800A Peak / 400A Start", category: "automotive", description: "Powerful jump starter • 800A peak current • Reliable cold starts.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 304, name: "Battery Tester & Analyser (100–2000 CCA)", category: "automotive", description: "Tests battery health, CCA and charging system. Wide range.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ===== GARAGE EQUIPMENT =====
  { id: 401, name: "Long Reach Trolley Jack 5000 (4 Ton)", category: "garage", description: "4-ton long reach trolley jack • Ideal for bakkies and light commercials.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 402, name: "Long Reach Trolley Jack 10000 (8 Ton)", category: "garage", description: "Heavy-duty 8-ton long reach jack • Suitable for larger vehicles.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 403, name: "Bottle Jack 20 Ton", category: "garage", description: "Compact 20-ton bottle jack • High capacity in small footprint.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 404, name: "Ratchet Jack Stands 6 Ton (Pair)", category: "garage", description: "6-ton rated jack stands • Sold per pair • Secure vehicle support.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 405, name: "4 Ton 2-Post Electric/Hydraulic Lift", category: "garage", description: "4-ton two-post vehicle lift • Electric/hydraulic • Auto or manual release options.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 406, name: "Engine Crane Foldable with 6 Wheels", category: "garage", description: "Foldable engine crane • 6 wheels for easy movement • Workshop essential.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 407, name: "20-Ton Workshop Press with Gauge", category: "garage", description: "20-ton hydraulic workshop press • Pressure gauge included.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 408, name: "Pneumatic Tyre Changer Model LT 950A", category: "garage", description: "Professional tyre changer with helping arm • Suitable for busy workshops.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ===== GENERATORS & WATER PUMPS =====
  { id: 501, name: "Petrol Standby Generator 6.5kVA / 5kW", category: "generators", description: "6.5kVA petrol generator • Electric & recoil start options available.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 502, name: "Diesel Standby Generator 20kVA Silent with ATS", category: "generators", description: "20kVA silent diesel generator • Automatic Transfer Switch (ATS) included.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 503, name: "Inverter Generator 3.2kW", category: "generators", description: "Clean power inverter generator • 3.2kW • Suitable for sensitive electronics.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 504, name: "Petrol Water Pump 3 Inch (75mm)", category: "generators", description: "3-inch petrol water pump • High flow for irrigation and dewatering.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 505, name: "Diesel Water Pump 4 Inch (100mm)", category: "generators", description: "4-inch diesel water pump • Electric & recoil start • Heavy-duty performance.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ===== POWER TOOLS (existing + Kinway / Mac Afric) =====
  { id: 601, name: "Makita 18V Brushless Drill Driver", category: "power", description: "Brushless motor • High torque • Professional cordless drill.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 602, name: "Kinway 20V Brushless Impact Wrench 1000Nm", category: "power", description: "20V brushless • 1000Nm torque • Tool only. High-power impact wrench.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 603, name: "Mac Afric Angle Grinder 2200W 230mm", category: "power", description: "2200W • 230mm disc • Heavy-duty angle grinder for demanding work.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },
  { id: 604, name: "Mac Afric 20V Cordless Drill Combo Kit", category: "power", description: "18V/20V cordless drill kit • Includes 2 × 4.0Ah batteries and charger.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },

  // ===== STORAGE & TOOL CABINETS =====
  { id: 701, name: "7-Drawer Professional Tool Cabinet", category: "storage", description: "Heavy-duty 7-drawer tool cabinet • Smooth ball-bearing slides • Multiple colour options.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 702, name: "Mac Afric 207-Piece Tool Cabinet (7 Drawer)", category: "storage", description: "Complete 207-piece tool set in heavy-duty 7-drawer cabinet.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 703, name: "Jobsite Toolbox 48 Inch", category: "storage", description: "Large 48-inch jobsite toolbox • Durable construction for site use.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },

  // ===== HAND TOOLS =====
  { id: 801, name: "Torque Wrench 1/2\" Drive 40–210Nm", category: "manual", description: "1/2 inch drive torque wrench • 40–210Nm range • Click-type.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 802, name: "172-Piece Professional Socket Set", category: "manual", description: "1/4, 3/8 & 1/2 inch drives • Comprehensive professional socket set.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 803, name: "Metric Combination Spanner Set 19-Piece CR-V", category: "manual", description: "Chrome vanadium • 19-piece metric combination spanner set.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" }
];

// ===== REST OF THE CODE (same as before, with fixed email) =====
const whatsappNumber = "27642448154";
const emailAddress = "nexusequipmentgroup@gmail.com";

let selectedItems = [];

function renderProducts(filter = "all", search = "") {
  const container = document.getElementById("products");
  let list = filter === "all" ? products : products.filter(p => p.category === filter);
  
  if (search.trim()) {
    const q = search.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:40px 0;">No matching equipment found.</p>`;
    return;
  }

  container.innerHTML = list.map(p => {
    const isAdded = selectedItems.some(item => item.id === p.id);
    return `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="add-btn ${isAdded ? 'added' : ''}" data-id="${p.id}">
          ${isAdded ? '✓ Added to Quote' : 'Add to Quote'}
        </button>
      </div>
    </article>
  `}).join("");

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      toggleItem(id);
    });
  });
}

function toggleItem(id) {
  const product = products.find(p => p.id === id);
  const index = selectedItems.findIndex(item => item.id === id);

  if (index > -1) {
    selectedItems.splice(index, 1);
  } else {
    selectedItems.push(product);
  }

  updateQuoteBar();
  const activeCat = document.querySelector(".cat-btn.active")?.dataset.category || "all";
  const search = document.getElementById("searchInput").value;
  renderProducts(activeCat, search);
}

function updateQuoteBar() {
  const bar = document.getElementById("quoteBar");
  const count = document.getElementById("itemCount");
  count.textContent = selectedItems.length;

  if (selectedItems.length > 0) {
    bar.classList.add("show");
  } else {
    bar.classList.remove("show");
  }
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const search = document.getElementById("searchInput").value;
    renderProducts(btn.dataset.category, search);
  });
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const active = document.querySelector(".cat-btn.active");
  const cat = active ? active.dataset.category : "all";
  renderProducts(cat, e.target.value);
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("open");
});

document.getElementById("openQuoteModal").addEventListener("click", () => {
  const listEl = document.getElementById("selectedList");
  const customText = document.getElementById("customDetails")?.value.trim() || "";

  let html = "<strong>Selected Equipment:</strong><ul>";
  selectedItems.forEach(item => {
    html += `<li>${item.name}</li>`;
  });
  html += "</ul>";

  if (customText) {
    html += `<p style="margin-top:12px"><strong>Additional requirements:</strong><br>${customText}</p>`;
  }

  listEl.innerHTML = html;
  document.getElementById("quoteModal").classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("quoteModal").classList.remove("open");
});

function buildMessage() {
  const name = document.getElementById("qName").value.trim();
  const company = document.getElementById("qCompany").value.trim();
  const phone = document.getElementById("qPhone").value.trim();
  const email = document.getElementById("qEmail").value.trim();
  const location = document.getElementById("qLocation").value.trim();
  const custom = document.getElementById("customDetails")?.value.trim() || "";

  let message = `NEW QUOTATION REQUEST - ToolHub\n\n`;
  message += `Name: ${name}\n`;
  if (company) message += `Company: ${company}\n`;
  message += `Phone: ${phone}\n`;
  if (email) message += `Email: ${email}\n`;
  if (location) message += `Delivery Location: ${location}\n\n`;

  message += `EQUIPMENT REQUIRED:\n`;
  selectedItems.forEach((item, i) => {
    message += `${i + 1}. ${item.name}\n`;
  });

  if (custom) {
    message += `\nAdditional requirements:\n${custom}\n`;
  }

  message += `\nPlease provide a quotation. Thank you.`;
  return message;
}

function validateForm() {
  const name = document.getElementById("qName").value.trim();
  const phone = document.getElementById("qPhone").value.trim();
  if (!name || !phone) {
    alert("Please fill in your Name and Phone number.");
    return false;
  }
  if (selectedItems.length === 0 && !(document.getElementById("customDetails")?.value.trim())) {
    alert("Please add at least one item or describe what you need.");
    return false;
  }
  return true;
}

document.getElementById("sendWhatsApp").addEventListener("click", () => {
  if (!validateForm()) return;
  const message = buildMessage();
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// FIXED EMAIL – opens email app with message ready to send
document.getElementById("sendEmail").addEventListener("click", () => {
  if (!validateForm()) return;
  const message = buildMessage();
  const subject = "New Quotation Request – ToolHub";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
});

renderProducts();
