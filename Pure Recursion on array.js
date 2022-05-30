//Q: Find the odd values in the given array.

function collectiveOddValues(arr) {
    // result getting re-initialize to empty array every time
    let result = []

    if (arr.length === 0) {
        return result;
    }

    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    //But on every time this recursive function calls itself the result is waiting for the "result.concat" which will be resolved after the base case is met. After this the it concats the all array in result array and returns it.
    result = result.concat(collectiveOddValues(arr.slice(1)));
    return result;
}

collectiveOddValues([1,2,3,4,5,6])