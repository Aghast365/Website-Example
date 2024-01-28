
```python
import math;
def S(i, j): 
	return math.floor(i / (10 ** (j-1))) % 10;
	# returns the jth digit of i
```

This function outputs the sequence $T(1), T(2), ...$ when given the inputs $i= \ldots + T(3) \times 10^2 + T(2) \times 10^1 + T(1) \times 10^0$ and $j=1, 2, 3,\ldots$

This means that theoretically, for any row $S(x)$ that covers the sequence $T$ for its first $n$ digits, there exists the row $S(y) = S(x + (T(n+1))\times 10^n)$ that covers $T$ for its first $n+1$ digits.

However, while this function $S$ can represent any finite sequence of numbers defined by any $T$, it is provably impossible for any function $S$ to contain all possible infinite sequences defined by every possible $T$. Using an example:

$$\begin{matrix}
\boxed1&1&8&4&7&\ldots \\\\
0&\boxed6&9&7&7&\ldots \\\\
3&1&\boxed5&2&8&\ldots \\\\
1&4&8&\boxed8&5&\ldots \\\\
0&9&7&6&\boxed4&\ldots \\\\
\vdots&\vdots&\vdots&\vdots&\vdots&\ddots
\end{matrix}$$

Taking just these five unique sequences, it is possible to create a sequence that is different from each by changing just one number of each along the diagonal: a first digit other than 1 will be different from the first sequence, a second different from 6 will be different from the second sequence, and so on. 

Even if there are infinitely many sequences, as long as the sequences themselves are infinite, following this process guarantees a sequence that will be different from all others. 

This property indicates that it would be impossible to create a function from $\mathbb N$ that could output all possible infinite sequences--if the results of such a function were organized into a matrix like the one above, the same method as before could be used to create a sequence not covered by the function.
