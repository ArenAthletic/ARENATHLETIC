import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const trainingPage = () => `
${head('Training', 'AREN ATHLETIC Training — Structured performance. No shortcuts. Discipline execution standards.')}

${nav('training')}

<!-- PAGE HERO -->
<section class="page-hero page-hero--dark">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:2rem;">AREN Training</div>
    <h1 class="text-display" style="color:#fff;max-width:18ch;margin-bottom:2rem;">
      Structured performance.<br>No shortcuts.
    </h1>
    <p style="font-size:1.0625rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:46ch;">
      Engineered for high-pressure execution. Every protocol is designed to eliminate distraction and focus on the clarity of movement, ensuring consistency is maintained under the weight of the collective standard.
    </p>
  </div>
</section>

${marquee()}

<!-- TRAINING INTRO -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="about-intro-inner">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">The Expression of the Standard</div>
        <h2 class="text-h2" style="max-width:18ch;margin-bottom:2rem;">
          Performance built on repetition.
        </h2>
      </div>
      <div>
        <p class="text-body" style="margin-bottom:1.75rem;">
          Engineered for high-pressure execution. Every protocol is designed to eliminate distraction and focus on the clarity of movement, ensuring consistency is maintained under the weight of the collective standard.
        </p>
        <p class="text-body" style="margin-bottom:1.75rem;">
          Training is deliberate. How you move through the world matters. The standard doesn't change based on conditions, fatigue, or environment.
        </p>
        <p class="text-body">
          Every session is a unit within a larger protocol. The work compounds. Presence is the metric.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- TRAINING PROGRAMS -->
<section class="training-services section--sm" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:3rem;">Programs</div>
    <div class="training-grid">

      <div class="training-card">
        <div class="training-card-number">01 / FOUNDATION</div>
        <h3 class="training-card-title">Aerobic Base Building</h3>
        <p class="training-card-desc">
          A structured 12-week protocol focused on building aerobic capacity from the ground up. Zone 2 work, progressive mileage, and mechanical development for runners of all levels.
        </p>
        <a href="/contact" class="btn btn--outline">Apply ${arrowRight()}</a>
      </div>

      <div class="training-card">
        <div class="training-card-number">02 / PERFORMANCE</div>
        <h3 class="training-card-title">Urban Speed Work</h3>
        <p class="training-card-desc">
          High-intensity interval training adapted for the urban environment. Bridges, blocks, and industrial sectors become your track. Threshold training with tactical precision.
        </p>
        <a href="/contact" class="btn btn--outline">Apply ${arrowRight()}</a>
      </div>

      <div class="training-card">
        <div class="training-card-number">03 / STRENGTH</div>
        <h3 class="training-card-title">Athletic Conditioning</h3>
        <p class="training-card-desc">
          Strength and conditioning designed for the running athlete. Injury prevention, power development, and the accessory work that builds a durable, high-output machine.
        </p>
        <a href="/contact" class="btn btn--outline">Apply ${arrowRight()}</a>
      </div>

      <div class="training-card">
        <div class="training-card-number">04 / COMMUNITY</div>
        <h3 class="training-card-title">Street Miles NYC</h3>
        <p class="training-card-desc">
          The group expression of AREN's training standards. Every Sunday at 09:00 sharp. Accountability-driven. All boroughs, all conditions, no excuses.
        </p>
        <a href="/street-miles" class="btn btn--outline">Explore ${arrowRight()}</a>
      </div>

    </div>
  </div>
</section>

<!-- TRAINING STANDARDS — DARK -->
<section class="philosophy-section" style="padding:var(--space-xl) 0;">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:3rem;">Discipline Execution Standards</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:3rem;border-top:1px solid rgba(255,255,255,0.08);padding-top:3rem;">

      <div>
        <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:1.25rem;">Principle 01</div>
        <h3 style="font-family:var(--font-serif);font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Consistency over intensity</h3>
        <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.45);">Long-term development requires sustained effort over time. High-output sessions are tools, not the foundation.</p>
      </div>

      <div>
        <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:1.25rem;">Principle 02</div>
        <h3 style="font-family:var(--font-serif);font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Environment is the variable</h3>
        <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.45);">The athlete adapts to all conditions. Urban terrain, weather, fatigue — none of these are excuses for reduced output.</p>
      </div>

      <div>
        <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:1.25rem;">Principle 03</div>
        <h3 style="font-family:var(--font-serif);font-size:1.5rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Presence is the metric</h3>
        <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.45);">Showing up is the baseline. Everything else is built on top of that foundation. Missing sessions is a breach of the standard.</p>
      </div>

    </div>
  </div>
</section>

<!-- NATIONAL PERFORMANCE PLATFORM -->
<section class="section" style="border-top:1px solid var(--color-warm-gray);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">National Performance Platform</div>
        <h2 class="text-h2" style="max-width:22ch;margin-bottom:1.75rem;">
          Building a scalable culture of community chapters across the nation.
        </h2>
        <p class="text-body" style="max-width:44ch;">
          AREN is evolving into a coordinated performance ecosystem, establishing elite training protocols and community expression while maintaining the absolute integrity of the standard.
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;max-width:400px;">
        <a href="/contact" class="btn btn--primary" style="justify-content:space-between;">Apply for Training ${arrowRight()}</a>
        <a href="/street-miles" class="btn btn--outline" style="justify-content:space-between;">Join Street Miles NYC ${arrowRight()}</a>
        <a href="/services" class="btn btn--outline" style="justify-content:space-between;">View All Services ${arrowRight()}</a>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
