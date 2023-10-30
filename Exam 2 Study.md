Expected value: $E(X)=\mu=\int_A^Bxf(x) \ dx$, $E(h(X)) = \int_A^Bh(x)f(x) \ dx$
Variance: $V(X)=\sigma^2=\int_A^B(x-\mu)^2f(x) \ dx=E(X^2)-E(X)^2$
Standard Deviation: $SD(X)=\sigma=\sqrt{\sigma^2}$         cdf is sum/integral of pdf

Discrete Distributions:
- Binomial $\text{bin}(n,p)$: $b(x;n, p) = \left(n\atop x\right)p^x(1-p)^{n-x}; 0\leq x \leq n$ -- $\mu = np$ -- $\sigma^2=np(1-p)$ -- $\left({n \atop k}\right) = {n!\over k!(n-k)!}$
	- The experiment consists of a fixed $n$ number of trials
	- Each trial may have only one of two possible outcomes, defined as success (S) or failure (F)
	- Each trial is independent of each other
	- Each trial has the same probability of success $p$
- Geometric: $g(x; p)= (p)(1-p)^{x-1}; x\gt 0$ -- $\mu=1/p$ -- $\sigma^2 = {(1-p)\over p^2}$ -- chance of success on the $x$ trial after $x-1$ failures
- Poisson: $f(x;\mu) = {\mu^x\over x!}e^{-\mu}$ -- chance of x events occurring when $\mu$ is the average -- $\mu=\sigma^2$
	- Approximates binomial when $n>50$ and $np < 5$, using $\mu=np$

Continuous distributions (note: probability of $X=a$ is $0$ for any $a$):
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
- Lognormal $\text{lnorm}(\mu,\sigma)$: $f(x;\mu,\sigma) = {1\over \sqrt{2\pi} \sigma x} e^{-[\ln(x)-\mu]^2/(2\sigma^2)};x\geq 0$ --$F(x)=\Phi({\ln(x)-\mu\over\sigma})$
	- Similar to a normal distribution, X is lognormal if $Y=\ln (X)$ is normal
- Beta $\text{beta}(\alpha,\beta,A,B)$: $f(x;\alpha,\beta,A,B)={1\over B-A}{\Gamma(\alpha+\beta)\over\Gamma(\alpha)\Gamma(\beta)}\left(x-A\over B-A\right)^{\alpha-1}\left(B-x\over B-A\right)^{\beta-1}; A\leq x\leq B$
	- standard beta $A=0, B=1$ is $\text{beta}(\alpha,\beta)$: $f(x;\alpha,\beta)={\Gamma(\alpha+\beta)\over\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}; 0\leq x \leq 1$ -- $\text{beta}(1,1,A,B)\sim U(A,B)$
