// ─── Campaign Config ───────────────────────────────────────────────────────
// Update `status` to switch CTA copy/behavior site-wide.
//   "prelaunch" → notify me + countdown
//   "live"      → back the campaign + progress
//   "ended"     → join late pledge list

export const campaignConfig = {
  status: 'prelaunch', // TODO: update when campaign goes live
  launchDate: '2026-07-14T09:00:00-04:00', // Eastern time
  kickstarterUrl: 'https://www.kickstarter.com/projects/millratstudio/millrat-pack',
  emailSignupUrl: '#', // TODO: replace with Mailchimp / ConvertKit URL
  freeGameUrl: '#',    // TODO: replace with Someone's Y download gate URL
  socialUrls: {
    instagram: '#', // TODO
    tiktok: '#',    // TODO
    facebook: '#',  // TODO
    x: '#',         // TODO
  },
}
