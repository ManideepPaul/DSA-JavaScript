//Q: Write a function called minSubArrayLen, which acceptts two parameters an array of positive integers and a positive number. The function should return minimum length of subarray of which the sum is greater or equal to the number provided and if there isn't one return 0.

//Hint taken from Colt Steele's solution.

function minSubArrayLen(arr, num){
    let first = 0; //This will slide forward as required number is found.
    let temp = 0; //This will hold the sum of the elements after every iteration.
    let len = arr.length; //This will be the final lenght of which will be returned.
    let sec = 0; //This will help to iterate over the array.

    
    while(first < arr.length){

        //If the temp is smaller then add one more element to temp and increment the sec
        if(temp < num && sec < arr.length){
            temp += arr[sec];
            sec++;
        }
        //If the temp is greater or equal to the num then keep the length in len variable and subtract the first one from the temp and increment first  
        else if(temp >= num){
            len = Math.min( len, sec - first);
            temp -= arr[first];
            first++ ;
        }
        //If after adding the whole array still the sum is not equal or greater than num then break
        else break;
    }
    //If len is equal to the starting value then return 0 or return value of len
    return len === arr.length ? 0 : len
}

minSubArrayLen([2,1,6,5,4], 9)



//This is my solution but one test case not passing in the solution.
function minSubArrayLen(arr, num){
    let first = 0; //This will slide forward as required number is found.
    let temp = 0; //This will hold the sum of the elements after every iteration.
    let len = arr.length; //This will be the final lenght of which will be returned.
    let preLen = 0;

    if(arr[first] >= num) return 1;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num) return 1;
        
        if(temp < num){
            temp += arr[i];
        }
        //temp += arr[i];
        if(temp >= num){
            preLen = (i - first);
            len = Math.min( len, preLen);
            temp -= arr[first];
            first++ ;
            
        }
    }
    return ((len === arr.length) ? 0 : len); 
}

//minSubArrayLen([1,4,16,22,5,7,8,9,10], 52)
//minSubArrayLen([2,1,6,5,4], 9)
//minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
minSubArrayLen([2,3,1,2,4,3], 7)
