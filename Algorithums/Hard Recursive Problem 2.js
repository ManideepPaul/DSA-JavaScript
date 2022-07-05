//Q: Write a function isPalindrome which returns true if the passed function is a palnidrome.

//This is my first solution.
function isPalindrome(str) {
    let rev = '';
    function reverse(str2){
        if(str2.length === 0) return rev;
        return rev = reverse(str2.slice(1)) + str2[0]
    }
    reverse(str)
    if(str === rev) return true;
    else return false;
}

isPalindrome('not')


//This is my second solution.
function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1, -1))//This will eleminate first and the last element.
    }
    else return false;
}

isPalindrome('not')