# Task 03: Software Suite Beta Mentions Audit

## Prerequisites
- Read `00_MASTER_CONTEXT.md` first
- Repository: `C:\Users\alexb\Desktop\Dev Stuff\FlowmasterSuite`

---

## Task Summary
Audit the entire FlowmasterSuite repository to find ALL instances of "Beta" and ensure they only appear in appropriate contexts (installer welcome screen, not in general UI or marketing copy).

---

## Critical Rule

**"Beta" should ONLY appear after the user has initiated installation.**

### Allowed Locations for "Beta":
- Installer welcome screen: "Welcome to Flowmaster Beta"
- Installer wizard text
- EULA/license agreement (if applicable)
- Internal version strings (not user-facing)

### NOT Allowed Locations for "Beta":
- Application window title
- Splash screen (before install)
- About dialog (post-install)
- Any UI elements in the running application
- README or documentation (unless specifically about beta limitations)
- Marketing materials bundled with installer

---

## Audit Procedure

### Step 1: Full Text Search
Run a comprehensive search for "beta" (case-insensitive) across the entire repository:

```bash
# Windows PowerShell
Get-ChildItem -Recurse -File | Select-String -Pattern "beta" -CaseSensitive:$false

# Or using grep if available
grep -ri "beta" .
```

### Step 2: Document All Instances
For each instance found, document:
1. File path
2. Line number
3. Current context/text
4. Whether it should be KEPT or REMOVED

### Step 3: Categorize by Action

**KEEP (installer-only contexts):**
- Installer welcome message
- Install wizard steps
- Pre-installation warnings

**REMOVE/CHANGE:**
- Window titles
- About dialogs
- Splash screens
- User-facing strings in the running application
- Marketing copy

---

## Common File Types to Check

### Installer Configuration
- `*.iss` (Inno Setup scripts)
- `*.nsi` (NSIS scripts)
- `*.wxs` (WiX installer)
- `installer.cfg` or similar

### Application Code
- `*.py` (Python - AutoCut, AutoCleaner)
- `*.rs` (Rust - Flowmaster Hotkey)
- `*.toml` (Cargo.toml, pyproject.toml)
- `*.cpp` / `*.h` (if any C++ components)

### Configuration Files
- `*.json`
- `*.yaml` / `*.yml`
- `*.ini`
- `*.cfg`
- `config.*`

### Documentation
- `README.md`
- `CHANGELOG.md`
- `*.txt` (license files, etc.)

### Resources
- `*.rc` (Windows resource files)
- `*.manifest`
- String tables

---

## Version Number Update

While auditing, also update version numbers to **0.8.5**:

### Files likely containing version:
- `Cargo.toml` (Rust projects)
- `pyproject.toml` or `setup.py` (Python projects)
- Installer scripts
- `__version__` variables in Python
- `VERSION` or `version.txt` files
- Windows resource files (`.rc`)

---

## Expected Changes Template

Use this format to document changes:

```
FILE: [path/to/file]
LINE: [line number]
CURRENT: "[current text containing beta]"
ACTION: KEEP | CHANGE | REMOVE
NEW TEXT: "[new text if changing]"
REASON: [why this change]
```

---

## Product Name Updates

Also search for and update these patterns:

| Find | Replace With | Context |
|------|--------------|---------|
| `Flowmaster Beta` | `Flowmaster` | General references |
| `FlowMaster Beta` | `Flowmaster` | Case variations |
| `FLOWMASTER BETA` | `FLOWMASTER` | Uppercase contexts |
| Version `0.x.x` | `0.8.5` | Version strings |

**Exception:** Keep "Flowmaster Beta" in installer welcome screen only.

---

## Acceptance Criteria

- [ ] Complete audit of repository performed
- [ ] All "beta" instances documented with file paths and line numbers
- [ ] "Beta" removed from all user-facing UI except installer welcome
- [ ] Version numbers updated to 0.8.5 across all components
- [ ] Application window titles say "Flowmaster" not "Flowmaster Beta"
- [ ] About dialogs (if any) say "Flowmaster v0.8.5"
- [ ] Installer welcome screen says "Welcome to Flowmaster Beta"
- [ ] No compile/build errors after changes
- [ ] Changes tested by running the application

---

## Deliverables

1. **Audit Report**: List of all files changed with before/after
2. **Updated Files**: All necessary code changes committed
3. **Build Verification**: Confirm the software still builds and runs

---

## Notes

- The FlowmasterSuite contains multiple components:
  - **Flowmaster Hotkey** (Rust)
  - **AutoCut** (Python)
  - **AutoCleaner** (Python)
  - Possibly an installer/bundler

- Each component may have its own version file and beta references

- Pay special attention to:
  - PyInstaller spec files
  - Cargo.toml metadata
  - Any splash screen assets or about dialog code
