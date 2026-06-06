#!/bin/sh

#ncftpput -R -f ~/Dropbox/openseizuredetector.ftp /public_html/static/osd_pages _site/* 

#lftp -e "set ssl:verify-certificate no; open ftp.openseizuredetector.org.uk; mirror -R ./_site /public_html/static/osd_pages; quit"



# 1. Build the site specifically for the OSD web server
echo "Building site for OSD web server..."
bundle exec jekyll build --config _config.yml,_config_osd.yml

# 2. Upload only changed files using lftp
echo "Uploading to web server..."
lftp  -e "set ssl:verify-certificate no; open ftp.gb.stackcp.com; mirror -R --ignore-time --parallel=5 --delete ./_site /public_html/static/osd_pages; quit"

echo "Done!"
