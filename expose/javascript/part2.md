1. Line 12 prints out '3', which is the value of the increment variable of the for loop (which is equal to the size of the inputted array).
2. Line 13 prints out '150', which is the discounted value of the last element in the array. 
3. Line 14 prints out '150', which is the rounded discounted value of the final element in the array. 
4. The function returns '[50, 10, 150]', the discounted values of the inputted array. 
5. Line 12 returns a ReferenceError, since the variable 'i' is not defined outside of the for loop, due to the 'let' keyword.
6. Line 13 returns a ReferenceError, since the variable 'discountedPrice' is not defined outside of the for loop, due to the 'let' keyword.
7. Line 14 prints out '150', which is the rounded discounted value of the final element in the array. 
8. The function returns '[50, 10, 150]', the discounted values of the inputted array. 
9. Line 11 returns a ReferenceError, since the variable 'i' is not defined outside of the for loop, due to the 'let' keyword.
10. Line 12 prints out the length of the inputted array '3', which is a valid constant declared and initalized within the function.
11. The function returns '[50, 10, 150]', the discounted values of the inputted array. 
12A. student.name
12B. student["Grad Year"]
12C. student.greeting()
12D. student["Favorite Teacher"].name
12E. student.courseLoad[0]
13A. Outputs '32', since 2 is converted into a string and concatenated onto '3'.
13B. Outputs 1, since 3 is converted into an int and has 2 subtracted from it. 
13C. Outputs 3, since null is converted to 0 and is subtracted from 3.
13D. Outputs '3null', since null is converted into a string and concatenated onto '3'.
13E. Outputs 4, since true is converted to 1 and has 3 added to it.
13F. Outputs 0, since both false and null are converted to 0. 
13G. Outputs '3undefined', since undefined is converted to a string and is concatenated onto '3'.
13H. Outputs NaN, since undefined is attempted to be converted into an int, but is not a valid number. 
14A. Outputs true, since '2' is converted into an int and is > 1.
14B. Outputs false, since '2' is not lexicographically behind '12'. 
14C. Outputs true, since '2' is converted into an int and is = 2.
14D. Outputs false, since the === operator is used, and '2' is not strictly equal to 2.
14E. Outputs false, since true is converted to 1 and is < 2.
14F. Outputs true, since Boolean(2) computes to true, and is strictly equal to true.
15. == compares values after running possible conversions, while === strictly compares values without running conversions. 
17. The function returns [2, 4, 6], because when modifyArray is called with the array [1, 2, 3] and the doSomething function as the callback, it will iterate over each element of the array [1, 2, 3], apply the doSomething function to each element, and push the result into a new array.
19. The function instantly prints out 1, 4, and 3, then 2 after 1 second. The statements without setTimeout run first, and those with run after based on their timeout. 