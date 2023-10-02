
Definitions:
- Mean - sum of values divided by number
- Trimmed Mean - mean with percent of top and bottom removed
- Median - value in middle of sorted dataset (or average of two middles)
- Mode - most common value
- Range - difference between max and min
- Variance - sum of squared differences from the mean
- Standard Deviation - square root of variance

- Positive skew - tail is to the right of the graph, mean is to the right of median
- Negative sew - tail is to the left of the graph, mean is to the left of median

Formulas and Variables:
- IQR/fourth spread: $Q_3-Q_1$ -- the third and first quartiles are the median of the upper and lower halves of the data
- $S^2$ is the sample variance, $s$ is sample stdev, $\sigma^2$ is the population variance, and $\sigma$ is population stdev.
$$S^2 = {\sum X^2 - {(\sum X)^2\over N}\over N-1}$$
- When dealing with a population and sample, $\bar x$ is used to talk about sample mean, $\tilde x$ is used for median, $\bar \mu$ is used for population mean, and $\tilde \mu$ for population median.

Definitions:
$\cup$ - union (OR)
$\cap$ - intersection (AND)
$A'$ complement (NOT)

classical: the probability of any event is equally likely as any other
frequentist: probability of an event A is its relative frequency given an arbitrary number of repetitions of the experiment
Bayesian: the probability of a non-repeatable event can be estimated, but is ultimately impossible to know


Formulas:
$P(A) = 1-P(A')$
$P(A\cup B) = P(A) + P(B) - P(A\cap B)$
$(A_1'\cap A_2') = (A_1\cup A_2)'$
n choose k: $\left({n \atop k}\right) = {n!\over k!(n-k)!}$
probability of A given B: $P(A|B) = {P(A\cap B)\over P(B)}$
Bayes' Theorem: $P(A\cap B) + P(A\cap B') + P(A'\cap B) + P(A'\cap B') = 1$
Multiplication rule: $P(A\cap B) = P(A|B)P(B)=P(B|A)P(A)$

A is independent of B if $P(A|B)=P(A)$, alternatively $P(A\cap B) = P(A)\times P(B)$.



Definitions:
- rv - random variable function -- converts experiment outcomes into numbers
- pmf - probability mass function/probability distribution -- gives the probability from 0 to 1 of the rv being a certain value
- parameter -- value calculated from a pmf. it is said to characterize the pmf if it can be used to reconstruct the pmf
- cdf - cumulative density function -- gives the probability of the rv being less than or equal to some value
- binomial experiment -- satisfies 4 conditions:
	- consists of a fixed $n$ number of trials
	- Each trial may have only one of two possible outcomes, success (S) or failure (F)
	- Each trial is independent of each other
	- Each trial has the same probability of success $p$


Formulas:
pmf: $f(x)=P(X=x)$
- $f(x) \geq 0$ for all $x$
- $\sum_{x\in\mathbb R} f(x) = 1$
if $|r| < 1, \sum_1^{\infty}ar^{x-1} = {a\over 1 - r}$
cdf: $F(x) = P(X\leq x)$ = $\sum_{\text{all } t \leq x} f(t)$
- $P(a\leq X \leq b) = F(b) - F(a-)$
- $P(X=a) = F(a)-F(a-)$
- ($a-$ is the largest possible number that is less than $a$, so if the domain is integers, $a- = a-1$)
Expected value (aka mean): $E(X) = \mu_X = \sum_{\text{all } x}xf(x)$
- $E(h(X)) = \mu_{h(X)} = \sum_{\text{all x}} h(x) \cdot f(x)$
- $E(aX + b) = aE(X) + b$  or  $E(a\cdot h[X] + b) = aE(h[x]) + b$
Variance: $V(X) = \sigma_X^2 = E[(X-\mu_x)^2] = \sum(X-\mu_x)^2f(x) = E(X^2)-\mu_X^2$
- $V(aX + b) = a^2V(X)$ and $SD(aX+b) = |a|SD(X)$
Binomial probability distribution: $b(x;n, p) = \left(n\atop x\right)p^x(1-p)^{n-x}; 0\leq x \leq n$
- $n$ is number of trials, $p$ is success chance, $x$ is number of successes, returns probability of $x$
- $E(b(x;n,p)) = np$, and $V(b(x;n,p)) = np(1-p)$


Chapter 1:
1. sec 1.3 q 34, 37, 38
2. sec 1.3 q 41
3. sec 1.4 q 46, 48, 58, 59
4. .
5. ..
6. .
7. .
8. .

Chapter 2
9. definitions from 2.1 & 2.2
10. sec 2.4 q 42
11. sec 2.4 q 47, 48, 54
12. sec 2.5 q 77, 78
13. .
14. .
15. .

Chapter 3
16. get pmf from cdf
17. sec 3.3 q 36
18. binomial probability calculations
19. .