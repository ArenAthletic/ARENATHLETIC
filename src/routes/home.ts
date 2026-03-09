import { head, closingTags, nav, footer, marquee, arrowRight, iconTee, iconHoodie, iconCap, iconLayer } from '../components'

export const homePage = () => `
${head('Home', 'AREN ATHLETIC — Apparel built for training and everything after. Minimal. Durable. Elevated.')}

${nav('home')}

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grain"></div>
  <div class="hero-content container">
    <div class="hero-eyebrow">AREN ATHLETIC</div>
    <h1 class="hero-headline">Apparel built for training—and everything after.</h1>
    <p class="hero-subline">Minimal. Durable. Elevated. Designed for the gym, the street, and the pace of New York.</p>
    <div class="hero-ctas">
      <a href="/shop" class="btn btn--primary">Shop Apparel</a>
      <a href="/contact" class="btn btn--outline-white">Join the Community</a>
    </div>
    <div class="hero-microcopy">
      <span>New drops + core staples • Shipping nationwide</span>
      <span>Quiet confidence. Built to wear daily.</span>
    </div>
  </div>
  <div class="hero-scroll-line"></div>
</section>

${marquee()}

<section class="category-strip">
  <div class="container">
    <div class="category-grid">
      <a href="/shop" class="category-item" style="text-decoration:none;display:block;">
        <div class="category-number">01</div>
        <h2 class="category-title">New Arrivals</h2>
        <p class="category-desc">Latest drops, limited runs.</p>
        <span class="category-arrow">${arrowRight()}</span>
      </a>
      <a href="/shop" class="category-item" style="text-decoration:none;display:block;">
        <div class="category-number">02</div>
        <h2 class="category-title">Core Essentials</h2>
        <p class="category-desc">The foundation—clean, repeatable, durable.</p>
        <span class="category-arrow">${arrowRight()}</span>
      </a>
      <a href="/shop" class="category-item" style="text-decoration:none;display:block;">
        <div class="category-number">03</div>
        <h2 class="category-title">Outerwear</h2>
        <p class="category-desc">Layers built for movement and weather.</p>
        <span class="category-arrow">${arrowRight()}</span>
      </a>
    </div>
  </div>
</section>

<section class="product-section section">
  <div class="container">
    <div class="section-header">
      <div>
        <div class="text-eyebrow mb-sm">Featured Apparel</div>
        <h2 class="text-h2">The standard pieces.</h2>
      </div>
      <a href="/shop" class="btn btn--ghost">View All ${arrowRight()}</a>
    </div>
    <div class="product-grid">
      <a href="/shop" style="text-decoration:none;color:inherit;" class="product-card">
        <div class="product-image"><div class="product-image-placeholder">${iconTee()}</div><div class="product-tag">Core</div></div>
        <div class="product-name">Core Tee</div>
        <div class="product-desc">Everyday fit. Built to last.</div>
        <div class="product-price">Shop</div>
      </a>
      <a href="/shop" style="text-decoration:none;color:inherit;" class="product-card">
        <div class="product-image" style="background:#ece3cf;"><div class="product-image-placeholder">${iconHoodie()}</div></div>
        <div class="product-name">Heavyweight Hoodie</div>
        <div class="product-desc">Structured warmth for daily wear.</div>
        <div class="product-price">Shop</div>
      </a>
      <a href="/shop" style="text-decoration:none;color:inherit;" class="product-card">
        <div class="product-image" style="background:#d6d0c4;"><div class="product-image-placeholder">${iconLayer()}</div><div class="product-tag">New</div></div>
        <div class="product-name">Performance Layer</div>
        <div class="product-desc">Training-ready. Street-ready.</div>
        <div class="product-price">Shop</div>
      </a>
      <a href="/shop" style="text-decoration:none;color:inherit;" class="product-card">
        <div class="product-image" style="background:#e0d2b2;"><div class="product-image-placeholder">${iconCap()}</div></div>
        <div class="product-name">Essential Cap</div>
        <div class="product-desc">Clean finish, all week.</div>
        <div class="product-price">Shop</div>
      </a>
    </div>
  </div>
</section>

<section class="philosophy-section">
  <div class="container">
    <div class="philosophy-inner">
      <div class="philosophy-left">
        <div class="text-eyebrow">Brand Philosophy</div>
        <h2 class="philosophy-headline">The standard is the standard.</h2>
        <p class="philosophy-copy">AREN is built on discipline, presence, and consistency —apparel designed to perform in training and carry the standard everywhere else in life.</p>
        <div style="margin-top:3rem;">
          <a href="/about" class="btn btn--outline-white">About AREN ${arrowRight()}</a>
        </div>
      </div>
      <div class="philosophy-right">
        <div class="philosophy-stat">
          <div class="philosophy-stat-number">NYC</div>
          <div class="philosophy-stat-label">Home Chapter — Five Boroughs</div>
        </div>
        <div class="philosophy-stat">
          <div class="philosophy-stat-number">Daily</div>
          <div class="philosophy-stat-label">Standard — Not Seasonal</div>
        </div>
        <div class="philosophy-stat">
          <div class="philosophy-stat-number">One</div>
          <div class="philosophy-stat-label">System — Built to Perform</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="street-miles-section">
  <div class="container">
    <div class="street-miles-inner">
      <div class="street-miles-visual">
        <div class="street-miles-visual-inner">
          <div class="street-miles-visual-tag">SMNYC / FIVE BOROUGH CHAPTER</div>
          <div class="street-miles-visual-headline">Do the work.<br>Carry the weight.</div>
        </div>
      </div>
      <div class="street-miles-content">
        <div class="text-eyebrow mb-sm">Street Miles</div>
        <h2 class="text-h2" style="margin-bottom:1.25rem;">Street Miles NYC</h2>
        <p class="text-body" style="margin-bottom:2.5rem;max-width:42ch;">A weekly run club built on exploration, effort, and community—moving through the city together.</p>
        <div class="street-miles-stats">
          <div><div class="sm-stat-value">5</div><div class="sm-stat-label">Boroughs</div></div>
          <div><div class="sm-stat-value">Sun</div><div class="sm-stat-label">09:00 Sharp</div></div>
          <div><div class="sm-stat-value">NYC</div><div class="sm-stat-label">Home Chapter</div></div>
        </div>
        <a href="/street-miles" class="btn btn--outline">Explore Street Miles ${arrowRight()}</a>
      </div>
    </div>
  </div>
</section>

<section class="signup-section">
  <div class="container">
    <div class="signup-inner">
      <div class="signup-left">
        <div class="text-eyebrow">Community Signup</div>
        <h2 class="text-h2" style="margin-top:1.25rem;margin-bottom:1rem;">Join the AREN list.</h2>
        <p class="signup-copy">Drops, restocks, and community updates—sent when it matters.</p>
      </div>
      <div class="signup-right">
        <form class="signup-form" onsubmit="handleSignup(event)">
          <div class="signup-form-row">
            <input type="email" class="signup-input" placeholder="Email address" required id="signup-email" />
            <button type="submit" class="signup-btn">Join</button>
          </div>
          <p class="signup-disclaimer">No spam. Unsubscribe any time.</p>
          <div id="signup-success" style="display:none;" class="text-eyebrow">You're on the list.</div>
        </form>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
