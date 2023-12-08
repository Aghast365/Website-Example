
## Definitions
- Mean - sum of values divided by number
	- Trimmed Mean - mean with percent of top and bottom removed
	- Geometric mean - $\sqrt[n]{x_1x_2\ldots x_n}$ 
- Median - value in middle of sorted dataset (or average of two middles)
- Mode - most common value
- Range - difference between max and min
	- IQR/fourth spread: $Q_3-Q_1$ -- the third and first quartiles are the median of the upper and lower halves of the data
- Variance - sum of squared differences from the mean
- Standard Deviation - square root of variance
- Positive (right) skew - tail is to the right of the graph, mean is to the right of median
- Negative (left) sew - tail is to the left of the graph, mean is to the left of median
- rv - random variable function -- converts experiment outcomes into numbers
- pmf - probability mass function/probability distribution -- gives the probability from 0 to 1 of the rv being a certain value
- parameter -- value calculated from a pmf. it is said to characterize the pmf if it can be used to reconstruct the pmf
- cdf - cumulative density function -- gives the probability of the rv being less than or equal to some value
- binomial experiment -- satisfies 4 conditions:
	- consists of a fixed $n$ number of trials
	- Each trial may have only one of two possible outcomes, success (S) or failure (F)
	- Each trial is independent of each other
	- Each trial has the same probability of success $p$

## Symbols
- $\cup$ - union (OR) $\cap$ - intersection (AND) $A'$ complement (NOT)
- Sample mean: $\bar x$ median: $\tilde x$ variance: $S^2$ stdev: $s$
- population mean:  $\bar \mu$, median: $\tilde \mu$ variance: $\sigma^2$ stdev: $\sigma$

## Formulas
$S^2 = {\sum X^2 - {(\sum X)^2\over N}\over N-1}$ --- n choose k: $\left({n \atop k}\right) = {n!\over k!(n-k)!}$
$P(A) = 1-P(A')$ --- $P(A\cup B) = P(A) + P(B) - P(A\cap B)$ ---  $(A_1'\cap A_2') = (A_1\cup A_2)'$
probability of A given B: $P(A|B) = {P(A\cap B)\over P(B)}$
Bayes' Theorem: $P(A\cap B) + P(A\cap B') + P(A'\cap B) + P(A'\cap B') = 1$
Multiplication rule: $P(A\cap B) = P(A|B)P(B)=P(B|A)P(A)$

A is independent of B if $P(A|B)=P(A)$, alternatively $P(A\cap B) = P(A)\times P(B)$.

PMF: $f(x)=P(X=x)$ -- $f(x) \geq 0$ for all $x$ -- $\sum_{x\in\mathbb R} f(x) = 1$
CDF: $F(x) = P(X\leq x)$ = $\sum_{\text{all } t \leq x} f(t)$ -- $P(a\leq X \leq b) = F(b) - F(a-)$ -- $P(X=a) = F(a)-F(a-)$
- ($a-$ is the largest possible number less than $a$ -- for integers, $a- = a-1$)

Geometric series: if $|r| < 1, \sum_1^{\infty} ar^{x-1} = {a\over 1 - r}$

Expected value: $E(X)=\mu=\int_A^Bxf(x) \ dx$, $E(h(X)) = \int_A^Bh(x)f(x) \ dx$
Variance: $V(X)=\sigma^2=\int_A^B(x-\mu)^2f(x) \ dx=E(X^2)-E(X)^2$
Standard Deviation: $SD(X)=\sigma=\sqrt{\sigma^2}$

### Discrete Distributions
- Binomial $\text{bin}(n,p)$: $b(x;n, p) = \left(n\atop x\right)p^x(1-p)^{n-x}; 0\leq x \leq n$ -- $\mu = np$ -- $\sigma^2=np(1-p)$ -- $\left({n \atop k}\right) = {n!\over k!(n-k)!}$
	- The experiment consists of a fixed $n$ number of trials
	- Each trial may have only one of two possible outcomes, defined as success (S) or failure (F)
	- Each trial is independent of each other
	- Each trial has the same probability of success $p$
- Geometric: $g(x; p)= (p)(1-p)^{x-1}; x\gt 0$ -- $\mu=1/p$ -- $\sigma^2 = {(1-p)\over p^2}$ -- chance of success on the $x$ trial after $x-1$ failures
- Poisson: $f(x;\mu) = {\mu^x\over x!}e^{-\mu}$ -- chance of x events occurring when $\mu$ is the average -- $\mu=\sigma^2$
	- Approximates binomial when $n>50$ and $np < 5$, using $\mu=np$

### Continuous distributions
(note: probability of $X=a$ is $0$ for any $a$)
- Uniform $U(A,B)$: $f(x)={1\over B-A}$, $F(x)={x-A\over B-A}$ -- chance of any x from A to B is equal
- Normal $N(\mu,\sigma)$: $f(x;\mu,\sigma)={1\over\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/(2\sigma^2)}$, $\phi(z)={1\over\sqrt{2\pi}}e^{-z^2/2}$
	- where $z={x-\mu\over\sigma}$. when $z>3.49$, $\phi(z)\approx1$; and when $z<-3.49$, $\phi(z)\approx0$
	- a z-critical value $z_\alpha$ is the point where $P(Z\geq z_\alpha) = \alpha$
	- 68% of values are within 1SD of the mean, 95% within 2, and 99.7% in 3
	- Approximates binomial when $np\geq 10$ and $n(1-p)\geq 10$ using $\mu=np, \sigma = \sqrt{np(1-p)}$
		- Step bounds such as $P(3\leq x\leq 6)$ to be $P(2.5\leq x \leq 6.5)$ to correct for the difference between discrete and continuous. 
- Exponential $\text{Exp}(\lambda)$: $f(x;\lambda)=\lambda e^{-\lambda x}; x\geq 0$ -- $F(x;\lambda)=1-e^{-\lambda x}$ -- $\mu = 1/\lambda$ -- $\sigma^2=1/\lambda^2$
	- gives the probability of a distance $x$ between events
- Gamma $\text{gamma}(\alpha,\beta)$: $f(x;\alpha,\beta)={1\over\beta^\alpha\Gamma(\alpha)}x^{\alpha-1}e^{-x/\beta}$ -- gamma(1,$\beta$) = Exp$({1\over\beta})$ -- $\mu=\alpha\beta$, $\sigma^2=\alpha\beta^2$
- Chi-square $\chi^2_v$: $f(x,v)={1\over2^{v/2}\Gamma(v/2)}x^{(v/2)-1}e^{-x/2}$ -- $\mu = v$ -- $\sigma^2 = 2v$
- Weibull $\text{Weibull}(\alpha, \beta)$: $f(x;\alpha,\beta)={\alpha\over\beta^\alpha}x^{\alpha-1}e^{-(x/\beta)^\alpha}; x\geq 0$ -- $\mu = \beta\Gamma(1+1/\alpha)$ -- $\sigma^2=\beta^2\{\Gamma(1+2/\alpha)+[\Gamma(1+1/\alpha)]^2\}$
- Lognormal $\text{lnorm}(\mu,\sigma)$: $f(x;\mu,\sigma) = {1\over \sqrt{2\pi} \sigma x} e^{-[\ln(x)-\mu]^2/(2\sigma^2)};x\geq 0$ -- $F(x)=\Phi({\ln(x)-\mu\over\sigma})$
	- Similar to a normal distribution, X is lognormal if $Y=\ln (X)$ is normal
- Beta $\text{beta}(\alpha,\beta,A,B)$: $f(x;\alpha,\beta,A,B)={1\over B-A}{\Gamma(\alpha+\beta)\over\Gamma(\alpha)\Gamma(\beta)}\left(x-A\over B-A\right)^{\alpha-1}\left(B-x\over B-A\right)^{\beta-1}; A\leq x\leq B$
	- standard beta $A=0, B=1$ is $\text{beta}(\alpha,\beta)$: $f(x;\alpha,\beta)={\Gamma(\alpha+\beta)\over\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}; 0\leq x \leq 1$ -- $\text{beta}(1,1,A,B)\sim U(A,B)$

## Random Samples
$X_1\ldots X_n$ is considered a simple random sample if each variable is independent and has the same probability distribution (iid)
- $E(\bar X) = \mu_{\bar X} = \mu$ -- the expected sample mean will equal the population mean
- $V(\bar X) = \sigma_{\bar X}^2 = \sigma^2/n$ and $SD(\bar X) = \sigma_{\bar X} = \sigma/\sqrt n$ (variance decreases as sample size increases)
- the standard deviation of $\bar X$ is called the standard error of the mean
- CLT: for sufficiently large $n$ ($n\geq 30$), $\bar X \sim N(\mu,\sigma/\sqrt n)$, so $P(a\leq \bar X \leq b) = \Phi({b-\mu\over\sigma/\sqrt n}) - \Phi({a-\mu\over\sigma/\sqrt n})$
- For $\sum X_i = T_0$, $E(T_0) = \mu_{T_0} = n\mu$, $V(T_0) = \sigma^2_{T_0} = n\sigma^2$ and $SD(T_0) = \sigma_{T_0} = \sqrt n \sigma$
	- Central limit theorem (CLT) can be used here as well: $T_0\sim N(n\mu, \sqrt n \sigma)$
- $\text{MSE=}E[(\hat\theta-\theta)^2]$ -- $\text{Bias}(\hat\theta,\theta)=E(\hat \theta)-\theta$ 
- Normal CI (n>30), $E=z_{\alpha/2}{S\over \sqrt n}$ or $n=\left(z_{a/2} \times \sigma\over E\right)^2$  using $P(Z\geq z_{\alpha/2}) = \alpha/2$
	-  99% CI: $z_{\alpha/2}=2.575$ -- 95% CI: $z_{\alpha/2}=1.96$ -- 90% CI: $z_{\alpha/2}=1.645$
- If $X\sim\text{bin}(n,p)$, the sample proportion $\hat p = X/n$ estimates $p$
	- $\hat p \ \dot\sim \; N \left(p,\sqrt{p(1-p)\over n}\right)$ -- score CI: ${\hat p + z_{\alpha/2}^2/2n\over 1+z^2_{\alpha/2}/n}\pm z_{\alpha/2}{\sqrt{\hat p (1-\hat p)/n + z_{\alpha/2}^2/(4n^2)}\over 1+z_{\alpha/2}^2/n}$ -- simple CI: $\hat p \pm z_{\alpha/2}\sqrt{\hat p(1-\hat p)/n}$
	- both CIs fail when $np<10$ or $n(1-p)<10$ -- $n={z_{\alpha/2}^2\hat p(1-\hat p)\over E^2}$
- CI for $\sigma^2$: $\left[{(n-1)S^2\over \chi^2_{1-\alpha/2;n-1}},{(n-1)S^2\over \chi^2_{\alpha/2;n-1}}\right]$ -- For $v>40$, $\chi^2_{\alpha;\nu}\approx \nu\left(1-{2\over 9\nu} +z_\alpha \sqrt{2\over 9\nu}\right)^3$ 
- When n<30 and population is normal, $E=t_{\alpha/2;n-1}{S\over\sqrt n}$
- prediction interval (n<30): $\bar x \pm t_{\alpha/2,\nu}S\sqrt{1+{1\over n}}$ -- $\nu=n-1$ 

## Hypothesis Testing
- the standardized value $z$ (or $t$ with normal population for n<40) should fall 
	- above or at $z_\alpha$ for an upper-tailed test ($H_a:\theta >\theta_0$)
	- below or at $-z_\alpha$ for a lower-tailed test ($H_a:\theta<\theta_0$)
	- either above $z_{\alpha/2}$ or below $-z_{\alpha/2}$ for a two-tailed test ($H_a:\theta\neq\theta_0$)
- Type I error -- the null is rejected when the null is true (false positive)
- Type II error -- the null is retained when the null is false (false negative)
- The probability of a type I error is called the alpha level,  and the probability of a type II is called the beta level. $1-\beta$ is called the power.
- The alpha level is the same as the significance level, but the beta level must be calculated based on circumstance. A smaller alpha level results in a larger beta level.
	- A power curve can be used to determine the beta level for conclusions about the mean.
- For independent populations with $n\geq 30$, $Z={\bar X - \bar Y - (\mu_1-\mu_2) \over \sqrt{ { \sigma_1^2 \over n_1 } +{ {\sigma_2^2}\over n_2} } }$ follows a normal distribution. 
	- Sample variances may be used if $n_1$ and $n_2$ are both $\geq 40$
	- If both $n$ are <30, the t-distribution with $\nu=n_1+n_2-2$ may be used, except replacing  $\sigma$ with $S_p^2={n_1-1\over \nu}S_1^2+{n_2-1\over \nu}S_2^2$ (variances must be roughly equal)
	- Or, if the populations are not independent but are both normal (or n>30), the t-distribution may be used, with $\nu={\left({S_1^2\over n_1}+{S_2^2\over n_2}\right)^2\over{(S_1^2/n_1)^2\over n_1-1}+{(S_2^2/n_2)^2\over n_2-1}}$ 
