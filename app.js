const products = [
  // ==================== WINCHES & 4x4 ====================
  { id: 101, name: "12V Electric Winches (8000lb – 12000lb)", category: "winches", description: "Available brands: EWK, EWG, EWX, EWP series. Capacities from 3620kg to 5443kg.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 102, name: "Hydraulic Winches (up to 15000lb)", category: "winches", description: "Heavy-duty hydraulic winches. Brands: HWN, HWD, HWP series.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 103, name: "Synthetic Winch Ropes & Recovery Kits", category: "winches", description: "Mac Afric synthetic winch lines and recovery ropes.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 104, name: "High Lift Jacks & Recovery Tracks", category: "winches", description: "High lift jacks (48\" & 60\") and recovery tracks.", image: "https://images.unsplash.com/photo-1578583444045-69c6e71c520b?w=800&h=500&fit=crop" },
  { id: 105, name: "12V Air Compressors for 4x4", category: "winches", description: "High-flow 12V compressors up to 300 L/min.", image: "https://images.unsplash.com/photo-1655165312002-9d781ad4046e?w=800&h=500&fit=crop" },

  // ==================== LIFTING EQUIPMENT ====================
  { id: 201, name: "Electric Hoists & Chain Hoists", category: "lifting", description: "230V and 380V electric hoists. 250kg to 1.5 ton.", image: "https://images.unsplash.com/photo-1477168561719-12b71b09935b?w=800&h=500&fit=crop" },
  { id: 202, name: "Manual Chain Blocks & Lever Blocks", category: "lifting", description: "Chain blocks and lever hoists from 0.75 ton to 4 ton.", image: "https://images.unsplash.com/photo-1477168561719-12b71b09935b?w=800&h=500&fit=crop" },
  { id: 203, name: "Pallet Trucks & Stackers", category: "lifting", description: "Manual hydraulic pallet trucks 1.5–2.5 ton.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 204, name: "Gantry Cranes & Beam Clamps", category: "lifting", description: "Mobile gantry cranes and beam clamps.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ==================== AUTOMOTIVE & BATTERY ====================
  { id: 301, name: "Intelligent Battery Chargers", category: "automotive", description: "Smart chargers from 1.5A to 25A.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 302, name: "Jump Starters & Boosters", category: "automotive", description: "Lithium and traditional jump starters up to 800A.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 303, name: "Battery Testers & Analysers", category: "automotive", description: "Digital battery testers. CCA 100–2000.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ==================== GARAGE EQUIPMENT ====================
  { id: 401, name: "Trolley Jacks & Bottle Jacks", category: "garage", description: "Long reach trolley jacks 2–11 ton and bottle jacks up to 30 ton.", image: "https://images.unsplash.com/photo-1578583444045-69c6e71c520b?w=800&h=500&fit=crop" },
  { id: 402, name: "Jack Stands & Engine Cranes", category: "garage", description: "Ratchet jack stands 3–12 ton and foldable engine cranes.", image: "https://images.unsplash.com/photo-1578583444045-69c6e71c520b?w=800&h=500&fit=crop" },
  { id: 403, name: "Vehicle Lifts (2-Post & 4-Post)", category: "garage", description: "4-ton 2-post and 5-ton 4-post lifts.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 404, name: "Workshop Presses", category: "garage", description: "Hydraulic workshop presses 12–100 ton. 20 ton models available.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 405, name: "Tyre Changers & Wheel Balancers", category: "garage", description: "Pneumatic tyre changers and wheel balancers.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },

  // ==================== GENERATORS & PUMPS ====================
  { id: 501, name: "Petrol Generators", category: "generators", description: "Petrol generators 1.25kVA to 12.5kVA.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 502, name: "Diesel Generators (Silent + ATS)", category: "generators", description: "Silent diesel generators with ATS. 6.5kVA to 50kVA.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 503, name: "Inverter Generators", category: "generators", description: "Clean power inverter generators 1.8kW to 8kW.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 504, name: "Petrol & Diesel Water Pumps", category: "generators", description: "Water pumps 2 inch to 4 inch.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },

  // ==================== POWER TOOLS ====================
  { id: 601, name: "Cordless Drills & Impact Drivers", category: "power", description: "Makita, Kinway, Mac Afric. 18V & 20V brushless.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 602, name: "Angle Grinders", category: "power", description: "Bosch, Mac Afric, Kinway. 115mm–230mm.", image: "https://images.unsplash.com/photo-1738162837369-a2beec3a1d47?w=800&h=500&fit=crop" },
  { id: 603, name: "Impact Wrenches", category: "power", description: "Cordless and air impact wrenches up to 1000Nm.", image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&h=500&fit=crop" },
  { id: 604, name: "Circular Saws & Reciprocating Saws", category: "power", description: "Corded and cordless circular saws and reciprocating saws.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },

  // ==================== PNEUMATIC / AIR TOOLS ====================
  { id: 701, name: "Air Compressors (50L – 200L)", category: "pneumatic", description: "Fini and other brands. 50L–200L tanks.", image: "https://images.unsplash.com/photo-1655165312002-9d781ad4046e?w=800&h=500&fit=crop" },
  { id: 702, name: "Pneumatic Impact Wrenches & Ratchets", category: "pneumatic", description: "Air impact wrenches and ratchets.", image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&h=500&fit=crop" },
  { id: 703, name: "Spray Guns (HVLP & LVLP)", category: "pneumatic", description: "Professional gravity feed spray guns. Multiple nozzle sizes.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop" },
  { id: 704, name: "Air Die Grinders & Kits", category: "pneumatic", description: "Die grinder kits and air tools.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },

  // ==================== STORAGE ====================
  { id: 801, name: "Tool Cabinets (7-Drawer & more)", category: "storage", description: "Professional tool cabinets. Mac Afric and other brands.", image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&h=500&fit=crop" },
  { id: 802, name: "Fully Loaded Tool Cabinets", category: "storage", description: "Complete tool sets in heavy-duty cabinets.", image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&h=500&fit=crop" },
  { id: 803, name: "Jobsite Toolboxes & Cantilever Boxes", category: "storage", description: "Large jobsite toolboxes and multi-tray cantilever boxes.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },

  // ==================== HAND TOOLS ====================
  { id: 901, name: "Torque Wrenches", category: "manual", description: "Click-type torque wrenches. Multiple drive sizes.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 902, name: "Socket Sets", category: "manual", description: "Professional socket sets from 25 to 172 pieces.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 903, name: "Spanner Sets", category: "manual", description: "Metric and imperial combination spanner sets (ring + open ended).", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 904, name: "Screwdrivers, Pliers & Hammers", category: "manual", description: "Stanley, Wera, Knipex, Gedore, Mac Afric.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" }
];

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
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const link = document.createElement('a');
  link.href = mailtoLink;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

renderProducts();
