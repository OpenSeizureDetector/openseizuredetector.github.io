---
layout: default
---

#  Comparison of Current (21 Jan 2024) version so of OpenSeizureDetector on PineTime and BangleJS, compared to Garmin devices.

| Requirement | [PineTime](https://pine64.org/devices/pinetime/) | [BangleJS2](https://banglejs.com) | Android Wear |[Garmin](https://www.currys.co.uk/products/garmin-venu-sq-2-shadow-grey-and-slate-10242522.html) |
| ---       | ---              | ---               | ---          | -- |
| Send Accelerometer Data to Phone at 25 Hz | Working (but may be slightly more than 25Hz) | Working | Working (but needs to be configured and checked) | Working |
| Send Heart Rate Data to Phone at 0.2Hz | Working ok for normal movement - errors for large movements | Unreliable | Working ok for normal movement - errors for large movements | Very Good |
| Report battery level to phone | Working OK | Working OK | Working OK | Working OK |
| Mute Alarms from Watch | Not Yet Implemented | Not Yet Implemented | Working ok | Working ok |
| Report Seizure Detector Status on Watch Screen | Not Yet Implemented | Not Yet Implemented | Partially implemented |Working ok |
| Battery Life more than 12 hours | More than 24 hours | around 15 hours | Depends on watch - some are more than 24 hours | Depends on watch - some are more than 24 hours, others are close to 12 hours |
| Ease of Installation | Tricky - install gadgetbridge, pair with watch, download firmware, disconnect gadgetbridge, pair with OSD | OK - update firmware from web app store | Easy: install WearReceiver on phone and WearSd on Watch, connect watch to your Google Account | OK - copy firmware file onto watch via a computer |
| Cost (delivered to UK)        | ~ £35 (incl. delivery and taxes) | £76.80 | i.e. £ 109,95 (Samsung Watch 4) | £179 (VenuSQ 2) |

Given the very promising results from PineTime (especially battery life and heart rate monitor performance) and the much lower cost than the other devices, I intend to concentrate on getting PineTime to being ready for release for general users.   The first priority will be to sort out some simple installation instructions, then improve the user interface.

