// PSP - PROBLEM SOLVING PATTERNS

//Q. Given two string, write a function to determine if the second string is an anagram of the first.

// PSP 1 - FREQUENCY COUNTER PATTERNS

//First approch using FQP (solved by myself) Big 0(n) but it contains three loop

function validAnagram(str1, str2) {

    let firstObject = {};
    let secondObject = {};

    for(let char of str1) {
        firstObject[char] = (firstObject[char] || 0) + 1;
    }
    for(let char of str2) {
        secondObject[char] = (secondObject[char] || 0) + 1;
    }

    console.log(firstObject)
    console.log(secondObject)

    for(let key in firstObject){
        if(!(key in secondObject)){
            return false
        }
        if(firstObject[key] !== secondObject[key]){
            return false
        }
    }
    return true
}

validAnagram('iceman', 'cinema')

// Second approch (by Colt steele) Big O(n) it contains only two loops.

function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }

    let obj = {}

    for(let char of str1) {
        //if exist increment 1 otherwise set to 1
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }

    for(let char of str2) {
        //If not in object then not anagram
        if(!obj[char]){
            return false
        } else {
            //If exist then subtract the value of obj[key]
            obj[char] -= 1
        }
    }
    return true;
}

validAnagram('iceman', 'cinema')