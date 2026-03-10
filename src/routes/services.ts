import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const servicesPage = () => `
${head('Services', 'AREN ATHLETIC Services — Structured access. Every level. Performance coaching, programming, and community access.')}

${nav('services')}

<!-- PAGE HERO -->
<section class="page-hero" style="position:relative;overflow:hidden;padding-top:calc(68px + var(--space-xl));padding-bottom:var(--space-xl);border-bottom:1px solid var(--color-warm-gray);">
  <div style="position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/8a3301_cf5517a609d94d6992c825205aaae6d6~mv2.png/v1/fill/w_1920,h_600,al_c,q_90,enc_auto/8a3301_cf5517a609d94d6992c825205aaae6d6~mv2.png');background-size:cover;background-position:center;opacity:0.08;"></div>
  <div class="container" style="position:relative;z-index:1;">
    <div class="text-eyebrow" style="margin-bottom:2rem;">Services</div>
    <h1 class="text-h1" style="max-width:20ch;margin-bottom:2rem;">
      Structured access.<br>Every level.
    </h1>
    <p class="text-body" style="max-width:50ch;">
      AREN offers a tiered service ecosystem for athletes and communities. From individual programming to full chapter activation — the standard scales to your context.
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

<!-- NATIONAL PERFORMANCE PLATFORM -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/8a3301_91e8f4a7f0094002a4201f724b170fc8~mv2.png/v1/fill/w_1920,h_600,al_c,q_90,enc_auto/8a3301_91e8f4a7f0094002a4201f724b170fc8~mv2.png');background-size:cover;background-position:center;opacity:0.12;"></div>
  <div class="container" style="position:relative;z-index:1;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2rem;">National Performance Platform</div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3.2rem);font-weight:700;color:#fff;line-height:0.95;letter-spacing:-0.01em;text-transform:uppercase;margin-bottom:1.75rem;max-width:22ch;">
          Building a scalable culture of community chapters across the nation.
        </h2>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.5);max-width:44ch;">
          AREN is evolving into a coordinated performance ecosystem, establishing elite training protocols and community expression while maintaining the absolute integrity of the standard.
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;max-width:400px;">
        <a href="/contact" class="btn btn--primary" style="justify-content:space-between;">Contact / Join the Community ${arrowRight()}</a>
        <a href="/training" class="btn btn--outline-white" style="justify-content:space-between;">Explore Training Programs ${arrowRight()}</a>
        <a href="/street-miles" class="btn btn--outline-white" style="justify-content:space-between;">Join Street Miles NYC ${arrowRight()}</a>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
