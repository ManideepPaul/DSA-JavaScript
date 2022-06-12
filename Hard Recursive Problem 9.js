//Q: Write a function collectString. Which accepts an object and returns an array containing all the string values of the object.


//This is my solution using pure recursive method.
function collectStrings(obj1){
    let result = [];
    for(const key in obj1){
        if(typeof(obj1[key]) === 'string'){
            result.push(obj1[key])
        }
        if(typeof(obj1[key]) === 'object'){
            result = result.concat(collectStrings(obj1[key]))
        }
    }
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj)