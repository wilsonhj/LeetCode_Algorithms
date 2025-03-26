from typing import List
import bisect

class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        # Sort both arrays
        houses.sort()
        heaters.sort()
        
        # Initialize the result
        min_radius = 0
        
        # For each house, find the minimum distance to a heater
        for house in houses:
            # Binary search to find the closest heaters
            idx = bisect.bisect_left(heaters, house)
            
            # Distance to the heater on the left (if exists)
            left_dist = float('inf')
            if idx > 0:
                left_dist = house - heaters[idx-1]
            
            # Distance to the heater on the right (if exists)
            right_dist = float('inf') 
            if idx < len(heaters):
                right_dist = heaters[idx] - house
            
            # Take the minimum of the two distances
            curr_min_dist = min(left_dist, right_dist)
            
            # Update the global minimum radius
            min_radius = max(min_radius, curr_min_dist)
        
        return min_radius

# Test cases
if __name__ == "__main__":
    sol = Solution()
    
    # Example 1
    houses1 = [1, 2, 3]
    heaters1 = [2]
    print(sol.findRadius(houses1, heaters1))  # Output: 1
    
    # Example 2
    houses2 = [1, 2, 3, 4]
    heaters2 = [1, 4]
    print(sol.findRadius(houses2, heaters2))  # Output: 1
    
    # Example 3
    houses3 = [1, 5]
    heaters3 = [2]
    print(sol.findRadius(houses3, heaters3))  # Output: 3 