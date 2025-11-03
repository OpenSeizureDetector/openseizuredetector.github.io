---
layout: default
---

# PineTime Watch Installation Instructions

[PineTime](https://www.pine64.org/pinetime/) is a low cost, Open Source smart watch which can be used as a data source to measure acceleration and heart rate for seizure detection.   

We have developed a [custom firmware](https://github.com/OpenSeizureDetector/PineTimeSD) for the PineTime watch which makes it compatible with [OpenSeizureDetector](https://openseizuredetector.org.uk).

This page describes how to set up a new PineTime watch for use with [OpenSeizureDetector](https://openseizuredetector.org.uk).

[![PineTime Image](/assets/images/pinetime-installation-images/pinetime.png)](https://www.pine64.org/pinetime/)


## Performance Notes 
  * Testing has shown that the PineTime works well as a seizure detector, and gives comparable performance to Garmin watches using motion detection, achieving over 80% detection reliability (see (PineTime_Performance_Report.pdf) for details)
  * Its heart rate sensor performs well for relatively small arm movements, but it is not as good as Garmin devices at measuring heart rate when doing vigorous movements, so it will not be as good as a Garmin for using heart rate alarms.
  * Overall though, PineTime is a good, low cost alernative to a Garmin watch for use as a seizure detector.  (We have been using it for our son for over a year to test it).


## Requirements

### Hardware
  - [PineTime](https://www.pine64.org/pinetime/) smart watch
  - An Android mobile phone or tablet (it can be a low spec device)


### Software
  - [GadgetBridge](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs&hl=en&gl=US) - this is used to upload new Firmware onto the PineTime watch using a wireless Bluetooth connection.
  - [OpenSeizureDetector V4.2 or higher](https://github.com/OpenSeizureDetector/Android_Pebble_SD/tree/V4.2.x/app/release)
  - [PineTimeSD Firmware](https://github.com/OpenSeizureDetector/PineTimeSD/releases/latest)


## Installation

There is a high level overview of the process below, followed by step-by-step instructions.

Note that we have recently developed a separate PineTime Firmware Updater app which will download the firmware from the OpenSeizureDetector web site and flash it onto a watch to save the user having to do it manually as described below.   We will update these instructions once the new app is available on Play Store

### GadgetBridge
  - Install [GadgetBridge](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs&hl=en&gl=US) on the mobile phone.
  - Connect to the PineTime watch using the GadgetBridge Menu or the '+' button (it is not necessary to 'pair' the device).
  - The phone should display a gadgetbridge notification icon that states that the watch is connected to the phone.

### PineTimeSD Firmware
  - Download the latest release of the [PineTimeSD Firmware](https://github.com/OpenSeizureDetector/PineTimeSD) from the [PineTimeSD Github Repository](https://github.com/OpenSeizureDetector/PineTimeSD) using the phone web browser (so that pinetime-mcuboot-app-dfu.zip is in the Downloads folder on the phone).
  - Open Gadgetbridge and confirm that it is showing that it is connected to the phone.
  - Press the menu button associated with InfiniTime on the GadgetBridge sreen, and select the File Installer menu Item.
  - This will show a file explorer window.  Use this to select the pinetime-mcuboot-app-dfu.zip file, and select Install.
  - The firmware should be copied across to the watch - the watch display will show a progress bar.  It can take a couple of minutes to upload the firmware, then the watch will re-boot and run the new firmware.


## Step-By-Step Instructions

| **Step** | **Description** |  **Image** (Click on image for a larger version) | 
| **1**    | **Set-Up Gadgetbridge** | |
| 1.1   | **Install the Bangle JS Gadgetbridge app on the phone**.  This can be installed from [Google Play Store](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs) | [![GB](/assets/images/pinetime-installation-images/DSC_0220.JPG)](/assets/images/pinetime-installation-images/DSC_0220.JPG){:target="_blank"}| 
| 1.2    | **Start Gadgetbridge** and accept the various permissions that it needs. | [![GB_start](/assets/images/pinetime-installation-images/DSC_0223.JPG)](/assets/images/pinetime-installation-images/DSC_0223.JPG){:target="_blank"}| 
| 1.3    | **Disable Permissions Reminders (for Android Go Phones)**.  Android Go phones do not have all of the notification capabilities of the full Android System, so Gadgetbridge will keep asking for those missing permissions.   Go into the Gadgetbridge settings and disable the 'Check Permission Status' option to prevent this.  | [![img](/assets/images/pinetime-installation-images/DSC_0226.JPG)](/assets/images/pinetime-installation-images/DSC_0226.JPG){:target="_blank"}| 
| **2** | **Connect PineTime to Phone** | |
| 2.1   | **Boot the Pinetime into the recovery firmware** Hold button until pine cone bootloader image appears, and hold it until the cone turns red - it should boot into a single screen app that shows the InfiniTime logo as shown.  | [![Recovery Firmware](/assets/images/pinetime-installation-images/DSC_0218.JPG)](/assets/images/pinetime-installation-images/DSC_0218.JPG){:target="_blank"}|
| 2.2   | **Add the Pinetime to Gadgetbridge**.  From the Gadgetbridge main screen, press the '+' button to add a device.  | [![img](/assets/images/pinetime-installation-images/DSC_0227.JPG)](/assets/images/pinetime-installation-images/DSC_0227.JPG){:target="_blank"}| 
| 2.3   | **Turn on Bluetooth**.  Follow the prompts to turn on bluetooth on the phone if necessary  | [![img](/assets/images/pinetime-installation-images/DSC_0228.JPG)](/assets/images/pinetime-installation-images/DSC_0228.JPG){:target="_blank"} | 
| 2.4  | **Scan for Pinetime Device**.  The gadgetbridge device discovery page will start and you should see the PineTime listed (it will be sown as 'InfiniTime').   If it does not appear, press the button on the watch to wake it up.  | [![img](/assets/images/pinetime-installation-images/DSC_0233.JPG)](/assets/images/pinetime-installation-images/DSC_0233.JPG){:target="_blank"} | 
| 2.5 | **Connect to the PineTime watch**.  Select the 'InfiniTime' entry from the list.   Select 'Do not Pair' when prompted.  (Although this seems counterintuitive, I have found that pairing does not work with some phones, but the connection still works ok without pairing)  | [![img](/assets/images/pinetime-installation-images/DSC_0234.JPG)](/assets/images/pinetime-installation-images/DSC_0234.JPG){:target="_blank"} | 
| 2.6 | **Check PineTime is connected**.   The Gadgetbridge main screen should now show the Pinetime watch (as 'InfiniTime') and say it is connected as shown in the image.  | [![img](/assets/images/pinetime-installation-images/DSC_0235.JPG)](/assets/images/pinetime-installation-images/DSC_0235.JPG){:target="_blank"} | 
| **3** | **Install PineTimeSD Firmware on Watch** | |
| 3.1    | **Download OpenSeizureDetector PineTimeSD Watch Firmware**.  Open the web browser on the phone and go to the OpenSeizureDetector Github repository at [https://github.com/OpenSeizureDetector/PineTimeSD/releases](https://github.com/OpenSeizureDetector/PineTimeSD/releases) and select the latest version of pinetime-mcuboot-app-dfu-<version number>.zip from the 'Asssets' section of the page.   It should download into the phone 'Downloads' folder. | [![img](/assets/images/pinetime-installation-images/DSC_0240.JPG)](/assets/images/pinetime-installation-images/DSC_0240.JPG){:target="_blank"} | 
| 3.2    | **Install new Firmware**.  When the firmware download completes, select 'Open' fromthe notification.  This should open the Gadgetbridge FW/App Installer page.   Press the 'Install' button to start installing the firmware on the watch.    It could take a few minutes depending on the speed of the phone.   The watch and the phone should both display a progress bar as the upload progresses.  | [![img](/assets/images/pinetime-installation-images/DSC_0242.JPG)](/assets/images/pinetime-installation-images/DSC_0242.JPG){:target="_blank"}  [![img](/assets/images/pinetime-installation-images/DSC_0245.JPG)](/assets/images/pinetime-installation-images/DSC_0245.JPG){:target="_blank"} | 
| 3.3    | **Start Watch with New Firmware**.  When the download completes, the watch will re-boot automatically, showing a pinecone which fills with green.   It will pause for several seconds once the green fill is complete, then the new firmware should start and display the time.  | [![img](/assets/images/pinetime-installation-images/DSC_0247.JPG)](/assets/images/pinetime-installation-images/DSC_0247.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0248.JPG)](/assets/images/pinetime-installation-images/DSC_0248.JPG){:target="_blank"} | 
| 3.4    | **Check Firmware**.  Check that the new OpenSeizureDetector PineTimeSD firmware has been uploaded by swiping the screen from left to right (press the button to wake up the watch first if the screen has blanked).   Select the cog settings icon to display the list of settings.   Swipe the screen from bottom to top until the 'About' item is shown, and select 'About'.   The about screen should be titled 'OSD_InfiniTime' and the version number should be 230.x.y (where x and y are numbers).   If so, you have successfully installed the OpenSeizureDetector firmware on the watch. | [![img](/assets/images/pinetime-installation-images/DSC_0249.JPG)](/assets/images/pinetime-installation-images/DSC_0249.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0250.JPG) ![img](/assets/images/pinetime-installation-images/DSC_0252.JPG)](/assets/images/pinetime-installation-images/DSC_0250.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0252.JPG)](/assets/images/pinetime-installation-images/DSC_0252.JPG){:target="_blank"} | 
| 3.5    | **Validate Firmware**.  Press the button to go back to the settings list and select the 'Firmware' option - select 'Validate'.  (Validating the firmware confirms that it has been uploaded correctly, otherwise it will be deleted and the previous firmware used next time the watch re-starts).  | [![img](/assets/images/pinetime-installation-images/DSC_0254.JPG)](/assets/images/pinetime-installation-images/DSC_0254.JPG){:target="_blank"} | 
| 3.6   | **Disconnect Watch from Gadgetbridge**.  On the phone, open Gadgetbridge and use the menu to disconnect the phone from the Pinetime (InfiniTime) device.   Ths can also be done directly from the Gadgetbridge notification at the top of the screen.  This is necessary so that the OpenSeizureDetector app can detect the watch during the set-up in the following section.  | [![img](/assets/images/pinetime-installation-images/DSC_0281.JPG)](/assets/images/pinetime-installation-images/DSC_0281.JPG){:target="_blank"} |
| **4** | **Install Compatible Version of OpenSeizureDetector Android App**      |  |
|  4.1   | **Install from Play Store**.  The default version of OpenSeizureDetector on Google Play Store is not compatible with PineTime at the moment - you need V4.2.x or higher, which is available to Beta testers.  Register as a beta tester on Google Play store as follows:  (1) Install OpenSeizureDetector from [Google Play Store](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector&hl=en_GB&gl=US); (2) At the top right of the play store screen, tap your profile icon; (3) Tap Manage apps and devices, select 'manage' and then Installed; (4) Tap on OpenSeizureDetector to open its details page; (5) Under 'Join the beta', tap Join and then Join.  (6) after this, an update to openseizuredetector to install V4.2.x should be available.  | | 
|  4.2   | **Start OpenSeizureDetector**.  When the installation completes, you will be prompted to open OpenSeizureDetector - Select Open.   A start-up screen should open and you will see a welcome message which can be closed, followed by a warning about battery optimisation.  When that is closed, after a few seconds the start-up screen will close and display the main OpenSeizureDetector app screen. |  [![img](/assets/images/pinetime-installation-images/DSC_0273.JPG)](/assets/images/pinetime-installation-images/DSC_0273.JPG){:target="_blank"}| 
| 4.3 | **Configure OpenSeizureDetector** | |
|  4.3.1   | **Select Bluetooth Data Source** Open the menu (three dots in top right of screen) and select 'Settings', then 'General'.  Click on 'Select Data Source', and select 'Bluetooth Deice'.    | [![img](/assets/images/pinetime-installation-images/DSC_0278.JPG)](/assets/images/pinetime-installation-images/DSC_0278.JPG){:target="_blank"} | 
|  4.3.2   | **Select PineTime Watch**. Go back to the General settings page and press the "Select BLE Device" button.<br/>   You may be prompted to allow OpenSeizureDetector to access the device's location - this is necessary for Bluetooth Scanning to work correctly.<br/><br/>It is also important that you have location services ON (OSD does not currently check this and will happily scan for Bluetooth devices in vain if Location services aren't on. Note that granting location service permissions is not the same as having location servies switched on on your android device)<br/>   A screen that shows all of the detected Bluetooth devices will then open - select InfiniTime. <br/>  The PineTime/InfiniTime watch will not appear on the list if it is already connected to something - make sure that the Gadgetbridge app is not connected to the watch if it does not appear.  Also, press the watch button to switch on the screen and wake up the watch if it is not visible | [![img](/assets/images/pinetime-installation-images/DSC_0284.JPG)](/assets/images/pinetime-installation-images/DSC_0284.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0285.JPG)](/assets/images/pinetime-installation-images/DSC_0285.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0286.JPG)](/assets/images/pinetime-installation-images/DSC_0286.JPG){:target="_blank"}  | 
| 4.4    | **Restart OpenSeizureDetector**  In the OpenSeizureDetector main screen, open the menu (three vertical dots) and select 'Start/Stop Server' to shutdown the system.<br/>Press the watch button to wake it up, then re-start OpenSeizureDetector.  It should go through its start-up sequence then open the main screen saying 'OK'  | [![img](/assets/images/pinetime-installation-images/DSC_0292.JPG)](/assets/images/pinetime-installation-images/DSC_0292.JPG){:target="_blank"} | 
| 4.5    | **Prevent Battery Optimisation**.  The Android system will often try to 'optimise' battery usage by switching off the bluetooth radio for apps running in the background - this will prevent OpenSeizureDetector operating.   To prevent this go into the main phone settings Applications menu, and in the advanced features, select 'Battery Optimisation'.  Select OpenSeizureDetector **NOT** to be optimised.  |  |  
| 5 | **Configuration** | |
| 5.1 | **Check Heart Rate Monitor**  On the PineTime screen, swipe right, then press the cog icon to open the settings screens.  Scroll to the 'heartrate' settings and open it.  Check that the Heart Rate period is set to 'cont' for continuous monitoring. | |
