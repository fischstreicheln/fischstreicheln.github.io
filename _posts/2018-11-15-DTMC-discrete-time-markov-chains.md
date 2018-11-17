---
layout: post
title: "DTMC: Discrete Time Markov Chains"
ref: "DTMC: Discrete Time Markov Chains"
lang: en
category: [Probability, Stochastic Process]
author: Jason
date: 2018-11-15
last-update: 2018-11-17
img: random-walk.png
mathjax: true
mermaid: true
---

## Markov Chain
* **Markov Process** is a type of stochastic process with **Markov Property**.
* **Markov Chain** is a type of Markov process with discrete state space.

### Markov Property
**Markov Property**, i.e. **Memoryless** property, states that the future evolution of the process
depends **ONLY** on its **current** state, not depending on the passed transitions of the process.

### Discrete Time Markov Chain
* **Discrete Time Markov Chain(DTMC)** is a type of Markov Chain with discrete parameter space.
<div class="mermaid">
graph LR;
    A(Stochastic Process)--Markov Property-->B(Markov Process);
    B--Discrete State Space-->C(Markov Chain);
    C--Discrete Parameter Space-->D(Discrete Time Markov Chain);
</div>

When we study the behavior of a DTMC, we observe its state at a discrete set of times. In practical
application, when transitions from state to state can only take place, or fail to take place at
some time instants which are short enough to be ignored comparing to the time durations that the
process stays in states, we could approximately observe the process at a discrete set of time.
* When these time instants are mostly taken to be one unit apart, we could represent the discrete
parameter space, or say index set $$T$$ by the set of natural numbers $$\{0,1,2,\ldots \}$$.
* The successive observations define the set of $$r.v. X(t)$$ which could also be represented with a
set of $$\{X_0,X_1,X_2,\ldots ,X_n,\ldots \}$$ at time instants $$0,1,2,\ldots ,n,\ldots$$
respectively.

Mathematically, **DTMC $$\{X_n, n=1,2,...\}$$** is a stochastic process that satisfies the **Markov
property**, i.e. $$\forall n$$ and $$\forall$$ state $$x_n$$,

$$
\mathbf{Pr}(X_{n+1}=x_{n+1}\mid X_n=x_n, X_{n-1}=x_{n-1},...X_0=x_0) \\
=\mathbf{Pr}(X_{n+1}=x_{n+1}\mid X_n=x_n)
$$

## Notation
### States
For simplicity, we could use single letters, such as $$i, j, k, \ldots$$, to represent the states
instead of $$x_i, x_j, x_k, \ldots$$.

### (Single-step) Transition Probability
The single-step transition probability, or just the **transition probability**, of the Markov Chain
is given by the conditional probability of making transition from state $$x_n=i$$ to state
$$x_{n+1}=j$$ when the time parameter increases from $$n$$ to $$n+1$$, denoted as
$$p_{ij}(n)=\mathbf{Pr}(X_{n+1}=j\mid X_n=i)$$.






### Markov Chain
Markov Chain is a stochastic process with discrete state space and Markov property.

> {% include ref/more-about.html ref = "DTMC: Discrete Time Markov Chains" lang = page.lang %}

## Reference
There are some books I read while I was writing this post.[^1]

***
[^1]: {% include ref/bib.html idx = "_bib_book__BK_Stewart2009_" %}
