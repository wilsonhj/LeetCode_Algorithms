# Problem: Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# Example 1:
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
# Example 2:
# Input: strs = [""]
# Output: [[""]]
# Example 3:
# Input: strs = ["a"]
# Output: [["a"]]

"""
Algorithm Explanation:
We can solve this problem efficiently by using a hash map where:
1. The key is the sorted version of each string (which will be the same for all anagrams)
2. The value is a list of strings that are anagrams of each other

For each string in the input:
1. Sort the characters to create a key
2. Add the original string to the list associated with that key
3. Finally, return all the values from the hash map

Time Complexity: O(n * k * log k) where:
    - n is the number of strings
    - k is the maximum length of a string
    - log k comes from sorting each string
Space Complexity: O(n * k) to store all strings in the hash map
"""
from typing import List
from collections import defaultdict

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    # Use defaultdict to automatically create a new list for each new key
    anagram_map = defaultdict(list)
    
    # Iterate through each string in the input
    for s in strs:
        # Sort the characters to create a key
        # This will be the same for all anagrams
        sorted_str = ''.join(sorted(s))
        # Add the original string to the list associated with this key
        anagram_map[sorted_str].append(s)
    
    # Return all the values from the hash map
    return list(anagram_map.values()) 