// Import the solution functions (or include them directly in this file)
const { TreeNode, buildTree, flipEquiv } = (() => {
    // TreeNode definition
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    // Build tree function
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

    // Solution function
    function flipEquiv(root1, root2) {
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
    }

    return { TreeNode, buildTree, flipEquiv };
})();

// Test cases
function runTests() {
    // Example 1
    const root1 = buildTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]);
    const root2 = buildTree([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]);
    const result1 = flipEquiv(root1, root2);
    console.log(`Example 1: ${result1}`);  // Expected: true
    
    // Example 2
    const root3 = buildTree([]);
    const root4 = buildTree([]);
    const result2 = flipEquiv(root3, root4);
    console.log(`Example 2: ${result2}`);  // Expected: true
    
    // Example 3
    const root5 = buildTree([]);
    const root6 = buildTree([1]);
    const result3 = flipEquiv(root5, root6);
    console.log(`Example 3: ${result3}`);  // Expected: false
}

// Run the tests
runTests(); 