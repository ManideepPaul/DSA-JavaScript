// PSP - PROBLEM SOLVING PATTERNS


//Q. Implement a function called countUniqueValues, which accepts a shorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//MPP 2 - MULTIPLE POINTER PATTERNS

//First approach (solved my myself) hint given by steele colt
//Time complexity O(n)
//Space complexity O(1)

function countUniqueValues(arr){
    let first = 0;
    let second = 1;
    if(arr.length === 0) {
        return 0;
    }
    while(second < arr.length){
        if(arr[first] === arr[second]){
            second++;
        } else {
            first++;
            arr[first] = arr[second];
            console.log(arr);
        }
    }
    return (first + 1);
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

//Second approch this is by Steele colt
//Time complexity O(n)
//Space complexity O(1)

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;

    let f = 0;
    for(let s = 1; s < arr.length; s++){
        if(arr[f] !== arr[s]){
            f++;
            arr[f] = arr[s];
        }
    }
    return (f + 1)
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])