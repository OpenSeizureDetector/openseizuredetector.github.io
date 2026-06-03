# New OpenSeizureDetector Web Site (2024)
This repository is the source for the new OpenSeizureDetector project web site (https://openseizuredetector.github.io).

Please see the [website page](https://openseizuredetector.github.io/pages-developer/website.html#openseizuredetector.github.io) for advice on contributing changes to the site content or structure.

## Building and Deploying on Linux

### Prerequisites

Before you can build and deploy the website, you need to install the following:

#### 1. Ruby and Development Tools

The website uses Jekyll, which requires Ruby and build tools:

```bash
# For Ubuntu/Debian:
sudo apt-get update
sudo apt-get install ruby ruby-dev build-essential

# For Fedora/RHEL:
sudo dnf install ruby ruby-devel gcc gcc-c++ make

# For Arch:
sudo pacman -S ruby base-devel
```

#### 2. Jekyll and Dependencies

Install Jekyll and all required gems using Bundler:

```bash
# Install Bundler if not already installed
gem install bundler

# Navigate to the website directory
cd /path/to/web_site_new

# Install Jekyll and all dependencies from Gemfile
bundle install
```

#### 3. FTP Tools (for deployment only)

If you plan to deploy the website, install lftp:

```bash
# For Ubuntu/Debian:
sudo apt-get install lftp

# For Fedora/RHEL:
sudo dnf install lftp

# For Arch:
sudo pacman -S lftp
```

### Configuration Files

The website uses two Jekyll configuration files:

- **_config.yml**: The main configuration file containing site title, description, plugins, and GitHub repository settings. This is used for the default GitHub Pages build.
- **_config_osd.yml**: An override configuration file specifically for the OSD web server deployment. It sets:
  - `url`: The full URL of the OSD website (`https://openseizuredetector.org.uk`)
  - `baseurl`: The deployment path on the server (`/static/osd_pages`)

When building for deployment, both configs are passed to Jekyll using `--config _config.yml,_config_osd.yml`, which merges them (with _config_osd.yml values overriding _config.yml where there are conflicts). This ensures the site is built with correct URLs and paths for the OSD server.

### Building the Website

To build the website locally for testing:

```bash
# Using bundler (recommended)
bundle exec jekyll build

# The built site will be generated in the _site/ directory
```

You can also build and serve the site locally:

```bash
bundle exec jekyll serve
# The site will be available at http://localhost:4000
```

This uses only _config.yml for local development, which is appropriate for testing content and structure.

### Deploying the Website

To deploy the website to the OSD web server:

```bash
./upload.sh
```

The `upload.sh` script will:
1. Build the website using Jekyll with the appropriate configuration files
2. Upload the generated site to the OSD web server using FTP
3. Only upload changed files (using mirror with --ignore-time and --parallel=5 for efficiency)
4. Remove any files from the server that are no longer in the local build

#### FTP Credentials Setup

The upload process uses `lftp` to connect to the FTP server. You need to set up your FTP credentials in one of these ways:

**Option 1: Interactive Prompt (Easiest)**
When you run `./upload.sh`, lftp will prompt you for your username and password interactively. Simply enter them when prompted.

**Option 2: Netrc File (Recommended for automated deploys)**
Create or edit `~/.netrc` (in your home directory) to store FTP credentials:

```bash
# Create or edit the .netrc file with your editor
nano ~/.netrc
```

Add the following content to the file:

```
machine ftp.openseizuredetector.org.uk
login your_username
password your_password
```

Replace `your_username` and `your_password` with your actual FTP credentials.

**Secure the credentials file:**

```bash
# Restrict permissions so only you can read the file
chmod 600 ~/.netrc
```

**Note:** You must have valid FTP credentials for `ftp.openseizuredetector.org.uk` to deploy the website.

### Workflow Summary

```bash
# 1. Make changes to the website source files
# 2. Test locally (optional)
bundle exec jekyll serve

# 3. Deploy to production
./upload.sh
```

---

graham@openseizuredetector.org.uk

