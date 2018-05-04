---
layout: post
title:  "Markov Chains: Introductions"
date:   2018-05-01 15:04:00 +0800
mathjax: true
mermaid: true
---

# Stochastic Process
* **Stochastic Process** can be defined as a family of random variables $$\{X(t), t\in T\}$$,
each $$r.v. X(t)$$ is defined on some **probability space**.
* $$T$$ is called **index set** or **parameter space** on which the parameter $$t$$ is defined.
* The values of $$X(t)$$ are called **states**. The set of all possible states forms the **state space** of the stochastic process.
* There are different kind of parameter space and state space:
<div class="mermaid">
graph LR;
    A[Stochastic Process]-->B[state space];
    A-->C[parameter space];
    B-->D[discrete states, which are called "Chains"];
    B-->E[continuous states];
    C-->D;
    C-->G[continuous parameter]
</div>


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

# Markov Property

**Markov** property, i.e. **Memoryless** property, states that the future evolution of
the process depends **only** on its **current** state.





> This is a brief study note of Markov Chains. Main reference as listed below:[^1]

***
[^1]: This is a brief study note of Markov Chains. Main reference as listed below:
