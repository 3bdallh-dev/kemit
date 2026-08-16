/* ============================================
   EGYPTIAN MUSEUM - Base Engine
   Shared on every page: navbar, menu, fade-ins,
   back-to-top, toast, hero video fallback, grid helper.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ---- Mobile Off-canvas Menu Toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');
  if (navToggle && navLinks) {
    const openMenu = () => {
      navToggle.classList.add('open');
      navLinks.classList.add('open');
      navOverlay?.classList.add('show');
      document.body.classList.add('nav-open');
      navToggle.setAttribute('aria-expanded', 'true');
    };
    const closeMenu = () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navOverlay?.classList.remove('show');
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', () => {
      navToggle.classList.contains('open') ? closeMenu() : openMenu();
    });
    navOverlay?.addEventListener('click', closeMenu);
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ---- Intersection Observer for Fade-in ----
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => observer.observe(el));
  }

  // ---- Hero Video Fallback ----
  // If assets/video/hero-bg.mp4 hasn't been added yet (or fails to load),
  // fall back to the existing gradient/pattern background instead of a blank box.
  const heroVideoWrap = document.getElementById('hero-video-wrap');
  const heroVideo = heroVideoWrap?.querySelector('video');
  if (heroVideoWrap && heroVideo) {
    heroVideo.addEventListener('error', () => heroVideoWrap.classList.add('video-unavailable'));
    heroVideo.querySelectorAll('source').forEach(src => {
      src.addEventListener('error', () => heroVideoWrap.classList.add('video-unavailable'));
    });
    if (heroVideo.readyState === 0 && heroVideo.networkState === 3) {
      heroVideoWrap.classList.add('video-unavailable');
    }
  }

  // ---- Active Navigation Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-egypt').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Back to Top ----
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(backToTop);
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
  });

  // ---- Toast System ----
  window.showToast = function(message) {
    const existing = document.querySelector('.toast-egypt');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-egypt';
    toast.innerHTML = `<span style="font-size:1.2rem">𓂀</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  };

  // ---- Dynamic Grid Renderer ----
  // Usage: renderGrid(containerId, dataArray, templateFn)
  // Used by pharaohs.js and treasures.js to render their card grids.
  window.renderGrid = function(containerId, data, templateFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(templateFn).join('');
    // Re-observe new elements
    container.querySelectorAll('.fade-in').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  };

  console.log('𓂀 Egyptian Museum Base Engine Loaded');
});
