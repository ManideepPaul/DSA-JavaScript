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