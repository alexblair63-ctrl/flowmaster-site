# Hero Logo Animation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create an animated logo reveal for the Flowmaster hero section with a two-column layout, staggered 5-stage intro animation, and post-animation breathing/parallax effects.

**Architecture:** Build a new `AnimatedLogo.astro` component with inline SVGs for animation control. Integrate into restructured Hero.astro with CSS Grid two-column layout. Use pure CSS keyframes for intro animation and vanilla JS for mouse parallax. All effects use GPU-accelerated properties (transform, opacity).

**Tech Stack:** Astro 5.16.11, Tailwind CSS 4.1.18, Pure CSS Keyframes, Vanilla JavaScript, IntersectionObserver API

---

## Project Context

### Existing Animation Patterns (Reference)

The site uses consistent animation patterns in `ThreeStepAnimation.astro`:
- Mouse parallax: 3% depth multiplier, ~20px max drift
- CSS custom properties: `--parallax-x`, `--parallax-y`
- Easing: `0.08` smoothing factor for parallax
- `prefers-reduced-motion` support throughout
- GPU-accelerated: only `transform` and `opacity`

### Current Hero Structure (`src/components/Hero.astro`)

- Single column, centered layout
- "FLOWMASTER LIVE STUDIO" tagline at line 9-11 (TO BE REMOVED)
- Staggered fade-in using `--delay` CSS variable
- Already has `prefers-reduced-motion` support

### SVG Assets Available

- `tasks/tasks3/Logos/LogoHorizontalLockup.svg` - Complete composed logo
- Individual: `RedBox.svg`, `YellowBox.svg`, `GreenBox.svg`, `FlowmasterType.svg`, `LiveStudioType.svg`

### Animation Timing Spec

| Element | Start | Duration | Transform |
|---------|-------|----------|-----------|
| Red Square | 0ms | 750ms | translateY(50px) → 0, opacity 0→1 |
| Yellow Square | 500ms | 750ms | translateY(50px) → 0, opacity 0→1 |
| Green Square | 1000ms | 750ms | translateY(50px) → 0, opacity 0→1 |
| "Flowmaster" | 1200ms | 750ms | scale(0.85) translateY(30px) → scale(1) translateY(0), opacity 0→1 |
| "LIVE STUDIO" | 1500ms | 750ms | translateY(15px) → 0, opacity 0→1 |

Total: ~2.25 seconds

---

## Task 1: Create AnimatedLogo Component Structure

**Files:**
- Create: `src/components/AnimatedLogo.astro`

**Step 1: Create the AnimatedLogo component with SVG structure**

Create `src/components/AnimatedLogo.astro`:

```astro
---
// AnimatedLogo.astro
// Animated Flowmaster logo with 5-stage reveal animation
// Elements: Red, Yellow, Green squares + Flowmaster text + LIVE STUDIO text
---

<div class="logo-animation-container">
  <div class="logo-parallax-wrapper">
    <!-- Colored Squares Row -->
    <div class="logo-squares">
      <!-- Red Square -->
      <svg class="logo-square logo-red" viewBox="0 0 83.518 81.483" xmlns="http://www.w3.org/2000/svg">
        <rect width="83.518" height="81.483" rx="8.429" ry="8.429" fill="#f4383c"/>
      </svg>
      <!-- Yellow Square -->
      <svg class="logo-square logo-yellow" viewBox="0 0 83.518 81.483" xmlns="http://www.w3.org/2000/svg">
        <rect width="83.518" height="81.483" rx="8.429" ry="8.429" fill="#f5d440"/>
      </svg>
      <!-- Green Square -->
      <svg class="logo-square logo-green" viewBox="0 0 83.518 81.483" xmlns="http://www.w3.org/2000/svg">
        <rect width="83.518" height="81.483" rx="8.429" ry="8.429" fill="#6be553"/>
      </svg>
    </div>

    <!-- Flowmaster Text -->
    <svg class="logo-text-flowmaster" viewBox="0 0 433 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="2">
        <path d="M6.44,57.44V0h38.32v8.96H16.52v15.6h23.68v8.96H16.52v23.92H6.44Z"/>
        <path d="M62.6,57.44h-9.6V0h9.6v57.44Z"/>
        <path d="M92.68,58.32c-11.84,0-20.24-8.8-20.24-21.84s8.4-21.84,20.24-21.84,20.24,8.8,20.24,21.84-8.4,21.84-20.24,21.84Zm0-8.08c6.48,0,10.56-5.2,10.56-13.76s-4.08-13.76-10.56-13.76-10.56,5.2-10.56,13.76,4.08,13.76,10.56,13.76Z"/>
        <path d="M149.88,15.44l7.52,27.84,7.44-27.84h9.52l-12.64,42h-8.32l-7.68-27.52-7.68,27.52h-8.32l-12.64-42h9.84l7.6,27.84,7.44-27.84h7.92Z"/>
        <path d="M191.56,57.44h-9.6V15.44h9.6v4.48c2.32-2.8,5.92-5.28,11.52-5.28,5.04,0,8.8,2.24,11.12,5.84,2.56-2.72,6.56-5.84,13.04-5.84,8.64,0,14.24,6.08,14.24,15.12v27.68h-9.6v-24.88c0-5.2-1.92-8.96-7.04-8.96-4.08,0-8.32,3.2-8.32,9.2v24.64h-9.6v-24.88c0-5.2-1.92-8.96-7.04-8.96-4.08,0-8.32,3.2-8.32,9.2v24.64Z"/>
        <path d="M250.6,45.76c0-8,6-11.52,14.08-13.2l11.6-2.4v-.72c0-4-2.08-6.48-7.2-6.48-4.56,0-6.96,2.08-8.08,6.16l-9.04-2.08c2.08-6.96,8.24-12.4,17.52-12.4,10.08,0,16.16,4.8,16.16,14.48v18.08c0,2.4,1.04,3.12,3.68,2.8v7.44c-6.96.8-10.64-.56-12.08-4-2.64,2.96-7.04,4.72-12.48,4.72-8,0-14.16-4.88-14.16-12.4Zm25.68-8.24l-9.04,1.92c-4.08.88-7.12,2.16-7.12,5.92,0,3.28,2.4,5.12,6.08,5.12,5.12,0,10.08-2.72,10.08-7.84v-5.12Z"/>
        <path d="M301.32,43.68c2.48,4.08,7.28,6.8,12.16,6.8,4.08,0,7.84-1.44,7.84-5.2,0-3.6-3.52-4-10.16-5.36-6.64-1.36-14.24-3.04-14.24-12,0-7.68,6.72-13.28,16.4-13.28,7.36,0,13.92,3.28,16.96,7.92l-6.48,5.84c-2.4-3.76-6.4-5.92-11.04-5.92-3.92,0-6.48,1.76-6.48,4.56,0,3.04,3.04,3.6,8.32,4.72,7.12,1.52,16.08,3.04,16.08,12.64,0,8.48-7.76,13.92-17.28,13.92-7.76,0-15.52-3.12-19.28-8.88l7.2-5.76Z"/>
        <path d="M341.32,23.6h-5.84v-8.16h5.84V3.12h9.44v12.32h8.8v8.16h-8.8v21.76c0,3.76,2.16,4.16,5.6,4.16,1.6,0,2.48-.08,3.92-.24v8.08c-1.76.32-4.16.56-6.64.56-8,0-12.32-2.48-12.32-11.04v-23.28Z"/>
        <path d="M366.84,36.48c0-12.32,8.32-21.84,20-21.84,12.16,0,18.64,9.2,18.64,20.72v3.2h-29.44c.72,7.2,5.04,11.6,11.2,11.6,4.72,0,8.48-2.4,9.76-6.72l8.24,3.12c-2.96,7.36-9.6,11.76-18,11.76-12,0-20.4-8.88-20.4-21.84Zm9.68-5.12h19.28c-.08-4.64-2.96-8.64-9.04-8.64-4.96,0-8.8,2.96-10.24,8.64Z"/>
        <path d="M438.92,24.96c-1.2-.16-2.16-.24-3.52-.24-6.08,0-10.72,3.92-10.72,10.64v22.08h-9.6V15.44h9.6v6.24c1.84-3.92,6.16-6.48,11.52-6.48,1.12,0,2,.08,2.72.16v9.6Z"/>
      </g>
    </svg>

    <!-- LIVE STUDIO Text (full SVG from LiveStudioType.svg) -->
    <svg class="logo-text-livestudio" viewBox="0 0 270.485 28.407" xmlns="http://www.w3.org/2000/svg">
      <g fill="#fff">
        <!-- L -->
        <path d="M1.822,3.782h3.43v16.237h9.056v3.001H1.822V3.782Z"/>
        <!-- I -->
        <path d="M31.247,23.021h-3.43V3.782h3.43v19.238Z"/>
        <!-- V -->
        <path d="M51.774,23.021l-7.154-19.238h3.698l5.305,14.951,5.332-14.951h3.537l-7.101,19.238h-3.617Z"/>
        <!-- E -->
        <path d="M88.891,3.782v3.001h-9.646v4.823h8.119v3.001h-8.119v5.413h9.646v3.001h-13.022V3.782h13.022Z"/>
        <!-- S -->
        <path d="M120.542,17.099c1.34,2.09,3.35,3.295,5.546,3.295,2.17,0,3.805-.991,3.805-2.84,0-1.956-2.01-2.224-4.876-2.921-2.894-.697-6.002-1.554-6.002-5.305,0-3.564,3.054-5.841,6.939-5.841,3.296,0,5.868,1.554,7.154,3.563l-2.519,2.17c-1.072-1.661-2.492-2.813-4.743-2.813-2.063,0-3.483,1.045-3.483,2.572,0,1.688,1.474,2.036,4.073,2.625,3.108.697,6.833,1.42,6.833,5.6,0,3.778-3.323,6.109-7.288,6.109-3.296,0-6.564-1.581-8.065-4.046l2.625-2.17Z"/>
        <!-- T -->
        <path d="M154.764,6.783v16.237h-3.43V6.783h-6.189v-3.001h15.809v3.001h-6.189Z"/>
        <!-- U -->
        <path d="M174.168,15.384V3.782h3.43v11.495c0,3.51,1.742,4.984,4.314,4.984,2.599,0,4.341-1.474,4.341-4.984V3.782h3.43v11.602c0,5.305-3.162,7.904-7.771,7.904-4.582,0-7.744-2.599-7.744-7.904Z"/>
        <!-- D -->
        <path d="M204.317,3.782h6.431c5.976,0,9.673,3.751,9.673,9.619s-3.697,9.619-9.673,9.619h-6.431V3.782ZM210.748,20.073c3.966,0,6.297-2.626,6.297-6.672,0-4.073-2.331-6.672-6.323-6.672h-3.055v13.344h3.081Z"/>
        <!-- I -->
        <path d="M237.815,23.021h-3.43V3.782h3.43v19.238Z"/>
        <!-- O -->
        <path d="M260.701,3.487c5.198,0,8.95,4.073,8.95,9.914s-3.751,9.914-8.95,9.914-8.949-4.073-8.949-9.914,3.751-9.914,8.949-9.914ZM260.701,6.515c-3.242,0-5.52,2.706-5.52,6.886s2.277,6.886,5.52,6.886,5.52-2.707,5.52-6.886-2.278-6.886-5.52-6.886Z"/>
      </g>
    </svg>
  </div>
</div>

<style>
  .logo-animation-container {
    --logo-max-width: 400px;
    width: 100%;
    max-width: var(--logo-max-width);
    margin: 0 auto;
  }

  .logo-parallax-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    --parallax-x: 0px;
    --parallax-y: 0px;
  }

  .logo-squares {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .logo-square {
    width: 60px;
    height: 58px;
  }

  .logo-text-flowmaster {
    width: 280px;
    height: auto;
  }

  .logo-text-livestudio {
    width: 180px;
    height: auto;
    margin-top: -0.25rem;
  }

  /* Initial hidden states for animation */
  .logo-square,
  .logo-text-flowmaster,
  .logo-text-livestudio {
    opacity: 0;
  }

  /* Responsive sizing */
  @media (max-width: 767px) {
    .logo-animation-container {
      --logo-max-width: 280px;
    }

    .logo-square {
      width: 48px;
      height: 47px;
    }

    .logo-text-flowmaster {
      width: 220px;
    }

    .logo-text-livestudio {
      width: 145px;
    }

    .logo-squares {
      gap: 0.75rem;
    }
  }
</style>
```

**Step 2: Verify SVG paths are complete**

IMPORTANT: Before proceeding, verify:
- LIVE STUDIO SVG has all 10 characters (L-I-V-E-S-T-U-D-I-O)
- Compare against source file: `tasks/tasks3/Logos/LiveStudioType.svg`
- ViewBox should be `0 0 270.485 28.407`
- Flowmaster SVG should match `tasks/tasks3/Logos/FlowmasterType.svg`

**Step 3: Verify component renders without errors**

Run: `cd /mnt/c/Users/alexb/Desktop/flowmaster-site && npm run dev`
Expected: Dev server starts without build errors

**Step 4: Commit**

```bash
git add src/components/AnimatedLogo.astro
git commit -m "feat: create AnimatedLogo component structure with SVG elements"
```

---

## Task 2: Implement Intro Animation CSS

**Files:**
- Create: `src/styles/logo-animation.css`
- Modify: `src/components/AnimatedLogo.astro` (import styles)

**Step 1: Create logo-animation.css with keyframes**

Create `src/styles/logo-animation.css`:

```css
/* Logo Animation Keyframes and Timing */

/* Square fade + rise animation */
@keyframes fadeRiseSquare {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Flowmaster text fade + scale + rise */
@keyframes fadeScaleRise {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* LIVE STUDIO text fade + small rise */
@keyframes fadeRiseSmall {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation application with staggered delays */
.logo-red {
  animation: fadeRiseSquare 750ms ease-out forwards;
  animation-delay: 0ms;
}

.logo-yellow {
  animation: fadeRiseSquare 750ms ease-out forwards;
  animation-delay: 500ms;
}

.logo-green {
  animation: fadeRiseSquare 750ms ease-out forwards;
  animation-delay: 1000ms;
}

.logo-text-flowmaster {
  animation: fadeScaleRise 750ms ease-out forwards;
  animation-delay: 1200ms;
}

.logo-text-livestudio {
  animation: fadeRiseSmall 750ms ease-out forwards;
  animation-delay: 1500ms;
}

/* Performance hint */
.logo-square,
.logo-text-flowmaster,
.logo-text-livestudio {
  will-change: transform, opacity;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .logo-square,
  .logo-text-flowmaster,
  .logo-text-livestudio {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

**Step 2: Import CSS in AnimatedLogo.astro**

Add at top of `<style>` section in `src/components/AnimatedLogo.astro` (line 56, after opening `<style>` tag):

```css
  @import '../styles/logo-animation.css';
```

**Step 3: Test animation plays correctly**

Run: `npm run dev`
Navigate to homepage in browser.
Expected: Logo elements appear in staggered sequence over ~2.25 seconds

**Step 4: Commit**

```bash
git add src/styles/logo-animation.css src/components/AnimatedLogo.astro
git commit -m "feat: implement 5-stage intro animation with CSS keyframes"
```

---

## Task 3: Restructure Hero Layout to Two-Column

**Files:**
- Modify: `src/components/Hero.astro`

**Step 1: Import AnimatedLogo and restructure to grid layout**

Replace entire contents of `src/components/Hero.astro`:

```astro
---
import Button from './Button.astro';
import AnimatedLogo from './AnimatedLogo.astro';
---

<section id="hero" class="min-h-screen flex items-center justify-center relative">
  <div class="hero-container">
    <!-- Left Column: Text Content -->
    <div class="hero-text">
      <!-- Headline with parallax effect -->
      <div class="hero-animate" style="--delay: 0.3s">
        <div class="hero-headline-container relative mb-6">
          <!-- Shadow text (behind) -->
          <h1 class="hero-headline-shadow" aria-hidden="true">Edit as you record</h1>
          <!-- Primary text (front) -->
          <h1 class="hero-headline-primary">Edit as you record</h1>
        </div>
      </div>

      <!-- Description -->
      <div class="hero-animate" style="--delay: 0.5s">
        <p class="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Stop scrubbing through hours of footage. Mark your best moments while you stream,
          and let Flowmaster cut, clean, and export your highlights.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="hero-animate" style="--delay: 0.7s">
        <div class="hero-buttons flex flex-col sm:flex-row gap-4 mb-6">
          <Button href="/download" size="lg">Download v0.8.5</Button>
          <Button href="#how-it-works" variant="secondary" size="lg">See How It Works</Button>
        </div>
      </div>

      <!-- Subtext -->
      <div class="hero-animate" style="--delay: 0.9s">
        <p class="text-sm text-gray-500">
          Free to use &bull; Windows 10/11
        </p>
      </div>
    </div>

    <!-- Right Column: Animated Logo -->
    <div class="hero-logo">
      <AnimatedLogo />
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hero-animate" style="--delay: 1.1s">
    <a href="#how-it-works" class="scroll-indicator" aria-label="Scroll to learn more">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </div>
</section>

<style>
  /* Two-column grid layout */
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;
  }

  .hero-text {
    text-align: left;
  }

  .hero-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-buttons {
    justify-content: flex-start;
  }

  /* Staggered fade-in animation */
  @keyframes hero-fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-animate {
    opacity: 0;
    animation: hero-fade-in 0.8s ease-out forwards;
    animation-delay: var(--delay, 0s);
  }

  /* Bouncing scroll indicator */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .scroll-indicator {
    display: block;
    animation: bounce 2s ease-in-out infinite;
    transition: color 0.2s;
  }

  .scroll-indicator:hover {
    color: var(--color-gray-300);
  }

  /* Hero headline parallax/swaying effect */
  .hero-headline-container {
    position: relative;
    display: inline-block;
  }

  .hero-headline-shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: rgba(20, 15, 12, 0.8);
    z-index: 1;
    animation: sway-shadow 6s ease-in-out infinite;
    user-select: none;
    pointer-events: none;
  }

  .hero-headline-primary {
    position: relative;
    z-index: 2;
    animation: sway-primary 6s ease-in-out infinite;
  }

  @keyframes sway-primary {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(4px, -2px); }
    50% { transform: translate(0, -3px); }
    75% { transform: translate(-4px, -1px); }
  }

  @keyframes sway-shadow {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(1px, -0.5px); }
    50% { transform: translate(0, -1px); }
    75% { transform: translate(-1px, -0.5px); }
  }

  /* Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .hero-animate {
      opacity: 1;
      animation: none;
    }

    .scroll-indicator {
      animation: none;
    }

    .hero-headline-shadow,
    .hero-headline-primary {
      animation: none;
    }
  }
</style>
```

**Step 2: Verify two-column layout displays correctly**

Run: `npm run dev`
Open browser at desktop width (≥768px).
Expected: Text content on left, animated logo on right, vertically centered.

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: restructure hero to two-column layout with animated logo"
```

---

## Task 4: Implement Parallax and Breathing Effects

**Files:**
- Create: `src/scripts/logo-parallax.js`
- Modify: `src/styles/logo-animation.css` (add breathing keyframe)
- Modify: `src/components/AnimatedLogo.astro` (add script import)

**Step 1: Add breathing animation to logo-animation.css**

Append to `src/styles/logo-animation.css`:

```css
/* Breathing animation - activates after intro completes */
@keyframes breathe {
  0%, 100% {
    transform: translate(var(--parallax-x, 0), var(--parallax-y, 0)) translateY(0) scale(1);
  }
  50% {
    transform: translate(var(--parallax-x, 0), var(--parallax-y, 0)) translateY(-8px) scale(1.02);
  }
}

.logo-parallax-wrapper.animation-complete {
  animation: breathe 4s ease-in-out infinite;
}

/* Reduced motion: disable breathing too */
@media (prefers-reduced-motion: reduce) {
  .logo-parallax-wrapper.animation-complete {
    animation: none !important;
  }
}
```

**Step 2: Create logo-parallax.js**

Create `src/scripts/logo-parallax.js`:

```javascript
// Logo Parallax and Breathing Effects
// Activates after intro animation completes (~2250ms)

document.addEventListener('DOMContentLoaded', () => {
  const logoWrapper = document.querySelector('.logo-parallax-wrapper');
  if (!logoWrapper) return;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    logoWrapper.classList.add('animation-complete');
    return;
  }

  const maxDrift = 20; // pixels
  const easing = 0.08; // smoothing factor (matches ThreeStepAnimation)
  const introAnimationDuration = 2250; // ms

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationStarted = false;

  // Wait for intro animation to complete, then enable breathing
  setTimeout(() => {
    logoWrapper.classList.add('animation-complete');
    animationStarted = true;
  }, introAnimationDuration);

  // Only enable mouse parallax on non-touch devices (desktop)
  if (window.matchMedia('(hover: hover) and (min-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
      if (!animationStarted) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate offset from center (-1 to 1)
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      targetX = offsetX * maxDrift;
      targetY = offsetY * maxDrift;
    });

    function animate() {
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;

      logoWrapper.style.setProperty('--parallax-x', `${currentX}px`);
      logoWrapper.style.setProperty('--parallax-y', `${currentY}px`);

      requestAnimationFrame(animate);
    }

    animate();
  }
});
```

**Step 3: Import script in AnimatedLogo.astro**

Add at the end of `src/components/AnimatedLogo.astro`, before closing tags:

```astro
<script src="../scripts/logo-parallax.js"></script>
```

**Step 4: Test parallax and breathing**

Run: `npm run dev`
1. Wait ~2.25s for intro to complete
2. Observe breathing animation starts (subtle bob)
3. Move mouse around on desktop - logo should drift slightly toward cursor
4. Test mobile viewport - breathing works, no parallax

Expected: Smooth breathing + responsive parallax on desktop

**Step 5: Commit**

```bash
git add src/scripts/logo-parallax.js src/styles/logo-animation.css src/components/AnimatedLogo.astro
git commit -m "feat: add breathing animation and mouse parallax effects"
```

---

## Task 5: Implement Mobile Responsive Layout

**Files:**
- Modify: `src/components/Hero.astro` (add mobile styles)

**Step 1: Add mobile media query styles**

Add to the `<style>` section in `src/components/Hero.astro`, before the closing `</style>` tag:

```css
  /* Mobile Layout (<768px) */
  @media (max-width: 767px) {
    .hero-container {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .hero-logo {
      order: -1; /* Move logo above text */
      margin-bottom: 1rem;
    }

    .hero-text {
      text-align: center;
    }

    .hero-buttons {
      justify-content: center;
    }

    .hero-headline-container {
      display: block;
    }
  }
```

**Step 2: Test mobile layout**

Run: `npm run dev`
Use browser dev tools responsive mode:
- Test at 375px (iPhone SE)
- Test at 414px (iPhone 14)
- Test at 768px (tablet/breakpoint boundary)

Expected:
- Logo appears above text content
- Text is centered
- Buttons are centered
- No horizontal overflow
- Intro animation plays correctly

**Step 3: Test breakpoint transition**

Resize browser window across 768px breakpoint.
Expected: Smooth transition between layouts

**Step 4: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add mobile responsive layout with stacked logo-first design"
```

---

## Task 6: Integration Testing and Polish

**Files:**
- Modify: Various files as needed for fixes

**Step 1: Cross-browser testing checklist**

Test in each browser:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

For each browser, verify:
- Intro animation plays smoothly
- Breathing animation activates after ~2.25s
- Mouse parallax works (desktop only)
- Mobile layout correct
- No console errors

**Step 2: Performance verification**

Open Chrome DevTools Performance tab:
1. Record page load + 5 seconds of idle
2. Verify 60fps during animations
3. Check no excessive CPU during breathing idle
4. Verify GPU acceleration (look for composite layers)

**Step 3: Accessibility testing**

1. Enable "prefers-reduced-motion" in system settings or browser dev tools
2. Refresh page
3. Verify: Logo appears immediately without animation
4. Verify: No breathing or parallax motion

**Step 4: Visual polish (if needed)**

Potential adjustments:
- Breathing amplitude: change `-8px` and `scale(1.02)` in breathe keyframe
- Parallax drift: change `maxDrift = 20` in logo-parallax.js
- Animation timing: adjust delays in logo-animation.css
- Logo sizing: adjust `--logo-max-width` in AnimatedLogo.astro

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: integration testing and polish for hero logo animation"
```

---

## Task 7: Production Build Verification

**Files:**
- None (testing only)

**Step 1: Run production build**

```bash
cd /mnt/c/Users/alexb/Desktop/flowmaster-site
npm run build
```

Expected: Build completes without errors

**Step 2: Preview production build**

```bash
npm run preview
```

Open browser and verify all functionality works in production build.

**Step 3: Final verification checklist**

- [ ] Intro animation plays on fresh page load
- [ ] Animation does not replay on scroll/return
- [ ] Desktop: two-column layout, parallax works
- [ ] Mobile: stacked layout, no parallax
- [ ] Breathing animation runs continuously
- [ ] "FLOWMASTER LIVE STUDIO" tagline removed from hero text
- [ ] No console errors
- [ ] Performance is smooth

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Create AnimatedLogo component | `AnimatedLogo.astro` |
| 2 | Implement intro animation CSS | `logo-animation.css` |
| 3 | Restructure Hero to two-column | `Hero.astro` |
| 4 | Add parallax + breathing effects | `logo-parallax.js`, CSS updates |
| 5 | Mobile responsive layout | `Hero.astro` CSS |
| 6 | Integration testing | Various |
| 7 | Production build verification | None |

**Total estimated commits:** 6
