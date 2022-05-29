//Q: Write a function called findLongestSubstring, which takes a string and returns longest substring of all unique character.


//The solution is using Sliding Window Pattern and solution is by Colt Steele.
function findLongestSubstring(str) {
   let longest = 0;
   let seen = {};
   let start = 0;

   for(let i = 0; i < str.length; i++) {
    let char = str[i]

    //Checking if available in seen object then set the start value same as seen[char]'s value.
    if(seen[char]){
        start = Math.max(start, seen[char]);
    }

    //This check if the longest length then store the longest one in the longest variable.
    longest = Math.max(longest, i - start + 1);

    //Keeping the index of the variable to make sure we don't count it more than once.
    seen[char] = i + 1;
   }
   return longest;
}

findLongestSubstring('bbbbbb')

