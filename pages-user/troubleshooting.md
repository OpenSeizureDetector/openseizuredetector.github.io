---
layout: page
title: Troubleshooting
---

# Troubleshooting

## Watch Connection Issues

### Garmin Watches

- Have you installed the watch app in line with the instructions on this web site?
- Is the watch app running? – you need to start the watch app manually on Garmin watches.
- Check the watch is connected to the phone in the Garmin Connect App

(Note that there is an issue with the Garmin software on the original VenuSQ watches (and possibly some VenuSQ2 watches) which results in them disconnecting after several hours, requiring a watch re-boot).

### PineTime Watches

- Check if the watch is connected to the phone using bluetooth – this is indicated by a small Bluetooth symbol in the top right corner of the screen.
- If the watch is not connected to the phone, press and release the watch button. This should wake up the watch and enable the bluetooth to reconnect without doing anything else.
- Sometimes the watch will crash and not respond correctly. Re-boot it by pressing and holding the watch button for about 10 seconds until a pine cone appears on the screen, then release the button.

### General

If OpenSeizureDetector does not receive data from the watch, it will generate an annoying 'pip' sound every 5 seconds and display 'FAULT' on the main screen and in the app notification. The Start-up screen will not exit until data has been received, so the app may be stuck on the start-up screen. If this is happening to you, please check the following:

- Is the Data Source selected correctly?
  - Select 'Garmin' data source for Garmin Watches
  - Select 'BLE2' data source for PineTime watches
  - Select 'Phone' data source to test the app functionality without a watch ('Demo Mode').
- If it starts correctly but then goes into a fault after a few minutes, it is likely to be battery 'optimisation'. Go into the phone settings and make sure that OpenSeizureDetector is not being 'optimised' to reduce battery drain.

## SMS Alert Issues

If OpenSeizureDetector will not re-start after enabling SMS alerts, you may have declined one of the required permissions – go into the phone settings -> Apps -> OpenSeizureDetector -> Permissions and allow all of the listed permissions (all permissions that OpenSeizureDetector requests are required for the app to function correctly).

## False Alarms

The default settings give a good seizure detector reliability and are the settings that we use for monitoring our son overnight.

There are, however some activities that will cause it to alarm. These include:

- Brushing Hair/Teeth (no real solution available)
- Typing (use a wrist rest to avoid too much movement of the watch)
- Leaning on the body of a moving motor vehicle.
- Other activities involving rapid, repeated movements such as cooking and cleaning.

If you are doing an activity that you know will set it off, you can use the 'Mute' function on either the Garmin watch, or the Android phone app to prevent alarms for 5 minutes while you complete the activity.

If you are finding it generates alarms with very little movement, you can decrease the sensitivity by increasing the Alarm Threshold setting.

The Alarm Ratio Threshold setting determines how much movement there needs to be in the seizure-like frequency range for it to alarm. Increasing it slightly can reduce the sensitivity, but it will reduce the seizure detection reliability.

We have seen genuine seizures with an Alarm Ratio of about 63, so you want the Alarm Ratio Threshold to be less than this value.

We are working on a Machine Learning algorithm which we hope to provide similar seizure detection reliability to the default algorithm, but with fewer false alarms. For this we need as much real seizure data as possible. So if you do have seizures, please consider signing up to our [Data Sharing](/pages-user/data-sharing/index.html) system to contribute your data to the project to improve the algorithm.

Some users set the movement thresholds very high so they will not alarm, and instead use one of the heart rate alarm algorithms, but this is very person-specific so be careful when setting suitable thresholds for heart rate.

## Other Issues

If you are still having problems, please email graham@openseizuredetector.org.uk, and include a screenshot of the phone app and a photo of the watch, explaining what the issue is and what you have done to try to resolve it.
