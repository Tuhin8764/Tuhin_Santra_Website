/* ============================================================================
   SCRIPT.JS
   ----------------------------------------------------------------------------
   Handles the interactive behavior of the site:
     1. Mobile menu open/close
     2. Highlighting the active nav link while scrolling
     3. Building the Projects section (tabs + cards) from projects-data.js
     4. The "View Project" modal that shows an embed / PDF / image
     5. Simple fade-in-on-scroll animation
     6. Certificate flip cards (Education section)
     7. Profile photo lightbox
     8. Work Experience "View Certificate" popup
     9. Contact form popup
     10. Typewriter effect on the hero role line (see "heroRoles" just below)

   You should not need to edit this file for everyday updates — edit your
   text in index.html and your projects in projects-data.js instead.
   The one exception is the list below, if you want to change the roles
   that type themselves out under your name on the Home section.
   ============================================================================ */

// EDIT: the roles that type out one-by-one under your name in the hero.
// Add, remove, or reorder lines here — the effect (type it out, pause,
// delete it, type the next one...) is handled automatically below.
const heroRoles = [
  "Business Analytics & Data Science | MBA",
  "Financial Analyst",
  "Dashboard Creator",
  "Data Cleaning and Reporting",
];

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------- 1. MOBILE NAV TOGGLE --------------------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close the mobile menu whenever a link is tapped
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  /* ---------------------- 2. ACTIVE LINK ON SCROLL ------------------------ */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  const highlightNav = () => {
    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 140; // offset for fixed navbar

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) currentId = section.id;
    });

    navAnchors.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", highlightNav);
  highlightNav();

  /* ---------------------- 3. SCROLL REVEAL ANIMATION ---------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ---------------------- 4. BUILD PROJECTS SECTION ----------------------- */
  // projectsData comes from projects-data.js (loaded before this file in index.html)
  const tabsContainer = document.getElementById("sheetTabs");
  const gridContainer = document.getElementById("projectsGrid");

  // Build the unique list of categories, with "All" pinned first
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  let activeCategory = "All";

  function renderTabs() {
    tabsContainer.innerHTML = categories
      .map(
        (cat) => `
        <button class="sheet-tab ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">
          ${cat}
        </button>`
      )
      .join("");

    tabsContainer.querySelectorAll(".sheet-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        renderTabs();
        renderGrid();
      });
    });
  }

  // Every card thumbnail now uses the project's "previewImage" (see
  // projects-data.js), regardless of its type — the type/fileUrl/embedCode
  // only control what opens in the pop-up when "View Project" is clicked.
  function thumbHTML(project) {
    const fallbackLabel =
      project.type === "pdf"
        ? "&#128196; PDF Preview"
        : project.type === "image"
        ? "&#128247; Image Preview"
        : "&#128200; Embedded Project";

    return `
      <img src="${project.previewImage}" alt="${project.title} preview"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <span class="project-thumb-fallback">${fallbackLabel}</span>`;
  }

  function renderGrid() {
    const list =
      activeCategory === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeCategory);

    if (list.length === 0) {
      gridContainer.innerHTML = `<div class="projects-empty">No projects in this category yet.</div>`;
      return;
    }

    gridContainer.innerHTML = list
      .map(
        (project) => `
        <div class="project-card reveal is-visible">
          <div class="project-thumb">
            ${thumbHTML(project)}
            <span class="project-type-badge">${project.type}</span>
          </div>
         <div class="project-body">
            <div class="project-meta-row">
              <span class="project-category-label">${project.category}</span>
              <span class="project-date">${project.date || ""}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
            </div>
            <button class="project-view-btn" data-id="${project.id}">View Project &rarr;</button>
          </div>
        </div>`
      )
      .join("");

    gridContainer.querySelectorAll(".project-view-btn").forEach((btn) => {
      btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
    });
  }

  renderTabs();
  renderGrid();

  /* ---------------------- 5. PROJECT MODAL (view embed/pdf/image) --------- */
  const modalOverlay = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalDesc = document.getElementById("modalDesc");
  const modalCloseBtn = document.getElementById("modalClose");

  function openModal(id) {
    const project = projectsData.find((p) => p.id === id);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;

    if (project.type === "embed") {
      // Your pasted embed HTML (e.g. Power BI / Streamlit / YouTube iframe) is inserted directly
      modalBody.innerHTML = project.embedCode;
    } else if (project.type === "pdf") {
      modalBody.innerHTML = `<embed src="${project.fileUrl}" type="application/pdf" />`;
    } else if (project.type === "image") {
      modalBody.innerHTML = `<img src="${project.fileUrl}" alt="${project.title}">`;
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalBody.innerHTML = ""; // stop any embedded video/audio/etc. from playing in the background
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal(); // click outside the box closes it
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ---------------------- 6. CERTIFICATE FLIP CARDS ------------------------ */
  // Clicking (or pressing Enter/Space on) an image-based certification card
  // flips it to reveal the certificate image on the back. Clicking again
  // flips it back. Link-based cards (class "cert-card-link") are real <a>
  // tags that just open their URL, so they're excluded here.
  document.querySelectorAll(".cert-card:not(.cert-card-link)").forEach((card) => {
    const flip = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flip();
      }
    });
  });

  /* ---------------------- 7. PROFILE PHOTO LIGHTBOX ------------------------ */
  // Clicking the round avatar in the navbar opens the same photo full-screen.
  const brandAvatarBtn = document.getElementById("brandAvatarBtn");
  const photoLightbox = document.getElementById("photoLightbox");
  const photoLightboxClose = document.getElementById("photoLightboxClose");

  function openPhotoLightbox() {
    photoLightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closePhotoLightbox() {
    photoLightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (brandAvatarBtn) {
    brandAvatarBtn.addEventListener("click", openPhotoLightbox);
    photoLightboxClose.addEventListener("click", closePhotoLightbox);
    photoLightbox.addEventListener("click", (e) => {
      if (e.target === photoLightbox) closePhotoLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePhotoLightbox();
    });
  }

  /* ---------------------- 8. WORK EXPERIENCE CERTIFICATE MODAL ------------- */
  // Any button with class "view-cert-btn" (see the Experience section in
  // index.html) opens its certificate — image or PDF — in this shared popup.
  const expCertModal = document.getElementById("expCertModal");
  const expCertModalTitle = document.getElementById("expCertModalTitle");
  const expCertModalBody = document.getElementById("expCertModalBody");
  const expCertModalClose = document.getElementById("expCertModalClose");

  function openExpCertModal(src, type, title) {
    expCertModalTitle.textContent = title || "Certificate";
    if (type === "pdf") {
      expCertModalBody.innerHTML = `<embed src="${src}" type="application/pdf" />`;
    } else {
      expCertModalBody.innerHTML = `<img src="${src}" alt="${title || "Certificate"}"
        onerror="this.outerHTML='<div style=&quot;padding:40px;text-align:center;font-family:var(--font-mono);color:var(--ink-faint);&quot;>Certificate image not found. Add it at ${src}</div>';">`;
    }
    expCertModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeExpCertModal() {
    expCertModal.classList.remove("open");
    expCertModalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".view-cert-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openExpCertModal(btn.dataset.certSrc, btn.dataset.certType, btn.dataset.certTitle);
    });
  });

  if (expCertModal) {
    expCertModalClose.addEventListener("click", closeExpCertModal);
    expCertModal.addEventListener("click", (e) => {
      if (e.target === expCertModal) closeExpCertModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeExpCertModal();
    });
  }

  /* ---------------------- 9. CONTACT FORM POPUP --------------------------- */
  // Button in the Contact section opens the Google Form (kept in a hidden
  // <template> in index.html) inside the same popup style used for projects.
  const openContactBtn = document.getElementById("openContactForm");
  const contactModal = document.getElementById("contactModal");
  const contactModalBody = document.getElementById("contactModalBody");
  const contactModalClose = document.getElementById("contactModalClose");
  const contactFormTemplate = document.getElementById("contactFormTemplate");

  function openContactModal() {
    // Clone the iframe fresh each time so it always loads a blank form
    contactModalBody.innerHTML = "";
    contactModalBody.appendChild(contactFormTemplate.content.cloneNode(true));
    contactModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeContactModal() {
    contactModal.classList.remove("open");
    contactModalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  if (openContactBtn) {
    openContactBtn.addEventListener("click", openContactModal);
    contactModalClose.addEventListener("click", closeContactModal);
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeContactModal();
    });
  }

  /* ---------------------- 10. HERO ROLE TYPEWRITER -------------------------- */
  // Types out each role in heroRoles (defined at the top of this file), pauses,
  // deletes it, then moves to the next one — looping forever.
  const typewriterEl = document.getElementById("heroTypewriter");

  if (typewriterEl && heroRoles.length) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Skip the animation for people who've asked for reduced motion —
      // just show the first role as static text.
      typewriterEl.textContent = heroRoles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const TYPE_SPEED = 55; // ms per character while typing
      const DELETE_SPEED = 30; // ms per character while deleting
      const HOLD_AFTER_TYPE = 1500; // pause once a role is fully typed
      const HOLD_AFTER_DELETE = 350; // pause once a role is fully deleted

      function tick() {
        const currentRole = heroRoles[roleIndex];

        if (!isDeleting) {
          charIndex++;
          typewriterEl.textContent = currentRole.slice(0, charIndex);

          if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(tick, HOLD_AFTER_TYPE);
            return;
          }
        } else {
          charIndex--;
          typewriterEl.textContent = currentRole.slice(0, charIndex);

          if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % heroRoles.length;
            setTimeout(tick, HOLD_AFTER_DELETE);
            return;
          }
        }

        setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
      }

      tick();
    }
  }

  /* ---------------------- 11. FOOTER YEAR ---------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
