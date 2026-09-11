# Asterisco* — website

Static HTML site for [asteriscoworld.com](https://asteriscoworld.com), built to be
rebuilt in Elementor on WordPress.

## Viewing it

Open `index.html` in any browser — no build step, no server needed.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About — what we are, the problem, vision, umbrella model, nature, who we are |
| `events.html` | Events — upcoming and past |
| `lead-an-event.html` | Lead an event — how it works, FAQ, proposal form |
| `support.html` | Partner & support — organizations, local partners, sponsors |
| `stories.html` | Stories — blog index |
| `stories-nurturing-the-movement.html` | Example story, so the article template is proven |
| `contact.html` | Join & contact |

## Adding a new event

`events.html` contains a copy-paste template in a comment above the upcoming
events. Copy the block, change six things — image, city, date, title,
description, sport tag — and paste it in. Nothing else needs touching.

In Elementor this block becomes one item in a Loop Grid, and those six fields
become the loop's dynamic fields.

## Still to fill in

These are marked in the HTML with a coral dashed `.placeholder` label, so they
are easy to find:

- **Founder portraits** — `about.html`, three empty slots. Each has a comment
  showing exactly what to replace.
- **Event reviews** — `events.html`, three placeholder cards under the past
  events, with a copy-paste template for adding more.
- **Testimonial quotes** — `lead-an-event.html`, two placeholder cards, from
  women who *led* an event rather than attended one.
- **Two blog posts** — `stories.html`, titles and images set, marked "coming soon".
- **LinkedIn URL** — currently points at `contact.html` in every footer. Search
  for `LinkedIn` and swap the `href` once the profile exists.
- **Email** — `Lina.skjelstad@gmail.com` throughout; swap for the real address
  once it's live.

If the WhatsApp invite link ever changes, it appears 12 times across the 8
pages — search for `chat.whatsapp.com` and replace all.

## Building it in Elementor

- **Layout is flexbox only** — no CSS grid, no JS-driven layout. `.section` maps
  to a Container, `.row` to a flex Container, `.col` to a child Container with a
  width %.
- **Widgets used**: heading, text, image, button, icon box, gallery, accordion
  (native `<details>`, no JS), testimonial, form.
- **Forms** are plain semantic markup with a `mailto:` action so they work on the
  static site. Each is marked with an `ELEMENTOR:` comment — replace with an
  Elementor Form widget; the fields map one to one.
- **The only JavaScript** on the site is `assets/js/main.js`, which does nothing
  but toggle the mobile menu. Elementor's nav widget replaces it; the file can be
  deleted.

## Brand

Per Brand Guide v1, 2026.

| | |
|---|---|
| Mission | Sport as a tool for empowerment, leadership, and connection |
| Slogan | Move. Explore. Belong. |
| Brand phrase | Come with us. |
| Voice | Lowercase headlines, first-person plural, questions over answers |
| Punctuation | The asterisk `*` replaces the exclamation mark |

**Colors** — Violet `#46287C` · Lilac Mist `#E9E1F6` · Paper White `#FCFBF8` ·
Deep Ink `#1B1430` · Coral Clay `#FF8A70` · Open Sky `#A8D8E8` · Fern Trail `#7BAE6F`

**Type** — Shantell Sans (display, rotated ±3°) · Marcellus (wordmark) ·
Space Grotesk (body)

## Files

```
index.html + 7 more pages
favicon.ico
assets/
  css/style.css      design system, all layout
  css/fonts.css      @font-face declarations
  fonts/             6 woff2 files, self-hosted
  js/main.js         mobile menu toggle only
  img/               logo variants + favicons
  img/photos/        27 photos, optimized
docs/                concept overview + brand notes
photos/              original unoptimized photos (not used by the site)
```

### Fonts are self-hosted

Shantell Sans, Marcellus and Space Grotesk are all SIL Open Font License, which
permits self-hosting. They are served from `assets/fonts/` rather than the Google
Fonts CDN so that the site works offline, loads faster, and sends no visitor IP
addresses to a third party — the last of which matters for a Norwegian NGO,
since GDPR applies across the EEA.

### Images

All 27 photos are resized to a maximum of 1800px on the long edge, re-encoded as
progressive JPEG, and stripped of EXIF data. The originals are untouched in
`photos/`. The logo stays PNG because it needs transparency, and was extracted
from the vector PDF so it stays sharp at any size.
