//Sorting the array using selection sort.
function selectionSort(arr) {
    let smallest;
    for(let i = 0; i < arr.length; i++){
        smallest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[smallest] > arr[j]){
                smallest = j
            }
        }
        if(smallest !== i){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        }
    }
    return console.log(arr)
}

selectionSort([2,1,3,89,67,4,7])