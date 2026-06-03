---
layout: default
title: Heart Rate Alarms
---

# Heart Rate Alarms

Heart Rate alarms use measured heart rate values to detect abnormal physiology patterns.
The app supports three heart-rate checks that can run together.

## How it works

```mermaid
flowchart TD
    A[Incoming heart rate value] --> B[Simple threshold check]
    A --> C[Adaptive threshold check around short rolling average]
    A --> D[Long rolling average threshold check]
    B --> E{Any HR check in ALARM?}
    C --> E
    D --> E
    E -->|Yes| F[Heart Rate algorithm ALARM]
    E -->|No| G[Heart Rate algorithm OK]
```

The Heart Rate detector is made of three separate checks that can run in parallel:

- Simple threshold: alarms if current heart rate is below minimum or above maximum.
- Adaptive threshold: compares current heart rate against a short rolling average plus or minus an offset.
- Rolling average threshold: alarms if the longer rolling average is outside configured limits.

## Technical description of each algorithm

### 1. Simple threshold algorithm

This is the direct high/low bpm check.

- Input: current heart rate sample.
- Alarm condition: current HR < HRThreshMin or current HR > HRThreshMax.
- Best use: clear hard limits, for example very high tachycardia or very low bradycardia.

```mermaid
flowchart LR
    A[Current HR sample] --> B{HR < HRThreshMin?}
    B -->|Yes| C[Simple HR ALARM]
    B -->|No| D{HR > HRThreshMax?}
    D -->|Yes| C
    D -->|No| E[Simple HR OK]
```

### 2. Adaptive threshold algorithm

This tracks a short rolling average and creates a moving alarm band around it.

- Input: current HR and short-window average.
- Dynamic limits:
  - lower limit = adaptive_average - HRAdaptiveAlarmThresh
  - upper limit = adaptive_average + HRAdaptiveAlarmThresh
- Alarm condition: current HR outside the dynamic limits.
- Best use: detect rapid changes relative to recent baseline, not just fixed absolute values.

### 3. Average HR algorithm

This monitors a longer rolling average and compares that average against fixed limits.

- Input: long-window rolling average.
- Alarm condition: average HR < HRAverageAlarmThreshMin or average HR > HRAverageAlarmThreshMax.
- Best use: sustained physiological drift rather than brief spikes.

## Example: rising HR during a seizure-like event

The table below shows how the adaptive threshold band moves upward as HR rises, while still detecting a rapid jump.

Assumed settings in this example:

- HRAdaptiveAlarmThresh = 20 bpm
- HRThreshMax = 140 bpm
- HRAverageAlarmThreshMax = 115 bpm

| Time point | Current HR | Adaptive average | Adaptive band (avg +/- 20) | Simple threshold | Adaptive threshold | Average HR |
|---|---:|---:|---|---|---|---|
| t0 (rest) | 80 | 80 | 60 to 100 | OK | OK | OK |
| t1 | 90 | 82 | 62 to 102 | OK | OK | OK |
| t2 | 104 | 86 | 66 to 106 | OK | OK | OK |
| t3 (rapid rise) | 124 | 92 | 72 to 112 | OK | ALARM | OK |
| t4 | 132 | 100 | 80 to 120 | OK | ALARM | WARNING trend |
| t5 (sustained high) | 128 | 108 | 88 to 128 | OK | borderline/OK | ALARM |

```mermaid
flowchart LR
    T0[t0: HR 80, avg 80, band 60-100, all OK] --> T1[t1: HR 90, avg 82, band 62-102, all OK]
    T1 --> T2[t2: HR 104, avg 86, band 66-106, all OK]
    T2 --> T3[t3: HR 124, avg 92, band 72-112, adaptive ALARM]
    T3 --> T4[t4: HR 132, avg 100, band 80-120, adaptive ALARM]
    T4 --> T5[t5: HR 128, avg 108, band 88-128, average-HR ALARM risk]
```

Interpretation:

- Simple threshold reacts only when fixed min or max limits are crossed.
- Adaptive threshold reacts early to fast changes, then its band follows the trend.
- Average HR reacts later, but is strong for prolonged elevation.

## User settings

| Setting | What it changes |
|---|---|
| HRAlarmActive | Enables or disables Heart Rate alarms. |
| HRThreshMin | Lower bpm threshold for the simple heart-rate check. |
| HRThreshMax | Upper bpm threshold for the simple heart-rate check. |
| HRAdaptiveAlarmActive | Enables adaptive threshold mode. |
| HRAdaptiveAlarmWindowSecs | Rolling-average window length used by adaptive mode. |
| HRAdaptiveAlarmThresh | Offset above and below the adaptive rolling average that triggers alarm. |
| HRAverageAlarmActive | Enables long rolling-average threshold mode. |
| HRAverageAlarmWindowSecs | Window length for long rolling-average mode. |
| HRAverageAlarmThreshMin | Lower limit for the long rolling average. |
| HRAverageAlarmThreshMax | Upper limit for the long rolling average. |
| HRNullAsAlarm | If enabled, missing or invalid heart-rate readings are treated as alarm. |
| HrFrozenAlarm | Raises a fault warning if heart-rate values appear frozen for too long. |

## Practical tuning effect

```mermaid
flowchart LR
    A[Lower HRThreshMin] --> B[Fewer low-heart-rate alarms]
    C[Raise HRThreshMax] --> D[Fewer high-heart-rate alarms]
    E[Shorter adaptive window] --> F[More responsive to rapid changes]
    G[Longer adaptive window] --> H[More stable, less reactive]
    I[Tighter adaptive offset] --> J[More sensitive]
    K[Wider adaptive offset] --> L[Less sensitive]
```

## Important data-source note

Heart-rate detection quality depends on watch sensor quality and data continuity.
In practical use, Garmin devices generally provide the most reliable continuous heart-rate data.
