/**
 * Binary search to find the insertion point for the target value
 * @param {number[]} arr - Sorted array
 * @param {number} target - Value to find insertion point for
 * @return {number} Index where target should be inserted
 */
function bisectLeft(arr, target) {
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    // Sort both arrays
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    
    // Initialize the result
    let minRadius = 0;
    
    // For each house, find the minimum distance to a heater
    for (const house of houses) {
        // Binary search to find the closest heaters
        const idx = bisectLeft(heaters, house);
        
        // Distance to the heater on the left (if exists)
        let leftDist = Infinity;
        if (idx > 0) {
            leftDist = house - heaters[idx - 1];
        }
        
        // Distance to the heater on the right (if exists)
        let rightDist = Infinity;
        if (idx < heaters.length) {
            rightDist = heaters[idx] - house;
        }
        
        // Take the minimum of the two distances
        const currMinDist = Math.min(leftDist, rightDist);
        
        // Update the global minimum radius
        minRadius = Math.max(minRadius, currMinDist);
    }
    
    return minRadius;
};

// Test cases
function runTests() {
    // Example 1
    const houses1 = [1, 2, 3];
    const heaters1 = [2];
    console.log(findRadius(houses1, heaters1));  // Output: 1
    
    // Example 2
    const houses2 = [1, 2, 3, 4];
    const heaters2 = [1, 4];
    console.log(findRadius(houses2, heaters2));  // Output: 1
    
    // Example 3
    const houses3 = [1, 5];
    const heaters3 = [2];
    console.log(findRadius(houses3, heaters3));  // Output: 3
}

runTests(); 