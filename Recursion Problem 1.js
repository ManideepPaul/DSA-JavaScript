//Q: Write a function power which accepts a base and an exponent. The function should return the power of the base to the exponent.


//Simple solution but not using recursion
function power(base, exponent) {
    return base**exponent;
}

//This is not my solution get it from comments.
function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base, exponent-1);
}