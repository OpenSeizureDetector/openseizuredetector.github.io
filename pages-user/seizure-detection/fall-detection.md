---
layout: default
title: Fall Detection
---

# Fall Detection

Fall Detection looks for a rapid low-then-high acceleration pattern inside a short time window.
It is designed to detect acute fall-like events and trigger quickly.

## How it works

For each analysis cycle, the algorithm scans sliding windows and checks whether both conditions occur in the same window:

1. A low acceleration dip below FallThreshMin (free-fall-like phase)
2. A high acceleration peak above FallThreshMax (impact-like phase)

If both are true in the configured window, the fall algorithm raises ALARM.

```mermaid
flowchart TD
    A[Acceleration samples] --> B[Slide window over buffer]
    B --> C[Find min and max acceleration in each window]
    C --> D{min < FallThreshMin AND max > FallThreshMax?}
    D -->|Yes| E[Fall algorithm ALARM]
    D -->|No| F[Fall algorithm OK]
```

## User settings

| Setting | What it changes |
|---|---|
| FallActive | Enables or disables Fall Detection. |
| FallThreshMin | Lower acceleration threshold that represents the free-fall-like part. |
| FallThreshMax | Upper acceleration threshold that represents the impact-like part. |
| FallWindow | Time window in milliseconds in which both threshold crossings must occur. |

## Practical tuning effect

```mermaid
flowchart LR
    A[Lower FallThreshMin] --> B[Requires deeper acceleration dip]
    C[Higher FallThreshMin] --> D[Easier to satisfy low-threshold condition]
    E[Higher FallThreshMax] --> F[Requires stronger impact spike]
    G[Lower FallThreshMax] --> H[Easier to satisfy impact condition]
    I[Shorter FallWindow] --> J[Needs tighter timing]
    K[Longer FallWindow] --> L[Allows wider timing between dip and spike]
```

## Alarm behavior note

In current app logic, a detected fall bypasses normal voting and warning-time delays and can force an immediate ALARM state. This is intentional so that possible falls get rapid attention.
