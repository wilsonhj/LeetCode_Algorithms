# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:
        # If both are None, they are flip equivalent
        if not root1 and not root2:
            return True
        
        # If one is None but other is not, they are not flip equivalent
        if not root1 or not root2:
            return False
        
        # If root values are different, they are not flip equivalent
        if root1.val != root2.val:
            return False
        
        # Check if trees are equivalent without flip
        no_flip = self.flipEquiv(root1.left, root2.left) and self.flipEquiv(root1.right, root2.right)
        
        # Check if trees are equivalent with flip
        with_flip = self.flipEquiv(root1.left, root2.right) and self.flipEquiv(root1.right, root2.left)
        
        # Return true if either case works
        return no_flip or with_flip

# Time complexity: O(min(n1, n2)) where n1 and n2 are the number of nodes in each tree
# Space complexity: O(min(h1, h2)) where h1 and h2 are the heights of the trees, due to recursion stack

# Example usage:
# root1 = [1,2,3,4,5,6,null,null,null,7,8]
# root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
# solution = Solution()
# result = solution.flipEquiv(root1, root2)  # Should return True 