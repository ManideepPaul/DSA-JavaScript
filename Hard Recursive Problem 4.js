//Q: Write a function called flatten which accepts array of arrays and returns new array with all value flattened.


//This is my solution.
function flatten(arr){
    let newArr = [];

    function helper(arr2){
        if(arr2.length === 0) return;
        if(typeof(arr2[0]) === 'object'){
            helper(arr2[0])
        }
        else {
            newArr.push(arr2[0])
        }
        helper(arr2.slice(1))
    }
    helper(arr)
    return newArr;
}

flatten([1,2,[2,4,[5,6]]])


