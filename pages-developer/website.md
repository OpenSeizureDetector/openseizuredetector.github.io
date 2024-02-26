---
layout: default
title: OSD Web Site
---

# Web Sites
There are currently three web sites relating to OpenSeizureDetector:

   - [openseizuredetector.org.uk](#openseizuredetectororguk) - the original project web site.
   - [openseizuredetector.github.io](#openseizuredetectorgitubio) - this web site, which will replace the original.
   - [osdapi.ddns.net](#osdapiddnsnet) - Simple user registration site for the [Data Sharing](./data-sharing.md) system.

The struture of each is described below


## OpenSeizureDetector.gitub.io
This is web site is intended to be the replacement for the current rather random site at [OpenSeizureDetector.org.uk](https://openseizuredetector.org.uk).
It uses the Jekyl static site generation tool and its source files are stored on github in the
[openseizuredetector.github.io repository](https://github.com/OpenSeizureDetector/openseizuredetector.github.io).   This means it should be easier for users to suggest changes to the site and implement them using pull requests, compared to using wordpress.


The site is hosted on github pages at [openseizuredetector.github.io](https://openseizuredetector.github.io).

One unresolved issue with this approach is how to handle translations.


## Structure
  - The top level [index.md](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/blob/main/index.md) is the home page
  - The [pages-about](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/tree/main/pages-about) folder contains pages describing the background and goals of the project
  - The [pages-user](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/tree/main/pages-user) folder contains user installation and troubleshooting instructions.
  - The [pages-developer](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/tree/main/pages-developer) folder contains information for developers to guide them through the structure of the project and the various github repositories containing code for it.
  - The [assets/images](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/tree/main/assets/images) folder is used to store images
  - The [_data/navigation.yml](https://github.com/OpenSeizureDetector/openseizuredetector.github.io/blob/main/_data/navigation.yml) file is used to specify the items in the menu at the top of the page.

## Contributing Changes
  - Goto the github repository page: [openseizuredetector.github.io](https://openseizuredetector.github.io).
  - Click on the 'Fork' button to create your own copy of the repository.
  - Make the desired changes, either by checking out the repository to your local machine, or usin the github online editor, then commit your changes to your github copy of the repository.
  - In your github repository, press the 'Pull Requests' button, followed by the 'New pull request' button.
  - Review the changes that will be included, then press the 'Create pull request' button at the bottom of the page.
  - We will then review your proposal and get in touch if we think any changes are appropriate before including them.


### Credits
  - [Github pages](https://pages.github.com)
  - [Jekyl](https://jekyllrb.com/)
  - [PureCss](https://purecss.io/menus/)
  - [Modernist Theme by @orderedlist](https://pages-themes.github.io/modernist/)



## OsdApi.ddns.net
This site provides user registration utilities and the API for the Data Sharing system which is used to produce the Open Seizure Database.   It is a Django based system which runs on a small virtual server.   The source code is stored on github in the [WebAPI repository](https://github.com/OpenSeizureDetector/webApi).

## OpenSeizureDetector.org.uk
The curent [main web site](https://openseizuredetector.org.uk) uses Wordpress - static pages are stored as wordpress 'pages' and news items are stored as 'posts'.

There is a Polish version of the installation instructions.
