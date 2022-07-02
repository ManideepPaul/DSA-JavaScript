// Write a function to return digit at given place.

function getDigit(num, place) {
    let reqDigit;
    for(let i = 0; i <= place; i++) {
        reqDigit = num % 10
        num = (num - (num % 10)) / 10
    }
    return reqDigit;
}

console.log(getDigit(4, 4))