//Q: Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks wether there are any duplicates among the arguments passed in.

//Using Multiple Pointer Pattern
function areThereDuplicates(...args){

    //Sorting the input according to their type.
    if(typeof(args) === Number){
        args.sort((a,b) => (a - b))
    } else {
        args.sort();
    }
    let first = 0;
    for(let i = 1; i < args.length; i++){
        if(args[first] === args[i]){
            return true;
        } else {
            first++
        }
    }
    return false;
}

areThereDuplicates('a','b','c','a')

//Using Frequency Counter Pattern
function areThereDuplicates() {
    
    let obj = {};
    for(let char of arguments){
        obj[char] = (obj[char] || 0) + 1;
    }
    
    for(let key in obj) {
        if(obj[key] > 1){
            return true;
        }
    }
    return false;
}

areThereDuplicates('a','b','c','a')

//One Line solution 
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

areThereDuplicates('a','b','c','a')