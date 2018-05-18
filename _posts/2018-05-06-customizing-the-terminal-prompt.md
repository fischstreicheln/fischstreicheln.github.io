---
layout: post
title: "Customizing the terminal prompt"
ref: "Customizing the terminal prompt"
lang: en
date: 2018-05-06 01:39:00 +0800
post-toc: false
---

By default, the terminal prompt set to ```username@hostname:directory$ ``` in
Ubuntu and ```hostname:directory$``` in OXS.

But we can change the prompt by redefining the environment variable ```PS1```.

## In Ubuntu
Open the ```.bashrc``` file in the home directory in a text editor and append
the following line at the end.
```
{% raw %}export PS1="\n\e[35;1m\u@\h \D{%m-%d} \A:\w\e[0m\n$ "{% endraw %}
```
Save the file and restart the terminal, then we would have the new prompt. We
will talk about the meaning of the backslash-escaped special characters later.

## In OXS
Open the ```.bash_profile``` file in the home directory in a text editor and
append the following line at the end.
```
{% raw %}export PS1="\n\e[35;1m\u@\h \D{%m-%d} \A:\w\e[0m\n$ "{% endraw %}
```
Save the file and restart the terminal, then we would have the new prompt.

## Special Characters
By entering ```man bash``` command, the following list of special characters
could be found in the ```PROMPTING``` paragraph:
```
PROMPTING
  When executing interactively, bash displays the primary prompt PS1 when it is
  ready to read a command, and the secondary prompt PS2 when it needs more input
  to complete a command.  Bash allows these prompt strings to be customized by
  inserting a number of backslash-escaped special characters that are decoded as
  follows:
  \a  an ASCII bell character (07)
  \d  the date in "Weekday Month Date" format (e.g., "Tue May 26")
  \D{format}
      the format is passed to strftime(3) and the result is inserted into the
      prompt string; an empty format results in a locale-specific time representation.
      The braces are required
  \e  an ASCII escape character (033)
  \h  the hostname up to the first '.'
  \H  the hostname
  \j  the number of jobs currently managed by the shell
  \l  the basename of the shell's terminal device name
  \n  newline
  \r  carriage return
  \s  the name of the shell, the basename of $0 (the portion following the final slash)
  \t  the current time in 24-hour HH:MM:SS format
  \T  the current time in 12-hour HH:MM:SS format
  \@  the current time in 12-hour am/pm format
  \A  the current time in 24-hour HH:MM format
  \u  the username of the current user
  \v  the version of bash (e.g., 2.00)
  \V  the release of bash, version + patch level (e.g., 2.00.0)
  \w  the current working directory, with $HOME abbreviated with a tilde
  \W  the basename of the current working directory, with $HOME abbreviated with a tilde
  \!  the history number of this command
  \#  the command number of this command
  \$  if the effective UID is 0, a #, otherwise a $
  \nnn   the character corresponding to the octal number nnn
  \\  a backslash
  \[  begin a sequence of non-printing characters, which could be used to embed a terminal control sequence into the prompt
  \]  end a sequence of non-printing characters

  The command number and the history number are usually different: the history
  number of a command is its position in the history list, which may include
  commands restored from the history file (see HISTORY below), while the command
  number is the position in the sequence of commands executed during the current
  shell session. After the string is decoded, it is expanded via parameter
  expansion, command substitution, arithmetic expansion, and quote removal,
  subject to the value of the promptvars shell option (see the description of
  the shopt command under SHELL BUILTIN COMMANDS below).
```
With all these special characters, we could change the prompt to almost anything
we want it to be.

## Color in Terminal
Not only the prompt string could be changed,
we could also change the color of the prompt too by using the special escaped
sequence ```<ESC character>``` + ```[``` + ```<Color code>``` + ```m```.

For example, the sequence ```\e[35;1m``` we used in the prompt string, it consists
of **Control Sequence Introducer**, **Color code** and the **Finishing symbol**:
* **Control Sequence Introducer** consists of a ```<ESC character>``` which is encoded
by ```\e```, and a ```[```.
* **Color code** consists of color value ```35``` which means purple, a separation ```;```
and text decoration value ```1``` which means **Bold**.
* **Finishing symbol** is ```m```.

And we also have this sequence ```\e[0m``` which means to reset all color
and text decoration attributes.

More details about the color in the terminal could be found in
[my another post here](/2018/05/07/ANSI-escape-code-color-in-the-terminal.html).
