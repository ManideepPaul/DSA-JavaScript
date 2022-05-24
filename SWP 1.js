// PSP - PROBLEM SOLVING PATTERNS


//Q. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//SWP 1 - SLIDING WINDOW PATTERNS

//First approach
//Time complexity O(n^2)

function maxSubarraySum(arr, num){
    if(arr.length < num){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(max < temp){
            max = temp;
        }
    }
    return max;
}

maxSubarraySum([1,2,3,4,9,8,5],3)

//Second approach using Sliding Window Patterns
//Time complexity O(n)

function maxSubarraySum(arr, num) {

    //Check for the length of array and if it is smaller than num then return zero.
    if(arr.length < num) return null;

    let maxNum = 0;
    let tempNum = 0;

    //Add the number from starting of the array till the nth number for once.
    for(let i = 0; i < num; i++) {
        maxNum += arr[i];
    }

    tempNum = maxNum;
    //Now remove one element from the first and add one element after the last one.
    for(let i = num; i < arr.length; i++){
        tempNum = tempNum - arr[i - num] + arr[i];
        maxNum = Math.max(tempNum, maxNum)
    }
    return maxNum;
}

maxSubarraySum([1,2,3,4,9,8,5],3)