# Taniti Tourism Website - UX Design Prototype

A responsive, multi-page tourism website prototype for the island of Taniti, created as part of WGU D479 UX Design coursework.

## Project Overview

This interactive prototype addresses the requirements from the Tanitian government to redesign their outdated tourism website. The new design provides:

- **Clear Navigation**: Fixed navbar with intuitive page structure
- **Mobile Responsive**: Fully functional on all device sizes with mobile-first design
- **Booking Integration**: Curated package system with external partner links
- **Accessibility**: Semantic HTML, ARIA labels, and clear visual hierarchy

## Design Decisions

### Color Palette (Taniti Tropical)
- **Primary (Ocean Deep)**: `#006D77` - Navigation, headings, CTAs
- **Secondary (Coral Reef)**: `#FF9F1C` - Accents, alerts, highlights
- **Accent (Beach Sand)**: `#FFD166` - Book Now CTA button (high visibility)
- **Background (Cloud White)**: `#F6F6F6` - Main background
- **Text (Volcanic Rock)**: `#293241` - Body text
- **Success (Palm Frond)**: `#83C5BE` - Success states, package borders

### Typography
- **Headings**: Baloo 2 (curvy sans-serif evoking water/waves)
- **Body**: Inter (clean, highly legible UI font)

### Key UX Features

#### 1. Navigation Structure
- Consistent navigation across all pages
- **Search bar** embedded in navbar (desktop: always visible, mobile: toggle)
- **Book Now button** styled with accent color for maximum CTA visibility
- Responsive hamburger menu for mobile

#### 2. User Feedback Implementation
Based on guerrilla testing:
- **Feedback #1**: Added curated booking packages (Cruise Stopover, Rainforest Adventure) instead of just external links
- **Feedback #2**: Implemented fully responsive mobile design with dedicated mobile nav
- **Feedback #3**: Broke up dense logistics info into icon-based cards with visual hierarchy

#### 3. Persona-Driven Design
Designed for "Jim" (40-45, family of 5, cruise visitor, 2-day stay):
- Quick-access booking for short stays
- Clear transportation/logistics info
- Family-friendly activity filtering
- Mobile-optimized (for on-the-go planning)

## File Structure

```
wgu-d479-UX-Design/
├── index.html          # Home page (Hero, Plan section, Testimonials)
├── attractions.html    # Activities and things to do
├── booking.html        # Curated packages + external partner links
├── plan.html          # Trip planning (transport, essentials, safety)
├── about.html         # About Taniti island
├── contact.html       # Contact form
├── css/
│   └── styles.css     # Shared styles (responsive, accessible)
└── js/
    └── app.js         # Shared scripts (nav toggle, modal, search)
```

## Local Development

### Preview Locally

```bash
# Navigate to project directory
cd /home/iamjarvi/Source/wgu/wgu-d479-UX-Design

# Start a simple HTTP server
python -m http.server 8000

# Open in browser
# http://localhost:8000/
```

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Google Fonts, FontAwesome CDN, Unsplash images)

## GitHub Pages Deployment

### Setup Steps

1. **Push to GitHub**:
```bash
git add .
git commit -m "Complete multi-page prototype with responsive design"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to **Pages** section
   - Under "Build and deployment":
     - Source: Deploy from a branch
     - Branch: `main` / root
   - Click Save

3. **Access Live Site**:
   - URL: `https://iamjarvi.github.io/wgu-d479-UX-Design/`
   - Allow 1-2 minutes for initial deployment

## Pages Overview

### Home (`index.html`)
- **Hero Section**: Full-screen banner with primary CTA
- **Plan Your Trip**: Icon-based feature cards (beaches, rainforests, cuisine)
- **Testimonials**: Real visitor reviews with 5-star ratings

### Attractions (`attractions.html`)
- Activity cards with images, descriptions, duration, and pricing
- Filter dropdown (placeholder for future functionality)
- Direct "Book Now" CTAs

### Booking (`booking.html`)
- **Curated Packages**: Pre-built itineraries (Cruise Stopover, Rainforest Adventure)
- **Booking Modal**: Simple form simulation
- **External Links Section**: Direct links to Booking.com, Viator, OpenTable

### Plan (`plan.html`)
- **Alert Banner**: Holiday closure warning
- **Info Cards**: Transportation, Essentials (power/currency), Health & Safety
- Addresses Jim's logistics-focused needs

### About (`about.html`)
- Island geography, culture, and visitor information
- Image cards with contextual details

### Contact (`contact.html`)
- Contact form (simulated submission)
- Tourism Board phone and address

## Technical Implementation

### Responsive Design
- **Mobile-first approach** with breakpoint at 768px
- Flexbox and CSS Grid for fluid layouts
- Touch-friendly button sizes (min 44x44px)

### Accessibility
- Semantic HTML5 elements
- ARIA labels on search form and mobile toggle
- Sufficient color contrast (WCAG AA compliant)
- Keyboard navigation support

### Performance
- External CDN resources (fonts, icons) with preconnect
- Optimized images from Unsplash CDN with query parameters
- Minimal JavaScript (vanilla JS, no frameworks)

## Assignment Deliverables Mapping

| Requirement | File/Section | Status |
|------------|--------------|--------|
| **A. Timeline** | Separate document | ✓ Complete |
| **B. Persona** | Based on Jim (Survey Results) | ✓ Complete |
| **C. Wireframe** | Low-fidelity wireframe (separate) | ✓ Complete |
| **D. Guerrilla Testing** | Feedback documented | ✓ Complete |
| **E. Prototype** | This interactive site | ✓ Complete |
| **F. Usability Tasks** | Documented in assignment | ✓ Complete |

### Prototype URL (for submission)
Once deployed to GitHub Pages:
```
https://iamjarvi.github.io/wgu-d479-UX-Design/
```

## Browser Compatibility

Tested and verified in:
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
- Mobile Safari (iOS 16+)
- Chrome Mobile (Android 12+)

## Credits

- **Design**: Based on Taniti Tourism redesign requirements (WGU D479)
- **Fonts**: Google Fonts (Baloo 2, Inter)
- **Icons**: Font Awesome 6.4.0
- **Images**: Unsplash (royalty-free stock photography)

## License

This project is created for educational purposes as part of WGU coursework.

---

**Last Updated**: November 30, 2025  
**Author**: iamjarvi  
**Course**: WGU D479 - UX Design
