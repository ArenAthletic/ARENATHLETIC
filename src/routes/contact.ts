import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const contactPage = () => `
${head('Contact / Join', 'AREN ATHLETIC — Connect with AREN. General Correspondence, Performance Training, Community Membership, Brand Partnerships.')}

${nav('contact')}

<!-- PAGE HERO — EXACT LIVE SITE COPY -->
<section style="position:relative;padding-top:calc(68px + var(--space-xl));padding-bottom:var(--space-xl);border-bottom:1px solid var(--color-warm-gray);overflow:hidden;">
  <div style="position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/8a3301_e8285cd97a0546bd863f906d96d2409f~mv2.png/v1/fill/w_1920,h_600,al_c,q_80,enc_auto/8a3301_e8285cd97a0546bd863f906d96d2409f~mv2.png');background-size:cover;background-position:center;opacity:0.06;"></div>
  <div class="container" style="position:relative;z-index:1;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:end;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">Contact / Join</div>
        <h1 class="text-h1" style="max-width:18ch;">CONNECT WITH AREN.</h1>
      </div>
      <p class="text-body" style="max-width:44ch;">
        GENERAL CORRESPONDENCE / PERFORMANCE TRAINING / COMMUNITY MEMBERSHIP / BRAND PARTNERSHIPS.
      </p>
    </div>
  </div>
</section>

${marquee()}

<!-- CONTACT GRID — DIRECT ALL INQUIRIES TO THE APPROPRIATE CHANNEL -->
<section class="contact-grid container">

  <!-- LEFT: CHANNEL INFO — EXACT LIVE SITE COPY -->
  <div class="contact-info">

    <div style="margin-bottom:2.5rem;">
      <div class="contact-item-label" style="margin-bottom:0.75rem;">Direct All Inquiries to the Appropriate Channel</div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">General Inquiries</div>
      <div class="contact-item-value">
        <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">Training Inquiries</div>
      <div class="contact-item-value">
        <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">Community / Street Miles</div>
      <div class="contact-item-value">
        <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">Brand / Partnerships</div>
      <div class="contact-item-value">
        <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">HQ</div>
      <div class="contact-item-value">
        37 Union Sq West, 2nd Floor<br>
        NEW YORK, NY 10003
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-label">Operating Hours</div>
      <div class="contact-item-value">
        MON–FRI 06:00–21:00<br>
        SAT–SUN 08:00–18:00
      </div>
    </div>

    <div>
      <div class="contact-item-label" style="margin-bottom:1.25rem;">Follow AREN</div>
      <div style="display:flex;gap:1.5rem;">
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);">Instagram</a>
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);">Twitter</a>
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);">YouTube</a>
      </div>
    </div>

  </div>

  <!-- RIGHT: FORM — EXACT LIVE SITE FIELDS -->
  <div class="contact-form-wrapper">
    <form class="contact-form" id="contact-form" onsubmit="handleContact(event)">

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
        <div class="form-group">
          <label class="form-label" for="first-name">First Name</label>
          <input class="form-input" type="text" id="first-name" name="first_name" required placeholder="First" />
        </div>
        <div class="form-group">
          <label class="form-label" for="last-name">Last Name</label>
          <input class="form-input" type="text" id="last-name" name="last_name" required placeholder="Last" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input class="form-input" type="email" id="email" name="email" required placeholder="you@email.com" />
      </div>

      <div class="form-group">
        <label class="form-label" for="phone">Phone</label>
        <input class="form-input" type="tel" id="phone" name="phone" placeholder="+1 (000) 000-0000" />
      </div>

      <div class="form-group">
        <label class="form-label" for="referral">Referral Source</label>
        <input class="form-input" type="text" id="referral" name="referral" placeholder="How did you hear about AREN?" />
      </div>

      <div class="form-group">
        <label class="form-label" for="message">Why are you looking to train?</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Tell us about your goals and what you're looking to achieve." rows="5"></textarea>
      </div>

      <button type="submit" class="btn btn--primary" style="width:100%;justify-content:center;margin-top:0.5rem;">
        Submit ${arrowRight()}
      </button>

      <div id="contact-success" style="display:none;padding:1.5rem;background:var(--color-off-white);border-left:3px solid var(--color-black);margin-top:1rem;">
        <div class="text-eyebrow" style="margin-bottom:0.5rem;">Received.</div>
        <p class="text-body-sm">We'll be in touch within 48 hours. The standard applies here too.</p>
      </div>

      <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-mid-gray);margin-top:0.5rem;">
        Your information is never shared. Used only for AREN communication.
      </p>

    </form>
  </div>

</section>

<!-- GRID & GRIT — THE AREN ECOSYSTEM IN MOTION -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;margin-top:var(--space-xl);">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:0.75rem;text-align:center;">Grid &amp; Grit</div>
    <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.2);text-align:center;margin-bottom:3rem;">The AREN ecosystem in motion</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(255,255,255,0.08);">

      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(1.6rem,2.5vw,2.2rem);font-weight:700;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;text-transform:uppercase;">Train</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Individual and group training programs for athletes operating at a high standard.</p>
        <a href="/training" class="btn btn--outline-white" style="width:100%;justify-content:center;">Explore Training ${arrowRight()}</a>
      </div>

      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(1.6rem,2.5vw,2.2rem);font-weight:700;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;text-transform:uppercase;">Run</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Street Miles NYC — Every Sunday. Five boroughs. No excuses. Where the standard meets the pavement.</p>
        <a href="/street-miles" class="btn btn--outline-white" style="width:100%;justify-content:center;">Join Street Miles ${arrowRight()}</a>
      </div>

      <div style="padding:3.5rem 3rem;text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(1.6rem,2.5vw,2.2rem);font-weight:700;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;text-transform:uppercase;">Wear</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Apparel built to perform in training and carry the same standard into the rest of life.</p>
        <a href="/shop" class="btn btn--outline-white" style="width:100%;justify-content:center;">Shop AREN ${arrowRight()}</a>
      </div>

    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
