#!/usr/bin/env python3
"""
AREN Athletic — Data-driven static build for CloudCannon.

Reads JSON from data/pages/*.json + data/site/site.json,
renders full HTML pages using Python template functions,
outputs to dist/.

CloudCannon edits the JSON files directly (structured inputs),
then this script rebuilds the HTML.

Build command : python3 build_static.py
Output dir    : dist

Route mapping:
  data/pages/home.json       → dist/index.html            → /
  data/pages/about.json      → dist/about/index.html      → /about/
  data/pages/contact.json    → dist/contact/index.html     → /contact/
  data/pages/services.json   → dist/services/index.html    → /services/
  data/pages/collection.json → dist/collection/index.html  → /collection/
  data/pages/product.json    → dist/product/index.html     → /product/
  data/pages/training.json   → dist/training/index.html    → /training/
  data/pages/street-miles.json → dist/street-miles-nyc/index.html → /street-miles-nyc/
  (shop + apparel copied from site/ as-is)
"""

import json, os, shutil, sys, html as html_mod

DIST        = "dist"
SITE_JSON   = "data/site/site.json"
PAGES_DIR   = "data/pages"
SRC_ASSETS  = "assets"
SITE_ASSETS = "site/assets"

# ─── Helpers ──────────────────────────────────────────────────────────────────

def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def e(text):
    """HTML-escape plain text."""
    if text is None:
        return ""
    return html_mod.escape(str(text))

def raw(text):
    """Pass through HTML content (already safe)."""
    return str(text) if text else ""

def strip_p(html_str):
    """Strip outer <p>...</p> from a string that's a single paragraph."""
    s = str(html_str).strip()
    if s.startswith("<p>") and s.endswith("</p>") and s.count("<p>") == 1:
        return s[3:-4]
    return s

def fix_url(url):
    """Convert Shopify-style /pages/xxx to real paths."""
    if not url:
        return "#"
    mapping = {
        "/pages/about": "/about/",
        "/pages/training": "/training/",
        "/pages/services": "/services/",
        "/pages/street-miles": "/street-miles-nyc/",
        "/pages/shop": "/shop/",
        "/pages/contact": "/contact/",
        "/collections/all": "/collection/",
    }
    return mapping.get(url, url)


# ─── Shared partials ─────────────────────────────────────────────────────────

def render_head(title, description="AREN ATHLETIC — Built by discipline. Proven by action."):
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{e(title)}</title>
  <meta name="description" content="{e(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/aren-theme.css">
  <link rel="stylesheet" href="/assets/styles.css">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
</head>"""


def render_nav(site, active=""):
    links = [
        ("/",                  "Home"),
        ("/about/",            "About AREN"),
        ("/training/",         "Training"),
        ("/services/",         "Services"),
        ("/street-miles-nyc/", "Street Miles NYC"),
        ("/shop/",             "Shop"),
        ("/contact/",          "Contact / Join"),
    ]
    nav_html = ""
    mobile_html = ""
    for href, label in links:
        act = " active" if href == active else ""
        nav_html += f'      <a href="{href}" class="nav-link{act} editable">{e(label)}</a>\n'
        mobile_html += f'    <a href="{href}" class="nav-mobile-link{act} editable">{e(label)}</a>\n'

    return f"""
<!-- ============================================================
     NAV
     ============================================================ -->
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="AREN Athletic home">
      <img
        src="/assets/aren-logo.png"
        alt="AREN Athletic"
        class="nav-logo-image editable"
        style="width:160px;">
    </a>
    <div class="nav-links">
{nav_html}    </div>
    <div class="nav-actions">
      <a href="/account/login" class="nav-action-link editable">Log In</a>
      <a href="/shop/" class="nav-cta editable">Shop Now</a>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" type="button">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="nav-mobile" id="nav-mobile">
  <div class="nav-mobile-links">
{mobile_html}    <a href="/account/login" class="nav-mobile-link editable">Log In</a>
  </div>
</div>"""


def render_footer(site):
    f = site.get("footer", {})
    eco_links = ""
    for lnk in f.get("ecosystem_links", []):
        url = fix_url(lnk.get("url", "#"))
        eco_links += f'          <li><a href="{e(url)}" class="footer-link editable">{e(lnk.get("title",""))}</a></li>\n'

    acc_links = ""
    for lnk in f.get("access_links", []):
        url = fix_url(lnk.get("url", "#"))
        acc_links += f'          <li><a href="{e(url)}" class="footer-link editable">{e(lnk.get("title",""))}</a></li>\n'

    return f"""
<!-- ============================================================
     FOOTER
     ============================================================ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">

      <div class="footer-col">
        <a href="/" class="footer-brand-name footer-brand-link">
          <img
            src="/assets/aren-logo.png"
            alt="AREN Athletic"
            class="footer-logo-image editable">
        </a>
        <div class="footer-brand-taglines">
          <span class="footer-brand-tagline editable">{e(f.get("tagline_1","SMNYC: FIVE BOROUGH CHAPTER"))}</span>
          <span class="footer-brand-tagline editable">{e(f.get("tagline_2","DISCIPLINE AND PERFORMANCE."))}</span>
          <span class="footer-brand-tagline editable">{e(f.get("tagline_3","AREN ATHLETIC UNIFORM."))}</span>
        </div>
      </div>

      <div class="footer-col">
        <h3 class="footer-col-title editable">{e(f.get("ecosystem_heading","ECOSYSTEM"))}</h3>
        <ul class="footer-links" style="list-style:none;padding:0;margin:0;">
{eco_links}        </ul>
      </div>

      <div class="footer-col">
        <h3 class="footer-col-title editable">{e(f.get("access_heading","ACCESS"))}</h3>
        <ul class="footer-links" style="list-style:none;padding:0;margin:0;">
{acc_links}        </ul>
      </div>

      <div class="footer-col">
        <h3 class="footer-col-title editable">{e(f.get("network_heading","NATIONAL HUB NETWORK."))}</h3>
        <div class="footer-links">
          <a href="mailto:{e(f.get("email_address","info@arenathletic.com"))}" class="footer-link editable">{e(f.get("email_address","INFO@ARENATHLETIC.COM")).upper()}</a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <span class="footer-identity-line editable">{e(f.get("identity_line","AREN ATHLETIC — NEW YORK CITY"))}</span>
        <p class="footer-copyright editable">{e(f.get("copyright_text","© 2026 AREN ATHLETIC. ALL RIGHTS RESERVED."))}</p>
      </div>
      <div style="display:flex;gap:2rem;">
        <a href="#" class="footer-copyright editable">{e(f.get("privacy_label","PRIVACY"))}</a>
        <a href="#" class="footer-copyright editable">{e(f.get("terms_label","TERMS"))}</a>
      </div>
    </div>

  </div>
</footer>

<script src="/assets/aren-theme.js" defer></script>
</body>
</html>"""


def render_marquee(text, section_label="ANNOUNCEMENT TICKER"):
    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<div class="marquee-strip">
  <div class="marquee-track">
    <span class="marquee-text editable">{e(text)}</span>
    <span class="marquee-text">{e(text)}</span>
  </div>
</div>"""


# ─── Section renderers ────────────────────────────────────────────────────────

def render_hero_dark(data, section_label="HERO"):
    """Dark hero with background image and gradient overlay."""
    h = data
    min_h = h.get("min_height", 640)
    gradient = h.get("overlay_gradient", "linear-gradient(165deg,rgba(28,28,26,0.88) 0%,rgba(35,35,33,0.68) 55%,rgba(26,26,24,0.92) 100%)")
    img = h.get("fallback_image_url", "")
    pos = h.get("background_position", "center")
    hw = h.get("heading_width", 16)
    cw = h.get("copy_width", 44)

    copy_html = ""
    if h.get("copy"):
        copy_html = f'\n    <p class="text-body editable" style="max-width:{cw}ch;color:rgba(255,255,255,0.6);margin-bottom:2rem;">{raw(strip_p(h["copy"]))}</p>'

    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<section class="page-hero page-hero--dark" style="position:relative;overflow:hidden;min-height:{min_h}px;display:flex;align-items:flex-end;">
  <img
    src="{e(img)}"
    alt="{e(h.get('eyebrow','Hero'))} hero"
    class="editable"
    style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:{e(pos)};z-index:0;">
  <div style="position:absolute;inset:0;background:{gradient};"></div>
  <div class="container" style="position:relative;z-index:1;padding-bottom:var(--space-xl);">
    <p class="text-eyebrow editable" style="margin-bottom:2rem;color:rgba(255,255,255,0.35);">{e(h.get("eyebrow",""))}</p>
    <h1 class="text-display editable" style="color:#fff;max-width:{hw}ch;margin-bottom:2rem;">{raw(h.get("heading",""))}</h1>{copy_html}
  </div>
</section>"""


def render_hero_light(data, section_label="HERO"):
    """Light hero with background image and light gradient overlay."""
    h = data
    min_h = h.get("min_height", 420)
    img = h.get("fallback_image_url", "")
    gradient = h.get("overlay_gradient", "rgba(249,247,241,0.92)")
    hw = h.get("heading_width", 18)
    cw = h.get("copy_width", 44)

    copy_html = ""
    if h.get("copy"):
        copy_html = f'\n    <p class="text-body editable" style="max-width:{cw}ch;">{raw(strip_p(h["copy"]))}</p>'

    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<section class="page-hero" style="position:relative;overflow:hidden;min-height:{min_h}px;display:flex;align-items:flex-end;background:var(--color-off-white);">
  <img
    src="{e(img)}"
    alt="{e(h.get('eyebrow','Hero'))} hero"
    class="editable"
    style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;">
  <div style="position:absolute;inset:0;background:{gradient};"></div>
  <div class="container" style="position:relative;z-index:1;padding-bottom:var(--space-xl);">
    <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(h.get("eyebrow",""))}</p>
    <h1 class="text-display editable" style="max-width:{hw}ch;margin-bottom:2rem;">{raw(h.get("heading",""))}</h1>{copy_html}
  </div>
</section>"""


def render_card_list(data, section_label="CARD LIST", dark=False, border_style=""):
    """Two-column section: left text + right card list. Matches site/ originals exactly."""
    bg = 'background:var(--color-black);color:var(--color-white);' if dark else ''
    card_bg = "rgba(0,0,0,0.02)" if not dark else "rgba(0,0,0,0.02)"

    cards_html = ""
    for card in data.get("cards", []):
        cards_html += f"""        <li style="padding:2.5rem;background:{card_bg};border:1px solid var(--color-warm-gray);">
          <h3 class="text-eyebrow editable" style="margin-bottom:1rem;">{e(card.get("title",""))}</h3>
          <p class="editable" style="font-size:0.9375rem;line-height:1.7;">{e(card.get("description",""))}</p>
        </li>\n"""

    kicker_html = ""
    if data.get("kicker"):
        kicker_html = f'\n        <p class="editable" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;margin-top:1rem;">{e(data["kicker"])}</p>'

    copy_html = ""
    if data.get("copy"):
        copy_html = f"""
        <div class="rte editable">
          {raw(data["copy"])}
        </div>"""

    section_style = bg + border_style

    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<section class="section"{f' style="{section_style}"' if section_style else ''}>
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(data.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="margin-bottom:2rem;">{raw(data.get("heading",""))}</h2>{copy_html}{kicker_html}
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2rem;padding-left:var(--space-lg);border-left:1px solid var(--color-warm-gray);">
{cards_html}      </ul>
    </div>
  </div>
</section>"""


def render_cta_links(data, section_label="CTA LINKS", border_top=True, border_bottom=False):
    """Two-column section: left text + right link buttons."""
    borders = ""
    if border_top:
        borders += "border-top:1px solid var(--color-warm-gray);"
    if border_bottom:
        borders += "border-bottom:1px solid var(--color-warm-gray);"

    links_html = ""
    for lnk in data.get("links", []):
        url = fix_url(lnk.get("url", "#"))
        style = lnk.get("style", "outline")
        links_html += f'        <li>\n          <a href="{e(url)}" class="btn btn--{style} editable" style="display:block;text-align:center;">{e(lnk.get("label",""))}</a>\n        </li>\n'

    copy_html = ""
    if data.get("copy"):
        copy_html = f"""
        <div class="rte editable">
          {raw(data["copy"])}
        </div>"""

    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<section class="section" style="{borders}">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(data.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="max-width:22ch;margin-bottom:1.75rem;">{raw(data.get("heading",""))}</h2>{copy_html}
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;max-width:420px;justify-self:end;">
{links_html}      </ul>
    </div>
  </div>
</section>"""


def render_split_content(data, section_label="SPLIT CONTENT", border_top=False, border_bottom=True):
    """Two-column text/image section matching site/ originals."""
    borders = ""
    if border_top:
        borders += "border-top:1px solid var(--color-warm-gray);"
    if border_bottom:
        borders += "border-bottom:1px solid var(--color-warm-gray);"

    cols = data.get("columns", "1fr 1fr")
    valign = data.get("vertical_align", "start")
    hw = data.get("heading_width", 18)
    img = data.get("fallback_image_url", "")
    aspect = data.get("image_aspect", "3/4")
    btn_style = data.get("button_style", "outline")
    btn_url = fix_url(data.get("button_url", "#"))
    btn_label = data.get("button_label", "")

    copy_html = ""
    if data.get("copy"):
        copy_html = f"""
        <div class="text-body rte editable">
          {raw(data["copy"])}
        </div>"""

    # For single-line copy (no HTML), use a simpler pattern
    if data.get("copy") and not "<" in str(data.get("copy", "")):
        copy_html = f'\n        <p class="text-body editable">{e(data["copy"])}</p>'

    btn_html = ""
    if btn_label:
        btn_html = f"""
        <div style="margin-top:2rem;">
          <a href="{e(btn_url)}" class="btn btn--{btn_style} editable">{e(btn_label)}</a>
        </div>"""

    img_html = ""
    if img:
        img_html = f"""
      <div style="position:relative;overflow:hidden;aspect-ratio:{aspect};">
        <img
          src="{e(img)}"
          alt="{e(data.get('heading',''))}"
          class="editable"
          style="width:100%;height:100%;object-fit:cover;display:block;"
          loading="lazy">
      </div>"""

    return f"""
<!-- ============================================================
     {section_label}
     ============================================================ -->
<section class="section"{f' style="{borders}"' if borders else ''}>
  <div class="container">
    <div style="display:grid;grid-template-columns:{cols};gap:var(--space-xl);align-items:{valign};">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(data.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="max-width:{hw}ch;margin-bottom:1.75rem;">{raw(data.get("heading",""))}</h2>{copy_html}{btn_html}
      </div>{img_html}
    </div>
  </div>
</section>"""


# ─── Page builders ────────────────────────────────────────────────────────────

def build_home(data, site):
    h = data.get("hero", {})
    parts = []
    parts.append(render_head("AREN Athletic"))
    parts.append('<body class="template-home">')
    parts.append(render_nav(site, active="/"))

    # Marquee
    parts.append(render_marquee(
        data.get("announcement_ticker", {}).get("text", ""),
        "ANNOUNCEMENT TICKER"
    ))

    # Hero (custom for home — has buttons + microcopy)
    gradient = h.get("overlay_gradient", "linear-gradient(165deg,rgba(28,28,26,0.88) 0%,rgba(35,35,33,0.68) 55%,rgba(26,26,24,0.92) 100%)")
    img = h.get("fallback_image_url", "")
    parts.append(f"""
<!-- ============================================================
     HERO
     ============================================================ -->
<section class="page-hero page-hero--dark" style="position:relative;overflow:hidden;min-height:{h.get("min_height",640)}px;display:flex;align-items:flex-end;">
  <img
    src="{e(img)}"
    alt="AREN Athletic Hero"
    class="editable"
    style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;">
  <div style="position:absolute;inset:0;background:{gradient};"></div>
  <div class="container" style="position:relative;z-index:1;padding-bottom:var(--space-xl);">
    <p class="text-eyebrow editable" style="margin-bottom:2rem;color:rgba(255,255,255,0.35);">{e(h.get("eyebrow","AREN ATHLETIC"))}</p>
    <h1 class="editable">{raw(h.get("heading","THE STANDARD IS THE STANDARD."))}</h1>
    <p class="text-body editable" style="max-width:{h.get("copy_width",44)}ch;color:rgba(255,255,255,0.65);margin-bottom:2rem;">{raw(strip_p(h.get("copy","")))}</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem;">
      <a href="/shop/" class="btn btn--primary editable">{e(h.get("primary_button_label","Shop Apparel"))}</a>
      <a href="/contact/" class="btn btn--outline-white editable">{e(h.get("secondary_button_label","Join the Community"))}</a>
    </div>
    <div style="display:grid;gap:0.35rem;color:rgba(255,255,255,0.42);font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.18em;text-transform:uppercase;">
      <span class="editable">{e(h.get("microcopy_one",""))}</span>
      <span class="editable">{e(h.get("microcopy_two",""))}</span>
    </div>
  </div>
</section>""")

    # Collection Categories
    cc = data.get("collection_categories", {})
    cats_html = ""
    for cat in cc.get("categories", []):
        link = fix_url(cat.get("link", "/shop/"))
        cats_html += f"""      <li>
        <a href="{e(link)}" class="product-card" style="text-decoration:none;color:inherit;display:block;">
          <div class="product-name">
            <span class="text-eyebrow editable">{e(cat.get("number",""))}</span>
            <span class="editable">{e(cat.get("title",""))}</span>
          </div>
          <p class="product-desc editable">{e(cat.get("description",""))}</p>
        </a>
      </li>\n"""
    parts.append(f"""
<!-- ============================================================
     COLLECTION CATEGORIES
     ============================================================ -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <p class="text-eyebrow mb-sm editable">{e(cc.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable">{e(cc.get("heading",""))}</h2>
      </div>
    </div>
    <ul class="product-grid" style="list-style:none;padding:0;margin:0;">
{cats_html}    </ul>
  </div>
</section>""")

    # Featured Collection
    fc = data.get("featured_collection", {})
    fc_cards = ""
    for card in fc.get("fallback_cards", []):
        bg = card.get("background_color", "#1e1e1c")
        link = fix_url(card.get("link", "/shop/"))
        fc_cards += f"""      <li class="product-card" style="background:{bg};padding:2rem;">
        <p class="text-eyebrow editable">{e(card.get("tag",""))}</p>
        <h3 class="editable">{e(card.get("title",""))}</h3>
        <p class="editable">{e(card.get("description",""))}</p>
        <a href="{e(link)}" class="btn btn--outline-white editable">{e(card.get("cta_label","Shop"))}</a>
      </li>\n"""
    parts.append(f"""
<!-- ============================================================
     FEATURED PRODUCTS
     ============================================================ -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <p class="text-eyebrow mb-sm editable">{e(fc.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable">{e(fc.get("heading",""))}</h2>
      </div>
      <a href="/shop/" class="btn btn--ghost editable">{e(fc.get("button_label","View All"))}</a>
    </div>
    <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;">
{fc_cards}    </ul>
  </div>
</section>""")

    # Philosophy / Image with text
    iwt = data.get("image_with_text", {})
    stats_html = ""
    for st in iwt.get("stats", []):
        stats_html += f"""          <div class="image-with-text__stat">
            <p class="text-display editable" style="font-size:clamp(1.6rem,3vw,3rem);">{e(st.get("value",""))}</p>
            <p class="text-eyebrow editable">{e(st.get("label",""))}</p>
          </div>\n"""
    parts.append(f"""
<!-- ============================================================
     PHILOSOPHY / IMAGE WITH TEXT
     ============================================================ -->
<section class="image-with-text">
  <div class="container">
    <div class="image-with-text__grid">
      <div class="media-card">
        <img
          src="{e(h.get("fallback_image_url",""))}"
          alt="AREN standard"
          class="editable">
      </div>
      <div class="image-with-text__content">
        <p class="text-eyebrow editable">{e(iwt.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable">{e(iwt.get("heading",""))}</h2>
        <p class="text-body editable">{raw(strip_p(iwt.get("text","")))}</p>
        <div>
          <a href="{e(fix_url(iwt.get("button_link","/about/")))}" class="btn btn--outline editable">{e(iwt.get("button_label",""))}</a>
        </div>
        <div class="image-with-text__stats">
{stats_html}        </div>
      </div>
    </div>
  </div>
</section>""")

    # Editorial (Street Miles)
    ed = data.get("editorial_section", {})
    ed_stats = ""
    for st in ed.get("stats", []):
        ed_stats += f"""          <div class="image-with-text__stat">
            <p class="text-display editable" style="font-size:clamp(1.6rem,3vw,3rem);">{e(st.get("value",""))}</p>
            <p class="text-eyebrow editable">{e(st.get("label",""))}</p>
          </div>\n"""
    parts.append(f"""
<!-- ============================================================
     STREET MILES EDITORIAL
     ============================================================ -->
<section class="image-with-text image-with-text--dark">
  <div class="container">
    <div class="image-with-text__grid">
      <div class="media-card">
        <img
          src="{e(ed.get("fallback_image_url",""))}"
          alt="Street Miles NYC"
          class="editable"
          style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div class="image-with-text__content">
        <p class="text-eyebrow editable">{e(ed.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="color:#fff;">{e(ed.get("heading",""))}</h2>
        <p class="text-body editable">{raw(strip_p(ed.get("copy","")))}</p>
        <div>
          <a href="{e(fix_url(ed.get("button_url","/street-miles-nyc/")))}" class="btn btn--outline-white editable">{e(ed.get("button_label",""))}</a>
        </div>
        <div class="image-with-text__stats">
{ed_stats}        </div>
      </div>
    </div>
  </div>
</section>""")

    # Newsletter
    nl = data.get("newsletter", {})
    parts.append(f"""
<!-- ============================================================
     NEWSLETTER / COMMUNITY CTA
     ============================================================ -->
<section class="section">
  <div class="container container--narrow" style="text-align:center;">
    <p class="text-eyebrow editable" style="margin-bottom:1rem;">{e(nl.get("eyebrow",""))}</p>
    <h2 class="text-h2 editable" style="margin-bottom:1rem;">{e(nl.get("heading",""))}</h2>
    <p class="text-body editable" style="margin-bottom:2rem;">{raw(strip_p(nl.get("copy","")))}</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <input class="form-input" type="email" placeholder="Email address" style="max-width:320px;">
      <button class="btn btn--primary editable">{e(nl.get("button_label","Join"))}</button>
    </div>
    <p class="text-body-sm editable" style="margin-top:1rem;">{e(nl.get("disclaimer",""))}</p>
  </div>
</section>""")

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_about(data, site):
    parts = []
    parts.append(render_head("About — AREN Athletic"))
    parts.append('<body class="template-about">')
    parts.append(render_nav(site, active="/about/"))
    parts.append(render_hero_dark(data.get("hero", {}), "HERO"))
    parts.append(render_marquee(data.get("marquee", {}).get("text", ""), "ANNOUNCEMENT TICKER"))
    parts.append(render_split_content(data.get("intro", {}), "INTRO", border_bottom=True))

    # Body copy
    body = data.get("body", {})
    parts.append(f"""
<!-- ============================================================
     BODY COPY
     ============================================================ -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container container--narrow">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div class="rte editable">
        {raw(body.get("copy",""))}
      </div>
      <p class="editable" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;padding-top:0.25rem;">{e(body.get("kicker",""))}</p>
    </div>
  </div>
</section>""")

    # Identity
    parts.append(render_split_content(data.get("identity", {}), "IDENTITY", border_bottom=True))

    # Values (card list)
    parts.append(render_card_list(
        data.get("values", {}),
        "VALUES",
        dark=data.get("values", {}).get("dark_theme", True)
    ))

    # CTA Links
    parts.append(render_cta_links(data.get("cta", {}), "CTA LINKS", border_top=True))

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_contact(data, site):
    parts = []
    parts.append(render_head("Contact / Join — AREN Athletic", "AREN ATHLETIC — Connect with AREN."))
    parts.append('<body class="template-contact">')
    parts.append(render_nav(site, active="/contact/"))

    hero = data.get("hero", {})
    if hero.get("dark_theme", False):
        parts.append(render_hero_dark(hero, "HERO"))
    else:
        parts.append(render_hero_light(hero, "HERO"))

    parts.append(render_marquee(data.get("marquee", {}).get("text", ""), "ANNOUNCEMENT TICKER"))
    parts.append(render_card_list(
        data.get("channels", {}),
        "CHANNELS",
        dark=data.get("channels", {}).get("dark_theme", False),
        border_style="border-bottom:1px solid var(--color-warm-gray);"
    ))

    # Contact form section
    cfi = data.get("contact_form_intro", {})
    btn_url = fix_url(cfi.get("button_url", "mailto:info@arenathletic.com"))
    btn_style = cfi.get("button_style", "primary")
    cols = cfi.get("columns", "0.95fr 1.05fr")
    parts.append(f"""
<!-- ============================================================
     CONTACT FORM SECTION
     ============================================================ -->
<section class="section" id="contact-form-section" style="border-top:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:{cols};gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(cfi.get("eyebrow","Contact Form"))}</p>
        <h2 class="text-h2 editable" style="max-width:18ch;margin-bottom:1.75rem;">{raw(cfi.get("heading",""))}</h2>
        <div class="rte editable">
          {raw(cfi.get("copy",""))}
        </div>
        <div style="margin-top:2rem;">
          <a href="{e(btn_url)}" class="btn btn--{btn_style} editable">{e(cfi.get("button_label","Email Directly"))}</a>
        </div>
      </div>
      <form style="display:flex;flex-direction:column;gap:1.25rem;">
        <div>
          <label class="text-eyebrow" for="contact-name" style="display:block;margin-bottom:0.5rem;">Name</label>
          <input class="form-input" type="text" id="contact-name" name="name" placeholder="Your name" style="width:100%;">
        </div>
        <div>
          <label class="text-eyebrow" for="contact-email" style="display:block;margin-bottom:0.5rem;">Email</label>
          <input class="form-input" type="email" id="contact-email" name="email" placeholder="your@email.com" style="width:100%;">
        </div>
        <div>
          <label class="text-eyebrow" for="contact-type" style="display:block;margin-bottom:0.5rem;">Inquiry Type</label>
          <select class="form-input" id="contact-type" name="type" style="width:100%;">
            <option value="">Select</option>
            <option value="training">Performance Training</option>
            <option value="community">Community Membership</option>
            <option value="partnership">Brand Partnership</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
        <div>
          <label class="text-eyebrow" for="contact-message" style="display:block;margin-bottom:0.5rem;">Message</label>
          <textarea class="form-input" id="contact-message" name="message" rows="5" placeholder="Your message" style="width:100%;resize:vertical;"></textarea>
        </div>
        <button class="btn btn--primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</section>""")

    # Ecosystem links
    parts.append(render_cta_links(
        data.get("ecosystem", {}),
        "ECOSYSTEM LINKS",
        border_top=True,
        border_bottom=True
    ))

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_services(data, site):
    parts = []
    parts.append(render_head("Services — AREN Athletic", "AREN ATHLETIC — Structured access. Every level."))
    parts.append('<body class="template-services">')
    parts.append(render_nav(site, active="/services/"))

    hero = data.get("hero", {})
    if hero.get("dark_theme", True):
        parts.append(render_hero_dark(hero, "HERO"))
    else:
        parts.append(render_hero_light(hero, "HERO"))

    parts.append(render_marquee(data.get("marquee", {}).get("text", ""), "ANNOUNCEMENT TICKER"))
    parts.append(render_card_list(
        data.get("services_list", {}),
        "SERVICES LIST",
        dark=data.get("services_list", {}).get("dark_theme", False)
    ))

    # CTA (split content with button, no image — matches original which has empty right column)
    cta = data.get("cta", {})
    cta_cols = cta.get("columns", "1fr 0.9fr")
    btn_url = fix_url(cta.get("button_url", "/contact/"))
    btn_style = cta.get("button_style", "primary")
    parts.append(f"""
<!-- ============================================================
     CTA
     ============================================================ -->
<section class="section" style="border-top:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:{cta_cols};gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(cta.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="max-width:18ch;margin-bottom:1.75rem;">{raw(cta.get("heading",""))}</h2>
        <div class="rte editable">
          {raw(cta.get("copy",""))}
        </div>
        <div style="margin-top:2rem;">
          <a href="{e(btn_url)}" class="btn btn--{btn_style} editable">{e(cta.get("button_label",""))}</a>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</section>""")

    # CTA Links
    parts.append(render_cta_links(
        data.get("cta_links", {}),
        "CTA LINKS",
        border_top=True,
        border_bottom=True
    ))

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_training(data, site):
    parts = []
    parts.append(render_head("Training — AREN Athletic"))
    parts.append('<body class="template-training">')
    parts.append(render_nav(site, active="/training/"))
    parts.append(render_hero_dark(data.get("hero", {}), "HERO"))
    parts.append(render_marquee(data.get("marquee", {}).get("text", ""), "ANNOUNCEMENT TICKER"))

    # Philosophy — card list with copy rendered as <p class="rte editable"> (matches original)
    phil = data.get("philosophy", {})
    parts.append(render_card_list(phil, "PHILOSOPHY", dark=False))

    # Feature image + text
    feat = data.get("feature", {})
    parts.append(render_split_content(feat, "FEATURE IMAGE + TEXT", border_bottom=True))

    # Programs / CTA links
    parts.append(render_cta_links(data.get("programs", {}), "PROGRAMS / CTA LINKS", border_top=False))

    # Who trains
    parts.append(render_card_list(
        data.get("who", {}),
        "WHO TRAINS — CARD LIST",
        dark=data.get("who", {}).get("dark_theme", True)
    ))

    # Get started — split content with button + extra details
    gs = data.get("get_started", {})
    gs_cols = gs.get("columns", "0.9fr 1.1fr")
    btn_url = fix_url(gs.get("button_url", "/contact/"))
    btn_style = gs.get("button_style", "primary")
    parts.append(f"""
<!-- ============================================================
     GET STARTED
     ============================================================ -->
<section class="section" style="border-top:1px solid var(--color-warm-gray);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:{gs_cols};gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(gs.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="max-width:16ch;margin-bottom:1.75rem;">{raw(gs.get("heading",""))}</h2>
        <p class="text-body editable">{raw(strip_p(gs.get("copy","")))}</p>
        <p class="text-body" style="margin-top:0.5rem;">
          <a href="mailto:{e(gs.get("email","info@arenathletic.com"))}" class="editable">{e(gs.get("email","info@arenathletic.com"))}</a>
        </p>
        <div style="margin-top:2rem;">
          <a href="{e(btn_url)}" class="btn btn--{btn_style} editable">{e(gs.get("button_label","Go to Contact"))}</a>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</section>""")

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_street_miles(data, site):
    parts = []
    parts.append(render_head("Street Miles NYC — AREN Athletic", "AREN ATHLETIC — Do the work. Carry the weight."))
    parts.append('<body class="template-street-miles">')
    parts.append(render_nav(site, active="/street-miles-nyc/"))

    # Hero (custom — has CTA buttons inline)
    hero = data.get("hero", {})
    min_h = hero.get("min_height", 620)
    gradient = hero.get("overlay_gradient", "linear-gradient(160deg,rgba(20,20,18,0.88) 0%,rgba(35,35,33,0.70) 55%,rgba(20,20,18,0.92) 100%)")
    img = hero.get("fallback_image_url", "")
    pos = hero.get("background_position", "center top")
    hw = hero.get("heading_width", 12)
    cw = hero.get("copy_width", 52)

    hero_cta = data.get("hero_cta", {})
    hero_btns = ""
    for lnk in hero_cta.get("links", []):
        url = fix_url(lnk.get("url", "#"))
        style = lnk.get("style", "outline-white")
        if style == "primary":
            hero_btns += f'      <a href="{e(url)}" class="btn btn--primary editable">{e(lnk.get("label",""))}</a>\n'
        else:
            hero_btns += f'      <a href="{e(url)}" class="btn btn--outline-white editable">{e(lnk.get("label",""))}</a>\n'

    parts.append(f"""
<!-- ============================================================
     HERO
     ============================================================ -->
<section class="page-hero page-hero--dark" style="position:relative;overflow:hidden;min-height:{min_h}px;display:flex;align-items:flex-end;">
  <img
    src="{e(img)}"
    alt="Street Miles NYC"
    class="editable"
    style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:{e(pos)};z-index:0;">
  <div style="position:absolute;inset:0;background:{gradient};"></div>
  <div class="container" style="position:relative;z-index:1;padding-bottom:var(--space-xl);">
    <p class="text-eyebrow editable" style="margin-bottom:2rem;color:rgba(255,255,255,0.35);">{e(hero.get("eyebrow",""))}</p>
    <h1 class="text-display editable" style="color:#fff;max-width:{hw}ch;margin-bottom:2rem;">{raw(hero.get("heading",""))}</h1>
    <p class="text-body editable" style="max-width:{cw}ch;color:rgba(255,255,255,0.6);margin-bottom:2rem;">{raw(strip_p(hero.get("copy","")))}</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
{hero_btns}    </div>
  </div>
</section>""")

    parts.append(render_marquee(data.get("marquee", {}).get("text", ""), "ANNOUNCEMENT TICKER"))

    # Culture
    parts.append(render_split_content(data.get("culture", {}), "CULTURE", border_bottom=True))

    # Protocol
    parts.append(render_card_list(data.get("protocol", {}), "PROTOCOL", dark=False))

    # Chapter stats (custom layout — 2x2 grid of stat cards)
    ch = data.get("chapter", {})
    ch_cards = ""
    for card in ch.get("cards", []):
        ch_cards += f"""        <li style="padding:2.5rem;border:1px solid rgba(255,255,255,0.12);">
          <p class="text-display editable" style="font-size:clamp(2rem,4vw,4rem);margin-bottom:0.5rem;">{e(card.get("title",""))}</p>
          <p class="text-eyebrow editable">{e(card.get("description",""))}</p>
        </li>\n"""
    parts.append(f"""
<!-- ============================================================
     CHAPTER STATS
     ============================================================ -->
<section class="section" style="background:var(--color-black);color:var(--color-white);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(ch.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="margin-bottom:2rem;">{e(ch.get("heading",""))}</h2>
        <div class="rte editable">
          {raw(ch.get("copy",""))}
        </div>
        <p class="editable" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;margin-top:1rem;">{e(ch.get("kicker",""))}</p>
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:2rem;">
{ch_cards}      </ul>
    </div>
  </div>
</section>""")

    # Quotes — card list without left border (different layout from standard)
    quotes = data.get("quotes", {})
    q_cards = ""
    for card in quotes.get("cards", []):
        q_cards += f"""        <li style="padding:2.5rem;background:rgba(0,0,0,0.02);border:1px solid var(--color-warm-gray);">
          <h3 class="text-eyebrow editable" style="margin-bottom:1rem;">{e(card.get("title",""))}</h3>
          <p class="editable" style="font-size:0.9375rem;line-height:1.7;">{e(card.get("description",""))}</p>
        </li>\n"""
    parts.append(f"""
<!-- ============================================================
     QUOTES
     ============================================================ -->
<section class="section" style="border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(quotes.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable" style="max-width:22ch;margin-bottom:1.75rem;">{raw(quotes.get("heading",""))}</h2>
        <div class="rte editable">
          {raw(quotes.get("copy",""))}
        </div>
        <p class="editable" style="font-family:var(--font-mono);font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;margin-top:1rem;">{e(quotes.get("kicker",""))}</p>
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2rem;">
{q_cards}      </ul>
    </div>
  </div>
</section>""")

    # Access links
    parts.append(render_cta_links(
        data.get("access", {}),
        "ACCESS",
        border_top=False,
        border_bottom=True
    ))

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_collection(data, site):
    cg = data.get("collection_grid", {})
    parts = []
    parts.append(render_head("Collection — AREN Athletic", "AREN ATHLETIC — Performance-informed apparel built for daily standards."))
    parts.append('<body class="template-collection">')
    parts.append(render_nav(site, active="/shop/"))

    # Hero heading
    parts.append(f"""
<!-- ============================================================
     HERO
     ============================================================ -->
<section style="padding-top:calc(68px + var(--space-lg));padding-bottom:var(--space-lg);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <h1 class="editable" style="font-family:var(--font-display);font-size:clamp(2.5rem,6vw,5.5rem);font-weight:700;letter-spacing:-0.01em;line-height:0.95;text-transform:uppercase;margin-bottom:1.5rem;">{e(cg.get("hero_heading","COMPOSURE UNDER PRESSURE."))}</h1>
    <p class="text-body editable" style="max-width:52ch;">{e(cg.get("hero_copy",""))}</p>
  </div>
</section>""")

    parts.append(render_marquee("AREN ATHLETIC — NEW YORK CITY — DISCIPLINE AND PERFORMANCE — STREET MILES NYC — FIVE BOROUGH CHAPTER — STRUCTURED PERFORMANCE — AREN ATHLETIC COLLECTIVE — APPAREL BUILT FOR TRAINING —", "ANNOUNCEMENT TICKER"))

    # Design philosophy
    cols = cg.get("philosophy_columns", [])
    cols_html = ""
    for i, col in enumerate(cols):
        border = "border-right:1px solid var(--color-warm-gray);" if i < len(cols) - 1 else ""
        cols_html += f"""      <li style="padding:2.5rem 2rem;{border}">
        <p class="text-eyebrow editable" style="margin-bottom:0.75rem;">{e(col.get("title",""))}</p>
        <p class="text-body-sm editable">{e(col.get("description",""))}</p>
      </li>\n"""
    parts.append(f"""
<!-- ============================================================
     DESIGN PHILOSOPHY
     ============================================================ -->
<section style="padding:3rem 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <p class="text-eyebrow editable" style="text-align:center;margin-bottom:2rem;">{e(cg.get("philosophy_eyebrow","Design Philosophy"))}</p>
    <h2 class="editable" style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3.2rem);font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;line-height:0.95;text-align:center;margin-bottom:3rem;">{e(cg.get("philosophy_heading",""))}</h2>
    <ul style="display:grid;grid-template-columns:repeat({len(cols)},1fr);gap:0;border:1px solid var(--color-warm-gray);list-style:none;padding:0;margin:0;">
{cols_html}    </ul>
  </div>
</section>""")

    # Collection grid placeholder
    parts.append(f"""
<!-- ============================================================
     COLLECTION GRID (PLACEHOLDER)
     ============================================================ -->
<section style="padding:var(--space-xl) 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;flex-wrap:wrap;gap:1rem;">
      <p class="text-eyebrow editable">{e(cg.get("current_collection_label","Current Collection"))}</p>
      <p class="text-eyebrow editable">{e(cg.get("all_pieces_label","All Pieces"))}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;">
      <div style="padding:4rem 2rem;background:var(--color-warm-gray);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;aspect-ratio:3/4;">
        <p class="text-eyebrow editable" style="margin-bottom:0.5rem;">{e(cg.get("empty_title","Add Shopify products"))}</p>
        <p class="text-body-sm editable">{e(cg.get("empty_description","This layout is ready for your real catalog."))}</p>
        <p class="text-body-sm editable" style="margin-top:0.5rem;">{e(cg.get("empty_price","Theme Ready"))}</p>
      </div>
    </div>
  </div>
</section>""")

    # Why AREN Apparel
    why_paras = ""
    for p in cg.get("why_paragraphs", []):
        why_paras += f'        <li><p class="text-body editable">{e(p)}</p></li>\n'

    parts.append(f"""
<!-- ============================================================
     WHY AREN APPAREL
     ============================================================ -->
<section style="padding:var(--space-xl) 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:2rem;">{e(cg.get("why_eyebrow",""))}</p>
        <h2 class="editable" style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:700;letter-spacing:-0.01em;text-transform:uppercase;line-height:0.95;margin-bottom:2rem;">{raw(cg.get("why_heading",""))}</h2>
        <p class="editable" style="font-family:var(--font-mono);font-size:0.75rem;font-style:italic;margin-top:2rem;padding-top:2rem;border-top:1px solid var(--color-warm-gray);">{e(cg.get("why_emphasis",""))}</p>
      </div>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1.5rem;padding-left:var(--space-lg);border-left:1px solid var(--color-warm-gray);">
{why_paras}      </ul>
    </div>
  </div>
</section>""")

    # Meta blocks
    meta_html = ""
    for block in cg.get("meta_blocks", []):
        meta_html += f"""      <li style="padding:2rem;border:1px solid var(--color-warm-gray);">
        <p class="text-eyebrow editable" style="margin-bottom:0.5rem;">{e(block.get("label",""))}</p>
        <p class="text-body-sm editable">{e(block.get("text",""))}</p>
      </li>\n"""
    parts.append(f"""
<!-- ============================================================
     META BLOCKS
     ============================================================ -->
<section style="padding:var(--space-lg) 0;border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat({len(cg.get("meta_blocks",[]))},1fr);gap:2rem;">
{meta_html}    </ul>
  </div>
</section>""")

    parts.append(render_footer(site))
    return "\n".join(parts)


def build_product(data, site):
    mp = data.get("main_product", {})
    rel = data.get("related", {})
    parts = []
    parts.append(render_head("Product — AREN Athletic"))
    parts.append('<body class="template-product">')
    parts.append(render_nav(site, active="/shop/"))

    parts.append(f"""
<!-- ============================================================
     PRODUCT DETAIL
     ============================================================ -->
<section style="padding-top:calc(68px + var(--space-xl));padding-bottom:var(--space-xl);border-bottom:1px solid var(--color-warm-gray);">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start;">

      <!-- Product Image -->
      <div style="position:relative;overflow:hidden;aspect-ratio:3/4;background:var(--color-warm-gray);">
        <img
          src="/assets/7e4d26bf.jpg"
          alt="Product image"
          class="editable"
          style="width:100%;height:100%;object-fit:cover;display:block;"
          loading="lazy">
      </div>

      <!-- Product Info -->
      <div>
        <p class="text-eyebrow editable" style="margin-bottom:1rem;">{e(mp.get("brand_label","AREN ATHLETIC"))}</p>
        <h1 class="text-display editable" style="margin-bottom:1rem;">Product Name</h1>
        <p class="text-body editable" style="margin-bottom:2rem;font-size:1.25rem;">$0.00</p>

        <!-- Variant Select -->
        <div style="margin-bottom:2rem;">
          <label class="text-eyebrow editable" style="display:block;margin-bottom:0.5rem;">Size</label>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button class="btn btn--outline editable" style="min-width:3rem;">S</button>
            <button class="btn btn--outline editable" style="min-width:3rem;">M</button>
            <button class="btn btn--outline editable" style="min-width:3rem;">L</button>
            <button class="btn btn--outline editable" style="min-width:3rem;">XL</button>
          </div>
        </div>

        <!-- Quantity -->
        <div style="margin-bottom:2rem;">
          <label class="text-eyebrow editable" style="display:block;margin-bottom:0.5rem;">{e(mp.get("quantity_label","Quantity"))}</label>
          <div style="display:flex;align-items:center;gap:0.5rem;border:1px solid var(--color-warm-gray);width:fit-content;">
            <button style="padding:0.75rem 1rem;background:none;border:none;cursor:pointer;">\u2212</button>
            <span style="padding:0.75rem 1rem;">1</span>
            <button style="padding:0.75rem 1rem;background:none;border:none;cursor:pointer;">+</button>
          </div>
        </div>

        <!-- Add to Cart -->
        <button class="btn btn--primary editable" style="width:100%;margin-bottom:2rem;">{e(mp.get("add_to_cart_label","Add to cart"))}</button>

        <!-- Description -->
        <div class="rte editable" style="margin-bottom:2rem;">
          <p>This product exemplifies the AREN standard \u2014 minimal, durable, and built for daily training. Performance-grade construction with a clean, structured silhouette.</p>
        </div>

        <!-- Meta -->
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;padding-top:2rem;border-top:1px solid var(--color-warm-gray);">
          <li style="display:flex;gap:1rem;">
            <span class="text-eyebrow editable" style="min-width:120px;">{e(mp.get("shipping_label","Shipping"))}</span>
            <span class="text-body-sm editable">{e(mp.get("shipping_text",""))}</span>
          </li>
          <li style="display:flex;gap:1rem;">
            <span class="text-eyebrow editable" style="min-width:120px;">{e(mp.get("returns_label","Returns"))}</span>
            <span class="text-body-sm editable">{e(mp.get("returns_text",""))}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>""")

    # Related products
    rel_cards = ""
    for card in rel.get("fallback_cards", []):
        bg = card.get("background_color", "#1e1e1c")
        link = fix_url(card.get("link", "/shop/"))
        rel_cards += f"""      <li class="product-card" style="background:{bg};padding:2rem;">
        <p class="text-eyebrow editable">{e(card.get("tag",""))}</p>
        <h3 class="editable">{e(card.get("title",""))}</h3>
        <p class="editable">{e(card.get("description",""))}</p>
        <a href="{e(link)}" class="btn btn--outline-white editable">{e(card.get("cta_label","Shop"))}</a>
      </li>\n"""
    parts.append(f"""
<!-- ============================================================
     RELATED PRODUCTS
     ============================================================ -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <div>
        <p class="text-eyebrow mb-sm editable">{e(rel.get("eyebrow",""))}</p>
        <h2 class="text-h2 editable">{e(rel.get("heading",""))}</h2>
      </div>
      <a href="/shop/" class="btn btn--ghost editable">{e(rel.get("button_label","Shop All"))}</a>
    </div>
    <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;">
{rel_cards}    </ul>
  </div>
</section>""")

    parts.append(render_footer(site))
    return "\n".join(parts)


# ─── Main build ───────────────────────────────────────────────────────────────

def main():
    # 1. Clean
    if os.path.exists(DIST):
        shutil.rmtree(DIST)
    os.makedirs(DIST)

    # 2. Load data
    site = load_json(SITE_JSON)
    page_data = {}
    for fname in os.listdir(PAGES_DIR):
        if fname.endswith(".json"):
            key = fname[:-5]
            page_data[key] = load_json(os.path.join(PAGES_DIR, fname))

    # 3. Build pages from JSON data
    pages = {
        "index.html":                    build_home(page_data.get("home", {}), site),
        "about/index.html":              build_about(page_data.get("about", {}), site),
        "contact/index.html":            build_contact(page_data.get("contact", {}), site),
        "services/index.html":           build_services(page_data.get("services", {}), site),
        "training/index.html":           build_training(page_data.get("training", {}), site),
        "street-miles-nyc/index.html":   build_street_miles(page_data.get("street-miles", {}), site),
        "collection/index.html":         build_collection(page_data.get("collection", {}), site),
        "product/index.html":            build_product(page_data.get("product", {}), site),
    }

    # Also copy existing shop + apparel pages from site/ (identical to collection)
    for extra in ["shop", "apparel"]:
        src = os.path.join("site", extra, "index.html")
        if os.path.isfile(src):
            with open(src, "r", encoding="utf-8") as f:
                pages[f"{extra}/index.html"] = f.read()

    for rel_path, html_content in pages.items():
        out_path = os.path.join(DIST, rel_path)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"[build] Rendered {rel_path}")

    # 4. Copy assets
    for asset_src in [SITE_ASSETS, SRC_ASSETS]:
        if os.path.isdir(asset_src):
            dest_assets = os.path.join(DIST, "assets")
            os.makedirs(dest_assets, exist_ok=True)
            for item in os.listdir(asset_src):
                s = os.path.join(asset_src, item)
                d = os.path.join(dest_assets, item)
                if os.path.isfile(s) and not os.path.exists(d):
                    shutil.copy2(s, d)
            print(f"[build] Merged '{asset_src}/' → '{DIST}/assets/'")

    # 5. Manifest
    print(f"\n[build] \u2713 Build complete — {len(pages)} pages rendered to {DIST}/")
    print(f"\nRoute mapping:")
    route_map = {
        "index.html": "/",
        "about/index.html": "/about/",
        "contact/index.html": "/contact/",
        "services/index.html": "/services/",
        "training/index.html": "/training/",
        "street-miles-nyc/index.html": "/street-miles-nyc/",
        "collection/index.html": "/collection/",
        "product/index.html": "/product/",
        "shop/index.html": "/shop/",
        "apparel/index.html": "/apparel/",
    }
    for rel_path in sorted(pages.keys()):
        url = route_map.get(rel_path, "/" + rel_path.replace("/index.html", "/"))
        size = len(pages[rel_path])
        print(f"  {DIST}/{rel_path:<30s} → {url:<24s} ({size:,} bytes)")


if __name__ == "__main__":
    main()
