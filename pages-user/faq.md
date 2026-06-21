---
layout: page
title: Frequently Asked Questions (FAQ)
---

# Frequently Asked Questions (FAQ)

## General

<h3 id="affordable">How Affordable is OpenSeizureDetector?</h3>

OpenSeizureDetector is designed to be the lowest-cost seizure detection system available:

- **Smartwatch**: [PineTime](https://pine64.com/product/pinetime-smartwatch-sealed/) (~£35)
- **Phone**: Any Android phone (from budget models at <£100, such as [Moto G06](https://www.argos.co.uk/product/7835498?clickPR=plp:16:208))
- **No subscriptions**: Everything runs locally on your devices
- **No cloud fees**: Complete control, no recurring costs

This means a whole system using OpenSeizureDetector will cost much less than a commercial seizure detector which cost several hundred pounds with monthly subscriptions. We do this by using low cost consumer devices, and keeping development completely volunteer-driven.

<h3 id="open-source">Why is Open Source Important?</h3>

Being open source means:

- **Transparency**: You can see exactly how seizure detection works by examining the [Source Code](https://github.com/OpenSeizureDetector/Android_Pebble_SD)
- **No hidden tracking**: No telemetry, no hidden data collection (*), no corporate surveillance
- **Freedom to modify**: You can customize the software and detection algorithm for your needs
- **Community improvement**: Anyone can contribute improvements
- **Long-term sustainability**: The project can't disappear if the company does
- **Security auditing**: Developers and security researchers can verify safety

(*) Users can voluntarily [contribute data](./data-sharing/index.html) to help us improve seizure detecton algorithms.

<h3 id="does-it-work">Does it Work?</h3>

Yes. In June 2022 we introduced the [Data Sharing](/pages-user/data-sharing/index.html) system so users can upload data and report it as either a genuine seizure or a false alarm. We can analyse this data to determine what proportion of seizures were detected correctly. This analysis shows that:

- OpenSeizureDetector has a real-world [detection reliability of about 81% for tonic-clonic seizures](./PineTime_Performance_Report.pdf), based on our experience testing the PineTime watch before releasing it for users.
- Has a detection reliability of about 75% for all seizures.

The biggest issue users find with OpenSeizureDetector is not it failing to detect tonic-clonic seizures, but false alarms.   We find the false alarm rate for night time use to be acceptable (we get one or 2 per day), but some activities such as brushing teeth or using hand tools will set it off.

The Machine Learning (Artificial Intelligence) seizure detection algorithm which the recommended seizure detection algorithm for OpenSeizureDetector V5 onwards, is showing even better performance with less false alarms.

Note though that it has not been subjected to formal clinical trials and the [Open Source License](https://github.com/OpenSeizureDetector/Android_Pebble_SD/blob/master/LICENCE.txt) for OpenSeizureDetector states that as free software, it does not come with any warranty.

### Will it Detect Absence Seizures?

No – it detects repetitive movement or abnormal heart rate, which are unlikely to be symptoms of an absence seizure.

### Does it Detect Falls?

There is a simple fall detection algorithm built into OpenSeizureDetector. It is not well tested though and gives a lot of false alarms, so I would not recommend using it unless you want to help develop a reliable algorithm.

There are probably other apps available that will detect a fall more reliably than OpenSeizureDetector.

### How Many Carers can be notified by SMS Text Message?

There is no limit on the number of carers that can receive SMS text message alerts – separate their numbers with commas (,) to form a list in the settings screen.

### Can it alert carers using phone calls rather than text messages?

No – I do not want to rely on external servers which would reduce the alarm reliability so the only thing we could do is initiate a phone call from the user's phone to the carer's phone. This is technically possible – I have had a version working that does it, but there are obvious privacy concerns so it is not published.

As an alternative we have produced an '[SMS Annunciator](/pages-user/sms-annunciator.html)' app that the carer can run on his/her phone which will generate an annoying alarm notification sound if an OpenSeizureDetector SMS alert is received – this will improve the likelihood of the carer hearing the notification rather than using the system SMS notification sound.

### What are Wifi Alerts for?

If the carer is in the same house as the person at risk from seizures, the best way of notifying them is to use the Wifi alert system rather than SMS text messages – this is because to use that you do not need any external network infrastructure to work – all you need is the local wifi network with no external connection required. The carer installs the OpenSeizureDetector phone app on his/her phone or device, and connects to the user's phone using the 'Network Data Source' settings.

### What Specification of Phone is Required?

To use the Garmin based seizure detector, the phone must be able to run the [Garmin Connect app](https://play.google.com/store/apps/details?id=com.garmin.android.apps.connectmobile&hl=en&gl=US). This needs Android V7 or higher, and must be the full version of Android, not the 'Go' edition.

We have had issues with some of the Chinese brand phones having different security features, so avoid phones by Huawei and Xiaomi.

I use a low-end Samsung such as an A15 for our 'production' system and that works ok..

### Does it work on an iPhone?

No. I am trying to create the lowest cost seizure detector possible and iPhone hardware is very expensive for what you get, so Android is more suitable. If you really want to use an iPhone, there is a seizure detector available for it ([SeizAlarm](https://seizalarm.com/)) which is similar to OpenSeizureDetector (but it is commercial software so there is a monthly subscription for it).

### Does it work on Samsung Watches?

No, they use a completely different operating system to Garmin watches so would need a new watch app writing for them. I am keen to produce the lowest cost seizure detector possible, so I am not particularly driven to support more expensive watches – I am working more on using lower cost devices as an alternative to Garmin.

The app that would need to run on the Samsung watch would not need to be complicated though so if someone would like to develop it, I will happily incorporate it into OpenSeizureDetector and add the instructions etc. to this web site – please get in touch if you would like to do this. A user (AroonPro) is working on this at the moment (2023) but it is not yet ready for user testing.

### Can we reduce the number of False Alarms?

Yes, but note that it will always be a trade off between reliability of detection of a real seizure and false alarm rate. 

The default settings for the original OSD algorithm are set to be quite sensitive to give users confidence that it will detect a real seizure. Increasing the Alarm Threshold value from the default 100 to around 800 will reduce the number of false alarms by inhibiting the seizure detection until there is more movement detected...but this does reduce the ability to detect seizures of the watch is trapped under the body so not moving very much.

There are some activities that will always give seizure detected alarms though because they have movement similar to the movement we are trying to detect for a seizure (3-8Hz variation) – these include brushing teeth, touch typing and putting your arm on the bodywork of a moving car. There is a Mute function on the watch that you can use to prevent it alarming if you know you are about to do an activity that would raise an alarm.

From Version 5 of OpenSeizureDetector we have introduced the ability to download Machine Learning (ML) models (some would call them 'Artificial Intelligence' / 'AI').   We will train these models using data donated by users via our [Data Sharing](/pages-user/data-sharing/index.html) programme.
The one which is being introduced with Version 5 does give reduced false alarms for some activities, but still alarms for others (such as riding in a vehicle or using hand tools).

If false alarm rate is a serious issue for you, you might want to consider the [Empatica Embrace](https://empatica.com/) watch – this uses a machine learning seizure detection algorithm that is trained on a lot more data than we have available, so it should have a better false alarm rate – I do not know if this is actually the case or not though!


### How Can I Help?

Please enable the [Data Sharing](/pages-user/data-sharing/index.html) feature which will enable you to record data associated false alarms and genuine seizures – we will use this data to improve the detection algorithms to improve detection reliability and reduce false alarm rate.

There are two key areas that less technical users could help – Translations and Documentation.

I would value contributions to documentation in particular because it is very difficult to write documentation for an end-user – I keep trying to describe how it works, not how to use it!

If you are in to programming, please get in touch and we can agree what you would like to do.

Please see the [Getting Involved](/pages-about/getting-involved.html) page for more information.

### Can you Offer Telephone Support?

No, sorry – email support suits me best because I can do that between work and family commitments – to do a telephone call would need us both to be free at the same time.

### Do You Record and Share Personal Data?

The new Data Sharing system allows you to record data from the system to a database that will be used by developers and researchers to improve seizure detector algorithms to improve detection reliability and reduce false alarm rate.

Data will only be shared in an anonymised way, so researchers will only know you by a unique ID number, not name.

The system administrator (Graham Jones) will have access to your name and email address. These will not be shared with third parties but may be used to ask if you are willing to provide additional information on activities that cause false alarms etc. Please see the [OpenSeizureDetector Privacy Policy](/pages-about/privacy-policy.html) page for full details.

## PineTime Watch Seizure Detector

### What is PineTime, I have never heard of it?

PineTime is an open source smart watch manufactured by [Pine64](https://pine64.org/devices/pinetime/). They can be ordered off the [Pine64 web site](https://pine64.com/product/pinetime-smartwatch-sealed/) and ship from China, so take about 3 weeks to deliver to Europe and costs about £35 shipped to the UK.

### Why do you Recommend the PineTime Watch?

I have never been happy with having to use Garmin watches for OpenSeizureDetector because they are expensive, the setup process is quite complicated, and you have to run the OpenSeizureDetector App in the watch foreground, so you can not use the watch for anything else at the same time.

I was starting to look at designing and manufacturing my own wearable device that would meet the requirements of OpenSeizureDetector and not be too expensive. This was going to be very difficult because companies like Garmin and Fitbit have very clever engineers and designers working on their devices, so I would have struggled to make something that worked as well and was as compact as one of their watches.

Then by chance I discovered [PineTime](https://pine64.com/product/pinetime-smartwatch-sealed/) which is an open source device with quite a lot of keen developers working on software for it. I found that PineTime was over 80% of what I would have made myself (the only things it lacks are an oxygen saturation sensor and a skin temperature sensor, which I would have included). So I modified the InfiniTime software that had been developed for the watch so that it provides access to the accelerometer and heart rate data needed for OpenSeizureDetector. I found that the performance for seizure detection was as good as the Garmin watch we were using, with the only downside being the heart rate monitor is not as good as Garmin because it is affected by movement more than the Garmin ones. We switched to using PineTime for our Son in about May 2024 so I would be confident that it works before recommending other people use it.

The set-up of PineTime was still rather complicated though, needing you to download files and connect using a different app to OpenSeizureDetector. Therefore in late 2025 we produced a dedicated [OpenSeizureDetector PineTime app](https://play.google.com/store/apps/details?id=uk.org.openseizuredetector.pinetime&pli=1) which will download the required software and install it on a PineTime watch with minimal user interaction, making the installation process much simpler.

The upcoming Version 5.0 of the OpenSeizureDetector phone app will make the installation process even more straightforward with a setup 'wizard' to guide a new user through setting up the system.

So on the basis of cost, the demonstrated seizure detection reliability of PineTime and the simpler installation process compared to Garmin, I recommend that all new users try PineTime first.

The one situation where I would still recommend using a Garmin watch is if you want to detect seizures that do not involve much movement, or if you have too much trouble with movement generated false alarms and want to use Heart Rate alarms instead. This is because the Garmin heart rate monitors are much less affected by movement than the current PineTime one, so is more suited to seizure detection.

If I get time I hope to do some research to improve the PineTime one with a software fix.

## Garmin Seizure Detector

### Watch Error Codes

The watch will sometimes display an error code such as ERR -400. These errors come from the Garmin Software and indicate that the watch can not communicate with the OpenSeizureDetector Phone App for some reason.

Possible errors and their causes are listed below:

| Error Code | Meaning | Possible Cause |
| --- | --- | --- |
| ERR 0 | Unknown Error | Using an old version of the Garmin Watch App that is not compatible with recent versions of the Garmin Connect Phone App. |
| ERR -104 | BLE Connection Unavailable | Bluetooth is not switched on on the phone, or the watch is not connected to the phone using the Garmin Connect Phone App. OR the Android system has shut down the OpenSeizureDetector app to save battery – make sure that OpenSeizureDetector battery usage is NOT optimised by the Android System. |
| ERR -300 | Network Request Timed Out | The watch did not manage to connect to the OpenSeizureDetector Phone App – is the phone app running (showing icon in phone status bar) – some phones shutdown apps to save power, so OpenSeizureDetector must be 'protected' in the phone settings. OR the Android system has shut down the OpenSeizureDetector app to save battery – make sure that OpenSeizureDetector battery usage is NOT optimised by the Android System. |

The complete list of possible error codes is given on the Garmin web site: [https://developer.garmin.com/connect-iq/api-docs/Toybox/Communications.html](https://developer.garmin.com/connect-iq/api-docs/Toybox/Communications.html)

### FAULT Displayed on Watch and Phone

If the watch is connected to the phone correctly using Garmin Connect, but the phone and watch app both display 'FAULT', check that the Data Source has been set to 'Garmin' rather than the default 'Pebble'.

### Can you use the other Watch Functions (Recording Running etc.) at the same time as using it for OpenSeizureDetector?

No – the OpenSeizureDetector watch app needs to run in the foreground on the watch so you can not select another watch app such as 'Running'.

I do not think it is possible to write a background process on the Garmin software system, but if I am wrong and someone can point me in the right direction I will be happy to make it a background process.

The watch will receive notifications from the phone while OpenSeizureDetector is running, but this interferes with the OpenSeizureDetector data transfer. I recommend therefore that watch notifications are disabled when running OpenSeizureDetector.

### Watch App Shuts Down after a while

A user has reported this as a problem on a Fenix 6 – it seems there is a power saving feature that will shut down an app that it thinks is not doing anything – this can be solved in the watch settings.

## Other Watches

### BangleJS

We have a version for a watch called [BangleJS](https://banglejs.com/) where OpenSeizureDetector can run as a 'widget' on the watch face, so you can customise the watch face etc and still use OpenSeizureDetector with it – please get in touch if you are interested in trying it.


## Contact

To get in touch please email graham@openseizuredetector.org.uk

<script>
document.addEventListener('DOMContentLoaded', function(){
	if (!/faq/i.test(window.location.pathname)) return;
	var container = document.querySelector('.page-content') || document.querySelector('.section-content') || document.querySelector('main.site-main');
	if (!container) return;
	// Collect heading nodes first to avoid live DOM issues
	var headers = Array.from(container.querySelectorAll('h3'));
	headers.forEach(function(h3){
		// Create details/summary wrapper
		var details = document.createElement('details');
		details.className = 'faq-item';
		var summary = document.createElement('summary');
		summary.className = 'faq-q';
		summary.innerHTML = h3.innerHTML;
		details.appendChild(summary);

		// Move following siblings into the answer container until next h2 or h3
		var contentWrap = document.createElement('div');
		contentWrap.className = 'faq-a';
		var node = h3.nextSibling;
		while(node && !(node.nodeType===1 && (node.tagName.toLowerCase()==='h3' || node.tagName.toLowerCase()==='h2'))){
			var next = node.nextSibling;
			contentWrap.appendChild(node);
			node = next;
		}
		details.appendChild(contentWrap);
		h3.parentNode.replaceChild(details, h3);
	});
});
</script>
