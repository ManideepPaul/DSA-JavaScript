//Q: Write a function called sameFrequency, Give two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){
    if(num1.length !== num2.length) return false;

    num1 = String(num1).split('')
    num2 = String(num2).split('')

    let first = {};
    let second = {};

    for(let a of num1){
        first[a] = (first[a] || 0) + 1;
    }

    for(let b of num2){
        second[b] = (second[b] || 0) + 1;
    }

    for(let key in first) {
        if(!(key in second)) return false;

        if(first[key] !== second[key]) return false;
    }
    return true;
}

sameFrequency(182, 281)