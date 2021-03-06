/*         Merge Sort Pseducode

->  Break up the array into halves until you have arrays that are empty or hava one element.

->  Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.

-> Once the array has been merged back together, return the merged (and sorted!) array. */

                            // Visual diagram how the code is working

//   10.                                     [1,2,3,8]
//   1.                             mergeSort([1, 3, 2, 8])
//   5.              [1,3]             merge        9.              [2,8] 
//   2.         mergeSort([1,3])                    6.          mergeSort([2,8])
//   4.  [1]         merge       [3]                8.   [2]         merge          [8]
//   3. mergeSort([1])   mergeSort([3])             7. mergeSort([2])    mergeSort([8])  

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let halfLength = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, halfLength));
    let right = mergeSort(arr.slice(halfLength));
    return mergeArray1(left , right);
}

console.log(mergeSort([1, 3, 2, 8, 67, 23, 34, 54, 12]))

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
    return result1;
}

