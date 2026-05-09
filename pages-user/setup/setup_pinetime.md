---
layout: default
title: PineTime Watch — Data Source Setup
---

# PineTime Watch — Data Source Setup

<a href="index.html" class="btn-back">← Back to Main Setup Guide</a>

This page covers configuring the **PineTime watch** as your data source (Step 3 of the
setup wizard). The PineTime is a low-cost, open-source wrist watch specifically supported
for reliable tonic-clonic seizure detection.

You will need:
- A PineTime watch (available from [Pine64](https://www.pine64.org/pinetime/))
- Bluetooth enabled on your phone

In the app, you should be on the *Configure PineTime Watch* screen.

---

## Configure PineTime Watch

The PineTime configuration screen guides you through three sub-steps.

[<img alt="PineTime configuration screen" src="images/03_datasource_config_pinetime.png" width="200">](images/03_datasource_config_pinetime.png){:target="_blank"}

### 3a - Install the PineTime Updater App

The **PineTime Updater** companion app is needed to flash the OpenSeizureDetector firmware
onto your watch.

- If the updater is **not installed**: an **Install PineTime Updater App** button appears.
  Tap it to open Google Play, install the app, then press Back to return here.
- If it is **already installed**: you will see a green tick:
  *PineTime Updater app is installed*.

### 3b - Install OpenSeizureDetector Firmware onto the Watch

Tap **Install PineTime Firmware** to launch the PineTime Updater app.

**Note:** The updater will request Bluetooth permissions and a notification permission.
Please grant both so the firmware transfer can complete.

The updater scans for nearby PineTime watches, transfers the custom OpenSeizureDetector
firmware, then returns you to this screen automatically. The watch Bluetooth address is
recorded automatically - no manual entry needed.

### 3c - Connect (Scan) for the Watch

Tap **Scan for PineTime Watch** to search for your watch over Bluetooth. A list of nearby
Bluetooth devices appears - select your PineTime.

Once selected, the screen shows the device name and MAC address in green, for example:

    PineTime   MAC: AB:CD:EF:12:34:56

If *No device selected* is shown in orange, go back and scan again.

Press **Next** when your watch appears in green.

---

Once your PineTime is connected and showing in green, return to the main setup guide to
continue with algorithm selection.

<a href="index.html#step-4--select-detection-algorithms" class="btn-back">← Back to Main Setup — continue with algorithm selection</a>

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Watch not found during scan | Ensure watch is charged, on wrist, and phone Bluetooth is enabled |
| Firmware update fails | Keep watch within 1 metre of phone during the update |
| App not connecting after setup | Force-stop the app and restart; or re-scan via Settings → Bluetooth |
| PineTime Updater not on Play Store | Check your regional store or see the OpenSeizureDetector GitHub releases page |

For more information visit [openseizuredetector.org.uk](https://openseizuredetector.org.uk)
