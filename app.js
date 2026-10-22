const products = [
  // MANUAL
  {
    id: 1,
    name: "Professional Claw Hammer 16oz",
    category: "manual",
    description: "Heavy-duty steel claw hammer with fibreglass handle. Ideal for construction and general use.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Adjustable Wrench Set (3-Piece)",
    category: "manual",
    description: "Chrome vanadium steel adjustable wrenches. 6\", 8\" and 10\" sizes.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop"
  },

  // POWER
  {
    id: 3,
    name: "Cordless Drill Driver 18V",
    category: "power",
    description: "Brushless motor, 2-speed gearbox, LED work light. Battery and charger included.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Angle Grinder 125mm 850W",
    category: "power",
    description: "Powerful angle grinder for cutting and grinding metal. Side handle included.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop"
  },

  // PNEUMATIC
  {
    id: 5,
    name: "Air Compressor 50L 2.5HP",
    category: "pneumatic",
    description: "Oil-lubricated compressor. Suitable for spray guns, impact wrenches and general workshop use.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Pneumatic Impact Wrench 1/2\"",
    category: "pneumatic",
    description: "High torque air impact wrench. Ideal for automotive and industrial applications.",
    image: "https://images.unsplash.com/photo-1615906658996-066c4f8d2c0e?w=800&h=500&fit=crop"
  },
  {
    id: 7,
    name: "HVLP Spray Gun Kit",
    category: "pneumatic",
    description: "Professional spray gun with cups and accessories. Perfect for painting and coating.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop"
  },

  // WELDING
  {
    id: 8,
    name: "Inverter Welding Machine 200A",
    category: "welding",
    description: "MMA/ARC inverter welder. Lightweight and suitable for workshop and site work.",
    image: "https://images.unsplash.com/photo-1504328343528-c827ceaeea25?w=800&h=500&fit=crop"
  },
  {
    id: 9,
    name: "MIG Welding Machine 250A",
    category: "welding",
    description: "Industrial MIG welder with wire feeder. Suitable for fabrication and production work.",
    image: "https://images.unsplash.com/photo-1581094794329-adee35d815b7?w=800&h=500&fit=crop"
  },

  // STORAGE
  {
    id: 10,
    name: "Heavy Duty Tool Box (Empty)",
    category: "storage",
    description: "Steel tool box with multiple compartments and sturdy handles. Empty version.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop"
  },
  {
    id: 11,
    name: "Fully Loaded Tool Box Set",
    category: "storage",
    description: "Complete tool box filled with essential hand tools. Ready for workshop or site.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=500&fit=crop"
  },
  {
    id: 12,
    name: "Industrial Tool Cabinet / Tool Cabin",
    category: "storage",
    description: "Heavy-duty rolling tool cabinet with multiple drawers. Ideal for workshops and factories.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop"
  },

  // INDUSTRIAL
  {
    id: 13,
    name: "Hydraulic Floor Jack 3-Ton",
    category: "industrial",
    description: "Low-profile hydraulic jack. Suitable for cars, bakkies and light commercial vehicles.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop"
  },
  {
    id: 14,
    name: "150-Piece Industrial Socket Set",
    category: "industrial",
    description: "Professional metric and imperial socket set in heavy-duty case.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop"
  }
];

const whatsappNumber = "27642448154";

function renderProducts(filter = "all") {
  const container = document.getElementById("products");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  container.innerHTML = filtered.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Nexus, I would like a quote for: ' + product.name)}" 
           class="quote-btn" target="_blank">
          Request Quote
        </a>
      </div>
    </div>
  `).join("");
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

renderProducts();
