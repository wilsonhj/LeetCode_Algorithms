from flip_equivalent_trees import Solution, TreeNode

def build_tree(values):
    """Helper function to build a tree from a list representation."""
    if not values:
        return None
    
    root = TreeNode(values[0])
    queue = [root]
    i = 1
    
    while queue and i < len(values):
        node = queue.pop(0)
        
        # Add left child
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        
        # Add right child
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    
    return root

def main():
    solution = Solution()
    
    # Example 1
    root1 = build_tree([1, 2, 3, 4, 5, 6, None, None, None, 7, 8])
    root2 = build_tree([1, 3, 2, None, 6, 4, 5, None, None, None, None, 8, 7])
    result1 = solution.flipEquiv(root1, root2)
    print(f"Example 1: {result1}")  # Expected: True
    
    # Example 2
    root1 = build_tree([])
    root2 = build_tree([])
    result2 = solution.flipEquiv(root1, root2)
    print(f"Example 2: {result2}")  # Expected: True
    
    # Example 3
    root1 = build_tree([])
    root2 = build_tree([1])
    result3 = solution.flipEquiv(root1, root2)
    print(f"Example 3: {result3}")  # Expected: False

if __name__ == "__main__":
    main() 