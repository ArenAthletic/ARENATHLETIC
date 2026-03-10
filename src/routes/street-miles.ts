import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const streetMilesPage = () => `
${head('Street Miles NYC', 'Street Miles NYC — Do the work. Carry the weight. A disciplined run culture built on shared accountability and urban grit.')}

${nav('street-miles')}

<!-- SM HERO — EXACT LIVE SITE COPY -->
<section class="sm-hero" style="position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/8a3301_dfd7f8236654470390a4357692431d22~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,enc_auto/8a3301_dfd7f8236654470390a4357692431d22~mv2.png');background-size:cover;background-position:center top;"></div>
  <div style="position:absolute;inset:0;background:linear-gradient(160deg,rgba(20,20,18,0.88) 0%,rgba(35,35,33,0.70) 55%,rgba(20,20,18,0.92) 100%);"></div>
  <div class="container" style="position:relative;z-index:1;">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2.5rem;">Street Miles NYC — SMNYC</div>
    <h1 class="sm-hero-tagline">
      DO THE WORK.<br>CARRY THE<br>WEIGHT.
    </h1>
    <p style="font-size:1.0625rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:52ch;margin-bottom:3rem;">
      Street Miles is the street-level expression of AREN's standards through community runs and shared accountability.
    </p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
      <a href="/contact" class="btn btn--primary">Join SMNYC ${arrowRight()}</a>
      <a href="#protocol" class="btn btn--outline-white">View Protocol ${arrowRight()}</a>
    </div>
  </div>
</section>

${marquee()}

<!-- THE CULTURE — WORD FOR WORD FROM LIVE SITE -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">The Culture</div>
        <h2 class="text-h2" style="max-width:20ch;margin-bottom:2rem;">
          Street Miles is the street-level expression of AREN's standards.
        </h2>
        <p class="text-body" style="margin-bottom:1.75rem;">
          Street Miles is the street-level expression of AREN's standards. This is a disciplined run culture built on shared accountability and urban grit.
        </p>
        <p class="text-body" style="margin-bottom:1.75rem;">
          It provides a structured ecosystem for athletes committed to showing up for the work, regardless of environment or condition.
        </p>
        <p class="text-body">
          This is not a casual run club; it is where standards become visible on the pavement and discipline is forged through repetition.
        </p>
      </div>
      <!-- Culture image -->
      <div style="position:relative;overflow:hidden;aspect-ratio:4/5;">
        <img src="https://static.wixstatic.com/media/8a3301_8a94a47601dd469abbfc6e2cf79dd39a~mv2.png/v1/fill/w_800,h_1000,al_c,q_90,enc_auto/8a3301_8a94a47601dd469abbfc6e2cf79dd39a~mv2.png" alt="Street Miles NYC — Running Culture" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<!-- PROTOCOL — EXACT LIVE SITE LABELS -->
<section id="protocol" class="sm-protocol">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:3rem;">Structure</div>
    <div class="protocol-items">

      <div class="protocol-item">
        <div class="protocol-number">01 / SESSIONS</div>
        <div class="protocol-title">Structure</div>
        <p class="protocol-desc">
          Every Sunday at 09:00 sharp. We execute rotating sessions across the five boroughs—focused on bridges, blocks, and industrial sectors.
        </p>
      </div>

      <div class="protocol-item">
        <div class="protocol-number">02 / PROTOCOL</div>
        <div class="protocol-title">Run Types</div>
        <p class="protocol-desc">
          From aerobic capacity builds to high-intensity urban splits. Each run is a specific tactical unit within the AREN training protocol.
        </p>
      </div>

      <div class="protocol-item">
        <div class="protocol-number">03 / ACCOUNTABILITY</div>
        <div class="protocol-title">Vigilance</div>
        <p class="protocol-desc">
          Presence is the benchmark. Sync via the chapter channel for RSVP and live tracking. Missing sessions is a breach of the standard.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- CHAPTERS: STREET MILES NYC — EXACT COPY -->
<section class="section" style="background:var(--color-black);color:var(--color-white);">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:3rem;">Chapters: Street Miles NYC</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3.2rem);font-weight:700;line-height:0.95;color:#fff;letter-spacing:-0.01em;text-transform:uppercase;margin-bottom:1.75rem;">
          The Five Borough Chapter
        </h2>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.5);margin-bottom:1.75rem;max-width:46ch;">
          The Street Miles ecosystem is engineered for modular expansion. NYC provides the street-level proof of concept, establishing the standard of discipline and collective accountability.
        </p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.5);max-width:46ch;">
          As AREN grows, new chapters will launch in urban hubs where standard execution and high performance are mandatory, ensuring consistent run culture nationwide.
        </p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;">
        <div style="padding:2.5rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
          <div style="font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:700;color:#fff;margin-bottom:0.5rem;line-height:0.95;text-transform:uppercase;letter-spacing:-0.01em;">5</div>
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);">Boroughs covered</div>
        </div>
        <div style="padding:2.5rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
          <div style="font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:700;color:#fff;margin-bottom:0.5rem;line-height:0.95;text-transform:uppercase;letter-spacing:-0.01em;">Sun</div>
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);">09:00 Sharp</div>
        </div>
        <div style="padding:2.5rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
          <div style="font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:700;color:#fff;margin-bottom:0.5rem;line-height:0.95;text-transform:uppercase;letter-spacing:-0.01em;">NYC</div>
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);">Home chapter</div>
        </div>
        <div style="padding:2.5rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
          <div style="font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:700;color:#fff;margin-bottom:0.5rem;line-height:0.95;text-transform:uppercase;letter-spacing:-0.01em;">All</div>
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);">Conditions — No excuses</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS — EXACT WORD FOR WORD FROM LIVE SITE -->
<section class="testimonials-section">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:3rem;">From the Chapter</div>
    <div class="testimonials-grid">

      <div class="testimonial-item">
        <p class="testimonial-quote">
          "Street Miles is the street-level expression of AREN's standards. We forge mental and physical resilience through shared miles and collective accountability. We do the work; we carry the weight."
        </p>
        <div class="testimonial-attribution">ATHLETE 089 / SMNYC CHAPTER</div>
      </div>

      <div class="testimonial-item">
        <p class="testimonial-quote">
          "This is not a social run club. It is a disciplined ecosystem for athletes who show up regardless of conditions, where presence is the metric and repetition is the method."
        </p>
        <div class="testimonial-attribution">ATHLETE 042 / SMNYC CHAPTER</div>
      </div>

      <div class="testimonial-item">
        <p class="testimonial-quote">
          "New York City is where the standard begins. We build the rhythm of a global run culture across every borough, bridge, and block, showing up together with zero excuses."
        </p>
        <div class="testimonial-attribution">SMNYC / FIVE BOROUGH CHAPTER OWNER</div>
      </div>

    </div>
  </div>
</section>

<!-- ACCESS PROTOCOL — EXACT COPY FROM LIVE SITE -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:3rem;">Access Protocol</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(255,255,255,0.08);">

      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);">
        <div style="font-family:var(--font-mono);font-size:2rem;color:rgba(255,255,255,0.12);margin-bottom:1.5rem;line-height:1;font-weight:400;">1.</div>
        <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-bottom:1rem;">SYNC</div>
        <p style="font-size:0.9rem;line-height:1.65;color:rgba(255,255,255,0.45);">Join the digital hub for real-time coordinates.</p>
      </div>

      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);">
        <div style="font-family:var(--font-mono);font-size:2rem;color:rgba(255,255,255,0.12);margin-bottom:1.5rem;line-height:1;font-weight:400;">2.</div>
        <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-bottom:1rem;">SHOW UP</div>
        <p style="font-size:0.9rem;line-height:1.65;color:rgba(255,255,255,0.45);">Arrival is mandatory. We run in all conditions.</p>
      </div>

      <div style="padding:3.5rem 3rem;">
        <div style="font-family:var(--font-mono);font-size:2rem;color:rgba(255,255,255,0.12);margin-bottom:1.5rem;line-height:1;font-weight:400;">3.</div>
        <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-bottom:1rem;">EXECUTE</div>
        <p style="font-size:0.9rem;line-height:1.65;color:rgba(255,255,255,0.45);">Carry the weight and complete the miles.</p>
      </div>

    </div>
    <div style="margin-top:3rem;text-align:center;">
      <a href="/contact" class="btn btn--primary">Join Street Miles NYC ${arrowRight()}</a>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
