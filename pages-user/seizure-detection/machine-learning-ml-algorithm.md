---
layout: default
title: Machine Learning (ML) Algorithm
---

# Machine Learning (ML) Algorithm

The ML algorithm estimates seizure probability from recent motion data using installed ML models.
In current app versions, multiple ML models can be installed and run.

## How it works

The app feeds recent acceleration data into one or more ML models and uses model output probabilities.

```mermaid
flowchart TD
    A[Raw acceleration stream] --> B[Collect required amount of data for the model]
    B --> C{"Movement level above
    Threshold?"}
    C -->|No| D[Return probability 0]
    C -->|Yes| E[Run each enabled ML model]
    E --> F[Get seizure probability per model]
    F --> G[Compare with MlSeizureProbabilityThresholdPct]
    G --> H[Per-model ALARM or OK]
    H --> I[Combine with voting strategy]
    I --> J["Return Combined result (ALARM or OK)"]
```

## User settings

| Setting | What it changes |
|---|---|
| CnnAlarmActive | Enables or disables ML detection. |
| MlAccelStdThresholdPct | Minimum movement variability required before ML inference is considered meaningful. Lower values make ML run in calmer motion; higher values suppress low-motion triggers. |
| MlSeizureProbabilityThresholdPct | Probability threshold above which a model reports ALARM. Lower values increase sensitivity; higher values reduce alarms. |
| MlModelUpdateCheckPeriod | How often the app checks for model updates (Never, Daily, Weekly, Monthly). |
| Add ML Model | Downloads and installs an additional model package. |

## Voting and multiple models

When more than one model is active, the app can combine model outputs using the selected voting strategy.

```mermaid
flowchart LR
    A[ML1 probability] --> D[Voting strategy]
    B[ML2 probability] --> D
    C[ML3 probability] --> D
    D --> E[Combined ML contribution to app alarm state]
```

## Practical tuning effect

- Lower MlSeizureProbabilityThresholdPct: catches more possible events, but may increase false alarms.
- Higher MlSeizureProbabilityThresholdPct: fewer false alarms, but may miss subtle events.
- Lower MlAccelStdThresholdPct: ML evaluates more often, including low-motion periods.
- Higher MlAccelStdThresholdPct: ML ignores low-motion windows, reducing sensitivity in mild activity.

## Notes

- Model metadata can provide recommended thresholds when models are installed.
- If you manually tune thresholds, your user-set values are retained.


# Available Models

## DeepEpiCnn_Run24
