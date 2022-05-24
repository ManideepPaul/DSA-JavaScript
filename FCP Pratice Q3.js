//Q: Write a function averagePair. Given a sorted array of integers and a target average, determine if there is a pair of value in the array where the average of the pair equals the target average.


//Using Multiple Pointer Pattern
function averagePair(arr, num){
    let first = 0;
    let last = arr.length - 1;

    while(first < last){
        if((arr[first] + arr[last]) / 2 === num){
            return true;
        }
        else if((arr[first] + arr[last]) / 2 > num){
            last--;
        } 
        else if((arr[first] + arr[last]) / 2 < num){
            first++;
        }
    }
    return false;
}

averagePair([1,2,3], 2.5);