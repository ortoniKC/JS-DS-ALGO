# Java Script - DS & Algorithm


[1. Binary Search](https://youtu.be/xw_SOm9Tc-c)
 - Binary Search is a searching technique which works on the Divide and Conquer approach. 
 - It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN)

 ### Steps:
 - BASE CONDITION: If starting index is greater than ending index return false.
Compute the middle index.
 - Compare the middle element with number x. If equal return true.
 - If greater, call the same function with ending index = middle-1 and repeat step 1.
 - If smaller, call the same function with starting index = middle+1 and repeat step 1.

[2. Linear serach](https://youtu.be/xw_SOm9Tc-c)
 - In computer science, a linear search or sequential search is a method for finding an element within a list. 
 - It sequentially checks each element of the list until a match is found or the whole list has been searched.

 - Worst complexity: O(n)
 - Average complexity: O(n)
 - Space complexity: O(1)
 - Average performance: O(n/2)

[3. Bubble Sort](https://youtu.be/byHQ51uuFHw)
 - What is a JavaScript Bubble Sort? A bubble sort, or a “sinking sort,” is a simple sorting algorithm that compares a pair of adjacent elements in a list. 
 - If an element is not in the right order, we swap the element with the one before. Otherwise, the element remains in the same place.
 
 - The worst case scenario: quadratic O(n²)
 - Best case scenario: linear O(n)
 - The space complexity of Bubble Sort is O(1)

[4. Selection Sort](https://youtu.be/F9Nr7hjaRQI)
 - The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
 - The algorithm maintains two subarrays in a given array.

 -The subarray which is already sorted. 
 - Remaining subarray which is unsorted.
 - In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
 - Worst complexity: n^2
 - Average complexity: n^2
 - Best complexity: n^2
 - Space complexity: 1

[5. Insertion sort](https://youtu.be/8Is4U6vXYP8)
 - Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
 - It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 - Worst complexity: n^2
 - Average complexity: n^2
 - Best complexity: n
 - Space complexity: 1