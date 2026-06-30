// Product Catalog Data
const products = [
  {
    id: 1,
    name: "Sharon BWP Marine Plywood IS 710",
    brand: "Sharon Plywoods",
    category: "marine",
    price: "₹120 / sq. ft",
    badge: "Best Seller",
    img: "/images/doors_plywood.png",
    specs: "Boiling Water Proof, 30-Year Guarantee, GLP Treated",
    desc: "Premium grade boiling water proof plywood crafted from selected hardwood veneers. Perfect for modular kitchens, bathroom vanities, and high-moisture areas."
  },
  {
    id: 2,
    name: "CenturyPly Club Prime 710",
    brand: "CenturyPly",
    category: "marine",
    price: "₹135 / sq. ft",
    badge: "ViroKill Tech",
    img: "/images/doors_plywood.png",
    specs: "Fire Retardant, Anti-Microbial, Glue Line Protection",
    desc: "India's highest certified marine plywood equipped with ViroKill technology that kills 99.99% viruses and bacteria. Unmatched structural strength."
  },
  {
    id: 3,
    name: "Kitply Gold Commercial BWR Ply",
    brand: "Kitply",
    category: "commercial",
    price: "₹85 / sq. ft",
    badge: "Wholesale Hot",
    img: "/images/plywood_hero.png",
    specs: "Boiling Water Resistant, High Tensile Strength",
    desc: "Trusted across India for 25+ years. Ideal for living room wardrobes, office furniture, bed frames, and interior cabinetry."
  },
  {
    id: 4,
    name: "Greenply E0 Zero Emission Ply",
    brand: "Greenply",
    category: "commercial",
    price: "₹98 / sq. ft",
    badge: "Eco-Friendly",
    img: "/images/plywood_hero.png",
    specs: "Zero Formaldehyde Emissions, Safe for Children",
    desc: "Environmentally certified E-Zero grade plywood ensuring health safety and zero pungent smell for luxury home interiors."
  },
  {
    id: 5,
    name: "Merino High-Pressure Matt & Gloss Laminates",
    brand: "Merino",
    category: "laminates",
    price: "₹65 / sq. ft",
    badge: "100+ Shades",
    img: "/images/veneers_laminates.png",
    specs: "1.0mm Thickness, Scratch & Heat Resistant",
    desc: "Exquisite surface decorative laminates available in natural wood grains, stone textures, suede finish, and super-matt solid colors."
  },
  {
    id: 6,
    name: "Almond Solid Core Timber Flush Door",
    brand: "Almond Doors",
    category: "doors",
    price: "₹140 / sq. ft",
    badge: "Architectural",
    img: "/images/doors_plywood.png",
    specs: "Seasoned Wood Core, Dimensionally Stable",
    desc: "Heavy-duty flush doors with pinewood core and dual veneer surfacing. Warp-resistant and sound-dampening for main entryways."
  },
  {
    id: 7,
    name: "Fevicol SH Synthetic Wood Adhesive",
    brand: "Fevicol",
    category: "doors",
    price: "₹240 / kg",
    badge: "Essential",
    img: "/images/veneers_laminates.png",
    specs: "Unbeatable Bonding Strength, Fast Drying",
    desc: "India's ultimate woodworking adhesive. Used for bonding wood, plywood, laminate, veneer, MDF, and blockboard."
  },
  {
    id: 8,
    name: "Virat Heavy Duty Brass & SS Hinges",
    brand: "Virat",
    category: "doors",
    price: "Custom Hardware",
    badge: "Hardware",
    img: "/images/doors_plywood.png",
    specs: "Soft-Close Hinges, Hydraulic Drawer Slides",
    desc: "Premium architectural hardware fittings designed for seamless cabinet door operations and heavy weight endurance."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Render Product Catalog
  renderProducts("all");

  // Tab Filtering
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      tabBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const cat = e.target.getAttribute("data-category");
      renderProducts(cat);
    });
  });

  // Setup Estimator Calculator
  setupCalculator();

  // Setup Contact Form
  setupContactForm();
});

function renderProducts(category) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <span class="product-badge">${p.badge}</span>
        <img src="${p.img}" alt="${p.name}" class="product-img" />
      </div>
      <div class="product-content">
        <span class="product-brand-tag">${p.brand}</span>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-specs">
          <span class="spec-item"><strong>Specs:</strong> ${p.specs}</span>
        </div>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="btn btn-outline btn-sm view-details-btn" data-id="${p.id}">
            View Details
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // Attach event listeners to detail buttons
  document.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      openModal(id);
    });
  });
}

function setupCalculator() {
  const gradeSelect = document.getElementById("calc-grade");
  const sizeSelect = document.getElementById("calc-size");
  const thickSelect = document.getElementById("calc-thickness");
  const qtyInput = document.getElementById("calc-qty");
  const qtyDec = document.getElementById("qty-dec");
  const qtyInc = document.getElementById("qty-inc");
  const whatsappBtn = document.getElementById("btn-send-whatsapp-calc");

  if (!gradeSelect) return;

  function updateCalculation() {
    const selectedOption = gradeSelect.options[gradeSelect.selectedIndex];
    const baseRate = parseFloat(selectedOption.getAttribute("data-rate"));
    const sqftPerSheet = parseFloat(sizeSelect.value);
    const thickMultiplier = parseFloat(thickSelect.value);
    const qty = Math.max(1, parseInt(qtyInput.value) || 1);

    const effectiveRate = Math.round(baseRate * thickMultiplier);
    const totalSqft = sqftPerSheet * qty;
    const estimatedTotal = totalSqft * effectiveRate;

    document.getElementById("res-area").textContent = `${totalSqft} sq. ft (${qty} sheets)`;
    document.getElementById("res-rate").textContent = `₹${effectiveRate} / sq. ft`;
    document.getElementById("res-total").textContent = `₹${estimatedTotal.toLocaleString('en-IN')}*`;
  }

  gradeSelect.addEventListener("change", updateCalculation);
  sizeSelect.addEventListener("change", updateCalculation);
  thickSelect.addEventListener("change", updateCalculation);
  qtyInput.addEventListener("input", updateCalculation);

  qtyDec.addEventListener("click", () => {
    let current = parseInt(qtyInput.value) || 1;
    if (current > 1) {
      qtyInput.value = current - 1;
      updateCalculation();
    }
  });

  qtyInc.addEventListener("click", () => {
    let current = parseInt(qtyInput.value) || 1;
    qtyInput.value = current + 1;
    updateCalculation();
  });

  whatsappBtn.addEventListener("click", () => {
    const matName = gradeSelect.options[gradeSelect.selectedIndex].text;
    const sizeText = sizeSelect.options[sizeSelect.selectedIndex].text;
    const thickText = thickSelect.options[thickSelect.selectedIndex].text;
    const qty = qtyInput.value;
    const totalCost = document.getElementById("res-total").textContent;

    const msg = `Hello Bhairav Plywood (Deepak Bansal),\n\nI calculated an estimate on your website:\n- Material: ${matName}\n- Dimensions: ${sizeText}\n- Thickness: ${thickText}\n- Quantity: ${qty} sheets\n- Total Estimated Amount: ${totalCost}\n\nPlease provide your best wholesale quote and availability. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/919940177773?text=${encodedMsg}`, "_blank");
  });

  updateCalculation();
}

function openModal(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const modalOverlay = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");

  modalBody.innerHTML = `
    <span class="product-brand-tag" style="font-size:0.9rem">${p.brand}</span>
    <h2 style="font-family:var(--font-heading); font-size:1.8rem; margin-bottom:12px">${p.name}</h2>
    <img src="${p.img}" alt="${p.name}" style="width:100%; height:240px; object-fit:cover; border-radius:12px; margin-bottom:16px; border:1px solid var(--border-color)" />
    <p style="color:var(--text-muted); margin-bottom:16px; font-size:1rem">${p.desc}</p>
    <div style="background:var(--bg-dark); padding:16px; border-radius:8px; border:1px solid var(--border-color); margin-bottom:20px">
      <h4 style="color:var(--primary-gold); margin-bottom:6px">Specifications & Certification</h4>
      <p style="font-size:0.9rem; color:var(--text-main)">${p.specs}</p>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center">
      <span style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; color:var(--primary-gold)">${p.price}</span>
      <a href="https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20buy%20or%20inquire%20about%20${encodeURIComponent(p.name)}" target="_blank" class="btn btn-whatsapp">
        <i class="fa-brands fa-whatsapp"></i> Inquire via WhatsApp
      </a>
    </div>
  `;

  modalOverlay.classList.add("active");

  closeBtn.onclick = () => modalOverlay.classList.remove("active");
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  };
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;
    const req = document.getElementById("contact-requirement").value;

    alert(`Thank you, ${name}! Your inquiry has been logged successfully. Deepak Bansal (+91 99401 77773) will contact you shortly.`);
    form.reset();
  });
}
