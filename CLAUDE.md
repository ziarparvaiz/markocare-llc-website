# CLAUDE.md — MarkoCare Full Website SEO Project

## Project Identity
- **Company:** MarkoCare Home Care Agency
- **Location:** Maryland, USA (Howard, Anne Arundel, Carroll, Frederick Counties)
- **Industry:** Licensed Home Care / RSA (Residential Service Agency)
- **Regulatory Body:** Maryland Department of Health — Office of Health Care Quality (OHCQ)
- **License Type:** RSA — COMAR 10.07.05
- **Target Audience:** Private pay clients, adult children of seniors, discharge planners, hospital social workers, referral partners
- **Business Stage:** Startup — Private pay first, Medicaid expansion planned

---

## SEO Objective
Execute a full technical + on-page + local SEO overhaul across all 22 pages of the MarkoCare website. Every page must rank in Maryland local search results for high-intent home care keywords. The output must be production-ready, professional-grade, and directly implementable.

---

## Website Page Inventory (22 pages)

### Core Pages (6)
- `/` — Homepage
- `/about` — About Us
- `/contact` — Contact
- `/faq` — FAQ
- `/careers` — Careers
- `/resources` — Resources

### Referral (1)
- `/referral-partners` — Referral Partners

### Services (7)
- `/services` — Services Hub
- `/services/cancer-care-support`
- `/services/companion-care`
- `/services/dementia-care`
- `/services/ipop-transitional-care`
- `/services/personal-care`
- `/services/post-hospital-support`
- `/services/respite-care`

### Service Areas (5)
- `/service-areas` — Service Areas Hub
- `/service-areas/anne-arundel-county`
- `/service-areas/carroll-county`
- `/service-areas/frederick-county`
- `/service-areas/howard-county`

### Legal (3)
- `/legal/privacy`
- `/legal/terms`
- `/legal/compliance`

---

## SEO Execution Rules

### 1. Keyword Strategy
- **Primary target keywords:** `home care [county] Maryland`, `in-home care [city] MD`, `senior care [county]`, `personal care aide Maryland`, `dementia care at home Maryland`, `post-hospital home care Maryland`
- Each page must target **1 primary keyword** + 2–3 secondary/LSI keywords
- Keywords must have **local intent** — always include county or city name
- Do NOT target generic national keywords

### 2. Title Tags
- Format: `[Primary Keyword] | MarkoCare`
- Max 60 characters
- Must be unique per page
- Include geo modifier (county/city name) on all local pages

### 3. Meta Descriptions
- Max 155 characters
- Must include: primary keyword + location + CTA (e.g., "Call today", "Free consultation")
- Conversational but professional tone
- Unique per page — no duplicates

### 4. H1 Tags
- One per page
- Must match primary keyword intent
- Include city/county where applicable
- Example: `Compassionate Dementia Care at Home in Howard County, MD`

### 5. H2/H3 Structure
- H2s = major topic sections (3–6 per page)
- H3s = subtopics within H2 sections
- At least 1 H2 must include a secondary keyword
- Service pages must include: What is [service], Who needs it, What we do, Why MarkoCare, Service area coverage, CTA

### 6. Content Requirements
- **Homepage:** 800–1,000 words. Cover: who we are, services overview, counties served, RSA-licensed status, trust signals
- **Service pages:** 600–900 words each. Unique content per service. No copy-paste between pages.
- **Service area pages:** 500–700 words each. County-specific details (population, care needs, local references)
- **About page:** 400–600 words. Mission, values, Maryland RSA compliance, leadership credibility
- **FAQ:** Minimum 10 Q&As. Address real client/family concerns + compliance/licensing questions
- **Referral Partners:** Professional tone targeting hospital discharge planners, social workers, case managers

### 7. Schema Markup (JSON-LD)
Every page must have schema. Required schemas:
- **All pages:** `Organization`, `LocalBusiness`
- **Service pages:** `Service`, `MedicalBusiness` (where applicable)
- **Service area pages:** `LocalBusiness` with `areaServed`
- **FAQ page:** `FAQPage`
- **Contact page:** `LocalBusiness` with full NAP + `ContactPoint`
- **Homepage:** `Organization` + `WebSite` + `SiteNavigationElement`

NAP (Name, Address, Phone) must be **consistent** across all schema.

### 8. Internal Linking Strategy
- Homepage → All service pages + all county pages
- Each service page → 2 related service pages + 1–2 county pages
- Each county page → All 7 service pages
- FAQ → Relevant service and about pages
- Referral Partners → Contact + services
- No orphan pages — every page must receive at least 1 internal link

### 9. Image SEO
- All images: descriptive `alt` text with keyword + location
- File names: `dementia-care-howard-county-maryland.jpg` format
- Include 1 hero image per service/area page with proper alt text

### 10. Local SEO Signals
- Consistent NAP in footer across all pages
- Google Business Profile schema on homepage and contact page
- County-specific content on each `/service-areas/[county]` page
- Mention of nearby cities within each county page

### 11. Technical SEO Requirements
- `<canonical>` tag on every page (self-referencing)
- `robots` meta: `index, follow` on all public pages; `noindex` on `/legal/` pages
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter Card: `summary_large_image`
- Page speed: flag any render-blocking issues in recommendations
- Mobile-first markup — all content accessible without JS if possible

### 12. URL Slugs
- All lowercase, hyphenated
- Include keyword in slug where possible
- No parameters, no trailing slashes (or consistently with them — pick one)

---

## Deliverable Format Per Page

For each of the 22 pages, output the following in a structured format:

```
PAGE: /[slug]
PRIMARY KEYWORD: [keyword]
SECONDARY KEYWORDS: [kw1], [kw2], [kw3]
TITLE TAG: [max 60 chars]
META DESCRIPTION: [max 155 chars]
H1: [heading]
H2 STRUCTURE:
  - H2: [heading]
    - H3: [subheading] (if applicable)
  - H2: [heading]
  ...
CONTENT BRIEF: [200-word content direction]
SCHEMA (JSON-LD): [full schema block]
INTERNAL LINKS: [list of pages to link to + anchor text]
CANONICAL: [full URL]
ROBOTS: [index/noindex]
OG TAGS: [og:title, og:description, og:image alt]
```

---

## Brand & Tone Guidelines
- **Tone:** Warm, trustworthy, professional — never clinical or cold
- **Voice:** Written to adult children of seniors AND to seniors directly
- **Compliance positioning:** Always reference Maryland RSA licensure as a trust signal
- **Differentiators to weave in:**
  - Licensed RSA agency (COMAR 10.07.05)
  - RN-supervised care (Level 2)
  - Serving Howard, Anne Arundel, Carroll, Frederick Counties
  - Private pay + Medicaid-ready infrastructure
  - Caregiver screening and ongoing training
  - 24/7 coordination availability

---

## What Claude Code Must NOT Do
- Do not invent services MarkoCare does not offer
- Do not use generic SEO filler content
- Do not duplicate content across pages
- Do not use keyword stuffing
- Do not skip schema on any page
- Do not use inconsistent NAP data
- Do not write content below the minimum word counts

---

## Output Sequence
Process pages in this order:
1. Homepage (`/`)
2. Services Hub (`/services`)
3. All 7 service sub-pages (alphabetical)
4. Service Areas Hub (`/service-areas`)
5. All 4 county pages
6. About, Contact, FAQ, Careers, Resources, Referral Partners
7. Legal pages (noindex — minimal SEO, just canonical + schema)

---

## File Output Format
- Output all deliverables as a single structured Markdown file: `markocare-seo-full.md`
- Use `---` dividers between pages
- Use code blocks for all schema JSON-LD
- Use tables for title/meta summary at the end

---

## Final Validation Checklist
Before completing, verify:
- [ ] 22 unique title tags (no duplicates)
- [ ] 22 unique meta descriptions (no duplicates)
- [ ] Schema on every page
- [ ] Internal linking map complete (no orphan pages)
- [ ] NAP consistent across all schema blocks
- [ ] Legal pages marked `noindex`
- [ ] All service pages include county coverage mention
- [ ] Canonical tags present on all pages