/**
 * Definition for _Node.
 */
/**
 * Definition for _Node.
 */
class _Node {
    val: number
    next: _Node | null

    constructor(val?: number, next?: _Node | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function insert(head: _Node | null, insertVal: number): _Node | null {
    const newNode = new ListNode(insertVal);

    // Case 1: Empty list
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }

    let prev = head;
    let curr = head.next;
    
    while (true) {
        // Case 2: Normal insertion point found
        if (prev.val <= insertVal && insertVal <= curr.val) {
            break;
        }

        // Case 3: Inserting at the boundary (min/max point)
        if (prev.val > curr.val) {
            if (insertVal >= prev.val || insertVal <= curr.val) {
                break;
            }
        }

        prev = curr;
        curr = curr.next;

        // Case 4: Full cycle, all values same, or no insertion point found
        if (prev === head) break;
    }

    // Insert the new node
    prev.next = newNode;
    newNode.next = curr;

    return head;
}