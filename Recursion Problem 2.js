//Q: Write a function which accepts a number and returns the factorial of that number.


//This is my solution.
function factorial(num) {
    //This checks the base case and returns 1 and factorial of 0 is always 1.
    if(num === 1 || num === 0) return 1;
    return num * factorial(num-1);
}