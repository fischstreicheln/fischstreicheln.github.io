---
layout: post
title: "Language Settings and Pinyin Input Method in Ubuntu"
ref: "Language Settings and Pinyin Input Method in Ubuntu"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: language Pinyin
author: Jason
date: 2019-01-30
last-update: 2019-02-23
img: warty-final-ubuntu.png
---

> {% include ref/more-about.html ref = "Things to do right after Ubuntu installation" lang = page.lang direction = "last" %}

Some general settings have already been configured, yet there might still be some
special needs to cover. For me, a **Chinese** user, the Chinese **language support**
and **input method** would be necessary.

## Language Support
Other than the language chosen for installation, with the need of adding new language(s),
configurations could be done with **Region and Language** tab in **Settings**.
- Click on the *Top-Right* corner of the **Navigation Bar** (if the navigation bar
  is set to appear on top).
- Click the **Mechanic** icon to show the **Setting** panel.
- In **Settings** -> **Region and Language** tab, click the **Manage Installed
  Language** button. Ubuntu would check for language support packages, then apply
  changes to install.
- After installing the needed language support packages, in **Language Support**
  panel, click the **Install/Remove Languages** button and check for the needed
  languages, then apply changes to install new languages.

## Input Method
As a simplified Chinese user, a **Pinyin** input method is a must.
- In **Settings** -> **Region and Language** tab, click the **Manage Installed
  Language** button to show **Language Support** panel. From the options of **keyboard
  input method system**:
  - Choose **iBus**, for **iBus Pinyin** user
  - Choose **fcitx**, for **Sogou/Google Pinyin** user
- *(Optional, if **iBus**/**fcitx** is not an option)* Install **ibus**/**fcitx**
  - In **Terminal**, execute the following command to install **ibus**:
```bash
sudo apt-get install ibus ibus-clutter ibus-gtk ibus-gtk3 ibusqt-4
im-config -s ibus
```
  - In **Terminal**, execute the following command to install **fcitx**:
```bash
sudo apt install fcitx-bin fcitx-table
```
  - Reboot for changes to take effect.
  - Back to last step to choose **keyboard input method system**.
- Install pinyin input method
  - **iBus** pinyin with ```sudo apt-get install ibus-pinyin``` command.
  - **Sogou** pinyin with deb package downloaded from <https://pinyin.sogou.com/linux>
    and double clicking such package to install from **Ubuntu Software Panel**.
  - **Google** pinyin with ```sudo apt install fcitx-googlepinyin``` command.
- Configure the installed input method
  - Open input method setup panel by clicking the *keyboard* icon on the navigation
    bar, then click the **Configure current input method** to show **Input Method
    Configuration**.
  - In **Input Method** tab, click *add* icon to add corresponding input method
    of **iBus** - **Intelligent Pinyin**, **Sogou Pinyin** or **Google Pinyin**.
  - *(Optional, one more step for **iBus** system)* Back to the **Settings** ->
    **Region and Language** tab, add **Chinese (Intelligent Pinyin)** as an input
    source.
  - In **Global Config** tab, choose the needed *Hotkey* for **Extra key for
    trigger input method**.​

## Internet Browser and VPN settings
> {% include ref/more-about.html ref = "Internet Browser and VPN with Chrome Extension in Ubuntu" lang = page.lang %}
