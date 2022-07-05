//Q: Write a recursive function called someRecursive which accepts an array and a callback. The function should return true if single element of the array returns true when passed to the callback. Otherwise it returns false.

//This is solved by the help of Colt Steele's solution.
const isOdd = value => value % 2 !== 0;

function someRecursive(array, callback) {
    if(array.length === 0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1), callback)
}

someRecursive([1,2,3,4], isOdd)

