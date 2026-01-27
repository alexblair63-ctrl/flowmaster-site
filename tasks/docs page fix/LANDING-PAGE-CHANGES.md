# Landing Page Copy Changes - Find & Replace Reference

Use this as a reference when updating `index.astro` (or your landing page file).

---

## Hero Section

### Heading (H1)

**FIND:**
```
Choose to record, after it happened
```

**REPLACE WITH:**
```html
Record it all.<br />Save just the moments.
```

Or if using a component:
```
Record it all.
Save just the moments.
```

---

### Subheading

**FIND:**
```
Record it all. Save just the moments. You pick. We cut.
```

**REPLACE WITH:**
```
The ultimate OBS Studio creator workflow tool.
```

---

## Mark Feature Section

### Tagline

**FIND:**
```
Hit a hotkey during epic moments.
```

**REPLACE WITH:**
```
Hit a hotkey after something worth keeping happened.
```

---

### Description

**FIND:**
```
Flowmaster marks these highlights while you keep playing
```

**REPLACE WITH:**
```
Flowmaster marks these highlights while you keep recording.
```

---

## Clip Feature Section

### Short Description

**FIND:**
```
Run Clip to trim footage based on your marked timestamps. Keep the highlights, cut the rest.
```

**REPLACE WITH:**
```
Run Clip to extract your highlights into a separate highlight reel. The original is left untouched.
```

---

### Numbered Section (02 Clip)

**FIND:**
```
After your session, Clip scans for matching video files and extracts clips using a lookback window (default 30s before each mark). Batch process multiple recordings at once.
```

**REPLACE WITH:**
```
After your session, Clip uses your timestamp data to extract clips using a "lookback window" (which you can change any time).
```

---

## Clean Feature Section

### Title (ALL instances)

**FIND:**
```
Clean Up
```

**REPLACE WITH:**
```
Clean
```

Check: Navigation, feature cards, numbered sections, footer links

---

### Description

**FIND:**
```
Once you've reviewed your highlights, Clean Up identifies the original raw footage and removes it with one click. Reclaim gigabytes of storage instantly.
```

**REPLACE WITH:**
```
Once you've reviewed your highlights, Clean identifies the original footage and removes it with one click. Reclaim gigabytes of storage instantly.
```

---

## Download Section (Bottom CTA)

**FIND:**
```
No credit card required
```

**REPLACE WITH:**
```
Free to use
```

---

## Global: Em Dash Removal

**FIND (regex):**
```
—
```

**REPLACE WITH:**
```
 - 
```

Or rephrase sentences to avoid needing the dash at all.

**Common locations:**
- Hero descriptions
- Feature explanations
- About page story
- Documentation pages

---

## Quick Checklist

```
[ ] Hero H1: "Record it all. / Save just the moments."
[ ] Hero sub: "The ultimate OBS Studio creator workflow tool."
[ ] Mark tagline: "Hit a hotkey after something worth keeping happened."
[ ] Mark desc: "while you keep recording"
[ ] Clip short: "extract your highlights into a separate highlight reel"
[ ] Clip numbered: "uses your timestamp data to extract clips"
[ ] Clean Up → Clean (all instances)
[ ] Clean desc: "original footage" (not "original raw footage")
[ ] Download: "Free to use"
[ ] Em dashes removed from all pages
```

---

## Verify These Files

After making changes, check these files for consistency:

1. `src/pages/index.astro` - Landing page
2. `src/pages/about.astro` - About page
3. `src/components/Nav.astro` - Navigation (Clean Up → Clean)
4. `src/components/Footer.astro` - Footer links
5. `src/pages/docs/*.astro` - Documentation pages
6. Any feature component files
