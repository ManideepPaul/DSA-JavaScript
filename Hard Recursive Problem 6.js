//Q: Write a function nestedEvenSum. Which returns sum of all even numbers in an object which might contain nested object.


//This is solved using helper method recursion.
function nestedEvenSum(obj) {
    let sum = 0;
    function helper(obj1) {
        for (const key in obj1) {
            if (typeof (obj1[key] === 'number')) {
                if (obj1[key] % 2 === 0) {
                    sum += obj1[key];
                }
            }
            if (typeof (obj1[key]) === 'object') {
                helper(obj1[key])
            }
        }
    }
    helper(obj)
    return sum;
}

let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

nestedEvenSum(obj1)