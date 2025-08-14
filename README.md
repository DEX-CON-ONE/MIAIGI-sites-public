# miaigi — static site

Single-page static site for small-business AI consulting. No build tools. Works on GitHub Pages.

## Files
- index.html — content and markup
- styles.css — small, accessible styles
- logo.svg — simple text + three-star badge (replace when you supply your image)
- favicon.svg — blue square with white star

## Customize
- Update email in `index.html` (Contact + hero CTA)
- Choose lead gen:
	- HubSpot form embed (uncomment in Contact section and set portalId/formId)
	- or Microsoft Bookings (replace `/bookings` link, or embed iframe)
- Replace branding (title, logo.svg) if needed
- Optional: add Open Graph image (1200x630) and update `<meta property="og:image">`

## Deploy to GitHub Pages
1. Create a repo and push these files to the `main` branch
2. In Settings → Pages, set Source to `Deploy from a branch`, Branch `main / root`
3. Wait for publish; your site will be available at the Pages URL

## Accessibility & performance
- Semantic headings, visible focus styles, colour contrast ≥ 4.5:1
- Smooth scroll and tiny JS for the mobile menu
- Single small CSS file (<10KB), SVG assets, no analytics by default

## Later
- Enable HubSpot form or Bookings iframe for proper lead capture
- Add favicons (PNG) via your preferred generator
- Add client logos or a PDF download as needed

## HubSpot vs Microsoft Bookings (quick guide)

- HubSpot forms:
	- Pros: better lead capture, CRM, email follow-up, custom fields, routing
	- Cons: introduces third-party script; may set cookies if tracking enabled
	- How: uncomment the embed in `index.html` Contact section, set `portalId` and `formId`; you can omit the tracking code for a lighter, cookie-minimal setup

- Microsoft Bookings:
	- Pros: instant scheduling, native Microsoft 365, no extra scripts if you use a link
	- Cons: weaker lead data/CRM; you’ll rely on manual follow-up or additional tools
	- How: keep `/bookings` link or embed the iframe (example in `index.html` comment)
