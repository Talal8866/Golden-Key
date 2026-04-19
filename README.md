# Golden Key Lock Repairing EST — Angular Website

Full 5-page static Angular 20 website built from the company profile PDF.

## Brand
- **Gold:** `#B8861B` | **Charcoal:** `#3A3A3A` | **White/Off-white:** `#F7F6F4`
- **Font Display:** Playfair Display | **Font Body:** Nunito (loaded from Google Fonts via styles.scss)
- **Design motif:** circular image frames, gold accent lines, gold/charcoal hero sections

---

## Pages Delivered

| Route           | Component              | Description                                      |
|-----------------|------------------------|--------------------------------------------------|
| `/`             | HomeComponent          | Hero, stats, 6 service cards, Why Us, clients, CTA |
| `/about`        | AboutComponent         | Who We Are, Vision/Mission, Core Values, Timeline, Clients |
| `/services`     | ServicesComponent      | 6 detailed service sections, roadside partners, retail shop |
| `/service-area` | ServiceAreaComponent   | Coverage map, 12 Dubai areas, response times     |
| `/contact`      | ContactComponent       | Info cards, enquiry form, Google Maps embed      |

---

## Drop-In Instructions

You have an **existing Angular 20 project**. Just copy these files into it:

### Step 1 — Replace / create source files

```
YOUR_PROJECT/
├── src/
│   ├── index.html         
│   ├── main.ts            
│   ├── styles.scss        
│   └── app/
│       ├── app.component.ts  
│       ├── app.config.ts     
│       ├── app.routes.ts     
│       ├── components/
│       │   ├── navbar/
│       │   │   ├── navbar.component.ts
│       │   │   ├── navbar.component.html
│       │   │   └── navbar.component.scss
│       │   └── footer/
│       │       ├── footer.component.ts
│       │       ├── footer.component.html
│       │       └── footer.component.scss
│       └── pages/
│           ├── home/
│           ├── about/
│           ├── services/
│           ├── service-area/
│           └── contact/
```

### Step 2 — Make sure angular.json points to scss

In your existing `angular.json`, confirm:
```json
"inlineStyleLanguage": "scss",
"styles": ["src/styles.scss"]
```

### Step 3 — Run

```bash
ng serve
```

Open `http://localhost:4200`

---

## Angular 20 Compatibility Notes

- All components are **standalone** (`standalone: true`) — no NgModules needed
- Uses `@for` and `@if` control flow (Angular 17+ syntax)
- Uses `signal()` in Navbar (scroll) and Contact (form submission)
- `RouterLink`, `RouterLinkActive` imported directly in each component
- `FormsModule` imported only in ContactComponent (two-way binding on form)
- `withViewTransitions()` in app.config for smooth page transitions
- `withInMemoryScrolling({ scrollPositionRestoration: 'top' })` — pages always start at top

---

## What Each Page Contains

### Home (`/`)
- Full-screen animated hero with floating cards
- Stats strip: 35+ Years | 24/7 | 10K+ Customers | Licensed
- 6 service cards with icon, title, description, link
- "Why Golden Key" dark section with 4 value cards
- Trusted clients marquee (Emirates Airlines, MERAS, etc.)
- Gold gradient CTA band with phone numbers

### About (`/about`)
- Who We Are section with SVG illustration + stat card
- Vision & Mission side-by-side dark cards
- 4 Core Values grid: Timely | Efficiency | Trust | Reliability
- Company timeline: 1989 → 2024
- Notable clients grid (5 companies)

### Services (`/services`)
- Sticky service nav band (scroll spy anchors)
- 6 detailed service articles with features list + "Book" CTA:
  Car Opening · Car Key Programming · Lock Installation ·
  Safe Box Opening · Residential Door Opening · Electronic Locks
- Roadside assistance section with 8 automotive brand partners
- Retail shop product grid (16 items)

### Service Area (`/service-area`)
- SVG Dubai coverage map with animated zone rings
- Intro text with 6 service type chips
- 12 Dubai area cards with descriptions
- Response time cards (~15 min / ~25 min / 24/7)
- Direct call CTA buttons

### Contact (`/contact`)
- Red emergency banner with pulsing dot + direct phone links
- 4 info cards: Mobile | Landline/Fax | Email | Address
- Working hours: 24/7 Every Day
- Enquiry form: Name, Phone, Email, Service select, Message
- Success state after form submission
- Google Maps iframe embed for Al Karama shop location

---

## Contact Details (from PDF)
- **Mobile:** 0506512422 / 0507751708
- **Landline:** 043350177 | **Fax:** 043355583
- **Email:** goldenkey89@hotmail.com
- **Address:** Next to Families Supermarket, Al Kwuait Street, Al Karama, Dubai, U.A.E.
- **Est.:** 1989