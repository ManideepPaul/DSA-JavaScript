//Q: Write a function called stringifyNumbers. Which accepts a object and finds the number in it and converts them into strings.

//This is my solution. In this solution the given object is modified.
function stringifyNumbers(obj) {
    for (let key in obj){
        if(typeof(obj[key]) === "number") {
            obj[key] = obj[key].toString()
        }
        if(typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
            stringifyNumbers(obj[key])
        }
    }
    return obj;
}

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj1)