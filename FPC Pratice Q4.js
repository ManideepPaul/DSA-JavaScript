//Q: Write a function called isSubsequence, which takes two string and checks whether the characters in the first string appears in second string in same order in the first.


//Using Multiple Pointer Patterns
function isSubsequence(str1, str2){
    let first = 0;

    for(let i = 0; i < str2.length; i++) {
        if(str1[first] === str2[i]){
            first++;
        }
        if(first === str1.length){
            return true
        }
    }
    return false;
}

isSubsequence('hello', 'hi hello world')
isSubsequence('abc', 'acb')