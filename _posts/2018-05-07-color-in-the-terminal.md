---
layout: post
title:  "Color in the terminal"
date:   2018-05-07 14:39:00 +0800
post-toc: false
---

As what we've discussed in the post of [Customize the terminal prompt](/2018/05/06/customize-the-terminal-prompt),
by redefining the the environment variable ```PS1```, we could change the prompt
to almost anything we want it to be including the color and text decoration of
the prompt.

Here is some details about the special escaped color sequence.

## Structure of Color Sequence
The backslash-escaped color sequence has the following structure:
* **Control Sequence Introducer** consists of a ```<escaped character>``` and a ```[```.
* **Color code** consists of text-color, and/or text-decoration, and/or
back-ground-color value(s) with separation ```;``` if more than one values are
given.
* **Finishing** symbol is ```m```.

## Control Sequence Introducer
## Color code
