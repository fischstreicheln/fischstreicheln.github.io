---
layout: post
title: "Website Effect Test Page"
ref: "Website Effect Test Page"
lang: test
date: 2018-04-25 21:30:00 +0800
mathjax: true
mermaid: true
seq-diagram: true
---

## Weekdays
### Plan 01
- [ ] 07:00 Get up
- [ ] 07:00-07:45 Yoga/Meditation
- [ ] 07:45-08:30 Breakfast/Brain Train
- [ ] 08:30-09:30 Commute/Deustch
- [ ] 09:30-10:00 Finance Track
- [ ] 10:00-11:30 **Work Project**
- [ ] 11:30-12:00 Filing
- [ ] 12:00-13:00 Lunch/restart
- [ ] 13:00-13:30 **HR Course**
- [ ] 13:30-14:00 Meditation/Rest
- [ ] 14:00-15:00 **Work Project**
- [ ] 15:00-16:30 **Work Project**
- [ ] 16:30-17:00 Procedure
- [ ] 17:00-18:00 Commute/Deustch
- [ ] 18:00-23:00 Dinner/**3 hrs DS Course**
- [ ] 23:00 Sleep


Test for math equation: (in line) $$ X = AB $$

$$
(math box)
X = AB
$$

$$
\begin{tikzpicture}
\draw[gray, thick] (-1,2) -- (2,-4);
\draw[gray, thick] (-1,-1) -- (2,2);
\filldraw[black] (0,0) circle (2pt) node[anchor=west] {Intersection point};

\end{tikzpicture}
$$

<div id="diagram"></div>
<script>
  var options = {theme: 'simple'};
  var a = Diagram.parse("Alice->Bob: Hello Bob, how are you?" +
                        "Note right of Bob: Bob thinks" +
                        "Bob-->Alice: I am good thanks!​");
  a.drawSVG("diagram", options);
</script>

<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

https://mermaidjs.github.io/flowchart.html

```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
​```

or use jQuery to do all the work:

<div class="diagram">A->B: Message</div>
<script>
$(".diagram").sequenceDiagram({theme: 'hand'});
</script>

![Alt text](https://g.gravizo.com/svg?
  digraph G {
    aize ="4,4";
    mainly [shape=box];
    mainly -> parse [weight=80];
    parse -> execute;
    mainly -> init [style=dotted];
    mainly -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    mainly -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
  }
)
