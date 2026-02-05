# Quick Sort Algorithm

## What is Quick Sort?
Quick Sort is a sorting algorithm based on the divide and conquer technique.
It works by selecting a pivot element and partitioning the array into two parts:
elements smaller than the pivot and elements greater than the pivot.

---

## Key Concepts
- Pivot: The element chosen to divide the array
- Partition: Rearranging elements around the pivot
- Recursion: Applying the same logic to smaller subarrays

---

## How Quick Sort Works
1. Choose a pivot element from the array
2. Move all elements smaller than pivot to the left
3. Move all elements greater than pivot to the right
4. Pivot reaches its correct position
5. Recursively apply Quick Sort on left and right subarrays
6. Stop when subarray size becomes 0 or 1

---

## Example
Input:
[2, 4, 1, 5, 25, 6]

Pivot chosen: 6

After partition:
[2, 4, 1, 5, 6, 25]

Final Output:
[1, 2, 4, 5, 6, 25]

---

## Time Complexity
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n²) (when pivot is always smallest or largest)

---

## Space Complexity
- O(n) due to recursion (non in-place version)

---

## Advantages
- Very fast in practice
- Uses divide and conquer
- Widely used in real-world systems
- Efficient for large datasets

---

## Disadvantages
- Worst-case time complexity is O(n²)
- Recursive calls use extra memory
- Not stable by default

---

## When to Use Quick Sort?
- Large datasets
- When average performance matters more than worst-case
- When in-place version is acceptable

---

## Important Notes
- Choice of pivot affects performance
- Random or middle pivot reduces worst case
- Quick Sort is faster than Bubble, Selection, and Insertion Sort