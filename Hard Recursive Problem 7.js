//Q: Write a function capitalizeWords. Which accepts an array of string and returns an array having all charactors capitalize.

function capitalizeWords(arr) {
    let result = [];
    if(arr.length === 0) return result;
    let word = arr[0].toUpperCase() ;
    result.push(word);
    return result = result.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];