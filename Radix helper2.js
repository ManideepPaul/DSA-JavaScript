// Write a function to count digits in given numbers.

function count(num) {
    let step = 1;
    if( num < 10 ) return step;
    while( num >= 10 ){
        num = num - (num % 10);
        num = num / 10;
        step++;
    }
    return step;
}

console.log(count(123))

// Solution from stackoverflow
function countNumber(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(countNumber(12345))