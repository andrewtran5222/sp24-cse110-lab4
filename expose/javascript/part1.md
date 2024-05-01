1. Line 9 prints out '20'. There is no apparent error.
2. Line 13 prints out '20'. There is no apparent error.
3. Line 9 prints out '20'. There is no apparent error.
4. Line 13 returns a ReferenceError. This is because the variable 'result' is not defined outside of the scope of the if statement, due to the 'let' keyword. 
5. Line 9 returns a TypeError. This is because the variable 'result' is a constant, meaning a new valuee cannot be assigned to it. 
6. Line 13 returns a ReferenceError. This is because the variable 'result' is not defined outside of the scope of the if statement, due to the 'const' keyword. 
