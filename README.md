# LeetCode Preparation

This repository contains solutions to LeetCode problems implemented in TypeScript, Python, and JavaScript. Each solution includes detailed explanations and comments to help understand the algorithms and their implementations.

## Structure

Each problem is stored in its own file named with the LeetCode problem number and title, for example:
- `739_Daily_Temperatures.ts`
- `200_Num_Of_Islands.ts`
- `951_flip_equivalent_trees.py`
- `951_flip_equivalent_trees.js`

## Solutions

### Daily Temperatures (739)
- Problem: Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
- Solution: Uses a monotonic stack approach with O(n) time complexity.

### Number of Islands (200)
- Problem: Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
- Solution: Uses DFS approach to count connected components.

### Flip Equivalent Binary Trees (951)
- Problem: Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.
- Solution: Uses recursive approach to check if trees are equivalent with or without flipping subtrees.
- Implementations: Available in both Python and JavaScript.
- Time Complexity: O(min(n1, n2)) where n1 and n2 are the number of nodes in each tree.
- Space Complexity: O(min(h1, h2)) where h1 and h2 are the heights of the trees.

## Getting Started

1. Clone the repository
2. Install dependencies (if any)
3. Run the solutions using TypeScript compiler, Python, or Node.js

## Contributing

Feel free to contribute by:
- Adding new solutions
- Improving existing solutions
- Adding test cases
- Enhancing documentation 