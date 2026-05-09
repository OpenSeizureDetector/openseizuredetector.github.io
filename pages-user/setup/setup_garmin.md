---
layout: default
title: Garmin Watch — Data Source Setup
---

# Garmin Watch — Data Source Setup

<a href="index.html" class="btn-back">← Back to Main Setup Guide</a>

> **New users:** If you do not already own a Garmin watch, consider the low-cost
> (approx. £35) [PineTime watch](https://pine64.com/product/pinetime-smartwatch-sealed/)
> instead — it is cheaper and much easier to set up. The main reason to prefer Garmin is
> if you need the **heart rate alarm** feature, since Garmin HR sensors are significantly
> more reliable during vigorous movement.

This page covers configuring a **Garmin watch** as your data source (Step 3 of the setup
wizard). Garmin provides reliable tonic-clonic seizure detection and, unlike the PineTime,
also delivers accurate continuous heart rate monitoring.

You will need:
- A compatible Garmin watch (see [Compatible Devices](#compatible-devices) below)
- The **[Garmin Connect](https://play.google.com/store/apps/details?id=com.garmin.android.apps.connectmobile)** app installed on your phone
- A **computer with a USB port** (required to copy the watch app file onto the watch)

**Important:** The Garmin watch app file must be copied to the watch via a USB connection
from a computer — this step cannot be done on a phone alone.

In the app, you should be on the *Configure Garmin Watch* screen.

---

## Compatible Devices

OpenSeizureDetector works with Garmin smartwatches that support ConnectIQ SDK level 2.3 or
higher. Garmin's [Compatible Devices](https://developer.garmin.com/connect-iq/compatible-devices/)
page lists which watches support which SDK level.

A list of devices known to work is maintained at:
[openseizuredetector.org.uk — Compatible Devices](https://www.openseizuredetector.org.uk/?page_id=1324#Compatible_Devices)

**Known issues with specific models:**
- **VenuSQ / VenuSQ 2** — avoid these; there is a known issue with the app stopping after
  several hours.
- **Vivoactive 5** — users have reported difficulties; avoid for now.
- **Forerunner 55** - Does not send accelerometer data reliably - known bug in Garmin's software - [bug report](https://forums.garmin.com/developer/connect-iq/i/bug-reports/bad-accelerometer-data-captured-by-fr55-after-latest-update).

If you are buying a watch specifically for OpenSeizureDetector, purchase from a retailer
that accepts returns in case it does not work as expected.

**Phone requirements:** The phone must run the full Android edition (not Android Go).

---

## Configure Garmin Watch

The Garmin configuration screen summarises the steps needed to set up your watch.

[<img alt="Garmin configuration screen" src="images/03_datasource_config_garmin.png" width="200">](images/03_datasource_config_garmin.png){:target="_blank"}

Work through each sub-step below before pressing **Next**.

### Step 3-1 - Pair the Watch with Garmin Connect

Pair your Garmin watch with your Android phone using the **Garmin Connect** app, following
Garmin's standard pairing instructions for your watch model. This establishes the Bluetooth
link between the phone and watch that OpenSeizureDetector uses.

Once paired, verify that Garmin Connect is successfully receiving data from the watch before
continuing.

**Disable watch notifications:** Garmin Connect forwards phone notifications (emails, SMS,
etc.) to the watch. This interferes with seizure detection data transfer and should be
disabled. In the Garmin Connect app, go to **Settings → Notifications → App Notifications**
and disable all app notifications.

### Step 3-2 - Install the OpenSeizureDetector Android App

If you have not already done so, install the latest version of the OpenSeizureDetector
Android app from [Google Play](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector).

**Important battery setting:** On your phone, search for **"Optimise Battery Usage"** in
Settings and make sure OpenSeizureDetector is set to **Not optimised** — otherwise the
Android system may shut it down to save power.

Also open Garmin Connect and go to **Settings → Notifications → App Notifications** and
ensure that notifications from OpenSeizureDetector are **disabled** in Garmin Connect
(to prevent watch buzzing that interferes with data transfer).

### Step 3-3 - Install the GarminSD Watch App

There is a [video walkthrough on YouTube](https://youtu.be/modxwJLAFjQ) of the steps
below (note: it is slightly out of date, so read the steps here too):

<iframe width="560" height="315" src="https://www.youtube.com/embed/modxwJLAFjQ" title="GarminSD watch app installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**1. Download the watch app file**

On a computer, download the latest `GarminSD.prg` file from the
[GarminSD releases page](https://github.com/OpenSeizureDetector/Garmin_SD/releases/latest)
on GitHub.

> **Compatibility note:** If the latest release does not work on your watch, try the
> `v2.0.7x` variant (compiled with newer Garmin tools; works on newer watches but not some
> older models). Previous versions are also available in the
> [build folder](https://github.com/OpenSeizureDetector/Garmin_SD/tree/master/WatchApp/build)
> — rename whichever version you use to `GarminSD.prg` on the watch.

---

**2. Copy the file onto the watch via USB**

Connect the watch to the computer using its charging/data USB cable. The watch appears as a
removable drive. Open the watch drive and copy `GarminSD.prg` into the **`GARMIN/APPS`**
folder (create the folder if it does not exist).

> On some older watches the file must be named exactly `GarminSD.prg` (with no version
> number) or it will not appear in the apps list.

Safely eject the watch and disconnect the USB cable.

---

**3. Find GarminSD in the apps list**

[<img alt="Vivoactive 3 all-apps list showing GarminSD" src="images/garmin_02_apps_list_garminsd.jpg" width="200">](images/garmin_02_apps_list_garminsd.jpg){:target="_blank"}

On the watch, press the main side button to open the favourites list, then scroll to the
**four-dots grid icon** and press it to open the full apps list. Scroll to the bottom —
**GarminSD** should appear there.

---

**4. Start GarminSD**

Tap **GarminSD** to launch it. For the first 5–10 seconds the app shows the version number:

[<img alt="GarminSD starting — version number displayed" src="images/garmin_03_garminsd_version.jpg" width="200">](images/garmin_03_garminsd_version.jpg){:target="_blank"}

The version number is then replaced by the live seizure detector status and heart rate:

[<img alt="GarminSD running — showing OK status and HR" src="images/garmin_04_garminsd_ok.jpg" width="200">](images/garmin_04_garminsd_ok.jpg){:target="_blank"}

The display shows **OK** (or WARNING / ALARM / FAULT), the current heart rate updated every
second, and the battery percentage. The GarminSD app also runs on older rectangular Garmin
watches:

[<img alt="GarminSD running on a VivoactiveHR" src="images/garmin_05_garminsd_vivoactivehr.jpg" width="200">](images/garmin_05_garminsd_vivoactivehr.jpg){:target="_blank"}

Press **Next** in the phone app once the GarminSD watch app is confirmed running.

---

Once the GarminSD watch app is running and the phone shows it connected, return to the
main setup guide to continue with algorithm selection.

<a href="index.html#step-4--select-detection-algorithms" class="btn-back">← Back to Main Setup — continue with algorithm selection</a>

---

## Starting the Watch App

The exact button layout varies by Garmin model. The instructions below are for the
**Vivoactive 3** — adapt as needed for your watch.

Once GarminSD.prg is installed and the watch is disconnected from the computer:

**1. Open the favourites list**

Press the **main side button** once. You see the list of favourite apps — Run, Bike, Walk
and others:

[<img alt="Vivoactive 3 favourites list showing four-dots icon" src="images/garmin_01_favourites_list.jpg" width="200">](images/garmin_01_favourites_list.jpg){:target="_blank"}

Scroll up until you see the **four-dots grid icon** at the bottom of the list and press it
to open the full list of all installed apps.

---

**2. Find and launch GarminSD**

[<img alt="All-apps list showing GarminSD entry" src="images/garmin_02_apps_list_garminsd.jpg" width="200">](images/garmin_02_apps_list_garminsd.jpg){:target="_blank"}

Scroll to the bottom of the full apps list — **GarminSD** should appear there. Tap
**GarminSD** to launch it.

---

**3. GarminSD running**

For the first 5–10 seconds the app shows the firmware version number:

[<img alt="GarminSD just started showing version number" src="images/garmin_03_garminsd_version.jpg" width="200">](images/garmin_03_garminsd_version.jpg){:target="_blank"}

The version number is then replaced by the live seizure detector status and heart rate:

[<img alt="GarminSD running showing OK and heart rate" src="images/garmin_04_garminsd_ok.jpg" width="200">](images/garmin_04_garminsd_ok.jpg){:target="_blank"}

The display shows the status (**OK** / WARNING / ALARM / FAULT), the current heart rate
updated every second, and the battery percentage. The app works similarly on older
rectangular Garmin models such as the VivoactiveHR:

[<img alt="GarminSD running on a VivoactiveHR" src="images/garmin_05_garminsd_vivoactivehr.jpg" width="200">](images/garmin_05_garminsd_vivoactivehr.jpg){:target="_blank"}

---

### Adding GarminSD to Your Favourites

To make the app easier to start each day, add it to your favourites list:

1. From the main watch face, press the main button to open the favourites list.
2. Press and hold one of the app icons and select **Manage Apps**.
3. Scroll to **GarminSD** and select it, then choose **Add Favourite**.
4. Optionally remove less-used apps from the list to keep it short.

GarminSD will now appear directly in the favourites list with a single button press.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Watch app not found on USB drive | Navigate to the `GARMIN/APPS` folder on the watch drive; create it if it does not exist |
| GarminSD does not appear in watch app list | Rename the file to exactly `GarminSD.prg` (remove any version number) and re-copy |
| App shows `FAULT` status | Ensure GarminSD is actively running on the watch, then restart OSD on the phone |
| Phone shows *Connecting* indefinitely | Re-launch GarminSD on the watch; restart OSD on the phone |
| Heart rate not displayed | Wear the watch snugly; ensure the HR sensor window on the back is clean |
| Garmin Connect pairing fails | Follow Garmin's official pairing instructions for your specific watch model |
| Watch keeps buzzing with notifications | Disable App Notifications for OpenSeizureDetector in Garmin Connect Settings |
| OSD shut down by Android in background | Set OSD to *Not optimised* in your phone's Battery Optimisation settings |
| Watch appears to work then stops after hours | Avoid VenuSQ / VenuSQ2 models; try a different compatible Garmin model |

For the full troubleshooting procedure and FAQ (including watch error codes) see:
[openseizuredetector.org.uk](https://openseizuredetector.org.uk)

Please report issues or successes to graham@openseizuredetector.org.uk or the
[OpenSeizureDetector Facebook page](https://facebook.com/openseizuredetector).
