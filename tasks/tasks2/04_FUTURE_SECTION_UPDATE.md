# Task 04: "Future of Flowmaster" Section Update

## Prerequisites
- Read `00_MASTER_CONTEXT.md` first
- Repository: `C:\Users\alexb\Desktop\flowmaster-site`

---

## Task Summary
Update the "Future of Flowmaster" section to remove AI-powered features and add features that align with the product philosophy of creator control.

---

## Current State (From Screenshots)

The section currently shows:
1. ✓ **Cloud Sync & Backup** - Sync your settings and project files across devices. Never lose your work.
2. ✓ **AI-Powered Highlights** - Automatic detection of clutch plays, kills, and epic moments using machine learning.
3. ✓ **Direct Upload to Platforms** - Export directly to YouTube, TikTok, and Twitch with one click.

Plus a "Future UI Preview" placeholder image with a rocket icon.

---

## Required Changes

### Feature 1: Cloud Sync & Backup (KEEP)
**Title:** Cloud Sync & Backup
**Description:** Sync your settings and project files across devices. Never lose your work.

*No changes needed.*

---

### Feature 2: AI-Powered Highlights (REMOVE & REPLACE)

**REMOVE this feature entirely.** It contradicts the core product philosophy that Flowmaster is about putting control in creators' hands, not automating creative decisions.

**REPLACE WITH:**

**Title:** Integrated UI with Video Preview
**Description:** A unified interface with timeline editing and real-time video preview—all in one window.

---

### Feature 3: Direct Upload to Platforms (REMOVE & REPLACE)

**REPLACE WITH:**

**Title:** Collaborative Editing
**Description:** Share projects and work together with your team through the app.

---

## Final Three Features

1. **Cloud Sync & Backup**
   - Sync your settings and project files across devices. Never lose your work.

2. **Integrated UI with Video Preview**
   - A unified interface with timeline editing and real-time video preview—all in one window.

3. **Collaborative Editing**
   - Share projects and work together with your team through the app.

---

## Future UI Preview Image

### Current State
The section has a placeholder box with "Future UI Preview" text and a rocket emoji/icon.

### Required Change
Replace the placeholder with an actual preview image from `PRORTYPE.pdf`.

### Image Specifications
- **Source:** Extract the image from `PRORTYPE.pdf` (it's a UI mockup showing a multi-track timeline interface)
- **Display Size:** SMALL - scale down significantly
- **Reason for small size:** The mockup is rough/prototype quality; smaller display hides imperfections
- **Suggested max-width:** 200-250px or use CSS to make it subtle
- **Alt text:** "Preview of future Flowmaster interface with timeline editor"

### Implementation Notes
1. Extract the image from the PDF (it's a JPEG embedded in the PDF)
2. Save as web-optimized format (WebP or compressed JPEG)
3. Apply CSS to keep it small and unobtrusive
4. Consider adding a subtle border or shadow to frame it
5. The image shows: multi-track timeline, video preview area, audio meters, source panel, effects slots

---

## Section Header

**Keep as-is:**
> **The Future of Flowmaster**
> We're just getting started. Here's what's coming next.

---

## Checkmark Icons

The current design uses red/coral checkmarks (✓) next to each feature. Maintain this visual pattern with the new features.

---

## "See our roadmap →" Link

If this link exists, verify it points to the correct page (likely `/future` based on nav). No changes needed unless broken.

---

## Acceptance Criteria

- [ ] "AI-Powered Highlights" feature completely removed
- [ ] "Direct Upload to Platforms" feature replaced with "Collaborative Editing"
- [ ] "Integrated UI with Video Preview" feature added
- [ ] Features appear in order: Cloud Sync, Integrated UI, Collaborative Editing
- [ ] Future UI Preview image extracted from PRORTYPE.pdf and added
- [ ] Preview image is displayed small (not full-width)
- [ ] All feature descriptions match the copy provided above
- [ ] Checkmark styling maintained
- [ ] Section renders correctly on all viewport sizes

---

## Files to Modify

Search for files containing "Future of Flowmaster" or the feature titles:
- Likely in a section component or homepage file
- Check for any CMS/content files that might store this text

---

## Image Extraction Guide

The PRORTYPE.pdf contains an embedded JPEG image. To extract:

### Option 1: Using Python
```python
import fitz  # PyMuPDF
doc = fitz.open("PRORTYPE.pdf")
page = doc[0]
images = page.get_images()
# Extract first image
xref = images[0][0]
base_image = doc.extract_image(xref)
image_bytes = base_image["image"]
with open("future-ui-preview.jpg", "wb") as f:
    f.write(image_bytes)
```

### Option 2: Using command line tools
```bash
pdfimages -j PRORTYPE.pdf output-prefix
```

### Option 3: Manual
Open PDF in image editor or PDF tool, export/save the image.

---

## Testing Checklist

- [ ] All three features display correctly
- [ ] No mention of AI or automatic highlight detection
- [ ] Preview image loads and displays at appropriate size
- [ ] Image doesn't slow page load significantly (optimize if needed)
- [ ] Responsive layout works on mobile
- [ ] "See our roadmap" link works (if present)
