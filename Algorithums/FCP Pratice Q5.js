//Q: Write a function maxSubarraySum, which takes a array and a number. Find the maximum sum of consecutive elements of given array with the length of provided number.

function maxSubarraySum(arr, num){
    if(arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum;
}

maxSubarraySum([100,200,300,400], 2)