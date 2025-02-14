# JavaScript + operator unexpected behavior with strings and numbers
This repository demonstrates an unexpected behavior of the + operator in JavaScript when used with a mix of strings and numbers. The + operator performs string concatenation instead of arithmetic addition when one of the operands is a string. 

## Bug Description
The + operator in JavaScript behaves differently when used with strings and numbers. When one of the operands is a string, the + operator performs string concatenation, instead of arithmetic addition.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Run the code. Observe the outputs for different combinations of string and number inputs.

## Solution
The solution to this issue involves using the Number() function to convert strings to numbers before performing arithmetic operations, or using the parseInt() function for integer values.