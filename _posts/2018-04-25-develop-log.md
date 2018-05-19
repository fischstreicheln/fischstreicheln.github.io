---
layout: post
title: "Develop Log"
ref: "Develop Log"
lang: test
date: 2018-04-25 22:30:00 +0800
---

## Fundamental
- [X] Initialization with Jekyll
- [X] Push to Github
- [X] Start with several posts
- [X] Pick a basic theme: minima

## Layouts Modification
### Include folder
- [X] Dissemble ```head.html``` into files in ```_includes/head/```
- [X] Dissemble ```header.html``` into files like ```_includes/svg/menu-icon.html``` and ```_includes/header/title.html```

### Sass folder
- [X] Dissemble ```_sass\minima\_layouts.sass``` into files in ```_sass\layouts\```

## Site Functions
### Multilingual
- [X] Define new variables for pages and posts: ```lang``` and ```ref```
- [X] List out available page/post language
- [X] Generate posts/pages with specific language
- [X] Style editing for language list at ```header```
- [X] Add message when mouse hovering on title according to page/post language

### Abbreviation
- [X] Create abbreviation data: ```_data/abbr.yml```
- [X] Create transformation file: ```_include/ref/abbr.html```
- [X] Upgrade ```abbr.html```: Return different reference of the abbreviation by passing variable ```txt```
- [X] Upgrade ```abbr.html```: Return different format of the abbreviation by passing variable ```format```

### Quotes
- [X] Include ```quotes.html``` to page and post layouts

## Post Functions
### Maths Display
- [X] Add ```mathjax.js``` to ```head.html```
- [X] Define new variable for page/post to embed mathjax or not

### Diagram Display
- [X] Add ```mermaid.js``` to ```head.html```
- [X] define new varible for page/post to embed mermaid or not
- [X] Alternative diagram displaying method: ```seq-diagram.js```
- [X] Alternative diagram displaying method: ```https://g.gravizo.com/svg```

### Table of Contents
- [X] Applying ```https://github.com/allejo/jekyll-toc``` directly to ```toc.html```
- [X] Style editing for wiki-like toc: new css class ```post-toc```
- [ ] Add show/hide button for toc

### Bibliography
- [X] Create bibliography data: ```_data/bib.yml```
- [X] Create transformation file: ```_include/ref/bib.html```
