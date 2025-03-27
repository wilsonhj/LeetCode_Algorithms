function findRadius(houses::Vector{Int}, heaters::Vector{Int})
    # Sort the houses and heaters arrays
    sort!(houses)
    sort!(heaters)

    radius = 0

    # For each house, find the minimum distance to a heater using binary search
    for house in houses
        left = 1
        right = length(heaters)

        while left <= right
            mid = div(left + right, 2)  # Integer division
            if heaters[mid] < house
                left = mid + 1
            else
                right = mid - 1
            end
        end

        # 'left' is the index of the first heater >= house
        dist1 = (left <= length(heaters)) ? abs(heaters[left] - house) : Inf
        dist2 = (right >= 1) ? abs(house - heaters[right]) : Inf
        minDist = min(dist1, dist2)
        radius = max(radius, minDist)
    end

    return radius
end

# Example usage:
println(findRadius([1, 2, 3], [2]))       # Output: 1
println(findRadius([1, 2, 3, 4], [1, 4]))   # Output: 1
println(findRadius([1, 5], [2]))            # Output: 3


# Key improvements and explanations for the Julia version:

# Type Annotations: Julia benefits from type annotations (e.g., houses::Vector{Int}). This helps the compiler optimize the code and provides better error checking.
# sort!: Uses the in-place sorting function sort! which is generally more efficient than creating a new sorted array.
# Integer Division: Uses div(left + right, 2) for integer division, which is crucial for the binary search to work correctly. // also works for integer division.
# Inf: Uses Inf for representing infinity, which is the standard way in Julia.
# min and max: Uses Julia's built-in min and max functions.
# Indexing: Julia arrays are 1-indexed, so the binary search starts with left = 1 and checks left <= length(heaters) and right >= 1.
# Conciseness: Julia's syntax allows for more concise code while maintaining readability.
# Performance: Julia is a just-in-time (JIT) compiled language, which means it can optimize the code during runtime. The type annotations further help the compiler. The in-place sorting and efficient built-in functions contribute to better performance.
# Removed unnecessary Math. prefix: Julia's standard library functions like abs, min, and max are directly accessible without the Math. prefix.
# This Julia version is more idiomatic, efficient, and takes advantage of Julia's features for optimal performance. It directly addresses the requirements of the problem while being well-suited for Julia's runtime environment.
