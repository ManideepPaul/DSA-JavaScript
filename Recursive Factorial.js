//Q: Factorial means factorial of "4" is 4*3*2*1 and factorial of "5" of 5*4*3*2*1

function factorial(num) {
    if(num === 1) return 1;
    return num *= factorial(num-1); 
}

factorial(3)