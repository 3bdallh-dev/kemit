/* ============================================
   EGYPTIAN MUSEUM - Pharaohs Page
   Pharaoh data + card grid. Requires base.js
   (for window.renderGrid) to be loaded first.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Pharaohs Data ----
  window.pharaohsData = [
    {
      id: "tutankhamun",
      page: "Tutankhamun.html",
      name: "Tutankhamun",
      title: "The Boy King",
      dynasty: "18th Dynasty",
      reign: "1332–1323 BCE",
      image: "https://imgs.search.brave.com/Mdnt6hbkDkqhcKGR-Z8-1PJ9r_z5pyUWX39UU6PemVs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4LzY4/LzI3L2I4NjgyNzNj/YmU0YjE0MTM5YmRj/ZDMyYzkyZWRiN2Mx/LmpwZw",
      description: "Ascended the throne at age 9. His intact tomb, discovered by Howard Carter in 1922, contained over 5,000 artifacts including the iconic golden death mask."
    },
    {
      id: "ramses-ii",
      page: "ramses_two.html",
      name: "Ramses II",
      title: "Ramses the Great",
      dynasty: "19th Dynasty",
      reign: "1279–1213 BCE",
      image: "https://imgs.search.brave.com/OMKcmwUTS-PCbxQYxaH4luH9Rk6f9qKvZ-Ea5ubyaMw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg2/MTg4OTIwL3Bob3Rv/L3BoYXJhb2gtcmFt/c2VzLWlpLWx1eG9y/LWVneXB0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1GeVhw/alRnWlo2dWo2Q2pK/bDRCemRSUUlnazZx/bC1PRDVzejdycE1W/VTJVPQ",
      description: "The most powerful pharaoh of the New Kingdom. Ruled for 66 years, built Abu Simbel, and led Egypt through the Battle of Kadesh against the Hittites."
    },
    {
      id: "cleopatra-vii",
      page: "cleopatraVII.html",
      name: "Cleopatra VII",
      title: "The Last Pharaoh",
      dynasty: "Ptolemaic",
      reign: "51–30 BCE",
      image: "https://imgs.search.brave.com/eKcmKpKJP5_t7--WLx7HXg0urFwwEBchWyBse5Qno20/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MDQ1NTg0Mi9waG90/by9jbGVvcGF0cmEt/ZWd5cHRpYW4tcXVl/ZW4tdmlpLWNlbnR1/cnktb2YtZWd5cHQt/M2QtcmVuZGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz11/V1pOcFMzbE1ycndD/ei1PdjZxRk5NckRJ/bmJpOUJLM1ZsNTlj/b0ppNzlzPQ",
      description: "The final active ruler of ancient Egypt. A brilliant linguist and strategist who allied with Julius Caesar and Mark Antony to preserve Egyptian independence."
    },
 
    {
      id: "akhenaten",
      page: "Akhenaten.html",
      name: "Akhenaten",
      title: "The Heretic King",
      dynasty: "18th Dynasty",
      reign: "1353–1336 BCE",
      image: "https://imgs.search.brave.com/3tel-Q2UsJvZhfdljxUr9YjSlcYFTMRw1TCwDEo8AG4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/MC8yNi8xMy8zNC9l/Z3lwdGlhbi1zdGF0/dWUtNjc0MzkyOV82/NDAuanBn",
      description: "Abandoned traditional polytheism for the worship of Aten, the sun disk. Moved the capital to Amarna and revolutionized Egyptian art with naturalistic styles."
    },
    {
      id: "hatshepsut",
      page: "Hatshepsut.html",
      name: "Hatshepsut",
      title: "The Female Pharaoh",
      dynasty: "18th Dynasty",
      reign: "1479–1458 BCE",
      image: "https://imgs.search.brave.com/3HHANitAueDO8omWv04qb_0AMKW0Nlw5N-xnA-txYcw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vYWVuZXR3b3Jr/cy9pbWFnZS91cGxv/YWQvY19maWxsLGFy/XzIsd18zODQwLGhf/MTkyMCxnX2F1dG8v/ZHByX2F1dG8vZl9h/dXRvL3FfYXV0bzpl/Y28vdjEvaGF0c2hl/cHN1dC1zdGF0dWU_/X2E9QkFWTW42RFkw",
      description: "One of the few women to rule Egypt as pharaoh. Oversaw a prosperous era of trade, building the magnificent mortuary temple at Deir el-Bahari."
    },
    {
      id: "khufu",
      page: "Khufu.html",
      name: "Khufu",
      title: "Builder of the Great Pyramid",
      dynasty: "4th Dynasty",
      reign: "2589–2566 BCE",
      image: "https://imgs.search.brave.com/4kcm17-9LTAo87G6GIw6X8lzdj_mUd3X8Wc0yen4TrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlY29sbGVjdG9y/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNS9weXJh/bWlkLW9mLWdpemEt/d2l0aC1zdGF0dWUt/a2h1ZnUuanBnP3dp/ZHRoPTI1NjAmaGVp/Z2h0PTE0NDAmcXVh/bGl0eT0xMDAmZHBy/PTI",
      description: "Commissioned the Great Pyramid of Giza, the oldest of the Seven Wonders of the Ancient World. His pyramid remained the tallest man-made structure for 3,800 years."
    },
    {
      id: "thutmose-iii",
      page: "thutmose_three.html",
      name: "Thutmose III",
      title: "The Napoleon of Egypt",
      dynasty: "18th Dynasty",
      reign: "1479–1425 BCE",
      image: "https://imgs.search.brave.com/LoP0qkaUuSKFs8j4YuB2OJ9I_BvxjKRhdxb2nBLbF8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg5/OTk2ODI4NS9waG90/by90aHV0bW9zZS1p/aWktb3ItdHV0aG1v/c2lzLWlpaS1raW5n/LW9mLWVneXB0LWdy/ZXl3YWNrZS1zdG9u/ZS1zdGF0dWUtbHV4/b3ItbXVzZXVtLWVn/eXB0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cDlNLThD/V2xFRm5XNjNaQU1f/T0pHY0VHWnB4V08t/Ym1mTUVLci1OSFNZ/PQ",
      description: "A military genius who conducted 17 successful campaigns, expanding Egypt's empire to its greatest territorial extent from Nubia to Syria."
    },
    {
      id: "seti-i",
      page: "pharaoh-seti-i.html",
      name: "Seti I",
      title: "The Great Builder",
      dynasty: "19th Dynasty",
      reign: "1290–1279 BCE",
      image: "https://imgs.search.brave.com/S3qoydGIaeb0rGHUn3ofxC_6lhoabxV-a8qGt1t79qg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/eW91cmVneXB0dG91/cnMuY29tL3N0b3Jh/Z2UvMTE4NC8xNjc5/Mzg4NjgxLmpwZw",
      description: "Father of Ramses II. Restored Egyptian prestige after the Amarna period. Built the magnificent temple at Abydos and the hypostyle hall at Karnak."
    }
  ];

  // ---- Pharaoh Card Template ----
  // The whole card is a link to the pharaoh's dedicated page (data-page).
  // Add each page later at the filename in `page` above and it will just work.
  window.pharaohTemplate = (p) => `
    <div class="col-md-6 col-lg-4 mb-4 fade-in">
      <a class="card card-egypt h-100 pharaoh-card" href="${p.page}" data-pharaoh-id="${p.id}">
        <img src="${p.image}" class="card-img-top" alt="${p.name}" onerror="this.src='https://placehold.co/400x250/1a1200/d4af37?text=${encodeURIComponent(p.name)}'">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="text-gold mb-1" style="font-size:0.85rem;letter-spacing:0.1em">${p.title}</p>
          <p class="card-text">${p.description}</p>
          <div class="artifact-meta">
            <span class="artifact-era">${p.dynasty}</span>
            <span class="artifact-room">${p.reign}</span>
          </div>
        </div>
      </a>
    </div>
  `;

  if (document.getElementById('pharaohs-grid')) {
    window.renderGrid('pharaohs-grid', window.pharaohsData, window.pharaohTemplate);
  }
});
