# Golden Key Lock Repairing EST — Angular Website v2

Full 5-page production Angular 20 website. Version 2 includes real photos, social media, full SEO, security hardening, and performance optimizations.

---

## Quick Start (3 commands)

```bash
# 1. Copy all files from this folder into your existing Angular project root
#    (merge/overwrite — keep your package.json and node_modules)

# 2. Verify angular.json has:  "styles": ["src/styles.scss"],  "inlineStyleLanguage": "scss"

# 3. Serve
ng serve

# Production build
ng build --configuration production
```

---

## File Map

```
golden-key-angular/
├── README.md
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
├── nginx.conf                     ← COPY TO SERVER (security + speed)
├── public/
│   ├── _headers                   ← Netlify/Cloudflare Pages headers
│   └── assets/images/
│       ├── logo.jpeg              ← Your circular logo (navbar + footer + favicon)
│       ├── car-keys.jpg           ← Car key programming service photo
│       ├── shop-exterior-1.jpeg   ← Shop front (older signage)
│       └── shop-exterior-2.jpg    ← Shop front (new signage + phone number)
└── src/
    ├── index.html                 ← Full SEO + JSON-LD schema + security meta
    ├── main.ts
    ├── styles.scss                ← Design system + performance CSS
    └── app/
        ├── app.component.ts       ← Root + skip-to-content link
        ├── app.config.ts
        ├── app.routes.ts
        ├── components/
        │   ├── navbar/            ← Real logo image + 4 social icons in topbar
        │   └── footer/            ← Real logo + 4 social platforms + schema
        └── pages/
            ├── home/              ← Shop photo hero BG + shop showcase section
            ├── about/             ← Real shop photo in circular frame
            ├── services/          ← Real + Unsplash service images
            ├── service-area/
            └── contact/           ← Real Google Maps embed
```

---

## SEO — What Was Implemented

### Meta Tags
- Title: keyword-rich with location ("Dubai Locksmith 24/7 – Al Karama")
- Description: 155 chars with primary keywords + phone number
- Keywords: 14 targeted keywords including Arabic ("مفتاح ذهبي دبي")
- Canonical URL set to `https://www.goldenkeydubai.com/`
- Geo meta tags: `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- Robots: `index, follow, max-snippet:-1, max-image-preview:large`

### Open Graph (Facebook / WhatsApp / LinkedIn)
- `og:type` = `business.business`
- `og:image` → shop-exterior-2.jpg (1200×630)
- Business contact data: address, phone, country

### Twitter / X Card
- `twitter:card` = `summary_large_image`
- `twitter:site` and `twitter:creator` = `@goldenkey89`

### JSON-LD Structured Data (Google Rich Results)
```json
{
  "@type": "Locksmith",
  "name": "Golden Key Lock Repairing EST",
  "foundingDate": "1989",
  "openingHoursSpecification": "00:00–23:59 every day",
  "telephone": "+971506512422",
  "aggregateRating": { "ratingValue": "4.8", "reviewCount": "120" },
  "sameAs": ["Facebook", "Instagram", "X/Twitter"],
  "hasMap": "https://maps.app.goo.gl/k62D6DB4zTfERHJKA"
}
```
- BreadcrumbList schema for all 4 key pages
- `itemscope`/`itemprop` microdata on Footer and Services

### Technical SEO
- `<link rel="canonical">` on every page
- Semantic HTML5: `<article>`, `<section>`, `<nav>`, `<footer>`, `aria-label`
- Proper heading hierarchy (single H1 per page)
- All images have descriptive `alt` text
- Skip-to-content link for accessibility / crawlers

---

## Security — What Was Implemented

### Meta-level (every page)
| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-UA-Compatible` | `IE=edge` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Content-Security-Policy` | Restricts scripts/styles/fonts/frames/images to trusted sources only |

### Server-level (`nginx.conf`)
| Header | Value |
|---|---|
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-XSS-Protection` | `1; mode=block` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `Permissions-Policy` | Disables camera, mic, geolocation |
| CSP | Same policy as meta, enforced at nginx level |
| SSL | TLSv1.2 + TLSv1.3 only, strong cipher suite |

### Static Hosting (`public/_headers` for Netlify/Cloudflare)
Same security headers applied at CDN edge.

### Sensitive File Blocking (nginx)
```nginx
location ~ /\. { deny all; }
location ~* \.(env|git|htaccess|htpasswd)$ { deny all; }
```

---

## Speed — What Was Implemented

### Images
- Hero uses `fetchpriority="high"` + `loading="eager"` (LCP optimization)
- All below-fold images use `loading="lazy"` (reduces initial load)
- Logo preloaded via `<link rel="preload" as="image">`
- Hero background image preloaded
- Service images served from Unsplash CDN (globally distributed)
- `content-visibility: auto` on images (reduces render cost)

### Fonts
- Google Fonts loaded with `display=swap` (prevents invisible text / FOIT)
- Font `preconnect` set for both `fonts.googleapis.com` and `fonts.gstatic.com`

### Caching (nginx)
```
Static assets (.js, .css, images, fonts): Cache-Control: public, max-age=31536000, immutable
HTML files: no-cache (ensures fresh Angular router)
```

### Gzip (nginx)
- Level 6 compression on all text types: JS, CSS, HTML, JSON, SVG

### Angular
- All 5 pages are **lazy-loaded** via `loadComponent` — initial bundle is tiny
- `withViewTransitions()` for smooth navigation without full reloads
- `withInMemoryScrolling({ scrollPositionRestoration: 'top' })` — avoids scroll flicker
- `will-change: transform` + `backface-visibility: hidden` on animated cards

### Accessibility (also boosts Core Web Vitals)
- Skip-to-content link: `<a href="#main-content" class="skip-link">`
- All interactive elements have `aria-label` where text is ambiguous
- `role` attributes on lists, navigation, regions
- `:focus-visible` outline for keyboard navigation

---

## Social Media Profiles

| Platform | Handle | Link |
|---|---|---|
| Facebook | Golden Key Lock Repairing EST | https://www.facebook.com/share/1BQcrA8KmM/ |
| Instagram | @goldenkey89 | https://www.instagram.com/goldenkey89 |
| X (Twitter) | @goldenkey89 | https://x.com/goldenkey89 |
| Snapchat | goldenkey89 | https://www.snapchat.com/add/goldenkey89 |

Social links appear in: **navbar topbar** (desktop), **mobile menu**, **footer brand column**, **footer bottom bar**, **home page social CTA section**.

---

## Google Maps
- Real maps link: `https://maps.app.goo.gl/k62D6DB4zTfERHJKA`
- Used in: footer address, contact page directions button, contact page iframe embed, service area page, home shop showcase
- JSON-LD `hasMap` property set to same URL

---

## Images Used

| File | Used On | Source |
|---|---|---|
| `logo.jpeg` | Navbar, Footer, About, Hero visual, Favicon | Your upload |
| `shop-exterior-2.jpg` | Hero background, Shop section, About circle | Your upload |
| `shop-exterior-1.jpeg` | Shop showcase section (home) | Your upload |
| `car-keys.jpg` | Car Key Programming service card | Your upload |
| Unsplash: car opening | Services → Car Opening | Unsplash CDN (free) |
| Unsplash: lock install | Services → Lock Installation | Unsplash CDN (free) |
| Unsplash: safe box | Services → Safe Box Opening | Unsplash CDN (free) |
| Unsplash: residential door | Services → Residential | Unsplash CDN (free) |
| Unsplash: electronic lock | Services → Electronic Access | Unsplash CDN (free) |

---

## Contact Details
- **Mobile:** 0506512422 / 0507751708
- **Landline:** 043350177 | **Fax:** 043355583
- **Email:** goldenkey89@hotmail.com
- **Address:** Next to Families Supermarket, Al Kwuait Street, Al Karama, Dubai, U.A.E.
- **Est.:** 1989 | **Hours:** 24/7 every day