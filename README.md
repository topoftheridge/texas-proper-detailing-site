# 🚗 Detailer Template

A plug-and-play car detailing website template built with **Next.js 16 + Tailwind CSS**.
Clone it, fill in the placeholders, drop in images, push to GitHub, deploy to Vercel. Done.

---

## Quick Start

```bash
git clone https://github.com/topoftheridge/detailer-template.git my-client-site
cd my-client-site
npm install
npm run dev
```

---

## How to Build a New Site (One-Prompt Method)

Open the repo in Claude Code (or give an AI this prompt):

```
Fill in all [[PLACEHOLDER]] values in this detailer template with the following info:

BUSINESS_NAME: [Full business name]
BUSINESS_SHORT_NAME: [Short name / brand word]
CITY: [Primary city]
STATE: [State abbreviation, e.g. FL]
PHONE_DISPLAY: [(XXX) XXX-XXXX]
PHONE_LINK: [+1XXXXXXXXXX]
EMAIL: [email@domain.com]
DOMAIN: [domain.com]
HOURS: [Mon–Sun: 8 AM – 6 PM]
HOURS_FULL: [Monday – Sunday: 8:00 AM – 6:00 PM]
HOURS_SCHEMA: [Mo-Su 08:00-18:00]
INSTAGRAM_HANDLE: [handle without @]
LAT: [latitude]
LNG: [longitude]

COLORS:
PRIMARY_COLOR: [#hex]
PRIMARY_LIGHT: [#hex]
PRIMARY_DARK: [#hex]

HERO TITLE SPLIT (match logo style):
HERO_TITLE_PART1: [white text]
HERO_TITLE_PART2: [colored text]
HERO_TITLE_PART3: [white text, or leave blank]

HERO_SUBTITLE: [One sentence describing the service + location]
FOOTER_TAGLINE: [One sentence about the business]
ABOUT_HERO_SUBTITLE: [e.g. "Professional Auto Detailing in [City], [State]"]

LOCATIONS (5–10 cities):
CITY_1: name=[...] slug=[...-auto-detailing] description=[...]
CITY_2: ...
...

SERVICES (prices):
INTERIOR_PRICE: $XX
EXTERIOR_PRICE: $XX
PAINT_PRICE: $XX
FULL_PACKAGE_PRICE: $XXX
INTERIOR_PRICE_RANGE: [e.g. Most vehicles fall between $120–$180]
EXTERIOR_PRICE_RANGE: [...]
FULL_PACKAGE_PRICE_RANGE: [...]

INTERIOR includes: [list 8–12 items]
EXTERIOR includes: [list 8–12 items]
FULL PACKAGE exterior includes: [list 8–12 items]
FULL PACKAGE interior includes: [list 8–12 items]

PAINT ADD-ONS (name, price, description x4):
...

WHY CHOOSE US (4 selling points, each with title + 2-sentence desc):
USP_1: title=[...] desc=[...]
USP_2: ...
USP_3: ...
USP_4: ...

ABOUT TEXT (4 paragraphs describing the business):
Para 1: ...
Para 2: ...
Para 3: ...
Para 4: ...

GOOGLE MAPS EMBED URL: [paste iframe src from Google Maps → Share → Embed]
```

---

## Images to Replace

Drop these files in `/public/`:

| File | Purpose |
|------|---------|
| `logoheader.png` | Navbar + footer logo |
| `hero-bg.jpg` | Homepage hero background |
| `aboutcard1.jpg` | About page header photo |
| `interiorcard1.jpg` | Interior service card |
| `exteriorcard1.jpg` | Exterior service card |
| `Paintcard1.jpg` | Paint protection card |
| `gallery-1.jpg` → `gallery-8.jpg` | About page gallery (optional) |

---

## Placeholder Reference

All placeholders use `[[DOUBLE_BRACKET]]` format so they're easy to find/replace.

| Placeholder | Description |
|-------------|-------------|
| `[[BUSINESS_NAME]]` | Full business name |
| `[[BUSINESS_SHORT_NAME]]` | Short name used in "Why Choose Us" |
| `[[CITY]]` | Primary city |
| `[[STATE]]` | State abbreviation |
| `[[PHONE_DISPLAY]]` | Formatted phone: `(407) 801-6482` |
| `[[PHONE_LINK]]` | Tel link format: `+14078016482` |
| `[[EMAIL]]` | Contact email |
| `[[DOMAIN]]` | Website domain (no https) |
| `[[HOURS]]` | Short hours: `Mon–Sun: 8 AM – 6 PM` |
| `[[HOURS_FULL]]` | Full hours: `Monday – Sunday: 8:00 AM – 6:00 PM` |
| `[[INSTAGRAM_HANDLE]]` | Instagram username without @ |
| `[[LAT]]` / `[[LNG]]` | GPS coordinates for schema |
| `[[PRIMARY_COLOR]]` | Main brand hex color |
| `[[PRIMARY_LIGHT]]` | Lighter tint |
| `[[PRIMARY_DARK]]` | Darker hover shade |
| `[[HERO_TITLE_PART1/2/3]]` | Hero title split for color styling |
| `[[INTERIOR_PRICE]]` | e.g. `$90` |
| `[[EXTERIOR_PRICE]]` | e.g. `$90` |
| `[[PAINT_PRICE]]` | e.g. `$30` |
| `[[FULL_PACKAGE_PRICE]]` | e.g. `$180` |
| `[[GOOGLE_MAPS_EMBED_URL]]` | iframe src from Google Maps embed |
| `[[CITY_1_NAME]]` ... | Location names in locations.ts |

---

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: Next.js (auto-detected)
4. Deploy — done

Or with CLI:
```bash
npm i -g vercel
vercel --prod
```

---

## Stack

- [Next.js 16](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- TypeScript
