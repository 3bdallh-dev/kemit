/* ============================================
   EGYPTIAN MUSEUM - Treasures Page
   Treasure data + card grid, each linked to its
   pharaoh via a small local directory (see below).
   Requires base.js (for window.renderGrid) first.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Pharaoh Owner Directory ----
  // Lightweight lookup (id -> name/page) for the "linked to" badge below.
  // Kept separate from pharaohs.js on purpose so this page doesn't have
  // to load the full pharaoh dataset (images, bios, etc.) it doesn't need.
  const pharaohDirectory = {
    "tutankhamun": { name: "Tutankhamun", page: "pharaoh-tutankhamun.html" },
    "cleopatra-vii": { name: "Cleopatra VII", page: "pharaoh-cleopatra-vii.html" },
    "khufu": { name: "Khufu", page: "pharaoh-khufu.html" },
    "akhenaten": { name: "Akhenaten", page: "pharaoh-akhenaten.html" }
  };

  // ---- Treasures Data ----
  window.treasuresData = [
    {
      name: "Mask of Tutankhamun",
      pharaohId: "tutankhamun",
      era: "18TH DYNASTY · 1323 BCE",
      room: "Room 35",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tutankhamun%27s_mask_2.jpg/640px-Tutankhamun%27s_mask_2.jpg",
      description: "The iconic gold funerary mask of the boy king, crafted from 11kg of solid gold and precious stones including lapis lazuli, obsidian, and turquoise."
    },
    {
      name: "The Rosetta Stone",
      pharaohId: "cleopatra-vii",
      era: "PTOLEMAIC ERA · 196 BCE",
      room: "Room 12",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/640px-Rosetta_Stone.JPG",
      description: "The key to deciphering Egyptian hieroglyphs, inscribed with three scripts: hieroglyphic, demotic, and Greek. Discovered in 1799 by French soldiers."
    },
    {
      name: "Statue of Khafre",
      pharaohId: "khufu",
      era: "4TH DYNASTY · 2500 BCE",
      room: "Room 42",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Khafre_Enthroned.jpg/640px-Khafre_Enthroned.jpg",
      description: "A majestic diorite statue of the pharaoh, protected by the falcon god Horus, symbolizing divine kingship and the eternal nature of the soul."
    },
    {
      name: "The Amarna Letters",
      pharaohId: "akhenaten",
      era: "AMARNA PERIOD · 1350 BCE",
      room: "Room 28",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Amarna_letter.jpg/640px-Amarna_letter.jpg",
      description: "Clay tablets revealing diplomatic correspondence between Egypt and neighboring powers during Akhenaten's controversial religious revolution."
    },
    {
      name: "Narmer Palette",
      pharaohId: null,
      era: "EARLY DYNASTIC · 3100 BCE",
      room: "Room 2",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Narmer_Palette.jpg/640px-Narmer_Palette.jpg",
      description: "One of the earliest historical records, depicting the unification of Upper and Lower Egypt under King Narmer. A masterpiece of Early Dynastic art."
    },
    {
      name: "Canopic Jars of Tutankhamun",
      pharaohId: "tutankhamun",
      era: "18TH DYNASTY · 1323 BCE",
      room: "Room 35",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Canopic_jars.jpg/640px-Canopic_jars.jpg",
      description: "Four alabaster vessels containing the embalmed viscera of the young pharaoh, each protected by one of the Four Sons of Horus."
    }
  ];

  // ---- Treasure Card Template ----
  // Each treasure looks up its linked pharaoh (by id) from pharaohsData and,
  // if one exists, shows a small badge linking through to that pharaoh's page.
  window.treasureTemplate = (t) => {
    const owner = t.pharaohId ? pharaohDirectory[t.pharaohId] : null;
    const ownerBadge = owner
      ? `<a href="${owner.page}" class="treasure-owner-link">𓀭 ${owner.name}</a>`
      : '';
    return `
    <div class="col-md-6 col-lg-4 mb-4 fade-in">
      <div class="card card-egypt h-100">
        <img src="${t.image}" class="card-img-top" alt="${t.name}" onerror="this.src='https://placehold.co/400x250/1a1200/d4af37?text=${encodeURIComponent(t.name)}'">
        <div class="card-body">
          <h5 class="card-title">${t.name}</h5>
          <p class="card-text">${t.description}</p>
          ${ownerBadge}
          <div class="artifact-meta">
            <span class="artifact-era">${t.era}</span>
            <span class="artifact-room">${t.room}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  };

  if (document.getElementById('treasures-grid')) {
    window.renderGrid('treasures-grid', window.treasuresData, window.treasureTemplate);
  }
});
