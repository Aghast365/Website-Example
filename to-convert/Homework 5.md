## 4.4
> Construct a Turing machine with one tape that receives as input a non-negative integer $x$ and returns as output the integer $x + 1$. Integers are represented as binary strings.

> **Start of the computation**: The tape contains the binary representation of the input $x$. The tape head is on the leftmost symbol and the Turing machine is in the start state $q_0$. For example, if $x = 431$, the tape looks as follows:

$$\displaylines{
\cdots\begin{array}{|c|c|c|}\hline 
\square & 1 & 1 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & \square
\\\hline\end{array}\cdots\\\kern -12.5em \uparrow
}$$
> **End of the computation**: The tape contains the binary representation of the integer $x + 1$. The tape head is on the leftmost symbol and the Turing machine is in the final state $q_1$. For our example, the tape looks as follows:

$$\displaylines{
\cdots\begin{array}{|c|c|c|}\hline 
\square & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 & \square
\\\hline\end{array}\cdots\\\kern -12.5em \uparrow
}$$

> The Turing machine in this exercise does not have an accept state or a reject state; instead, it has a final state $q_1$. As soon as state $q_1$ is entered, the Turing machine terminates. At termination, the contents of the tape is the output of the Turing machine.

The turing machine has input alphabet $\Sigma = \{1,0\}$, tape alphabet $\Gamma = \{1,0,\square\}$, and states $Q=\{q_0,q_a,q_e,q_1\}$, where $q_0$ is the start state and $q_1$ is the terminal state. The transition function $\delta$ is specified by:

$$
\begin{array}{c}
	\begin{aligned}
		&q_01 \to q_01R\\
		&q_00 \to q_00R\\
		&q_0\square \to q_a\square L
	\end{aligned} & 
	\begin{aligned}
		&q_a1 \to q_a0L\\
		&q_a0 \to q_e1L\\
		&q_a\square \to q_11N
	\end{aligned} &
	\begin{aligned}
		&q_e1 \to q_e1L\\
		&q_e0 \to q_e0L\\
		&q_e\square \to q_1\square R
	\end{aligned}
\end{array}
$$

---

## 4.6
> Give an informal description (in plain English) of a Turing machine with one tape that receives as input two non-negative integers $x$ and $y$, and returns as output the integer $x + y$. Integers are represented as binary strings. If you are an adventurous student, you may give a formal definition of your Turing machine.

This turing machine would be a modification of the one defined in 4.4. With the head of both tapes starting at the lowest bit of each number, if the second tape head reads a 1, then the same method as the previous turing machine is used to add 1 to the number in the first tape. Then, the head of both tapes is moved back to the beginning of the first tape, the lowest bit on the second tape it is set to the blank symbol, and the algorithm is repeated starting from the next lowest bit on the second tape, until the second tape is fully consumed.

---

## 4.9
> Construct a Turing machine with one tape that receives as input a string of the form $1^n$ for some integer $n \geq 0$; thus, the input is a string of $n$ many $1$s. The output of the Turing machine is the string $1^n\square1^n$. Thus, this Turing machine makes a copy of its input.

> The input alphabet is $\Sigma = \{1\}$ and the tape alphabet is $\Gamma = \{1, \square\}$.

> Start of the computation: The tape contains a string of the form $1^n$, for some integer $n \geq 0$, the tape head is on the leftmost symbol, and the Turing machine is in the start state. For example, if $n = 4$, the tape looks as follows:

$$\displaylines{
\cdots\begin{array}{|c|c|c|}\hline 
\square & 1 & 1 & 1 & 1 & \square
\\\hline\end{array}\cdots\\\kern -4.75em \uparrow
}$$

> End of the computation: The tape contains the string $1^n\square1^n$, the tape head is on the $\square$ in the middle of this string, and the Turing machine is in the final state. For our example, the tape looks as follows:

$$\displaylines{
\cdots\begin{array}{|c|c|c|}\hline 
\square & 1 & 1 & 1 & 1 & \square & 1 & 1 & 1 & 1 & \square
\\\hline\end{array}\cdots\\ \kern -.1em \uparrow
}$$

> The Turing machine in this exercise does not have an accept state or a reject state; instead, it has a final state. As soon as this state is entered, the Turing machine terminates. At termination, the contents of the tape is the output of the Turing machine.

This turing machine has input alphabet $\Sigma = \{1\}$, tape alphabet $\Gamma = \{1,\square\}$, and states $Q=\{q_1, q_2,q_3,q_4,q_5,q_6,q_7,q_8,q_9,q_{\text{end}}\}$, with start state $q_1$ and terminal state $q_\text{end}$. The transition function $\delta$ is specified by the following diagram:

![](Attachments/turing%20copy%20diagram.jpg)

This copies the string by moving a blank space through the initial string to keep track of the position while copying, as in this diagram:

![](Attachments/turing%20copy%20example.jpg)
