---
layout: post
title: "Things to do right after Ubuntu installation"
ref: "Things to do right after Ubuntu installation"
lang: en
division: Linux
category: [Ubuntu, Operating System]
tags: installation setting
author: Jason
date: 2019-01-19
last-update: 2019-01-27
img: warty-final-ubuntu.png
---

> {% include ref/more-about.html ref = "(Re-)install Ubuntu dual-booting with Windows 10" lang = page.lang direction = "last" %}

## Updating Software
After installation, some packages need to be updated. In **Terminal**, update
them with the following command:
```
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

To install **TLP**, a specific repository source need to be added and update the
package lists for new packages that have just come to the repositories:
```
sudo add-apt-repository ppa:linrunner/tlp
sudo apt-get update
```
Now install **TLP** with the first line of following commands. And if **TLP** is
installed in **ThinkPad**, some additional packages are required. Install them
with the second line of following commands:
```
sudo apt-get install tlp tlp-rdw
sudo apt-get install tp-smapi-dkms acpi-call-dkms
```
After installation, rebooting the system and **TLP** should start automatically
at booting. Check status with ```sudo tlp-stat -s```. If **TLP** is not started,
start **TLP** with ```sudo tlp start```.
- Switching between **AC Mode** and **Battery Mode** with ```sudo tlp ac```
or ```sudo tlp bat```.
- Turn **wifi** and **bluetooth** on or off with ```sudo wifi on```(or ```off```)
and ```sudo bluetooth on```(or ```off```)

### CPUfreq
If a simple switch between **performance** and **power safe** mode is required,
**CPUfreq** would do the job.

Install with ```sudo apt-get install indicator-cpufreq```, and an indicator icon
would be shown on the navigation bar of **Ubuntu**. Switching between different
modes is done by simply clicks.

### Psensor
**Psensor** show temperature of CPU, RPM of fan and some other status of the
system.

Before installing **Psensor**, other packages are required. Install them
with ```sudo apt-get install lm-sensors hddtemp``` and start the detection of
the hardware sensors with ```sudo sensors-detect```.

Now, everything is in place, install **Psensor** with ```sudo apt-get install
psensor```. After the installation, make sure the check the box of **Launch on
session startup** in **Startup** tab of **Psensor Preferences**.

### Top
There's a way to monitor the CPU consumption of running task. If the laptop gets
too hot or makes noises suddenly, it might be a good way to check which task is
causing this situation with a simple command ```top``` in **Terminal**.

This command shows a real-time list of most CPU intensive tasks of the system. If
a process that is consuming more than 60% of CPU, that might be the culprit
process that consumes the most of the CPU resources. A simple ```kill``` command
could be used for killing such kind of process.

Get the process ID from the list, then kill with ```sudo kill -9 <process_id>```.

## Get rid of non-required packages
The APT package management system keeps a cache of DEB packages and the cache
would grow quite large holding a lot of packages no longer required overtime. The
size of such cache could be found with the following command:

```
sudo du -sh /var/cache/apt
```

### Clean and Autoclean
There are ways to get rid of this cache. ```clean``` and ```autoclean``` could
be applied depending on the purpose:
- ```apt-get autoclean``` removes only the obsolete DEB packages, like those
are outdated or superseded by a recent update.
- ```apt-get clean```clears out everything in the cache but the lock files
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

## fgh

- *Option 1:* Click the *batery*(or *sound*, or *wifi*) icon on the navigation bar,
then click the *Mechanic Maintenance* icon to open the **Setting** panel.
​
- *Option 2:*​

> {% include ref/more-about.html ref = "Ubuntu settings that need to be configured
right after installation" lang = page.lang %}
