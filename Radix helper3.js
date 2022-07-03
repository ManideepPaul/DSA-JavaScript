// Write a function which takes array and returns the count of digits in the largest number in the array.

function mostDigits(arr) {
    let maxCount = 0;
    arr.forEach(ele => countNumber(ele));
    function countNumber(num) {
        let count = 0;
        if (num === 0) return 1;
        count = Math.floor(Math.log10(Math.abs(num))) + 1;
        if (maxCount < count) return maxCount = count;
    }
    return maxCount;
}

console.log(mostDigits([12, 345, 76584]))

/*****************************************************/

function countNumber(num) {
    if (num === 0) return 1;
    count = Math.floor(Math.log10(Math.abs(num))) + 1;
    return count;
}

function mostNum(arr) {
    let reqNum = 0;
    arr.forEach(ele => reqNum = Math.max(reqNum, countNumber(ele)))
    return reqNum;
}

console.log(mostNum([12, 345, 765846]))