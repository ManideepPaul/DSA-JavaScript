/*         Merging array pseducode

-> Create an empty array, take a look at the smallest values in each input array.

-> While there are still values we haven't looked at
    -> If the value in the first array is smallest than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.

    -> If the value in the first array is larger than the value in the second array, push the value in the second array into out result and move onto the next value in the second array.

    -> Once we axhuast one array, push in all remaining value from the other array. */


// This is my solution using recursion.
let result = [];
function mergeArray(arr1, arr2){
    if(arr1.length === 0){
        result.push(...arr2)
        console.log(result)
        return result
    }
    else if(arr2.length === 0) {
        result.push(...arr1)
        console.log(result)
        return result
    }
    if(arr1[0] < arr2[0]) {
        result.push(arr1[0]);
        arr1.splice(0, 1)
    }
    else {
        result.push(arr2[0]);
        arr2.splice(0, 1)
    }
    mergeArray(arr1, arr2)
}

mergeArray([0,1,4,8,9], [2,3,5,23,34,97])

// Solved using iteration, got hint from Colt Steele's solution.
function mergeArray1(arr1, arr2){
    let result1 = []
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] <= arr2[0]){
            result1.push(arr1[0]);
            arr1.splice(0, 1)
        } else {
            result1.push(arr2[0]);
            arr2.splice(0, 1)
        }
    }
    if(arr1.length === 0 && arr2.length > 0){
        result1.push(...arr2)
    }
    else if(arr2.length === 0 && arr1.length > 0){
        result1.push(...arr1)
    }
    console.log(result1)
}

mergeArray1([0,1,4,8,9], [2,3,5,23,34,97])