import { head, closingTags, nav, footer, marquee, arrowRight } from '../components'

export const aboutPage = () => `
${head('About AREN', 'AREN ATHLETIC — AREN isn\'t just apparel. AREN is a standard.')}

${nav('about')}

<section class="page-hero page-hero--dark">
  <div class="container">
    <div class="text-eyebrow" style="margin-bottom:2rem;">About AREN</div>
    <h1 class="text-display" style="color:#fff;max-width:16ch;margin-bottom:2rem;">AREN isn't just apparel. AREN is a standard.</h1>
  </div>
</section>

${marquee()}

<!-- MAIN MANIFESTO — EXACT COPY -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="about-intro-inner">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">About AREN</div>
        <h2 class="text-h2" style="max-width:18ch;margin-bottom:2.5rem;">AREN Athletic</h2>
        <a href="/shop" class="btn btn--outline">Shop Apparel ${arrowRight()}</a>
      </div>
      <div>
        <p class="text-body" style="margin-bottom:1.75rem;">AREN isn't just apparel. AREN is a standard.</p>
        <p class="text-body" style="margin-bottom:1.75rem;">It's the moment before the work begins. The quiet decision you make when no one is watching. The discipline to prepare, the courage to show up, and the commitment to hold the line when it would be easier not to.</p>
        <p class="text-body" style="margin-bottom:1.75rem;">AREN was built on three principles: discipline, presence, and consistency.</p>
        <p class="text-body" style="margin-bottom:1.75rem;">Discipline is the foundation. It's the shoe being tied before sunrise. It's the extra set, the extra mile, the extra moment of focus when fatigue tells you to stop. Discipline is not loud. It's not flashy. It's the daily choice to do what must be done.</p>
        <p class="text-body" style="margin-bottom:1.75rem;">Presence is how you carry yourself in the world. It's the way you enter the room, the gym, the track, the street, or the workplace. Presence means standing tall in who you are and what you represent. It means showing up prepared, composed, and ready for whatever the day demands.</p>
        <p class="text-body" style="margin-bottom:1.75rem;">Consistency is the separator. Anyone can show up once. Anyone can have a good day. But the standard is held by those who show up again and again, day after day, long after the excitement fades and the work becomes routine.</p>
        <p class="text-body" style="margin-bottom:1.75rem;font-weight:500;color:var(--color-black);">That's where AREN lives.</p>
      </div>
    </div>
  </div>
</section>

<!-- EXTENDED MANIFESTO -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container container--narrow">
    <p class="text-body" style="margin-bottom:1.75rem;">AREN exists at the intersection of training and life: in the gym, on the street, at work, and in the quiet moments when you decide who you are going to be.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">But the standard doesn't stop there. It carries into how you live, how you treat people, and the kind of character you build when the work of the day is done. It shows up in how you lead your family, how you support the people around you, and how you stand by your principles when life tests them.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">This isn't clothing made for a moment. It's apparel designed for the standard you hold yourself to every day. When you wear AREN, you're not putting on a brand. You're stepping into a mindset. It means you carry discipline with you. You move with intention.</p>
    <p class="text-body" style="margin-bottom:1.75rem;font-weight:500;color:var(--color-black);">You show up with presence.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">It means you respect the work. You respect the process. You respect the standard.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">Because the standard isn't just performance. It's how you train. It's how you work.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">It's how you carry yourself in every room you enter.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">It's also how you show up for the people who depend on you, the values you live by, and the character you build when no one is watching.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">The standard is the standard.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">And the ones who live by it don't need to announce it.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">You can see it in how they move, how they prepare, and how they show up.</p>
    <p class="text-body" style="margin-bottom:1.75rem;">AREN exists for those people. The ones who know the work never really ends. The ones who understand that greatness isn't built in moments of spotlight, but in the quiet hours where discipline becomes identity.</p>
    <p class="text-body" style="margin-bottom:1.75rem;font-weight:500;color:var(--color-black);">Wear it with intention. Train with purpose. Carry the standard.</p>
    <p class="text-body" style="margin-bottom:1.75rem;font-weight:500;color:var(--color-black);">This is AREN.</p>
    <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-mid-gray);">EST. 2026. PERFORMANCE PROTOCOL.</p>
  </div>
</section>

<!-- WHAT AREN REPRESENTS -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div class="about-intro-inner">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">What AREN Represents</div>
        <h2 class="text-h2" style="max-width:18ch;">A performance identity.</h2>
      </div>
      <div>
        <p class="text-body" style="margin-bottom:1.25rem;">AREN is a performance identity.</p>
        <p class="text-body" style="margin-bottom:1.25rem;">Defined by discipline, presence, and execution.</p>
        <p class="text-body" style="margin-bottom:1.25rem;">Not a destination. A standard of conduct.</p>
        <p class="text-body" style="margin-bottom:1.25rem;">Training is deliberate. How you move through the world matters.</p>
        <p class="text-body" style="margin-bottom:1.25rem;">The apparel carries the code — a signal of restraint, readiness, and alignment.</p>
        <p class="text-body">The mark represents a standard — not attention. Wear it as a reflection of how you operate.</p>
      </div>
    </div>
  </div>
</section>

<!-- NO SPECTATORS. ONLY STANDARDS. -->
<section style="background:var(--color-black);color:var(--color-white);padding:var(--space-xl) 0;">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:2rem;">No Spectators. Only Standards.</div>
        <h2 style="font-family:var(--font-serif);font-size:clamp(2rem,4vw,3.5rem);font-weight:400;line-height:1.08;letter-spacing:-0.02em;color:#fff;margin-bottom:2rem;">NO SPECTATORS.<br>ONLY STANDARDS.</h2>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);margin-bottom:1.5rem;max-width:46ch;">AREN rejects passivity and spectatorship in favor of ownership and responsibility.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);margin-bottom:1.5rem;max-width:46ch;">The standard is a non-negotiable threshold of operation — a commitment to presence over distraction and execution over intention. To align with AREN is to accept accountability for how you show up: in training, in work, and in life.</p>
        <p style="font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.55);margin-bottom:1.5rem;max-width:46ch;">We don't observe from the sidelines. We operate.</p>
        <p style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);">There are no spectators. There are only standards.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:2rem;padding-left:var(--space-lg);border-left:1px solid rgba(255,255,255,0.08);">
        <div style="padding:2.5rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:1rem;">Training Systems</div>
          <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.5);">Engineered for high-pressure execution. Every protocol is designed to eliminate distraction and focus on the clarity of movement, ensuring consistency is maintained under the weight of the collective standard.</p>
        </div>
        <div style="padding:2.5rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:1rem;">Performance Apparel</div>
          <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.5);">Designed for daily standards. AREN garments are a physical signal of readiness, engineered to endure the rigors of performance while maintaining a restricted, premium aesthetic for life under pressure.</p>
        </div>
        <div style="padding:2.5rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
          <div class="text-eyebrow" style="color:rgba(255,255,255,0.3);margin-bottom:1rem;">Street Miles</div>
          <p style="font-size:0.9375rem;line-height:1.7;color:rgba(255,255,255,0.5);">The community-driven expression of the AREN platform. Street Miles connects individual chapters through a shared commitment to execution, proving that the standard has no geographic center.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DISCIPLINE EXECUTION STANDARDS TICKER -->
<div style="background:var(--color-black);padding:1rem 0;border-top:1px solid rgba(255,255,255,0.06);overflow:hidden;white-space:nowrap;">
  <div style="display:inline-flex;animation:marquee 20s linear infinite;">
    <span style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.2);padding:0 2rem;">DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS •</span>
    <span style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.2);padding:0 2rem;">DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS • DISCIPLINE • EXECUTION • STANDARDS •</span>
  </div>
</div>

<!-- NATIONAL PERFORMANCE PLATFORM -->
<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <div class="text-eyebrow" style="margin-bottom:2rem;">National Performance Platform</div>
        <h2 class="text-h2" style="max-width:22ch;margin-bottom:1.75rem;">Building a scalable culture of community chapters across the nation.</h2>
        <p class="text-body" style="max-width:46ch;">AREN is evolving into a coordinated performance ecosystem, establishing elite training protocols and community expression while maintaining the absolute integrity of the standard.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;max-width:400px;">
        <a href="/contact" class="btn btn--primary" style="justify-content:space-between;">Join the Collective ${arrowRight()}</a>
        <a href="/training" class="btn btn--outline" style="justify-content:space-between;">Explore Training ${arrowRight()}</a>
        <a href="/street-miles" class="btn btn--outline" style="justify-content:space-between;">Join Street Miles NYC ${arrowRight()}</a>
      </div>
    </div>
  </div>
</section>

${footer()}
${closingTags()}
`
