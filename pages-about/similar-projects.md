---
layout: page
title: Similar Projects
---

There are several other projects with similar goals to OpenSeizureDetector. The table below provides links to project web pages, user feedback where available, and information on how they work and their approximate costs.
Note that the cost does not include a smartphone to use with it - I assume that most people will have a smartphone that they will use.

If you notice any errors or have suggestions for other projects to include, please email [graham@openseizuredetector.org.uk](mailto:graham@openseizuredetector.org.uk).


| Project | Watch / Hardware | Detection Method | Alerting | Comms Monitoring | Watch / Hardware Cost | Subscription | 3-Year Cost |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [**Open Seizure Detector**](https://openseizuredetector.org.uk) | [PineTime](https://pine64.com/product/pinetime-smartwatch-sealed/) | **Deterministic** (ACC frequency analysis & period-matching) or **Machine Learning** (CNN Trained on user-provided data) | Local Alarm, WiFi, SMS | Yes | £35 | £0 | £35 |
| [**Open Seizure Detector**](https://openseizuredetector.org.uk) | Garmin (e.g. Vivoactive 5) | **Deterministic** (ACC frequency + PPG heart rate thresholding) | Local Alarm, WiFi, SMS | Yes | £153 | £0 | £153 |
| **[Empatica EpiMonitor](https://www.empatica.com/epimonitor)** | EmbracePlus (Proprietary) | **Machine Learning** (Supervised Support Vector Machine Classifier) [[1]](https://onlinelibrary.wiley.com/doi/10.1111/epi.13681) | Phone Call, SMS (via internet) | Yes | ~£299 | From ~£13/mo (or £143/yr) | ~£728 (w/ annual plans) |
| **[SeizAlarm](https://www.seizalarm.com/)** | Apple Watch | **Deterministic** (User-defined thresholds for motion & heart rate) [[2]](https://www.seizalarm.com/false-alarm-reduction-tips) | Phone Call, SMS, Email (via internet) | Unknown | ~£187+ (Watch) | ~£13.50/mo (or £135/yr) | ~£592 (w/ annual plans) |
| **[SmartMonitor Inspyre](https://www.smart-monitor.com/inspyre/)** | Samsung or Apple Watch | **Deterministic** (Sustained rhythmic shaking frequency analysis) [[3]](https://www.tenovi.com/wearable-devices-for-epilepsy/) | App Notification, Call, Text | Yes | ~£187+ (Watch) | From ~£7.50/mo | ~£457 |
| **[Epipal](https://epipalapp.com/)** | Apple Watch or Wear OS | **Deterministic Heuristic** (Calculates movement/HR statistical deviations) [[4]](https://esebc.ca/seizure-alert-devices/) | App Notification, Emergency SMS & Location | Yes | ~£187+ (Watch) | Free basic / ~£7.50/mo Premium | ~£187 (Free) - ~£457 (Premium) |
| **[NightWatch+](https://www.nightwatch.care/)** | Armband & Base Station | **Deterministic Heuristic** (Multimodal ACC + PPG filtered by sleep position) [[5]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13006280/) | Local Audio/Visual Base Station | Yes | ~£1,208 | £0 | ~£1,208 |
| **[Pulse Companion](https://epilepsysolutions.co.uk/pulse-companion)** | Armband & Care Pager | **Deterministic** (Real-time optical PPG tachycardia / bradycardia thresholds) | Local Pager (up to 450m range) | Yes | ~£675 | £0 | ~£675 |
| **[SAMI](https://samialert.com/)** | Video Camera | **Deterministic** (Computer vision pixel variance / infrared motion analysis) [[4]](https://esebc.ca/seizure-alert-devices/) | WiFi App Alert | Unknown | ~£373 | £0 | ~£373 |
| **[Emfit QS](https://www.emfit.com/emfit-qs-for-care)** | Bed Sensor | **Deterministic** (Ballistocardiography/pressure variation analysis) | Local Audible Alarm | Unknown | ~£224 | £0 | ~£224 |

<p style="font-size: 0.85em; color: #555; line-height: 1.5;">
<strong>*Note on Currency Conversions:</strong> For international projects priced outside of the UK, conversions are approximated using current benchmark exchange rates of 1 USD = £0.75 and 1 EUR = £0.864. Local hardware pricing configurations (like the Apple Watch SE) are based on entry-level models.<br><br>
<strong>References & Algorithm Technical Notes:</strong><br>
<strong><a href="https://onlinelibrary.wiley.com/doi/10.1111/epi.13681">[1] Empatica Production Methodology (Onorati et al.):</a></strong> The real-time, FDA-cleared production detection framework relies on a classical supervised Machine Learning pipeline. The device extracts 29 specific time- and frequency-domain features from a 3-axis accelerometer (detecting rhythmic clonus) and electrodermal activity (EDA, tracking sympathetic arousal surges). These features are evaluated by an optimized linear Support Vector Machine (SVM) decision boundary to trigger an alert while filtering out non-seizure daily movements.<br>
<strong><a href="https://www.seizalarm.com/false-alarm-reduction-tips">[2] SeizAlarm Technical Execution:</a></strong> Runs an app-layer threshold monitoring system utilizing Apple's CoreMotion and HealthKit API frameworks. The application analyzes raw accelerometer data for sudden motion intensity spikes alongside a moving heart rate baseline, cross-checking if values breach user-configured absolute limits for a designated duration.<br>
<strong><a href="https://www.tenovi.com/wearable-devices-for-epilepsy/">[3] SmartMonitor Inspyre:</a></strong> Utilizes frequency-domain analysis of the triaxial accelerometer signal, specifically matching rhythmic oscillations between 3 to 8 Hz common to convulsive activity, using customized software filters to reduce false positives.<br>
<strong><a href="https://esebc.ca/seizure-alert-devices/">[4] App-Based Integration Ecosystems (ESEBC Directory):</a></strong> General comparative performance tracking for alternative direct app-to-watch installations like SAMI and Epipal, mapping movement/HR deviations against standard consumer-grade wearable sensors.<br>
<strong><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13006280/">[5] NightWatch+ Clinical Guidance:</a></strong> Uses a multi-sensor rule heuristic. Alerts trigger based on sudden heart rate variance or mechanical shaking, run through an algorithmic filter that checks the physical layout angle of the armband so that it only active-triggers when the user is horizontal (sleeping), reducing awake false alarms by roughly 70%.
</p>
Another good list comparing devices can be found on the [esebc.ca web site](https://esebc.ca/seizure-alert-devices)


### Discontinued or Inactive Projects

The following projects appear to be no longer available or have not been updated in a long time:
*   Epilepsy Solutions Smart Watch
*   Brio Watch
*   Epdetect
*   Pebble-based seizure detectors (Pebble watches are no longer produced)
*   Michael Long's "Epilepsee" project
*   Gerhard Mullenbeck's EpiAlarm

