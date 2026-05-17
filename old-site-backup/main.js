/* ══════════════════════════════════════════════════════════════════════════
   PEVARIS — Shared JavaScript
   ══════════════════════════════════════════════════════════════════════════ */

// ── HAMBURGER MENU TOGGLE ──────────────────────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');
const navElement = document.getElementById('main-nav');

// Create overlay element inside nav for proper stacking
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
if (navElement) {
  navElement.appendChild(overlay);
}

function openMenu() {
  navLinks.classList.add('open');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when overlay is clicked
  overlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

// ── CURSOR GLOW ─────────────────────────────────────────────────────────────
const glow = document.getElementById('cursor-glow');
if (glow) {
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx;
  let cy = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function animateGlow() {
    cx += (mx - cx) * 0.1;
    cy += (my - cy) * 0.1;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(animateGlow);
  })();
}


// ── NAV SCROLL BEHAVIOUR ────────────────────────────────────────────────────
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── SCROLL REVEAL ───────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ── PARTICLE PARALLAX ───────────────────────────────────────────────────────
const particles = document.querySelectorAll('.particle');
if (particles.length > 0) {
  document.addEventListener('mousemove', e => {
    const px = e.clientX / window.innerWidth;
    const py = e.clientY / window.innerHeight;
    particles.forEach((p, i) => {
      const depth = 0.3 + (i % 4) * 0.2;
      const ox = (px - 0.5) * depth * 30;
      const oy = (py - 0.5) * depth * 20;
      p.style.transform = `translate(${ox}px, ${oy}px)`;
    });
  });
}
