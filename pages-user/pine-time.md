---
layout: default
---

# PineTime Watch Installation Instructions

OpenSeizureDetector can use a [PineTime](https://www.pine64.org/pinetime/) low cost, Open Source smart watch as a data source to measure acceleration and heart rate for seizure detection.

Initial testing of the watch shows that it works well and is expected to have similar performance for seizure-like movement detection to Garmin watches, so it is expected to have a similarly high seizure detection rate.    Its heart rate sensor performs well for relatively small arm movements, but it is not as good as Garmin devices at measuring heart rate when doing vigorous movements like running.

## Requirements

### Hardware
  - [PineTime](https://www.pine64.org/pinetime/) smart watch
  - An Android mobile phone or tablet (it can be a low spec device)


### Software
  - [GadgetBridge](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs&hl=en&gl=US) - this is used to upload new Firmware onto the PineTime watch using a wireless Bluetooth connection.
  - [OpenSeizureDetector V4.2 or higher](https://github.com/OpenSeizureDetector/Android_Pebble_SD/tree/V4.2.x/app/release)
  - [PineTimeSD Firmware](https://github.com/OpenSeizureDetector/PineTimeSD/tree/main)


## Installation

### GadgetBridge
  - Install [GadgetBridge](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs&hl=en&gl=US) on the mobilephone.
  - Pair with the PineTime watch by pressing the Add ('+') button or the 'Connect New Device' menu item and following the prompts.
  - Connect to the PineTime watch using the GadgetBridge Menu.
  - The phone should display a gadgetbridge notification icon that states that the watch is connected to the phone.

### PineTimeSD Firmware
  - Download the latest release of the [PineTimeSD Firmware](https://github.com/OpenSeizureDetector/PineTimeSD) from the [PineTimeSD Github Repository](https://github.com/OpenSeizureDetector/PineTimeSD) using the phone web browser (so that pinetime-mcuboot-app.zip is in the Downloads folder on the phone).
  - Open Gadgetbridge and confirm that it is showing that it is connected to the phone.
  - Press the menu button associated with InfiniTime on the GadgetBridge sreen, and select the File Installer menu Item.
  - This will show a file exorer window.  Use this to select the pinetime-mcuboot-app.zip file, and select Install.
  - The firmware should be copied across to the watch - the watch display will show a progress bar.  It can take a couple of minutes to upload the firmware.