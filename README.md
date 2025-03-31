# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

---

Answer:

In my implementation, there is a `flip()` function that flips *n* elements in an array, starting at the beginning. The runtime of this function depends linearly on the size of the array. There should be $\frac{n}{2}$ iterations of the while-loop, but the constant doesn't matter, so it is $\Theta(n)$. 

In `pancakeSort()`, there is an outer for-loop that handles moving the max element of the unsorted portion of the array to the end of it. The unsorted portion has size *n* to begin with, then (*n* - *i*) at the *i*th iteration.

There are three cases for flipping based on where the max is in the unsorted portion of the array:
- Best case: Max element is already at end of unsorted portion
    - Flip everything in unsorted portion ($\Theta(n)$)
- Worst case: Neither beginning or end of unsorted portion
    - Flip up to the max element in unsorted portion, bringing it to top ($\Theta(n)$)
    - Flip everything in the unsorted portion, bringing max of unsorted portion to top of sorted portion ($\Theta(n)$)
- Otherwise: Beginning of unsorted portion
    - Flip unsorted portion to bring its max to top of sorted portion ($\Theta(n)$)

There is a constant difference in the number of flips per outer iteration in this function, regardless of best case, worst case, or otherwise. Therefore, moving the max element of the unsorted portion to its correct position in the array is $\Theta(n)$

Since this loop iteration runs *n* times, the overall function has a runtime complexity of $\Theta(n^2)$ for all cases.

In short, the function has a complexity of $\Theta(n^2)$ in terms of number of elements (pancakes) and $\Theta(n)$ in terms of number of flips.

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**