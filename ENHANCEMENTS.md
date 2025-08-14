# Front-end enhancements plan and notes

This document captures the JS/CSS enhancements added to keep the site clean, fast, and modern, plus how to tweak them.

## Goals
- Add micro-interactions without hurting performance
- Keep it accessible (reduced motion respected, keyboard friendly)
- No frameworks; ship tiny vanilla JS

## Features added

1) Scroll spy (active nav highlight)
- Uses IntersectionObserver to apply `.active` to the nav link matching the section in view
- Tuning: adjust `rootMargin` in `site.js` to shift when the highlight changes

2) Reveal on scroll (content enters smoothly)
- Targets `.cards .card`, `.cases .case`, `.about-grid > *`, and any `.reveal`
- Respects `prefers-reduced-motion: reduce`
- Styles: `.will-reveal` → `.revealed` transition in `styles.css`

3) Sticky header shadow
- Adds a soft shadow when scrolling to increase depth
- Controlled by `.site-header.scrolled`

4) Mobile nav behaviour
- Closes on link click and on Escape
- Maintains `aria-expanded` on the toggle

5) Back-to-top button
- Appears after ~600px of scroll, smooth-scrolls to top
- Accessible via keyboard and with `aria-label`

## How to change targets
- To reveal specific elements, add class `reveal` to them
- To opt out of reveal for an element, remove `will-reveal` in markup or add `reduced-motion` media query rules

## Performance
- All observers are lazy; minimal work in scroll handlers (passive listeners)
- Single tiny script `site.js` with `defer`

## Accessibility
- Reduced motion respected automatically
- Focus outlines retained; back-to-top has a clear label

## Optional next steps
- Add dark mode (CSS prefers-color-scheme or a toggle)
- Add a tiny in-page search (client-side) for FAQs
- Add hash-change focus management for anchors (if needed)

## Using MCP servers for ideation/validation
- Use them to:
  - Generate accessibility checklist per change and cross-check ARIA/contrast
  - Propose test cases (keyboard nav, screen reader flows)
  - Review IntersectionObserver thresholds vs typical layouts
- Keep them out of runtime; they’re for planning/validation only

## Quick testing checklist
- Keyboard-only navigation (Tab/Shift+Tab) through header, sections, back-to-top
- Mobile menu open/close states; Escape closes; links close menu
- Reduced motion mode: no reveal animation
- Nav active highlight changes at sensible points while scrolling
