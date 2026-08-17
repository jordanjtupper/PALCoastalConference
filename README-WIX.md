# 2026 PAL Coastal Workshop — GitHub Prototype / Wix Migration Notes

## What this package is
This is a static, GitHub-ready prototype for the 2026 Ports Association of Louisiana Coastal Workshop at Port Fourchon.

The structure is intentionally modular so the same sections can be recreated cleanly in Wix without redesigning the site from scratch.

## Files
- `index.html` — complete one-page site
- `styles.css` — all visual styling and mobile breakpoints
- `script.js` — mobile navigation and prototype form behavior
- `assets/pal-logo.jpeg` — PAL logo extracted from the supplied workshop materials

## GitHub Pages
Upload the contents of this folder to the root of a GitHub repository and enable GitHub Pages from the repository settings. `index.html` is the entry page.

## Important Wix migration note
Wix does not treat a static HTML site as a native Wix site that can simply be imported and then connected to Wix Payments. The best migration path is to rebuild these same visual sections in Wix and connect the registration/payment actions natively.

## Recommended Wix build
### 1. Main event registration
Use **Wix Events** for the attendee registration workflow.

Suggested paid ticket:
- `Port Attendee` — $250

Registration form fields:
- Registrant name
- Port
- Would you like to fish if space is available? Yes / No
- Fishing preference: Inland / Offshore
- Would you like to attend the Port Fourchon tour? Yes / No
- Attendance dates: Oct. 28 / Oct. 29 / Oct. 30

Configure Wix Events so each ticket requires its own guest registration information. The PAL rule limiting participation to two attendees per port should be displayed prominently. If PAL needs that rule to be automatically enforced by port name rather than manually reviewed, that will require a custom Wix/Velo workflow rather than standard ticket settings.

### 2. Sponsor registration
Keep sponsor checkout separate from normal attendee registration so the forms stay clean.

Sponsor products / ticket types:
- Vessel Sponsor — $1,500
- Cocktail Hour Sponsor — $250 (limit 4 total)

Sponsor information to collect:
- Company / organization
- Contact name
- Email
- Phone
- Logo upload
- Complimentary registrant name
- Port Fourchon tour participation
- Fishing participation (Vessel Sponsor only)

### 3. Wix Payments
Connect the site to Wix Payments in the Wix dashboard. The prototype intentionally does not process payments or collect form submissions while hosted on GitHub.

### 4. Suggested Wix page structure
A single scrolling landing page works well for this event:
1. Hero / event summary
2. Registration deadline strip
3. Workshop overview
4. Three-day agenda
5. Register / pay
6. Sponsor opportunities
7. Invited leadership
8. Contact

Optional second page:
- `Registration & Sponsorship` — useful if PAL wants a completely focused checkout experience.

## Content source notes
The source materials identify:
- Port Fourchon, Louisiana
- October 28–30, 2026
- Reply / registration deadline: September 24, 2026
- Registration: $250 per person
- Limit: 2 registrants per port
- Vessel Sponsor: $1,500
- Cocktail Hour Sponsor: $250, 4 available (2 each for 2 nights)

The invitation contains a blank placeholder for the Commissioner of Multimodal Commerce. The prototype does not invent a name for that role.
