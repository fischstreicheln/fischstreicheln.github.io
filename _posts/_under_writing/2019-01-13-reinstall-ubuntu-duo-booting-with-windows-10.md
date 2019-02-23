---
layout: post
title: "(Re-)install Ubuntu dual-booting with Windows 10"
ref: "(Re-)install Ubuntu dual-booting with Windows 10"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: installation dual-boot Windows
author: Jason
date: 2019-01-13
last-update: 2019-01-13
img: warty-final-ubuntu.png
---

Recently, I ~~fucked up with~~ broke my old **Ubuntu** and I don't have the
patience, ~~or the ability~~, to fix it step by step. So, the easiest way to get
my system back is to re-install it, and upgrade to the latest version by the way.

My old **Ubuntu** was installed alongside with **Windows 10** in different
partitions, dual-booting from **Ubuntu GNU GRUB**. The following guide is also
applied to new installation of **Ubuntu** with **Windows** already installed.

## Preparation
1. Before starting the installation, download the required files.
- **Ubuntu** latest LTS release (Current, Dec 2018: Ubuntu 18.04.1 LTS)
> <https://www.ubuntu.com>
- *(Optional, if **WinRAR** is not installed)* **Rufus** latest release
> <https://rufus.ie>

1. Backup all the files of those are necessary, and **Backup!!! Backup!!! Backup
!!!** *Repeat it 3 times making it more important.*

1. After downloaded the required files, create a USB start-up drive. *(A new, or
formatted USB drive is required.)*
- *Option 1:* Extract **Ubuntu iso** file directly to USB drive with **WinRAR**.
  - Right click the downloaded ubuntu iso file,
  - choose **Extract with WinRAR**,
  - set the target location to be the USB drive,
  - and let the WinRAR do its job.
- *Option 2:* Create a start-up drive with **Rufus**
> Detailed instruction could be found in <https://rufus.ie>

1. A free partition of about 50GB space separated from **Windows** installation
partition is required.
- Old **Ubuntu** installation partitions could be utilized. There is no need to
format those in advanced, this could be carried out in the installation section.
- Or it may need to *shrink* the **Windows** partition to make space for the
**Ubuntu**.
  - In **Windows**, hit **Win** and **X** keys at the same time,
  - Choose **Disk Management** and pick the partition with large free space,
  - Right clock the selected partition and choose **Shrink Volumn**,
  - Follow the instruction to make unallocated space.

1. Disable **Fast Startup** of Windows
- In **Windows**, hit **Win** and **X** keys at the same time,
- Choose **Power Option** - **Choose what power button does?**,
- Click **Change settings that are currently unavailable**,
- Scroll down and make sure the box marked **Turn on Fast Startup (Recommended)**
is **UNCHECKED**,
- and **Save changes**.

## Installation (18.04.1 LTS)
1. Change system booting order in order to boot from the USB drive.
- Insert the USB drive, reboot the system and press **F1** key to enter **BIOS**,
> "F1" key may not work for all BIOS (it works for ThinkPad BIOS), try "F1"~"F8"
of the one that works.
- In **Security** tab, choose **Secure Boot** and hit **Enter**,
  - Now in **Secure Boot** tab, make sure the option of **Secure Boot** is
  **Disable** and hit **Esc** key to come back up to **Secure** tab.
- In **Startup** tab, choose **Boot** and hit **Enter**,
  - Move the highlight bar to **USB Flash Disk***(or the name of your newly
  created USB start-up drive)* with **arrow** keys,
  - Move the **USB Flash Disk** up to the top of **Boot Priority Order** list
  with **+** key,
  - Hit **Esc** key to come back up to **Startup** tab, and make sure the option
  of **UEFI Boot** is **Both**(Legacy and UEFI),
- Hit **F10** to **Save and Exit**. Then the system would reboot itself.
> "F10" key may not work for all BIOS (it works for ThinkPad BIOS), follow the
BIOS instruction to save all changes and reboot the system.

1. If succeed, a **GNU GRUB startup option panel** should appear. Install
**Ubuntu** following the instructions.
- In **GNU GRUB** panel, choose **Install Ubuntu** and hit **Enter**,
- Setup install **language**, **keyboard layout** and **Connect to WiFi**,
> Wifi connection is Preferred! If no wifi is connected, some packages may not
be installed during the installation.
- Choose **Minimal installation** (or full installation works too), and check
**Download updates while installing**.

1. Now it comes to the **MOST Important** part. I assumed that,
- **Windows** is already installed, and
- After installation, system would boot from **Ubuntu GNU GRUB** achieving the
goal of **Dual Boot**.

1. In **Installation Type** section, choose **Something else** to customized the
partitions for installation.
- *(Optional, if old, fucked up ubuntu partition is still shown in the partition
  list)* Free all previously **Ubuntu** installed partition by selecting the
  corresponding partition(s) and clicking the **-** button.
- Leave all **Windows** (and files storage) partition untouched,
Add 100 Mb Logical partition - EFI System Partition
Add 4096 Mb Primary partition - swap area
Add 35840 Mb Primary partition - Ext4 for root /
With whatever left space, add Primary partition - Ext4 for /home
Choose EFI System partition for boot loader installation
Start installation
Choose location, setup user name and password
Installation completed, then reboot
Set system booting order to original > refer to #1
### Setting
Open setting panel to customize setting
Apply upgrade from Ubuntu Software Updater
sudo apt update && sudo apt upgrade
reduce laptop overheating
You are here: Home / Linux / Most Effective Ways To Reduce Laptop Overheating In Linux
Most ured to reduce overheating as well as improve battery life. You just need to install TLP and restart your system. It will be auto-start at each boot and keep on running in background. I have always included installation of TLP in top things to do after installing Ubuntu for its simplicity and usefulness.
To install TLP in Ubuntu based Linux distributions, use the following commands:
sudo add-apt-repository ppa:linrunner/tlp
sudo apt-get update
sudo apt-get install tlp tlp-rdw
If you are using ThinkPads, you require an additional step:
sudo apt-get install tp-smapi-dkms acpi-call-dkms
sudo tlp-stat -s
如果TLP没有启动的话，可以执行手工启动TLP
sudo tlp start
TLP started in AC mode.
sudo tlp ac
强制切换到交流电对应的节能设置
sudo tlp bat
强制切换到电池的节能设置
sudo wifi on
手动启动wifi
sudo wifi off
手动关闭wifi
sudo wifi toggle
手动切换wifi状态
bluetooth: 手动启动/关闭蓝牙
sudo bluetooth on
手动启动蓝牙
sudo bluetooth off
手动关闭蓝牙
sudo bluetooth toggle
手动切换蓝牙状态
With CPUfreq, you can choose the mode you want the laptop to run in. There are three modes, performance, on demand and power saver. Running the laptop in Power Saver mode reduces overheating. The tool is easy to use thanks to its indicator applet in Ubuntu. To install CPUfreq in Ubuntu based Linux distributions, use the following command:
sudo apt-get install indicator-cpufreq
sudo apt-get install lm-sensors hddtemp
Then start the detection of your hardware sensors:
sudo sensors-detect
Once everything in place, use the following command to install Psensor:
sudo apt-get install psensor
psensor preferences Startup check launch on session startup
If your laptop is suddenly gets too hot and starts making noises, it is a good indication that there is a culprit application that has caused it.
Open a terminal and type the following command:
top
This command gives a real-time list of the most CPU intensive tasks on the system. So, you will see the process that consumes the most of the CPU resources on the top. All you need to see if there is a process that is consuming 60-100% of CPU.
If there is such a process, get its Process ID and kill it. You can use the kill command in the following fashion:
sudo kill -9 pid_number
Get rid of packages that are no longer required [Recommended]
If you read the apt-get commands guide, you might have come across the apt-get command option ‘autoremove’.
The APT package management system keeps a cache of DEB packages in /var/cache/apt/archives. Over time, this cache can grow quite large and hold a lot of packages you don’t need.
You can see the size of this cache with the command below:
sudo du -sh /var/cache/apt
Either remove only the outdated packages, like those superseded by a recent update, making them completely unnecessary.
sudo apt-get autoclean
Or clean out the cache in its entirety (frees more disk space):
sudo apt-get clean
Either remove only the outdated packages, like those superseded by a recent update, making them completely unnecessary.
sudo apt-get autoclean
Or clean out the cache in its entirety (frees more disk space):
sudo apt-get clean
Ubuntu automatically creates a thumbnail, for viewing in the file manager. It stores those thumbnails in a hidden directory in your user account at the location ~/.cache/thumbnails.
You can check the size of thumbnail cache with the command below:
du -sh ~/.cache/thumbnails
The quickest way is to use the terminal:
rm -rf ~/.cache/thumbnails/*
​

## Markov Chain
* **Markov Process** is a type of stochastic process with **Markov Property**.
* **Markov Chain** is a type of Markov process with discrete state space.

### Markov Property
**Markov Property**, i.e. **Memoryless** property, states that the future evolution of the process
depends *ONLY* on its *current* state, not depending on the passed transitions of the process.

### Discrete Time Markov Chain
* **Discrete Time Markov Chain(DTMC)** is a type of Markov Chain with discrete parameter space.
<div class="mermaid">
graph LR;
    A(Stochastic Process)--Markov Property-->B(Markov Process);
    B--Discrete State Space-->C(Markov Chain);
    C--Discrete Parameter Space-->D(Discrete Time Markov Chain);
</div>

When we study the behavior of a DTMC, we observe its state at a discrete set of times. In practical
applications, when transitions from state to state can only take place, or fail to take place at
some time instants which are short enough to be omitted comparing to the time durations that the
process stays in states, we could approximately observe the process at a discrete set of time.
* When these time instants are mostly taken to be one unit apart, we could represent the discrete
parameter space, or say index set $$T$$ by the set of natural numbers $$\{0,1,2,\ldots \}$$.
* The successive observations define the set of $$r.v. X(t)$$ which could also be represented with a
set of $$\{X_0,X_1,X_2,\ldots ,X_n,\ldots \}$$ at time instants $$0,1,2,\ldots ,n,\ldots$$
respectively.

Mathematically, **DTMC $$\{X_n, n=1,2,\ldots\}$$** is a stochastic process that satisfies the **Markov
property**, i.e. $$\forall n$$ and $$\forall$$ state $$x_n$$,

$$
\mathbf{Pr}(X_{n+1}=x_{n+1}\mid X_n=x_n, X_{n-1}=x_{n-1},\ldots ,X_0=x_0) \\
=\mathbf{Pr}(X_{n+1}=x_{n+1}\mid X_n=x_n)
$$

## Notation
### States
For simplicity, we could use single letters, such as $$i, j, k, \ldots$$, to represent the states
instead of $$x_i, x_j, x_k, \ldots$$.

### (Single-step) Transition Probability
The **single-step transition probability**, or just the **transition probability**, of the Markov
Chain is given by the conditional probability of making transition from state $$x_n=i$$ to state
$$x_{n+1}=j$$ when the time parameter increases from $$n$$ to $$n+1$$, denoted as
$$p_{ij}(n)=\mathbf{Pr}(X_{n+1}=j\mid X_n=i)$$.

### Transition Probability Matrix
The **transition probability matrix**, or **chain matrix** $$P(n)$$ is the matrix formed with the
transition probabilities $$p_{ij}(n)=\mathbf{Pr}(X_{n+1}=j\mid X_n=i)$$ as the elements of row $$i$$
and column $$j$$ for all $$i$$ and $$j$$,

$$
P(n)=\left( \begin{array}{cccccc} p_{00}(n) & p_{01}(n) & p_{02}(n) & \cdots & p_{0j}(n) & \cdots \\
p_{10}(n) & p_{11}(n) & p_{12}(n) & \cdots & p_{1j}(n) & \cdots \\
p_{20}(n) & p_{21}(n) & p_{22}(n) & \cdots & p_{2j}(n) & \cdots \\
\vdots & \vdots & \vdots & \ddots & \vdots & \cdots \\
p_{i0}(n) & p_{i1}(n) & p_{i2}(n) & \cdots & p_{ij}(n) & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots \end{array} \right)
\begin{array}{c} \dashrightarrow \sum{p_{0j}(n)} = 1 \\
\dashrightarrow \sum{p_{1j}(n)} = 1 \\
\dashrightarrow \sum{p_{2j}(n)} = 1 \\
\vdots \\
\dashrightarrow \sum{p_{ij}(n)} = 1 \\
\vdots \end{array}
$$

elements of which satisfy $$\forall i,j$$ $$0\leq p_{ij}(n)\leq 1$$ and $$\sum_{all j}{p_{ij}(n)}=1$$.

### State Diagram
The behavior of the Markov chain is usually illustrated with **state diagram**, where
* Circles are used to represent states, and
* Directed arrows with values are used to represent single-step transition from states to states, whose
* Values are used to represent single-step transition probabilities respectively.

<div class="mermaid">
graph LR;
    A((3))--1-->B((2));
    B--2/3-->C((1));
    C--1/3-->D((0));
    D--1-->C;
    C--2/3-->B;
    B--1/3-->A;
</div>

This is a state diagram of **Ehrenfest Model** with $$N=3$$, which is a simple model of the exchange
of heat or gas molecules between two isolated bodies, by formulated as simple ball and urn models.
* The balls correspond to the molecules, and there are $$N=3$$ balls in the system in this case.
* The urns correspond to the two isolated bodies, and the urns are labeled with 1 and 2.
* At each time instant, a ball in the system is chosen at random and moved from the current urn to
the other one.
* Let $$r.v. X_n$$ be the number of balls in the urn \#1 after $$n^{th}$$ selection, or $$n$$ time
steps.

Since the number of balls in urn \#1 at time step $$n+1$$ depends only on the number of balls in
urn \#1 at time step $$n$$, the stochastic process $$\{X_n, n=1,2,\ldots\}$$ is a Markov chain.

> {% include ref/more-about.html ref = "Markov Chain Example: Ehrenfest Model" lang = page.lang %}



> {% include ref/more-about.html ref = "Time Dependence of DTMC" lang = page.lang %}

## Reference
There are some books and articles I read while I was writing this post.[^1]

***
[^1]: {% include ref/bib.html idx = "_bib_book__BK_Stewart2009_" %}
