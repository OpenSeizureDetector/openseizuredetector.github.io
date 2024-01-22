---
layout: default
---

# OpenSeizureDetector on a PineTime watch

## Motiviation
   - Open Source:  Pinetime is open source so we can modify the InfiniTime firmware to make it provide the features needed for OpenSeizureDetector.
   - Reliability:  We have had issues with Garmin updating the firmware on their watches and degrading the reliability of OpenSeizureDetector as a result.   Users are not able to restore the previous version of the firmware, and Garmin have not been responsive in helping to identify a solution.   Moving to a watch for which we have complete control over firmware updates would therefore be prefereable.
   - Price: The [PineTime](https://pine64.org/devices/pinetime/) contains comparable sensor hardware to Garmin devices at a faction of the price - it currently costs about £35 to have one delivered to the UK, compared to £170 for a compatible Garmin watch.

## Current Status
   - Working with the Android App V4.2.x or higher   
   - The source code for the modified verson of the InfiniTime firmware is on [Github](https://github.com/OpenSeizureDetector/PineTimeSD/)
   - See the current issues [on Github](https://github.com/OpenSeizureDetector/PineTimeSD/issues).


## Flashing Firmware
  - The preferred method of flashing firmware is to connect the watch to a phone using [Gadgetbridge](https://play.google.com/store/apps/details?id=com.espruino.gadgetbridge.banglejs&hl=en_US). - See the user installation instructions for the method.
  - If this is unsucessful for some reason and a DFU update is not possible, the firmware can be flashed onto the device as follows.
  - Obtain a suitable programmer, such as an [ST-Link V2](https://www.amazon.co.uk/ST-Link-Programming-Emulator-Downloader-Random/dp/B08YZ4K3Z5)
  - Install OpenOCD (it is available on Ubuntu 22.04 LTS, but I installed it from [source](git clone https://git.code.sf.net/p/openocd/code openocd-code) to make sure it had ST-Link support compliled in).
  - For simplicity, use the [pinetime-updater script](https://github.com/lupyuen/pinetime-updater) to install the bootloader and infinitime software.
  - To do this, you need to:
    - Open up the watch.  I found putting it in the bottom (cooler) oven of the aga for 4 minutes (after removing the watch straps) softened the glue enought at I could pop the back of the watch off with a screwdriver.
    - Lift up the battery to the vertical to reveal the SWD pins (note it is glued down so you need to be careful not to pull on any ribbon cables as you peel up the battery)
    - Connect up the ST-Link to the four SWD connections on the PineTime PCB.  I used a [spring loaded pin assembly](https://www.ebay.co.uk/itm/194377181985?var=495762627925). I could only buy a 5 pin assembly so I snipped off one of the pins to avoid shorting it on the PCB components.
  - Flashing infinitime using the pinetime-updater tool will restore the dfu capability so you can use gadgetbridge to install firmware again.   Remember to re-install the [recovery firmware](https://github.com/InfiniTimeOrg/InfiniTime/releases/download/0.14.1/pinetime-mcuboot-recovery-loader-dfu-0.14.1.zip), because to need this method, the recovery firmware must have been broken too!
  - I found that contact adhesive worked to replace the watch back once DFU capability was restored.
   