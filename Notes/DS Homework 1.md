# Problem 1
Code:
```C
#include <stdio.h>
#include <stdlib.h>

typedef struct listnode {
	int data;
	struct listnode *next;
} node;

node * getMiddleNode(node * head) {
	// Returns the center node, or if two centers returns the oldest node

	// first count the nodes to find the length of the list
	node *temp = head;
	int count = 0;
	while (temp != NULL) {
		temp = temp->next;
		count++;
	}

	// next move through the list to the target node
	int target = count / 2;
	temp = head;
	for (int i = 0; i < target; i++) {
		temp = temp->next;
	}
	
	return temp;
}

void printll(node * head) {
	printf("[");
	while (head != NULL) {
		printf("%d%s", head->data, head->next == NULL ? "" : ", ");
		head = head->next;	
	}
	printf("]\n");
}

node * appendNode(int data, node ** head) {
	// allocate space for the new node and check for errors
	node * next = malloc(sizeof(node));
	if (next == NULL) {
		printf("Error\n");
		return NULL;
	}

	// input data into the new node
	next->data = data;
	next->next = *head;

	// set the new node as the new head
	*head = next;

	// return the new node
	return next;
}

int main(void) {
	int res, temp;
	node *list = NULL;
	char buf[20];

	printf("enter one integer per line, or q to quit\n");

	while (buf[0] != 'q' && buf[0] != 'Q') {
		fgets(buf, 20, stdin);
		res = sscanf(buf, "%d", &temp);
		if (res > 0 && buf[0] != 'q' && buf[0] != 'Q') appendNode(temp, &list);
	}
	
	printf("list: ");
	printll(list);
	node * x = getMiddleNode(list);
	if (x) {
		printf("middle node: %p\n", x);
		printf("data: ");
		printll(x);
	} else printf("no middle node\n");
	
	return 0;
}
```

The time complexity of finding the middle of a linked list is:
$$2n + n/2$$
or, in big-O notation,
$$O(n)$$
where $n$ is the length of the linked list.

$2n$ comes from the first loop, where the whole list must be looped through to find its length, and 2 statements are made each loop, and the $n/2$ comes from the second loop, where the list is traversed to its centerpoint.

---
# Problem 2
## 2.1
```c
for (i = 1; i <= n; i *= 2) {
	for (j = 1; j <= i; j++) {
	// 7 assignment instructions
	}
}
```
Time complexity: $7(2n-1)$
big-O: $O(n)$

## 2.2
```c
for (i = 1; i <= n; i *= 2) {
	for (j = 1; j <= i; j *= 2) {
	// 9 assignment instructions
	}
}
```
Time complexity: $9(\log_2 n)(\log_2 n + 1)/2$
big-O: $O(\log^2 n)$

## 2.3
```c
for (i = 1; i < n; i *= 3) {
	for (j = i; j < n; j *= 2) {
	// 5 assignment instructions
	}
}
```
Time complexity: $5[(\log_3 n - 1)(\log_3 n - 2)/(2\log_3 2) - \log_3 n + 1]$
big-O: $O(\log^2 n)$

## 2.4
```c
for (i = 1; i <= n; i++) {
	for (j = 1; j <= n; j *= 2) {
	// 3 assignments
	}
}
```
Time complexity: $3n\log n$
big-O: $O(n\log n)$

---
# Problem 3
## 3.1
1) $4n^3 + 3n^2 + 2n - 5$
	big-Θ: $Θ(n^3)$
2) $n\log n + 3n - 15$
	big-Θ: $Θ(n\log n)$
## 3.2
1) $n^3\log(3n) + 2n^4 + 3n^2 + 127$
	big-O: $O(n^4)$
2) $\sqrt{2n} + 30\log(4n)^2 + 27n - 3$
	big-O: $O(\sqrt{n})$
3) $(n+1)! + 2^n$
	big-O: $O(n!)$
4) $\sqrt[3]{n^2} + 3n\log^2(2n) + 4n^{(6/7)}$
	big-O: $O(n\log^2 n)$
	