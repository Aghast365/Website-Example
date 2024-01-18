
1. Be able to state the definitions of injection, range, surjection, countable, bijection, and equinumerous.
	- Injection: A function where each element in the domain maps to a unique element in the range.
	- Range: The set of all possible outputs of a function.
	- Surjection: A function where the range equals the codomain.
	- Countable: A property of a set which means it is either finite or there exists a bijection between it and the natural numbers.
	- Bijection: A function that is both an injection and a surjection.
	- Equinumerous: Two sets are equinumerous if they are finite and have the sane number of members, or if there exists a bijection between them.
1. State the injection/surjection existence theorem.
	- There exists an injection from A to B if and only if there exists a surjection from B to A.
2. State the bijection existence theorem.
	- There exists a bijection between A and B if and only if there exist injections from A to B and from B to A.

Of the following functions from $\mathbf R$ to $\mathbf R$, which are injective? which are surjective? Which are bijective?
4. $λx.x^2$              Neither
5. $λx.x^3$              Bijective
6. sine                Neither
7. $λx. |x|$             Neither
8. $λx.(x^3 - x^2)$  Surjective
9. $λx. e^x$              Injective

In each case, tell whether there is an injection from A to B, whether there is a surjection from A to B, and whether there is a bijection from A to B.
10. $A = \{10,20,30\}, B = \{8, 9, 10, 11, 12\}$
	- Exists injection but no surjection or bijection
11. $A = \{10, 73\}, B = \{9,109\}$
	- Exists injection, surjection, and bijection
12. $A=\{12,8,7,6\},B=\{4,3,2\}$
	- Exists surjection but no injection or bijection

Prove that each of the following sets is equinumerous with N by defining (1) either an injection from the given set to N or a surjection from N to the given set, and (2) either injection from N to the given set, or a surjection from the given set to N. Implement the functions you define, in Python or another programming language.
13. $\mathbf N \cup \{(1,1)\}$  
```python
def injectionStoN(x, y): # takes either {1,2...} or (1,1)
	if (x==1 and y) return 1; # if tuple recieved return 1
	else return x+1; # returns 2... for non-tuple

def injectionNtoS(x): # takes any {1,2...}
	if (x==1) return (1,1); # return tuple for 1
	else return x-1; # return 1... for any 2...
```
14. $\mathbf N \cup \{(1,1),\ldots,(1,20)\}$
```python
def injectionStoN(x, y): # takes either {1,2...} or {(1,1)...(1,20)}
	if (x==1 and y) return y; # return 1...20 if tuple recieved
	else return x+20; # return 21... if not tuple recieved

def injectionNtoS(x): # takes {1,2...}
	if (x<=20) return (1,x); # returns tuple for 1...20
	else return x-20; # returns 1... starting at input 21
```
15. $\mathbf Z$
```python
def injectionZtoN(x): # accepts positive and negative (and 0)
	if (x>0) return x*2; # pos returns 2,4,6...
	else return (-x*2)+1; # neg/zero returns 1,3,5...

def injectionNtoZ(x): # accepts {1,2,...}
	if (x%2 == 1) return -(x-1)/2; # number is odd return 0,-1,-2...
	else return x/2; # number is even return 1,2,...
```
16. $\mathbf N\times \mathbf N$
```python
import math;
def injectionNNtoN(x, y): # assigns each tuple to a unique integer based on its position in a 2d matrix, using diagonal rows
	prevRowSz = x+y-2;
	sumPrevRowSz = (prevRowSz)*(prevRowSz+1)/2;
	return sumPrevRowSz + x;

def injectionNtoNN(x): # gets the row and index of the corresponding tuple using the inverse of the previous function
	prevRowSz = math.floor((-1 + math.sqrt(1+8*x))/2);
	sumPrevRowSz = (prevRowSz)*(prevRowSz+1)/2;
	rowIndex = x - sumPrevRowSz;
	if (rowIndex == 0):
		rowIndex = prevRowSz;
		prevRowSz-= 1;
	return (rowIndex, prevRowSz + 2 - rowIndex);	
```
17. $\mathbf{N\times N\times N}$
```python
def injectionNNNtoN(x, y, z):
	return (2**x) * (3**y) * (5**z);

def injectionNtoNNN(a):
	x=0; y=0; z=0;
	while(a%2 == 0):
		a /= 2;
		x += 1;
	while(a%3 == 0):
		a /= 3;
		y += 1;
	while(a%5 == 0):
		a /= 5;
		z += 1;
	return (x,y,z);
```
18. $\mathbf Q$
```python
import math;
def injectionQtoN(x):
	powerOfTen = 1; # start as 1 to make the power a natural number
	while (float(int(x)) != x):
		x *= 10;
		powerOfTen += 1;
	
	# now x is an integer, so use prior code to convert that to natural number
	if (x>0): nat = x*2;
	else: nat = (-x*2)+1;

	# now nat and powerOfTen make a tuple of natural numbers, so using code from above to convert that to a single natural number
	prevRowSz = nat+powerOfTen-2;
	sumPrevRowSz = (prevRowSz)*(prevRowSz+1)/2;
	return sumPrevRowSz + nat;

def injectionNtoQ(x):
	# first use prior reverse tuple code
	prevRowSz = math.floor((-1 + math.sqrt(1+8*x))/2);
	sumPrevRowSz = (prevRowSz)*(prevRowSz+1)/2;
	rowIndex = x - sumPrevRowSz;
	if (rowIndex == 0):
		rowIndex = prevRowSz;
		prevRowSz-= 1;
	
	nat = rowIndex;
	powerOfTen = prevRowSz + 2 - rowIndex;
	
	# now reverse nat back to integer
	if (nat%2 == 1): z = -(nat-1)/2;
	else: z = nat/2; 
	
	#finally reverse the initial process
	powerOfTen -= 1;
	for i in range(int(powerOfTen)):
		z /= 10;
	
	return z;
```
19. The set of all finite strings of ascii characters.
```python
# assuming 128 ascii characters, use change of base formula
def injectionASCIItoN(asc):
	num = 0;
	for i,c in enumerate(asc):
		num += ord(c)*(128**i);
	return num;
	
def injectionNtoASCII(x):
	asc = "";
	while(x>0):
		asc += chr(x % 128);
		x = int(x/128);
	return asc;
```