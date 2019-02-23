---
layout: post
title: "Things to do right after Ubuntu installation"
ref: "Things to do right after Ubuntu installation"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: installation setting
author: Jason
date: 2019-01-19
last-update: 2019-01-30
img: warty-final-ubuntu.png
---

> {% include ref/more-about.html ref = "(Re-)install Ubuntu dual-booting with Windows 10" lang = page.lang direction = "last" %}

After the installation, there are several settings and customization need to be
configured for better experience of using Ubuntu.

## Update Software
Foremost, some packages need to be updated. In **Terminal**, update them with the
following command:
```bash
sudo apt-get update && sudo apt-get upgrade
```
- ```sudo apt-get update``` doesn't actually install new versions of software but
updates the package lists for upgrades and new packages that have just come to the
repositories.
- ```sudo apt-get upgrade``` fetches new versions of packages with the updated
list by way of ```sudo apt-get update```.

## Reduce the Overheating
Overheating might affect the performance of the laptop, and also the battery life.
There are several ways to managing the overheating problem:

### TLP
**TLP** is a simple but useful software to reduce overheating as well as improve
battery life. It will auto-start at each boot and keep running in the background.

To install **TLP**, a specific repository source need to be added and an update
of the package lists for new packages is also required:
```bash
sudo add-apt-repository ppa:linrunner/tlp
sudo apt-get update
```
Now install **TLP** with the first command in the following, and the second one
is used for the situation of installing **TLP** in **ThinkPad** due to some
additional packages are required in this situation:
```bash
sudo apt-get install tlp tlp-rdw
# Additional step if tlp is installed in ThinkPad as followed:
sudo apt-get install tp-smapi-dkms acpi-call-dkms
```
After the installation, rebooting the system and **TLP** should start automatically
at booting. Check status with the first command in the following, and it would show
some information of **System Info** and **TLP Status** if **TLP** is successfully
started. If not, start **TLP** with the second command:
```bash
sudo tlp-stat -s
# If tlp is not started, start it with:
sudo tlp start
```
Switching between **AC Mode** and **Battery Mode** of **TLP** to balance the
overheating issue and the system performance with:
```bash
sudo tlp ac # Switch to AC Mode
sudo tlp bat # Switch to Battery Mode
```

### CPUfreq
If command line usage of [TLP](#tlp) looks complicated, **CPUfreq** might do the
job since it offers a simple switch between **performance** and **power safe** mode
on the navigation bar of Ubuntu desktop. Installation could be implemented with:
```bash
sudo apt-get install indicator-cpufreq
```
Then an indicator icon would be shown on the navigation bar. Switching between
different modes is done by simply clicks.

### Psensor
Other than switching modes of the system, **Psensor** shows temperature of CPU,
RPM of fan and some other status of the system. Before installing **Psensor**,
other packages are required. Install them and start the detection of the hardware
sensors with:
```bash
sudo apt-get install lm-sensors hddtemp
sudo sensors-detect
```
Now, everything is in place, install **Psensor** with the following command. Make
sure to check the box of **Launch on session startup** in **Startup** tab of **Psensor Preferences** after the installation.
```bash
sudo apt-get install psensor
```

### Top
The methods above aren't direct routes to manage overheating problem but simplified
ones, however, we sometimes may need a way to monitor the CPU consumption of
running tasks to see which ones might go wrong, such as the situation of the laptop
getting too hot or making noises suddenly.

It might be a good way to check which task is causing the overheating problem with
a simple command:
```bash
top
```
This command shows a real-time list of most CPU intensive tasks of the system. If
a process that is consuming more than 60% of CPU, that might be the culprit
process that consumes the most of the CPU resources. Get the process ID from the
list, then kill it with if needed:
```bash
sudo kill -9 <process_id>
```

## Get rid of non-required packages
The APT package management system keeps a cache of DEB packages and the cache
would grow quite large holding a lot of packages no longer required overtime. The
size of such cache could be found with the following command:
```bash
sudo du -sh /var/cache/apt
```

### Clean and Autoclean
There are ways to get rid of this cache. ```clean``` and ```autoclean``` could
be applied depending on the purpose:
- ```apt-get autoclean``` removes only the obsolete DEB packages, like those
are outdated or superseded by recent updates.
- ```apt-get clean``` clears out everything in the cache but the lock files
in ```/var/cache/apt/archives/``` which frees more disk space.

### Autoremove
Other than clearing out the downloaded DEB packages in cache, ```autoremove```
will free some disk space by uninstalling some installed packages. These packages
were installed automatically to satisfied dependencies for some other packages,
and these packages are no longer needed due to those dependencies are no longer
needed.
- ```apt-get autoremove``` removes orphaned packages from the system, but not
purges them by leaving all of the configuration files in place.
- ```apt-get autoremove --purge``` does the same but also removes all of the
configuration files.

## Configure Language Setting and Input Method
> {% include ref/more-about.html ref = "Language Settings and Input Method Configurations in Ubuntu" lang = page.lang %}
