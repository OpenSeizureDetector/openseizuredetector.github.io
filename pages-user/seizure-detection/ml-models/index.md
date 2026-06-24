---
layout: default
title: Machine Learning Algorithms
---

# deepEpiCnn-24

deepEpiCnn-24 is the first model I am sufficienlty confident in that we are using it in place of the deterministic seizure detection algorithms in our production seizure detector for our son.

In a test on completely un-seen data in the configuration deployed in Version 5 of OpenSeizureDetector, it achieved an 83% True Positive Rate (TPR or Sensitivity).

  - The structure of the model and training method is described in [this page](./deepEpiCnn-24/index.html)
  - A technical report on the training and validation of the model [OSDM_ML_Model_development_Report](./deepEpiCnn-24/OSD_ML_Model_Development_Report_Draft_C.pdf)
  - The results of the testing, that are used to derive the 83% TPR claimed above [output_allSeizures.xlsx](./deepEpiCnn-24/output_allSeizures.xlsx)



