const products = [
  { id: 1, name: "Professional Claw Hammer 16oz", category: "manual", description: "Heavy-duty steel claw hammer with comfortable grip. Suitable for construction and general workshop use.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" },
  { id: 2, name: "Adjustable Wrench Set 3-Piece", category: "manual", description: "Chrome vanadium steel adjustable wrenches in 6\", 8\" and 10\" sizes.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 3, name: "Screwdriver Set 12-Piece", category: "manual", description: "Precision and standard screwdrivers with magnetic tips. Ideal for electrical and mechanical work.", image: "https://images.unsplash.com/photo-1581092160607-ee67e4bf6d8a?w=800&h=500&fit=crop" },
  { id: 4, name: "Cordless Drill Driver 18V", category: "power", description: "Brushless motor, 2-speed gearbox and LED light. Battery and charger options available.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 5, name: "Angle Grinder 125mm", category: "power", description: "850W+ angle grinder for cutting and grinding. Side handle and guard included.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop" },
  { id: 6, name: "Circular Saw 1400W", category: "power", description: "Powerful circular saw for timber and board cutting. Depth and bevel adjustment.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 7, name: "Air Compressor 50L", category: "pneumatic", description: "2.5HP oil-lubricated compressor suitable for spray guns, impact tools and general workshop use.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 8, name: "Pneumatic Impact Wrench 1/2\"", category: "pneumatic", description: "High-torque air impact wrench for automotive and industrial fastening.", image: "https://images.unsplash.com/photo-1615906658996-066c4f8d2c0e?w=800&h=500&fit=crop" },
  { id: 9, name: "HVLP Spray Gun Kit", category: "pneumatic", description: "Professional spray gun with cups and accessories for painting and coating applications.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop" },
  { id: 10, name: "Inverter Arc Welder 200A", category: "welding", description: "Lightweight MMA/ARC inverter welder suitable for workshop and site work.", image: "https://images.unsplash.com/photo-1504328343528-c827ceaeea25?w=800&h=500&fit=crop" },
  { id: 11, name: "MIG Welder 250A", category: "welding", description: "Industrial MIG welding machine with wire feeder for fabrication and production.", image: "https://images.unsplash.com/photo-1581094794329-adee35d815b7?w=800&h=500&fit=crop" },
  { id: 12, name: "Welding Helmet Auto-Darkening", category: "welding", description: "Auto-darkening welding helmet with adjustable shade for ARC, MIG and TIG.", image: "https://images.unsplash.com/photo-1504328343528-c827ceaeea25?w=800&h=500&fit=crop" },
  { id: 13, name: "Heavy Duty Tool Box (Empty)", category: "storage", description: "Steel tool box with compartments and strong handles. Empty version for custom loading.", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop" },
  { id: 14, name: "Loaded Tool Kit Set", category: "storage", description: "Complete tool box filled with essential hand tools. Ready for workshop or site use.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop" },
  { id: 15, name: "Rolling Tool Cabinet", category: "storage", description: "Heavy-duty multi-drawer tool cabinet with casters. Ideal for workshops and factories.", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop" },
  { id: 16, name: "Hydraulic Floor Jack 3-Ton", category: "industrial", description: "Low-profile hydraulic jack suitable for cars, bakkies and light commercial vehicles.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" },
  { id: 17, name: "150-Piece Socket Set", category: "industrial", description: "Professional metric and imperial socket set in heavy-duty case.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop" },
  { id: 18, name: "Engine Crane / Shop Crane", category: "industrial", description: "Hydraulic engine crane for workshop lifting and engine removal.", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop" }
];

const whatsappNumber = "27642448154";
const emailAddress = "nexusequipmentgroup@gmail.com";

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
    container.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:40px 0;">No matching equipment found. <a href="#quote" style="color:#60a5fa;">Request a custom quote</a> instead.</p>`;
    return;
  }

  container.innerHTML = list.map(p => {
    const waText = encodeURIComponent(`Hi Nexus, I would like a quotation for:\n\n• ${p.name}\n\nPlease advise price and availability.`);
    const emailSubject = encodeURIComponent(`Quotation Request – ${p.name}`);
    const emailBody = encodeURIComponent(`Hi Nexus,\n\nI would like a quotation for the following item:\n\n• ${p.name}\n\nPlease advise price and availability.\n\nThank you.`);

    return `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-actions">
          <a href="https://wa.me/${whatsappNumber}?text=${waText}" class="btn-sm btn-wa" target="_blank" rel="noopener">WhatsApp</a>
          <a href="mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}" class="btn-sm btn-em">Email</a>
        </div>
      </div>
    </article>
  `}).join("");
}

// Category filter
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const search = document.getElementById("searchInput").value;
    renderProducts(btn.dataset.category, search);
  });
});

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const active = document.querySelector(".cat-btn.active");
  const cat = active ? active.dataset.category : "all";
  renderProducts(cat, e.target.value);
});

// Mobile menu
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("open");
});

// Build quote message
function buildQuoteMessage() {
  const name = document.getElementById("qName").value.trim();
  const company = document.getElementById("qCompany").value.trim();
  const phone = document.getElementById("qPhone").value.trim();
  const email = document.getElementById("qEmail").value.trim();
  const location = document.getElementById("qLocation").value.trim();
  const details = document.getElementById("qDetails").value.trim();

  let message = `NEW QUOTATION REQUEST - ToolHub\n\n`;
  message += `Name: ${name}\n`;
  if (company) message += `Company: ${company}\n`;
  message += `Phone: ${phone}\n`;
  if (email) message += `Email: ${email}\n`;
  if (location) message += `Delivery Location: ${location}\n`;
  message += `\nEquipment Required:\n${details}\n\n`;
  message += `Please provide a quotation. Thank you.`;

  return message;
}

// WhatsApp button
document.getElementById("sendWhatsApp").addEventListener("click", () => {
  const form = document.getElementById("quoteForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const message = buildQuoteMessage();
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// Email button
document.getElementById("sendEmail").addEventListener("click", () => {
  const form = document.getElementById("quoteForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const message = buildQuoteMessage();
  const subject = encodeURIComponent("New Quotation Request – ToolHub");
  const body = encodeURIComponent(message);
  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

// Initial render
renderProducts();
