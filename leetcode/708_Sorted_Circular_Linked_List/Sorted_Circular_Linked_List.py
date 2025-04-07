class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class Solution:
    def insert(self, head: 'Optional[Node]', insertVal: int) -> 'Node':
        if not head:
            new_node = Node(insertVal)
            new_node.next = new_node
            return new_node
        
        insert = False

        prev, curr = head, head.next

        while True:
            if prev.val <= insertVal <= curr.val:
                insert = True
            elif prev.val > curr.val:
                if insertVal >= prev.val or insertVal <= curr.val:
                    insert = True
            if insert:
                prev.next = Node(insertVal, curr)
                return head
            
            prev, curr = curr, curr.next
            if prev == head:
                break
        
        prev.next = Node(insertVal, curr)
        return head

# class Solution:
#     def insert(self, head: 'Node', insertVal: int) -> 'Node':
#         newNode = Node(insertVal)
#         # Handle the empty list case
#         if not head:
#             newNode.next = newNode
#             return newNode
        
#         curr = head
#         while True:
#             # Regular case: insertVal fits between curr and curr.next.
#             if curr.val <= insertVal <= curr.next.val:
#                 break
            
#             # Boundary case: at the transition from the maximum to the minimum.
#             if curr.val > curr.next.val:
#                 # insertVal is either greater than the maximum or less than the minimum.
#                 if insertVal >= curr.val or insertVal <= curr.next.val:
#                     break
            
#             curr = curr.next
#             # Completed one full cycle without finding a spot.
#             if curr == head:
#                 break
        
#         # Insert the new node.
#         newNode.next = curr.next
#         curr.next = newNode
#         return head
