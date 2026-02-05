# Insertion Sort Algorithm

## What is Insertion Sort?
Insertion Sort is a sorting algorithm that builds the sorted array one element at a time by inserting each new element into its correct position.

---

## How Insertion Sort Works
1. Assume the first element is sorted
2. Pick the next element as key
3. Compare key with sorted elements
4. Shift larger elements to the right
5. Insert key at the correct position
6. Repeat until sorted

---

## Example
Input:
[1, 3, 5, 4, 2]

Output:
[1, 2, 3, 4, 5]

---

## Time Complexity
- Best Case: O(n) ✅ (already sorted)
- Average Case: O(n²)
- Worst Case: O(n²)

---

## Space Complexity
- O(1)

---

## Advantages
- Fast for small datasets
- Adaptive (stops early if sorted)
- Stable sorting algorithm
- Used in real-world systems

---

## Disadvantages
- Slow for large datasets
- Not suitable for big data

---

## When to Use
- Small datasets
- Nearly sorted arrays