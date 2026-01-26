# Flowmaster Logo Animation Project

## Overview

This project implements a motion graphics logo animation for the Flowmaster Live Studio landing page hero section. The animation plays on page load, revealing the logo components in a staggered sequence, then transitions into a subtle parallax/breathing idle state.

## Goals

1. Create a 5-stage logo reveal animation using CSS keyframes and vanilla JS
2. Restructure the hero section from single-column centered layout to two-column layout (desktop)
3. Implement responsive behavior with logo above text content on mobile
4. Add post-animation parallax and breathing effects
5. Remove the existing "FLOWMASTER LIVE STUDIO" tagline text from hero

## Technical Stack

- Pure CSS animations (keyframes)
- Vanilla JavaScript (no animation libraries)
- Astro framework (existing site)
- SVG assets (inline for animation control)

## Animation Specification

### Sequence Timing

| Phase | Element | Start Time | Duration | Motion |
|-------|---------|------------|----------|--------|
| 1 | Red Square | 0ms | 750ms | Fade in + rise 50px |
| 2 | Yellow Square | 500ms | 750ms | Fade in + rise 50px |
| 3 | Green Square | 1000ms | 750ms | Fade in + rise 50px |
| 4 | "Flowmaster" Text | 1200ms | 750ms | Fade in + scale 85%→100% + rise 30px |
| 5 | "LIVE STUDIO" Text | 1500ms | 750ms | Fade in + rise 15px |

Total animation duration: ~2.25 seconds

### Post-Animation Idle State

- **Breathing/bobbing:** Slow, continuous vertical oscillation
- **Mouse parallax (desktop only):** Logo group responds to cursor position, ~20px max drift
- **Unified movement:** All logo elements move together as a single group after intro completes
- **Runs indefinitely** while hero is visible

## Layout Changes

### Desktop (≥768px)
- Two-column grid layout
- Left column: Text content (headline, description, CTA buttons)
- Right column: Animated logo
- Remove "FLOWMASTER LIVE STUDIO" tagline above "Edit as you record"

### Mobile (<768px)
- Single column, stacked
- Logo animation appears above text content
- Mouse parallax disabled, breathing animation continues

## File Structure

```
flowmaster-site/
├── src/
│   ├── components/
│   │   └── AnimatedLogo.astro (NEW)
│   ├── styles/
│   │   └── logo-animation.css (NEW)
│   └── scripts/
│       └── logo-parallax.js (NEW)
├── public/
│   └── logos/ (SVG assets - may inline instead)
└── LogoAssets/
    └── Logos/
        ├── RedBox.svg
        ├── YellowBox.svg
        ├── GreenBox.svg
        ├── FlowmasterType.svg
        └── LiveStudioType.svg
```

## Tasks

See `/tasks` directory for individual task files with acceptance criteria.

Execute in order:
1. `01-audit-existing-hero.txt`
2. `02-create-animated-logo-component.txt`
3. `03-implement-intro-animation.txt`
4. `04-restructure-hero-layout.txt`
5. `05-implement-parallax-breathing.txt`
6. `06-mobile-responsive.txt`
7. `07-integration-testing.txt`

## Reference Assets

- Logo assets: `LogoAssets/Logos/`
- Layout mockups: `LogoAssets/Other/`
- Brand colors: `LogoAssets/Other/brand-colors.jpg`

## Notes

- Examine existing parallax implementation on "Easy as 1, 2, 3" section for consistency
- Animation should only play once per page load (not on scroll back into view)
- Prioritize performance - use CSS transforms and opacity for GPU acceleration
