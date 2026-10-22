const products = [
  // MANUAL TOOLS
  { 
    id: 1, 
    name: "Stanley FatMax Claw Hammer 16oz", 
    category: "manual", 
    description: "Fibreglass handle • Magnetic nail starter • Soft grip. Ideal for construction and general use.", 
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" 
  },
  { 
    id: 2, 
    name: "Gedore Adjustable Wrench Set (6\", 8\", 10\")", 
    category: "manual", 
    description: "Chrome vanadium steel • Precision engineered • 3-piece set. Professional grade.", 
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" 
  },
  { 
    id: 3, 
    name: "Wera Kraftform Screwdriver Set 12-Piece", 
    category: "manual", 
    description: "Magnetic tips • Ergonomic handles • Includes flat, Phillips and Pozidriv. German quality.", 
    image: "https://images.unsplash.com/photo-1581092160607-ee67e4bf6d8a?w=800&h=500&fit=crop" 
  },
  { 
    id: 4, 
    name: "Knipex Cobra Water Pump Pliers 250mm", 
    category: "manual", 
    description: "Self-locking • High leverage • Grey atramentized finish. Excellent for pipes and fittings.", 
    image: "https://images.unsplash.com/photo-1581092160607-ee67e4bf6d8a?w=800&h=500&fit=crop" 
  },

  // POWER TOOLS
  { 
    id: 5, 
    name: "Makita 18V Brushless Drill Driver (DDF484)", 
    category: "power", 
    description: "Brushless motor • 54Nm torque • 2-speed gearbox • LED light. Body only or kit options available.", 
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" 
  },
  { 
    id: 6, 
    name: "Bosch GWS 750-125 Angle Grinder 125mm", 
    category: "power", 
    description: "750W motor • 11,000 rpm • Side handle & guard included. Suitable for cutting and grinding metal.", 
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" 
  },
  { 
    id: 7, 
    name: "DeWalt DWE560 Circular Saw 184mm", 
    category: "power", 
    description: "1350W • 5500 rpm • 65mm cut depth • Bevel capacity 48°. Ideal for timber and board work.", 
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" 
  },
  { 
    id: 8, 
    name: "Makita HR2470 Rotary Hammer SDS-Plus", 
    category: "power", 
    description: "780W • 2.4 Joules • 3-mode (drilling, hammer drilling, chiselling). Excellent for concrete.", 
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" 
  },

  // PNEUMATIC / COMPRESSORS
  { 
    id: 9, 
    name: "Fini Air Compressor 50 Litre 2.5HP", 
    category: "pneumatic", 
    description: "50L tank • 2.5HP motor • 8 bar max pressure • 200 L/min free air delivery. Suitable for spray guns and impact tools.", 
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" 
  },
  { 
    id: 10, 
    name: "Fini Air Compressor 100 Litre 3HP", 
    category: "pneumatic", 
    description: "100L tank • 3HP motor • 10 bar max pressure • Higher duty cycle for workshop use.", 
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" 
  },
  { 
    id: 11, 
    name: "Fini Air Compressor 200 Litre 5.5HP", 
    category: "pneumatic", 
    description: "200L tank • 5.5HP motor • 11 bar • Ideal for production workshops and multiple operators.", 
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" 
  },
  { 
    id: 12, 
    name: "Ingersoll Rand 1/2\" Pneumatic Impact Wrench", 
    category: "pneumatic", 
    description: "High torque (up to 610Nm) • Lightweight composite body • Suitable for automotive and industrial use.", 
    image: "https://images.unsplash.com/photo-1615906658996-066c4f8d2c0e?w=800&h=500&fit=crop" 
  },
  { 
    id: 13, 
    name: "Sagola 4600 Xtreme HVLP Spray Gun", 
    category: "pneumatic", 
    description: "Professional HVLP spray gun • Excellent atomisation • Suitable for basecoat, clearcoat and primers.", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop" 
  },

  // WELDING
  { 
    id: 14, 
    name: "ESAB Buddy Arc 200 Inverter Welder", 
    category: "welding", 
    description: "200A MMA/ARC • Lightweight • Generator friendly • Ideal for site and workshop work.", 
    image: "https://images.unsplash.com/photo-1504328343528-c827ceaeea25?w=800&h=500&fit=crop" 
  },
  { 
    id: 15, 
    name: "Lincoln Electric MIG 250 Welder", 
    category: "welding", 
    description: "250A MIG/MAG • Industrial duty • Suitable for fabrication and production environments.", 
    image: "https://images.unsplash.com/photo-1581094794329-adee35d815b7?w=800&h=500&fit=crop" 
  },
  { 
    id: 16, 
    name: "3M Speedglas Auto-Darkening Welding Helmet", 
    category: "welding", 
    description: "Auto-darkening filter • Adjustable shade 8-13 • Suitable for ARC, MIG and TIG welding.", 
    image: "https://images.unsplash.com/photo-1504328343528-c827ceaeea25?w=800&h=500&fit=crop" 
  },

  // STORAGE
  { 
    id: 17, 
    name: "Beta Tools Empty Tool Box (C38)", 
    category: "storage", 
    description: "Heavy-duty steel tool box • Multiple compartments • Strong handles. Empty version.", 
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" 
  },
  { 
    id: 18, 
    name: "Facom Fully Loaded Tool Kit", 
    category: "storage", 
    description: "Complete professional tool kit in robust case. Includes sockets, spanners, screwdrivers and pliers.", 
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" 
  },
  { 
    id: 19, 
    name: "Beta Rolling Tool Cabinet 7-Drawer", 
    category: "storage", 
    description: "Heavy-duty rolling cabinet • 7 drawers • Ball-bearing slides • Suitable for workshops and factories.", 
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" 
  },

  // INDUSTRIAL
  { 
    id: 20, 
    name: "Werther Hydraulic Floor Jack 3-Ton", 
    category: "industrial", 
    description: "3-ton capacity • Low profile • Suitable for cars, bakkies and light commercial vehicles.", 
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" 
  },
  { 
    id: 21, 
    name: "Gedore 150-Piece Socket Set", 
    category: "industrial", 
    description: "Metric & imperial • 1/4\", 3/8\" and 1/2\" drives • Heavy-duty case. Professional quality.", 
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" 
  },
  { 
    id: 22, 
    name: "Werther Engine Crane 1-Ton", 
    category: "industrial", 
    description: "Hydraulic engine crane • Foldable legs • Suitable for engine removal and workshop lifting.", 
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" 
  }
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
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

document.getElementById("sendEmail").addEventListener("click", () => {
  if (!validateForm()) return;
  const message = buildMessage();
  const subject = encodeURIComponent("New Quotation Request – ToolHub");
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

renderProducts();
