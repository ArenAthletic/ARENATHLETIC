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

// Login placeholder
app.get('/login', (c) => {
  return c.redirect('/contact')
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
        <a href="/" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.16em;text-transform:uppercase;border-bottom:1px solid #0a0a0a;padding-bottom:2px;">Return home</a>
      </div>
    </body>
    </html>
  `, 404)
})

export default app
