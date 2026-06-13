---
layout: page
title: Data Sharing Set-up Instructions
---

# Data Sharing Set-up Instructions

This page shows the process of registering to share data with OpenSeizureDetector. The procedure for routine reporting of seizure-like events to the Data Sharing system once it is set up is shown on the [Reporting Seizures and False Alarms](/pages-user/data-sharing/reporting-events.html) page.

In outline, the set-up process is:

- Enable Data Sharing in the OpenSeizureDetector Android App settings.
- Register to create an account in the database
- Verify your account via email
- Login the OpenSeizureDetector Android App using your new account details.

## Enable Data Sharing

Data sharing should be enabled by default (but it will not work until you log in with a database account). To check this, open the OpenSeizureDetector App and select Settings from the main menu, then select the "Data Logging Settings" page.

Make sure that the following check boxes are enabled:

- Log Data
- Share Data

## Register a Data Sharing Account

From the OpenSeizureDetector main screen:

- Select the "Data Sharing Log-In" menu item (this will show the log-in screen)
- Press the "Register New User" button
- The New User Registration page at the web site https://osdapi.ddns.net/static/register.html will be displayed in your phone browser.
- Select a user name (this can be anything you want as long as it is unique in the database)
- Enter your first name, surname and email address. The email address must be a valid one, because the confirmation email is sent to this address.
- Select a suitably secure password.
- Press Submit

You should see a message to say that the new user account has been created and a confirmation email has been sent.

## Verify Account

Open your emails and look for an email from donotreply@osdapi.ddns.net. There is a good chance it will be in your Spam Folder (I don't know why!). The email asks you to click on a link at https://osdapi.ddns.net to confirm that you want an account to be created. Click on it to activate your new account.

You should see a web page that says that the account is verified ok and you can now log in.

## Login to Data Sharing Database

Go back to the OpenSeizureDetector Android App and:

- Select the "Data Sharing Log-In" menu item (this will show the log-in screen)
- Enter the username and password that you used when you created the new account
- Press the "Log In" button.
- If the details entered are accepted, the Log-in and Register buttons disappear and the screen shows a 'Logged In' message with a Back and a Logout button.
- Press the Back button to return to the Main Screen.
- The main screen should show the phrase "Data Sharing: Data Sharing Setup OK"

The system is now set up to upload any detected events (ALARM, WARNING, FALL or Manual Alarms) to the database, along with the raw data that generated the events.

By default it will not upload data over mobile internet connections to save using data that might be chargeable. If you have a large data allowance you might want to go into the settings and enable the "Use Mobile Internet" option in the Data Logging Settings screen. Then it will upload an event as soon as it is available, rather than waiting for a wifi connection.

## Video Walk-Through of the Process

Walk-Through of Enabling Data Sharing in OpenSeizureDetector Version 4
