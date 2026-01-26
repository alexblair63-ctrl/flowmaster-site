# Flowmaster Live Studio — Future Vision Document

**Version:** 1.0  
**Date:** January 21, 2026  
**Status:** Internal Planning Document  
**Author:** Compiled from founder interview

---

## Executive Summary

Flowmaster Live Studio is evolving from a three-tool automation suite (Hotkey, AutoCut, AutoCleaner) into a unified content creation platform that combines recording, streaming, podcasting, and post-production workflow tools. The vision is to become a comprehensive alternative to OBS while maintaining a core philosophy: **"We don't guess. You decide."**

Unlike AI-powered editors that make autonomous decisions about content, Flowmaster empowers users with precision tools that execute their creative intent faithfully. The user marks what matters; the software handles the tedious execution.

---

## Table of Contents

1. [Core Philosophy](#core-philosophy)
2. [Product Modes](#product-modes)
3. [Unified Interface Vision](#unified-interface-vision)
4. [Feature Roadmap by Category](#feature-roadmap-by-category)
5. [Mobile Companion App](#mobile-companion-app)
6. [Cloud Infrastructure](#cloud-infrastructure)
7. [Collaborative Features](#collaborative-features)
8. [Export & Integration](#export--integration)
9. [Pricing & Tier Strategy](#pricing--tier-strategy)
10. [Target Audience Segmentation](#target-audience-segmentation)
11. [Technical Architecture Notes](#technical-architecture-notes)
12. [Marketing Considerations](#marketing-considerations)
13. [Feature Priority Matrix](#feature-priority-matrix)

---

## Core Philosophy

### Brand Positioning

**Tagline:** "Edit as you record"  
**Philosophy:** "We don't guess. You decide."

### Differentiation from AI Editors

| Flowmaster | AI Editors |
|------------|------------|
| Precision tool | Black box |
| User marks what matters | Algorithm decides what's "good" |
| Faithful execution of intent | Autonomous content decisions |
| Transparent process | Opaque decision-making |
| User retains full control | User surrenders judgment |

### Why This Matters

Content creators—especially gamers and streamers—are hesitant to trust AI editors. They've seen tools that cut "boring" moments only to remove context that made the highlight meaningful. Flowmaster's value proposition is that it amplifies human judgment rather than replacing it.

The F9 hotkey system embodies this: the user decides in real-time what matters. Flowmaster simply remembers and executes.

---

## Product Modes

Flowmaster will operate in four distinct modes, each optimizing the interface for specific workflows:

### Mode 1: Recording

**Focus:** Local high-quality capture  
**UI Emphasis:** Video preview prominent, all tracks visible, maximum quality settings  
**Use Case:** Creating content for later editing (YouTube videos, highlight reels)

**Characteristics:**
- Higher bitrate encoding
- Separate track recording (game, mic, webcam as discrete files)
- Full waveform visualization
- All V1-V3 and A1-A3 tracks visible

### Mode 2: Streaming

**Focus:** Live output to platforms  
**UI Emphasis:** Chat integration, stream health indicators, lower latency priority  
**Use Case:** Live broadcasting to Twitch, YouTube, Kick, etc.

**Characteristics:**
- Optimized encoding for real-time delivery
- Multistream support (up to 3 simultaneous platforms)
- Integrated chat panel (unified view of all platform chats)
- Stream alerts integration
- Lower bitrate, single file output

### Mode 3: Recording + Streaming (Both)

**Focus:** Simultaneous local capture and live broadcast  
**UI Emphasis:** Split focus between stream health and recording quality  
**Use Case:** Streamers who want high-quality local recordings while broadcasting

**Characteristics:**
- Dual encoding (stream-optimized + archive-quality)
- Balanced resource allocation
- Separate quality settings for stream vs. local file

### Mode 4: Podcasting

**Focus:** Audio-only capture with remote guest support  
**UI Emphasis:** Waveforms prominent, video preview completely hidden, audio tracks enlarged  
**Use Case:** Podcast recording, interviews, audio-first content

**Characteristics:**
- Video preview entirely removed from interface
- Audio tracks dominate the UI (similar to Adobe Audition/Audacity layout)
- Remote guest support (Riverside/Zencastr-style)
- Each remote participant's waveform appears in dedicated audio track
- Chapter marker export for podcast platforms
- **Pricing: Free forever** (podcasting mode is not gated)

---

## Unified Interface Vision

### Overview

The prototype mockups reveal Flowmaster's north star: a unified production environment that combines:
- OBS-style source management
- DAW-style track layout
- NLE-style effects rack
- Real-time monitoring and preview

### Track System

**Video Tracks (V1, V2, V3):**
- Each track can hold a video source (game capture, webcam, secondary camera)
- Tracks have visibility toggle, mute, and solo controls
- V1 + A1 are linked by default ("Main Game" grouping)

**Audio Tracks (A1, A2, A3):**
- Dedicated audio sources (game audio, microphone, secondary mic)
- Full waveform visualization
- Per-track effects chain
- Real-time level monitoring

**Source Grouping:**
- V1 + A1 linked as "Main Game" — always move/cut together
- Users can create custom groups
- Groups simplify export (single timeline with synced tracks)

### Live Preview Window

- Real-time view of all video sources
- Overlays and effects previewed live
- Can be popped out to secondary monitor
- Shows current recording/streaming status

### Effects Rack

**Effect Slots 1-5** support both audio and video processing:

**Audio Effects:**
- Compression
- Noise gate
- EQ
- Limiter
- De-esser

**Video Effects:**
- Color correction
- Overlays
- Chroma key (green screen)
- Crop/zoom
- Filters

**Plugin Support:**
- Built-in effects library
- VST/VST3 plugin support (users bring their own)
- Effect presets (save and recall configurations)

### Sources Panel

Modeled after OBS, the sources panel manages:
- Display capture
- Window capture
- Game capture
- Webcam inputs
- Audio inputs
- Image overlays
- Text overlays
- Browser sources (for alerts, widgets)

### Recording Controls

- Large, prominent Record button (red)
- Less prominent but accessible Stream button
- Session timer with timecode display
- Session name input field
- Quick access to F9 marker function

---

## Feature Roadmap by Category

### Category 1: Core Recording & Streaming

| Feature | Description | Priority |
|---------|-------------|----------|
| Unified interface | Single window for all tools | Essential |
| Live preview window | Real-time source monitoring | Essential |
| Multi-source recording | V1-V3, A1-A3 simultaneous capture | Essential |
| Waveform visualization | Visual audio representation | Essential |
| Direct streaming output | Send to Twitch/YouTube directly | Essential |
| Multistream (3 platforms) | Simultaneous broadcast to multiple services | Essential |
| Integrated chat | Unified chat from all platforms | Essential |
| Mode toggle | Record / Stream / Both / Podcast | Essential |
| Session templates | "Valorant stream" vs "Podcast" presets | High |
| Recording profiles | Quality presets per mode | High |

### Category 2: Effects & Processing

| Feature | Description | Priority |
|---------|-------------|----------|
| Built-in audio effects | Compression, gate, EQ | High |
| Built-in video effects | Color, overlays, chroma key | High |
| VST plugin support | Third-party audio plugins | Medium |
| Video plugin support | Third-party video effects | Medium |
| Effect presets | Save/recall effect chains | Medium |

### Category 3: Podcasting & Remote Recording

| Feature | Description | Priority |
|---------|-------------|----------|
| Podcasting mode UI | Audio-focused interface, no video preview | Essential |
| Remote guest recording | Local recording + sync (better than Riverside) | High |
| Browser-based guest join | Guests join via link, no app required | High |
| Per-guest waveform display | Each participant visible in tracks | High |
| Multi-participant sync | Automatic alignment of all recordings | High |
| Guest local recording | Each guest records locally for quality | High |
| Podcast chapter export | MP3 chapters, YouTube chapters format | Medium |

### Category 4: Export & Integration

| Feature | Description | Priority |
|---------|-------------|----------|
| EDL export | Universal edit decision list | Essential |
| XML export | Final Cut Pro 7 format (Premiere compatible) | Essential |
| FCPXML export | Final Cut Pro X format | High |
| DaVinci Resolve export | Native project file | High |
| Track labels in export | "Game Audio", "Mic", "Webcam" metadata | High |
| Chapter/marker metadata | Markers transfer to NLE timeline | High |
| Per-guest stem export | Separate files for each podcast participant | Medium |
| Thumbnail suggestions | AI-suggested thumbnails from highlights | Low (later) |

### Category 5: Cloud & Sync

| Feature | Description | Priority |
|---------|-------------|----------|
| Settings sync | Presets and preferences across devices | High |
| Session state cloud bridge | Real-time sync for mobile app | High |
| Timestamp backup | Cloud storage of marker data | High |
| Low-res preview storage | Compressed highlights for mobile viewing | Medium |
| Full backup service | Complete session backup (Flowmaster Plus) | Low (paid tier) |

### Category 6: Mobile Companion App

| Feature | Description | Priority |
|---------|-------------|----------|
| Add timestamps | F9 equivalent from phone | Essential |
| View timestamp list | Backup of all markers with details | Essential |
| Browse video folders | See local files on desktop | Essential |
| Contribute to live session | Real-time marker input during recording | Essential |
| Disk space notifications | Alert when storage threshold reached | High |
| Custom threshold setting | User defines "too full" percentage | High |
| Start/stop recording | Hidden panel, requires deliberate action | Medium |
| Preview highlights (low-res) | View compressed clips of marked moments | Medium |
| Monitor audio levels | See if clipping is occurring | Low |

### Category 7: Collaborative Features

| Feature | Description | Priority |
|---------|-------------|----------|
| Collaborative timestamp editing | Multiple contributors to same session | Medium |
| Browser-based join link | Spontaneous room generation | Medium |
| Contributor identification | Name attribution for each marker | Medium |
| IP/device source tracking | Know which device created each marker | Medium |
| Multi-editor real-time sync | Production team workflow | Low (business tier) |

---

## Mobile Companion App

### Core Architecture

The mobile app connects to the desktop application via a cloud bridge that maintains real-time session state. This enables:

1. **Timestamp synchronization** — Mobile markers sync to desktop timeline within milliseconds
2. **Session awareness** — App knows when desktop is recording
3. **Bidirectional communication** — Desktop state reflects on mobile, mobile actions affect desktop

### Primary Functions

#### Timestamp Management
- **Add markers** — Tap to create F9-equivalent timestamp
- **View marker list** — Scrollable list of all session markers
- **Marker details** — Time, source device, optional note
- **Backup access** — Markers stored locally on phone as backup

#### File Browser
- **Video folder access** — Browse desktop recording directories
- **File metadata** — See duration, size, date, associated markers
- **Folder navigation** — Multiple watched folders supported

#### Live Session Contribution
- **Real-time participation** — Add markers during active recording
- **Session status** — See recording state, duration, disk space
- **Multi-contributor** — Multiple phones can contribute to same session

#### Remote Control (Hidden)
- **Start/stop recording** — Available but deliberately hidden
- **Access method** — Requires swiping out a hidden panel
- **Confirmation required** — Prevents accidental activation
- **Use case** — Podcaster away from desk, emergency stop

#### Notifications
- **Disk space alerts** — Push notification when threshold reached
- **Custom thresholds** — User sets their comfort level
- **Recommended defaults:**
  - 75% = Warning (yellow zone)
  - 80%+ = Critical (red zone)
- **Recording status** — Optional alerts for start/stop

### Preview Feature (Optional)

When enabled by user ("Backup clips to mobile"):
- After recording completes, highlights are compressed
- Low-resolution versions of marked segments uploaded
- Available for preview on phone
- **Not** full-quality playback — just rough preview
- Full render still requires desktop

---

## Cloud Infrastructure

### Session State Bridge

A lightweight cloud service maintains real-time session state:

```
Desktop App ←→ Cloud Bridge ←→ Mobile App(s)
     ↓              ↓              ↓
  Recording     Session state    Timestamps
  Waveforms     Marker data      Controls
  Local files   Sync reference   Previews
```

### Data Collected

**Standard telemetry (all users):**
- Session count
- Recording duration
- File creation success/failure
- Error logs (anonymized)
- Feature usage patterns

**Purpose:** Improve reliability, identify bugs, understand usage patterns

**Opt-in detailed analytics (power users):**
- More granular usage data
- Performance metrics
- Feature request voting integration

**Never collected:**
- Actual audio/video content
- Filenames or file paths
- Keystroke patterns
- Personal identifiable information beyond account basics

### Transparency Commitment

All data collection is:
- Clearly disclosed in privacy policy
- Explained in plain language during onboarding
- Controllable by user (opt-out available for non-essential telemetry)
- Used to improve service OR potentially monetized (with explicit disclosure)

---

## Collaborative Features

### Philosophy

Collaborative features are powerful but can overwhelm solo creators. These features should be:
- **Discoverable** by those who need them
- **Hidden** from those who don't
- **Tiered** so casual users aren't confused

### Browser-Based Session Joining

**How it works:**
1. Host generates shareable link from Flowmaster
2. Collaborator opens link in browser (no app required)
3. Collaborator enters display name
4. Collaborator can now add timestamped markers
5. All markers sync to host's session with attribution

**Data captured per marker:**
- Timestamp (synced to session timeline)
- Contributor name
- Source device/IP
- Optional note/tag

### Podcast Guest Integration

When a guest joins via browser for podcast recording:
1. Guest's browser requests microphone access
2. Audio is recorded locally on guest's device
3. Waveform is streamed to host's Flowmaster interface
4. Guest appears as dedicated audio track
5. After session, local recordings sync and align

**Advantages over Riverside/Zencastr:**
- Multiple participants can have full Flowmaster desktop apps
- All participants can contribute markers from their perspective
- Host sees all waveforms in real-time (not just after upload)
- Integrated with Flowmaster's full toolset (effects, export, etc.)

### Production Team Features (Business Tier)

For professional production teams:
- Multiple editors can access same session simultaneously
- Real-time marker collaboration
- Role-based permissions (host, editor, viewer)
- Marker threading (replies to markers)
- Task assignment ("Editor 2: cut this section")

**Note:** These features are explicitly for business/production tier. They should not be visible to standard users to avoid confusion.

---

## Export & Integration

### Supported Export Formats

| Format | Compatible With | Preserves |
|--------|-----------------|-----------|
| EDL (Edit Decision List) | Universal | Cut points only |
| XML (FCP7) | Premiere Pro, FCP7 | Cuts, track labels |
| FCPXML | Final Cut Pro X | Full metadata |
| AAF | Premiere, Pro Tools | Most metadata |
| DaVinci Resolve Project | DaVinci Resolve | Native integration |
| CSV | Spreadsheets, scripts | Timestamp data |
| JSON | Custom integrations | Full marker data |
| SRT | Subtitle editors | Timestamp + notes |

### Export Options

**Track labels:**
- Optionally include descriptive names ("Game Audio", "Mic", "Webcam")
- Transferred to NLE timeline

**Chapter/marker metadata:**
- All F9 markers become timeline markers in NLE
- Notes transfer as marker comments
- Chapter export for podcast platforms (MP3 ID3 chapters)

**Per-guest stems (Podcasting):**
- Each participant exported as separate audio file
- Automatic alignment applied
- Ready for mixing in external DAW

### Premiere Pro Workflow Example

1. User finishes recording in Flowmaster
2. Selects "Export to Premiere Pro"
3. Flowmaster generates XML file
4. User opens Premiere → Import → selects XML
5. Timeline appears with:
   - All cuts pre-applied
   - Track labels intact
   - Markers at F9 points
6. User refines and exports final video

---

## Pricing & Tier Strategy

### Tier 1: Flowmaster (Free During Beta)

**Includes:**
- All four modes (Recording, Streaming, Both, Podcasting)
- Core unified interface
- F9 timestamp system
- AutoCut functionality
- AutoCleaner functionality
- Basic export (EDL, XML)
- Mobile app (core features)
- Podcasting mode (free forever)

**Beta offer:** Early adopters get 50% off first year when paid tier launches

### Tier 2: Flowmaster Pro (Future Paid Tier)

**Adds:**
- Advanced export formats (FCPXML, AAF, DaVinci)
- VST plugin support
- Priority support
- Extended cloud storage for settings
- Higher multistream limits (5+ platforms?)

### Tier 3: Flowmaster Studio for Business (Future)

**Adds:**
- Collaborative timestamp editing
- Multi-editor real-time sessions
- Role-based permissions
- Team management dashboard
- SLA support
- Volume licensing

### Tier 4: Flowmaster Plus (Add-on)

**Optional add-on for any tier:**
- Full session cloud backup
- Extended preview storage
- Priority rendering queue
- Archive access for old sessions

### Pricing Philosophy

- **Podcasting is always free** — differentiator, builds goodwill
- **Solo creators are primary audience** — don't price them out
- **Business features justify business pricing** — collaboration is enterprise value
- **No feature hostage-taking** — core workflow is complete at base tier

---

## Target Audience Segmentation

### Primary Audience: Solo Gaming Content Creators

**Profile:**
- Records 3-5 hour gaming sessions
- Wants highlights for YouTube/TikTok
- Works alone
- Limited editing experience
- Values time savings over advanced features

**Needs:**
- Simple F9 marking
- Quick AutoCut processing
- Easy export to simple editor
- Low learning curve

**Marketing approach:**
- Focus on time savings
- "Edit as you record" messaging
- Highlight simplicity
- Avoid overwhelming with features

### Secondary Audience: Streamers

**Profile:**
- Broadcasts live to Twitch/YouTube
- Wants to repurpose VODs into highlights
- May multistream to multiple platforms
- Engaged with chat during streams

**Needs:**
- Direct streaming output
- Multistream support
- Chat integration
- Stream + record simultaneously

**Marketing approach:**
- Compare to OBS (familiar reference)
- Emphasize "record while you stream"
- Highlight multistream capability

### Tertiary Audience: Podcasters

**Profile:**
- Audio-first content
- May have remote guests
- Wants clean audio workflow
- Exports to podcast platforms

**Needs:**
- Audio-focused interface
- Remote guest recording
- Chapter marker export
- Multi-track editing

**Marketing approach:**
- Position against Riverside/Zencastr
- Emphasize "better than" remote recording
- Free forever as differentiator

### Future Audience: Production Teams

**Profile:**
- Multiple editors
- Professional workflows
- Need collaboration tools
- Willing to pay for business features

**Needs:**
- Multi-user sessions
- Role-based permissions
- Real-time collaboration
- Enterprise support

**Marketing approach:**
- Separate landing page/messaging
- B2B sales approach
- Case studies with teams
- ROI-focused messaging

---

## Technical Architecture Notes

### Desktop Application

**Current stack:**
- Flowmaster Hotkey: Rust
- AutoCut: Python
- AutoCleaner: Python

**Future unified app considerations:**
- Single executable vs. modular architecture
- Cross-platform potential (Windows first, Mac later?)
- Resource management for simultaneous record + stream
- Plugin sandboxing for VST support

### Cloud Services Required

1. **Authentication service** — User accounts, licensing
2. **Session state bridge** — Real-time sync for mobile
3. **Telemetry ingestion** — Usage data collection
4. **File storage** — Preview clips, settings backup
5. **Collaboration server** — WebSocket for real-time features

### Mobile App

**Platforms:**
- iOS (App Store)
- Android (Google Play)

**Framework considerations:**
- React Native for cross-platform efficiency
- Native for performance-critical features

**Offline capability:**
- Marker list cached locally
- Sync when connection restored

### Browser Guest Client

**Requirements:**
- WebRTC for audio capture
- WebSocket for real-time marker sync
- No installation required
- Works on Chrome, Firefox, Safari, Edge

---

## Marketing Considerations

### Homepage Messaging (Keep It Simple)

The homepage should focus on the core value proposition for solo creators:
- "Edit as you record"
- Three-step workflow (Record → AutoCut → AutoClean)
- Time savings emphasis
- Free beta offer

**Do NOT put on homepage:**
- Collaborative editing features
- Production team workflows
- Complex technical specifications
- Every single feature

### Features Page (Progressive Disclosure)

Consider an interactive approach:
- Mode selector (Recording / Streaming / Podcasting)
- Features reveal based on selected mode
- Avoids overwhelming users with irrelevant features
- Possible motion graphics / interactive elements

### Separate Pages for Audiences

- `/features` — Core features, mode-based filtering
- `/podcasting` — Dedicated podcasting landing page
- `/business` — Production team features (later)
- `/compare` — vs OBS, vs Riverside, vs AI editors

### Future Page (Roadmap)

What to include:
- Unified interface preview (mockups)
- Cloud sync & mobile app
- Enhanced export options
- "We don't guess. You decide." philosophy

What to tease carefully:
- Collaborative features (mention, don't emphasize)
- AI-adjacent features (only if user-controlled)

What to NOT include:
- Specific timelines (avoid overpromising)
- Business tier details (premature)
- Technical architecture (too inside-baseball)

---

## Feature Priority Matrix

### Phase 1: Foundation (Current → 3 months)

| Feature | Status |
|---------|--------|
| Three-tool suite (Hotkey, AutoCut, AutoCleaner) | ✅ Complete |
| Marketing website | 🔄 In Progress |
| Beta distribution | Pending |
| Email capture / early adopter list | Pending |

### Phase 2: Unified Interface (3-6 months)

| Feature | Priority |
|---------|----------|
| Single-window UI | Essential |
| V1-V3, A1-A3 track layout | Essential |
| Live preview window | Essential |
| Waveform visualization | Essential |
| Mode toggle (Record/Stream/Both/Podcast) | Essential |
| Built-in effects (basic set) | High |
| Session templates | High |

### Phase 3: Streaming & Integration (6-9 months)

| Feature | Priority |
|---------|----------|
| Direct streaming output | Essential |
| Multistream (3 platforms) | Essential |
| Integrated chat | Essential |
| EDL/XML export | Essential |
| FCPXML/DaVinci export | High |

### Phase 4: Mobile & Cloud (9-12 months)

| Feature | Priority |
|---------|----------|
| Mobile app (core features) | Essential |
| Cloud session bridge | Essential |
| Settings sync | High |
| Disk space notifications | High |
| Low-res preview storage | Medium |

### Phase 5: Podcasting & Remote (12-18 months)

| Feature | Priority |
|---------|----------|
| Podcasting mode UI | Essential |
| Browser-based guest join | High |
| Remote guest recording | High |
| Per-guest waveform display | High |
| Podcast chapter export | Medium |

### Phase 6: Collaboration & Business (18+ months)

| Feature | Priority |
|---------|----------|
| Collaborative timestamp editing | Medium |
| Browser-based session joining | Medium |
| Production team features | Low (business tier) |
| Full cloud backup service | Low (paid add-on) |

---

## Appendix A: Competitive Positioning

### vs. OBS Studio

| Aspect | OBS | Flowmaster |
|--------|-----|------------|
| Recording | ✅ Yes | ✅ Yes |
| Streaming | ✅ Yes | ✅ Yes |
| Timestamp marking | ❌ No | ✅ Yes |
| Auto-cutting | ❌ No | ✅ Yes |
| File cleanup | ❌ No | ✅ Yes |
| NLE export | ❌ No | ✅ Yes |
| Mobile companion | ❌ No | ✅ Yes |
| Price | Free | Free (beta) |

**Positioning:** "OBS records. Flowmaster records AND edits."

### vs. Riverside/Zencastr

| Aspect | Riverside | Flowmaster |
|--------|-----------|------------|
| Remote guest recording | ✅ Yes | ✅ Yes |
| Local recording quality | ✅ Yes | ✅ Yes |
| Multi-participant markers | ❌ No | ✅ Yes |
| Real-time waveform view | ❌ Limited | ✅ Yes |
| Integrated editing tools | ❌ No | ✅ Yes |
| Video recording mode | ✅ Yes | ✅ Yes |
| Price | $15-24/mo | Free |

**Positioning:** "Riverside for recording. Flowmaster for the whole workflow."

### vs. AI Editors (Opus Clip, Vizard, etc.)

| Aspect | AI Editors | Flowmaster |
|--------|------------|------------|
| Automatic highlight detection | ✅ Yes (AI decides) | ❌ No (user decides) |
| User control | ❌ Limited | ✅ Full |
| Predictable output | ❌ Variable | ✅ Consistent |
| Learning curve | ✅ Low | ✅ Low |
| Trust required | ❌ High (black box) | ✅ Low (transparent) |

**Positioning:** "AI guesses. You decide."

---

## Appendix B: Guest Limit Recommendation

Based on competitive analysis and technical considerations:

**Recommended guest limits:**

| Tier | Participants |
|------|--------------|
| Free (Podcasting mode) | Up to 4 guests |
| Pro | Up to 8 guests |
| Business | Up to 12 guests |

**Rationale:**
- 4 is sufficient for most podcasts (host + 3 guests)
- 8 covers panel discussions and larger shows
- 12 handles webinars and large production needs
- Beyond 12 becomes technically complex and rarely needed

---

## Appendix C: Glossary

| Term | Definition |
|------|------------|
| F9 | Default hotkey for marking timestamps |
| AutoCut | Tool that cuts footage based on timestamps |
| AutoCleaner | Tool that safely deletes processed original files |
| EDL | Edit Decision List — universal export format |
| FCPXML | Final Cut Pro X project format |
| VST | Virtual Studio Technology — audio plugin standard |
| Multistream | Simultaneous broadcast to multiple platforms |
| Session | A single recording instance with associated markers |
| Marker | User-created timestamp indicating a highlight moment |
| Stem | Individual audio track exported separately |

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-21 | Initial compilation from founder interview |

---

*This document represents the current vision for Flowmaster Live Studio. Features, timelines, and priorities are subject to change based on user feedback, technical constraints, and market conditions.*
