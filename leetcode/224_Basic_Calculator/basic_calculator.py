\
class Solution:
    def calculate(self, s: str) -> int:
        """
        Evaluates a basic arithmetic expression string with '+', '-', '(', ')',
        non-negative integers, and spaces.

        Args:
            s: The expression string.

        Returns:
            The result of the evaluation.
        """
        stack = []
        result = 0
        current_number = 0
        sign = 1  # 1 for positive, -1 for negative

        for char in s:
            if char.isdigit():
                current_number = current_number * 10 + int(char)
            elif char == '+':
                result += sign * current_number
                current_number = 0
                sign = 1
            elif char == '-':
                result += sign * current_number
                current_number = 0
                sign = -1
            elif char == '(':
                # Push the current result and sign onto the stack
                stack.append(result)
                stack.append(sign)
                # Reset for the sub-expression
                result = 0
                sign = 1
            elif char == ')':
                # Evaluate the last number in the parenthesis
                result += sign * current_number
                current_number = 0

                # Pop the sign before the parenthesis
                result *= stack.pop()  # sign
                # Pop the result calculated before the parenthesis
                result += stack.pop()  # previous result

            # Ignore spaces ' '

        # Add the last number if any
        result += sign * current_number

        return result

# Example Usage (for testing locally)
if __name__ == '__main__':
    solver = Solution()
    print(f"Input: '1 + 1', Output: {solver.calculate('1 + 1')}") # Expected: 2
    print(f"Input: ' 2-1 + 2 ', Output: {solver.calculate(' 2-1 + 2 ')}") # Expected: 3
    print(f"Input: '(1+(4+5+2)-3)+(6+8)', Output: {solver.calculate('(1+(4+5+2)-3)+(6+8)')}") # Expected: 23
    print(f"Input: ' -2 + 1 ', Output: {solver.calculate(' -2 + 1 ')}") # Expected: -1
    print(f"Input: '-(3+2)+5', Output: {solver.calculate('-(3+2)+5')}") # Expected: 0
    print(f"Input: '1-(     -2)', Output: {solver.calculate('1-(     -2)')}") # Expected: 3
