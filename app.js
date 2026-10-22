const products = [
  // ==================== WINCHES & 4x4 ====================
  { id: 101, name: "12V Winch EWK 8000U (1.6kW – 3620kg)", category: "winches", description: "12V electric winch • 1.6kW motor • 3620kg pulling capacity.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 102, name: "12V Winch EWG 8000U (2.7kW – 3620kg)", category: "winches", description: "Higher power 2.7kW motor • 3620kg capacity.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 103, name: "12V Winch EWX 10000U (4.3kW – 4536kg)", category: "winches", description: "4.3kW • 4536kg capacity • Suitable for larger 4x4s.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 104, name: "12V Winch EWX 12000U (4.5kW – 5440kg)", category: "winches", description: "4.5kW motor • 5440kg rated pull.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 105, name: "12V Winch EWP 12000U 2-Speed (5.4kW – 5443kg)", category: "winches", description: "2-speed gearbox • 5.4kW • 5443kg capacity.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 106, name: "Hydraulic Winch HWN 15000YD (6804kg)", category: "winches", description: "Hydraulic winch • 6804kg capacity • High duty cycle.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 107, name: "Mac Afric Synthetic Winch Line 12mm x 28m", category: "winches", description: "Synthetic rope kit • 12mm × 28m • 13734kg breaking strength.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 108, name: "High Lift Jack 1.52m (60 inch) 3000kg", category: "winches", description: "60-inch high lift jack • 3000kg capacity.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 109, name: "12V Air Compressor 90A / 300 L/min", category: "winches", description: "High-flow 12V compressor • 300 L/min • Fast tyre inflation.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ==================== LIFTING EQUIPMENT ====================
  { id: 201, name: "Electric Hoist PA1000 – 1000kg / 5.5m (230V)", category: "lifting", description: "1000kg capacity • 5.5m lift • 230V electric hoist.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 202, name: "Electric Chain Hoist 1.5 Ton × 6m (380V)", category: "lifting", description: "Double chain • 1.5 ton • 6m lift • 380V.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 203, name: "Chain Block 1.5 Ton × 3m", category: "lifting", description: "Manual chain block • 1.5 ton • 3m lift height.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 204, name: "Lever Block 1.5 Ton × 1.5m", category: "lifting", description: "Compact lever hoist • 1.5 ton • 1.5m lift.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 205, name: "Manual Hydraulic Pallet Truck 2.5 Ton", category: "lifting", description: "2.5 ton pallet jack • Smooth rolling wheels.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 206, name: "1.5 Ton Mobile Gantry Crane", category: "lifting", description: "Adjustable height mobile gantry • 1.5 ton capacity.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ==================== AUTOMOTIVE & BATTERY ====================
  { id: 301, name: "Intelligent Battery Charger 15 Amp (12V)", category: "automotive", description: "Smart 15A multi-stage charger for 12V batteries.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 302, name: "Professional Lithium Jump Starter 45000mAh", category: "automotive", description: "12V/24V lithium jump starter • 45000mAh capacity.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 303, name: "Mac Afric Jump Starter 800A Peak", category: "automotive", description: "800A peak / 400A starting current jump starter.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 304, name: "Battery Tester & Analyser (100–2000 CCA)", category: "automotive", description: "Tests battery health, CCA and charging system.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ==================== GARAGE EQUIPMENT ====================
  { id: 401, name: "Long Reach Trolley Jack 4 Ton", category: "garage", description: "4-ton long reach trolley jack for bakkies and light trucks.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 402, name: "Long Reach Trolley Jack 8 Ton", category: "garage", description: "Heavy-duty 8-ton long reach trolley jack.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 403, name: "Bottle Jack 20 Ton", category: "garage", description: "Compact 20-ton bottle jack.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 404, name: "Ratchet Jack Stands 6 Ton (Pair)", category: "garage", description: "6-ton jack stands sold per pair.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 405, name: "4 Ton 2-Post Vehicle Lift", category: "garage", description: "4-ton two-post electric/hydraulic lift.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 406, name: "Foldable Engine Crane", category: "garage", description: "Foldable engine crane with 6 wheels.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 407, name: "20-Ton Workshop Press with Gauge", category: "garage", description: "20-ton hydraulic workshop press with pressure gauge.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 408, name: "Pneumatic Tyre Changer LT 950A", category: "garage", description: "Professional tyre changer with helping arm.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ==================== GENERATORS & PUMPS ====================
  { id: 501, name: "Petrol Generator 6.5kVA / 5kW", category: "generators", description: "6.5kVA petrol standby generator.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 502, name: "Diesel Generator 20kVA Silent + ATS", category: "generators", description: "20kVA silent diesel generator with Automatic Transfer Switch.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 503, name: "Inverter Generator 3.2kW", category: "generators", description: "Clean power 3.2kW inverter generator.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 504, name: "Petrol Water Pump 3 Inch (75mm)", category: "generators", description: "3-inch petrol water pump for irrigation and dewatering.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 505, name: "Diesel Water Pump 4 Inch (100mm)", category: "generators", description: "4-inch diesel water pump • Electric & recoil start.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ==================== POWER TOOLS ====================
  { id: 601, name: "Makita 18V Brushless Drill Driver", category: "power", description: "Brushless motor • High torque cordless drill.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 602, name: "Kinway 20V Brushless Impact Wrench 1000Nm", category: "power", description: "20V brushless • 1000Nm torque impact wrench.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 603, name: "Mac Afric Angle Grinder 2200W 230mm", category: "power", description: "2200W • 230mm heavy-duty angle grinder.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },
  { id: 604, name: "Mac Afric 20V Cordless Drill Combo Kit", category: "power", description: "Includes 2 × 4.0Ah batteries and charger.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 605, name: "Bosch GWS 750-125 Angle Grinder 125mm", category: "power", description: "750W • 125mm angle grinder for cutting and grinding.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },
  { id: 606, name: "Mac Afric Angle Grinder 1100W 115mm", category: "power", description: "1100W • 115mm professional angle grinder.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },

  // ==================== PNEUMATIC / AIR TOOLS ====================
  { id: 701, name: "Fini Air Compressor 50 Litre 2.5HP", category: "pneumatic", description: "50L tank • 2.5HP • 8 bar • Suitable for spray guns and impact tools.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 702, name: "Fini Air Compressor 100 Litre 3HP", category: "pneumatic", description: "100L tank • 3HP • Higher duty cycle for workshop use.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 703, name: "Fini Air Compressor 200 Litre 5.5HP", category: "pneumatic", description: "200L tank • 5.5HP • Ideal for production workshops.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 704, name: "Pneumatic Impact Wrench 1/2\"", category: "pneumatic", description: "High torque air impact wrench for automotive and industrial use.", image: "https://images.unsplash.com/photo-1615906658996-066c4f8d2c0e?w=800&h=500&fit=crop" },
  { id: 705, name: "HVLP Spray Gun Kit", category: "pneumatic", description: "Professional HVLP spray gun with cups and accessories.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop" },
  { id: 706, name: "Air Die Grinder Kit 14 Piece", category: "pneumatic", description: "14-piece air die grinder kit for detailed work.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },

  // ==================== STORAGE ====================
  { id: 801, name: "7-Drawer Professional Tool Cabinet", category: "storage", description: "Heavy-duty 7-drawer cabinet with ball-bearing slides.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 802, name: "Mac Afric 207-Piece Tool Cabinet", category: "storage", description: "Complete 207-piece tool set in 7-drawer heavy-duty cabinet.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 803, name: "Jobsite Toolbox 48 Inch", category: "storage", description: "Large durable 48-inch jobsite toolbox.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },

  // ==================== HAND TOOLS ====================
  { id: 901, name: "Torque Wrench 1/2\" 40–210Nm", category: "manual", description: "1/2 inch drive click-type torque wrench • 40–210Nm.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 902, name: "172-Piece Professional Socket Set", category: "manual", description: "1/4, 3/8 & 1/2 inch drives • Comprehensive set.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 903, name: "Metric Combination Spanner Set 19-Piece", category: "manual", description: "Chrome vanadium 19-piece metric combination spanner set.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 904, name: "Stanley FatMax Claw Hammer 16oz", category: "manual", description: "Fibreglass handle • Magnetic nail starter • Soft grip.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" }
];

// ==================== APP LOGIC ====================
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
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("sendEmail").addEventListener("click", () => {
  if (!validateForm()) return;
  const message = buildMessage();
  const subject = "New Quotation Request – ToolHub";
  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

renderProducts();
