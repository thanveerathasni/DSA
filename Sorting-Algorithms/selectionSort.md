# Selection Sort Algorithm

## What is Selection Sort?
Selection Sort is a sorting algorithm that repeatedly selects the smallest element from the unsorted part of the array and places it at the correct position.

---

## How Selection Sort Works
1. Divide the array into sorted and unsorted parts
2. Find the minimum element in the unsorted part
3. Swap it with the first unsorted element
4. Move the boundary forward
5. Repeat until sorted

---

## Example
Input:
[1, 3, 5, 4, 2]

Output:
[1, 2, 3, 4, 5]

---

## Time Complexity
- Best Case: O(n²)
- Average Case: O(n²)
- Worst Case: O(n²)

---

## Space Complexity
- O(1)

---

## Advantages
- Simple logic
- Fewer swaps than bubble sort
- In-place sorting

---

## Disadvantages
- Slow for large datasets
- Always O(n²) even if array is sorted

---

## When to Use
- Learning sorting logic
- Small datasets