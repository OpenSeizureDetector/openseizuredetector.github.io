---
layout: default
title: How it Works
---

# How it Works

![diagram](/assets/images/diagram.png)

The current version of the OpenSeizureDetector system works as follows:

  - An [app](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) runs on a basic Android phone.
  - It connects to a compatible smart watch ([PineTime](https://pine64.com/product/pinetime-smartwatch-sealed/) is recommended for new users) which is running our custom software.
  - The watch collects movement (Acceleration) and heart rate data, and sends it to the phone every few seconds.
  - The phone analyses the data using one of several available [Algorithms](/pages-user/seizure-detection/index.md) to detect seizure-like movement or heart rate.
  - If seizure-like movement or heart rate is identified, it will alert carer(s) in one of several possible ways:
    - Alarm sound from the phone.
    - Alarm sound from carer's phone, connected via WiFi
    - SMS Text message with the user's location.

  