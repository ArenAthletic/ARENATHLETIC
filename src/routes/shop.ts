import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const shopPage = () => `
${head('Shop', 'AREN ATHLETIC — Composure under pressure. Performance-informed apparel built for daily standards, not trends.')}

${nav('shop')}

<!-- EXACT LIVE SITE HERO -->
<section style="padding-top:calc(68px + var(--space-lg));padding-bottom:var(--space-lg);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <h1 style="font-family:var(--font-display);font-size:clamp(2.5rem,6vw,5.5rem);font-weight:700;letter-spacing:-0.01em;line-height:0.95;text-transform:uppercase;margin-bottom:1.5rem;">COMPOSURE UNDER PRESSURE.</h1>
    <p class="text-body" style="max-width:52ch;">Performance-informed apparel built for daily standards, not trends.</p>
  </div>
</section>

<!-- DESIGN PHILOSOPHY -->
<section style="padding:3rem 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="text-align:center;margin-bottom:2rem;">Design Philosophy</div>
    <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3.2rem);font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;line-height:0.95;text-align:center;margin-bottom:3rem;">FUNCTION. RESTRAINT. DURABILITY.</h2>
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

      <!-- AREN Athletic Men's Box Tee — White Tonal (Core) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-men-s-box-tee-white-tonal" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#f2efe9;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_cac8109f5c5640c799f7949e87585b47~mv2.png/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_cac8109f5c5640c799f7949e87585b47~mv2.png" alt="AREN Athletic Men's Box Tee — White Tonal" loading="lazy" />
          <div class="product-tag">Core</div>
        </div>
        <div class="product-name">AREN Athletic Men's Box Tee — White Tonal</div>
        <div class="product-desc">Everyday fit. Built to last.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Men's Box Tee — White Tonal (lifestyle detail) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-men-s-box-tee-white-tonal" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#ede8df;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_fa6a6950ad304148a7e28983969c42ff~mv2.jpg/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_fa6a6950ad304148a7e28983969c42ff~mv2.jpg" alt="AREN Athletic Men's Box Tee — White Tonal Detail" loading="lazy" />
        </div>
        <div class="product-name">AREN Athletic Men's Box Tee — White Tonal</div>
        <div class="product-desc">Training-ready. Street-ready.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Men's Box Tee — White Tonal (fit view) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-men-s-box-tee-white-tonal" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#e8e3d8;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_ba5a6c41c57046e1bb1c0c7b5c5bca6a~mv2.jpg/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_ba5a6c41c57046e1bb1c0c7b5c5bca6a~mv2.jpg" alt="AREN Athletic Men's Box Tee — Fit" loading="lazy" />
        </div>
        <div class="product-name">AREN Athletic Men's Box Tee — Fit</div>
        <div class="product-desc">Built for movement. Cut clean.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Boxy Tee — Black -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-boxy-tee" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#1e1e1c;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_e81c756c4aaa4045ba6b10d2aeb788d6~mv2.png/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_e81c756c4aaa4045ba6b10d2aeb788d6~mv2.png" alt="AREN Athletic Boxy Tee — Black" loading="lazy" />
        </div>
        <div class="product-name">AREN Athletic Boxy Tee — Black</div>
        <div class="product-desc">The foundation. Wear daily.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Boxy Tee — Sand (New) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-boxy-tee" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#e8dfc8;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_03861e90d70046c5801955cab544ec91~mv2.png/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_03861e90d70046c5801955cab544ec91~mv2.png" alt="AREN Athletic Boxy Tee — Sand" loading="lazy" />
          <div class="product-tag">New</div>
        </div>
        <div class="product-name">AREN Athletic Boxy Tee — Sand</div>
        <div class="product-desc">Oversized. Relaxed. Clean.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Boxy Tee — Stone -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-boxy-tee" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#d8d3c5;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_5b4957dfe7b148b0b720992a3f94e263~mv2.png/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_5b4957dfe7b148b0b720992a3f94e263~mv2.png" alt="AREN Athletic Boxy Tee — Stone" loading="lazy" />
        </div>
        <div class="product-name">AREN Athletic Boxy Tee — Stone</div>
        <div class="product-desc">Clean lines. All-day wear.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Boxy Tee — Warm Gray (New) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-boxy-tee" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#c8c3b6;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_50ce280989c9408c88ceb63c582e97e9~mv2.png/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_50ce280989c9408c88ceb63c582e97e9~mv2.png" alt="AREN Athletic Boxy Tee — Warm Gray" loading="lazy" />
          <div class="product-tag">New</div>
        </div>
        <div class="product-name">AREN Athletic Boxy Tee — Warm Gray</div>
        <div class="product-desc">Structured warmth. Clean finish.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

      <!-- AREN Athletic Men's Box Tee — White Tonal (flat lay) -->
      <a href="https://www.arenathletic.com/product-page/aren-athletic-men-s-box-tee-white-tonal" target="_blank" rel="noopener noreferrer" class="product-card" style="text-decoration:none;color:inherit;">
        <div class="product-image" style="background:#f5f2ed;">
          <img class="product-img" src="https://static.wixstatic.com/media/8a3301_15010477e39e4b969f729318ac47f8b0~mv2.jpg/v1/fill/w_480,h_640,al_c,q_85,enc_auto/8a3301_15010477e39e4b969f729318ac47f8b0~mv2.jpg" alt="AREN Athletic Men's Box Tee — White Tonal Flat Lay" loading="lazy" />
        </div>
        <div class="product-name">AREN Athletic Men's Box Tee — Flat Lay</div>
        <div class="product-desc">The everyday standard.</div>
        <div class="product-price">Shop Now ${arrowRight()}</div>
      </a>

    </div>
  </div>
</section>

<!-- WHY AREN APPAREL — NOT STREETWEAR. A SYSTEM. -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;margin-top:var(--space-lg);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2rem;">Why AREN Apparel</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3.2rem);font-weight:700;color:#fff;line-height:0.95;letter-spacing:-0.01em;text-transform:uppercase;margin-bottom:1.75rem;">NOT STREETWEAR.<br>A SYSTEM.</h2>
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
