//Q: Write a recursive function which accepts a string and returns string in reverse order.


//This is my solution with out any hint or help.
function reverse(str) {
    let strArr = [...str]
    let reqArr = []
    function rev(arr){
        if(arr.length === 0) return reqArr;
        reqArr.push(arr.pop());
        rev(arr)
    }
    rev(strArr)
    return reqArr.join('');
}

reverse('hello')