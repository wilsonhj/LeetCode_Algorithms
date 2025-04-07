class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class Solution:
    def insert(self, head: 'Node', insertVal: int) -> 'Node':
        newNode = Node(insertVal)
        # Handle the empty list case
        if not head:
            newNode.next = newNode
            return newNode
        
        curr = head
        while True:
            # Regular case: insertVal fits between curr and curr.next.
            if curr.val <= insertVal <= curr.next.val:
                break
            
            # Boundary case: at the transition from the maximum to the minimum.
            if curr.val > curr.next.val:
                # insertVal is either greater than the maximum or less than the minimum.
                if insertVal >= curr.val or insertVal <= curr.next.val:
                    break
            
            curr = curr.next
            # Completed one full cycle without finding a spot.
            if curr == head:
                break
        
        # Insert the new node.
        newNode.next = curr.next
        curr.next = newNode
        return head
