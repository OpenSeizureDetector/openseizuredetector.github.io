---
layout: page
title: OpenSeizureDetector Components
---

# OpenSeizureDetector Components

![OpenSeizureDetector Alarm System Summary Diagram](https://www.openseizuredetector.org.uk/wp-content/uploads/2020/09/diagram-1024x447.png)

OpenSeizureDetector is a system to Monitor the user; Assess the data for seizure-like conditions and Alert care givers of the possible seizure as described below:

## Monitor

Measure Parameters such as movement and heart rate. For this we use a smart watch such as a [Garmin Vivoactive 3](https://www.amazon.co.uk/Garmin-Vivoactive-Smartwatch-Built-Sports/dp/B07MLQS3J1/ref=sr_1_3?dchild=1&keywords=vivoactive+3&qid=1600621976&sr=8-3), which runs a custom [OpenSeizureDetector Watch App](https://github.com/OpenSeizureDetector/Garmin_SD/releases/latest).

## Assess

Analyse the measured data to determine if this represents a 'seizure-like' condition. This is done using an Android Phone running the [OpenSeizureDetector Phone App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector). The phone will generate local alarms by beeping when a seizure is detected. It also monitors for system faults and will emit fault 'pip' sounds if the system is not working correctly so the user is prompted to investigate the problem.

## Alert

Generate alarms to alert care givers that the user may have suffered a seizure and need assistance. This can be achieved in several ways:

- **Local Alarms** – the [OpenSeizureDetector Phone App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) will generate alarm beeps.
- **Wifi (Optional)** – Other android devices connected to the same wifi network as the main seizure detector phone can run the [OpenSeizureDetector Phone App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) in 'Network Data Source' mode. This makes them emit the same alarm and fault sounds as the main phone.
- **SMS Alert Text Messages (Optional)** - the [OpenSeizureDetector Phone App](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector) can be configured to send SMS alert text messages to any number of phone numbers when a seizure is detected. It sends two messages. The first is a simple 'Seizure Detected' message. About a minute later a second message is sent which contains a Google Maps link to the user's location. Any active mobile phone can receive the SMS Alert Text messages, because they are standard SMS messages.
- **SMS Alarms (Optional)** - The OpenSeizureDetector [SMS Annunciator app](https://github.com/OpenSeizureDetector/SMSAnnunciator/releases/latest) can be installed on the carer's android phone to monitor for SMS alert text messages. If one is received it will generate continuous alarm beeps until the user acknowledges the alarm by pressing an on-screen button.

## Demonstration

You can see a demonstration of some the monitoring, assessment and alert functions in action in this video: [https://www.youtube.com/watch?v=tsygFTmAuuU&t=12s](https://www.youtube.com/watch?v=tsygFTmAuuU&t=12s).

Please contact graham@openseizuredetector.org.uk with any queries.
