/*                     Quicksort Pseudocode

->  Call the pivot helper on the array 

->  When the helper returns to you the updated pivot index, recursively call helper on the subarray to the left of that index, and the subarray to the right of the index.
 */

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[start] > arr[i]) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right) {
        let pivotValue = pivot(arr, left, right)
    
        //Left side
        quickSort(arr, left, pivotValue - 1)
    
        //Right side
        quickSort(arr, pivotValue + 1, right)
    }
    return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))
