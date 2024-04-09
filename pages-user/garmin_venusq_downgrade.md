---
layout: default
---

# Downgrading Firmware on Garmin VenuSQ

We have had an issue for over 6 months where Garmin VenuSQ watches stop sending data to the phone after a number of hours.   The only way of getting it working again is to re-boot the watch - see [Issue 26](https://github.com/OpenSeizureDetector/Garmin_SD/issues/26) on the bug tracker for details.

Garmin have not been helpful in resolving the issue (see the [Garmin bug report](https://forums.garmin.com/developer/connect-iq/i/bug-reports/venusq-disconnects-from-phone-after-multiple-makewebrequest-calls)).  We traced this to being an issue in the watch firmware (rather than the OSD code) following a firmware upgrade by Garmin.    We put quite a bit of effort into trying to work around the issue by changing the [OSD watch app](https://github.com/OpenSeizureDetector/Garmin_SD), but these were not successful.

I have found a copy of an older watch firmware on the Garmin web site and installing that on my VenuSQ has resolved the issue.     The following instructions detail how I did it and the issues I encountered.   If you are having similar trouble with a VenuSQ (**not the later VenuSQ2 which uses different firmware**), it would be worth trying this - it should be possible to do a software upgrade on the watch to restore the latest firmware from Garmin later if you want to.

## Download and Install Old Firmware

The process which I used successfully was:

  * Download the firmware from the [Garmin Support Site](https://www8.garmin.com/support/download_details.jsp?id=16030).   I have saved a copy of the files just in case it disappears from their site.
  * Unzip the file (VenuSq_1416Beta.zip) on your computer.
  * Plug the watch into the computer so that it appears as a removable storage device.
  * Copy GUPDATE-410.GCD from the unzipped folder into the /GARMIN folder on the watch.
      * There may be insufficient space on the watch to do this.   I had to remove a large file (GARMIN/EXTDATA/D844800.FNT) which is a 3MB font file in order to make space.
  * Rename GUPDATE-410.GCD to GUPDATE.GCD
  * Eject the watch removable storage device using the file manager. 
  * The watch should show a prompt saying software updates are available - say yes to install it.

The watch should then spend several minutes doing the install and then re-booting.   You will need to re-pair the watch with your phone using the Garmin Connect app as you would a new watch.

Other than the issues identified below, this has been very successful on my original VenuSQ - it has ran continuously for over 24 hours on a single charge and remained connected to the phone throughout.

## Potential Issues

### Watch Crash
  *  After I did the firmware installation I went in to set up the watch using the Garmin Connect app.   I changed things like 12h to 24h clock and disabling notifications.   
     * Garmin Connect said the changes would take effect next time the watch syncs to the phone.
     * When I looked in the Devices page on Garmin Connect, the watch was shown as disconnected so would not sync.
     * The watch face was blank, and the buttons had no effect.
  *  I resolved this by **re-setting the watch** as follows:
     * Hold both buttons in for 30 seconds
     * Release the buttons and wait 10 seconds
     * Do a long press (2 seconds) of the top button
     * The watch should now re-boot
  * The watch has worked fine for me after this initial glitch.

### GarminSD Watch App Shutdown
  * I did experience a fault when the watch app shut down while I was wearing it in the night.
  * I **think** this must have been me pressing buttons and the screen accidentally, but can not be sure.
  * Recent versions of GarminSD have a 'Ben Mode' that can be selected which makes the watch app much more difficult to shut down - if you have a similer problem, try enabling 'Ben Mode'.  (This is named after our son, Benjamin, who likes to fiddle with his watch so can shutdown the app accidentally if it is using the normal settings).


