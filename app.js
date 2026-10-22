const products = [
  {
    id: 1,
    name: "Professional Claw Hammer 16oz",
    category: "manual",
    description: "Heavy-duty steel claw hammer with comfortable grip. Ideal for construction and DIY.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Adjustable Wrench Set (3-Piece)",
    category: "manual",
    description: "Chrome vanadium steel adjustable wrenches. Sizes 6\", 8\" and 10\".",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Cordless Drill Driver 18V",
    category: "power",
    description: "Brushless motor, 2-speed gearbox, LED light. Comes with battery and charger.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Angle Grinder 125mm",
    category: "power",
    description: "Powerful 850W angle grinder. Perfect for cutting and grinding metal.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Industrial Socket Set 150-Piece",
    category: "industrial",
    description: "Complete metric and imperial socket set in heavy-duty case. Professional grade.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Hydraulic Floor Jack 3-Ton",
    category: "industrial",
    description: "Heavy-duty hydraulic jack. Low profile design for cars, bakkies and light trucks.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
  }
];

const whatsappNumber = "27642448154"; // 0642448154 with country code

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

// Category buttons
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

// Initial render
renderProducts();
