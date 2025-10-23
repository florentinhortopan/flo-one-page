---
title: "Florentin Hortopan — Portfolio Content"
description: "Source markdown to inform the build of a portfolio website."
version: "2025-10-22"
generator_notes: "This single file includes content plus suggested content models for a static site (Next.js/MDX, Astro, Eleventy). Split into individual MD/MDX files later."
---

# Design is Art Everybody Can Use

A curated, website-ready outline of key projects, roles, awards, and skills.

> **Elevator pitch:** Industrial designer and art director crafting usable, elegant products and interactive experiences across hardware, wearables, retail, and web. Expert in advanced CAD/NURBS modeling, design-for-manufacture, smart textiles, and UX/UI for e‑commerce and content platforms.

---

## Site map & sections

- **Home** — Hero, positioning, featured work, latest talk/press
- **Work**
  - Industrial Design (boats, vehicles, medical, sports, wearables)
  - Art Direction (branding, e‑commerce growth, web strategy)
- **Talks**
- **Awards & Press**
- **Publications**
- **About** (bio, skills, tools, education, interests)
- **Contact** (links, email)

---

## Content model (front‑matter templates)

### Project (work/*)

```yaml
---
title: "Project Title"
slug: "project-title"
category: "industrial-design" # or "art-direction"
year: 2007
client: "Company / Partner"
role: ["Lead Industrial Designer", "Art Director"]
type: ["Transportation", "Medical", "Wearable", "E‑commerce", "Interior"]
location: "City, Country"
summary: "1–3 sentence snapshot of the problem, approach, and outcome."
contribution: ["Concept", "CAD/NURBS modeling", "DFM", "Prototype", "UX/UI", "Strategy"]
materials_tech: ["Rhinoceros", "Grasshopper", "3ds Max", "Maxwell", "3D printing", "Injection molding", "Smart textiles"]
outcomes: ["Manufactured", "Patented", "Installed in museum", "10x sales", "Press coverage"]
gallery:
  - "/images/project/hero.jpg"
  - "/images/project/detail-1.jpg"
links:
  case_study: "/work/project-title"
  external:
    - label: "Press / Publication"
      href: "https://example.com"
---
Intro paragraph with narrative.
```

### Talk / Presentation (talks/*)

```yaml
---
title: "Event or Talk Title"
date: "YYYY-MM-DD"
venue: "Conference / Organization"
location: "City, Country"
topic: "Theme or session title"
links:
  - label: "Slides"
    href: "https://slideshare.net/..."
  - label: "Video"
    href: "https://vimeo.com/..."
---
Short abstract of the talk and the role in the event.
```

### Award / Mention (awards/*)

```yaml
---
title: "Award Name"
date: "YYYY-MM"
issuer: "Organization"
work_recognized: "Project or body of work"
links:
  - label: "Announcement"
    href: "https://..."
---
One-sentence description.
```

### Publication (publications/*)

```yaml
---
title: "Article/Book Title"
publisher: "Publication"
date: "YYYY-MM"
pages: "pp. 160–165"
work_covered: "Project name"
links:
  - label: "Publisher"
    href: "https://..."
---
One‑sentence reference and context.
```

---

## Featured projects (Industrial Design)

### 40ft Speed Boat — Sole Engineering (Viareggio, IT) — 2005
**Type:** Naval design · **Role:** NURBS modeling, DFM · **Highlights:**
- Modeled 4 hull variants + upper deck; curvature control and fairing for production
- Delivered full technical sheets/sections; precision and minimal approximation enabled early Rhino‑designed hull in Italy
**Stack:** Rhinoceros (NURBS), CAD for production

### De Rigo Shades (for XDesign) — 2006
**Type:** Accessory design · **Role:** Concept & precision modeling, visuals · **Highlights:**
- Multiple eyewear frames for Italy’s largest shades/accessories group (e.g., Lozza, Givenchy, Fila, Police)
- Single‑piece concepts; weight‑reduction cavities inside arms; varied lens attachments

### ViceVersa Stores Fixtures — DiFormaVariabile (2005–2006)
**Type:** Interior/product design · **Role:** Shelving & lighting systems · **Highlights:**
- Signature layered PMMA shelves with cable‑suspended structure and integrated lighting
- Deployed across 30+ stores ensuring clarity and minimal shadowing

### Amantide Electric Trike — 2006
**Type:** Transportation concept · **Role:** Concept & modeling · **Highlights:**
- Collapsible 3‑wheel commuter with electric hub motor, drive‑by‑wire throttle, adjustable pedals, ~30 mph
- Featured by Behance Industrial Design Served

### Electrophoresis Roll‑On Applicator — 2006
**Type:** Medical · **Role:** Ergonomics & design for hygiene · **Highlights:**
- Durable, non‑disposable applicator with “fake bearing” dome for gel flow; Delrin® ball; standard bottle necks

### Flooded Scuba Mask (CNR–INO/INOA) — 2008–2009
**Type:** Marine sportswear · **Role:** Design, modeling, prototypes · **Highlights:**
- “Underwater telescope” principle for vision underwater and in air; interchangeable optical bodies; pressure‑relief eyelids
- Tested by world champion Umberto Pelizzari; covered by *Applied Optics* and SPIE proceedings
- ABS and soft‑rubber prototypes; optimized for injection‑molding scalability

### Tow Tractor Cockpit — Toyota‑Cesab (Xdesign Teknow) — 2007
**Type:** Automotive/HMI · **Role:** Control pads, HMI layout, mockups · **Highlights:**
- 9 control pad options; digital displays for CenTauro and Mak lines; physical/digital simulations

### iGoatse iPod Case — 2007
**Type:** Consumer product & entrepreneurship · **Role:** Concept, DFM, launch · **Highlights:**
- Internet‑meme inspired case launched pre‑manufacture; viral within 48 h; ED‑machined molds; multiple colors
- Learned: injection‑molding on uneven mass volumes; design iteration from fan feedback (ring detail)

### i5hot Cashmere Gloves — 2007–2010
**Type:** Apparel/accessory · **Role:** Patent, QA, manufacture · **Highlights:**
- Convertible thumb/index for touch devices (no conductive fabric); 11G pure cashmere; sizes S/M/L; Italian made
- Design patent registered (2008)

### Nootka Smart Digital Furniture — 2010
**Type:** Exhibit tech · **Role:** Design & build · **Highlights:**
- Four 40″ vertical video booths with synchronized playback and in‑house directional speakers to control audio spill
- Auto on/off for months‑long exhibit uptime

### Geometry Darling — Agent of Presence (SF, US) — 2011–2012
**Type:** Wearable accessory · **Role:** Integration design, manufacturing supervision, art direction · **Highlights:**
- Light‑guide PMMA panel with etched patterns; battery, PCB, controller fully integrated in leather bag
- Presented at LeWeb 2012; extensive photo/video direction; multi‑iteration electro‑fashion build

### Ballantine’s **tshirtOS™** — Switch Embassy — 2013
**Type:** Wearable/Smart textile · **Role:** Lead Industrial Designer; controller enclosure; smart fabric design · **Highlights:**
- 28×32 white LED woven, flexible, washable display; Bluetooth controller; ~6 hr battery
- Techtextil Innovation Award 2015 (“New Concept”); exhibited at Museum of Science and Industry Chicago
- Safety and washability via coatings/encapsulation; custom battery‑pack casings (vac‑formed, CNC‑molded)

---

## Art Direction & Web Strategy

### Extraneo Design Studio — Founder & AD (Florence, IT) — 2003–2006
Branding, typography, web, exhibits, interiors. Projects included CareToys, Fiabesque, Biomilano, and viral “Frapper ICI” tee.

### DIVERSAMENTE (“Otherwise”) — Founder & CEO — 2006–2011
Full‑stack design firm (web + product + brand). Built CMS **YouIN** for PortaleGiovani; deployed across RICUD. E‑commerce builds (K‑Array, Jatrophashop).

### Luxyuu.com — E‑commerce Producer & Strategist — 2010–2012
Redesigned UX/UI and operations for fashion outlet; directed photo shoots; DEM/affiliates (Zanox/TradeDoubler); 10× sales growth; B2B layer atop B2C.

### State Creative — Art Director — 2015
Communication design, UX/UI, and strategy for clients incl. JRDV Architects, Artful Surgery, DCAC (Berkeley).

---

## Talks & Presentations (selection)

- **PCH Highway1 / Lime Lab (SF)** — 2014 — *Switch Embassy: Wearable Tech*
- **LeWeb Paris** — 2012 — *Fashion Tech, IoT & Smart Fabrics*
- **EU Thematic Dissemination (Florence)** — 2010 — *Social Open Governance & new media for EU projects*
- **ToscanaLab / Ignite Italia** — 2010 — *Cofarming & the end of food purchase*
- **Pecha Kucha Night** — 2009 — *Notes on participated design / Crowdfunding 2010*

---

## Awards & Mentions

- **Techtextil Innovation Award (Frankfurt)** — 2015 — *A Washable Digital Canvas for Infinite Expression* (tshirtOS™ smart fabric)
- **Made in Tuscany — Furniture Fair (Florence)** — 2003 — *Intrecciare Relazioni* seating (weaving tradition)
- **City of Florence — School & Theatre Poster** — 1999 — Competition award

---

## Publications (selection)

- **Design Quality and Value** (Gangemi, 2007) — pp. 160–165 — *Extreme Urban Car*
- **Domus #893** (June 2006) — full page — *Demolition‑S‑how — Ryugyong Hotel*
- **Zona (insert of Abitare #479, 02/2008)** — pp. 45–47 — *Ingeneo Creatures*
- **Applied Optics** (vol. 49, no. 31) — vision research for flooded mask; **SPIE Proceedings** (no. 7717)

**Online features:** *CheFuturo* (Il Sole 24 Ore, 2012) — Agent of Presence @ LeWeb; Behance **Industrial Design Served** — Amantide Electric Trike.

---

## Patents

- **2014** — *Method and process for embedding practical and decorative electronics to garments and wearable accessories* — U.S. Patent (EFS ID 21841233; 62137231)
- **2008** — *i5hot Convertible Gloves* — UIBM Design Patent (FI2008/0/000029)

---

## About

**Bio (short):** Lead Industrial Designer and Art Director with 10+ years across product, wearable tech, interiors, and digital commerce. Blends precision NURBS modeling and DFM with human‑centered strategy and brand‑level storytelling.

**Core strengths:** Advanced CAD, rapid prototyping, materials/process, DFM, smart textiles, UX/UI for commerce and content platforms, growth design.

**Toolbox:** Rhinoceros, Grasshopper, RhinoCAM, V‑Ray, T‑Splines, 3ds Max, Maxwell; Adobe Creative Suite; Axure, Sketch; Hype3, PaintCode; Sparkle.

**Languages:** Italian (native), Romanian (native), English (TOEFL iBT®), German (basic).

**Education:** ISIA Florence (Industrial & Communication Design, 5‑year program), 2006 — *110 e lode* (with honors).

**Interests:** 3D printing/CNC/welding, photography, tennis & running, music (violin, piano, guitar), composition for presentations.

---

## Contact

**Florentin Hortopan** — San Francisco, CA  
**Web:** Florentin.us · **LinkedIn:** linkedin.com/in/lorentinhortopan  
**Email:** flo@lorentin.us · **Phone:** +1‑415‑430‑7032

---

## Implementation notes (developer‑facing)

- Use MDX for project pages; convert each “Featured project” into its own file using the *Project* front‑matter.
- Route groups: `/work/industrial-design/*`, `/work/art-direction/*`.
- Create filters/tags for **materials_tech** and **contribution** to power case‑study facets.
- Add “Related work” by overlapping tags (e.g., `smart-textiles`, `DFM`, `NURBS`).
- Import gallery assets; prefer 1600px wide JPEG/WebP; provide alt text.
- Add structured data (JSON‑LD) for Person, CreativeWork, Award, and Event.
- Add a “Press kit” page with bio headshots, logos, and project summaries.