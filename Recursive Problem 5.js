//Q: Write a function called fib which takes a number and returns the nth number of the Fibonacci sequence.

//This is Colt steele's solution.
function fib(num) {
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2)
}

fib(4)