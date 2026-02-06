# Flowmaster Download Flow Revision

## Overview

This project revises the download and email acquisition flow across two repositories:

1. **flowmaster-site** (Astro website) - Replace email capture with attribution survey
2. **flowmaster-suite** (application) - Add session-gated email capture and access key system

## Strategic Rationale

Previously, users were asked for their email before downloading. This created friction at a high-intent moment and captured many emails from users who never actually installed the software.

The new approach:
- Removes email gate from website download
- Adds low-friction attribution survey ("How did you hear about us?")
- Allows users to download and try Flowmaster freely for 3 sessions
- Captures email after user has demonstrated genuine interest by using the software
- Results in higher-quality email list with better engagement rates

## New User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ WEBSITE (flowmaster-site)                                       │
├─────────────────────────────────────────────────────────────────┤
│ 1. User clicks "Download"                                       │
│ 2. Modal appears: "How did you hear about us?"                  │
│    - YouTube                                                    │
│    - LinkedIn                                                   │
│    - Google                                                     │
│    - From somebody I follow                                     │
│    - From a friend or colleague                                 │
│    - Other                                                      │
│ 3. User selects option → Download begins                        │
│ 4. No email collected at this stage                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ FLOWMASTER SUITE (installer + application)                      │
├─────────────────────────────────────────────────────────────────┤
│ 5. User installs Flowmaster                                     │
│ 6. User launches and uses software (sessions 1-3 work freely)   │
│ 7. On session 4: blocking prompt appears                        │
│    "Your trial has ended. Enter your email to claim your        │
│     free beta access key + 50% off at full release."            │
│ 8. User enters email → key is "sent" (stubbed for now)          │
│ 9. User enters access key → software validates and unlocks      │
│ 10. Session/usage telemetry logged (stubbed, ready for backend) │
└─────────────────────────────────────────────────────────────────┘
```

## Repository Scope

### flowmaster-site (Website)
- Modify download modal/dialog component
- Remove email input field
- Add attribution dropdown with required selection
- Download only proceeds after selection

### flowmaster-suite (Application)
- Add session counting (persisted locally)
- Build web-based UI window for session gate prompt
- Email input + access key input flow
- Stub validation (accept any input for now)
- Stub telemetry logging (local/console, ready for backend)

## Future Work (Not in Scope)

These items are planned but belong to separate projects:
- Real backend for key generation and email delivery
- Key validation against database
- Telemetry pipeline to analytics database
- Unified Flowmaster hub UI with login system
- Integration with LemonSqueezy or alternative payment/licensing

## Task Documents

### Website Tasks
- `tasks/website-01-audit-current-modal.txt`
- `tasks/website-02-implement-attribution-dropdown.txt`

### Suite Tasks
- `tasks/suite-01-audit-current-architecture.txt`
- `tasks/suite-02-implement-session-counting.txt`
- `tasks/suite-03-build-gate-ui-window.txt`
- `tasks/suite-04-stub-validation-telemetry.txt`

## Notes

- All backend integrations are stubbed/dev-mode for now
- Access key validation accepts any input until real backend exists
- Telemetry logs locally or to console, ready to wire up later
- Attribution data should be stored/logged somewhere accessible (decide during implementation)
