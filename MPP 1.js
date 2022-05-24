// PSP - PROBLEM SOLVING PATTERNS


//Q. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//MPP 1 - MULTIPLE POINTER PATTERNS

//First approach
//Time complexity O(n^2)
//Space complexity O(1)

function sumZero(arr) {
    for(let ele of arr){
        for(let pair of arr){
            if(ele + pair === 0) {
                return([ele, pair])
            }
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3])


//Second approach using Multiple Pointer Patterns
//Time complexity O(n)
//Space complexity O(1)

function sumZero(arr) {
    let first = 0;
    let last = arr.length - 1;
    while(first < last){
        let sum = arr[first] + arr[last]
        if( sum === 0){ 
            return ([arr[first], arr[last]])
        } else if(sum > 0) {
            last--
        } else {
            first++
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,9,10])