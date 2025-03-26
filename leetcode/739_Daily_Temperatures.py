# Problem: Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

# Example 1:
# Input: temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]
# Example 2:
# Input: temperatures = [30,40,50,60]
# Output: [1,1,1,0]
# Example 3:
# Input: temperatures = [30,60,90]
# Output: [1,1,0]

"""
Algorithm Explanation:
Use a monotonic stack to solve this problem efficiently. The stack keeps track of indices
of temperatures in decreasing order. This means that for any index in the stack, the temperature
at that index is greater than all temperatures at indices below it in the stack.

For each temperature:
1. Check if it's greater than the temperature at the top of the stack
2. If it is, we've found a warmer temperature for all temperatures in the stack
3. Calculate the number of days to wait and store it in the result array
4. Push the current index to the stack

Time Complexity: O(n) - Each index is pushed and popped at most once
Space Complexity: O(n) - In worst case, all indices might be in the stack
"""
from typing import List

def dailyTemperatures(temperatures: List[int]) -> List[int]:
    # Get the length of the input array
    n = len(temperatures)
    
    # Initialize result array with zeros (default case when no warmer temperature is found)
    result = [0] * n
    
    # Stack to store indices of temperatures in decreasing order
    stack = []
    
    # Iterate through each temperature
    for i in range(n):
        # While stack is not empty and current temperature is greater than
        # the temperature at the index stored at the top of the stack
        while stack and temperatures[i] > temperatures[stack[-1]]:
            # Pop the index from stack (we've found a warmer temperature for this index)
            prev_index = stack.pop()
            # Calculate number of days to wait (current index - previous index)
            result[prev_index] = i - prev_index
        # Push current index to stack (it might be the next warmer temperature for future indices)
        stack.append(i)
    
    return result 