//A sorting algorithm where the largest value bubble up to the top.

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    // return arr;
    return console.log(arr);
}

bubbleSort([3,1,9,10,6,77,43])