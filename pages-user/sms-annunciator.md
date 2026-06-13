---
layout: page
title: SMS Annunciator – Installation and Usage Instructions
---

# SMS Annunciator – Installation and Usage Instructions

![OpenSeizureDetector Alarm System Summary Diagram](https://www.openseizuredetector.org.uk/wp-content/uploads/2020/09/diagram-1024x447.png)

## Purpose

The purpose of the SMS Annunciator is to generate a 'difficult to ignore' alarm sound on a carer's phone when an OpenSeizureDetector SMS Alert text message is received. It is useful because a normal text message notification sound is a short sound that does not repeat, so if you do not notice it, it may be some time before you realise a seizure alert has arrived.

## Hardware Requirements

The SMS Annunciator requires an Android phone running Android Version 4.4 or higher.

## Installation

Installation is slightly trickier than most Android Apps because I have not been able to publish it on Google Play Store. This is because it needs permission to read all incoming SMS messages (to see if they are a seizure alert or not), which is potentially a privacy issue.

I can assure users that the software scans the incoming messages, but all it does is look to see if they contain a code to signify that they are a seizure alert. If not they are ignored – see the Privacy Policy [here](/pages-about/privacy-policy.html). You can also check the source code – the relevant section is [here](https://github.com/OpenSeizureDetector/SMSAnnunciator/blob/81747c8d4025998641d82316ddb143eb8d073853/app/src/main/java/uk/org/openseizuredetector/sms_annunciator/SmsAnnunciatorService.java#L280).

To install the app, download the latest released .apk installation file (app-release.apk) to your phone from [here](https://github.com/OpenSeizureDetector/SMSAnnunciator/releases/latest).

Open the .apk file to install it. You may be prompted to allow apps to be installed from un-trusted sources (because it is not from Google Play Store). You will need to trust me and accept that (or build it from source yourself).

This should then install the app, which is a green icon version of the OpenSeizureDetector logo.

Make sure that the phone that is going to send the SMS seizure alerts has been updated to use [OpenSeizureDetector V3.6.0](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) or higher, which is essential for the SMS Annunciator to work.

## Usage

Start the app by pressing the Green OpenSeizureDetector icon.

The first time it is started, you will be prompted to accept the required permissions – in particular READ_SMS. It is essential that you accept this permission, or it will not work!

Start the SMS monitoring background service with the enable switch at the top of the main screen. A green OpenSeizureDetector icon should appear in the notification bar showing that it is active.

When an OpenSeizureDetector SMS alert is received, the main app screen will be started automatically and a large red 'accept' button shown. Alarm sound beeps will be issued continuously until the accept button is pressed.
