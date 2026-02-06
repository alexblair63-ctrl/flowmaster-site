# Task 05: Naming Consistency Audit

## Prerequisites
- Read `00_MASTER_CONTEXT.md` first
- **Both repositories:**
  - Website: `C:\Users\alexb\Desktop\flowmaster-site`
  - Software: `C:\Users\alexb\Desktop\Dev Stuff\FlowmasterSuite`

---

## Task Summary
Ensure consistent naming conventions across both the website and software repositories. This is a cross-repository audit to catch any inconsistencies.

---

## Naming Standards

### Product Names

| Name | Usage Context | Capitalization |
|------|---------------|----------------|
| **Flowmaster** | The free product users download | Capital F, lowercase rest |
| **FLOWMASTER LIVE STUDIO** | Website header/aspirational branding | All caps |
| **Flowmaster Live Studio** | When referenced in prose | Title case |
| **AutoCut** | The cutting tool | Capital A, capital C |
| **AutoClean** | The cleanup tool | Capital A, capital C |
| **Flowmaster Hotkey** | The hotkey recording component | Standard capitalization |

### Incorrect Variations to Fix

| Wrong | Correct |
|-------|---------|
| `FlowMaster` | `Flowmaster` |
| `flowmaster` (in UI) | `Flowmaster` |
| `FLOWMASTER` (in prose) | `Flowmaster` |
| `Autocut` | `AutoCut` |
| `Auto-Cut` | `AutoCut` |
| `Autoclean` | `AutoClean` |
| `Auto-Clean` | `AutoClean` |
| `Flow Master` | `Flowmaster` |
| `Flow-master` | `Flowmaster` |

**Exception:** `FLOWMASTER` is acceptable in the website header/logo where all-caps is intentional branding.

---

## Search Patterns

Run these searches across both repositories:

### Case-Sensitive Searches
```bash
# Find potential capitalization issues
grep -r "FlowMaster" .
grep -r "flowmaster" .  # in code, check if user-facing
grep -r "FLOWMASTER" .  # verify if intentional
grep -r "Autocut" .
grep -r "Autoclean" .
grep -r "Auto-Cut" .
grep -r "Auto-Clean" .
```

### Version String Searches
```bash
grep -ri "version" .
grep -ri "0\.[0-9]" .  # find version numbers
grep -ri "v0\." .
```

---

## Website Repository Checklist

### Files to Check
- [ ] All `.astro` files
- [ ] All `.tsx` / `.jsx` files
- [ ] All `.md` / `.mdx` files
- [ ] `package.json` (name, description fields)
- [ ] Any SEO/meta configuration
- [ ] `robots.txt` / `sitemap.xml` generation
- [ ] Alt text on images
- [ ] Open Graph / social media tags
- [ ] Footer text
- [ ] Navigation labels
- [ ] Page titles (`<title>` tags)

### Specific Locations
- [ ] Hero section: Should say "FLOWMASTER LIVE STUDIO" above "Edit as you record"
- [ ] Download button area
- [ ] Footer copyright
- [ ] About page (if exists)
- [ ] Documentation pages

---

## Software Repository Checklist

### Files to Check
- [ ] All Python files (`*.py`)
- [ ] All Rust files (`*.rs`)
- [ ] `Cargo.toml` - package name and metadata
- [ ] `pyproject.toml` / `setup.py` - package metadata
- [ ] README files
- [ ] Installer scripts
- [ ] Window title strings
- [ ] Log messages (consistency helps debugging)
- [ ] Error messages
- [ ] Config file comments

### Component-Specific

**Flowmaster Hotkey (Rust):**
- [ ] `Cargo.toml` name field
- [ ] Window title
- [ ] Tray icon tooltip
- [ ] Any about/version dialogs

**AutoCut (Python):**
- [ ] Module docstrings
- [ ] CLI help text
- [ ] Log messages
- [ ] Error messages

**AutoCleaner (Python):**
- [ ] Module docstrings
- [ ] CLI help text
- [ ] Log messages
- [ ] Error messages

**Installer:**
- [ ] Product name in installer config
- [ ] Start menu shortcut names
- [ ] Desktop shortcut name
- [ ] Add/Remove Programs entry name

---

## Version Number Consistency

Ensure version **0.8.5** appears consistently:

### Website
- [ ] Download button: "Download v0.8.5"
- [ ] Footer (if version shown)
- [ ] Changelog/release notes (if exists)

### Software
- [ ] `Cargo.toml` version field
- [ ] `pyproject.toml` or `setup.py` version
- [ ] `__version__` variables in Python modules
- [ ] Installer version
- [ ] Windows file properties (if configured)
- [ ] About dialog (should show "Flowmaster v0.8.5")

---

## Domain References

Check that domain references are correct:

| Domain | Usage |
|--------|-------|
| `flowmaster.live` | Primary website, free version |
| `flowmaster.studio` | Reserved for future paid version |

Search for any hardcoded URLs and verify they point to the correct domain.

---

## Deliverables

### Audit Report Format

```markdown
## Naming Audit Report

### Website Repository

#### Inconsistencies Found
| File | Line | Current | Should Be |
|------|------|---------|-----------|
| ... | ... | ... | ... |

#### Changes Made
- [x] file.astro: Changed "FlowMaster" to "Flowmaster" on line 42
- [x] ...

### Software Repository

#### Inconsistencies Found
| File | Line | Current | Should Be |
|------|------|---------|-----------|
| ... | ... | ... | ... |

#### Changes Made
- [x] main.rs: Updated window title
- [x] ...

### Version Numbers Updated
- [x] Website: v0.8.5 in download button
- [x] Cargo.toml: 0.8.5
- [x] ...
```

---

## Acceptance Criteria

- [ ] All instances of "FlowMaster" changed to "Flowmaster" (except intentional all-caps branding)
- [ ] All instances of "Autocut" / "Auto-Cut" changed to "AutoCut"
- [ ] All instances of "Autoclean" / "Auto-Clean" changed to "AutoClean"
- [ ] Version 0.8.5 consistent across all components
- [ ] Website header displays "FLOWMASTER LIVE STUDIO"
- [ ] Download references "Flowmaster" (not "Flowmaster Live" or "Flowmaster Beta")
- [ ] Audit report documenting all changes

---

## Cross-Reference with Other Tasks

This task overlaps with:
- **Task 01** (website content) - may find naming issues while making content changes
- **Task 03** (beta audit) - naming and beta issues often co-located

Coordinate to avoid duplicate work or conflicting changes.
