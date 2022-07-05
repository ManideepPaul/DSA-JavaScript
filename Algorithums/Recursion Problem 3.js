//Q: Write a function called productOfArray which takes in an array of number and returns th eproduct of them all.


//Got the hint from the lectures of recursion for this solution
function productOfArray(array) {
    let num = 1;

    function pro(arr){
        if(arr.length === 0) return;
        num = num * arr[0];
        return pro(arr.slice(1))
    }
    pro(array)
    return num;
}

productOfArray([1,2,3])


//Colt steele's solution.
function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1,2,3])
