---
layout: default
---

# PineTime Watch Installation Instructions

[PineTime](https://www.pine64.org/pinetime/) is a low cost, Open Source smart watch which can be used as a data source to measure acceleration and heart rate for seizure detection.   

We have developed a [custom firmware](https://github.com/OpenSeizureDetector/PineTimeSD) for the PineTime watch which makes it compatible with [OpenSeizureDetector](https://openseizuredetector.org.uk).

This page describes how to set up a new PineTime watch for use with [OpenSeizureDetector](https://openseizuredetector.org.uk).

[![PineTime Image](/assets/images/pinetime-installation-images/pinetime.png)](https://www.pine64.org/pinetime/)


## Performance Notes 
  * Testing has shown that the PineTime works well as a seizure detector, and gives comparable performance to Garmin watches using motion detection, achieving over 80% detection reliability (see [PineTime_Performance_Report.pdf](PineTime_Performance_Report.pdf) for details)
  * Its heart rate sensor performs well for relatively small arm movements, but it is not as good as Garmin devices at measuring heart rate when doing vigorous movements, so it will not be as good as a Garmin for using heart rate alarms.
  * Overall though, PineTime is a good, low cost alernative to a Garmin watch for use as a seizure detector.  (We have been using it for our son for over a year to test it).


## Requirements

### Hardware
  - [PineTime](https://www.pine64.org/pinetime/) smart watch - available from the manufacturers' [web store](https://pine64.com/product/pinetime-smartwatch-sealed/).
  - An Android mobile phone or tablet (Android Version 6 (SDK23) or higher)


### Software
  - [OpenSeizureDetector-PineTime Updater App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector.pinetime) ([source code](https://github.com/OpenSeizureDetector/Android_PineTime_Updater)).
  - [OpenSeizureDetector Android App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) ([source code](https://github.com/OpenSeizureDetector/Android_Pebble_SD)) (Version 4.2 or higher).


## Installation



| **Step** | **Description** |  **Image** (Click on image for a larger version) | 
| **1**    | **Install the OpenSeizureDetector Firmware on the PineTime Watch** | |
| 1.1   | **Install the OpenSeizureDetector-Pinetime Updater App**.  This can be installed from [Google Play Store](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector.pinetime) | [<img alt="Logo" src="/assets/images/pinetime-installation-images/osd_pinetime_logo.png" width="100">](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector.pinetime) | 
| 1.2    | **Start the OpenSeizureDetector-Pinetime Updater App** and accept the various permissions that it needs. | [<img alt="Start OSD PineTime Updater" src="/assets/images/pinetime-installation-images/OSD_PineTime_Updater_1.jpg" width="100">](/assets/images/pinetime-installation-images/OSD_PineTime_Updater_1.jpg){:target="_blank"}| 
| 1.3    | **Select Firmware to Install**.  Press the 'Select Firmware' Button.  A list of available firmware images will be displayed.   Select the Recommended one, which is highlighted in *bold* text.  | [<img alt="Start OSD PineTime Updater" src="/assets/images/pinetime-installation-images/OSD_PineTime_Updater_2.jpg" width="100">](/assets/images/pinetime-installation-images/OSD_PineTime_Updater_2.jpg){:target="_blank"}| 
| 1.4  | **Scan for Pinetime Device**.  Press the 'Select Device' Button.  You should see the PineTime listed (it will be sown as 'InfiniTime').    If it does not appear, press the button on the watch to wake it up.   If the watch still does not appear, make sure that it is not already connected to a phone running OpenSeizureDetector and/or boot it into the recovery mode as described in Step 1.5 below. | [<img alt="Start OSD PineTime Updater" src="/assets/images/pinetime-installation-images/OSD_PineTime_Updater_3.jpg" width="100">](/assets/images/pinetime-installation-images/OSD_PineTime_Updater_3.jpg){:target="_blank"} | 
| 1.5   | **Boot the Pinetime into the recovery firmware** *This should not be necessary if you can select the device to be installed as described in Step 1.4 above*.  Hold button until pine cone bootloader image appears, and hold it until the cone turns red - it should boot into a single screen app that shows the InfiniTime logo as shown.  | [![Recovery Firmware](/assets/images/pinetime-installation-images/DSC_0218.JPG)](/assets/images/pinetime-installation-images/DSC_0218.JPG){:target="_blank"}|
| 1.6 | **Connect to the PineTime watch**.  Select the 'InfiniTime' or 'PineTime' entry from the list.  The app should return to its main screen and the Start Update (DFU) button should be activated (as we have selected both a firmware to install and a watch to install it on).   |  | 
| 1.7    | **Install new Firmware**.  Press the 'Start Update (DFU) button.    It could take a few minutes depending on the speed of the phone.   The watch and the phone should both display a progress bar as the upload progresses.  | [<img alt="Start OSD PineTime Updater" src="/assets/images/pinetime-installation-images/PineTime_DFU_Progress.png" width="100">](/assets/images/pinetime-installation-images/PineTime_DFU_Progress.png){:target="_blank"} | 

| **2**    | **Check Installed Firmware** | |
| 2.1    | **Start Watch with New Firmware**.  When the download completes, the watch will re-boot automatically, showing a pinecone which fills with green.   It will pause for several seconds once the green fill is complete, then the new firmware should start and display the time.  | [![img](/assets/images/pinetime-installation-images/DSC_0247.JPG)](/assets/images/pinetime-installation-images/DSC_0247.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0248.JPG)](/assets/images/pinetime-installation-images/DSC_0248.JPG){:target="_blank"} | 
| 2.2    | **Check Firmware**.  Check that the new OpenSeizureDetector PineTimeSD firmware has been uploaded by swiping the screen from left to right (press the button to wake up the watch first if the screen has blanked).   Select the cog settings icon to display the list of settings.   Swipe the screen from bottom to top until the 'About' item is shown, and select 'About'.   The about screen should be titled 'OSD_InfiniTime' and the version number should be 230.x.y (where x and y are numbers).   If so, you have successfully installed the OpenSeizureDetector firmware on the watch. | [![img](/assets/images/pinetime-installation-images/DSC_0249.JPG)](/assets/images/pinetime-installation-images/DSC_0249.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0250.JPG) ![img](/assets/images/pinetime-installation-images/DSC_0252.JPG)](/assets/images/pinetime-installation-images/DSC_0250.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0252.JPG)](/assets/images/pinetime-installation-images/DSC_0252.JPG){:target="_blank"} | 
| 2.3    | **Validate Firmware**.  Press the button to go back to the settings list and select the 'Firmware' option - select 'Validate'.  (Validating the firmware confirms that it has been uploaded correctly, otherwise it will be deleted and the previous firmware used next time the watch re-starts).  | [![img](/assets/images/pinetime-installation-images/DSC_0254.JPG)](/assets/images/pinetime-installation-images/DSC_0254.JPG){:target="_blank"} | 
| **3** | **Install OpenSeizureDetector Android App**      |  |
|  3.1   | **Install from Play Store**.  Install OpenSeizureDetector from [Google Play Store](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector&hl=en_GB&gl=US);  |  | 
|  3.2   | **Start OpenSeizureDetector**.  When the installation completes, you will be prompted to open OpenSeizureDetector - Select Open.   A start-up screen should open and you will see a welcome message which can be closed, followed by a warning about battery optimisation.  When that is closed, after a few seconds the start-up screen will close and display the main OpenSeizureDetector app screen. |  [![img](/assets/images/pinetime-installation-images/DSC_0273.JPG)](/assets/images/pinetime-installation-images/DSC_0273.JPG){:target="_blank"}| 
| 3.3 | **Configure OpenSeizureDetector** | |
|  3.3.1   | **Select Bluetooth Data Source** Open the menu (three dots in top right of screen) and select 'Settings', then 'General'.  Click on 'Select Data Source', and select 'Bluetooth Deice'.    | [![img](/assets/images/pinetime-installation-images/DSC_0278.JPG)](/assets/images/pinetime-installation-images/DSC_0278.JPG){:target="_blank"} | 
|  3.3.2   | **Select PineTime Watch**. Go back to the General settings page and press the "Select BLE Device" button.<br/>   You may be prompted to allow OpenSeizureDetector to access the device's location - this is necessary for Bluetooth Scanning to work correctly.<br/><br/>It is also important that you have location services ON (OSD does not currently check this and will happily scan for Bluetooth devices in vain if Location services aren't on. Note that granting location service permissions is not the same as having location servies switched on on your android device)<br/>   A screen that shows all of the detected Bluetooth devices will then open - select InfiniTime. <br/>  The PineTime/InfiniTime watch will not appear on the list if it is already connected to something - make sure that the Gadgetbridge app is not connected to the watch if it does not appear.  Also, press the watch button to switch on the screen and wake up the watch if it is not visible | [![img](/assets/images/pinetime-installation-images/DSC_0284.JPG)](/assets/images/pinetime-installation-images/DSC_0284.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0285.JPG)](/assets/images/pinetime-installation-images/DSC_0285.JPG){:target="_blank"} [![img](/assets/images/pinetime-installation-images/DSC_0286.JPG)](/assets/images/pinetime-installation-images/DSC_0286.JPG){:target="_blank"}  | 
| 3.4    | **Restart OpenSeizureDetector**  In the OpenSeizureDetector main screen, open the menu (three vertical dots) and select 'Start/Stop Server' to shutdown the system.<br/>Press the watch button to wake it up, then re-start OpenSeizureDetector.  It should go through its start-up sequence then open the main screen saying 'OK'  | [![img](/assets/images/pinetime-installation-images/DSC_0292.JPG)](/assets/images/pinetime-installation-images/DSC_0292.JPG){:target="_blank"} | 
| 3.5    | **Prevent Battery Optimisation**.  The Android system will often try to 'optimise' battery usage by switching off the bluetooth radio for apps running in the background - this will prevent OpenSeizureDetector operating.   To prevent this go into the main phone settings Applications menu, and in the advanced features, select 'Battery Optimisation'.  Select OpenSeizureDetector **NOT** to be optimised.  |  |  
| 4 | **Configuration** | |
| 4.1 | **Check Heart Rate Monitor**  On the PineTime screen, swipe right, then press the cog icon to open the settings screens.  Scroll to the 'heartrate' settings and open it.  Check that the Heart Rate period is set to 'cont' for continuous monitoring. | |
