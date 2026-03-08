import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const servicesPage = () => `
${head('Services', 'AREN ATHLETIC Services — Performance coaching, programming, and community access for serious athletes.')}

${nav('services')}

<!-- PAGE HERO -->
<section class="page-hero" style="padding-top:calc(68px + var(--space-xl));padding-bottom:var(--space-xl);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:2rem;">Services</div>
    <h1 class="text-h1" style="max-width:20ch;margin-bottom:2rem;">
      Structured access.<br>Every level.
    </h1>
    <p class="text-body" style="max-width:48ch;">
      AREN offers a tiered service ecosystem for athletes and communities. From individual programming to full chapter activation, the standard scales to your context.
    </p>
  </div>
</section>

${marquee()}

<!-- SERVICES LIST -->
<section class="services-list">
  <div class="container">
  
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">01</div>
        <div class="service-name">Individual Programming</div>
      </div>
      <div>
        <p class="service-desc">
          Custom training programs built around the individual athlete's goals, schedule, and environment. Periodized, progressive, and designed for long-term development. Remote coaching available nationally.
        </p>
      </div>
      <a href="/contact" class="service-arrow">Inquire ${arrowRight()}</a>
    </div>
    
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">02</div>
        <div class="service-name">Group Training</div>
      </div>
      <div>
        <p class="service-desc">
          Structured sessions for small groups in the NYC metro area. Accountability-driven, community-oriented, and executed to the AREN standard. Every session is a unit within a larger protocol.
        </p>
      </div>
      <a href="/contact" class="service-arrow">Inquire ${arrowRight()}</a>
    </div>
    
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">03</div>
        <div class="service-name">Street Miles Access</div>
      </div>
      <div>
        <p class="service-desc">
          Full integration into the Street Miles NYC chapter ecosystem. Weekly runs, digital hub access, chapter coordination, and accountability structures. Every Sunday, five boroughs.
        </p>
      </div>
      <a href="/street-miles" class="service-arrow">Explore ${arrowRight()}</a>
    </div>
    
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">04</div>
        <div class="service-name">Hub Chapter Activation</div>
      </div>
      <div>
        <p class="service-desc">
          Launch a Street Miles chapter in your city. AREN provides the operational framework, brand standards, and programming infrastructure. National hub network expansion is ongoing.
        </p>
      </div>
      <a href="/contact" class="service-arrow">Apply ${arrowRight()}</a>
    </div>
    
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">05</div>
        <div class="service-name">Corporate + Team Performance</div>
      </div>
      <div>
        <p class="service-desc">
          Performance culture programming for teams and organizations. Training, accountability frameworks, and the physical standards that drive high-output performance at scale.
        </p>
      </div>
      <a href="/contact" class="service-arrow">Inquire ${arrowRight()}</a>
    </div>
    
    <div class="service-row">
      <div>
        <div class="text-eyebrow" style="margin-bottom:0.75rem;">06</div>
        <div class="service-name">Apparel — Uniform Program</div>
      </div>
      <div>
        <p class="service-desc">
          Custom AREN ATHLETIC uniform programs for teams, chapters, and organizations. Branded performance apparel built to the same functional standard as the core collection.
        </p>
      </div>
      <a href="/contact" class="service-arrow">Inquire ${arrowRight()}</a>
    </div>
    
  </div>
</section>

<!-- SERVICES CTA BANNER -->
<section style="background:var(--color-off-white);padding:var(--space-xl) 0;border-top:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:1.5rem;">Ready to Execute</div>
        <h2 class="text-h2" style="max-width:20ch;margin-bottom:1.5rem;">The standard is always available to those who show up.</h2>
        <p class="text-body" style="max-width:44ch;">
          All services operate within the AREN ecosystem. Reach out through the contact page to begin the process.
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;max-width:380px;">
        <a href="/contact" class="btn btn--primary" style="justify-content:space-between;">Contact / Join the Community ${arrowRight()}</a>
        <a href="/training" class="btn btn--outline" style="justify-content:space-between;">Explore Training Programs ${arrowRight()}</a>
        <a href="/street-miles" class="btn btn--outline" style="justify-content:space-between;">Join Street Miles NYC ${arrowRight()}</a>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
