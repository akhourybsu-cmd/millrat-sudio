// ─── Campaign Config ───────────────────────────────────────────────────────
// Update `status` to switch CTA copy/behavior site-wide.
//   "prelaunch" → notify me + countdown
//   "live"      → back the campaign + progress
//   "ended"     → join late pledge list

export const campaignConfig = {
  status: 'prelaunch', // TODO: update when campaign goes live
  launchDate: '2026-07-14T09:00:00-04:00', // Eastern time
  kickstarterUrl: 'https://www.kickstarter.com/projects/millratstudio/millrat-pack',

  // ── Mailchimp email capture ────────────────────────────────────────────────
  // Public embed values only — no API key. Safe to commit.
  mailchimpActionUrl: 'https://mailchi.us10.list-manage.com/subscribe/post?u=d47417352633d84e977f36787&id=9aac3b5b1c&f_id=00fd91e3f0',
  mailchimpEmailFieldName: 'EMAIL',
  mailchimpBotFieldName: 'b_d47417352633d84e977f36787_9aac3b5b1c',
  // Fallback if user needs to open the signup page directly
  emailSignupUrl: 'https://mailchi.mp/millrat.com/millratpacklanding',

  freeGameUrl: '#',    // TODO: replace with Someone's Y download gate URL
  socialUrls: {
    instagram: '#', // TODO
    tiktok: '#',    // TODO
    facebook: '#',  // TODO
    x: '#',         // TODO
  },
}
