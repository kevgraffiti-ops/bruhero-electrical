# Bru Hero Electrical

Static site for a South African electrical contracting business. Hand-coded HTML and
CSS, no framework, no build step.

```
index.html        Home
services.html     Services (4 blocks, anchor-linked)
contact.html      Contact + booking form
css/site.css      Entire stylesheet — all pages share it
js/site.js        Mobile menu + WhatsApp form handler
images/           Optimised photography (770 KB total)
```

## Run it locally

Open `index.html` in a browser. That's it. For a proper local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish on GitHub Pages

```bash
cd bru-hero-electrical
git init
git add .
git commit -m "Bru Hero Electrical — home, services, contact"
git branch -M main
git remote add origin https://github.com/kevgraffiti-ops/bru-hero-electrical.git
git push -u origin main
```

Create the empty repo on GitHub first (no README, no .gitignore — this folder has
everything). Then in the repo: **Settings → Pages → Source: Deploy from a branch →
Branch: `main`, folder: `/ (root)` → Save.**

The site goes live at `https://kevgraffiti-ops.github.io/bru-hero-electrical/` within
a minute or two.

## Still to do

- `about.html` and `blog.html` haven't been converted to this stylesheet yet — their
  nav and footer links are removed for now so nothing 404s.
- The booking form has no backend. It validates, then opens WhatsApp with the answers
  pre-filled. To add email delivery, point it at Formspree or Netlify Forms — the
  handler is one function in `js/site.js`.
- No LocalBusiness schema, favicon or Open Graph image yet.

## Real details in use

WhatsApp / phone: 068 621 4343 · Email: info@bruhero.co.za
