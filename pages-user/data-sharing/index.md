---
layout: page
title: Data Sharing (the Open Seizure Database)
---

# Data Sharing (the Open Seizure Database)

## What is Data Sharing?

Users of the [OpenSeizureDetector Android App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) have the option to share data associated with seizure-like events with researchers and developers in order to help improve seizure detection algorithms and systems. The objective is to improve the OpenSeizureDetector performance by increasing the seizure detection reliability and reducing the false alarm rate.

## Why Share Data?

The OpenSeizureDetector algorithm is tuned to detect movements that are consistent with a large tonic-clonic seizure. The detection parameters are tuned to give a balance between seizure detection reliability and false alarm rate. From the data collected to date, we know that the OpenSeizureDetector algorithm with its default settings will detect around 76% of all reported seizures. It does however generate a lot of false alarms for activities that involve repetitive movement (brushing teeth, cooking, cleaning etc.).

When Data Sharing is enabled the OpenSeizureDetector App will generate 'Events' when it detects seizure-like activities (which generate ALARMs or WARNINGs) or when the user reports a seizure manually. It will upload the event and the raw data associated with it to a database. The (anonymised) data in the database will be used by developers and researchers to improve seizure detection algorithms with the aim of improving seizure detection reliability and reducing false alarm frequency. This is likely to involve the training of Machine Learning ("Artificial Intelligence") models to better distinguish between the activities that generate false alarms and the genuine seizure events.

It is very important therefore that users mark their events as either genuine seizures or false alarms when they sign up to the Data Sharing system – without that we can not use the data as we do not know if it is a real seizure or not.

More information is provided in these [presentation slides](https://github.com/OpenSeizureDetector/Presentations/blob/master/02_Data_Sharing_Overview.pdf).

<iframe width="560" height="315" src="https://www.youtube.com/embed/_ZPD3bRMSr4?si=f-vS-3cJFDxreA-7https://www.youtube.com/embed/ZPD3bRMSr4" title="Data Sharing Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Setting up Data Sharing

You need to register an account with the Data Sharing database and then login the OpenSeizureDetector Android app to the database – see the detailed instructions on the [Data Sharing Set-up Instructions](/pages-user/data-sharing/data-sharing-setup.html) page. There is also a video showing a walk-through of the set-up process below:

### Walk-Through of Data Sharing Account Creation and Login

<iframe width="560" height="315" src="https://www.youtube.com/embed/tiFJEOcGb8Q" title="Walk-Through of Data Sharing account creation and login" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Reporting Seizure-Like Events

The automatic uploading of seizure-like events to the Data Sharing database is only useful to developers and researchers if users mark the events to say if they were genuine seizures or false alarms. This is because the objective of future developments will be to better distinguish between real seizures and seizure-like activities to reduce false alarms, as well as to improve detection reliability.

When Data Sharing is enabled, the app checks the database periodically to see if there are events that have not been marked as genuine seizures or false alarms. If there are, an additional notification is shown (the OpenSeizureDetector icon with a question mark '?' shown in front).

The instructions for marking events as real seizures or false alarms are given on the [Reporting Seizures and False Alarms](/pages-user/data-sharing/reporting-events.html) page. The video below shows how it is done using the OpenSeizureDetector Android App:

### How to Report Events

<iframe width="560" height="315" src="https://www.youtube.com/embed/nsQKEuLbVHU" title="How to Report Seizure Events" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Privacy Policy

All data that is shared with other researchers will be anonymised – you will only be identified as user number XXXX.

The System Administrator (Graham Jones, graham@openseizuredetector.org.uk) will have access to your name and email address that you used to register with the database. If we notice some particularly 'interesting' features of your data I may use this to ask if you would be happy to answer some questions about what was happening at the time of the event – you are allowed to say 'no'!

For full details of how OpenSeizureDetector collects and uses your personal data, please refer to the [OpenSeizureDetector Privacy Policy](/pages-about/privacy-policy.html).

If you decide that you do not want your data to be held on the database, please contact graham@openseizuredetector.org.uk and I will remove your data.

## Access to the Data

The data uploaded to the Data Sharing System is grouped into 3 minute periods to avoid duplication of data, tidied to remove unnecessary data fields and validated to check that the event does contain some valid data. For events reported as real seizures the data is inspected and the start and end of the seizure-like movement identified and the start and end times added into the database manually.

The database is made available to researchers who agree to a licence which means that they must credit OpenSeizureDetector contributors in their published work and publish a detailed description of the system they develop so that the OpenSeizureDetector project can benefit from their work.

If you are a researcher who is interested in working with the data, please see the description of the database and associated tools in the [OpenSeizureDatabase github repository](https://github.com/OpenSeizureDetector/OpenSeizureDatabase).
