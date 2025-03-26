import math
from typing import List

class Solution:
    def visiblePoints(self, points: List[List[int]], angle: int, location: List[int]) -> int:
        # Points at the same location as our position are always visible
        same_pos_count = 0
        angles = []
        
        # Calculate polar angles for all points (except those at our location)
        for x, y in points:
            if x == location[0] and y == location[1]:
                same_pos_count += 1
            else:
                # Calculate angle in degrees
                curr_angle = math.atan2(y - location[1], x - location[0]) * 180 / math.pi
                # Normalize angle to [0, 360)
                curr_angle = (curr_angle + 360) % 360
                angles.append(curr_angle)
        
        # Sort angles
        angles.sort()
        
        # Duplicate angles by adding 360 degrees to handle wrapping around
        angles_ext = angles.copy()
        for ang in angles:
            angles_ext.append(ang + 360)
        
        # Sliding window to find maximum visible points
        max_visible = 0
        left = 0
        
        for right in range(len(angles_ext)):
            # Shrink window if it exceeds our field of view
            while left < right and angles_ext[right] - angles_ext[left] > angle:
                left += 1
            
            # Update maximum visible points
            max_visible = max(max_visible, right - left + 1)
        
        # Add points at the same position as our location
        return max_visible + same_pos_count


# Test cases
if __name__ == "__main__":
    sol = Solution()
    
    # Example 1
    points1 = [[2,1],[2,2],[3,3]]
    angle1 = 90
    location1 = [1,1]
    print(sol.visiblePoints(points1, angle1, location1))  # Output: 3
    
    # Example 2
    points2 = [[2,1],[2,2],[3,4],[1,1]]
    angle2 = 90
    location2 = [1,1]
    print(sol.visiblePoints(points2, angle2, location2))  # Output: 4

# Here's how it solves the problem:
# separate points into two categories:
# Points at the same position as our location (always visible)
# All other points
# For points not at our location, calculate their polar angles with respect to our position.
# sort these angles to find consecutive points in the viewing field.
# To handle the case where the viewing angle wraps around (crosses the 0° line), duplicate all angles by adding 360° to each.
# Using a sliding window approach, find the maximum number of points visible within our field of view (angle).
# Finally, add the points at our location to get the total maximum visible points.
# The solution has O(n log n) time complexity due to sorting and O(n) space complexity.