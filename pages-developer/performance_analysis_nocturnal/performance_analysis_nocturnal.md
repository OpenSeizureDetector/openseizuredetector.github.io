---
layout: default
title: Analysis of the Performance of OpenSeizureDetector for Nocturnal Use
---

# Introduction
We know that at least one user (User #39) has recorded all of their (known) seizures and false alarms into the Data Sharing database since the Data Sharing feature was added to OpenSeizureDetector in 2022.    This particular user only uses OpenSeizureDetector when alone in his room and not during normal daytime activities when a carer is always with him.    This dataset therefore provides the opportunity to assess the performance of OpenSeizureDetector in real-world operation for nocturnal seizure monitoring.

Note that this user also utilises a video monitor to allow carers to identify seizures in addition to OpenSeizureDetector.   It is often the case that the carers are alerted to a seizure by unusual sounds or by noticing an unusual posture during the 'tonic' phase of the seizure before OpenSeizureDetector alarms during the 'clonic', shaking part of the seizure.   This has caused some seizures to be reported and included in the database which were not detected by OSD.

It is possible that there were more seizures than were recorded in the database if both OSD and the manual observation missed them.  However from experience the vast marjority of seizures occur on waking the carers are accustomed to listening for unusual sounds around waking time, so believe that the number of missed seizures will be low.

The purpose of this analysis is to present the 'real world' performance of OpenSeizureDetector (seizure detection reliability and false alarm rate) so that prospective users can know what to expect in terms of performance and can compare that to other open source or commercially available devices (where they publish similar data for their systems).

# Methodology

This analysis is based on Version 1.7 of the [Open Seizure Database](https://www.openseizuredetector.org.uk/?page_id=1818), with the data of this one particular user extracted from the .csv index files which are provided with the database releases.    Note that it could have been performed by analysing the detailed .JSON files which contain all of the seizure data, but the index files provide sufficient information that this is not necessary.


The 'All Seizures' file was used to determine whether OpenSeizureDetector had correctly identified each seizure or not, so the detection reliability can be calculated  

The False Alarms file was used to determine the false alarm rate (false alarms per day).   These calculations were performed by importing the Open Seizure Database Index .csv files into [LibreOffice](https://libreoffice.org) Calc and using a combination of pivot tables and simple formulae.


# Results

The database for user #39 contained seizures on 55 days between February 2022 and October 2024.   The data was analysed in terms of days because the database sometimes includes data for a seizure and also a period of recovery immediately afterwards which can appear as two separate events.   For the purpose of this analysis we treat those as a single seizure event.
The time between seizures varies significantly, but averages at about 18 days between seizures as shown below:
![Seizure Spacing](./Seizure_Spacing_Graph.png)

Many of the seizures were categorised as type 'Other' with a text description which generally describes it as being a partial seizure affecting only one side, often with the arm 'flapping' rather than shaking as would be expected in a tonic-clonic seizure.

The user did however record 20 seizures as 'Tonic-Clonic'.

## Detection Reliability
### Tonic-Clonic Seizures
17 out of the 20 tonic-clonic seizures generated a full alarm so were a successful detection.
Of the three failures, the movement for one was described as 'flapping' so a lower frequency movement than expected for a tonic-clonic seizure.   The other two describe the user lying on the front, which could limit the movement of the watch arm compared to lying on the back.

A success rate of 17 out of 20 is an 85% detection reliabililty for tonic-clonic seizures.

### All Seizures
Each seizure is plotted on the graph below with a vertical axis value of 1 if it generated a full alarm and zero if it failed to alarm.   A rolling average over 10 seizures is calculated to give a time varying seizure detection reliability as shown below.

![Detection Reliability](./Detection_Reliability_Graph.png)

It can be seen that at the start of the period, the overall detection reliability was low (20%) because only the tonic-clonic seizures were generating full alarms with the partial seizures not being detected.



## False Alarm Rate

![False Alarms Graph](./False_Alarms_Graph.png)




# Discussion


# Conclusion



see [watch-comparison.html](./watch-comparison.html) for a comparison of the current status of development of OpenSeizureDetector for various devices





## Open Seizure Database