# Merge Sort Algorithm

## What is Merge Sort?
Merge Sort is a sorting algorithm based on the divide and conquer technique.
It divides the array into smaller subarrays, sorts them, and then merges them back together.

---

## Key Concepts
- Divide: Split the array into halves
- Conquer: Sort each half recursively
- Merge: Combine sorted halves into one sorted array

---

## How Merge Sort Works
1. Divide the array into two halves
2. Recursively divide until each subarray has one element
3. Merge subarrays in sorted order
4. Repeat merging until one sorted array remains

---

## Example
Input:
[2, 4, 1, 5, 25, 6]

Output:
[1, 2, 4, 5, 6, 25]

---

## Time Complexity
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

---

## Space Complexity
- O(n) (extra space needed for merging)

---

## Advantages
- Guaranteed O(n log n) time
- Stable sorting algorithm
- Works well for large datasets
- Predictable performance

---

## Disadvantages
- Uses extra memory
- Slower than Quick Sort in practice for small arrays

---

## When to Use Merge Sort?
- Large datasets
- When stability is required
- When worst-case performance matters

---

## Important Notes
- Merge Sort is stable
- Used internally in many systems
- Basis for Tim Sort