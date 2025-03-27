/**
 * Problem: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 */

/**
 * Approach 1: Using sorted string as key (Original Solution)
 * Time Complexity: O(n * k * log k) where n is number of strings, k is max length
 * Space Complexity: O(n * k)
 */
function groupAnagrams1(strs) {
    const anagramMap = new Map();
    
    for (const s of strs) {
        const sortedStr = s.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(s);
    }
    
    return Array.from(anagramMap.values());
}

/**
 * Approach 2: Using character count as key (More Efficient)
 * 
 * This approach is more efficient than sorting because:
 * 1. avoid the expensive sorting operation (O(k log k))
 * 2. just need to count characters (O(k))
 * 3. The key generation is more straightforward
 * 
 * How it works:
 * 1. For each string, create an array of 26 zeros (one for each letter)
 * 2. count the frequency of each character in the string
 * 3. join these counts with a separator to create a unique key
 * 4. Strings with the same character frequencies will have the same key
 * 
 * Example:
 * For "eat":
 * - count = [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
 * - key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"
 * 
 * For "tea":
 * - count = [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
 * - key = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"
 * 
 * Time Complexity: O(n * k) where:
 * - n is the number of strings in the input array
 * - k is the maximum length of a string
 * 
 * Space Complexity: O(n * k) where:
 * - need to store all strings in the hash map
 * - The key for each string is O(k) in length
 */
function groupAnagrams2(strs) {
    // Create a Map to store groups of anagrams
    // The key will be the character count string
    // The value will be an array of strings that are anagrams
    const anagramMap = new Map();
    
    // Iterate through each string in the input array
    for (const s of strs) {
        // Create an array of 26 zeros to count frequency of each letter
        // Index 0 represents 'a', 1 represents 'b', and so on
        const count = new Array(26).fill(0);
        
        // Count the frequency of each character in the string
        for (const char of s) {
            // Convert character to 0-based index (a=0, b=1, etc.)
            // charCodeAt(0) gets the ASCII code of the character
            // Subtracting 'a'.charCodeAt(0) gives us the 0-based index
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        // Create a key by joining the counts with a separator
        // This ensures that strings with the same character frequencies
        // will have the same key
        const key = count.join('#');
        
        // If this key doesn't exist in our map, create a new array for it
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        
        // Add the original string to the array associated with this key
        anagramMap.get(key).push(s);
    }
    
    // Convert the map values to an array and return
    return Array.from(anagramMap.values());
}

/**
 * Approach 3: Using prime numbers (Alternative Solution)
 * Time Complexity: O(n * k) where n is number of strings, k is max length
 * Space Complexity: O(n * k)
 * 
 * This approach uses prime numbers to create unique keys for anagrams.
 * Each letter is assigned a unique prime number, and the product of these
 * numbers will be the same for anagrams.
 */
function groupAnagrams3(strs) {
    // Assign prime numbers to each letter
    const primes = {
        'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19,
        'i': 23, 'j': 29, 'k': 31, 'l': 37, 'm': 41, 'n': 43, 'o': 47,
        'p': 53, 'q': 59, 'r': 61, 's': 67, 't': 71, 'u': 73, 'v': 79,
        'w': 83, 'x': 89, 'y': 97, 'z': 101
    };
    
    const anagramMap = new Map();
    
    for (const s of strs) {
        let key = 1;
        for (const char of s) {
            key *= primes[char];
        }
        
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(s);
    }
    
    return Array.from(anagramMap.values());
}

// Test cases
const testCases = [
    ["eat","tea","tan","ate","nat","bat"],
    [""],
    ["a"]
];

console.log("Approach 1 (Sorted String):");
testCases.forEach(test => console.log(groupAnagrams1(test)));

console.log("\nApproach 2 (Character Count):");
testCases.forEach(test => console.log(groupAnagrams2(test)));

console.log("\nApproach 3 (Prime Numbers):");
testCases.forEach(test => console.log(groupAnagrams3(test))); 