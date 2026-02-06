# Task 02: Hero Section Parallax Animation

## Prerequisites
- Read `00_MASTER_CONTEXT.md` first
- Repository: `C:\Users\alexb\Desktop\flowmaster-site`

---

## Task Summary
Add a subtle parallax/swaying animation to the "Edit as you record" headline text, with a darker shadow copy behind it for depth.

---

## Design Specification

### Primary Text: "Edit as you record"
- Existing headline text
- Should have a subtle swaying/floating animation
- Movement should be gentle and continuous (not jarring)

### Shadow Text (New Element)
- Duplicate of "Edit as you record"
- Positioned directly behind the primary text
- Color: Between the background color and black (dark gray/charcoal)
- Should move with parallax offset relative to primary text
- Creates a subtle 3D "pop out" effect

---

## Animation Behavior

### Swaying Motion
- Gentle horizontal and/or vertical oscillation
- Subtle enough to not distract from readability
- Continuous loop (no jarring resets)
- Suggested: CSS keyframe animation or subtle transform

### Parallax Effect
- Shadow text moves slightly less/more than primary text
- Creates depth perception
- Shadow should feel "anchored" to the background
- Primary text should feel like it's floating in front

---

## Implementation Approach

### Option A: CSS Only (Preferred for Performance)
```css
/* Example structure - adapt to actual implementation */
.hero-headline-container {
  position: relative;
}

.hero-headline-shadow {
  position: absolute;
  color: /* dark gray between bg and black */;
  z-index: 1;
  animation: sway-shadow 4s ease-in-out infinite;
}

.hero-headline-primary {
  position: relative;
  z-index: 2;
  animation: sway-primary 4s ease-in-out infinite;
}

@keyframes sway-primary {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(3px, -2px); }
}

@keyframes sway-shadow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(1px, -1px); }
}
```

### Option B: JavaScript/React (If needed for more control)
- Use requestAnimationFrame for smooth animation
- Calculate parallax offset based on time or scroll position
- Keep performance in mind

---

## Color Specification

### Background Color
First, identify the exact background color of the hero section (appears to be a dark brown/charcoal from screenshots).

### Shadow Text Color
Should be a color that is:
- Darker than the background
- Lighter than pure black
- Creates visible but subtle contrast

Example calculation:
- If background is `#1a1a1a`, shadow might be `#0d0d0d`
- If background is `#2d2520`, shadow might be `#1a1512`

---

## Acceptance Criteria

- [ ] "Edit as you record" text has subtle swaying animation
- [ ] Shadow/duplicate text element created behind primary text
- [ ] Shadow text color is between background and black
- [ ] Parallax effect creates subtle depth (shadow moves differently than primary)
- [ ] Animation is smooth and doesn't cause layout shifts
- [ ] Animation doesn't distract from readability
- [ ] Works across all viewport sizes
- [ ] Respects `prefers-reduced-motion` media query (disable or reduce animation)

---

## Accessibility Considerations

```css
@media (prefers-reduced-motion: reduce) {
  .hero-headline-shadow,
  .hero-headline-primary {
    animation: none;
  }
}
```

---

## Files to Modify

Likely candidates (verify in repo):
- Hero component file (`.astro`, `.tsx`, or `.jsx`)
- Global or component CSS/SCSS file
- May need to add new CSS keyframes

---

## Testing Checklist

- [ ] Animation runs smoothly at 60fps
- [ ] No layout shift or jank
- [ ] Shadow is visible but subtle
- [ ] Effect works on mobile devices
- [ ] Reduced motion preference is respected
- [ ] Text remains readable throughout animation cycle
