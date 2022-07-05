//Q Write a function linearSearch. Which takes a array and a number and returns the index of the number if found in array otherwise returns -1.

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

linearSearch([1,2,3,4,5], 4)