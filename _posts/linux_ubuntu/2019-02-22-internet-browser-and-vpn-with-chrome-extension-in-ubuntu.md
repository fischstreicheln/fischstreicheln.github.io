---
layout: post
title: "Internet Browser and VPN with Chrome Extension in Ubuntu"
ref: "Internet Browser and VPN with Chrome Extension in Ubuntu"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: browser vpn
author: Jason
date: 2019-02-22
last-update: 2019-02-23
img: warty-final-ubuntu.png
---

> {% include ref/more-about.html ref = "Language Settings and Pinyin Input Method in Ubuntu" lang = page.lang direction = "last" %}

**Firefox**, the default browser come with Ubuntu installation, is a fine browser
for us. Yet, we always want more. So I install **Chrome** and **Opera** too.

## Chrome
Chrome installation, in all operating platform, is easy. Even if VPN connection
is not available and <https://www.google.com> is blocked by *some reasons*, the
deb package could be downloaded with the following link <https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb>
or with the following command in **Terminal**.
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

After downloading the deb package, installation could be performed in such ways:
- *Option 1*: Double click the deb package to install from **Ubuntu Software Panel**.
- *Option 2*: Install with ```sudo dpkg -i google-chrome-stable_current_amd64.deb```.
  In such way, error might be occurred during installation. Use ```sudo apt-get -f
  install``` to fix dependency and execute the installation command again to finish.


## VPN with Chrome Extension (Optional obviously!)
**Google** is a great *search engine*, better than **Baidu** in English search
*~~and any other kinds of search except Chinese search~~*. However, **Google**
requires *VPN connection* to access *~~in some places~~*. Here recommending a VPN
service with **Chrome Extension** - **SSLspeedy** using account of **1997o.com**
*(it changes all the time!)*.
- Add temporary extension to get access to the **Chrome web store**
  - Download temporary extension file from <https://1997o.com/downloads/SSLspeedy4InstallOnly.zip>,
  - Extract to local path which is a folder with the name of **SSLspeedy4InstallOnly**,
  - In chrome, open **Extension** tab with ```chrome://extensions/``` and allow
    the **Developer mode**,
  - Click **Load unpacked** and choose **SSLspeedy4InstallOnly** the folder that
    just extracted to add,
- Establish temporary VPN connection
  - Click **SSLspeedy4InstallOnly** temporary extension showing in chrome extension
    bar,
  - Click **Connect** and log in from the pop up panel with 1997o.com account.
- Now **Chrome web store** is available. Choose one of the following extension to
  add from Chrome web store:
  - **SSLspeedy**, <https://chrome.google.com/webstore/detail/sslspeedy/lmdbclggelcpbeoamojllkghfalbjeja>,
  - **SSLspeedy2**, <https://chrome.google.com/webstore/detail/sslspeedy2/lpgbcgcnenlpobfpkhanabojgiccaabb>.
- It may need the system reboot to take effect. After the extension is added and
  the *VPN* connection is stabilized, remove the temporary extension **SSLspeedy4InstallOnly**.

## Opera
Opera installation is easy too. Download the deb package from <https://www.opera.com/>.
Double click such deb package to install from **Ubuntu Software Panel**.

## File Sync Settings
> {% include ref/more-about.html ref = "Synchronization and Version Control in Ubuntu" lang = page.lang %}
