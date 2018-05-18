---
layout: post
title: "Upgrade ruby with homebrew in OXS"
ref: "Upgrade ruby with homebrew in OXS"
lang: en
date: 2018-05-04 09:39:00 +0800
---

After I installed ruby with homebrew in OXS,
```
brew install ruby
ruby --version
```
it showed the default (older) version of ruby is still in used.
How to switch the ruby version to the newest one?

# 0. Try the other way
## i. Close the terminal and restart
There are some experiences shows that after installing ruby with homebrew,
we should try close the terminal(Cmd+Q) and restart it.  
Then it may show the new installed version of ruby.
## ii. Try using RVM(Ruby Version Management)
After searching the solution of this issue, most of the answer recommand the rvm,
[which you can try too!][https://rvm.io/rvm/install]  

However, if you want to continue the path of homwbrew,
you may try the following steps:
# 1. Check out which version of ruby have you installed?
```
which ruby
which -a ruby
```
The first command shows the path of current ruby, and the second one shows the
path of all installed ruby. For instance, you would get:
```
$ which ruby
/usr/bin/ruby
$ which -a ruby
/usr/bin/ruby
/usr/local/bin/ruby
```
Homebrews would always take precedence ```/usr/local/bin```.

# homebrews should always take precedence
export PATH=/usr/local/bin:$PATH
