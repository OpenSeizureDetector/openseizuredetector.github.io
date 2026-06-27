---
layout: default
title: deepEpiCNN-24
---

# DeepEpiCnn-24

## Overview

DeepEpiCnn-24 is a Convolutional Neural Networks model that is trained to recognise the movement patterns associated with seizures so it can classify movement patterns as either Seizure or Non-Seizure movements.    

The structure of the model is similar to that reported in [Spahr A., Bernini A., Ducouret P., et al., "Deep learning–based detection of
generalized convulsive seizures using a wrist-worn accelerometer", Epilepsia,
2025. DOI: https://doi.org/10.1111/epi.18406](https://doi.org/10.1111/epi.18406)
For details of the structure of the model seee [Model Structure](#model-structure) below.

DeepEpiCnn_Run24 is the first model that I am sufficienlty confident in that we have disabled the original OSD algorithm from our 'production' seizure detection system for our son.

The model was trained using the Open Seizure Database which is data contributed by OpenSeizureDetector users via our 'Data Sharing' System - it was trained using 178 seizure events and tested using 44 seizure devents.

  - A technical report on the training and validation of the model [OSDM_ML_Model_development_Report](./OSD_ML_Model_Development_Report_Draft_C.pdf)
  - Analysis of the original test dataset (based on V1.10 of the OSDB) - [Summary Report](./event_analysis_report.pdf), [Data](./event_analysis_report.txt)


## Training Data
The model was trained using Version 1.10 of the [Open Seizure Database](https://www.techrxiv.org/doi/full/10.36227/techrxiv.23957625.v1), which was produced from data contributed by users of OpenSeizureDetector using our [Data Sharing system](https://www.openseizuredetector.org.uk/openseizuredetector-data-sharing/).

Initially the seizure, false alarms and Normal Daily Activities (NDA) datasets were looaded, giving us over 22000 'events' which contain about 3 minutes of data each.

To reduce the risk of using poor quality data, events recorded using the Phone and AndroidWear data sources were excluded, along with any events with a sub type of 'check', 'unknown' or 'null'.   

To improve the detection reliability of seizures involving motion, seizures with sub type 'aura' were excluded from the dataset, as auras are often ot associated with movement, so could confuse the training process.

After applying these filters, there were over 17600 events remaining in the dataset.

Further data quality checks were carried out to remove duplicated data and address missing data within events.   After this thre were 222 seizure events and 17381 non-seizure events in the dataset.

A simple test/train split was used, giving 178 seizure events and 13984 non-seizure events in the training dataset.

Because of the small number of seizure events compared to non-seizure events, noise augmentation was applied to the seizure events where for each seizure event, 10 augmented events were created where each sample had 30 milli-g random noise added.   This increased the number of seizure 'events' to 1958, so we still had 7 times more non-seizure events than seizure events after augmentation.

The separate test data contained 44 seizure events and 3477 non-seizure events - this was kept completely separate from the training process to avoid contaminating the model with test data.


## Techical Details
### Model Structure

The model is based on a seizure detector model structure described in this research paper:  Spahr A., Bernini A., Ducouret P., et al., "Deep learning–based detection of
generalized convulsive seizures using a wrist-worn accelerometer", Epilepsia,
2025. DOI: https://doi.org/10.1111/epi.18406

#### Input Specification

The model accepts input data which is 30 seconds of accelerometer vector magnitude data, sampled at 25Hz, resulting in 750 samples per input sequence.

#### Architecture Overview

The DeepEpiCnn is a 14-layer 1D Convolutional Neural Network (CNN) implemented in PyTorch. The network follows this high-level structure:

**Convolutional Stack:**
- **14 Conv1d layers** with kernel size 5 and "valid" (no) padding
- **Filter progression**: [16, 32 (×11), 64, 64] — starting with 16 filters, expanding to 32 filters for most of the network, then two final layers with 64 filters
- **Stride pattern**: Mostly stride=1 for feature extraction, with stride=2 applied every 5th layer for progressive downsampling
- **Between each Conv1d layer**: BatchNorm1d → ReLU activation
- **Optional regularization**: Configurable dropout after convolutional blocks (default: 0.025 for dense layers)

**Spatial Reduction:**
- **Global Average Pooling**: After the convolutional stack, an AdaptiveAvgPool1d layer reduces the spatial dimension to 1, creating a 64-dimensional feature vector

**Dense Head:**
- **Four fully connected layers** with the following progression:
  - Layer 1: 64 → 64 neurons (with BatchNorm and ReLU)
  - Layer 2: 64 → 64 neurons (with BatchNorm and ReLU)
  - Layer 3: 64 → 32 neurons (with BatchNorm and ReLU)
  - Layer 4: 32 → 16 neurons (with BatchNorm and ReLU)
- **Output layer**: 16 → 2 neurons (logits for binary classification: Seizure vs. Non-Seizure)
- **Regularization**: Dropout applied after the first dense layer (default: 0.25)

**Output:**
- Binary classification logits (used with CrossEntropyLoss during training)
- Softmax applied during inference to produce probabilities for Seizure and Non-Seizure classes

#### Training Configuration

The model is trained using the following configuration:
- **Epochs**: 100
- **Batch size**: 512
- **Optimizer**: AdamW with β₁=0.9, β₂=0.999, weight decay=0.0001
- **Learning rate schedule**: Three-phase schedule with warmup, main training, and cooldown phases
  - Warmup: 2,500 steps starting from 1×10⁻⁶ to peak 1×10⁻⁴
  - Main training: 95,000 steps at 3×10⁻⁵
  - Cooldown: 2,500 steps (total: 100,000 steps)
- **Early stopping patience**: 6 epochs
- **Evaluation**: Every 5,000 steps with model checkpointing
- **Model selection**: Based on minimizing false positive rate while maintaining ≥42% sensitivity and <4.5% FPR

#### Data Augmentation

- **Noise augmentation**: Applied with 10× augmentation factor, adding 30 mG of random noise
- **Acceleration threshold**: Minimum acceleration standard deviation of 5 mG required for model evaluation
