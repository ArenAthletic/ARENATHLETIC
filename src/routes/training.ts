import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const trainingPage = () => `
${head('Training', 'AREN ATHLETIC — Built by Discipline. Proven by Action. Uncompromising execution and elite standards.')}

${nav('training')}

<section class="page-hero page-hero--dark" style="position:relative;overflow:hidden;min-height:520px;display:flex;align-items:flex-end;">
  <div style="position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/8a3301_7e4d26bfdcf043e9a3212206d4f53db5~mv2.png/v1/crop/x_0,y_558,w_4284,h_4295/fill/w_1920,h_1080,al_c,q_90,enc_auto/8a3301_7e4d26bfdcf043e9a3212206d4f53db5~mv2.png');background-size:cover;background-position:center;"></div>
  <div style="position:absolute;inset:0;background:linear-gradient(160deg,rgba(28,28,26,0.85) 0%,rgba(35,35,33,0.65) 60%,rgba(26,26,24,0.9) 100%);"></div>
  <div class="container" style="position:relative;z-index:1;padding-bottom:var(--space-xl);">
    <div class="text-eyebrow" style="margin-bottom:2rem;">Aren Athletic &bull; Discipline</div>
    <h1 class="text-display" style="color:#fff;max-width:20ch;margin-bottom:2rem;">Built by Discipline.<br>Proven by Action.</h1>
    <p style="font-size:1.0625rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:50ch;">Uncompromising execution and elite standards. Our systems are built for the high-level athlete where performance must be validated by measurable output and structured accountability.</p>
  </div>
</section>

${marquee()}

<!-- PHILOSOPHY — EXACT COPY -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <div class="about-intro-inner">
          <div>
            <div class="text-eyebrow" style="margin-bottom:2rem;">Philosophy</div>
            <h2 class="text-h2" style="max-width:18ch;margin-bottom:2rem;">Built by Discipline.<br>Proven by Action.</h2>
          </div>
          <div>
            <p class="text-body" style="margin-bottom:1.75rem;">The AREN performance system is built on structured discipline and uncompromising accountability. Every protocol is designed for the serious athlete who values output over opinion.</p>
            <p class="text-body" style="margin-bottom:1.75rem;">We operate on a hierarchy of performance where intent must be validated by action. We define the standard; you execute the work.</p>
            <div style="display:flex;gap:3rem;margin-top:2.5rem;padding-top:2.5rem;border-top:1px solid var(--color-warm-gray);flex-wrap:wrap;">
              <div>
                <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-mid-gray);margin-bottom:0.5rem;">01</div>
                <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Presence.</div>
              </div>
              <div>
                <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-mid-gray);margin-bottom:0.5rem;">02</div>
                <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Discipline.</div>
              </div>
              <div>
                <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-mid-gray);margin-bottom:0.5rem;">03</div>
                <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Execution.</div>
              </div>
              <div>
                <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-mid-gray);margin-bottom:0.5rem;">04</div>
                <div style="font-family:var(--font-sans);font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Performance Systems.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Training image panel -->
      <div style="position:relative;overflow:hidden;aspect-ratio:3/4;min-height:400px;">
        <img src="https://static.wixstatic.com/media/8a3301_b34c7842f2ee4961a0607531ffdcc869~mv2.png/v1/crop/x_0,y_1000,w_3024,h_3032/fill/w_800,h_1000,al_c,q_90,enc_auto/8a3301_b34c7842f2ee4961a0607531ffdcc869~mv2.png" alt="AREN Training" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" loading="lazy" />
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(35,35,33,0.4) 0%,transparent 50%);"></div>
      </div>
    </div>
  </div>
</section>

<!-- PERFORMANCE SYSTEMS — EXACT COPY -->
<section class="training-services section--sm" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:3rem;">Performance Systems</div>
    <div class="training-grid">

      <div class="training-card">
        <div class="training-card-number">01 / PROTOCOL</div>
        <h3 class="training-card-title">Protocol — Threshold</h3>
        <p class="training-card-desc">Advanced performance development emphasizing neural efficiency, force production, and high-intensity execution. Built for athletes operating above baseline standards and seeking elevated output within a controlled training environment.</p>
        <a href="/contact" class="btn btn--outline">Apply for Threshold ${arrowRight()}</a>
      </div>

      <div class="training-card">
        <div class="training-card-number">02 / PROTOCOL</div>
        <h3 class="training-card-title">Protocol — Capacity</h3>
        <p class="training-card-desc">Structured performance training built on volume architecture, strength progression, and metabolic control. Designed for athletes and professionals seeking consistent output, measurable progression, and disciplined execution inside the AREN system.</p>
        <a href="/contact" class="btn btn--outline">Enter Capacity ${arrowRight()}</a>
      </div>

      <div class="training-card">
        <div class="training-card-number">03 / COLLECTIVE</div>
        <h3 class="training-card-title">National Collective</h3>
        <p class="training-card-desc">Open-format performance movement unified under shared standards. Community-driven sessions built around exploration, discipline, and collective execution across boroughs.</p>
        <a href="/street-miles" class="btn btn--outline">Join Street Miles ${arrowRight()}</a>
      </div>

      <div class="training-card" style="background:var(--color-off-white);">
        <div class="training-card-number">Who Trains With Intent?</div>
        <h3 class="training-card-title" style="font-size:1.1rem;">The standard is not for everyone.</h3>
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2rem;">
          <p class="text-body-sm">— Individuals who prioritize performance output over public opinion.</p>
          <p class="text-body-sm">— Athletes committed to consistent physiological execution and accountability.</p>
          <p class="text-body-sm">— Performers who maintain operational composure under high-stress thresholds.</p>
        </div>
        <div style="display:flex;gap:1.5rem;padding-top:1.5rem;border-top:1px solid var(--color-warm-gray);">
          <div><div style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em;font-weight:600;margin-bottom:0.25rem;">100%</div><div class="text-eyebrow">Execution</div></div>
          <div><div style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em;font-weight:600;margin-bottom:0.25rem;">HIGH</div><div class="text-eyebrow">Composure</div></div>
          <div><div style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em;font-weight:600;margin-bottom:0.25rem;">STRICT</div><div class="text-eyebrow">Adherence</div></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- GET STARTED FORM — EXACT FIELDS FROM LIVE SITE -->
<section class="section" style="background:var(--color-off-white);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">Get Started</div>
        <h2 class="text-h2" style="max-width:18ch;margin-bottom:1.75rem;">Execute the first step.</h2>
        <p class="text-body" style="max-width:42ch;margin-bottom:2rem;">Response Protocol: 24h. We respond to all serious inquiries within 24 hours.</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-mid-gray);">info@arenathletic.com</div>
          <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-mid-gray);">37 Union Sq West, 2nd Floor, New York, NY 10003</div>
        </div>
      </div>
      <form class="contact-form" id="training-form" onsubmit="handleContact(event)">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
          <div class="form-group">
            <label class="form-label">First Name *</label>
            <input class="form-input" type="text" required placeholder="First" />
          </div>
          <div class="form-group">
            <label class="form-label">Last Name *</label>
            <input class="form-input" type="text" required placeholder="Last" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email *</label>
          <input class="form-input" type="email" required placeholder="you@email.com" />
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input class="form-input" type="tel" placeholder="+1 (000) 000-0000" />
        </div>
        <div class="form-group">
          <label class="form-label">Referral Source</label>
          <input class="form-input" type="text" placeholder="How did you hear about AREN?" />
        </div>
        <div class="form-group">
          <label class="form-label">Why are you looking to train? *</label>
          <textarea class="form-textarea" required placeholder="Tell us about your goals and what you're looking to achieve." rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn--primary" style="width:100%;justify-content:center;">Submit ${arrowRight()}</button>
        <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-mid-gray);margin-top:0.75rem;">Response Protocol: 24h</p>
        <div id="contact-success" style="display:none;padding:1.5rem;background:var(--color-white);border-left:3px solid var(--color-black);margin-top:1rem;">
          <div class="text-eyebrow" style="margin-bottom:0.5rem;">Received.</div>
          <p class="text-body-sm">We'll be in touch within 24 hours.</p>
        </div>
      </form>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
