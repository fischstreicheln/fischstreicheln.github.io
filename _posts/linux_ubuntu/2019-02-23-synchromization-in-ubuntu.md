---
layout: post
title: "Synchronization and Version Control in Ubuntu"
ref: "Synchronization and Version Control in Ubuntu"
lang: en
category: [Linux, Ubuntu, Operating System]
tags: browser vpn
author: Jason
date: 2019-02-23
last-update: 2019-02-23
img: warty-final-ubuntu.png
---

> {% include ref/more-about.html ref = "Internet Browser and VPN with Chrome Extension in Ubuntu" lang = page.lang direction = "last" %}

Files and settings synced over multiple platforms and devices is necessary. Futhermore,
revise track of files need to be kept so that the history versions of files could
be accessed. Here recommending some synchronization and version control methods
depending on different demands.

## Chrome
Bookmarks, extensions, history, passwords, theme and wall papers,... Everything
associating with chrome could be synced with chrome itself.

All we need is a **Google Account**!
- In chrome open **Settings** tab with ```chrome://settings/```
- Under **People** section, click **Turn on Sync** and log in Google account

Now everything is synced, and we can always change what to sync in the **Settings**
-> **People** -> **Sync** tab.

With google account, more apps could be accessed. Such as **Google Docs/Sheets**,
it automatically keep tracks of all changed version so all history versions could
be accessed through the website of **Google Docs/Sheets**
​
## Nutstore (A dropbox-like application)
**Dropbox** is blocked *~~in some places~~*. As alternative, without any loss or
even with some advanced functions *(I think?)*, **Nutstore** is a recommended file
synchronizing application, - <https://www.jianguoyun.com/>, with free or paid
account.

Nutsotre only upload the revised part of file and keep track of the revise
history, in such way, the history version of every synced file could be access
through this application.

Download the deb package from <https://www.jianguoyun.com/s/downloads/linux>. Then
double click the downloaded package to install from **Ubuntu Software Panel**.

After the installation, just follow the instruction to choose folder(s) to sync
and it just need some simple clicks. It syncs automatically. The history version
could be accessed and changes could be reverted through the website.

## Git and Github
**Git** is a free and open source distributed version control system designed to
handle all kinds of projects. With some simple command, all revision of files could
be accessed easily.

And **GitHub** is a development platform could be a good way to synchronize codes
and development files by collaborating with **Git**. **Github** also keeps tracks
of all changes of all committed version since **Git** dose. And it providing
**FREE***(Thanks to Microsoft!)* private and public repositories for different
needs.

Install **Git** with ```sudo apt install git``` and configure the user name and
email with following command:
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
Using ```git config --list``` to review these global configuration.

Get the **Github** account by registering, and here's a simple examle to sync
with **Github** using **Git**.
```bash
# In the local folder, initialize git with:
git init
# After this, git would automatically keep track of all changes of this folder
git status # to see uncommitted changes of this folder
git add . # to add all changes to commit
git commit -m "Notes" # to commit all added changes to repository
# Before pushing commits to Github, a corresponding repository needs to be created in Github
git remote add origin https://github.com/username/repositorynam.git # making sure .git appended to the end
# After adding remote, the committed repository could be pushed to Github with git
git push -u origin master # This step need the Github account information
```

## More about Git
> {% include ref/more-about.html ref = "Synchronization in Ubuntu" lang = page.lang %}
