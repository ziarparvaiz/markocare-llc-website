# CLAUDE.md — Backend: Careers Application System (Airtable + Resend)

**ClickUp Task:** Backend - Careers Airtable (`86e09y2v8`)
**Project:** MarkoCare LLC — Website Development
**Stack:** Next.js 14+ App Router · TypeScript · Tailwind CSS · Airtable API · Resend · UploadThing

---

## Overview

Implement the full backend for the MarkoCare Careers application form. This system accepts applications from all applicant types (Caregiver, CNA, RN Nurse) through a **single unified form**. On submission:

1. CV (PDF) is uploaded via UploadThing → public URL obtained
2. Form data + CV URL is written to Airtable (Careers Applications table)
3. Confirmation email is sent to the applicant via Resend
4. Internal notification email is sent to `info@markocare.com` via Resend

Job positions are loaded dynamically from a local `.json` file — **not hardcoded**.

---

## Environment Variables

Add the following to `.env.local`. Do **not** rename existing variables. Only add what is listed here.

```env
# ─── Careers Application ───────────────────────────────────────────────
AIRTABLE_API_KEY=your_airtable_personal_access_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_CAREERS_TABLE_NAME=Careers Applications

RESEND_CAREERS_FROM_EMAIL=hr@markocare.com
RESEND_CAREERS_APPLICATION_EMAIL=hr@markocare.com

# ─── Contact Form (Free In-Home Assessment) ────────────────────────────
# Rename existing RESEND_FROM_EMAIL → RESEND_CONTACT_FROM_EMAIL
RESEND_CONTACT_FROM_EMAIL=info@markocare.com
```

> ⚠️ **RENAME TASK:** Find all usages of `RESEND_FROM_EMAIL` in the codebase (contact form route, any email utility) and replace with `RESEND_CONTACT_FROM_EMAIL`. Update `.env.local` and `.env.example` accordingly.

---

## File Structure

Create/modify only the following files:

```
app/
  api/
    careers/
      route.ts                        ← POST handler (main API route)

lib/
  airtable.ts                         ← Airtable client + submitCareerApplication()
  careers-email.ts                    ← Resend email templates for careers

data/
  positions.json                      ← Job listings (already exists or create)

types/
  careers.ts                          ← CareerApplication TypeScript interface
```

Do **not** modify any existing page components, the contact form route, or any CMS files.

---

## Implementation Sequence

Execute **one step at a time**. Stop and confirm after each step.

---

### STEP 1 — Rename Environment Variable (RESEND_FROM_EMAIL → RESEND_CONTACT_FROM_EMAIL)

**Files to search:**
- `app/api/contact/route.ts` (or equivalent contact API route)
- Any `lib/email.ts` or `lib/resend.ts` utility
- `.env.local`
- `.env.example` (if exists)

**Action:** Replace all occurrences of `process.env.RESEND_FROM_EMAIL` with `process.env.RESEND_CONTACT_FROM_EMAIL`.

✅ Confirm: No remaining references to `RESEND_FROM_EMAIL` in the codebase.

---

### STEP 2 — Create TypeScript Interface

**File:** `types/careers.ts`

```typescript
export interface CareerApplication {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  positionApplyingFor: string;
  preferredServiceCounty: string;
  yearsOfExperience: number;
  certificationsAndQualifications: string;
  availability: string;
  additionalInformation?: string;
  cvUrl: string;               // UploadThing URL after upload
  cvFileName: string;          // Original filename
  backgroundCheckConsent: boolean;   // Required: true
  equalOpportunityAcknowledgment: boolean; // Required: true
  submittedAt: string;         // ISO timestamp
}
```

✅ Confirm: File created, TypeScript compiles without errors.

---

### STEP 3 — Verify / Create positions.json

**File:** `data/positions.json`

Ensure this file exists with the following structure. If it already exists, verify schema compatibility. If not, create it:

```json
{
  "positions": [
    {
      "id": "caregiver",
      "title": "Caregiver",
      "type": "Level 1",
      "counties": ["Howard", "Anne Arundel", "Carroll", "Frederick"]
    },
    {
      "id": "cna",
      "title": "Certified Nursing Assistant (CNA)",
      "type": "Level 1 / Level 2",
      "counties": ["Howard", "Anne Arundel", "Carroll", "Frederick"]
    },
    {
      "id": "rn-nurse",
      "title": "Registered Nurse (RN)",
      "type": "Level 2 Supervisor",
      "counties": ["Howard", "Anne Arundel", "Carroll", "Frederick"]
    },
    {
      "id": "companion",
      "title": "Companion / Homemaker",
      "type": "Level 1",
      "counties": ["Howard", "Anne Arundel", "Carroll", "Frederick"]
    }
  ],
  "serviceCounties": [
    "Howard County",
    "Anne Arundel County",
    "Carroll County",
    "Frederick County"
  ]
}
```

✅ Confirm: File exists and JSON is valid.

---

### STEP 4 — Create Airtable Client

**File:** `lib/airtable.ts`

Requirements:
- Use the official `airtable` npm package (`npm install airtable`)
- Export a `submitCareerApplication(data: CareerApplication): Promise<void>` function
- Map ALL fields from `CareerApplication` interface to Airtable column names exactly as specified in the field mapping table below
- On Airtable error: throw a descriptive error (do not swallow)
- CV must be submitted as an Airtable **Attachment** array: `[{ url: data.cvUrl, filename: data.cvFileName }]`

**Airtable Field Mapping:**

| CareerApplication Field | Airtable Column Name |
|---|---|
| firstName | First Name |
| lastName | Last Name |
| phone | Phone Number |
| email | Email Address |
| positionApplyingFor | Position Applying For |
| preferredServiceCounty | Preferred Service County |
| yearsOfExperience | Years of Experience |
| certificationsAndQualifications | Certifications & Qualifications |
| availability | Availability |
| additionalInformation | Additional Information |
| cvUrl + cvFileName | CV Attachment (Attachments field) |
| backgroundCheckConsent | Background Check Consent |
| equalOpportunityAcknowledgment | Equal Opportunity Acknowledgment |
| submittedAt | Submitted At |

✅ Confirm: `airtable` package installed, `lib/airtable.ts` created, no TypeScript errors.

---

### STEP 5 — Create Email Templates

**File:** `lib/careers-email.ts`

Export two functions:

#### `getApplicantConfirmationEmail(data: CareerApplication): { subject: string; html: string }`

- Subject: `"Thank You for Applying to MarkoCare — We've Received Your Application"`
- Content: Professional confirmation. Include applicant name, position applied for, next steps message. MarkoCare branding (navy/teal color scheme). Footer with `info@markocare.com`.
- Do NOT include CV attachment in this email.

#### `getInternalNotificationEmail(data: CareerApplication): { subject: string; html: string }`

- Subject: `"[New Application] ${data.positionApplyingFor} — ${data.firstName} ${data.lastName}"`
- Content: Full application summary table (all fields). CV link displayed as clickable URL. Submitted timestamp. Formatted for internal HR review.

✅ Confirm: Both functions exported, HTML is valid, no TypeScript errors.

---

### STEP 6 — Create API Route

**File:** `app/api/careers/route.ts`

**Method:** `POST`
**Content-Type:** `multipart/form-data` (because of CV file upload)

**Processing flow:**

```
1. Parse multipart form data (use next built-in formData() or formidable)
2. Validate all required fields — return 400 with field-level errors if invalid
3. Validate: backgroundCheckConsent === true (required)
4. Validate: equalOpportunityAcknowledgment === true (required)
5. Validate: CV file is present AND mime type is application/pdf
6. Upload CV to UploadThing → get public URL + filename
7. Build CareerApplication object with submittedAt = new Date().toISOString()
8. Submit to Airtable via submitCareerApplication()
9. Send applicant confirmation email via Resend
   - from: RESEND_CAREERS_FROM_EMAIL  (hr@markocare.com)
   - to: applicant email
10. Send internal notification email via Resend
    - from: RESEND_CAREERS_FROM_EMAIL  (hr@markocare.com)
    - to: RESEND_CAREERS_APPLICATION_EMAIL (hr@markocare.com)
11. Return 200 JSON: { success: true, message: "Application submitted successfully" }
```

**Error handling:**
- Airtable failure → 500, log error server-side, return generic message to client
- Resend failure → log error but do NOT block the 200 response (application already saved)
- UploadThing failure → 500, do not proceed to Airtable
- Validation failure → 400 with `{ success: false, errors: { fieldName: "message" } }`

✅ Confirm: Route created, all steps implemented, no TypeScript errors.

---

### STEP 7 — Integration Test (Dev Environment)

Test the full flow manually or via curl/Postman:

1. Submit a test application with all fields + a PDF file
2. Verify record appears in Airtable with CV attachment visible
3. Verify confirmation email received at test email address
4. Verify internal notification email received at `info@markocare.com`
5. Test missing required fields → confirm 400 response with errors
6. Test non-PDF file → confirm 400 rejection

✅ Confirm: All 6 test scenarios pass.

---

### STEP 8 — UploadThing Configuration Verification

Verify that UploadThing is configured to:
- Accept `application/pdf` MIME type
- Set max file size to **10MB**
- Store under a route named `careerCV` (or `cvUpload`)

If UploadThing route does not exist for CV uploads, add it to `app/api/uploadthing/core.ts`:

```typescript
careerCV: f({ pdf: { maxFileSize: "10MB", maxFileCount: 1 } })
  .middleware(async () => {
    return {};
  })
  .onUploadComplete(async ({ file }) => {
    return { url: file.url, name: file.name };
  }),
```

✅ Confirm: UploadThing route exists and accepts PDF.

---

## Validation Rules (All Required Unless Marked Optional)

| Field | Rule |
|---|---|
| firstName | Non-empty string, max 50 chars |
| lastName | Non-empty string, max 50 chars |
| phone | Valid US phone format |
| email | Valid email format |
| positionApplyingFor | Must match a value from `positions.json` |
| preferredServiceCounty | Must match a value from `positions.json` serviceCounties |
| yearsOfExperience | Integer ≥ 0, max 50 |
| certificationsAndQualifications | Non-empty string, max 500 chars |
| availability | Non-empty string |
| additionalInformation | Optional, max 1000 chars |
| CV file | Required, PDF only, max 10MB |
| backgroundCheckConsent | Must be `true` |
| equalOpportunityAcknowledgment | Must be `true` |

---

## Dependencies to Install

```bash
npm install airtable
npm install --save-dev @types/airtable
```

All other dependencies (Resend, UploadThing) are assumed to be already installed from Phase 1.

---

## Do NOT Touch

- Any existing CMS module files
- `app/api/contact/route.ts` (except the env variable rename in Step 1)
- Any existing Prisma schema or NextAuth configuration
- Any page components or layout files
- `config/brand.ts`

---

## Definition of Done

- [ ] `RESEND_FROM_EMAIL` renamed to `RESEND_CONTACT_FROM_EMAIL` everywhere
- [ ] `types/careers.ts` created
- [ ] `data/positions.json` exists and is valid
- [ ] `lib/airtable.ts` created with `submitCareerApplication()`
- [ ] `lib/careers-email.ts` created with both email templates
- [ ] `app/api/careers/route.ts` created and handles full flow
- [ ] UploadThing PDF route configured
- [ ] All 7 integration test scenarios pass
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] `.env.example` updated with all new variables (values redacted)