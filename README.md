# MarkoCare — Maryland Home Care Agency Website

Production-grade Next.js 14 website for **MarkoCare**, a Maryland Residential Service Agency (RSA) specializing in in-home care. Built with full SEO, lead capture, compliance, and referral partner infrastructure.

---

## Tech Stack

| Tool            | Version             | Purpose           |
| --------------- | ------------------- | ----------------- |
| Next.js         | 14.2.x (App Router) | Framework         |
| TypeScript      | 5.x                 | Type safety       |
| Tailwind CSS    | 3.x                 | Styling           |
| react-hook-form | 7.x                 | Form management   |
| zod             | 3.x                 | Schema validation |
| lucide-react    | 0.4x                | Icons             |

> **CMS**: Sanity integration is stubbed/TODO. See `TODO List` section.

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
markoweb/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Header, Footer, metadata)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services index
│   │   ├── personal-care/
│   │   ├── companion-care/
│   │   ├── dementia-care/
│   │   ├── respite-care/
│   │   ├── post-hospital-support/
│   │   ├── cancer-care-support/
│   │   └── ipop-transitional-care/
│   ├── service-areas/
│   │   ├── page.tsx              # Service areas index
│   │   ├── howard-county/
│   │   ├── carroll-county/
│   │   ├── anne-arundel-county/
│   │   └── frederick-county/
│   ├── referral-partners/page.tsx
│   ├── careers/page.tsx
│   ├── resources/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── legal/
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── compliance/page.tsx
│   ├── api/
│   │   └── leads/
│   │       ├── assessment/route.ts
│   │       ├── referral/route.ts
│   │       └── caregiver/route.ts
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   └── robots.ts                 # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav with dropdown menus
│   │   └── Footer.tsx            # Full-width footer
│   ├── ui/
│   │   ├── Toast.tsx             # Success/error toast + useToast hook
│   │   ├── SectionHeader.tsx     # Reusable section headline
│   │   └── LicenseBanner.tsx     # Dynamic license status component
│   ├── forms/
│   │   ├── AssessmentForm.tsx    # Free assessment lead form
│   │   ├── ReferralForm.tsx      # Hospital/partner referral intake form
│   │   └── CaregiverForm.tsx     # Caregiver job application form
│   ├── sections/
│   │   ├── TrustBadges.tsx       # W2/RN/BG/Insurance badges grid
│   │   ├── ServiceHighlights.tsx # Service card grid
│   │   ├── Testimonials.tsx      # Client testimonials
│   │   ├── FAQPreview.tsx        # Collapsible FAQ preview
│   │   ├── CTABanner.tsx         # Full-width call-to-action banner
│   │   ├── ServicePageLayout.tsx # Reusable service page template
│   │   └── CountyPageLayout.tsx  # Reusable county page template
│   └── seo/
│       ├── LocalBusinessSchema.tsx  # JSON-LD LocalBusiness schema
│       └── FAQSchema.tsx            # JSON-LD FAQ schema
│
├── config/
│   └── brand.ts                  # ← ALL BRAND DATA LIVES HERE
│
├── lib/
│   ├── utils.ts                  # cn(), slugify(), etc.
│   └── validations.ts            # Zod schemas for all 3 forms
│
├── data/                         # Local JSON lead storage (auto-created)
│   ├── assessments.json
│   ├── referrals.json
│   └── caregiver-applications.json
│
├── public/                       # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Where to Edit Brand Info

**All brand data is centralized in one file:**

```
config/brand.ts
```

Edit this file to update:

- Agency name, tagline, phone, email, address
- Service counties
- `isLicensed` boolean — drives license badge logic site-wide
- `licenseStatusLabel` — displayed in header banner and footer
- Services list (slug + name)
- Social links, site URL

**The `isLicensed` flag is critical:**

- `false` → Shows "RSA Licensure in Progress" badges everywhere
- `true` → Shows "Licensed RSA – Maryland" badges

---

## Where to Edit Content

| Content                | Location                                  |
| ---------------------- | ----------------------------------------- |
| Homepage copy          | `app/page.tsx`                            |
| About page             | `app/about/page.tsx`                      |
| Service page content   | `app/services/[service]/page.tsx`         |
| County pages           | `app/service-areas/[county]/page.tsx`     |
| FAQ questions          | `app/faq/page.tsx` (faqCategories array)  |
| Testimonials           | `components/sections/Testimonials.tsx`    |
| Blog post stubs        | `app/resources/page.tsx` (articles array) |
| Form fields/validation | `lib/validations.ts`                      |
| Trust badges           | `components/sections/TrustBadges.tsx`     |

---

## Lead Data

Form submissions are stored in `data/` as JSON files:

- `data/assessments.json` — Free assessment requests
- `data/referrals.json` — Hospital referral intakes
- `data/caregiver-applications.json` — Job applications

**These are NOT suitable for production.** See CRM TODO below.

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables (for production)

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://www.markocare.com
# Add CRM/email keys here when integrated
```

### Custom Domain

Set `brand.siteUrl` in `config/brand.ts` to your production domain.
This drives all canonical URLs, sitemap, and OpenGraph metadata.

---

## Route Map

| Route                                | Page              | Priority              |
| ------------------------------------ | ----------------- | --------------------- |
| `/`                                  | Homepage          | Primary lead capture  |
| `/about`                             | About MarkoCare   | Trust building        |
| `/services`                          | Services index    | SEO hub               |
| `/services/personal-care`            | Personal Care     | High intent           |
| `/services/companion-care`           | Companion Care    | High intent           |
| `/services/dementia-care`            | Dementia Care     | High intent           |
| `/services/respite-care`             | Respite Care      | High intent           |
| `/services/post-hospital-support`    | Post-Hospital     | Hospital leads        |
| `/services/cancer-care-support`      | Cancer Care       | Specialty leads       |
| `/services/ipop-transitional-care`   | IPOP Care         | Hospital partner      |
| `/service-areas`                     | Areas index       | SEO hub               |
| `/service-areas/howard-county`       | Howard County     | Local SEO             |
| `/service-areas/carroll-county`      | Carroll County    | Local SEO             |
| `/service-areas/anne-arundel-county` | Anne Arundel      | Local SEO             |
| `/service-areas/frederick-county`    | Frederick County  | Local SEO             |
| `/referral-partners`                 | Referral Partners | Hospital leads        |
| `/careers`                           | Careers           | Caregiver recruitment |
| `/resources`                         | Blog/Resources    | Content SEO           |
| `/faq`                               | FAQ               | Trust / SEO           |
| `/contact`                           | Contact           | Lead capture          |
| `/legal/privacy`                     | Privacy Policy    | Compliance            |
| `/legal/terms`                       | Terms of Service  | Compliance            |
| `/legal/compliance`                  | Compliance        | MDH compliance        |
| `/sitemap.xml`                       | Auto-generated    | SEO                   |
| `/robots.txt`                        | Auto-generated    | SEO                   |

---

## Production TODO List

### 🔴 Critical — Before Launch

- [ ] **RSA License obtained** — Update `brand.isLicensed = true` in `config/brand.ts`
- [ ] **Replace JSON lead storage** with CRM integration (HubSpot, GoHighLevel, or Sanity)
- [ ] **Configure email notifications** for form submissions (SendGrid, Resend, Nodemailer)
- [ ] **Add real testimonials** — Replace placeholder testimonials with verified client reviews
- [ ] **Google Analytics 4** — Add GA4 tag to `app/layout.tsx`
- [ ] **Google Search Console** — Verify site ownership and submit sitemap
- [ ] **Add OG image** — Create `/public/og-image.jpg` (1200×630px) for social sharing
- [ ] **Add logo** — Create `/public/logo.png` for schema markup
- [ ] **HIPAA compliance review** — Have a compliance attorney review form data handling
- [ ] **Rate limiting** — Add rate limiting to `/api/leads/*` routes before going live

### 🟡 High Priority — Within 30 Days

- [ ] **Google Maps embed** — Replace placeholder map in `/contact` with real embed (Maps API key required)
- [ ] **Referral PDF packet** — Design and upload caregiver capability PDF for `/referral-partners`
- [ ] **Blog posts** — Write and publish full versions of the 6 stub articles in `/resources`
- [ ] **Google Business Profile** — Create and verify listing for Columbia, MD
- [ ] **Favicon** — Add `favicon.ico` and Apple touch icons to `/public`
- [ ] **Phone tracking** — Implement call tracking number (CallRail or similar) for ROI measurement
- [ ] **CookieConsent** — Add GDPR/CCPA compliant cookie banner if adding analytics
- [ ] **404 page** — Add `app/not-found.tsx` with helpful navigation
- [ ] **Loading states** — Add `app/loading.tsx` for better perceived performance

### 🟢 Growth — Within 60–90 Days

- [ ] **Sanity CMS integration** — Connect Sanity for blog posts and testimonials
- [ ] **Individual blog post pages** — Add `app/resources/[slug]/page.tsx` with dynamic routing
- [ ] **HubSpot/CRM pipeline** — Route form submissions directly to CRM
- [ ] **Live chat widget** — Add Tidio, Intercom, or similar for real-time lead capture
- [ ] **Accessibility audit** — Run axe-core audit and fix any WCAG 2.1 AA issues
- [ ] **Core Web Vitals** — Run Lighthouse audit and optimize LCP/CLS/FID
- [ ] **Structured data testing** — Test all schema markup with Google's Rich Results Test
- [ ] **Review platform** — Set up Google Reviews and/or Home Instead/Care.com profile
- [ ] **Email marketing** — Set up nurture sequences for assessment form leads
- [ ] **Referral tracking** — Add UTM parameters and referral source tracking to forms
- [ ] **ADA statement page** — Add `/legal/accessibility` page
- [ ] **Medicaid page** — Add dedicated Medicaid information page when enrollment is complete
- [ ] **Expand service area** — Add Montgomery County and Prince George's County pages

---

## Color Reference

| Color     | Hex       | Usage                          |
| --------- | --------- | ------------------------------ |
| Green-600 | `#258554` | Primary buttons, badges, icons |
| Green-700 | `#1e6a44` | Hover states                   |
| Navy-700  | `#1a4176` | Secondary buttons, nav         |
| Navy-800  | `#193762` | Hero backgrounds, headings     |
| Navy-900  | `#172f52` | Footer, dark sections          |

Customize in `tailwind.config.ts` → `theme.extend.colors.brand`

---

## Notes

- **No dark mode** — intentionally disabled per design spec
- **No heavy animations** — transitions kept to `duration-200` max
- **Security headers** — Set in `next.config.js`
- **API routes** block `/api/` and `/data/` in `robots.ts`
- All forms use optimistic UX (toast notifications) with server-side zod validation

---

_Built for MarkoCare — Columbia, Maryland. Questions? hello@markocare.com_
