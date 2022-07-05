// Write a function to return digit at given place.

function getDigit(num, place) {
    let reqDigit;
    for(let i = 0; i <= place; i++) {
        reqDigit = num % 10
        num = (num - (num % 10)) / 10
    }
    return Math.abs(reqDigit);
}

console.log(getDigit(-234, 1))


// Solution from stackoverflow
function getDigit1(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit1(-234, 4))