# Leetcode Study Guide
## Sliding Window
The Sliding Window pattern is commonly used when dealing with arrays or strings. It involves maintaining a window of fixed or variable size and sliding it through the data structure while calculating a specific value or checking a particular condition. This pattern helps reduce time complexity, as you don't need to recalculate values for elements within the window when it moves. Instead, you update the calculations based on the newly added and removed elements.

```java
public class SlidingWindow {
    public static int slidingWindowTemplate(int[] nums) {
        int windowStart = 0, windowEnd;
        int result = 0; // or other initial value
        // Additional data structures like HashMap or PriorityQueue can be declared here.

        for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            // Update your data structures with the current element in the window.

            // Check whether the current window satisfies the conditions.
            // If the window is too large or small, shrink it by moving the windowStart.
            while (/* condition is satisfied */) {
                // Update your data structures with the element being removed from the window.
                // Usually involves decrementing values, removing elements from data structures, etc.

                windowStart++; // Shrink the window.
            }

            // Update the result based on the current window.
        }

        return result;
    }
}
```

## Two Pointers
The Two Pointers pattern is useful when working with arrays or linked lists. Two pointers are used to traverse the data structure, often moving in different directions or at different speeds. This pattern helps to solve problems more efficiently by reducing the number of iterations required and minimizing extra memory usage.

```java
public class TwoPointers {
    public static int twoPointersTemplate(int[] nums) {
        int left = 0, right = nums.length - 1;
        int result = 0; // or other initial value

        while (left < right) {
            // Calculate a value or check a condition based on the current left and right pointers.

            if (/* condition is satisfied */) {
                // Update the result based on the current left and right pointers.

                left++; // Move the left pointer towards the right.
            } else {
                right--; // Move the right pointer towards the left.
            }
        }

        return result;
    }
}
```

## Fast & Slow Pointers
The Fast & Slow Pointers pattern is a variation of the Two Pointers pattern. It involves using two pointers that move through a data structure like a linked list at different speeds, typically with one pointer moving twice as fast as the other. This pattern is helpful for detecting cycles, finding middle elements, or solving other problems related to the structure of the data.

```java
public class FastSlowPointers {
    public static ListNode fastSlowPointersTemplate(ListNode head) {
        ListNode slow = head, fast = head;
        // Additional data structures or variables can be declared here.

        while (fast != null && fast.next != null) {
            fast = fast.next.next; // Move the fast pointer two steps.
            slow = slow.next; // Move the slow pointer one step;

        // Check whether the current slow and fast pointers meet a condition.
        if (/* condition is satisfied */) {
            // Update the result or perform an action based on the current slow and fast pointers.
        }
    }

    return /* result based on the slow or fast pointers */;
}
```

These templates can be adapted to solve various problems in their respective categories by modifying the conditions, calculations, and data structures as required.
