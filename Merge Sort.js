/*         Merge Sort Pseducode

->  Break up the array into halves until you have arrays that are empty or hava one element.

->  Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.

-> Once the array has been merged back together, return the merged (and sorted!) array. */

let arrays = []
function mergeSort(arr) {
    let halfLength = (arr.length - 1) / 2;
    arrays.push(arr.slice(0, Math.floor(halfLength)));
    arrays.push(arr.slice(Math.floor(halfLength), arr.length));
}

mergeSort([1, 3, 2, 8, 67, 23, 34, 54, 12])
console.log(arrays)