// PSP - PROBLEM SOLVING PATTERNS

//Q. Write a function called same which accepts two array. The function should return true if every value in the array has it's corresponding value squared on the second array. The frequency of the value must be the same.

// PSP 1 - FREQUENCY COUNTER PATTERN.

//First approach(Big 0(n^2)) because of nested loop.

function same(arr1, arr2) {
    //check for the lenght of arrays
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let currElement = arr2.indexOf(arr1[i] ** 2);
        if(currElement === -1){
            return false;
        }
        arr2.splice(currElement, 1);
    }
    return true;
}

same([1,2,3,4,], [9,1,4,16,])

//Second approach using (FREQUENCY COUNTERS) (Big 0(n)) there is no nested loop.

function same(arr1, arr2) {

    //Make two objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //loop over each array and put the values into object
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    //Now match for required value in arr1 and arr2
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

same([1,2,3,4,], [9,1,4,16,])