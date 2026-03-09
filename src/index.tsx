import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './routes/home'
import { aboutPage } from './routes/about'
import { trainingPage } from './routes/training'
import { servicesPage } from './routes/services'
import { streetMilesPage } from './routes/street-miles'
import { shopPage } from './routes/shop'
import { contactPage } from './routes/contact'

const app = new Hono()

// ── Static files ──────────────────────────────────────────────────
app.use('/static/*', serveStatic({ root: './' }))

// ── Page routes ───────────────────────────────────────────────────
app.get('/', (c) => {
  return c.html(homePage())
})

app.get('/about', (c) => {
  return c.html(aboutPage())
})

app.get('/training', (c) => {
  return c.html(trainingPage())
})

app.get('/services', (c) => {
  return c.html(servicesPage())
})

app.get('/street-miles', (c) => {
  return c.html(streetMilesPage())
})

app.get('/shop', (c) => {
  return c.html(shopPage())
})

app.get('/contact', (c) => {
  return c.html(contactPage())
})

// Login placeholder — redirects to contact/join
app.get('/login', (c) => {
  return c.redirect('/contact')
})

// Privacy policy stub
app.get('/privacy', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Privacy Policy — AREN ATHLETIC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/static/styles.css" />
      <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
    </head>
    <body>
      <nav class="nav"><div class="nav-inner"><a href="/" class="nav-logo">AREN ATHLETIC</a><div class="nav-links"><a href="/" class="nav-link">Home</a><a href="/shop" class="nav-link">Shop</a><a href="/contact" class="nav-link">Contact</a></div></div></nav>
      <div style="min-height:80vh;padding:calc(68px + 4rem) 0 6rem;background:var(--color-white);">
        <div class="container container--narrow">
          <div class="text-eyebrow" style="margin-bottom:2rem;">Legal</div>
          <h1 style="font-family:var(--font-display);font-size:clamp(2rem,5vw,4rem);font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;line-height:0.95;margin-bottom:3rem;">Privacy Policy</h1>
          <p class="text-body" style="margin-bottom:1.75rem;">AREN ATHLETIC ("AREN," "we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect, use, and protect information you provide when you visit arenathletic.com or engage with our services.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">Information We Collect</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">We collect information you voluntarily provide (name, email, phone) when you submit inquiry forms or sign up for community updates. We do not sell your personal information to third parties.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">How We Use Your Information</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">Information collected is used solely for AREN Athletic communications: responding to inquiries, sending community updates you have opted into, and coordinating training or community access.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">Contact</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">For privacy inquiries, contact us at <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>.</p>
          <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-mid-gray);margin-top:4rem;">Last updated: 2026. AREN ATHLETIC. NEW YORK CITY.</p>
          <div style="margin-top:3rem;"><a href="/" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.16em;text-transform:uppercase;border-bottom:1px solid var(--color-black);padding-bottom:2px;">Return home</a></div>
        </div>
      </div>
    </body>
    </html>
  `)
})

// Terms of service stub
app.get('/terms', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Terms of Service — AREN ATHLETIC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/static/styles.css" />
      <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
    </head>
    <body>
      <nav class="nav"><div class="nav-inner"><a href="/" class="nav-logo">AREN ATHLETIC</a><div class="nav-links"><a href="/" class="nav-link">Home</a><a href="/shop" class="nav-link">Shop</a><a href="/contact" class="nav-link">Contact</a></div></div></nav>
      <div style="min-height:80vh;padding:calc(68px + 4rem) 0 6rem;background:var(--color-white);">
        <div class="container container--narrow">
          <div class="text-eyebrow" style="margin-bottom:2rem;">Legal</div>
          <h1 style="font-family:var(--font-display);font-size:clamp(2rem,5vw,4rem);font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;line-height:0.95;margin-bottom:3rem;">Terms of Service</h1>
          <p class="text-body" style="margin-bottom:1.75rem;">By accessing or using arenathletic.com and engaging with AREN ATHLETIC services, you agree to the following terms. Please read them carefully.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">Use of the Site</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">This site is provided for informational and commercial purposes. You may not use the site for unlawful purposes or in any way that could damage AREN ATHLETIC or its community members.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">Community Standards</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">All AREN Athletic community participants are held to the AREN standard: discipline, presence, and consistency. Participation in training programs, Street Miles NYC, and community activities requires commitment to these values.</p>
          <h2 style="font-family:var(--font-sans);font-size:0.875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:2.5rem 0 1rem;">Contact</h2>
          <p class="text-body" style="margin-bottom:1.75rem;">For terms inquiries, contact us at <a href="mailto:info@arenathletic.com" style="color:var(--color-black);">info@arenathletic.com</a>.</p>
          <p style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-mid-gray);margin-top:4rem;">Last updated: 2026. AREN ATHLETIC. NEW YORK CITY.</p>
          <div style="margin-top:3rem;"><a href="/" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.16em;text-transform:uppercase;border-bottom:1px solid var(--color-black);padding-bottom:2px;">Return home</a></div>
        </div>
      </div>
    </body>
    </html>
  `)
})

// 404
app.notFound((c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 — AREN ATHLETIC</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/static/styles.css" />
    </head>
    <body>
      <nav class="nav"><div class="nav-inner"><a href="/" class="nav-logo">AREN ATHLETIC</a></div></nav>
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2.5rem;text-align:center;padding:2rem;">
        <div style="font-family:var(--font-mono);font-size:0.5rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-mid-gray);">Error — 404</div>
        <h1 style="font-family:var(--font-serif);font-size:clamp(3rem,8vw,6rem);font-weight:400;letter-spacing:-0.025em;line-height:1;">Page not found.</h1>
        <p style="font-family:var(--font-sans);font-size:1rem;color:var(--color-dark-gray);">This page doesn't exist or has moved.</p>
        <a href="/" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.16em;text-transform:uppercase;border-bottom:1px solid var(--color-black);padding-bottom:2px;">Return home</a>
      </div>
    </body>
    </html>
  `, 404)
})

export default app
