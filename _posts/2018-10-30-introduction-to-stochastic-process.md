---
layout: post
title: "Introduction to Stochastic Process"
ref: "Introduction to Stochastic Process"
lang: en
division: Mathematics
category: [Probability, Stochastic Process ]
tags: Markov
author: Jason
date: 2018-10-30
last-update: 2018-11-15
img: random-walk.png
mathjax: true
mermaid: true
---

## Stochastic Process
### Definition
When we study the behavior of a random system, we are interested in how the system evolves in time.
The evolution of the system is a **random process** or **stochastic process**.

With the following assumption:
* The system occupy one and only one state at any moment in time;
* The evolution of the system can be represented by the transitions from state to state.

In this way, the process can be represented by all possible states that the system may occupy
and which state the system occupy in different time stamp throughout the whole lifetime of the
system. Mathematically,
* **Stochastic Process** can be defined as a family of random variables $$\{X(t), t\in T\}$$,
each $$r.v. X(t)$$ is defined on some **probability space**.
* $$T$$ is called **parameter space** on which the parameter $$t$$ is defined. When the parameter
$$t$$ is discrete, $$T$$ is also called **index set**. Parameter $$t$$ usually represent time.
* The values of $$r.v. X(t)$$ are called **states**. The set of all possible states forms the
**state space** of the stochastic process.

### Classification
#### Parameter space and State space
<div class="mermaid">
graph LR;
    A(Stochastic Process)-->B(state space);
    A-->C(parameter space);
    B-->D(discrete states, i.e. <b>chain</b>);
    B-->E(continuous states);
    C-->F(discrete parameters);
    C-->G(continuous parameters);
</div>
* For instance, we could deal with the stochastic process of **discrete state space** where states
are usually identified with a subset of the set of natural numbers $$\{0,1,2,\ldots\}$$. This
stochastic process is also referred to as a **Chain**.  
* If the stochastic process is of **discrete parameter space**, we could call it **discrete
parameter** stochastic process or **discrete-time** stochastic process.
* **Markov Process** is a special type of stochastic process. If the state space of a Markov Process
is discrete, then this process is a **Markov Chain**. Also, there are discrete-time Markov Chain and
continuous-time Markov Chain with regards to different type of parameter space.

#### Time Dependency of Evolution
<div class="mermaid">
graph LR;
    A(Stochastic Process)-->B(initial time);
    A-->C(elapsed time);
    B--depending-->D(non-stationary);
    B--not depending-->E(stationary);
    C--depending-->F(non-homogeneous);
    C--not-depending-->G(homogeneous);
</div>
* A **stationary** stochastic process is invariant under an arbitrary shift of time origin, i.e.
mathematically $$\forall \alpha, \forall n, t_i, x_i$$(with $$i = 1,2,\ldots ,n$$),

$$
\mathbf{Pr}(X(t_1)<x_1,X(t_2)<x_2,\ldots ,X(t_n)<x_n) \\
= \mathbf{Pr}(X(t_1+\alpha )<x_1,X(t_2+\alpha )<x_2,\ldots ,X(t_n+\alpha )<x_n)
$$

* The transitions of a **homogeneous** stochastic process is not depending on the elapsed time from
initiation.
* In either homogeneous or non-homogeneous case, the stochastic process may or may not be stationary.

#### Dependency of Passed Evolution
<div class="mermaid">
graph LR;
    A(Stochastic Process)-->B(<center>Relation between<br>Future Evolutions and<br>Passed Transitions</center>);
    B--not depending-->C(<center>Depending on<br>current state <b>ONLY</b></center>);
    B--depending-->D(<center>Depending on<br>current state <b>AND</b> passed transitions</center>);
    C-->E(<b>Markov Process</b>);
</div>

## Markov Process
### Markov Property
* **Markov Process** is a type of stochastic process with **Markov Property**.
* **Markov Property**, i.e. **Memoryless** property, states that the future evolution of the process
depends *ONLY* on its *current* state, not depending on the passed transitions of the process.

### Classification
Applying the classification rules of stochastic process, we also have the following types of Markov Process.
<div class="mermaid">
graph LR;
    A(Markov Process)-->B(<center>state space<br>parameter space</center>);
    B-->C(<center>discrete states<br>i.e. <b>Markov Chain</b></center>);
    B-->D(continuous states);
    C-->E(<center>Discrete Time Markov Chain<br>i.e. <b>DTMC</b></center>);
    C-->F(<center>Continuous Time Markov Chain<br>i.e. <b>CTMC</b></center>);
    D-->G(Discrete Time Markov Process);
    D-->H(Continuous Time Markov Process);
    A-->I(initial time);
    A-->J(elapsed time);
    I-->K(stationary or non-stationary);
    J-->L(homogeneous or non-homogeneous);
</div>

### Markov Chain
Markov Chain is a stochastic process with discrete state space and Markov property.

> {% include ref/more-about.html ref = "DTMC: Discrete Time Markov Chains" lang = page.lang %}

## Reference
There are some books and articles I read while I was writing this post.[^1]

***
[^1]: {% include ref/bib.html idx = "_bib_book__BK_Stewart2009_" %}
