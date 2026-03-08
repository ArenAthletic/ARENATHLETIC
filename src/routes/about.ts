import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const aboutPage = () => `
${head('About AREN', 'AREN ATHLETIC — Built on discipline, presence, and consistency. The standard is the standard.')}

${nav('about')}

<!-- PAGE HERO -->
<section class="page-hero page-hero--dark">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:2rem;">About AREN</div>
    <h1 class="text-display" style="color:#fff;max-width:16ch;margin-bottom:2rem;">
      Not a brand.<br>A standard.
    </h1>
    <p style="font-size:1.0625rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:46ch;">
      AREN was built for the athlete who operates with discipline in every domain—training, dress, movement, and mindset.
    </p>
  </div>
</section>

${marquee()}

<!-- ABOUT INTRO -->
<section class="about-intro section">
  <div class="container">
    <div class="about-intro-inner">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">Origin</div>
        <h2 class="text-h2" style="margin-bottom:2rem;max-width:18ch;">Built in New York.<br>Designed for everywhere.</h2>
      </div>
      <div>
        <p class="text-body" style="margin-bottom:1.75rem;">
          AREN ATHLETIC emerged from a simple premise: the gear athletes wear should reflect the same discipline they bring to training. Not loud. Not trend-driven. Functional, restrained, and durable.
        </p>
        <p class="text-body" style="margin-bottom:1.75rem;">
          New York City is the proving ground—an environment that demands performance at all hours, across all environments. AREN apparel is designed for that pace and that standard.
        </p>
        <p class="text-body">
          Every piece is engineered to hold up under high-output training and carry the same standard off the floor, onto the street, and through the rest of the day.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="about-values section--sm" style="border-top:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:3rem;">Core Values</div>
    <div class="values-grid">
      
      <div class="value-item">
        <div class="value-number">01</div>
        <h3 class="value-title">Discipline</h3>
        <p class="value-copy">
          The standard doesn't change based on mood, season, or environment. AREN is built on this principle—consistent execution, every day.
        </p>
      </div>
      
      <div class="value-item">
        <div class="value-number">02</div>
        <h3 class="value-title">Restraint</h3>
        <p class="value-copy">
          No noise. No excess. Every design decision is deliberate—removing what isn't necessary and refining what remains until it holds.
        </p>
      </div>
      
      <div class="value-item">
        <div class="value-number">03</div>
        <h3 class="value-title">Precision</h3>
        <p class="value-copy">
          Functional precision over trend. Each piece is built to perform under training and carry that same finish into everything else.
        </p>
      </div>
      
    </div>
  </div>
</section>

<!-- BRAND STATEMENT -->
<section class="about-statement">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2.5rem;text-align:center;">The AREN Position</div>
    <h2 class="about-statement-headline">
      AREN apparel exists as an extension of the athlete's standard.
    </h2>
    <p style="font-family:var(--font-mono);font-size:0.875rem;line-height:1.75;color:rgba(255,255,255,0.45);max-width:52ch;margin:0 auto 3.5rem;text-align:center;">
      Not driven by seasonal trends or streetwear cycles, but by discipline, restraint, and functional precision. Every piece is designed to hold up under training and carry that same standard into the rest of life. This is not clothing for spectators. It's equipment for people who operate.
    </p>
    <div style="text-align:center;">
      <a href="/shop" class="btn btn--outline-white">Shop the Collection ${arrowRight()}</a>
    </div>
  </div>
</section>

<!-- APPAREL PHILOSOPHY -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="about-intro-inner">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">Design Philosophy</div>
        <h2 class="text-h2" style="margin-bottom:2rem;max-width:16ch;">Function. Restraint. Durability.</h2>
        <a href="/shop" class="btn btn--outline" style="margin-top:1rem;">Shop Apparel ${arrowRight()}</a>
      </div>
      <div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;">
          <div style="padding:2.5rem 2rem;background:var(--color-off-white);">
            <div class="text-eyebrow" style="margin-bottom:1.25rem;">Training</div>
            <p class="text-body-sm">Engineered for high-output training environments. Built to perform under repeated stress.</p>
          </div>
          <div style="padding:2.5rem 2rem;background:var(--color-off-white);">
            <div class="text-eyebrow" style="margin-bottom:1.25rem;">Daily Wear</div>
            <p class="text-body-sm">Structured comfort for transition and recovery days. The same finish, all day.</p>
          </div>
          <div style="padding:2.5rem 2rem;background:var(--color-off-white);">
            <div class="text-eyebrow" style="margin-bottom:1.25rem;">Outer Layers</div>
            <p class="text-body-sm">Technical protection for environmental defense. Built for the city and everything in it.</p>
          </div>
          <div style="padding:2.5rem 2rem;background:var(--color-off-white);">
            <div class="text-eyebrow" style="margin-bottom:1.25rem;">Community</div>
            <p class="text-body-sm">Worn by a collective that shows up. Street Miles NYC and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
