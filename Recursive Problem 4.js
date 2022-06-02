//Q: Write a fuction recursiveRange which will take a number and add from 0 to the provided number.

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
}

recursiveRange(10)
 