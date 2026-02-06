# Binary Search

## What is Binary Search?
Binary Search is a searching algorithm that finds an element by repeatedly dividing a sorted array into two halves.

## Why is it used?
- Faster than Linear Search
- Reduces number of comparisons
- Works efficiently for large datasets

## IMPORTANT CONDITION
⚠️ The array MUST be sorted.

## How does it work?
1. Find the middle element
2. Compare target with middle
3. If equal → found
4. If target is smaller → search left half
5. If target is larger → search right half
6. Repeat until found or range ends

## When should we use it?
- When data is sorted
- When performance matters
- Large datasets

## Where is it used?
- Database indexing
- Search systems
- Optimized APIs

## Time Complexity
- Best case: O(1)
- Worst case: O(log n)

## Key Rule
Binary Search fails on unsorted arrays.