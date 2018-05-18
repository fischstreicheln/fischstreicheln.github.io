---
layout: post
title:  "ANSI转义字符：终端中的颜色设置"
date:   2018-05-07 14:39:00 +0800
ref: "ANSI escape code: Color in the terminal"
lang: cn
post-toc: true
---

As what we've discussed in the post of [Customizing the terminal prompt](/2018/05/06/customizing-the-terminal-prompt),
by redefining the the environment variable ```PS1```, we could change the prompt
to almost anything we want it to be, including the **color and text decoration**
of the prompt.

When redefining the environment variable ```PS1```, ANSI escape codes are used
for defining a color, including text color, text decoration and background color.

## Structure of ANSI escape code
The ANSI escape code that defining a color has the structure of staring
with the **Control Sequence Introducer**, followed by the **Color Code**, and
ending with a **Finishing Symbol**:
* **Control Sequence Introducer** consists of a ```<ESC character>``` and a ```[```.
* **Color Code** consists of text-color, and/or text-decoration, and/or
background-color value(s) with separation ```;``` if more than one values are
given.
* **Finishing symbol** is ```m```.

For example, the ANSI escape code ```\e[35;1m``` that defining a color consists
of **Control Sequence Introducer**(```\e``` and ```[```), **Color code**(color
value ```35``` which means purple, and text decoration value ```1``` which
means **Bold**, separated by ```;```) and, at last, the **finishing symbol**(```m```).

## Control Sequence Introducer
Control Sequence Introducer, i.e. **CSI**, is a
## Color code
