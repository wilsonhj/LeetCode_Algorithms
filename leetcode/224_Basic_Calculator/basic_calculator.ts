function calculate(s: string): number {
    const stack: number[] = [];
    let result: number = 0;
    let currentNumber: number = 0;
    let sign: number = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') continue;
        if (char >= '0' && char <= '9') {
            // Build the current number
            currentNumber = currentNumber * 10 + parseInt(char, 10);
        } else if (char === '+') {
            // Process the previous number
            result += sign * currentNumber;
            // Reset for the next number
            currentNumber = 0;
            sign = 1;
        } else if (char === '-') {
            // Process the previous number
            result += sign * currentNumber;
            // Reset for the next number
            currentNumber = 0;
            sign = -1;
        } else if (char === '(') {
            // Push the current result and sign onto the stack
            stack.push(result);
            stack.push(sign);
            // Reset for the sub-expression inside the parenthesis
            result = 0;
            sign = 1;
        } else if (char === ')') {
            // Process the last number inside the parenthesis
            result += sign * currentNumber;
            currentNumber = 0;

            // Pop the sign that was before the '(' from the stack
            const prevSign = stack.pop();
            if (prevSign !== undefined) {
                 result *= prevSign;
            }
            // Pop the result that was calculated before the '(' from the stack
            const prevResult = stack.pop();
             if (prevResult !== undefined) {
                result += prevResult;
             }

        } 
        // Ignore spaces ' '
    }

    // Add the last number if the string doesn't end with ')'
    if (currentNumber !== 0) {
        result += sign * currentNumber;
    }

    return result;
};

// Example Usage (for testing locally)
console.log(`Input: '1 + 1', Output: ${calculate('1 + 1')}`); // Expected: 2
console.log(`Input: ' 2-1 + 2 ', Output: ${calculate(' 2-1 + 2 ')}`); // Expected: 3
console.log(`Input: '(1+(4+5+2)-3)+(6+8)', Output: ${calculate('(1+(4+5+2)-3)+(6+8)')}`); // Expected: 23
console.log(`Input: ' -2 + 1 ', Output: ${calculate(' -2 + 1 ')}`); // Expected: -1
console.log(`Input: '-(3+2)+5', Output: ${calculate('-(3+2)+5')}`); // Expected: 0
console.log(`Input: '1-(     -2)', Output: ${calculate('1-(     -2)')}`); // Expected: 3
