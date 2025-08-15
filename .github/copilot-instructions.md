# miaigi — Static Website for AI Consulting Services

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

**CRITICAL: This is a static HTML/CSS/JavaScript website with NO BUILD PROCESS.**

### Bootstrap and Run the Website
- Navigate to repository root: `cd /path/to/MIAIGI-sites-public`
- Serve locally: `python3 -m http.server 8080` — starts instantly, ready in <1 second
- Access website: `http://localhost:8080`
- **NO INSTALLATION REQUIRED** — zero dependencies, zero build time

### File Structure (validated working)
```
/
├── index.html          # Main single-page website
├── styles.css          # Modern CSS with animations (22KB)
├── site.js            # Enhanced JavaScript features (16KB)
├── logo.svg           # Brand logo
├── favicon.svg        # Site icon
├── CNAME              # GitHub Pages domain: miaigi.co.uk
├── README.md          # Project documentation
├── sitespec.md        # Detailed site specifications
└── FINAL_TRANSFORMATION.md  # Enhancement history
```

### Deployment Process
- **Primary**: GitHub Pages automatically deploys from `main` branch
- **Custom Domain**: miaigi.co.uk (configured via CNAME)
- **Deployment Time**: Instant push to `main` → live in 1-2 minutes
- Push changes: `git add . && git commit -m "Update" && git push origin main`

## Validation

**ALWAYS manually validate changes through complete user scenarios.**

### Required Manual Testing
Run these validation steps after ANY changes:

1. **Server Start Test**:
   ```bash
   cd /path/to/MIAIGI-sites-public
   python3 -m http.server 8080
   # Should start instantly with "Serving HTTP on 0.0.0.0 port 8080"
   ```

2. **Navigation Testing**:
   - Load `http://localhost:8080`
   - Click each navigation link: About, Services, Use Cases, Case Studies, FAQs, Contact
   - Verify smooth scrolling to each section
   - Verify active navigation highlighting

3. **Interactive Feature Testing**:
   - Test "Book a free discovery call" buttons (should open email client)
   - Click "Return to top" button (bottom right)
   - Verify hover effects on buttons and cards
   - Test FAQ expandable sections (if present)

4. **Responsive Testing**:
   - Resize browser window to mobile size (320px width)
   - Verify navigation collapses properly
   - Verify all content remains readable and accessible

5. **Performance Validation**:
   - Check console for JavaScript errors (should see "miaigi enhancements loaded successfully")
   - Verify smooth animations and transitions
   - Test scroll performance on long pages

### Critical Success Criteria
- **Page loads instantly** with no build errors
- **All navigation links work** and scroll to correct sections
- **Email links function** (`mailto:hello@myai.guy` opens email client)
- **Return-to-top button responds** with visual feedback
- **No JavaScript console errors**
- **Mobile responsive** design works correctly

## Common Tasks

### Making Content Changes
- Edit `index.html` directly — no compilation needed
- Changes visible immediately on local server refresh
- Test locally before pushing to main branch

### Styling Updates
- Edit `styles.css` directly — no preprocessing
- Uses modern CSS features: custom properties, grid, flexbox
- Changes visible immediately on refresh

### JavaScript Enhancements
- Edit `site.js` directly — no transpilation needed
- Uses modern ES6+ features with feature detection
- Console should show "miaigi enhancements loaded successfully"

### Asset Management
- Add images/icons directly to repository root
- SVG files preferred for scalability
- Reference in HTML with relative paths

## Timing Expectations

- **Repository exploration**: <5 seconds
- **Local server start**: <1 second  
- **Page load time**: <1 second (local), <3 seconds (live)
- **Manual validation**: 2-3 minutes for complete testing
- **GitHub Pages deployment**: 1-2 minutes after push to main

**NEVER CANCEL server operations** — they start instantly and serve immediately.

## Troubleshooting

### Common Issues and Solutions

**"Server not starting"**:
- Ensure port 8080 is available: `lsof -i :8080`
- Try alternative port: `python3 -m http.server 8081`

**"Page not loading"**:
- Verify server running: check terminal output
- Check URL: should be `http://localhost:8080` (not https)
- Clear browser cache if needed

**"JavaScript not working"**:
- Check browser console for errors
- Verify `site.js` file exists and is served correctly
- Look for "miaigi enhancements loaded successfully" message

**"Styles not applying"**:
- Verify `styles.css` loads without 404 errors
- Check browser developer tools for CSS errors
- Clear browser cache

### Deployment Issues

**"GitHub Pages not updating"**:
- Verify push to `main` branch (not other branches)
- Check GitHub Pages settings: Settings → Pages
- Wait 1-2 minutes for propagation

**"Custom domain not working"**:
- Verify CNAME file contains: `miaigi.co.uk`
- Check GitHub Pages settings for custom domain configuration

## Key Project Context

### Website Purpose
- Professional AI consulting services website
- Target audience: independent businesses and small teams
- Services: AI discovery, process automation, strategy sessions

### Technical Approach
- **No framework overhead** — pure HTML/CSS/JavaScript
- **GitHub Pages optimized** — static files only
- **Modern enhancements** — scroll animations, interactive elements
- **Accessibility compliant** — semantic HTML, keyboard navigation

### Content Sections
1. **Hero** — Main value proposition and call-to-action
2. **About Gareth** — Founder background and credibility
3. **Services** — Four main service offerings
4. **Use Cases** — AI vs GenAI applications with examples
5. **Case Studies** — Two brief success stories
6. **FAQ** — Common questions about tools, safety, pricing
7. **Contact** — Multiple contact methods and booking

### Quality Standards
- **Performance first** — optimized for fast loading
- **Accessibility focused** — WCAG compliant
- **SEO optimized** — proper meta tags and semantic structure
- **Mobile responsive** — works on all device sizes

Always follow these instructions for consistent, reliable development in this codebase.