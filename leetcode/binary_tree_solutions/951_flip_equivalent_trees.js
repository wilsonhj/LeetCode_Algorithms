/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Helper function to build a tree from an array representation
 * @param {Array} values
 * @return {TreeNode}
 */
function buildTree(values) {
    if (!values || values.length === 0) {
        return null;
    }
    
    const root = new TreeNode(values[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < values.length) {
        const node = queue.shift();
        
        // Add left child
        if (i < values.length && values[i] !== null) {
            node.left = new TreeNode(values[i]);
            queue.push(node.left);
        }
        i++;
        
        // Add right child
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    // If both are null, they are flip equivalent
    if (!root1 && !root2) {
        return true;
    }
    
    // If one is null but other is not, they are not flip equivalent
    if (!root1 || !root2) {
        return false;
    }
    
    // If root values are different, they are not flip equivalent
    if (root1.val !== root2.val) {
        return false;
    }
    
    // Check if trees are equivalent without flip
    const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    
    // Check if trees are equivalent with flip
    const withFlip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
    
    // Return true if either case works
    return noFlip || withFlip;
};

// Time complexity: O(min(n1, n2)) where n1 and n2 are the number of nodes in each tree
// Space complexity: O(min(h1, h2)) where h1 and h2 are the heights of the trees, due to recursion stack

// Example usage:
// const root1 = buildTree([1,2,3,4,5,6,null,null,null,7,8]);
// const root2 = buildTree([1,3,2,null,6,4,5,null,null,null,null,8,7]);
// const result = flipEquiv(root1, root2);  // Should return true 