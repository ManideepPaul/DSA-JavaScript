//Q: Write a function to search a word in the given staring.


//Solved using Colt steele's help.
function stringSearch(str, word) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < word.length; j++){
            if(word[j] !== str[i+j]) break; 
            if(j === word.length - 1) count++;
        }
    }
    return count;
}

stringSearch("hello", 'he')