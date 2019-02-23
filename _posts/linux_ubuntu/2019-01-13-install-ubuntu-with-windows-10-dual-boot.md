---
layout: post
title: "Install Ubuntu with Windows 10 dual boot"
ref: "Install Ubuntu with Windows 10 dual boot"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: installation
author: Jason
date: 2019-01-13
last-update: 2019-02-23
img: warty-final-ubuntu.png
---

Recently, I ~~*fucked up with*~~ broke my old **Ubuntu** and I don't have the
patience, ~~*or the ability*~~, to fix it step by step. So, the easiest way to get
my system back is to re-install it, and upgrade to the latest version by the way.

My old **Ubuntu** was installed alongside with **Windows 10** in different
partitions, dual-booting from **Ubuntu GNU GRUB**. The following guide is also
applied to new installation of **Ubuntu** with **Windows** already installed.

## Preparation
### Download Files
Before starting the installation, download the required files.
- **Ubuntu** latest LTS release (Current, Dec 2018: Ubuntu 18.04.1 LTS)
> <https://www.ubuntu.com>
- *(Optional, if **WinRAR** is not installed)* **Rufus** latest release
> <https://rufus.ie>

### Backup Files
Backup all the files of those are necessary, and **Backup!!! Backup!!! Backup
!!!** *Repeat it 3 times making it more important!*

### Create Start-up Drive
> A new, or formatted USB drive is required.

After downloading the required files, create a USB start-up drive.
- *Option 1:* Extract **Ubuntu iso** file directly to USB drive with **WinRAR**.
  1. Right click the downloaded ubuntu iso file,
  1. choose **Extract with WinRAR**,
  1. set the target location to be the USB drive,
  1. and let the WinRAR do its job.
- *Option 2:* Create a start-up drive with **Rufus**
> Detailed instruction could be found in <https://rufus.ie>

### Make Free Space
A free partition of about *50 GB* space separated from **Windows** installation
partition is required.
- Old **Ubuntu** installation partitions could be utilized. There is no need to
format those in advanced, this could be carried out in the installation section.
- Or it may need to *shrink* the **Windows** partition to make space for the
**Ubuntu**.
  1. In **Windows**, hit **Win** and **X** keys at the same time,
  1. Choose **Disk Management** and pick the partition with large free space,
  1. Right clock the selected partition and choose **Shrink Volumn**,
  1. Follow the instruction to make unallocated space.

### Disable Fast Startup
The feature **Fast Startup** of Windows should be disabled.
- In **Windows**, hit **Win** and **X** keys at the same time,
- Choose **Power Option** - **Choose what power button does?**,
- Click **Change settings that are currently unavailable**,
- Scroll down and make sure the box marked **Turn on Fast Startup (Recommended)**
is **UNCHECKED**,
- and **Save changes**.

## Installation (18.04.1 LTS)
### Change Booting Order
Change system booting order in order to boot from the USB drive.
- Insert the USB drive, reboot the system and press **F1** key to enter **BIOS**,
> "F1" key may not work for all BIOS (it works for ThinkPad BIOS), try "F1"~"F8"
of the one that works.
- In **Security** tab, choose **Secure Boot** and hit **Enter**,
  1. Now in **Secure Boot** tab, make sure the option of **Secure Boot** is
  **Disable** and,
  1. Hit **Esc** key to come back up to **Secure** tab.
- In **Startup** tab, choose **Boot** and hit **Enter**,
  1. Move the highlight bar to **USB Flash Disk***(or the name of your newly
  created USB start-up drive)* with **arrow** keys,
  1. Move the **USB Flash Disk** up to the top of **Boot Priority Order** list
  with **+** key,
  1. Hit **Esc** key to come back up to **Startup** tab, and make sure the option
  of **UEFI Boot** is **Both**(Legacy and UEFI),
- Hit **F10** to **Save and Exit**. Then the system would reboot itself.
> "F10" key may not work for all BIOS (it works for ThinkPad BIOS), follow the
BIOS instruction to save all changes and reboot the system.

### Start Installation
If succeed, a **GNU GRUB startup option panel** should appear. Install
**Ubuntu** following the instructions.
- In **GNU GRUB** panel, choose **Install Ubuntu** and hit **Enter**,
- Setup install **language**, **keyboard layout** and **Connect to WiFi**,
> Wifi connection is preferred! If no wifi is connected, some packages may not
be installed during the installation.
- Choose **Minimal installation** (or full installation works too), and check
**Download updates while installing**.

### Customized Installation
Now it comes to the **MOST Important** part. I assumed that,
- **Windows** is already installed, and
- After installation, system would boot from **Ubuntu GNU GRUB** achieving the
goal of **Dual Boot**.

In **Installation Type** section, choose **Something else** to customized the
partitions for installation.
- *(Optional, if old, fucked up ubuntu partition is still shown in the partition
  list)* Free all previously **Ubuntu** installed partition by selecting the
  corresponding partition(s) and clicking the **-** button.
- Leave all **Windows** (and files storage) partition untouched,
- Add *100 Mb* **Logical partition** as a **EFI system partition** by clicking
**+** button,
- Add *4096 Mb* **Primary partition** as a **swap area**,
- Add *35840 Mb* **Primary partition** as a **Ext4 partition** for **root(/)**,
- With whatever left space, add **Primary partition** as a **Ext4 partition**
for **/home**,
- Choose **EFI system partition** for **boot loader** to be installed.

### Continue Installation
Now, installation could be started.
- Choose **location**, setup **user name** and **password**,
- and let the installer do its job.
- When the installation is completed, the system would reboot itself.

### Reset Booting Order
Reset system booting order in order to boot from the newly install **Ubuntu**
- Removing the USB drive and rebooting the system,
- Instruction refers to **Installation** - step #1, making sure the **EFI system
partition**, usually called **ubuntu**, had been moved to the top of **Boot
Priority Order** list,
- After rebooting agian, if succeed, an **Ubuntu GNU GRUB startup option panel**
should appear and **Ubuntu** or **Windows** could be chose to boot from.

Till now, the basic installation is completed.

## Settings (18.04.1 LTS)
> {% include ref/more-about.html ref = "Things to do right after Ubuntu installation" lang = page.lang %}
