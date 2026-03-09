import { head, closingTags, nav, footer, marquee, arrowRight, iconTee, iconHoodie, iconCap, iconLayer } from '../components'

export const shopPage = () => `
${head('Shop', 'AREN ATHLETIC — Composure under pressure. Performance-informed apparel built for daily standards, not trends.')}

${nav('shop')}

<!-- EXACT LIVE SITE HERO -->
<section style="padding-top:calc(68px + var(--space-lg));padding-bottom:var(--space-lg);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <h1 style="font-family:var(--font-serif);font-size:clamp(2.5rem,6vw,5rem);font-weight:400;letter-spacing:-0.025em;line-height:1.04;margin-bottom:1.5rem;">COMPOSURE UNDER PRESSURE.</h1>
    <p class="text-body" style="max-width:52ch;">Performance-informed apparel built for daily standards, not trends.</p>
  </div>
</section>

<!-- DESIGN PHILOSOPHY -->
<section style="padding:3rem 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="text-align:center;margin-bottom:2rem;">Design Philosophy</div>
    <h2 style="font-family:var(--font-serif);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:400;letter-spacing:-0.015em;text-align:center;margin-bottom:3rem;">FUNCTION. RESTRAINT. DURABILITY.</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--color-warm-gray);">
      <div style="padding:2.5rem 2rem;border-right:1px solid var(--color-warm-gray);">
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">Training</div>
        <p class="text-body-sm">Engineered for high-output training environments.</p>
      </div>
      <div style="padding:2.5rem 2rem;border-right:1px solid var(--color-warm-gray);">
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">Daily Wear</div>
        <p class="text-body-sm">Structured comfort for transition and recovery days.</p>
      </div>
      <div style="padding:2.5rem 2rem;">
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">Outer Layers</div>
        <p class="text-body-sm">Technical protection for environmental defense.</p>
      </div>
    </div>
  </div>
</section>

<!-- FILTER BAR -->
<div class="shop-filter-bar">
  <div class="container">
    <div class="shop-filters">
      <span class="shop-filter active" data-filter="all">Shop System</span>
      <span class="shop-filter" data-filter="new">New Arrivals</span>
      <span class="shop-filter" data-filter="core">Core Essentials</span>
      <span class="shop-filter" data-filter="outerwear">Outerwear</span>
      <span class="shop-filter" data-filter="accessories">Accessories</span>
    </div>
  </div>
</div>

<!-- PRODUCT GRID -->
<section class="shop-grid">
  <div class="container">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3rem;padding-bottom:1.5rem;border-bottom:1px solid var(--color-warm-gray);">
      <div class="text-eyebrow">All Pieces</div>
      <div class="text-eyebrow" style="color:var(--color-black);">Current Collection</div>
    </div>
    <div class="shop-product-grid">

      <div class="product-card">
        <div class="product-image"><div class="product-image-placeholder">${iconTee()}</div><div class="product-tag">Core</div></div>
        <div class="product-name">AREN Athletic Men's Box Tee — White Tonal</div>
        <div class="product-desc">Everyday fit. Built to last.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#1a1a18;"><div class="product-image-placeholder" style="opacity:0.5;">${iconTee()}</div></div>
        <div class="product-name">AREN Athletic Boxy Tee — Black</div>
        <div class="product-desc">The foundation. Wear daily.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#ede9e0;"><div class="product-image-placeholder">${iconTee()}</div><div class="product-tag">New</div></div>
        <div class="product-name">AREN Athletic Boxy Tee — Sand</div>
        <div class="product-desc">Oversized. Relaxed. Clean.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#f0ede8;"><div class="product-image-placeholder">${iconHoodie()}</div></div>
        <div class="product-name">Heavyweight Hoodie — Stone</div>
        <div class="product-desc">Structured warmth for daily wear.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#111;"><div class="product-image-placeholder" style="opacity:0.4;">${iconHoodie()}</div><div class="product-tag">New</div></div>
        <div class="product-name">Heavyweight Hoodie — Black</div>
        <div class="product-desc">Structured warmth. Clean finish.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#e8e8e5;"><div class="product-image-placeholder">${iconLayer()}</div></div>
        <div class="product-name">Performance Layer</div>
        <div class="product-desc">Training-ready. Street-ready.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#eae7e0;"><div class="product-image-placeholder">${iconTee()}</div></div>
        <div class="product-name">Training Short — Slate</div>
        <div class="product-desc">Built for movement. Cut clean.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#ededeb;"><div class="product-image-placeholder">${iconCap()}</div></div>
        <div class="product-name">Essential Cap — Stone</div>
        <div class="product-desc">Clean finish. All week.</div>
        <div class="product-price">Shop Now</div>
      </div>

      <div class="product-card">
        <div class="product-image" style="background:#111;"><div class="product-image-placeholder" style="opacity:0.4;">${iconCap()}</div></div>
        <div class="product-name">Essential Cap — Black</div>
        <div class="product-desc">The standard. Everyday.</div>
        <div class="product-price">Shop Now</div>
      </div>

    </div>
  </div>
</section>

<!-- WHY AREN APPAREL — NOT STREETWEAR. A SYSTEM. -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;margin-top:var(--space-lg);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2rem;">Why AREN Apparel</div>
        <h2 style="font-family:var(--font-serif);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:400;color:#fff;line-height:1.1;letter-spacing:-0.015em;margin-bottom:1.75rem;">NOT STREETWEAR.<br>A SYSTEM.</h2>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);max-width:44ch;margin-bottom:1.5rem;">AREN apparel exists as an extension of the athlete's standard.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);max-width:44ch;margin-bottom:1.5rem;">Not driven by seasonal trends or streetwear cycles, but by discipline, restraint, and functional precision.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);max-width:44ch;margin-bottom:1.5rem;">Every piece is designed to hold up under training and carry that same standard into the rest of life.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);max-width:44ch;margin-bottom:2rem;">This is not clothing for spectators.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.65);max-width:44ch;font-weight:500;">It's equipment for people who operate.</p>
      </div>
      <div style="border-left:1px solid rgba(255,255,255,0.08);padding-left:var(--space-xl);">
        <div style="margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,0.08);">
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:0.75rem;">Shipping</div>
          <p style="font-size:0.875rem;color:rgba(255,255,255,0.5);">Shipping nationwide on all orders.</p>
        </div>
        <div style="margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,0.08);">
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:0.75rem;">Quality Standard</div>
          <p style="font-size:0.875rem;color:rgba(255,255,255,0.5);">Built to last. Every piece carries the AREN standard.</p>
        </div>
        <div>
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:0.75rem;">Returns</div>
          <p style="font-size:0.875rem;color:rgba(255,255,255,0.5);">30-day return policy on unworn items.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
