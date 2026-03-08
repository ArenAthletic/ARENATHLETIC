import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const contactPage = () => `
${head('Contact / Join', 'AREN ATHLETIC — Contact and join the community. Training access, Street Miles NYC, and the AREN collective.')}

${nav('contact')}

<!-- PAGE HERO -->
<section style="padding-top:calc(68px + var(--space-xl));padding-bottom:var(--space-xl);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:end;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">Contact / Join</div>
        <h1 class="text-h1" style="max-width:18ch;">
          Show up.<br>Get access.
        </h1>
      </div>
      <p class="text-body" style="max-width:44ch;">
        Ready to join the AREN ecosystem? Apply for training, request chapter access, or reach out directly. We respond to serious inquiries.
      </p>
    </div>
  </div>
</section>

${marquee()}

<!-- CONTACT GRID -->
<section class="contact-grid container">

  <!-- LEFT: INFO -->
  <div class="contact-info">
  
    <div class="contact-item">
      <div class="contact-item-label">Direct Contact</div>
      <div class="contact-item-value">
        <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-item-label">Location</div>
      <div class="contact-item-value">New York City, NY<br>Five Borough Chapter</div>
    </div>
    
    <div class="contact-item">
      <div class="contact-item-label">Street Miles NYC</div>
      <div class="contact-item-value">
        Every Sunday — 09:00 Sharp<br>
        <span style="font-size:0.875rem;color:var(--color-mid-gray);">Rotating locations across the five boroughs</span>
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-item-label">Response Time</div>
      <div class="contact-item-value" style="font-size:0.9375rem;color:var(--color-dark-gray);">
        We respond to all serious inquiries within 48 hours. Community and training requests are reviewed weekly.
      </div>
    </div>
    
    <div>
      <div class="contact-item-label" style="margin-bottom:1.25rem;">Follow AREN</div>
      <div style="display:flex;gap:1.5rem;">
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);transition:color 0.22s;" onmouseover="this.style.color='#0a0a0a'" onmouseout="this.style.color='var(--color-dark-gray)'">Instagram</a>
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);transition:color 0.22s;">Twitter</a>
        <a href="#" style="font-family:var(--font-mono);font-size:0.5625rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-dark-gray);transition:color 0.22s;">YouTube</a>
      </div>
    </div>
    
  </div>

  <!-- RIGHT: FORM -->
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
        <label class="form-label" for="email">Email Address</label>
        <input class="form-input" type="email" id="email" name="email" required placeholder="you@email.com" />
      </div>
      
      <div class="form-group">
        <label class="form-label" for="inquiry-type">Inquiry Type</label>
        <select class="form-select" id="inquiry-type" name="inquiry_type">
          <option value="">Select an inquiry type</option>
          <option value="join-community">Join the Community</option>
          <option value="training">Training / Programming</option>
          <option value="street-miles">Street Miles NYC Access</option>
          <option value="chapter">Chapter Activation</option>
          <option value="apparel">Apparel / Shop</option>
          <option value="press">Press / Collaboration</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      
      <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Tell us what you're looking for. Be specific—we respond to serious inquiries." rows="5"></textarea>
      </div>
      
      <div class="form-group">
        <label class="form-label" for="location">City / Location</label>
        <input class="form-input" type="text" id="location" name="location" placeholder="New York, NY" />
      </div>
      
      <button type="submit" class="btn btn--primary" style="width:100%;justify-content:center;margin-top:0.5rem;">
        Submit Inquiry ${arrowRight()}
      </button>
      
      <div id="contact-success" style="display:none;padding:1.5rem;background:var(--color-off-white);border-left:3px solid var(--color-black);">
        <div class="text-eyebrow" style="margin-bottom:0.5rem;">Received.</div>
        <p class="text-body-sm">We'll be in touch within 48 hours. The standard applies here too.</p>
      </div>
      
      <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-mid-gray);margin-top:0.5rem;">
        Your information is never shared. Used only for AREN communication.
      </p>
      
    </form>
  </div>

</section>

<!-- JOIN ECOSYSTEM -->
<section style="background:var(--color-black);padding:var(--space-xl) 0;margin-top:var(--space-xl);">
  <div class="container">
    <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:3rem;text-align:center;">The Ecosystem</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(255,255,255,0.08);">
    
      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);text-align:center;">
        <div style="font-family:var(--font-serif);font-size:2rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Train</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Individual and group training programs for athletes operating at a high standard.</p>
        <a href="/training" class="btn btn--outline-white" style="width:100%;justify-content:center;">Explore Training ${arrowRight()}</a>
      </div>
      
      <div style="padding:3.5rem 3rem;border-right:1px solid rgba(255,255,255,0.08);text-align:center;">
        <div style="font-family:var(--font-serif);font-size:2rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Run</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Street Miles NYC — Every Sunday. Five boroughs. No excuses. Where the standard meets the pavement.</p>
        <a href="/street-miles" class="btn btn--outline-white" style="width:100%;justify-content:center;">Join Street Miles ${arrowRight()}</a>
      </div>
      
      <div style="padding:3.5rem 3rem;text-align:center;">
        <div style="font-family:var(--font-serif);font-size:2rem;font-weight:400;color:#fff;margin-bottom:1rem;letter-spacing:-0.01em;">Wear</div>
        <p style="font-size:0.875rem;line-height:1.65;color:rgba(255,255,255,0.45);margin-bottom:2rem;">Apparel built to perform in training and carry the same standard into the rest of life.</p>
        <a href="/shop" class="btn btn--outline-white" style="width:100%;justify-content:center;">Shop AREN ${arrowRight()}</a>
      </div>
      
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
