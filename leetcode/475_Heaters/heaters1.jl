# Julia solution for LeetCode 475: Heaters
# This solution finds the minimum radius needed for heaters to warm all houses

# Function to find the minimum radius needed for heaters to warm all houses
# houses: Array of house positions
# heaters: Array of heater positions
# Returns: Minimum radius needed
function findRadius(houses::Vector{Int}, heaters::Vector{Int})::Int
    # Sort both arrays (Julia's sort! modifies the array in-place)
    sort!(houses)
    sort!(heaters)
    
    # Initialize the result
    min_radius = 0
    
    # For each house, find the minimum distance to a heater
    for house in houses
        # Find the insertion point in heaters array using binary search
        # searchsortedfirst returns the index where house should be inserted
        idx = searchsortedfirst(heaters, house)
        
        # Distance to the heater on the left (if exists)
        left_dist = typemax(Int)
        if idx > 1
            left_dist = house - heaters[idx-1]
        end
        
        # Distance to the heater on the right (if exists)
        right_dist = typemax(Int)
        if idx <= length(heaters)
            right_dist = heaters[idx] - house
        end
        
        # Take the minimum of the two distances
        curr_min_dist = min(left_dist, right_dist)
        
        # Update the global minimum radius
        min_radius = max(min_radius, curr_min_dist)
    end
    
    return min_radius
end

# Test cases
function run_tests()
    # Example 1
    houses1 = [1, 2, 3]
    heaters1 = [2]
    println("Example 1: ", findRadius(houses1, heaters1))  # Expected output: 1
    
    # Example 2
    houses2 = [1, 2, 3, 4]
    heaters2 = [1, 4]
    println("Example 2: ", findRadius(houses2, heaters2))  # Expected output: 1
    
    # Example 3
    houses3 = [1, 5]
    heaters3 = [2]
    println("Example 3: ", findRadius(houses3, heaters3))  # Expected output: 3
end

# Run the tests if this file is executed directly
if abspath(PROGRAM_FILE) == @__FILE__
    run_tests()
end 