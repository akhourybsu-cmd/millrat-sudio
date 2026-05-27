# MILLRAT Studio — Integration & Launch Checklist

This file documents every integration point, launch switch, and third-party connection needed before going live.

---

## 1. Campaign status (most important)

**File:** `src/data/campaign.js`

```js
export const campaignConfig = {
  status: 'prelaunch', // ← CHANGE THIS
  // Options:
  //   'prelaunch' — countdown + "Notify Me on Kickstarter" CTAs
  //   'live'      — "Back on Kickstarter" CTAs, remove countdown
  //   'ended'     — "Join the Late Pledge List" CTAs

  launchDate: '2026-07-14T09:00:00-04:00', // Eastern time — update if date changes
  kickstarterUrl: 'https://www.kickstarter.com/projects/millratstudio/millrat-pack', // ✓ DONE
  emailSignupUrl: '#',   // ← REPLACE with Mailchimp/ConvertKit embed or API URL
  freeGameUrl: '#',      // ← REPLACE with Someone's Y download gate URL
  socialUrls: { ... },   // ← REPLACE with real social profile URLs
}
```

**Effect of changing `status`:**
- Header CTA label
- Hero CTA labels
- Kickstarter section headline + copy
- Campaign badge countdown vs. "Now Live" badge
- Footer CTA label

---

## 2. Email capture ✓ DONE

**File:** `src/components/millrat-pack/EmailCapture.jsx`

Wired to Mailchimp via native form POST — no Mailchimp JS/CSS loaded.

The form uses `action`, `method="post"`, `target="_blank"` to submit directly to Mailchimp's servers, opening the confirmation page in a new tab. A honeypot bot field is included off-screen.

Config values live in `src/data/campaign.js`:
```js
mailchimpActionUrl:     'https://mailchi.us10.list-manage.com/subscribe/post?...'
mailchimpEmailFieldName: 'EMAIL'
mailchimpBotFieldName:  'b_...'
emailSignupUrl:         'https://mailchi.mp/millrat.com/millratpacklanding' // fallback
```

**Security constraints (do not revert):**
- No Mailchimp CSS file imported
- No `mc-validate.js` script tag
- No API key in frontend code
- Only the public embed action URL and field names are stored

---

## 3. Analytics events

All events are marked with `// TODO: analytics.track(...)` comments throughout the codebase.

| Event | File | Trigger |
|---|---|---|
| `hero_kickstarter_click` | `Hero.jsx` | Click primary CTA in hero |
| `hero_email_click` | `Hero.jsx` | Click "Try Someone's Y Free" in hero |
| `quiz_completed` | `GameNightQuiz.jsx` | User selects a quiz option |
| `game_card_expanded` | `GameCard.jsx` | Click "How it plays" on any game card |
| `kickstarter_section_click` | `KickstarterSection.jsx` | Click CTA in the Kickstarter section |
| `email_signup_submit` | `EmailCapture.jsx` | Form submit attempted |
| `email_signup_success` | `EmailCapture.jsx` | Successful signup |
| `home_explore_pack` | `home/index.jsx` | Click "Explore Millrat Pack" on homepage |
| `home_view_pack` | `home/index.jsx` | Click "See the full pack →" on featured card |

To wire analytics, install your provider (e.g. `posthog-js`, `@segment/analytics-next`, GA4 gtag) and replace the TODO comments.

---

## 4. Social URLs

**File:** `src/data/campaign.js` → `socialUrls` object

```js
socialUrls: {
  instagram: 'https://www.instagram.com/millratstudio', // TODO
  tiktok: 'https://www.tiktok.com/@millratstudio',      // TODO
  facebook: 'https://www.facebook.com/millratstudio',   // TODO
  x: 'https://x.com/millratstudio',                    // TODO
},
```

Social links appear in: **Header** (mobile nav), **AboutSection**, **Footer**.

---

## 5. Contact form

**File:** `src/pages/contact/index.jsx`

Currently a static HTML form with no action. Wire to:
- **Formspree:** Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to `<form>`
- **Netlify Forms:** Add `data-netlify="true"` attribute and a hidden `form-name` input
- **Backend:** POST to your own API endpoint

---

## 6. Domain & deployment

| Item | Status |
|---|---|
| [ ] Real domain (millrat.com or similar) | Update `og:url` in `index.html` |
| [ ] Twitter handle | Update `twitter:site` in `index.html` |
| [ ] Favicon | Replace `/public/favicon.svg` with real Millrat mark |
| [ ] OG image | Create `/public/assets/images/og-image.jpg` (1200×630) |

---

## 7. SEO & per-page meta

This is a React SPA. Page titles update via `useEffect` in `src/hooks/usePageMeta.js` (works in browser, not for scrapers/crawlers).

**To get proper per-page OG tags for social sharing:** Migrate to:
- **Next.js** (recommended) — use `<Head>` or `export const metadata`
- **Astro** — native static export with per-page meta
- **react-helmet-async** — lightweight SPA solution (meta updates in browser only, still no SSR)

Current state is fine for a Kickstarter-phase launch. Prioritize SSR if SEO traffic matters after the campaign.

---

## 8. Image delivery

When images are ready, swap each placeholder by finding `TODO: replace` comments in the source:

```bash
# In the millrat-studio directory:
grep -rn "TODO: replace" src/
```

Each TODO includes the exact `<img>` tag ready to uncomment.
