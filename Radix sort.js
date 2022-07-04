/*                     Radix Sort Pseudocode

->  Define a function that accepts list of numbers. 
->  Figure out how many digits the largest number has. 
->  Loop from k = 0 upto this largest number of digits. 
->  For each iteration of the loop:
    ->  Create buckets for each digits (0 to 9)
    ->  Place each number in the corresponding buckets based on its kth digit. 
->  Replace our existing array with value in our buckets, starting with 0 and going up to 9. 
->  Return list at the end 
 */


// Counts digits of a number
function countNumber(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Counts digits of largest number
function mostNum(arr) {
    let reqNum = 0;
    arr.forEach(ele => reqNum = Math.max(reqNum, countNumber(ele)))
    return reqNum;
}

// Gives number of the provided number accouding to the place
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(arr){

    // Get the highest count of digit in a number
    let digitCount = mostNum(arr);

    // Run this loop equal to the digitCount
    for( let k = 0; k < digitCount; k++){
        let reqArr = Array.from({length: 10}, () => []) // This will create 10 subarrays in "reqArr"
        for( let i = 0; i < arr.length; i++){

            // Getting the value of digit in required place.
            let digitValue = getDigit(arr[i], k)

            // Pushing the array according to their place value
            reqArr[digitValue].push(arr[i])
        }

        // Then assigining the rearranged arrays in a new array
        arr = [].concat(...reqArr)
    }
    return arr
}

console.log(radixSort([765846, 12, 345]))