---
layout: page
title: Getting Involved
---

# Getting Involved

If you would like to get involved in improving OpenSeizureDetector, that would be great! There is lots that could be done….but I don't have much spare time when my brain is working properly so most of it is not getting done. I have had a go at listing some things that I think would be most useful, and divided them into technical and non-technical areas – there is plenty of improvements that don't need any computer programming!

## Non-Technical

- **Contribute Data**: Saving the data logged by the system for real seizures and sharing it with the developer would be really really helpful as we need real data to be able to validate the detection algorithms and improve them.
- **Improve the documentation** (this web site) for non-technical users
  - I am very bad at writing for an end-user because I always want to know how things work so I understand what I am doing….but I know some people just prefer to be told what they have to do to get it to work.
  - You could suggest new text for any page, or suggest re-hashing the structure of the menu and pages to make them easier to understand.
- **Produce up to date 'how to' instruction videos** – again some people prefer video tutorials to written ones.
- **Translate the text in the App** – the android and garmin apps are now set up so they are easy to translate. The Polish one is pretty complete, but other languages are either only part done or not at all.
- **Improve or translate the Google Play store listing** – again making it easier for a non-technical user to understand what it is about would be good, and translating the text into different languages.

## Technical

- **Algorithm Development** – the algorithms to raise alarms based on movement, heart rate and fall detection are all fairly simple so it would be great to do some work looking at false alarm rate and detection reliability for different changes to the algorithms.
- **Support for other Watches**: The android app is set up so that it does not really care which device sends it data, so developing versions of the watch app that runs on different watches would be useful.
  - I know from bitter experience that getting something to work is not that difficult, but getting the reliability good enough that it re-connects if it goes out of range of the phone, and has good enough battery life is more of a challenge.
  - All a new watch needs to do is provide a Bluetooth Low Energy (BLE) 'Service' that the phone app can subscribe to, and then send accelerometer (and other parameters) data to the phone when it is available. The Widget that runs on a BangleJS watch is an example of doing this (see https://github.com/OpenSeizureDetector/BangleApps/tree/master/apps/openseizure)
  - Note that my main interest is in getting it to work on a very low cost device, so that is my priority, but I am happy to support anyone that would like to make it work on a Samsung Galaxy Watch or an Android Wear device.
- **Android App Improvements**: Please raise (or fix!) issues on the bug tracker on [github](https://github.com/OpenSeizureDetector/Android_Pebble_SD/issues).   I can also accept bug reports by email to graham@openseizuredetector.org.uk.

## Source Code

If you would like to look at the source code to see how it works it is here:

- [**Main Android App**: https://github.com/OpenSeizureDetector/Android_Pebble_SD](https://github.com/OpenSeizureDetector/Android_Pebble_SD)
- [**PineTime Watch Software**: https://github.com/OpenSeizureDetector/PineTimeSD](https://github.com/OpenSeizureDetector/PineTimeSD)
- [**PineTime Updater App**: https://github.com/OpenSeizureDetector/Android_PineTime_Updater](https://github.com/OpenSeizureDetector/Android_PineTime_Updater)
- [**Garmin Watch App**: https://github.com/OpenSeizureDetector/Garmin_SD](https://github.com/OpenSeizureDetector/Garmin_SD)
- [**SMS Annunciator App**: https://github.com/OpenSeizureDetector/SMSAnnunciator](https://github.com/OpenSeizureDetector/SMSAnnunciator)
- [**BangleJS Watch App**: https://github.com/OpenSeizureDetector/BangleApps/tree/master/apps/openseizure](https://github.com/OpenSeizureDetector/BangleApps/tree/master/apps/openseizure)
- [**Data Sharing Web API** https://github.com/OpenSeizureDetector/webApi](https://github.com/OpenSeizureDetector/webApi)

If you would like any more information, please get in touch: graham@openseizuredetector.org.uk
