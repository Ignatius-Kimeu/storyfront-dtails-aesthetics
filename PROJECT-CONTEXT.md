# D'tails Aesthetics — project context

A stranger's briefing. Everything needed to pick this build up cold.

---

## The business

| | |
|---|---|
| **Trading name** | D'tails Aesthetics |
| **Google / Facebook name** | Details Aesthetics Kenya |
| **Founder** | Shiro Gichanja |
| **Niche** | Aesthetics & skin clinic (non-medical) |
| **Address** | Gallant Mall, Parklands Road, Mezzanine Floor, Shop 1, Westlands, Nairobi 00100 |
| **Phone** | 0114 541042 |
| **WhatsApp** | +254 114 541042 (confirmed on their Facebook About page — unambiguous) |
| **Email** | detailsaesthetics2@gmail.com |
| **Hours** | Mon–Sat 9:00am–6:00pm · Sunday closed |
| **Google rating** | 5.0 from 23 reviews (checked 21 Sep 2026) |
| **Setmore rating** | 5.0 from 9 reviews |
| **Instagram** | [@details_aesthetics_kenya](https://www.instagram.com/details_aesthetics_kenya) — 2,393 followers, 491 posts |
| **TikTok** | [@details_aesthetics_kenya](https://www.tiktok.com/@details_aesthetics_kenya) — 1,064 followers, 6,157 likes |
| **Facebook** | "Details Aesthetics Kenya" — 322 followers. **Exact page URL not captured; get it on the call.** |
| **Linktree** | linktr.ee/detailsaesthetics |
| **Booking platform** | https://dtailsaesthetics.setmore.com/ |

### Branch and tier

**Branch A — no website.** Re-confirmed 21 Sep 2026: their Google Business Profile still shows "Add website", and no independent domain surfaced under either name. Social profiles, Linktree and the Setmore booking page all count as no website under the standing rule.

**Tier built: Standard (KES 65,000).** Deliberately *not* Standard + WhatsApp Booking — they already run a working Setmore booking page with staff, durations and prices configured. Duplicating that in a WhatsApp form would be worse than what they have. Instead every CTA is a pair: **Book through Setmore** (primary) and **Book via WhatsApp** (secondary).

Seven pages plus a 404 — above the 3–6 Standard band, justified by unusually rich real content (31 published treatments, 7 packages, a large FAQ bank).

### Domain situation

No domain owned, none lapsed, nothing to recover. They will need a fresh one. `dtailsaesthetics.co.ke` or `dtailsaesthetics.com` are the natural candidates — **neither checked for availability yet.**

---

## Brand identity

Extracted at pixel level from the client's own logo file and photographs of the clinic. **Chosen direction: Palette A (Ink & taupe) on Design direction 1 (Editorial clinic).**

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#2A2522` | Headings, primary buttons, footer, video surrounds |
| `--charcoal` | `#3C3836` | Body text — sampled from the logo's DA monogram |
| `--taupe` | `#7A6857` | Accent, eyebrow labels, button hover, links |
| `--taupe-soft` | `#A5917C` | Decorative only |
| `--taupe-lt` | `#C7B6A4` | Hairlines, text on dark |
| `--taupe-xlt` | `#E4DBD1` | Body text on dark |
| `--paper` | `#F3F1EE` | Alternating section bands — the logo's own background |
| `--white` | `#FAF9F7` | Page background |
| `--blush` | `#EBC4CB` | Reserved accent, from their Instagram. Used sparingly by design. |

**Note on the taupe.** The raw value sampled off the logo wordmark was `#8C7A68`. That measures 3.91:1 against the page background — below WCAG AA for small text, and the eyebrow labels are 11px uppercase. It was darkened to `#7A6857` (5.06:1) for the site. Visually near-identical; legally and practically better. Worth mentioning to Shiro as a detail she'd appreciate.

**Fonts:** Playfair Display (display — closest match to the Didone DA monogram) and Jost (body/UI — geometric sans matching the letterspaced "ITS IN THE DETAILS" tagline). Both Google Fonts.

**Logo source:** their own `d'tails aesthetics logo.webp`. Background keyed to transparency (`images/logo.png`). The upper monogram was cropped out separately (`images/monogram.png`) for the header and favicon, because the full lockup is illegible below about 60px.

**Design motif:** the arch. Taken from the lit arch behind their reception desk — it shapes the hero image, the OG card and the section rhythm.

---

## Pages built

| File | What's on it |
|---|---|
| `index.html` | Hero, the skin-analysis process, treatment categories, video grid, reviews, booking CTA. Carries the JSON-LD. |
| `treatments.html` | All 31 treatments by category with duration, price, description. Live search filter. |
| `packages.html` | The 7 confirmed packages. Bridal feature section. |
| `about.html` | Shiro first, then the clinic, then the team. |
| `gallery.html` | 10 clinic photos with fullscreen lightbox, plus the video grid. |
| `faqs.html` | 17 questions in 4 groups. Carries FAQPage JSON-LD. |
| `contact.html` | Address, hours, booking policy, keyless Google Maps embed. |
| `404.html` | On-brand. |

No page-to-page links in the footer, per spec. Internal links are all relative.

---

## Content provenance — what came from where

**Everything published is traceable. Nothing was invented.**

| Content | Source |
|---|---|
| 31 treatments, durations, prices, descriptions | Their own Setmore booking page, read 21 Sep 2026 |
| 7 packages and inclusions | Their own package sheet (client upload) |
| Booking policy (KES 1,000 deposit, 4 hours' notice, walk-ins) | Their own Instagram "Booking policy" highlight |
| 6 reviews with names and dates | Their own Setmore page |
| Ratings (5.0/23 Google, 5.0/9 Setmore) | Google listing + Setmore, both 21 Sep 2026 |
| FAQ answers — microblading, aftercare, healing | Their own Instagram highlights (Q&A, Microblading, Brows Aftercare) |
| Founder bio | The Skin Summit speaker/panelist graphics (client upload) |
| "Results with a touch of luxury" | Their own Setmore About text |
| Clinic photographs | Client uploads |
| Videos | Client uploads, from their TikTok |
| Hours, address | Setmore + Google, agreeing |

### Flagged — needs confirming on the call

1. **`REPLACE-WITH-LIVE-URL`** appears in every page's canonical, og:url, twitter:image and JSON-LD `url`, plus `sitemap.xml` and `robots.txt`. Must be swapped for the real URL after deployment.

2. **Google review deep link.** The proper `search.google.com/local/writereview?placeid=…` link needs their Place ID, which wasn't in any upload. Currently pointing at a Google search for the listing, which works but is less direct. Get the Place ID and swap it.

3. **Facebook page URL.** Known to exist, exact slug not captured. The footer currently links Instagram and TikTok only.

4. **The "Dermaycia Aesthetics" graphic.** One uploaded marketing image ("Your skin goals deserve a plan, not guesswork") carries a DA logo reading **DERMAYCIA AESTHETICS**, not D'tails — and their Instagram highlights include one called **"Re-Brand"**. Nothing from that graphic was used. **Ask what it is:** a rebrand in progress, a second business, or a borrowed template they never reskinned. If it's a rebrand, the identity work changes.

5. **Two videos were deliberately excluded:**
   - The 8,839-view clip has **"Enjoy 20% off on all our services"** burnt into it, plus a CapCut watermark. Publishing an offer that may have expired is a live risk. Confirm whether the offer still stands.
   - One clip is an **acne before/after of an identifiable client**. Not used — no documented consent. Same for the before/after screenshot in the uploads. Under the health-niche rule, before/afters need confirmed consent.

6. **Duplicate service entry.** Their Setmore catalogue lists "Chemical Peels" twice, identically (60 min, KES 10,000), both under Facials. Listed once here. Worth them tidying on Setmore.

7. **"Lash Extention"** sat in Setmore's uncategorised "OTHER" bucket. Moved into Lash Treatments and the spelling corrected to "Lash Extensions".

8. **Staff names.** Setmore lists Winnie Wanjiru (Therapist) and Maryann Njoki. A review mentions "sheeren". Confirm the full current team before this goes live.

9. **Microblading touch-up pricing.** Setmore's description says beyond 8 weeks it's KES 8,000 against the listed 5,000. Both figures are shown, as they wrote them.

### Spelling corrections applied to the package sheet

Content, prices and inclusions unchanged — spelling only:

| Their sheet | On the site |
|---|---|
| Sweedish massage | Swedish massage |
| Hydradacial | HydraFacial |
| Decogestion facial | Decongestion facial |
| "free signature facial 2 weeks bteore the weeding" | "free signature facial two weeks before the wedding" |
| "Skin consultationkin analysis and skin analysis" | "Skin consultation and skin analysis" |
| "Includes free fol,low up" | "Free follow-up" |

A KES 66,000 bridal package reading "bteore the weeding" costs real bookings. Show her this table on the call — it lands well.

---

## Technical

- Static HTML/CSS/JS. No build step, no framework, no dependencies. Ships on GitHub Pages as-is.
- Mobile-first. Verified at 390px and 1440px.
- **Progressive enhancement:** an inline `<script>` adds a `js` class to `<html>`. Reveal animations and the splash only engage when that class is present, so with JavaScript disabled or broken the full page still renders. Verified with JS switched off.
- **Reveal failsafe:** IntersectionObserver doesn't fire in a hidden tab. If someone opens the link in a background tab, a `visibilitychange` handler plus a 4-second timer guarantee content appears. Verified.
- Videos: H.264, 480px wide, CRF 31, faststart, `preload="none"` with poster frames. They load and play only on scroll — important on Kenyan mobile data. Muted autoplay via IntersectionObserver, brand-taupe sound toggle, and only one clip can have sound at a time. Verified.
- Lightbox: vanilla, fullscreen, captioned, counter, prev/next, Esc and arrow keys, focus returned to the opener on close. Verified.
- Smart sticky header: hides on scroll down, returns on any upward scroll. No `backdrop-filter`.
- `prefers-reduced-motion` respected throughout. Verified — all 31 reveal elements render immediately with motion reduced.
- WCAG AA: every text/background pair checked numerically. Lowest passing ratio is 4.72:1 (taupe on paper). Body text is 11.02:1.
- Google Maps embed is **keyless** (`maps?q=…&output=embed`) — no API key to secure, nothing to restrict by referrer.
- Total video payload ~5.3MB across four clips, none loaded until scrolled to.
- Schema.org `HealthAndBeautyBusiness` on the home page, `FAQPage` on the FAQs. Ratings and reviews are deliberately **not** marked up — Google ignores self-served review markup and can penalise it.
- Privacy: no forms, no analytics, no cookies, no data collected or stored. A one-line disclosure sits in the footer and on the contact page.

## Compliance notes (health-adjacent niche)

No licensed medical practitioner was confirmed to be involved, so the copy stays firmly non-medical. There are no claims of cure, no "guaranteed results", no "painless". Their own line — "non-invasive treatments" — is what the site echoes. The one discomfort claim on the FAQ page ("relatively pain free for most", with the smoker/menstrual-cycle caveat) is quoted verbatim from their own Instagram highlight rather than written fresh.

No before/after imagery is used anywhere.

## Deploying

```
storyfront-dtails-aesthetics/
├── index.html  treatments.html  packages.html  about.html
├── gallery.html  faqs.html  contact.html  404.html
├── og-image.jpg  sitemap.xml  robots.txt
├── assets/   site.css  site.js
├── images/   11 photos, 4 posters, logo.png, monogram.png, favicon.png
└── videos/   4 mp4s
```

Fresh public repo `storyfront-dtails-aesthetics`, push root, enable Pages on main/root. Then replace every `REPLACE-WITH-LIVE-URL` across all 8 HTML files plus `sitemap.xml` and `robots.txt`, and push that fix. Finally paste the live URL into a WhatsApp chat to yourself to confirm the OG banner card renders.
