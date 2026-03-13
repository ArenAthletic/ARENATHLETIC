/* ================================================================
   AREN ATHLETIC — Frontend Interactions
   Minimal interactions only: nav, hover, form handling
   ================================================================ */

(function () {
  'use strict';

  // ── NAV: scroll behaviour ──────────────────────────────────────
  const mainNav = document.getElementById('main-nav');
  let lastScrollY = window.scrollY;

  function onScroll() {
    const scrollY = window.scrollY;
    if (mainNav) {
      if (scrollY > 60) {
        mainNav.style.borderBottomColor = 'rgba(232,229,222,0.9)';
        mainNav.style.backdropFilter = 'blur(12px)';
        mainNav.style.background = 'rgba(255,255,255,0.96)';
      } else {
        mainNav.style.borderBottomColor = '';
        mainNav.style.backdropFilter = '';
        mainNav.style.background = '';
      }
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── NAV: mobile hamburger ──────────────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('.nav-mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── SHOP: filter tabs ──────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.shop-filter');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  // ── SIGNUP FORM ────────────────────────────────────────────────
  window.handleSignup = function (e) {
    e.preventDefault();
    const email = document.getElementById('signup-email');
    const success = document.getElementById('signup-success');
    const btn = e.target.querySelector('.signup-btn');

    if (!email || !email.value) return;

    // Simulate submit
    if (btn) {
      btn.textContent = '...';
      btn.disabled = true;
    }

    setTimeout(function () {
      if (btn) btn.style.display = 'none';
      if (email) email.style.display = 'none';
      if (success) {
        success.style.display = 'block';
        success.style.fontFamily = 'var(--font-mono)';
        success.style.fontSize = '0.625rem';
        success.style.letterSpacing = '0.2em';
        success.style.textTransform = 'uppercase';
        success.style.color = 'var(--color-black)';
        success.textContent = "You're on the list.";
      }
    }, 900);
  };

  // ── CONTACT FORM ───────────────────────────────────────────────
  window.handleContact = function (e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    const submitBtn = form ? form.querySelector('[type="submit"]') : null;

    if (submitBtn) {
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
    }

    setTimeout(function () {
      if (form) {
        Array.from(form.elements).forEach(function (el) {
          if (el.tagName !== 'BUTTON') el.style.display = 'none';
        });
        if (submitBtn) submitBtn.style.display = 'none';
      }
      if (success) {
        success.style.display = 'block';
      }
    }, 1000);
  };

  // ── PRODUCT CARD hover ─────────────────────────────────────────
  // (CSS handles most hover states; JS only used for future cart interactions)

  // ── ACTIVE NAV LINK ────────────────────────────────────────────
  // Already set server-side via class="active"

  // ── INTERSECTION OBSERVER: fade-in sections ───────────────────
  const fadeEls = document.querySelectorAll(
    '.category-item, .product-card, .value-item, .protocol-item, .testimonial-item, .service-row, .training-card'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)';
      observer.observe(el);
    });
  }

})();
