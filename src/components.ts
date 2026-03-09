// shared layout components — nav, footer, head
export const head = (title: string, description: string = '') => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${description || 'AREN ATHLETIC — Apparel built for training and everything after. Minimal. Durable. Elevated.'}" />
  <title>${title} — AREN ATHLETIC</title>
  <!-- Grotesk fonts preloaded from Wix CDN (@font-face in styles.css) -->
  <!-- Tusker Grotesk Ultra Condensed w700 — H1/hero display (exact match arenathletic.com) -->
  <link rel="preconnect" href="https://static.parastorage.com" crossorigin />
  <link rel="preload" as="font" type="font/woff2" crossorigin
        href="https://static.parastorage.com/fonts/v2/3b3d672e-0986-43ae-b3bb-be1d200fa6b9/v1/tusker-grotesk-ultra-condensed.latin.woff2" />
  <!-- Neue Haas Grotesk Display Pro w700 — section headings -->
  <link rel="preload" as="font" type="font/woff2" crossorigin
        href="https://static.parastorage.com/fonts/v2/29384c45-df1d-4d28-a0c3-3ed95c653ff4/v1/neue-haas-grotesk-display-pro.latin.woff2" />
  <!-- Neue Haas Grotesk Display Pro w400 — body copy -->
  <link rel="preload" as="font" type="font/woff2" crossorigin
        href="https://static.parastorage.com/fonts/v2/53e2d229-a577-4be1-ab95-07687ab57be1/v1/neue-haas-grotesk-display-pro.latin.woff2" />
  <!-- IBM Plex Sans — labels / eyebrows / UI (Google Fonts) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/static/styles.css" />
  <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
</head>
<body>
`

export const closingTags = () => `
  <script src="/static/app.js"></script>
</body>
</html>
`

export const nav = (activePage: string = '') => `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">AREN ATHLETIC</a>
    
    <div class="nav-links">
      <a href="/" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
      <a href="/about" class="nav-link ${activePage === 'about' ? 'active' : ''}">About AREN</a>
      <a href="/training" class="nav-link ${activePage === 'training' ? 'active' : ''}">Training</a>
      <a href="/services" class="nav-link ${activePage === 'services' ? 'active' : ''}">Services</a>
      <a href="/street-miles" class="nav-link ${activePage === 'street-miles' ? 'active' : ''}">Street Miles NYC</a>
      <a href="/shop" class="nav-link ${activePage === 'shop' ? 'active' : ''}">Shop</a>
      <a href="/contact" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact / Join</a>
    </div>

    <div class="nav-actions">
      <a href="/login" class="nav-action-link">Log In</a>
      <a href="/shop" class="nav-cta">Shop Now</a>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</nav>

<div class="nav-mobile" id="nav-mobile">
  <div class="nav-mobile-links">
    <a href="/" class="nav-mobile-link">Home</a>
    <a href="/about" class="nav-mobile-link">About AREN</a>
    <a href="/training" class="nav-mobile-link">Training</a>
    <a href="/services" class="nav-mobile-link">Services</a>
    <a href="/street-miles" class="nav-mobile-link">Street Miles NYC</a>
    <a href="/shop" class="nav-mobile-link">Shop</a>
    <a href="/contact" class="nav-mobile-link">Contact / Join</a>
    <a href="/login" class="nav-mobile-link">Log In</a>
  </div>
</div>
`

export const footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-brand-name">AREN ATHLETIC</div>
        <div class="footer-brand-taglines">
          <span class="footer-brand-tagline">SMNYC: FIVE BOROUGH CHAPTER</span>
          <span class="footer-brand-tagline">DISCIPLINE AND PERFORMANCE.</span>
          <span class="footer-brand-tagline">AREN ATHLETIC UNIFORM.</span>
        </div>
        <div class="footer-social">
          <a href="#" class="footer-social-link">IG</a>
          <a href="#" class="footer-social-link">TW</a>
          <a href="#" class="footer-social-link">YT</a>
        </div>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">ECOSYSTEM</div>
        <div class="footer-links">
          <a href="/about" class="footer-link">About AREN</a>
          <a href="/training" class="footer-link">Training</a>
          <a href="/services" class="footer-link">Services</a>
          <a href="/street-miles" class="footer-link">Street Miles NYC</a>
          <a href="/contact" class="footer-link">Join the Community</a>
        </div>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">ACCESS</div>
        <div class="footer-links">
          <a href="/shop" class="footer-link">Shop Apparel</a>
          <a href="/shop" class="footer-link">New Arrivals</a>
          <a href="/shop" class="footer-link">Core Essentials</a>
          <a href="/shop" class="footer-link">Outerwear</a>
          <a href="/login" class="footer-link">Log In</a>
        </div>
      </div>

      <div class="footer-col">
        <div class="footer-col-title">NATIONAL HUB NETWORK.</div>
        <div class="footer-links">
          <a href="mailto:info@arenathletic.com" class="footer-link">INFO@ARENATHLETIC.COM</a>
          <span class="footer-link" style="cursor:default;">AREN ATHLETIC COLLECTIVE.</span>
          <span class="footer-link" style="cursor:default;">STRUCTURED PERFORMANCE.</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <span class="footer-identity-line">AREN ATHLETIC — NEW YORK CITY</span>
        <span class="footer-copyright">© ${new Date().getFullYear()} AREN ATHLETIC. ALL RIGHTS RESERVED.</span>
      </div>
      <div style="display:flex;gap:2rem;">
        <a href="/privacy" class="footer-copyright" style="text-decoration:none;">PRIVACY</a>
        <a href="/terms" class="footer-copyright" style="text-decoration:none;">TERMS</a>
      </div>
    </div>
  </div>
</footer>
`

export const marquee = () => `
<div class="marquee-strip">
  <div class="marquee-track">
    <span class="marquee-text">AREN ATHLETIC <span class="marquee-sep">—</span> NEW YORK CITY <span class="marquee-sep">—</span> DISCIPLINE AND PERFORMANCE <span class="marquee-sep">—</span> STREET MILES NYC <span class="marquee-sep">—</span> FIVE BOROUGH CHAPTER <span class="marquee-sep">—</span> STRUCTURED PERFORMANCE <span class="marquee-sep">—</span> AREN ATHLETIC COLLECTIVE <span class="marquee-sep">—</span> APPAREL BUILT FOR TRAINING <span class="marquee-sep">—</span></span>
    <span class="marquee-text">AREN ATHLETIC <span class="marquee-sep">—</span> NEW YORK CITY <span class="marquee-sep">—</span> DISCIPLINE AND PERFORMANCE <span class="marquee-sep">—</span> STREET MILES NYC <span class="marquee-sep">—</span> FIVE BOROUGH CHAPTER <span class="marquee-sep">—</span> STRUCTURED PERFORMANCE <span class="marquee-sep">—</span> AREN ATHLETIC COLLECTIVE <span class="marquee-sep">—</span> APPAREL BUILT FOR TRAINING <span class="marquee-sep">—</span></span>
  </div>
</div>
`

// SVG icon helpers
export const arrowRight = () => `<svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M8.5 1L12.5 5L8.5 9M1 5H12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`
export const iconTee = () => `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M25 15 L10 35 L25 40 L25 85 L75 85 L75 40 L90 35 L75 15 C75 15 65 25 50 25 C35 25 25 15 25 15Z"/></svg>`
export const iconHoodie = () => `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M30 10 Q50 5 70 10 L85 25 L75 30 L75 88 L25 88 L25 30 L15 25 Z M30 10 Q40 30 50 30 Q60 30 70 10"/></svg>`
export const iconCap = () => `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M15 60 Q15 35 50 32 Q85 35 85 60 Z M15 60 Q5 62 8 68 L85 68"/></svg>`
export const iconLayer = () => `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 15 L10 30 L20 35 L20 85 L80 85 L80 35 L90 30 L80 15 L65 20 L65 50 L35 50 L35 20 Z"/></svg>`
