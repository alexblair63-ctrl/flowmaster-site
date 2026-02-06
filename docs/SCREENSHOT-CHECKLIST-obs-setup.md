# Screenshot Checklist — OBS Setup Documentation

Use this checklist when capturing screenshots for the OBS setup guide.

---

## General Guidelines

- **Resolution:** Capture at 1920x1080 or higher, will be displayed at max-width 672px
- **Format:** PNG preferred for UI screenshots
- **Highlighting:** Use red boxes/arrows to highlight key areas (brand color: #EF4444)
- **File naming:** Use descriptive names like `obs-websocket-settings.png`
- **Destination folder:** `/public/docs/obs-setup/` (or your equivalent assets path)

---

## Screenshot List

### 1. OBS Menu — WebSocket Settings Location
**Filename:** `obs-menu-websocket.png`

**What to capture:**
- OBS Studio with the "Tools" menu open
- "WebSocket Server Settings" menu item visible

**Highlight:**
- Red box around "WebSocket Server Settings"

**Setup steps:**
1. Open OBS Studio
2. Click "Tools" in the menu bar
3. Screenshot with menu open, before clicking

---

### 2. OBS WebSocket Server Settings Panel
**Filename:** `obs-websocket-panel.png`

**What to capture:**
- The full WebSocket Server Settings dialog
- "Enable WebSocket server" checkbox CHECKED
- Port field showing 4455
- Authentication section visible

**Highlight:**
- Red box around the "Enable WebSocket server" checkbox
- Optional: arrow pointing to port field

**Setup steps:**
1. Open OBS → Tools → WebSocket Server Settings
2. Enable the checkbox if not already enabled
3. Screenshot the full dialog

---

### 3. Flowmaster Header — Disconnected State
**Filename:** `flowmaster-header-disconnected.png`

**What to capture:**
- Flowmaster window header area
- Mark tab selected
- Red status dot visible
- Settings gear visible

**Highlight:**
- Red circle/arrow pointing to the status dot
- Label: "Connection Status Light"

**Setup steps:**
1. Open Flowmaster (without OBS running, or with connection disabled)
2. Make sure you're on the Mark tab
3. Screenshot the header area

---

### 4. Flowmaster Header — Settings Gear
**Filename:** `flowmaster-settings-gear.png`

**What to capture:**
- Same view as above
- Focus on showing where the settings gear is

**Highlight:**
- Red box around the settings gear icon (⚙️)

**Notes:**
- Could potentially combine with screenshot #3 if the highlight is clear

---

### 5. Flowmaster Settings — OBS Connection Section
**Filename:** `flowmaster-obs-settings.png`

**What to capture:**
- Flowmaster settings panel open
- Scrolled to show "OBS CONNECTION" section
- Port field (showing 4455)
- Password field (showing placeholder text)
- "Test Connection" button

**Highlight:**
- Light box around the entire OBS CONNECTION section
- Or individual callouts for Port, Password, and Test Connection

**Setup steps:**
1. Open Flowmaster
2. Click settings gear
3. Scroll to OBS Connection section
4. Screenshot

---

### 6. Flowmaster Settings — Test Connection Button
**Filename:** `flowmaster-test-connection.png`

**What to capture:**
- Close-up of the OBS Connection section
- "Test Connection" button prominent

**Highlight:**
- Red box around "Test Connection" button

**Notes:**
- Could be cropped version of screenshot #5

---

### 7. Flowmaster — Connected State
**Filename:** `flowmaster-connected.png`

**What to capture:**
- Either: Settings panel showing "Connected to OBS" success message
- Or: Header showing GREEN status dot

**Highlight:**
- The green indicator or success message

**Setup steps:**
1. Have OBS running with WebSocket enabled
2. Configure Flowmaster with correct port
3. Click Test Connection (if showing settings)
4. Or just show the header with green dot

---

### 8. Flowmaster Mark Tab — Recording State
**Filename:** `flowmaster-recording.png`

**What to capture:**
- Flowmaster Mark tab
- Status showing "Recording" (not "Idle")
- Duration timer counting up
- Green connection dot in header

**Highlight:**
- The "Recording" status badge
- Optional: the live duration counter

**Setup steps:**
1. Connect Flowmaster to OBS
2. Start recording in OBS
3. Wait for Flowmaster to detect it
4. Screenshot while recording

---

### 9. Flowmaster Mark Tab — With Timestamps
**Filename:** `flowmaster-timestamps.png`

**What to capture:**
- Mark tab with several timestamps in the list
- Shows what a session looks like with marks

**Highlight:**
- None needed, or subtle highlight on the timestamp list

**Setup steps:**
1. Start a recording (or use Simulate Live)
2. Press F9 (or your hotkey) several times
3. Screenshot showing the timestamp list populated

---

## Quick Reference Table

| # | Filename | Shows | Highlights |
|---|----------|-------|------------|
| 1 | `obs-menu-websocket.png` | OBS Tools menu | WebSocket Server Settings |
| 2 | `obs-websocket-panel.png` | WebSocket settings dialog | Enable checkbox, port |
| 3 | `flowmaster-header-disconnected.png` | FM header, red dot | Status light |
| 4 | `flowmaster-settings-gear.png` | FM header | Settings gear |
| 5 | `flowmaster-obs-settings.png` | FM settings, OBS section | Port, Password, Test btn |
| 6 | `flowmaster-test-connection.png` | Test Connection button | The button |
| 7 | `flowmaster-connected.png` | Success state | Green dot or message |
| 8 | `flowmaster-recording.png` | Recording state | "Recording" badge |
| 9 | `flowmaster-timestamps.png` | Timestamps marked | Timestamp list |

---

## After Capturing

1. **Optimize images** — Run through ImageOptim or similar
2. **Update Astro file** — Replace placeholder divs with actual `<img>` tags:

```html
<!-- Replace this: -->
<div class="aspect-video max-w-2xl bg-bg-secondary rounded-lg border border-bg-tertiary flex items-center justify-center">
  <div class="text-center">
    <span class="text-gray-500 block mb-2">📸 Screenshot needed</span>
    <span class="text-gray-600 text-sm">Description here</span>
  </div>
</div>

<!-- With this: -->
<img 
  src="/docs/obs-setup/obs-websocket-panel.png" 
  alt="OBS WebSocket Server Settings panel with Enable checkbox highlighted"
  class="max-w-2xl rounded-lg border border-bg-tertiary"
/>
```

3. **Test** — View the page locally to ensure images load and look good
4. **Commit** — Add images to version control

---

## Optional Enhancements

If you want to go the extra mile:

- **Animated GIF** — Show the flow of clicking Test Connection and seeing it go green
- **Comparison image** — Before/after showing Idle vs Recording state
- **Video** — Short 30-second walkthrough embedded on the page

These are nice-to-have, not required for launch.
