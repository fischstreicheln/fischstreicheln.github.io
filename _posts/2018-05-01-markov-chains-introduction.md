---
layout: post
title:  "Markov Chains: Introductions"
date:   2018-05-01 15:04:00 +0800
mathjax: true
mermaid: true
post-toc: true
---

## Stochastic Process
### Definition
* **Stochastic Process** can be defined as a family of random variables
$$\{X(t), t\in T\}$$, each $$r.v. X(t)$$ is defined on some **probability space**.
* $$T$$ is called **index set** or **parameter space** on which the parameter
$$t$$ is defined. Parameter $$t$$ usually represent time.
* The values of $$X(t)$$ are called **states**. The set of all possible states
forms the **state space** of the stochastic process.

### Classification
#### Parameter space and State space
<div class="mermaid">
graph LR;
    A(Stochastic Process)-->B(state space);
    A-->C(parameter space);
    B-->D(discrete states, which is referred to as a chain);
    B-->E(continuous states);
    C-->F(discrete parameters);
    C-->G(continuous parameters);
</div>
For instance, we could deal with

## Markov Property
*
**Markov** property, i.e. **Memoryless** property, states that the future evolution of
the process depends **only** on its **current** state.





> This is a brief study note of Markov Chains. Main reference as listed below:[^1]

***
[^1]: This is a brief study note of Markov Chains. Main reference as listed below:
