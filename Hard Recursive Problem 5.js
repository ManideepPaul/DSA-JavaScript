//Q: Write a function to capitalize the first letter of the every string given in an array.


//This is iterative approch.
function capitalizeFirst(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = a[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr;
}

capitalizeFirst(['car','taco','banana'])