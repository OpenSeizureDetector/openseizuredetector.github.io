---
layout: default
title: Garmin Watch App
---

# Garmin Watch App

## Source Code Repository

The ([GarminSD](https://github.com/OpenSeizureDetector/Garmin_SD)) watch app is stored in its own [github](https://github.com/OpenSeizureDetector/Garmin_SD) repository.

## Build Instructions

The app is written in 'MonkeyC' which is quite like C++ but with less reliable type checking.   You need the Garmin SDK which includes the compiler, libraries and emulators.   

The repository [README file](https://github.com/OpenSeizureDetector/Garmin_SD/blob/master/README.md) includes build instructions - I recommend using the Visual Studio Code method rather than the command line.

The 'develop' branch includes a new 'Dev Container' which is a build environment which contains the Garmin SDK and watch simulators and should allow you to compile and test the app without much configuration - we would appreciate feedback on whether this is true or not so we can update the devcontainer or documentation to make
it easier for future developers.

## Code Structure
### Source Code
The MonkeyC source files are in the [source](https://github.com/OpenSeizureDetector/Garmin_SD/tree/master/source) folder.

  - [GarminSDApp.mc](https://github.com/OpenSeizureDetector/Garmin_SD/blob/master/source/GarminSDApp.mc) is the app entry point.   It does the following:
    - Defines the application lifecycle callbacks (initialize() onStart(), onStop() and getInitialView().
    - Starts a timer which calls the onTick() function every second.
    - Declares mState which recorts the operating state of the app (used in other components)
    - getInitialView() specifies that the GarminSDView should be used for the initial display for the app.
  -  [GarminSDView.mc](https://github.com/OpenSeizureDetector/Garmin_SD/blob/master/source/GarminSDView.mc) handles drawing the display and interacting with user key presses.  It also starts GarminSDDataHandler which deals with receiving data from the sensors.
    - onTick() is called from the GarminSDApp onTick function - it decides whether to re-draw the screen or not - we re-draw the screen as little as possible to reduce battery consumption.
    - the SdDeligate class handles user interaction (menu selection, button presses etc.)
    - the GarminSDSettingsMenu and GarminSDSettingsMenuDeligate classes handle display and user interaction of the app settings menu.
  - [GarminSdDataHandler.mc](https://github.com/OpenSeizureDetector/Garmin_SD/blob/master/source/GarminSDDataHandler.mc)
    - Creates an instance of GarminSDComms to handle communications between the watch and the phone.
    - Starts the accelerometer collecting data.
    - Starts the heart rate and O2 saturation sensors if they are selected in the watch app settings.
    - accel_callback() is called whenever accelrometer data is available.   It adds the received data into a buffer and if the buffer is full, it sends the accelerometer data, heart rate and O2 saturation data to the phone using the GarminSdComms instance (mComms).
  - [GarminSdComms](https://github.com/OpenSeizureDetector/Garmin_SD/blob/master/source/GarminSDComms.mc) handles sending the collected data to the phone,  receiving the response from the phone and responding to the received response (alerting the user to an alarm state etc.)

### Resources
Text strings are stored in the resources folder.   Alternative language translations are stored in resorces-<lang ID> folders.


