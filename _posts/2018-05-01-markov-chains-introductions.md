---
layout: post
title: "Markov Chains: Introductions"
ref: "Markov Chains: Introductions"
lang: en
date: 2018-05-01 15:04:00 +0800
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
    B-->D(discrete states, i.e. <b>chain</b>);
    B-->E(continuous states);
    C-->F(discrete parameters);
    C-->G(continuous parameters);
</div>
* For instance, we could deal with the stochastic process of **discrete state space**
where states are usually identified with a subset of the set of natural numbers
$$\{0,1,2,...\}$$. This stochastic process is referred to as a **Chain**.  
* If the stochastic process is of **discrete parameter space**, we could call it
**discrete parameter** stochastic process or **discrete-time** stochastic process.
* **Markov Process** is a special type of stochastic process. If the states space
is discrete, then it is a **Markov Chain**. Hence, there are discrete-time Markov
Chain and continuous-time Markov Chain with regards to different type of parameter
space.

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
* A **stationary** stochastic process is invariant under an arbitrary shift of
time origin, i.e. mathematically $$\forall \alpha, \forall n, t_i, x_i$$(with
$$i = 1,2,...,n$$),

$$P(X(t_1)<x_1,X(t_2)<x_2,...,X(t_n)<x_n) \\
= P(X(t_1+\alpha )<x_1,X(t_2+\alpha )<x_2,...,X(t_n+\alpha )<x_n)$$

## Markov Property
*
**Markov** property, i.e. **Memoryless** property, states that the future evolution of
the process depends **only** on its **current** state.





> This is a brief study note of Markov Chains. Main reference as listed below:[^1]

***
[^1]: {% include ref/bib.html idx = "_bib_book__BK_Stewart2009_" %}
