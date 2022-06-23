//  Insertion Sort Pseudocode

// => Start by picking the second element in the array.
// => Now compare the second element with the one before it and swap if necessary.
// => Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct palce.
// => Repeat until the array is sorted.

//I don't know that if this is following insertion sort or not.
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return console.log(arr)
}

insertionSort([3,8,2,12,90,34,23,])