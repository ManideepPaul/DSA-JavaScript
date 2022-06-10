//Q: Write a function to capitalize the first letter of the every string given in an array.


//This is iterative approch.
function capitalizeFirst(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = a[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr;
}

capitalizeFirst(['car','taco','banana'])

//This is my solution using Helper Method recursion.
function capitalizeFirst(arr){
    let result = [];
    function helper(arr2){
        if(arr2.length === 0) return;
        result.push(arr2[0][0].toUpperCase() + arr2[0].substring(1));
        helper(arr2.slice(1))
    }
    helper(arr);
    return result;
}

capitalizeFirst(['car','taco','banana'])

//This is using pure recursive method.
function capitalizeFirst(arr){
    let result = [];
    if(arr.length === 0) return result;
    result.push(arr[0][0].toUpperCase() + arr[0].substring(1))
    return result = result.concat(arr.slice(1))
}

capitalizeFirst(['car','taco','banana'])
