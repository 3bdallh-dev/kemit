/* ============================================
   EGYPTIAN MUSEUM - Treasures Page
   Treasure data + card grid, each linked to its
   pharaoh via a small local directory (see below).
   Requires base.js (for window.renderGrid) first.
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  // ---- Pharaoh Owner Directory ----
  // Lightweight lookup (id -> name/page) for the "linked to" badge below.
  // Kept separate from pharaohs.js on purpose so this page doesn't have
  // to load the full pharaoh dataset (images, bios, etc.) it doesn't need.
  const pharaohDirectory = {
    tutankhamun: { name: "Tutankhamun", page: "Tutankhamun.html" },
    "cleopatra-vii": {
      name: "Cleopatra VII",
      page: "cleopatraVII.html",
    },
    khufu: { name: "Khufu", page: "khufu.html" },
    akhenaten: { name: "Akhenaten", page: "Akhenaten.html" },
  };

  // ---- Treasures Data ----
  window.treasuresData = [
    {
      name: "Mask of Tutankhamun",
      pharaohId: "tutankhamun",
      page: "Tutankhamun.html",
      era: "18TH DYNASTY · 1323 BCE",
      room: "Room 35",
      image:
        "https://imgs.search.brave.com/Mdnt6hbkDkqhcKGR-Z8-1PJ9r_z5pyUWX39UU6PemVs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4LzY4/LzI3L2I4NjgyNzNj/YmU0YjE0MTM5YmRj/ZDMyYzkyZWRiN2Mx/LmpwZw",
      description:
        "The iconic gold funerary mask of the boy king, crafted from 11kg of solid gold and precious stones including lapis lazuli, obsidian, and turquoise.",
    },
    {
      name: "The Rosetta Stone",
      pharaohId: "cleopatra-vii",
      era: "PTOLEMAIC ERA · 196 BCE",
      room: "Room 12",
      image:
        "https://imgs.search.brave.com/34Y4Wp9Ab72qWFEhrN8jrARxxxWz6JO4RlvIYfSkJgU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M4L1Jvc2V0dGFf/U3RvbmVfLV9mcm9u/dF9mYWNlXy1fY29y/cmVjdGVkX2ltYWdl/LmpwZw",
      description:
        "The key to deciphering Egyptian hieroglyphs, inscribed with three scripts: hieroglyphic, demotic, and Greek. Discovered in 1799 by French soldiers.",
    },
    {
      name: "Statue of Khafre",
      pharaohId: null,
      era: "4TH DYNASTY · 2500 BCE",
      room: "Room 42",
      image:
        "https://imgs.search.brave.com/hKbBkE5fU2tKe2r4iYbGvXXZlS3aY4szjTkayhgjlRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZWd5cHQt/bXVzZXVtLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OC9LaGFmcmUtRW50/aHJvbmVkLTIuanBn/P3Jlc2l6ZT00ODks/NjAwJnNzbD0x",
      description:
        "A majestic diorite statue of the pharaoh, protected by the falcon god Horus, symbolizing divine kingship and the eternal nature of the soul.",
    },
    {
      name: "The Amarna Letters",
      pharaohId: "akhenaten",
      era: "AMARNA PERIOD · 1350 BCE",
      room: "Room 28",
      image:
        "https://imgs.search.brave.com/-qIQK0tn9q5m3O2HgNP7sb2QSJXVTwNArXnxQWkg4Yk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmlibGUuY2EvYXJj/aGVvbG9neS9iaWJs/ZS1hcmNoZW9sb2d5/LW1hcHMtY29ucXVl/c3QtYW1hcm5hLXRh/YmxldHMtbGV0dGVy/cy1ha2hlbmF0ZW4t/aGFiaXJ1LWFiaXJ1/LWhlYnJld3MtYWto/ZW5hdGVuLWFtZW5v/cGhpcy1JVi0xMzU4/LTEzNDFiYy1zdW4t/d29yc2hpcC5qcGc",
      description:
        "Clay tablets revealing diplomatic correspondence between Egypt and neighboring powers during Akhenaten's controversial religious revolution.",
    },
    {
      name: "Narmer Palette",
      pharaohId: null,
      era: "EARLY DYNASTIC · 3100 BCE",
      room: "Room 2",
      image:
        "https://imgs.search.brave.com/ZlyqvqtotBemD8tlK3h1fuSGjKuGbT_UKXCYTp0onmo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvNy8y/MDI0LzEyL0dldHR5/SW1hZ2VzLTEyNDM5/MDk1NzktNGQ5MzQ3/Yy1lMTczNTA1MTk0/MjQ2Ni5qcGc_cXVh/bGl0eT05MCZyZXNp/emU9NjIwLDQxNA",
      description:
        "One of the earliest historical records, depicting the unification of Upper and Lower Egypt under King Narmer. A masterpiece of Early Dynastic art.",
    },
    {
      name: "Canopic Jars of Tutankhamun",
      pharaohId: "tutankhamun",
      page: "Tutankhamun.html",
      era: "18TH DYNASTY · 1323 BCE",
      room: "Room 35",
      image:
        "https://imgs.search.brave.com/yBN71BYp9XrNaVdMQeyJtnsf2Z7lGxA3ao8SXP1dHew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM2NzcxMjExL3Iv/aWwvZTQzZWM1LzU0/OTYzNDkwNDcvaWxf/MzAweDMwMC41NDk2/MzQ5MDQ3X2V5dHgu/anBn",
      description:
        "Four alabaster vessels containing the embalmed viscera of the young pharaoh, each protected by one of the Four Sons of Horus.",
    },
  ];

  // ---- Treasure Card Template ----
  // Each treasure looks up its linked pharaoh (by id) from pharaohsData and,
  // if one exists, shows a small badge linking through to that pharaoh's page.
  window.treasureTemplate = (t) => {
    const owner = t.pharaohId ? pharaohDirectory[t.pharaohId] : null;
    const ownerBadge = owner
      ? `<a href="${owner.page}" class="treasure-owner-link">𓀭 ${owner.name}</a>`
      : "";
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

  if (document.getElementById("treasures-grid")) {
    window.renderGrid(
      "treasures-grid",
      window.treasuresData,
      window.treasureTemplate,
    );
  }
});
