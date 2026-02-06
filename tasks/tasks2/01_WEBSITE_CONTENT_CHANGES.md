# Task 01: Website Content & Copy Changes

## Prerequisites
- Read `00_MASTER_CONTEXT.md` first
- Repository: `C:\Users\alexb\Desktop\flowmaster-site`

---

## Task Summary
Update website copy to remove beta-forward messaging, correct inaccurate feature descriptions, and consolidate the "How It Works" section from 4 steps to 3.

---

## Changes Required

### 1. Hero Section Tagline

**Current:**
> Stop scrubbing through hours of footage. Mark your best moments while you stream, and let FlowMaster automatically cut, clean, and export your highlights.

**Change to:**
> Stop scrubbing through hours of footage. Mark your best moments while you stream, and let Flowmaster cut, clean, and export your highlights.

**Acceptance Criteria:**
- [ ] Remove the word "automatically" from the tagline
- [ ] Ensure "Flowmaster" capitalization is consistent (capital F, lowercase lowmaster)

---

### 2. Download Button

**Current:** "Download Beta"

**Change to:** "Download v0.8.5"

**Acceptance Criteria:**
- [ ] Button text updated to include version number
- [ ] No mention of "Beta" in the button itself

---

### 3. License Key Prompt (if present on website)

**Should read:** "Get your free license key (beta)"

**Acceptance Criteria:**
- [ ] If a license key CTA exists, update to this format
- [ ] The word "beta" only appears in parentheses

---

### 4. "How It Works" Section - Consolidate to 3 Steps

**Current 4 steps:**
1. Record
2. Mark  
3. AutoCut
4. Export

**Change to 3 steps:**
1. **Mark** - Hit a hotkey during epic moments. Flowmaster marks these highlights while you keep playing.
2. **AutoCut** - Run AutoCut to trim footage based on your marked timestamps. Keep the highlights, cut the rest.
3. **Clean Up** - Detect and remove original files after highlights are extracted, freeing up storage.

**Acceptance Criteria:**
- [ ] Section reduced from 4 steps to 3 steps
- [ ] "Record" step removed (implied/assumed)
- [ ] "Export" renamed to "Clean Up" with new description
- [ ] Step numbers updated (01, 02, 03)
- [ ] Descriptions match the copy above

---

### 5. "Easy as 1, 2, 3" Section - Align with How It Works

This section should mirror the 3-step "How It Works" flow:

1. **Mark** (was "Record") - Description about marking highlights with hotkey
2. **AutoCut** - Automatically trim footage to just the good parts
3. **AutoClean** - Safely clean up original files and free storage

**Acceptance Criteria:**
- [ ] First step changed from "Record" to "Mark"
- [ ] All three steps align with "How It Works" section
- [ ] Section title "Easy as 1, 2, 3" remains unchanged

**Note:** User is creating new SVG assets for this section. Do not modify the SVG/icon references - only update the text labels and descriptions.

---

### 6. "Packed with Features" Section - Fix "No Re-encoding"

**Current (INACCURATE):**
> **No Re-encoding**
> Export cuts instantly without quality loss or lengthy render times.

**Change to:**
> **Auto-Remux**
> Converts MKV recordings to editor-friendly MP4 while cutting—no manual remuxing required.

**Rationale:** The software DOES remux from MKV to MP4. MKV is safer for recording (crash-resistant), and the auto-conversion to MP4 is actually a feature, not the absence of re-encoding.

**Acceptance Criteria:**
- [ ] Feature title changed from "No Re-encoding" to "Auto-Remux"
- [ ] Description updated to reflect actual functionality
- [ ] Icon can remain the same (lightning bolt is appropriate for speed)

---

### 7. Remove "Beta" from Any Other Marketing Copy

**Search and update:**
- Any instance of "Flowmaster Beta" → "Flowmaster"
- Any instance of "Download Beta" → "Download v0.8.5"
- Any instance of "Free during beta" → "Free" or "Free to use"

**Exceptions (keep "beta" here):**
- License key prompt: "Get your free license key (beta)"
- Any installer-related text (handled in separate task)

**Acceptance Criteria:**
- [ ] All marketing copy audited for "beta" mentions
- [ ] Beta removed except in license key parenthetical
- [ ] No promises about "free during beta" that imply future cost

---

## Files to Check

Search the website repository for these file types:
- `*.astro`
- `*.html`
- `*.md`
- `*.mdx`
- `*.tsx`
- `*.jsx`
- `*.json` (for any content/copy stored in JSON)
- `*.yaml` / `*.yml` (for any config with copy)

---

## Testing Checklist

- [ ] Run local dev server and verify all text changes render correctly
- [ ] Check responsive views (mobile, tablet, desktop)
- [ ] Verify no broken layouts from text length changes
- [ ] Confirm "How It Works" section has exactly 3 steps
- [ ] Confirm "Easy as 1, 2, 3" section aligns with How It Works
