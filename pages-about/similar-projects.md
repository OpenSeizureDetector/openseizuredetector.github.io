---
layout: page
title: Similar Projects
---

There are several other projects with similar goals to OpenSeizureDetector.   I have tried to give a comparison of the ones I know about below.

I am happy to receive suggestions for others to add or corrections if I have got something wrong.

Please contact graham@openseizuredetector.org.uk if you think anything needs to be changed, or if you have a better reference for the performance of a device.

**Notes:**
- *Fault Detection* indicates whether the system detects device/link/alert failures to warn the user of problems rather than failing silently if it is not working.
- *Internet Dependency* distinguishes internet requirements for detection vs alerting purposes.
- Performance metrics are **not directly comparable** due to differing study designs and populations, but I have tried to quote published data where available.
- The table below is quite wide - there is a scroll bar at the bottom of the table to allow you to view the additional columns.

---

<div style="overflow-x: auto; width: 100%;">

<table>
<tr>
<th>Project</th>
<th>Hardware</th>
<th>Detection Method</th>
<th>Evidence</th>
<th>Fault Detection</th>
<th>Internet Dependency</th>
<th>Alerting</th>
<th>Cost (3yr)</th>
<th>Sensitivity (Tonic-Clonic Seizures)</th>
<th>False Alarm Rate</th>
<th>Study Context</th>
</tr>

<tr>
<td><b><a href="https://openseizuredetector.org.uk">Open Seizure Detector</a></b></td>
<td><a href="https://pine64.com/product/pinetime-smartwatch-sealed/">PineTime</a> / Garmin</td>
<td>Motion (frequency analysis and  Machine Learning (CNN)), HR Thresholds</td>
<td>Open source</td>
<td>Yes (watch ↔ phone monitoring)</td>
<td>None</td>
<td>Local alarm, SMS, WiFi</td>
<td>£35–£153 (no subscription)</td>
<td>~80% [6]</td>
<td>~1-2 per day for night time use [6]</td>
<td>Real-world usage</td>
</tr>

<tr>
<td><b><a href="https://www.empatica.com/epimonitor">Empatica EpiMonitor</a></b></td>
<td>EmbracePlus</td>
<td>ML (ACC + EDA)</td>
<td>Peer-reviewed [1]</td>
<td>Partial (cloud-dependent)</td>
<td>Required</td>
<td>SMS / call</td>
<td>~£728 (≈£299 + £143/yr)</td>
<td>~95% [1]</td>
<td>~0.25/day [1]</td>
<td>Multicentre clinical study</td>
</tr>

<tr>
<td><b><a href="https://www.seizalarm.com/">SeizAlarm</a></b></td>
<td>Apple Watch</td>
<td>Motion + HR thresholds [2]</td>
<td>Vendor</td>
<td>Unknown</td>
<td>Optional</td>
<td>Call, SMS, email</td>
<td>~£592 (≈£187 + £135/yr)</td>
<td>Not published</td>
<td>Not published</td>
<td>–</td>
</tr>

<tr>
<td><a href="https://smart-monitor.com/inspyre/">SmartMonitor Inspyre</a></td>
<td>Apple / Samsung</td>
<td>Rhythmic motion detection [3]</td>
<td>Published studies [3]</td>
<td>Partial</td>
<td>Optional</td>
<td>App, SMS, call</td>
<td>~£457 (≈£187 + £7.50/mo)</td>
<td>High (~100% small studies) [3]</td>
<td>Specificity >90% [3]</td>
<td>Small clinical studies</td>
</tr>

<tr>
<td><b><a href="https://www.nightwatch.care/">NightWatch+</a></b></td>
<td>Armband + base</td>
<td>ACC + PPG + posture filtering [5]</td>
<td>Peer-reviewed [5]</td>
<td>Partial</td>
<td>None</td>
<td>Local alarm</td>
<td>~£1,208 (no subscription)</td>
<td>~86% median [5]</td>
<td>Varies; see [5]</td>
<td>Prospective home study</td>
</tr>

<tr>
<td><b><a href="https://www.epilepsygroup.com/notes6-35-203/the-brain-sentinel-detecting-seizures-anywhere-and-anyt.htm">Brain Sentinel SPEAC</a></b></td>
<td>Arm EMG</td>
<td>sEMG muscle activity</td>
<td>Clinical / FDA-cleared</td>
<td>Unknown</td>
<td>Unknown</td>
<td>Caregiver alert</td>
<td>~£800+ (subscription unclear)</td>
<td>100% agreement [4]</td>
<td>~1.4/day [4]</td>
<td>Multicentre clinical</td>
</tr>

<tr>
<td><b><a href="https://www.epihunter.com/product">EpiHunter</a></b></td>
<td>EEG headband</td>
<td>EEG-based detection</td>
<td>Vendor + clinical</td>
<td>Unknown</td>
<td>Required (app/cloud)</td>
<td>App alerts</td>
<td>~£2,000+ (≈£59/mo subscription)</td>
<td>>90% (absence seizures) [7]</td>
<td>Not reported</td>
<td>Clinical + real-world</td>
</tr>

</table>

</div>

---

## Key Observations


- **Subscription models dominate commercial offerings**, often exceeding hardware cost over time.

- **Fault detection remains poorly specified** across nearly all commercial systems.

- **Internet dependence is often understated** Internet connectivity is required for many of the devices to deliver alerts - this could be an issue if it is to be used in a remote area.

---

## Important Note on Comparisons

> Even where performance numbers are available, they are **not directly comparable** due to differences in:
> - study design  
> - patient population  
> - seizure definitions  
> - validation environments  

We have tried to include available figures to give an indication of the likely performance comparison.

---

## References

[1] [Empatica seizure detection study (Epilepsia)](https://onlinelibrary.wiley.com/doi/10.1111/epi.13681) [1](https://www.sciencedaily.com/releases/2017/10/171031084830.htm)  
[2] [SeizAlarm documentation](https://www.seizalarm.com/false-alarm-reduction-tips)  
[3] [SmartMonitor study summary](https://epilepsysolutions.co.uk/inspyre-faqs)   
[4] [Brain Sentinel Summary](https://www.prweb.com/releases/brain_sentinel_s_speac_system_demonstrates_equivalence_in_sensitivity_to_detect_generalized_tonic_clonic_seizures_to_video_eeg/prweb14746451.htm)  
[5] [NightWatch study (Neurology)](https://nightwatchepilepsy.com/wp-content/uploads/2022/03/Neurology_NightWatch_Multimodal-nocturnal-seizure-detection-in-a-residential-care-setting.pdf)  
[6] [Analysis of OpenSeizureDetector using user-reported data](https://github.com/OpenSeizureDetector/Android_Pebble_SD/issues/240#issuecomment-4668560405) - a better reference to follow...
[7] [EpiHunter performance summary](https://www.epilepsysparks.com/epihunter)  

---