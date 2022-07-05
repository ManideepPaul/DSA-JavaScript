//Q: Write a function binarySearch, which accepts a sorted array and a number and returns the index of the given number or return -1.

//Solved with out any hint only got the pseducode from the lecture.
function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let center = Math.floor((left + right) / 2);
        if (arr[center] < num) left = center + 1;
        else if (arr[center] > num) right = center - 1;
        else return center;
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5], 0)