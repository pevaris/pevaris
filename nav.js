/**
 * PEVARIS Navigation JavaScript
 * Handles: sticky scroll, services dropdown, mobile menu, active page, smooth scroll
 */

(function() {
  'use strict';

  // DOM Elements
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu__close');
  const servicesDropdown = document.querySelector('.nav__item--services');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

  // 1. Sticky Scroll Shadow
  function handleScroll() {
    if (!nav) return;

    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check on load

  // 2. Services Dropdown (Desktop)
  if (servicesDropdown) {
    const dropdownLink = servicesDropdown.querySelector('.nav__link--services');
    const dropdown = servicesDropdown.querySelector('.nav__dropdown');

    // Keyboard support
    if (dropdownLink) {
      dropdownLink.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          servicesDropdown.classList.toggle('is-open');
        }
        if (e.key === 'Escape') {
          servicesDropdown.classList.remove('is-open');
        }
      });
    }

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (!servicesDropdown.contains(e.target)) {
        servicesDropdown.classList.remove('is-open');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        servicesDropdown.classList.remove('is-open');
      }
    });
  }

  // 3. Mobile Menu
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (navToggle) navToggle.classList.add('is-active');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
    if (navToggle) navToggle.classList.remove('is-active');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      if (mobileMenu && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // 4. Active Page Detection
  function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    // Get the filename from the path
    const filename = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFilename = href.split('/').pop();

      // Check for exact match or index page
      if (linkFilename === filename ||
          (filename === '' && linkFilename === 'index.html') ||
          (filename === 'index.html' && linkFilename === 'index.html')) {
        link.classList.add('nav__link--active');
      }

      // Check if we're on a service page and "Services" should be active
      const servicePages = ['fractional-leadership.html', 'ai-strategy.html', 'technology-delivery.html', 'services.html'];
      if (servicePages.includes(filename) && link.classList.contains('nav__link--services')) {
        link.classList.add('nav__link--active');
      }
    });

    mobileLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFilename = href.split('/').pop();

      if (linkFilename === filename ||
          (filename === '' && linkFilename === 'index.html')) {
        link.style.color = 'var(--color-accent)';
      }
    });
  }

  setActivePage();

  // 5. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Close mobile menu if open
        closeMobileMenu();

        // Scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // Handle hash on page load (for links like ai-strategy.html#training)
  function scrollToHashOnLoad() {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        // Small delay to ensure page is fully loaded
        setTimeout(function() {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }

  // Run on DOM ready and window load
  if (document.readyState === 'complete') {
    scrollToHashOnLoad();
  } else {
    window.addEventListener('load', scrollToHashOnLoad);
  }

})();
