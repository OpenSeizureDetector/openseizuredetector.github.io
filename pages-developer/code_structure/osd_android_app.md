---
layout: default
title: OSD Android App
---

# OSD Android App

## App Structure

### Start Up
  - Clicking on the launcher icon to start the app launches the Startup Activity (StartupActivity.java)
  - The onCreate() function:
    - Creates the user interface from layouts/startup_activity.xml
    - Sets default values for the various settings, based on the settings definition xml files.
    - Configures the app to keep the screen switched on
    - Defines the callbacks for the user interface buttons.
  - The onStart() function does the following:
    - Sets some of the text in the user interface from the app preferences.
    - If the background server is already running, stop it (this is to try to give us a clean start when the user clicks on the launcher icon - we have had problems with having two versions of the background service running at once etc.)
    - Sets the mMode variable to show if we are in the process of shutting down the background service, or if we are ready to start it.
    - Checks if the app battery usage is 'optimised' and displays a warning dialog if it is, as it will stop it working properly.
    - If this is the first time the user has run this version of the app, display a dialog with some information about what has changed.
    - Starts a timer that will refresh the user interface every 2 seconds by calling the serverStatusRunnable() function.
  - The serverStatusRunnable() function:
    - does a lot of checks to see if the system is working correctly.
    - if the background service is not running, it starts it.
    - ..then waits for data to arrive etc.
    - Once everything is ok, it starts MainActivity (or MainActivity2), and exits StartupActivity.

### MainActivity2
  - The main activity is started either when StartUpActivity detects everything is running correclty, or if the user clicks on the icon in the system tray to bring the app to the foreground.
  - The onCreate() function:
    - creates the User Interface from the layouts/activity_main2.xml file.
    - creates a connection to the background service by creating an SdServiceConnection
  - The onStart() function:
    - binds to the background service by calling mUtil.bindToServer()
  - the onResume() function:
    - Initialises the various user interface 'Fragments' which actually do things.

  Note:  Each fragment binds to the background service independently.  This makes stopping the system difficult because they all have to un-bind.   It is probably better to modify this so that the main activity shares its SdServiceConnection with the fragments rather than each fragment creating their own.

  ### SdServer
  SdServer is the business part of the application.  *This must be very reliable because it does all of the self-checking to make sure the system is operating correctly - if it crashes we will not receive fault 'pips' to tell the user there is something wrong.*

  - The onCreate() function:
    - Creates the ToneGenerator to make the alarm sounds.
    - Applies a wake lock to prevent the app going to sleep
    - Creates the system tray notification.
  - The onStartCommand() function:
    - Reads the user preferences from storage.
    - Creates an instance of SdDataSource based on the data source selected in the user preferences, and starts the data source.
    - Creates a LogManager to log data to a local database (and also the data sharing system if the user has enabled this).
    - Starts an 'events timer' to log seizure events to the remote database if this is selected by the user.
    - Starts a web server which runs on the phone (SdWebServer class)
    - The seizure detection happens in the SdDataSource class.  Every time a set of data is received, it calls the onSdDataReceived() function in SdServer.
  - The on SdDataReceived() function:
    - checks the alarmState in the sdData class which is passed from SdDataSource to define whether we should be alarming or not.
    - if no alarm is required (alarmState == 0), sets the alarm phrase to OK and updates the notification.
    - if we are in a WARNING state (alarmState == 1), gives a warning Beep
    - if we are in an ALARM state (alarmState == 2):
      - gives an alarm beep
      - updates the notification to show the alarm state
      - brings the Main Activity to the front of the screen.
      - Sents an SMS alarm (if selected by the user)
    - if we are in a FAULT condition (alarmState == 4), produces a fault warning pip.
    - it also deals with heart rate alarms etc.

    The SdDataSource is an abstract class, with sub-classes for each supported data source
    The main SdDataSource class contains the doAnalysis() function which performs the seizure detection analysis on a 5 second sample of data provided from the data source.

    The sub-classes of SdDataSource deal with interfacing with the watch hardware.   Note that the Garmin data source (SdDataSourceGarmin) actually receives data from the web server rather than receiving it directly.




