# Flowmaster Website & Software Rebrand - Master Context

## Project Overview

This project involves a coordinated rebrand and content update across two repositories:
- **Website**: `C:\Users\alexb\Desktop\flowmaster-site`
- **Software Suite**: `C:\Users\alexb\Desktop\Dev Stuff\FlowmasterSuite`

The goal is to transition from a "beta-forward" messaging approach to a product-forward approach where users perceive they're getting a complete, functional product called "Flowmaster" - with beta status only revealed during installation.

---

## Naming Hierarchy (Critical)

| Context | Name to Use |
|---------|-------------|
| Website header/branding | **FLOWMASTER LIVE STUDIO** (aspirational full product) |
| What users download | **Flowmaster** (just "Flowmaster", not "Flowmaster Live" or "Flowmaster Beta") |
| Installer welcome screen | **Welcome to Flowmaster Beta** |
| License key prompt on website | **Get your free license key (beta)** |
| Version number | **0.8.5** |

### Key Principle
Users should feel they're getting a real, functional product. The word "Beta" should **only** appear:
1. On the download button (subtly, via version number)
2. In the license key prompt parenthetical
3. After they click download/begin installation

The word "Beta" should **NOT** appear:
- In the hero section headline
- In feature descriptions
- In the "How It Works" section
- In the "Future of Flowmaster" section
- In general marketing copy

---

## Product Positioning

### Current (Incorrect) Messaging
- "Download Beta" prominently displayed
- Implies incomplete/experimental software
- Suggests future monetization

### Target Messaging
- "Download v0.8.5" (version number implies ongoing development without screaming "beta")
- Users get "Flowmaster" - a real product
- "FLOWMASTER LIVE STUDIO" is the aspirational brand (future paid version with integrated UI)
- Future monetization is not hinted at until much later

### The Long-Term Strategy
- **flowmaster.live** → Free version ("Flowmaster")
- **flowmaster.studio** → Future paid version ("Flowmaster Live Studio" with integrated UI, video preview, etc.)

---

## Repository Paths

### Website Repository
```
C:\Users\alexb\Desktop\flowmaster-site
```

### Software Suite Repository  
```
C:\Users\alexb\Desktop\Dev Stuff\FlowmasterSuite
```

---

## Version Information

- **Target Version**: 0.8.5
- **Download Button Text**: "Download v0.8.5"

---

## Related Task Files

1. `01_WEBSITE_CONTENT_CHANGES.md` - Copy updates, "How It Works" consolidation, feature corrections
2. `02_WEBSITE_HERO_ANIMATION.md` - Parallax text effect for "Edit as you record"
3. `03_SOFTWARE_BETA_AUDIT.md` - Find and update all "Beta" references in the software suite
4. `04_FUTURE_SECTION_UPDATE.md` - Update the "Future of Flowmaster" section
5. `05_NAMING_CONSISTENCY_AUDIT.md` - Ensure naming is consistent across both repos

---

## Assets Reference

### Future UI Preview Image
Location: User will provide `PRORTYPE.pdf` which contains a UI mockup image
Usage: Display as a small, scaled-down preview in the "Future of Flowmaster" section
Note: Scale down significantly so details aren't clearly visible (the mockup is rough)

### SVG Assets for "Easy as 1, 2, 3"
Status: User is creating these manually - do not generate
Note: User mentioned wanting more realistic scissors icon

---

## What This Software Actually Does

Flowmaster is a video editing workflow tool for content creators (streamers, YouTubers) that:

1. **Records alongside OBS** - Syncs with your recording software
2. **Marks highlights via hotkey** - Press F9 (configurable) during gameplay to mark moments
3. **AutoCut** - Automatically trims footage based on marked timestamps
4. **AutoClean** - Detects and removes original files after highlights are extracted

### Technical Details
- Converts MKV → MP4 during the cutting process (remuxing)
- MKV is safer for recording (corruption-resistant), MP4 is editor-friendly
- Does NOT do AI-powered anything - full control stays with the creator
- Works with OBS and Advanced Scene Switcher
- Uses LemonSqueezy for license key distribution (temporary solution)

---

## Important Corrections to Current Website

1. **"No Re-encoding" feature is FALSE** - The software does remux MKV to MP4
2. **Step 4 "Export" is misleading** - Should be "Clean Up" (AutoClean)
3. **"AI-Powered Highlights" in Future section** - REMOVE this, it contradicts the product philosophy
4. **"automatically" in hero tagline** - REMOVE to emphasize user control
